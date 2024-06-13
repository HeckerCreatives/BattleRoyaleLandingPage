import React from 'react'
import Link from 'next/link'

export default function Socials() {
  return (
    <div className=' absolute top-0 w-[90%] lg:w-[80%] max-w-[1920px] flex items-center justify-end gap-4 lg:px-8 py-4 text-white'>
        <p className=' text-xs '>Follow us : </p>
        
         <Link href='https://web.facebook.com/'>
            <img src="/assets/fb.png" alt="" width={20} height={20} className=' hover:scale-110 ease-in-out duration-300'/>
        </Link>

          <Link href='https://discord.com/'>
            <img src="/assets/discord.png" alt="" width={20} height={20} className=' hover:scale-110 ease-in-out duration-300'/>
        </Link>

          <Link href='https://www.tiktok.com/'>
             <img src="/assets/tiktok.png" alt="" width={20} height={20} className=' hover:scale-110 ease-in-out duration-300'/>
        </Link>

        <Link href='https://web.telegram.org/'>
             <img src="/assets/telegram.png" alt="" width={20} height={20} className=' hover:scale-110 ease-in-out duration-300'/>
        </Link>
    </div>
  )
}
