import React from 'react'

export default function Socials() {
  return (
    <div className=' absolute top-0 w-[90%] lg:w-[80%] max-w-[1920px] flex items-center justify-end gap-4 lg:px-8 py-4 text-white'>
        <p className=' text-xs '>Follow us : </p>
        <img src="/assets/fb.png" alt="" width={20} height={20} className=' hover:scale-110 ease-in-out duration-300'/>
        <img src="/assets/tiktok.png" alt="" width={20} height={20} className=' hover:scale-110 ease-in-out duration-300'/>
        <img src="/assets/discord.png" alt="" width={20} height={20} className=' hover:scale-110 ease-in-out duration-300'/>
        <img src="/assets/telegram.png" alt="" width={20} height={20} className=' hover:scale-110 ease-in-out duration-300'/>
    </div>
  )
}
