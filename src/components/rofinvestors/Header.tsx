import { nav } from '@/app/data';
import React from 'react'
import { FaInstagram, FaXTwitter } from "react-icons/fa6";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { Menu } from 'lucide-react';


export default function HeroSection() {
  return (
    <div className=' relative z-10 flex flex-col items-center w-full h-[100dvh] max-h-[1080px] px-4'
    style={{ backgroundImage: "url('/investor/assets/bg/hero.png')" , backgroundSize:'cover', backgroundRepeat:'no-repeat', backgroundPosition:'bottom'}}>

      <nav className=' relative w-full max-w-[1240px] h-auto flex items-center justify-between mt-4'>
      <img src="/investor/navigator TAB.png" alt="tab" className=' w-full absolute z-10 h-[92px]' />
        <img src="/investor/logo.png" alt="logo" width={90} height={90} className=' relative z-10 ml-2 lg:ml-4' />

        <div className=' mr-4 relative z-10 hidden lg:flex items-center gap-4 text-amber-950 font-bold text-sm font-dihjauti p-2'>
          {nav.map((item, index) => (
            <a key={index} href={item.path}>{item.name}</a>
          ))}
        
          <div className=' relative w-fit h-full flex items-center justify-center'>
            <img src="/investor/assets/Top Button.png" alt="button" width={150} height={150} />
            <div className=' w-full h-full text-black absolute flex items-center justify-center gap-8'>
              <a href="http:/x.com">
                <FaXTwitter size={25}/>
                </a>
                <a href="http://instagram.com/">
                <FaInstagram size={25}/>
                  
                </a>

            </div>
          </div>
        </div>

        <Sheet>
        <SheetTrigger className=' mr-2 relative z-10 lg:hidden block bg-amber-800 text-white p-1 rounded-sm'>
          <Menu size={20}/>
        </SheetTrigger>
        <SheetContent className=' bg-amber-950 border-amber-900'>
          <SheetHeader>
            <SheetTitle className=' flex items-center justify-center'>
              <img src="/investor/logo.png" alt="logo" width={150} height={150} />
            </SheetTitle>
            <SheetDescription>
              
            </SheetDescription>
          </SheetHeader>

          <div className=' flex flex-col items-center gap-8 text-white text-sm font-dihjauti p-2 mt-6'>
            {nav.map((item, index) => (
              <a key={index} href={item.path}>{item.name}</a>
            ))}
          
            <div className=' relative w-fit h-full flex items-center justify-center'>
              <img src="/investor/assets/Top Button.png" alt="" width={150} />
              <div className=' w-full h-full text-black absolute flex items-center justify-center gap-8'>
                <a href="http:/x.com">
                <FaXTwitter size={25}/>
                </a>
                <a href="http://instagram.com/">
                <FaInstagram size={25}/>
                  
                </a>
              </div>
            </div>
          </div>
        </SheetContent>
        </Sheet>


        
      </nav>
    </div>
  )
}
