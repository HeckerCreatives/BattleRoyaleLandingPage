"use client"
import Footer from '@/components/common/Footer'
import Navigation from '@/components/landingpage/Navigation'
import React from 'react'
import { termsAndConditions } from '../data'

export default function page() {
  return (
    <div className=' download w-screen h-auto flex flex-col items-center justify-center'
    style={{backgroundImage: "url('/pd/BG.png')", backgroundSize: "cover", backgroundPosition: "bottom", backgroundRepeat:"no-repeat"}}
    
    >
        <div className=' max-w-[1920px] flex flex-col items-center justify-start gap-10 w-screen h-auto pb-20 '
        style={{backgroundImage: "url('/pd/BG.png')", backgroundSize: "cover", backgroundPosition: "bottom", backgroundRepeat:"no-repeat"}}
        >
        <Navigation/>

        <div className=' w-[80%] md:w-[50%] h-auto flex flex-col gap-6 items-center justify-center mt-12 lg:mt-5'>
            <h2 className=' text-xl 2xl:text-2xl font-bold text-orange-50 text-center'>Terms and Conditions</h2>

            <div className=' w-full flex flex-col gap-4  overflow-y-auto'>
                <p className=' text-orange-100 text-xs text-start whitespace-pre-wrap'>Welcome to Rise of Fearless! These Terms and Conditions (“Terms”) govern your access and use of Rise of Fearless (the “Game” or “Service”), operated by SeventyTwoNinety LLC (“we,” “us,” or “our”).</p>

                <p className=' text-orange-100 text-xs text-start whitespace-pre-wrap mb-8'>By accessing, downloading, or playing Rise of Fearless, you agree to be bound by these Terms. If you do not agree, you must not use the Game.
                </p>

                {termsAndConditions.map((item, index) => (
                  <div key={index} className=' w-full flex flex-col gap-2'>
                    <p className=' text-sm font-semibold text-orange-200 text-start'>{item.title}</p>
                    <p className=' text-zinc-300 text-xs text-start whitespace-pre-wrap'>{item.content}</p>
                  </div>
                ))}


              
            </div>

             
          

        </div>

        </div>
        <Footer/>
    </div>
  )
}
