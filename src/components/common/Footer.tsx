'use client'
import axios from 'axios'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'

interface Links {
    _id: string
    title: string
    createdAt:string 
    updatedAt: string
    link: string
  }

export default function Footer() {
    const [list, setList] = useState<Links[]>([])

  return (
    <div className=' flex items-center justify-center w-screen h-auto bg-zinc-950 py-20'
     style={{backgroundImage: "url('/assets/Plate - Footer.png')", backgroundSize: "cover", backgroundPosition: "top", backgroundRepeat:"no-repeat"}}
    
    >
        <div className=' max-w-[1920px] w-full lg:w-[70%] h-auto flex items-center justify-center gap-10'>
            <div className=' flex flex-col gap-10 items-center justify-start'>
                <img src="/v2/auth/assets/rof.png" alt="" height={200} width={200} className=' relative lg:w-[200px] w-[150px]'/>

                <div className=' flex flex-wrap items-center justify-center gap-3 lg:gap-4 text-white'>

                    <a href='/' className='text-xs md:text-sm font-bold px-6 py-2 rounded-md bg-gradient-to-r from-orange-400 to-orange-600 text-amber-950 hover:scale-105 ease-in-out duration-300 text-center'>
                      HOME
                    </a>

                    <a href='/#news' className='text-xs md:text-sm font-bold px-6 py-2 rounded-md bg-gradient-to-r from-orange-300 to-orange-500 text-amber-950 hover:scale-105 ease-in-out duration-300 text-center'>
                      NEWS
                    </a>

                    <a href='/#maps' className='text-xs md:text-sm font-bold px-6 py-2 rounded-md bg-gradient-to-r from-orange-300 to-orange-500 text-amber-950 hover:scale-105 ease-in-out duration-300 text-center'>
                      MAPS
                    </a>

                    <a href='/#newsletter' className='text-xs md:text-sm font-bold px-6 py-2 rounded-md bg-gradient-to-r from-orange-300 to-orange-500 text-amber-950 hover:scale-105 ease-in-out duration-300 text-center'>
                      NEWSLETTER
                    </a>

                    <a href='/#about' className='text-xs md:text-sm font-bold px-6 py-2 rounded-md bg-gradient-to-r from-orange-300 to-orange-500 text-amber-950 hover:scale-105 ease-in-out duration-300 text-center'>
                      ABOUT
                    </a>

                    <a href={process.env.NEXT_PUBLIC_INVESTOR_URL} className='text-xs md:text-sm font-bold px-6 py-2 rounded-md bg-gradient-to-r from-amber-500 to-amber-700 text-white hover:scale-105 ease-in-out duration-300 text-center'>
                      INVESTOR
                    </a>





                </div>

                {/* <div className=' flex items-center gap-4 lg:gap-10'>
                    {list.map((item, index) => (
                        <a key={item._id} href={item.link} target='_blank'>
                        {getImage(item.title)}
                        </a>
                    ))}
                 

                </div> */}
                <a href={process.env.NEXT_PUBLIC_INVESTOR_URL} className='mt-8'>
                  <button className='bg-gradient-to-r from-orange-300 to-orange-500 px-12 py-3 rounded-md font-bold text-amber-950 hover:scale-105 transition-all duration-200 text-base shadow-lg shadow-orange-900/40'>
                    Invest Now
                  </button>
                </a>

             

                <div className=' flex items-center gap-4 mt-8'>
                    <a href="/terms&conditions" className=' text-sm text-orange-100 hover:text-orange-300 ease-in-out duration-300'>Terms & Conditions</a>
                    <a href="/privacy" className=' text-sm text-orange-100 hover:text-orange-300 ease-in-out duration-300'>Privacy Policy</a>

                </div>

                <div className=' w-full flex flex-col items-center justify-center gap-4 px-4'>
                    <p className=' text-zinc-200 text-xs text-center'>All content in Rise of Fearless, including but not limited to game design, characters, artwork, maps, and narratives, is the intellectual property of Rise of Fearless (rof.game).</p>
                    <p className=' text-zinc-200 text-xs text-center'>For intellectual property inquiries, please contact <span className=' text-orange-500'>support@rof.game.</span></p>

                    
                    <p className=' text-zinc-50 text-xs mt-6 text-center'>© 2026 Rise of Fearless (rof.game). All rights reserved. Unauthorized use, reproduction, or distribution of any content is strictly prohibited.</p>
                </div>

               


            </div>

        </div>

    </div>
  )
}
