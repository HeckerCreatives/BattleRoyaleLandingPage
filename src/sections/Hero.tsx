"use client"

import React from 'react'
import {motion} from 'framer-motion'
import { fadeIn } from '@/lib/variant'
import { Link } from 'lucide-react'

export default function Hero() {
  return (
    <div className=' h-[100dvh] w-screen flex items-end lg:py-20 justify-center text-white'
    style={{backgroundImage: "url('/assets/header BG.png')", backgroundSize: "cover", backgroundPosition: "center", backgroundRepeat:"no-repeat"}}
    >
        <div className=' w-full max-w-[1920px] flex flex-col gap-5 items-center justify-center'>
             <motion.p 
             variants={fadeIn('up', .2)}
            initial='hidden'
            whileInView={'show'}
            viewport={{once:false, amount: 0.2}}
             className=' text-sm lg:text-sm xl:text-lg w-full px-4 lg:w-[70%] text-center'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</motion.p>

            <a href="#news">

              <button
            style={{backgroundImage: "url('/assets/button.png')", backgroundSize: "contain", backgroundPosition: "center", backgroundRepeat:"no-repeat"}}
            className=' h-32 w-[200px] lg:w-[250px] xl:w-[300px] text-lg lg:text-xl font-bold text-amber-950 hover:scale-110 ease-in-out duration-200' 
            >READ MORE</button>
            </a>
            
            
        </div>
       

    </div>
  )
}
