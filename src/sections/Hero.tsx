"use client"
import React, { useEffect, useState } from 'react'
import {motion} from 'framer-motion'
import { fadeIn } from '@/lib/variant'
import { Link, Menu } from 'lucide-react'
import Navbar from './Navbar'
import axios, { AxiosError } from 'axios'
import { useToast } from '@/components/ui/use-toast'
import { useRouter } from 'next/navigation'
import { navigation } from '@/app/data'
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"

interface Maps {
  id: string,
  title: string,
  description: string,
  link: string,
}

interface Links {
  _id: string
  title: string
  createdAt:string 
  updatedAt: string
  link: string
}
export default function Hero() {
  const { toast } = useToast()
  const router = useRouter()
  const [data, setData] = React.useState<Maps[]>([])

  useEffect(()=>{
    const headerData = async () => {
      try {
        const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/content/getcontent?type=header&limit=1`, {
            withCredentials: true,
            headers: {
                'Content-Type': 'application/json',
            }
        });
        setData(response.data.data);
    } catch (error) {
        if (axios.isAxiosError(error)) {
            const axiosError = error as AxiosError;
            if (axiosError.response && axiosError.response.status === 401) {
                localStorage.setItem('auth', 'false');
                router.push('/');
                toast({
                    variant: "destructive",
                    title: "Unauthorized",
                });
            }
        } 
    }
    }
    headerData()
  }, [])

  const [list, setList] = useState<Links[]>([])


  //get socials
  useEffect(() => {
    const fetchlinks = async () => {
        try {
            const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/sociallinks/getsociallinksa`);

            setList(response.data.data)
        
        } catch (error) {
          
        }
    };

    fetchlinks();
  }, []);

  const getImage = (type: string) => {
    if(type === 'facebook'){
      return  <img src="/v2/header/assets/FB.png" alt=""  width={70} className=' 2xl:w-[60px] xl:w-[40px] lg:[40px] hover:scale-110 ease-in-out duration-300'/>

    } else if(type === 'discord'){
      return  <img src="/v2/header/assets/Discord.png" alt="" width={70} className=' 2xl:w-[60px] xl:w-[40px] lg:[40px] hover:scale-110 ease-in-out duration-300' />
    } else if(type === 'tiktok'){
      return   <img src="/v2/header/assets/Tiktok.png" alt="" width={70} className=' 2xl:w-[60px] xl:w-[40px] lg:[40px] hover:scale-110 ease-in-out duration-300' />
    } else {
      return <img src="/v2/header/assets/Telegram.png" alt="" width={70} className=' 2xl:w-[60px] xl:w-[40px] lg:[40px] hover:scale-110 ease-in-out duration-300' />
    }

  }
  return (
    <div className=' h-[100dvh] lg:h-[screen] w-screen flex flex-col items-center justify-end text-white'
    style={{backgroundImage: "url('/v2/header/assets/BG B.png')", backgroundSize: "cover", backgroundPosition: "center", backgroundRepeat:"no-repeat"}}
    >
      <Navbar/>

        <div className=' hidden fixed right-0 z-50  bottom-8 lg:flex flex-col items-center justify-center gap-2 rounded-l-lg bg-amber-900 2xl:w-20 xl:w-16 lg:w-14 py-6'>

          {list.map((item, index) => (
            <a key={item._id} href={item.link} target='_blank'>
              {getImage(item.title)}
            </a>
          ))}
         
        

        </div>

        <div className='relative z-0 max-w-[1920px] w-[90%] lg:w-[78%] h-full flex items-end justify-end py-20'>
          <img src="/v2/header/assets/Character.png" alt="" width={520} className=' lg:w-[280px] xl:w-[290px] 2xl:w-[380px] absolute right-0 bottom-0 z-20 lg:block hidden' />

          <div className=' relative h-full grid grid-cols-1 lg:grid-cols-[1fr_40%] rounded-lg'
        style={{backgroundImage: "url('/v2/header/assets/BG A.png')", backgroundSize: "cover", backgroundPosition: "center", backgroundRepeat:"no-repeat"}}
        >
          <div className=' relative z-20 flex flex-col justify-center md:p-14 p-4'>
            {data.length === 0 && (
               <>
              <h2 className=' text-2xl 2xl:text-6xl font-bold'>HERO HEADER - Rise of Fearless</h2>
              <p className=' text-sm 2xl:text-lg text-orange-100 font-semibold mt-4'>
                 banner data soon to be added
              </p>
               </>
            )}
            {data.map((data)=>(
              <div className="h-auto overflow-y-hidden p-4 rounded-lg">
              <h2 className=' text-2xl 2xl:text-6xl font-bold'>{data.title}</h2>
              <p className=' text-xs md:text-sm 2xl:text-sm text-orange-100 font-semibold mt-4 h-full overflow-y-auto '>
                {data.description.split('\n').map((line, index) => (
                  <React.Fragment key={index}>
                    {line}
                    <br />
                  </React.Fragment>
                ))}
              </p>
                </div>
            ))}

           

            <div className=' flex justify-center items-center gap-2 mt-6'>
              <a href="/download">
              <img src="/astore.png" alt="" width={200} className=' 2xl:w-[200px] w-[120px]' />
              </a>

              <a href="/download">
              <img src="/gp.png" alt="" width={200} className=' 2xl:w-[200px] w-[120px]' />

              </a>

            </div>
          </div>

         
          </div>
        </div>
    </div>
  )
}
