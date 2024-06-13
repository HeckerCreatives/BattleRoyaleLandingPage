"use client"
import React from 'react'
import { RiArrowRightDoubleLine } from 'react-icons/ri'
import {motion} from 'framer-motion'
import { fadeIn } from '@/lib/variant'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"


export default function Section5() {
  return (
    <div id='reviews' className=' max-w-[1920px] h-[600px] w-full'>
        <div className=' hidden md:flex flex-row items-center'>
            <div className=' w-[40%] h-[600px]'
             style={{backgroundImage: "url('/assets/5th saction BG.png')", backgroundSize: "cover", backgroundPosition: "center", backgroundRepeat:"no-repeat"}}
            >

            </div>

             <div className=' flex flex-col justify-center gap-5 p-20 w-[60%] h-[600px]'
             style={{backgroundImage: "url('/assets/5th section text TAB.png')", backgroundSize: "cover", backgroundPosition: "center", backgroundRepeat:"no-repeat"}}
            >
                <motion.h2 
                 variants={fadeIn('up', .2)}
                initial='hidden'
                whileInView={'show'}
                viewport={{once:false, amount: 0.2}}
                className=' text-xl lg:text-3xl font-bold text-amber-950'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </motion.h2>
                <motion.h2 
                 variants={fadeIn('up', .4)}
                initial='hidden'
                whileInView={'show'}
                viewport={{once:false, amount: 0.2}}
                className=' text-sm lg:text-lg font-bold text-amber-900'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </motion.h2>

                 

                <Dialog>
                <DialogTrigger>
                  <motion.h2 
                    variants={fadeIn('up', .6)}
                    initial='hidden'
                    whileInView={'show'}
                    viewport={{once:false, amount: 0.2}}
                  className=' flex items-center gap-4 text-2xl font-bold italic mt-10'>READ MORE <RiArrowRightDoubleLine size={50} className=' text-secondary'/></motion.h2>
                </DialogTrigger>
                <DialogContent className=' bg-zinc-950 border-zinc-900 w-[90%] md:w-[700px]'>
                 <div className=' flex flex-col gap-4 text-white'>
                  <h2 className=' text-lg font-semibold'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</h2>

                  <p className=' text-sm text-zinc-400'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                 </div>
                </DialogContent>
              </Dialog>


            </div>

            
            
        </div>

         <div className=' md:hidden flex flex-col items-center'>
            <div className=' w-full h-[300px]'
             style={{backgroundImage: "url('/assets/5th saction BG.png')", backgroundSize: "cover", backgroundPosition: "center", backgroundRepeat:"no-repeat"}}
            >

            </div>

             <div className=' flex flex-col justify-center gap-5 p-6 w-full h-auto'
             style={{backgroundImage: "url('/assets/5th section text TAB.png')", backgroundSize: "cover", backgroundPosition: "center", backgroundRepeat:"no-repeat"}}
            >
                <motion.h2 
                 variants={fadeIn('up', .2)}
                initial='hidden'
                whileInView={'show'}
                viewport={{once:false, amount: 0.2}}
                className=' text-xl lg:text-3xl font-bold text-amber-950'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </motion.h2>

                <motion.h2 
                 variants={fadeIn('up', .4)}
                initial='hidden'
                whileInView={'show'}
                viewport={{once:false, amount: 0.2}}
                className=' text-sm lg:text-lg font-bold text-amber-900'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </motion.h2>

                 <motion.h2 
                  variants={fadeIn('up', .6)}
                  initial='hidden'
                  whileInView={'show'}
                  viewport={{once:false, amount: 0.2}}
                 className=' flex items-center gap-4 text-xl font-bold italic mt-5'>READ MORE <RiArrowRightDoubleLine size={50} className=' text-secondary'/></motion.h2>

            </div>

            
            
        </div>

    </div>
  )
}
