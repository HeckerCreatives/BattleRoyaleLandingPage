import Link from 'next/link'
import React from 'react'
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion"
  

export default function Faq() {
  return (
    <div className=' relative z-30 flex items-center justify-center w-screen h-auto py-32 text-white'
   
   >
       <div className=' max-w-[1920px] w-full lg:w-[70%] h-auto flex items-center justify-center gap-10'>
          
           <div className=' w-full flex flex-col gap-4 items-center justify-start px-4'>
              <h2 className=' text-4xl font-bold font-gilgond'>FAQ</h2>

              <Accordion type="single" collapsible className=' w-full max-w-[700px] bg-zinc-800 px-4 rounded-md mt-10'>
                <AccordionItem value="item-1">
                    <AccordionTrigger className=' text-orange-600'>What is Rise of Fearless (ROF)?</AccordionTrigger>
                    <AccordionContent>
                    Rise of Fearless is a strategy-survival game. Using your survival instincts, compete against others, and embark in an epic quests.
                    </AccordionContent>
                </AccordionItem>
                </Accordion>

                <Accordion type="single" collapsible className='w-full max-w-[700px]  bg-zinc-800 px-4 rounded-md'>
                <AccordionItem value="item-2">
                    <AccordionTrigger className=' text-orange-600'>How can I download the game?
                    </AccordionTrigger>
                    <AccordionContent>
                    You can download Rise of Fearless on the Apple App Store or Google Play Store. Search for "Rise of Fearless" and click download.
                    </AccordionContent>
                </AccordionItem>
                </Accordion>

                <Accordion type="single" collapsible className='w-full max-w-[700px] bg-zinc-800 px-4 rounded-md'>
                <AccordionItem value="item-3">
                    <AccordionTrigger className=' text-orange-600'>Are there in-app purchases?
                    </AccordionTrigger>
                    <AccordionContent>
                    Yes, Rise of Fearless offers in-app purchases to enhance your gaming experience, but purchases are optional.
                    </AccordionContent>
                </AccordionItem>
                </Accordion>

                <Accordion type="single" collapsible className=' w-full max-w-[700px] bg-zinc-800 px-4 rounded-md'>
                <AccordionItem value="item-4">
                    <AccordionTrigger className=' text-orange-600'>How do I report a bug or issue?
                    </AccordionTrigger>
                    <AccordionContent>
                    You can report bugs by contacting our support team at support@rof.game. Please include details about your device and the issue you experienced.
                    </AccordionContent>
                </AccordionItem>
                </Accordion>

                <Accordion type="single" collapsible className='w-full max-w-[700px] bg-zinc-800 px-4 rounded-md'>
                <AccordionItem value="item-5">
                    <AccordionTrigger className=' text-orange-600'> How is my data handled?
                    </AccordionTrigger>
                    <AccordionContent>
                    Your data is securely stored and used only to enhance gameplay. Refer to our Privacy Policy for more details.
                    </AccordionContent>
                </AccordionItem>
                </Accordion>


           </div>
           

       </div>

   </div>
  )
}
