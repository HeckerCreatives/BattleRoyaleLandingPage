import Link from 'next/link'
import React from 'react'

export default function Footer() {
  return (
    <div className=' flex items-center justify-center w-screen h-auto bg-zinc-950 py-10'
     style={{backgroundImage: "url('/v2/about/BG.png')", backgroundSize: "cover", backgroundPosition: "center", backgroundRepeat:"no-repeat"}}
    
    >
        <div className=' max-w-[1920px] w-full lg:w-[70%] h-auto flex items-center justify-center gap-10'>
            {/* <img src="/assets/character A.png" alt="" className=' relative mb-40 lg:block hidden'/> */}
            <div className=' flex flex-col gap-10 items-center justify-start'>
                <img src="/v2/auth/assets/rof.png" alt="" height={200} width={200} className=' relative lg:w-[200px] w-[150px]'/>

                <div className=' flex md:flex-row flex-col items-center gap-4 lg:gap-6 text-white'>

                    <a href='/' className=' text-xs md:text-sm font-bold px-8 py-2 w-[120px] lg:w-[180px] text-center hover:scale-105 ease-in-out duration-300'
                    style={{backgroundImage: "url('/pd/Button A.png')", backgroundSize: "contain", backgroundPosition: "center", backgroundRepeat:"no-repeat"}}
                    
                    >HOME</a>

                     <a href='/#news' className=' text-xs md:text-sm font-bold px-8 py-2 w-[120px] lg:w-[180px] text-center hover:scale-105 ease-in-out duration-300'
                    style={{backgroundImage: "url('/pd/Button B.png')", backgroundSize: "contain", backgroundPosition: "center", backgroundRepeat:"no-repeat"}}
                    
                    >NEWS</a>

                    <a href='/#maps' className=' text-xs md:text-sm font-bold px-8 py-2 w-[120px] lg:w-[180px] text-center hover:scale-105 ease-in-out duration-300'
                    style={{backgroundImage: "url('/pd/Button B.png')", backgroundSize: "contain", backgroundPosition: "center", backgroundRepeat:"no-repeat"}}
                    
                    >MAPS</a>

                     <a href='/#newsletter' className=' text-xs md:text-xs font-bold px-8 py-2 w-[120px] lg:w-[180px] text-center hover:scale-105 ease-in-out duration-300'
                    style={{backgroundImage: "url('/pd/Button B.png')", backgroundSize: "contain", backgroundPosition: "center", backgroundRepeat:"no-repeat"}}
                    
                    >NEWSLETTER</a>

                     <a href='/#about' className=' text-xs md:text-sm font-bold px-8 py-2 w-[120px] lg:w-[180px] text-center hover:scale-105 ease-in-out duration-300'
                    style={{backgroundImage: "url('/pd/Button C.png')", backgroundSize: "contain", backgroundPosition: "center", backgroundRepeat:"no-repeat"}}
                    
                    >ABOUT</a>



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

                <div className=' flex items-center gap-4'>
                    <a href="/terms&conditions" className=' text-sm text-orange-100 hover:text-orange-300 ease-in-out duration-300'>Terms & Conditions</a>
                    <a href="/privacy" className=' text-sm text-orange-100 hover:text-orange-300 ease-in-out duration-300'>Privacy Policy</a>

                </div>


            </div>
            {/* <img src="/assets/character B.png" alt="" height={200} width={200} className=' relative mb-40 lg:block hidden'/> */}

        </div>

    </div>
  )
}
