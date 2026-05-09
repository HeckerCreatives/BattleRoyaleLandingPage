'use client'

import React, { useEffect, useState } from 'react'
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { Menu } from 'lucide-react';
import { navigation } from '@/app/data';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import { IoDownload, IoLogOut } from 'react-icons/io5';
import { RiAccountBoxFill, RiTwitterXLine } from 'react-icons/ri';
import { FaInstagram, FaTelegram } from 'react-icons/fa6';

interface Links {
  _id: string
  title: string
  createdAt: string
  updatedAt: string
  link: string
}

export default function Navigation() {
  const router = useRouter()
  const [auth, setAuth] = useState<string | null>(null);
  const [name, setName] = useState('')
  const [list, setList] = useState<Links[]>([])

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const storedAuth = localStorage.getItem('auth');
      if (storedAuth === null) {
        localStorage.setItem('auth', 'false');
        setAuth('false');
      } else {
        setAuth(storedAuth);
      }
    }
  }, []);

  const logoutUser = () => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('auth', 'false');
      setAuth('false');
      router.push('/');
    }
  };

  useEffect(() => {
    const handleHashChange = (url: any) => {
      const { hash } = new URL(url, window.location.origin);
      if (hash) {
        const element = document.querySelector(hash);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    };
    handleHashChange(window.location.href);
  }, []);

  useEffect(() => {
    const playerData = async () => {
      try {
        const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/user/getuserdetails`, {
          withCredentials: true,
          headers: { 'Content-Type': 'application/json' },
        })
        setName(response.data.data.username)
      } catch (error) {}
    }
    playerData()
  }, [])

  useEffect(() => {
    const fetchlinks = async () => {
      try {
        const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/sociallinks/getsociallinksa?filter=user`);
        setList(response.data.data)
      } catch (error) {}
    };
    fetchlinks();
  }, []);

  const getImage = (type: string) => {
    if (type === 'instagram') {
      return <FaInstagram size={28} className='text-orange-300 hover:text-orange-400 hover:scale-110 ease-in-out duration-300' />
    } else if (type === 'x') {
      return <RiTwitterXLine size={28} className='text-orange-300 hover:text-orange-400 hover:scale-110 ease-in-out duration-300' />
    } else {
      return <FaTelegram size={28} className='text-orange-300 hover:text-orange-400 hover:scale-110 ease-in-out duration-300' />
    }
  }

  return (
    <nav className='relative w-full h-[80px] flex items-center shrink-0'
      style={{ background: 'linear-gradient(to bottom, rgba(10,5,0,0.96) 0%, rgba(20,8,0,0.92) 100%)' }}
    >
      {/* Top orange glow line */}
      <div className='absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-orange-500 to-transparent' />

      {/* Bottom border with glow */}
      <div className='absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-orange-600/60 to-transparent' />

      {/* Left tribal accent — two diagonal stripes */}
      <div className='absolute left-0 top-0 bottom-0 flex items-stretch overflow-hidden w-[6px]'>
        <div className='w-[3px] bg-gradient-to-b from-orange-500 via-amber-600 to-transparent' />
        <div className='w-[3px] bg-gradient-to-b from-transparent via-orange-800/40 to-transparent ml-px' />
      </div>

      {/* Right tribal accent */}
      <div className='absolute right-0 top-0 bottom-0 flex items-stretch overflow-hidden w-[6px]'>
        <div className='w-[3px] bg-gradient-to-b from-transparent via-orange-800/40 to-transparent' />
        <div className='w-[3px] bg-gradient-to-b from-orange-500 via-amber-600 to-transparent ml-px' />
      </div>

      {/* Corner bracket — top left */}
      <div className='absolute top-0 left-0 w-8 h-8 pointer-events-none'>
        <div className='absolute top-0 left-0 w-full h-[2px] bg-orange-500' />
        <div className='absolute top-0 left-0 w-[2px] h-full bg-orange-500' />
      </div>

      {/* Corner bracket — top right */}
      <div className='absolute top-0 right-0 w-8 h-8 pointer-events-none'>
        <div className='absolute top-0 right-0 w-full h-[2px] bg-orange-500' />
        <div className='absolute top-0 right-0 w-[2px] h-full bg-orange-500' />
      </div>

      {/* Inner content */}
      <div className='relative z-10 w-full max-w-[1440px] mx-auto px-6 flex items-center justify-between h-full'>

        {/* Logo */}
        <a href="/" className='flex items-center gap-3 shrink-0'>
          <div className='relative'>
            <img src="/investor/logo.png" alt="logo" width={52} height={52} className='relative z-10 shrink-0' />
            <div className='absolute inset-0 bg-orange-500/20 blur-lg rounded-full pointer-events-none' />
          </div>
          <div className='hidden sm:flex flex-col leading-tight'>
            <span className='text-orange-400 font-bold text-[11px] tracking-[0.2em] font-dihjauti uppercase'>Rise of</span>
            <span className='text-amber-100 font-bold text-[13px] tracking-[0.15em] font-dihjauti uppercase'>Fearless</span>
          </div>
        </a>

        {/* Desktop nav links */}
        <div className='hidden lg:flex items-center gap-1 font-dihjauti'>
          {navigation.map((item, index) => (
            <React.Fragment key={index}>
              {index !== 0 && (
                <span className='text-orange-700/70 text-[8px] select-none px-1'>◆</span>
              )}
              <a href={item.path} className='relative group px-3 py-1'>
                <span className='relative z-10 text-[11px] font-bold tracking-[0.18em] uppercase text-amber-100/80 group-hover:text-orange-400 transition-colors duration-200'>
                  {item.name}
                </span>
                {/* Sliding underline */}
                <span className='absolute bottom-0 left-1/2 -translate-x-1/2 w-0 group-hover:w-4/5 h-px bg-orange-500 transition-all duration-300 ease-out' />
              </a>
            </React.Fragment>
          ))}
        </div>

        {/* Right side */}
        <div className='flex items-center gap-3'>

          {/* Desktop auth */}
          <div className='hidden lg:flex items-center'>
            {auth === 'false' && (
              <a href="/auth/login"
                className='relative flex items-center gap-2 px-5 py-[7px] text-[11px] font-bold tracking-[0.15em] uppercase font-dihjauti text-amber-950 bg-gradient-to-r from-orange-400 to-amber-500 hover:from-orange-300 hover:to-amber-400 transition-all duration-200 shadow-lg shadow-orange-900/30'
                style={{ clipPath: 'polygon(10px 0%, 100% 0%, calc(100% - 10px) 100%, 0% 100%)' }}
              >
                <span className='text-amber-900 text-[8px]'>▶</span>
                LOG IN
              </a>
            )}

            {auth === 'true' && (
              <Popover>
                <PopoverTrigger
                  className='flex items-center gap-2 px-3 py-2 border border-orange-500/30 bg-zinc-900/60 hover:border-orange-400/60 transition-all duration-200'
                  style={{ clipPath: 'polygon(8px 0%, 100% 0%, calc(100% - 8px) 100%, 0% 100%)' }}
                >
                  <img src="/assets/logo 06 B.png" alt="" width={32} className='hover:scale-110 ease-in-out duration-200' />
                  <div className='flex flex-col items-start'>
                    <p className='text-[11px] font-semibold text-amber-100 font-dihjauti'>{name}</p>
                    <p className='text-[9px] text-orange-500 tracking-widest uppercase font-dihjauti'>Player</p>
                  </div>
                </PopoverTrigger>
                <PopoverContent className='flex flex-col gap-4 w-auto bg-zinc-950 border border-orange-500/30 mt-3 p-6'>
                  <a href='/user' className='flex items-center gap-2 text-xs text-zinc-300 hover:text-orange-400 transition-colors duration-200'><RiAccountBoxFill size={16} />Account Management</a>
                  <a href='/download' className='flex items-center gap-2 text-xs text-zinc-300 hover:text-orange-400 transition-colors duration-200'><IoDownload size={16} />Download Game</a>
                  <p onClick={logoutUser} className='flex items-center gap-2 text-xs text-zinc-300 hover:text-orange-400 transition-colors duration-200 cursor-pointer'><IoLogOut size={16} />Log Out</p>
                </PopoverContent>
              </Popover>
            )}
          </div>

          {/* Mobile hamburger */}
          <Sheet>
            <SheetTrigger
              className='lg:hidden flex items-center justify-center w-10 h-10 border border-orange-500/50 bg-zinc-900/70 text-orange-400 hover:border-orange-400 hover:bg-zinc-800/80 transition-all duration-200'
              style={{ clipPath: 'polygon(4px 0%, 100% 0%, calc(100% - 4px) 100%, 0% 100%)' }}
            >
              <Menu size={20} />
            </SheetTrigger>

            <SheetContent
              className='bg-zinc-950 border-l border-orange-500/20 w-[300px]'
              style={{ backgroundImage: "url('/investor/assets/BG Pattern Solid.png')", backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundPosition: 'center' }}
            >
              <SheetHeader className='pt-4'>
                <SheetTitle className='flex items-center justify-center gap-3'>
                  <img src="/investor/logo.png" alt="logo" width={60} />
                  <div className='flex flex-col items-start'>
                    <span className='text-orange-400 font-bold text-xs tracking-widest font-dihjauti uppercase'>Rise of</span>
                    <span className='text-amber-100 font-bold text-sm tracking-widest font-dihjauti uppercase'>Fearless</span>
                  </div>
                </SheetTitle>
                <SheetDescription />
              </SheetHeader>

              {/* Divider */}
              <div className='w-full h-px bg-gradient-to-r from-transparent via-orange-500/60 to-transparent my-6' />

              <div className='flex flex-col items-center gap-4 px-4'>
                {navigation.map((item, index) => (
                  <a key={index} href={item.path}
                    className='w-full text-center py-3 text-[11px] font-bold tracking-[0.2em] uppercase font-dihjauti text-amber-100/80 hover:text-orange-400 border-b border-orange-500/15 hover:border-orange-500/40 transition-all duration-200'
                  >
                    {item.name}
                  </a>
                ))}

                <div className='w-full h-px bg-gradient-to-r from-transparent via-orange-500/60 to-transparent mt-2' />

                {auth === 'false' && (
                  <a href="https://strongwarrior.rof.game/"
                    className='w-full text-center mt-2 py-3 text-[11px] font-bold tracking-[0.2em] uppercase font-dihjauti text-amber-950 bg-gradient-to-r from-orange-400 to-amber-500 hover:from-orange-300 hover:to-amber-400 transition-all duration-200'
                    style={{ clipPath: 'polygon(10px 0%, 100% 0%, calc(100% - 10px) 100%, 0% 100%)' }}
                  >
                    LOG IN | REGISTER
                  </a>
                )}

                {auth === 'true' && (
                  <Popover>
                    <PopoverTrigger className='flex items-center gap-3 w-full justify-center border border-orange-500/30 px-4 py-3 bg-zinc-900/60 hover:border-orange-400/60 transition-all duration-200'>
                      <img src="/assets/logo 06 B.png" alt="" width={32} />
                      <div className='flex flex-col items-start'>
                        <p className='text-xs font-semibold text-amber-100 font-dihjauti'>{name}</p>
                        <p className='text-[9px] text-orange-500 uppercase tracking-widest font-dihjauti'>Player</p>
                      </div>
                    </PopoverTrigger>
                    <PopoverContent className='flex flex-col gap-4 w-auto bg-zinc-950 border border-orange-500/30 mt-2 p-6'>
                      <a href='/user' className='flex items-center gap-2 text-xs text-zinc-300 hover:text-orange-400'><RiAccountBoxFill size={16} />Account Management</a>
                      <a href='/download' className='flex items-center gap-2 text-xs text-zinc-300 hover:text-orange-400'><IoDownload size={16} />Download Game</a>
                      <p onClick={logoutUser} className='flex items-center gap-2 text-xs text-zinc-300 hover:text-orange-400 cursor-pointer'><IoLogOut size={16} />Log Out</p>
                    </PopoverContent>
                  </Popover>
                )}

                <div className='flex items-center justify-center gap-5 mt-6'>
                  {list.map((item) => (
                    <a key={item._id} href={item.link} target='_blank'>
                      {getImage(item.title)}
                    </a>
                  ))}
                </div>
              </div>
            </SheetContent>
          </Sheet>

        </div>
      </div>
    </nav>
  )
}
