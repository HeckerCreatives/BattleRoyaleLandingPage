"use client"

import React from 'react'
import {motion} from 'framer-motion'
import { fadeIn } from '@/lib/variant'
import { Link } from 'lucide-react'
import Navbar from './Navbar'

export default function Hero() {
  return (
    <div className=' h-[100dvh] lg:h-[screen] w-screen flex flex-col items-center justify-center text-white'
    style={{backgroundImage: "url('/v2/header/assets/BG B.png')", backgroundSize: "cover", backgroundPosition: "center", backgroundRepeat:"no-repeat"}}
    >
      <Navbar/>
        {/* <div className=' w-full max-w-[1920px] flex flex-col gap-5 items-center justify-center'>
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
            
            
        </div> */}

        <div className=' hidden fixed right-0 z-50  bottom-8 lg:flex flex-col items-center justify-center gap-2 rounded-l-lg bg-amber-900 2xl:w-20 xl:w-16 lg:w-14 py-6'>
         
          <a href='https://web.facebook.com/'>
            <img src="/v2/header/assets/FB.png" alt=""  width={70} className=' 2xl:w-[60px] xl:w-[40px] lg:[40px] hover:scale-110 ease-in-out duration-300'/>

        </a>

          <a href='https://discord.com/'>
          <img src="/v2/header/assets/Discord.png" alt="" width={70} className=' 2xl:w-[60px] xl:w-[40px] lg:[40px] hover:scale-110 ease-in-out duration-300' />

        </a>

          <a href='https://www.tiktok.com/'>
          <img src="/v2/header/assets/Tiktok.png" alt="" width={70} className=' 2xl:w-[60px] xl:w-[40px] lg:[40px] hover:scale-110 ease-in-out duration-300' />

        </a>

        <a href='https://web.telegram.org/'>
          <img src="/v2/header/assets/Telegram.png" alt="" width={70} className=' 2xl:w-[60px] xl:w-[40px] lg:[40px] hover:scale-110 ease-in-out duration-300' />

        </a>

        </div>

        <div className='relative max-w-[1920px] w-[90%] lg:w-[78%] h-[80%] flex items-end justify-end py-20'>
          <img src="/v2/header/assets/Character.png" alt="" width={520} className=' lg:w-[260px] xl:w-[280px] 2xl:w-[380px] absolute right-0 bottom-0 z-20 lg:block hidden' />

          <div className=' relative h-[90%] grid grid-cols-1 lg:grid-cols-2 rounded-lg'
        style={{backgroundImage: "url('/v2/header/assets/BG A.png')", backgroundSize: "cover", backgroundPosition: "center", backgroundRepeat:"no-repeat"}}
        >
          <div className=' flex flex-col justify-center md:p-14 p-4'>
            <h2 className=' text-2xl 2xl:text-6xl font-bold'>LOREM IPSUM</h2>
            <p className=' text-sm 2xl:text-lg text-orange-100 font-semibold mt-4'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>

            {/* <div className=' w-full flex items-center justify-end mt-4'>
              <p className=' px-8 py-1 text-sm font-bold bg-gradient-to-r from-orange-300 to-orange-400 text-amber-950 rounded-md shadow-black drop-shadow-md'>READ MORE</p>
            </div> */}

            <div className=' flex justify-center items-center gap-2 mt-6'>
              <img src="/astore.png" alt="" width={200} className=' 2xl:w-[200px] w-[120px]' />
              <img src="/gp.png" alt="" width={200} className=' 2xl:w-[200px] w-[120px]' />

            </div>
          </div>

          {/* <div className=' w-full h-full relative'>
            <img src="/v2/header/assets/Character.png" alt="" width={500} className=' absolute right-0 bottom-0 z-20' />
          </div> */}

          </div>
        </div>

        
       

    </div>
  )
}
