"use client"
import React from 'react'
import { RiArrowRightDoubleLine } from "react-icons/ri";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import {motion} from 'framer-motion'
import { containerVariant, fadeIn } from '@/lib/variant';


export default function Section2() {
  return (
    <div id='games' className=' w-screen flex items-center justify-center h-auto py-20 lg:py-36'
    style={{backgroundImage: "url('/assets/section 2 BG.png')", backgroundSize: "cover", backgroundPosition: "center", backgroundRepeat:"no-repeat"}}
    >

        <motion.div 
         
        className=' max-w-[1920px] lg:grid grid-cols-3 gap-10 px-20 hidden'>
            <motion.div 
            className=' flex flex-col gap-5 w-full h-auto bg-[#A90B02] rounded-xl p-10 text-white'>
                <p className=' text-sm font-semibold'>11.11.18/ in <span className=' text-secondary'>GAMES</span></p>
                <h2 className='text-2xl font-bold'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</h2>
                <h2 className=' text-lg font-semibold text-zinc-200'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</h2>
                <h2 className=' flex items-center gap-4 text-2xl font-bold italic mt-5'>READ MORE <RiArrowRightDoubleLine size={50} className=' text-secondary'/></h2>
            </motion.div>


            <motion.div 
            className=' flex flex-col gap-5 w-full h-auto bg-[#A90B02] rounded-xl p-10 text-white'>
                <p className=' text-sm font-semibold'>11.11.18/ in <span className=' text-secondary'>GAMES</span></p>
                <h2 className='text-2xl font-bold'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</h2>
                <h2 className=' text-lg font-semibold text-zinc-200'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</h2>
                <h2 className=' flex items-center gap-4 text-2xl font-bold italic mt-5'>READ MORE <RiArrowRightDoubleLine size={50} className=' text-secondary'/></h2>
            </motion.div>

            <motion.div 
            className=' flex flex-col gap-5 w-full h-auto bg-[#A90B02] rounded-xl p-10 text-white'>
                <p className=' text-sm font-semibold'>11.11.18/ in <span className=' text-secondary'>GAMES</span></p>
                <h2 className='text-2xl font-bold'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</h2>
                <h2 className=' text-lg font-semibold text-zinc-200'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</h2>
                <h2 className=' flex items-center gap-4 text-2xl font-bold italic mt-5'>READ MORE <RiArrowRightDoubleLine size={50} className=' text-secondary'/></h2>
            </motion.div>
        </motion.div>

        <motion.div 
         variants={fadeIn('up', .2)}
        initial='hidden'
        whileInView={'show'}
        viewport={{once:false, amount: 0.2}}
        className=' block lg:hidden w-[90%]'>
             <Carousel>
            <CarouselContent>
                <CarouselItem>
                      <div className=' flex flex-col gap-5 w-full h-auto bg-[#A90B02] rounded-xl p-6 text-white'>
                        <p className=' text-sm font-semibold'>11.11.18/ in <span className=' text-secondary'>GAMES</span></p>
                        <h2 className=' text-xl font-bold'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</h2>
                        <h2 className=' text-sm font-semibold text-zinc-200'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</h2>
                        <h2 className=' flex items-center gap-4 text-xl font-bold italic mt-10'>READ MORE <RiArrowRightDoubleLine size={50} className=' text-secondary'/></h2>
                    </div>
                </CarouselItem>

                <CarouselItem>
                      <div className=' flex flex-col gap-5 w-full h-auto bg-[#A90B02] rounded-xl p-6 text-white'>
                        <p className=' text-sm font-semibold'>11.11.18/ in <span className=' text-secondary'>GAMES</span></p>
                        <h2 className=' text-xl font-bold'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</h2>
                        <h2 className=' text-sm font-semibold text-zinc-200'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</h2>
                        <h2 className=' flex items-center gap-4 text-xl font-bold italic mt-10'>READ MORE <RiArrowRightDoubleLine size={50} className=' text-secondary'/></h2>
                    </div>
                </CarouselItem>

                <CarouselItem>
                      <div className=' flex flex-col gap-5 w-full h-auto bg-[#A90B02] rounded-xl p-6 text-white'>
                        <p className=' text-sm font-semibold'>11.11.18/ in <span className=' text-secondary'>GAMES</span></p>
                        <h2 className=' text-xl font-bold'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</h2>
                        <h2 className=' text-sm font-semibold text-zinc-200'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</h2>
                        <h2 className=' flex items-center gap-4 text-xl font-bold italic mt-10'>READ MORE <RiArrowRightDoubleLine size={50} className=' text-secondary'/></h2>
                    </div>
                </CarouselItem>
                
            </CarouselContent>
          
            </Carousel>
        </motion.div>

    </div>
  )
}
