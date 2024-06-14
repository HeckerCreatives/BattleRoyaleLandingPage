"use client"

import NavbarUser from '@/components/NavbarUser'
import Footer from '@/sections/Footer'
import Navbar from '@/sections/Navbar'
import React from 'react'

export default function page() {
  return (
    <div className=' download w-screen h-auto flex flex-col items-center justify-start'
    style={{backgroundImage: "url('/pd/BG.png')", backgroundSize: "cover", backgroundPosition: "bottom", backgroundRepeat:"no-repeat"}}
    
    >
        <div className=' max-w-[1920px] flex flex-col items-center justify-start gap-10 w-screen h-auto pb-40 '
        style={{backgroundImage: "url('/pd/BG.png')", backgroundSize: "cover", backgroundPosition: "bottom", backgroundRepeat:"no-repeat"}}
        >
        <Navbar/>

        <div className=' w-[50%] h-[400px] flex flex-col gap-6 items-center justify-center mt-5'>
            <h2 className=' text-2xl 2xl:text-4xl font-bold text-orange-200'>Terms & Conditions</h2>

            <div className=' w-full flex flex-col gap-4 h-[400px] overflow-y-auto'>
                <p className=' text-orange-100 text-xs text-center'>Please read these terms and conditions ("terms and conditions", "terms") carefully before using Rise Of Fearless("service").</p>
                <p className=' text-zinc-300 text-sm'>Please be aware that the contents of this Money Monster Island are not intended as financial advice. Money Monster Island is an idle game designed for play-to-earn functionality, seamlessly integrating both crypto and fiat currencies. Development priorities, roadmaps, and features are subject to significant changes based on ongoing research and community feedback.</p>
            </div>
          

        </div>

        </div>
        <Footer/>
    </div>
  )
}
