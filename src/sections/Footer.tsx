import Link from 'next/link'
import React from 'react'

export default function Footer() {
  return (
    <div className=' flex items-center justify-center w-screen h-[400px] bg-zinc-950'
    
    >
        <div className=' max-w-[1920px] w-full lg:w-[70%] h-[400px] flex items-center justify-center lg:justify-between gap-10'>
            <img src="/assets/character A.png" alt="" className=' relative mb-40 lg:block hidden'/>
            <div className=' flex flex-col gap-10 items-center justify-start'>
                <img src="/assets/RISE OF FEARLESS text logo.png" alt="" height={200} width={200} className=' relative lg:w-[200px] w-[150px]'/>

                <div className=' flex items-center gap-4 md:gap-8 text-white'>
                    <Link href='' className=' text-xs md:text-sm font-bold hover:text-amber-700 ease-in-out duration-300'>HOME</Link>
                    <Link href='' className=' text-xs md:text-sm font-bold hover:text-amber-700 ease-in-out duration-300'>GAMES</Link>
                    <Link href='' className=' text-xs md:text-sm font-bold hover:text-amber-700 ease-in-out duration-300'>REVIEWS</Link>
                    <Link href='' className=' text-xs md:text-sm font-bold hover:text-amber-700 ease-in-out duration-300'>NEWS</Link>
                    <Link href='' className=' text-xs md:text-sm font-bold hover:text-amber-700 ease-in-out duration-300'>CONTACT</Link>

                </div>

                <div className=' flex items-center gap-4 lg:gap-10'>
                    <Link href='https://web.facebook.com/'>
                        <img src="/assets/fb.png" alt="" width={30} className=' lg:w-[30px] w-[20px] hover:scale-110 ease-in-out duration-300'/>
                    </Link>

                     <Link href='https://discord.com/'>
                        <img src="/assets/discord.png" alt="" width={30} className=' lg:w-[30px] w-[20px] hover:scale-110 ease-in-out duration-300'/>
                    </Link>

                     <Link href='https://www.tiktok.com/'>
                        <img src="/assets/tiktok.png" alt="" width={30} className=' lg:w-[30px] w-[20px] hover:scale-110 ease-in-out duration-300'/>
                    </Link>

                    <Link href='https://web.telegram.org/'>
                        <img src="/assets/telegram.png" alt="" width={30} className=' lg:w-[30px] w-[20px] hover:scale-110 ease-in-out duration-300'/>
                    </Link>

                </div>

                <p className=' text-xs lg:text-sm text-zinc-300'>www.loremipsum.com</p>


            </div>
            <img src="/assets/character B.png" alt="" height={200} width={200} className=' relative mb-40 lg:block hidden'/>

        </div>

    </div>
  )
}
