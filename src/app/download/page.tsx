"use client"
import NavbarUser from '@/components/NavbarUser'
import Footer from '@/sections/Footer'
import Navbar from '@/sections/Navbar'
import React from 'react'
import { SiGoogledrive, SiMega, SiMicrosoftonedrive, SiDropbox } from 'react-icons/si'

const DOWNLOAD_LINKS = [
  {
    label: 'Google Drive',
    icon: SiGoogledrive,
    iconColor: 'text-yellow-400',
    href: 'https://drive.google.com/file/d/1Cs9f8x_kZphJad2eWlBzb8oJAn0TyU6t/view?usp=sharing',
  },
  {
    label: 'MEGA',
    icon: SiMega,
    iconColor: 'text-red-500',
    href: 'https://mega.nz/file/xYMAiQzK#RK1TluLIl9sAec_Y4mZlyN09cAlXvWJe1dMukyepG4g',
  },
  {
    label: 'OneDrive',
    icon: SiMicrosoftonedrive,
    iconColor: 'text-blue-400',
    href: 'https://1drv.ms/u/c/789398c68b116401/IQBQR7Uiby7SRbLMqOuZBI5TAZWnoZawQXBqBNaVlwzg4eQ?e=Z2q6NI',
  },
  {
    label: 'Dropbox',
    icon: SiDropbox,
    iconColor: 'text-sky-400',
    href: 'https://www.dropbox.com/scl/fi/vb8r1a0wjl9vz4l7vxfgy/riseoffearless.apk?rlkey=1kl8b8icww08nozsk5bu3xdt1&st=ph7a473e&dl=0',
  },
]

export default function Page() {
  return (
    <div className='relative download w-screen min-h-screen flex flex-col items-center justify-start'
      style={{ backgroundImage: "url('/pd/BG.png')", backgroundSize: 'cover', backgroundPosition: 'bottom', backgroundRepeat: 'no-repeat' }}
    >
      <div className='max-w-[1920px] flex flex-col items-center justify-center gap-10 w-screen'>
        <Navbar />

        <div className='w-full max-w-[700px] px-6 flex flex-col gap-6 items-center justify-center py-16'>
          <h2 className='text-4xl font-bold text-orange-200'>Play Game</h2>
          <p className='text-sm text-orange-100 text-center'>
            "Rise of Fearless is now available for download. Discover a new world of adventure and challenges. Play anytime, anywhere, on your mobile device."
          </p>

          {/* App store buttons */}
          <div className='flex justify-center items-center gap-2 mt-4 bg-orange-300 p-2 rounded-lg'>
            <a href="https://apps.apple.com/ph/app/rise-of-fearless/id6739428806" target="_blank">
              <img src="/astore.png" alt="App Store" width={200} className='2xl:w-[200px] w-[120px] drop-shadow-md' />
            </a>
            <a href="https://play.google.com/store/apps/details?id=com.riseoffearless.games" target="_blank" rel="noopener noreferrer">
              <img src="/gp.png" alt="Google Play" width={200} className='2xl:w-[200px] w-[120px]' />
            </a>
          </div>

          {/* Direct download buttons */}
          <div className='w-full flex flex-col gap-3 mt-4'>
            <p className='text-orange-300 text-sm font-semibold text-center tracking-widest uppercase'>Direct Download</p>
            <div className='flex flex-wrap justify-center gap-3'>
              {DOWNLOAD_LINKS.map(({ label, icon: Icon, iconColor, href }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className='flex items-center gap-3 px-5 py-3 rounded-xl bg-zinc-900 border border-zinc-700 hover:border-zinc-500 hover:bg-zinc-800 transition-all duration-200 shadow-md min-w-[180px]'
                >
                  <Icon size={28} className={`shrink-0 ${iconColor}`} />
                  <div className='flex flex-col'>
                    <span className='text-[10px] text-zinc-400 leading-none'>Download on</span>
                    <span className='text-sm font-bold text-white leading-snug'>{label}</span>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      <Footer />

    </div>
  )
}
