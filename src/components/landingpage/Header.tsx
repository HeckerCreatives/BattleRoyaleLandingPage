'use client'

import React, { useEffect, useRef } from 'react'
import { useRouter } from 'next/navigation';
import axios, { AxiosError } from 'axios';
import Navigation from './Navigation';
import { motion } from 'framer-motion';

interface Content {
  id: string,
  title: string,
  description: string,
  link: string,
}

export default function HeroSection() {
  const router = useRouter()
  const [data, setData] = React.useState<Content[]>([])
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(()=>{
    const headerData = async () => {
      try {
        const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/content/getcontent?type=header&limit=1`, {
            withCredentials: true,
            headers: { 'Content-Type': 'application/json' }
        });
        setData(response.data.data);
      } catch (error) {
        if (axios.isAxiosError(error)) {
          const axiosError = error as AxiosError;
          if (axiosError.response?.status === 401) {
            localStorage.setItem('auth', 'false');
            router.push('/');
          }
        }
      }
    }
    headerData()
  }, [])

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const CLIP_DEPTH = 64

    // ── Easing functions (t: 0→1) ─────────────────────────────
    const easings = {
      linear:          (t: number) => t,
      easeOutQuad:     (t: number) => 1 - (1 - t) * (1 - t),
      easeOutCubic:    (t: number) => 1 - Math.pow(1 - t, 3),
      easeOutQuart:    (t: number) => 1 - Math.pow(1 - t, 4),
      easeOutQuint:    (t: number) => 1 - Math.pow(1 - t, 5),
      easeOutCirc:     (t: number) => Math.sqrt(1 - Math.pow(t - 1, 2)),
      easeOutExpo:     (t: number) => t === 1 ? 1 : 1 - Math.pow(2, -10 * t),
      easeOutElastic:  (t: number) => t === 0 ? 0 : t === 1 ? 1 : Math.pow(2, -10 * t) * Math.sin((t * 10 - 0.75) * (2 * Math.PI) / 3) + 1,
      easeInOutQuad:   (t: number) => t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2,
      easeInOutCubic:  (t: number) => t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2,
      easeInOutQuint:  (t: number) => t < 0.5 ? 16 * t * t * t * t * t : 1 - Math.pow(-2 * t + 2, 5) / 2,
      easeInOutCirc:   (t: number) => t < 0.5 ? (1 - Math.sqrt(1 - Math.pow(2 * t, 2))) / 2 : (Math.sqrt(1 - Math.pow(-2 * t + 2, 2)) + 1) / 2,
    }

    // ── Change this to switch easing ──────────────────────────
    const EASING = easings.easeOutQuad
    // ──────────────────────────────────────────────────────────

    const resize = () => {
      canvas.width = canvas.offsetWidth
      canvas.height = canvas.offsetHeight
    }

    // Y position on the V-line for a given X within the canvas
    const getVY = (x: number): number => {
      const w = canvas.width
      const h = canvas.height
      const half = w / 2
      return x <= half
        ? (h - CLIP_DEPTH) + (x / half) * CLIP_DEPTH
        : (h - CLIP_DEPTH) + ((w - x) / half) * CLIP_DEPTH
    }

    type Ember = {
      spawnX: number; spawnY: number
      x: number; y: number
      prevX: number; prevY: number
      vx: number
      totalRise: number
      r: number; life: number; maxLife: number
      hue: number
      spin: number; spinSpeed: number
    }

    const embers: Ember[] = []
    const COLORS = [30, 25, 20, 15, 40] // orange/amber hues (HSL hue)
    const getMax = () => Math.round(canvas.width / 10)

    const spawn = (): Ember => {
      const x = Math.random() * canvas.width
      const spawnY = getVY(x) - 2
      const maxLife = 200 + Math.random() * 200
      return {
        spawnX: x, spawnY,
        x, y: spawnY,
        prevX: x, prevY: spawnY,
        vx: (Math.random() - 0.5) * 0.4,
        totalRise: 120 + Math.random() * 320,
        r: 0.4 + Math.random() * 1.2,
        life: 0,
        maxLife,
        hue: COLORS[Math.floor(Math.random() * COLORS.length)],
        spin: 0,
        spinSpeed: (Math.random() - 0.5) * 0.06,
      }
    }

    let raf: number
    const tick = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      if (embers.length < getMax()) embers.push(spawn())

      for (let i = embers.length - 1; i >= 0; i--) {
        const e = embers[i]
        e.life++
        if (e.life >= e.maxLife) { embers.splice(i, 1); continue }

        const t = e.life / e.maxLife
        e.y = e.spawnY - e.totalRise * EASING(t)
        e.x = e.spawnX + e.vx * e.life + Math.sin(e.life * 0.04) * 3

        // Direction angle from actual movement vector
        const dx = e.x - e.prevX
        const dy = e.y - e.prevY
        const dirAngle = Math.atan2(dy, dx) + Math.PI / 2
        e.spin += e.spinSpeed
        const rotation = dirAngle + e.spin
        e.prevX = e.x
        e.prevY = e.y

        // stay bright longer, fade only in the last 35%
        const alpha = t < 0.65 ? 0.88 : ((1 - t) / 0.35) * 0.88
        const radius = e.r * (1 - t * 0.55)

        ctx.save()
        ctx.translate(e.x, e.y)
        ctx.rotate(rotation)
        ctx.shadowBlur = radius * 8
        ctx.shadowColor = `hsl(${e.hue}, 100%, 60%)`

        // Fading trail in local space (downward = behind direction of travel)
        const trailLen = radius * 5
        const grad = ctx.createLinearGradient(0, 0, 0, trailLen)
        grad.addColorStop(0, `hsla(${e.hue}, 100%, 60%, ${alpha})`)
        grad.addColorStop(1, `hsla(${e.hue}, 100%, 40%, 0)`)
        ctx.strokeStyle = grad
        ctx.lineWidth = Math.max(radius * 1.1, 0.8)
        ctx.lineCap = 'round'
        ctx.beginPath()
        ctx.moveTo(0, 0)
        ctx.lineTo(0, trailLen)
        ctx.stroke()

        // Bright teardrop head
        ctx.globalAlpha = alpha
        ctx.fillStyle = `hsl(${e.hue + t * 15}, 100%, ${65 + t * 20}%)`
        ctx.beginPath()
        ctx.ellipse(0, 0, Math.max(radius * 0.55, 0.4), Math.max(radius * 1.1, 0.6), 0, 0, Math.PI * 2)
        ctx.fill()
        ctx.restore()
      }

      raf = requestAnimationFrame(tick)
    }

    resize()
    window.addEventListener('resize', resize)
    tick()

    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('resize', resize)
    }
  }, [])

  return (
    <div className='relative z-0 flex flex-col items-center w-full h-[100dvh] max-h-[1080px]'
      style={{ backgroundImage: "url('/investor/assets/bg/hero.png')", backgroundSize:'cover', backgroundRepeat:'no-repeat', backgroundPosition:'center', clipPath: 'polygon(0 0, 100% 0, 100% calc(100% - 64px), 50% 100%, 0 calc(100% - 64px))' }}>
      <div className='w-full h-full bg-gradient-to-b from-zinc-950 via-zinc-950/40 to-zinc-950/0 absolute' />

      <Navigation/>

      <div className='relative z-10 w-full h-full flex flex-col items-center justify-center gap-5 px-6 text-center'>
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ type: "spring", stiffness: 30, damping: 10, mass: 1, delay: 0 }}
          className='text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold max-w-[900px] text-white leading-tight drop-shadow-lg'>
          {data[0]?.title}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ type: "spring", stiffness: 30, damping: 10, mass: 1, delay: .2 }}
          className='text-sm sm:text-base md:text-lg lg:text-xl max-w-[680px] text-amber-100 leading-relaxed'>
          {data[0]?.description}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ type: "spring", stiffness: 30, damping: 10, mass: 1, delay: .4 }}
          className='mt-2'>
          <a href="/download">
            <button className='uppercase bg-gradient-to-r from-orange-500 to-orange-700 px-10 py-3 text-sm sm:text-base md:text-lg rounded-md font-bold text-amber-50 hover:scale-110 ease-in-out duration-200 shadow-lg shadow-orange-900/50'>
              Download Now
            </button>
          </a>
        </motion.div>
      </div>

      {/* Fiery embers canvas — spawns along the V-shape divider */}
      <canvas
        ref={canvasRef}
        className='absolute bottom-0 left-0 w-full h-[500px] z-10 pointer-events-none'
      />
    </div>
  )
}
