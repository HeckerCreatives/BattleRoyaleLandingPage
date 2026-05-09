'use client'

import Link from 'next/link'
import React from 'react'
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion"
import { motion } from 'framer-motion'
import { faqs } from '@/app/data'
  

export default function Faq() {
  return (
    <div className=' relative z-30 flex items-center justify-center w-screen h-auto py-32 text-white'
      style={{ clipPath: 'polygon(0 0, 100% 64px, 100% 100%, 0 100%)', backgroundImage: "url('/investor/assets/BG Pattern Solid.png')", backgroundSize: 'auto', backgroundRepeat: 'repeat' }}
   >
       <div className=' max-w-[1920px] w-full lg:w-[70%] h-auto flex items-center justify-center gap-10'>
          
           <div className=' w-full flex flex-col gap-4 items-center justify-start px-4'>
              <motion.h2 
              initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px 0px" }}
                transition={{
                    type: "spring",
                    stiffness: 30,
                    damping: 10,
                    mass: 1,
                    delay: 0
                }}
          className=' ~text-2xl/4xl font-bold font-gilgond'>FAQ</motion.h2>

          <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px 0px" }}
          transition={{
              type: "spring",
              stiffness: 30,
              damping: 10,
              mass: 1,
              delay: .2
          }}
          className=' w-full flex flex-col gap-4 items-center justify-center'>

            {faqs.map((item, index) => (
                <Accordion key={index} type="single" collapsible className='w-full max-w-[700px]  bg-zinc-800 px-4 rounded-md'>
                <AccordionItem value="item-2">
                    <AccordionTrigger className=' text-orange-600'>{item.question}
                    </AccordionTrigger>
                    <AccordionContent>
                    {item.answer}
                    </AccordionContent>
                </AccordionItem>
                </Accordion>
            ))}
         
          </motion.div>

             


           </div>
           

       </div>

   </div>
  )
}
