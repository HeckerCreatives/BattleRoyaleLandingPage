"use client"
import NavbarUser from '@/components/NavbarUser'
import Footer from '@/sections/Footer'
import Navbar from '@/sections/Navbar'
import React from 'react'

export default function page() {
  return (
    <div className=' relative download w-screen h-screen flex flex-col items-center justify-start'
    style={{backgroundImage: "url('/pd/BG.png')", backgroundSize: "cover", backgroundPosition: "bottom", backgroundRepeat:"no-repeat"}}
    
    >
        <div className=' max-w-[1920px] flex flex-col items-center justify-center gap-10 w-screen '
        style={{backgroundImage: "url('/pd/BG.png')", backgroundSize: "cover", backgroundPosition: "bottom", backgroundRepeat:"no-repeat"}}
        >
        <Navbar/>

        <div className=' w-[60%] h-[500px] flex flex-col gap-6 items-center justify-center'>
            <h2 className=' text-4xl font-bold text-orange-200'>Play Game</h2>
            <p className=' text-sm text-orange-100 text-center'>"Rise of Fearless is now available for download. Discover a new world of adventure and challenges. Play anytime, anywhere, on your mobile device. Download it today on Google Play Store and iOS."</p>

            <div className=' flex justify-center items-center gap-2 mt-6 clear-start bg-orange-300 p-2 rounded-lg'>
              <a href="https://apps.apple.com/ph/app/rise-of-fearless/id6739428806" target="_blank">
                <img src="/astore.png" alt="" width={200} className=' 2xl:w-[200px] w-[120px] drop-shadow-md shadow-white' />
              </a>
              <a href="https://play.google.com/store/apps/details?id=com.riseoffearless.games" target="_blank">
              <img src="/gp.png" alt="" width={200} className=' 2xl:w-[200px] w-[120px]' />

              </a>

            </div>

        </div>

        </div>
        <Footer/>
    </div>
  )
}
