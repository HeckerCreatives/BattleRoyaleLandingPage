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

                <div className=' flex md:flex-row flex-col items-center gap-4 lg:gap-6 text-white'>

                    <a href='/' className=' text-[.6em] md:text-sm font-bold px-8 py-2 w-[120px] lg:w-[180px] text-center hover:scale-105 ease-in-out duration-300'
                    style={{backgroundImage: "url('/pd/Button A.png')", backgroundSize: "contain", backgroundPosition: "center", backgroundRepeat:"no-repeat"}}
                    
                    >HOME</a>

                     <a href='/#news' className=' text-[.6em] md:text-sm font-bold px-8 py-2 w-[120px] lg:w-[180px] text-center hover:scale-105 ease-in-out duration-300'
                    style={{backgroundImage: "url('/pd/Button B.png')", backgroundSize: "contain", backgroundPosition: "center", backgroundRepeat:"no-repeat"}}
                    
                    >NEWS</a>

                    <a href='/#maps' className=' text-[.6em] md:text-sm font-bold px-8 py-2 w-[120px] lg:w-[180px] text-center hover:scale-105 ease-in-out duration-300'
                    style={{backgroundImage: "url('/pd/Button B.png')", backgroundSize: "contain", backgroundPosition: "center", backgroundRepeat:"no-repeat"}}
                    
                    >MAPS</a>

                     <a href='/#newsletter' className=' text-[.6em] md:text-xs font-bold px-8 py-2 w-[120px] lg:w-[180px] text-center hover:scale-105 ease-in-out duration-300'
                    style={{backgroundImage: "url('/pd/Button B.png')", backgroundSize: "contain", backgroundPosition: "center", backgroundRepeat:"no-repeat"}}
                    
                    >NEWSLETTER</a>

                     <a href='/#about' className=' text-[.6em] md:text-sm font-bold px-8 py-2 w-[120px] lg:w-[180px] text-center hover:scale-105 ease-in-out duration-300'
                    style={{backgroundImage: "url('/pd/Button B.png')", backgroundSize: "contain", backgroundPosition: "center", backgroundRepeat:"no-repeat"}}
                    
                    >ABOUT</a>

                    <a href={process.env.NEXT_PUBLIC_INVESTOR_URL} className=' text-[.6em] md:text-sm font-bold px-8 py-2 w-[120px] lg:w-[180px] text-center hover:scale-105 ease-in-out duration-300'
                    style={{backgroundImage: "url('/pd/Button C.png')", backgroundSize: "contain", backgroundPosition: "center", backgroundRepeat:"no-repeat"}}
                    
                    >INVESTOR</a>





                </div>

                {/* <div className=' flex items-center gap-4 lg:gap-10'>
                    {list.map((item, index) => (
                        <a key={item._id} href={item.link} target='_blank'>
                        {getImage(item.title)}
                        </a>
                    ))}
                 

                </div> */}
                <a href={process.env.NEXT_PUBLIC_INVESTOR_URL}>
                  <button  className=' relative flex items-center justify-center hover:scale-105 transition-all duration-200 mt-8'
                  // style={{backgroundImage: "url('/assets/button.png')", backgroundSize: "contain", backgroundPosition: "center", backgroundRepeat:"no-repeat"}}
                  >
                    <img src="/assets/button.png" alt="btn" width={220} className=' '/>
                    <p className=' absolute font-bold text-amber-950'>Invest Now</p>
                  </button>
                </a>

             

                <div className=' flex items-center gap-4 mt-8'>
                    <a href="/terms&conditions" className=' text-sm text-orange-100 hover:text-orange-300 ease-in-out duration-300'>Terms & Conditions</a>
                    <a href="/privacy" className=' text-sm text-orange-100 hover:text-orange-300 ease-in-out duration-300'>Privacy Policy</a>

                </div>

                <div className=' w-full flex flex-col items-center justify-center gap-4 px-4'>
                    <p className=' text-zinc-200 text-xs text-center'>All content in Rise of Fearless, including but not limited to game design, characters, artwork, maps, and narratives, is the intellectual property of Rise of Fearless (rof.game).</p>
                    <p className=' text-zinc-200 text-xs text-center'>For intellectual property inquiries, please contact <span className=' text-orange-500'>support@rof.game.</span></p>

                    
                    <p className=' text-zinc-50 text-xs mt-6 text-center'>© 2024 Rise of Fearless (rof.game). All rights reserved. Unauthorized use, reproduction, or distribution of any content is strictly prohibited.</p>
                </div>

               


            </div>

        </div>

    </div>
  )
}
