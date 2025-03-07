"use client"

import Footer from '@/components/common/Footer'
import Navigation from '@/components/landingpage/Navigation'
import React from 'react'
import { privacyPolicy } from '../data'

export default function page() {
  return (
    <div className=' download w-screen h-auto flex flex-col items-center justify-center'
    style={{backgroundImage: "url('/pd/BG.png')", backgroundSize: "cover", backgroundPosition: "bottom", backgroundRepeat:"no-repeat"}}
    
    >
        <div className=' max-w-[1920px] flex flex-col items-center justify-start gap-10 w-screen h-auto pb-20'
        style={{backgroundImage: "url('/pd/BG.png')", backgroundSize: "cover", backgroundPosition: "bottom", backgroundRepeat:"no-repeat"}}
        >
        <Navigation/>

        <div className=' w-[80%] md:w-[50%] h-auto flex flex-col gap-6 items-center justify-center mt-12 lg:mt-5'>
            <h2 className=' text-xxl 2xl:text-2xl font-bold text-orange-50'>Privacy Policy</h2>

            <div className=' w-full flex flex-col gap-2 overflow-y-auto'>
              <p className=' text-sm font-semibold text-orange-100 '>Welcome to Rise of Fearless. Your privacy is important to us. This Privacy Policy explains how we collect, use, share, and protect your information when you use our game. By accessing Rise of Fearless, you agree to the practices described in this policy.
              </p>

              {privacyPolicy.map((item, index) => (
                <div key={index} className=' flex flex-col gap-2'>
                  <p className=' text-sm font-semibold text-orange-200 mt-4'>{item.title}</p>
                  <p className=' text-zinc-300 text-xs whitespace-pre-wrap'>{item.content}</p>
                </div>
              ))}

                

                

                
            </div>

             
          

        </div>

        </div>
        <Footer/>
    </div>
  )
}
