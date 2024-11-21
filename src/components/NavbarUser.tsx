"use client"
import React, { useState, useEffect } from 'react';
import { RiMenu4Fill } from 'react-icons/ri'
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import Link from 'next/link'
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { RiAccountBoxFill } from "react-icons/ri";
import { IoDownload } from "react-icons/io5";
import { IoLogOut } from "react-icons/io5";
import { usePathname, useSearchParams, useRouter } from 'next/navigation'
import axios,{ AxiosError} from 'axios'
import { useToast } from "@/components/ui/use-toast"


export default function NavbarUser() {
  const pathname = usePathname()
 
  const router = useRouter()
  const { toast } = useToast()
  const [data, setData] = useState()
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [country, setCountry] = useState('')

   useEffect(() => {
        const playerData = async () => {
            try {
                const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/user/getuserdetails`,{
                    withCredentials: true,
                    headers: {
                    'Content-Type': 'application/json',
                }
                })
                setName(response.data.data.username)
                setEmail(response.data.data.email)
                setCountry(response.data.data.country)
            } catch (error) {
                 if (axios.isAxiosError(error)) {
                    const axiosError = error as AxiosError;
                    if (axiosError.response && axiosError.response.status === 401) {
                        localStorage.setItem('auth', 'false');
                        router.push('/')
                        toast({
                        variant: "destructive",
                        title: "Unauthorized",
                        })
                
                    }
                } 
            }
        }
        playerData()

    },[])

  const logoutUser = () => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('auth', 'false');
      router.push('/');
    }
  };

  return (
     <>

     <div className=' mt-4 h-32 w-[80%] text-white max-w-[1920px] hidden lg:block'
     style={{backgroundImage: "url('/assets/navigator TAB.png')", backgroundSize: "contain", backgroundPosition: "center", backgroundRepeat:"no-repeat"}}
    >
        <div className=' max-w-[1920px] relative grid grid-cols-3 px-8 h-full z-20'>
            <Link href='/'>
              <img src="/assets/logo 06 B.png" alt="" width={180} height={180} className='hover:scale-110 ease-in-out duration-200 xl:w-[180px] lg:w-[160px]' />
            </Link> 
            <div className=' flex items-center justify-center gap-4'>
                <Link href='/' className=' lg:text-sm text-amber-950 font-bold hover:text-secondary ease-in-out duration-500'>HOME</Link>
               
                <Link href='/#news' className=' lg:text-sm text-amber-950 font-bold hover:text-secondary ease-in-out duration-500'>NEWS</Link>
                <Link href='/#maps' className=' lg:text-sm text-amber-950 font-bold hover:text-secondary ease-in-out duration-500'>MAPS</Link>
                <Link href='/#about' className=' lg:text-sm text-amber-950 font-bold hover:text-secondary ease-in-out duration-500'>ABOUT</Link>
                <Link href='/#newsletter' className=' lg:text-sm text-amber-950 font-bold hover:text-secondary ease-in-out duration-500'>NEWSLETTER</Link>


            </div>

            <div className=' flex items-center gap-2 justify-end'>
                 
                  <Popover>
                  <PopoverTrigger className=' flex items-center gap-2 justify-end'>
                     <div className=' w-12 h-12 rounded-md flex items-center justify-center'>
                        <img src="/assets/logo 06 B.png" alt="" width={120} className=' hover:scale-110 ease-in-out duration-200' />
                    </div>
                    <div className=' flex flex-col items-start gap-1 text-amber-950'>
                        <p className=' text-sm font-semibold'>{name}</p>
                        <p className=' text-xs'>Player</p>
                    </div>
                  </PopoverTrigger>
                  <PopoverContent className=' flex flex-col gap-4 w-auto h-auto bg-zinc-950 border-none mt-4 p-6 '>
                    <Link href='/user' className={`flex items-center gap-2 text-xs text-zinc-300 hover:text-secondary ease-in-out duration-500`}><RiAccountBoxFill size={20}/>Account Management</Link>
                    <Link href='/download' className=' flex items-center gap-2 text-xs text-zinc-300 hover:text-secondary ease-in-out duration-500'><IoDownload size={20}/>Download Game</Link>
                    <p onClick={logoutUser} className=' flex items-center gap-2 text-xs text-zinc-300 hover:text-secondary ease-in-out duration-500 cursor-pointer'><IoLogOut size={20}/>Log Out</p>
                  </PopoverContent>
                </Popover>
                  
              </div>

            


        </div>

    </div>

     <div className=' lg:hidden w-[90%] flex items-center justify-between px-2 h-12 mt-4 border-x-4 border-amber-700'
     style={{backgroundImage: "url('/assets/navigator TAB.png')", backgroundSize: "cover", backgroundPosition: "center", backgroundRepeat:"no-repeat"}}
     >
      <img src="/assets/logo 06 B.png" alt="" width={90} className=' hover:scale-110 ease-in-out duration-200' />
      
        <Sheet key='left'>
        <SheetTrigger>
          <div className=' flex items-center justify-center h-7 w-7 bg-amber-950 rounded-md'>
            <RiMenu4Fill size={20} color='white'/>
          </div>
        </SheetTrigger>
        <SheetContent className=' border-none p-0 m-0'
        style={{backgroundImage: "url('/Left Rectangular.png')", backgroundSize: "cover", backgroundPosition: "bottom", backgroundRepeat:"no-repeat"}}
        >
          <div className=' absolute flex flex-col items-center justify-start py-10 gap-5 top-0 w-full h-full bg-opacity-80'>
            <img src="/assets/logo 06 B.png" alt="" width={90} className=' hover:scale-110 ease-in-out duration-200' />

             <Popover>
                  <PopoverTrigger className=' flex items-center gap-2 justify-end '>
                     <div className=' w-12 h-12 rounded-md flex items-center justify-center'>
                        <img src="/assets/logo 06 B.png" alt="" width={100} className=' hover:scale-110 ease-in-out duration-200' />
                    </div>
                    <div className=' w-full flex flex-col items-start  justify-start text-white'>
                        <p className=' text-sm font-semibold text-orange-200'>{name}</p>
                        <p className=' text-[.6em] text-zinc-300'>Lorem Ipsum</p>

                    </div>
                  </PopoverTrigger>
                  <PopoverContent className=' flex flex-col gap-4 w-auto h-auto bg-zinc-950 border-none mt-4 p-6 '>
                    <Link href='/user' className={`flex items-center gap-2 text-xs text-zinc-300 hover:text-secondary ease-in-out duration-500 `}><RiAccountBoxFill size={20}/>Account Management</Link>
                    <Link href='/download' className=' flex items-center gap-2 text-xs text-zinc-300 hover:text-secondary ease-in-out duration-500'><IoDownload size={20}/>Download Game</Link>
                    <p onClick={logoutUser} className=' cursor-pointer flex items-center gap-2 text-xs text-zinc-300 hover:text-secondary ease-in-out duration-500 '><IoLogOut size={20}/>Log Out</p>
                  </PopoverContent>
                </Popover>

            <div className=' flex flex-col items-center justify-center gap-4'>
                <Link href='/' className=' text-xs md:text-sm text-orange-100 font-bold '>HOME</Link>
                <Link href='/#news' className=' text-xs md:text-sm text-orange-100 font-bold '>NEWS</Link>
                <Link href='/#maps' className=' text-xs md:text-sm text-orange-100 font-bold '>MAPS</Link>
                <Link href='/#about' className=' text-xs md:text-sm text-orange-100 font-bold '>ABOUT</Link>
                <Link href='/#newsletter' className=' text-xs md:text-sm text-orange-100 font-bold '>NEWSLETTER</Link>
            </div>

            <p className=' text-xs text-zinc-300 mt-10'>Follow us :</p>
            <div className=' flex items-center gap-4'>
                    <Link href='https://web.facebook.com/'>
                        <img src="/v2/header/assets/FB.png" alt="" width={30} className=' w-[40px] hover:scale-110 ease-in-out duration-300'/>
                    </Link>

                     <Link href='https://discord.com/'>
                        <img src="/v2/header/assets/Discord.png" alt="" width={30} className=' w-[40px] hover:scale-110 ease-in-out duration-300'/>
                    </Link>

                     <Link href='https://www.tiktok.com/'>
                        <img src="/v2/header/assets/Tiktok.png" alt="" width={30} className=' w-[40px] hover:scale-110 ease-in-out duration-300'/>
                    </Link>

                    <Link href='https://web.telegram.org/'>
                        <img src="/v2/header/assets/Telegram.png" alt="" width={30} className=' w-[40px] hover:scale-110 ease-in-out duration-300'/>
                    </Link>

            </div>

              <p className=' text-xs text-zinc-300 mt-10'>www.loremipsum.com</p>


          </div>
        </SheetContent>
      </Sheet>
      </div>
    </>
  )
}


