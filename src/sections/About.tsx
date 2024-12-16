"use client"
import React, { useEffect, useState } from 'react'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import axios, { AxiosError } from 'axios'
import { useRouter } from 'next/navigation'
import { useToast } from '@/components/ui/use-toast'

interface Maps {
  id: string,
  title: string,
  description: string,
  link: string,
}
export default function About() {
  const [open, setOpen] = useState(false)
  const { toast } = useToast()
  const router = useRouter()
  const [data, setData] = React.useState<Maps[]>([])
  const [data1, setData1] = React.useState<Maps[]>([])

  useEffect(()=>{
    const videoData = async () => {
      try {
        const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/content/getcontent?type=video&limit=1`, {
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
    videoData()
  }, [])
  useEffect(()=>{
    const aboutData = async () => {
      try {
        const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/content/getcontent?type=about&limit=1`, {
            withCredentials: true,
            headers: {
                'Content-Type': 'application/json',
            }
        });
        setData1(response.data.data);
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
    aboutData()
  }, [])
    return (
    <div id='about' className=' w-full h-auto flex flex-col gap-24 items-center justify-center py-20'
     style={{backgroundImage: "url('/v2/about/BG.png')", backgroundSize: "cover", backgroundPosition: "center", backgroundRepeat:"no-repeat"}}
    
    >

        {data.map((data)=>(
        <div className='relative max-w-[1920px] w-[90%] lg:w-[85%] h-auto flex lg:flex-row flex-col items-center gap-5'>
          <div className=' lg:h-[500px] h-[400px] lg:w-[60%] w-full border-orange-300 border-4 rounded-md flex items-center justify-center'
          style={{backgroundImage: "url('/v2/header/assets/BG A.png')", backgroundSize: "cover", backgroundPosition: "center", backgroundRepeat:"no-repeat"}}
          
          >
             
            <Dialog>
            <DialogTrigger>
             <button className=''>
                <img src="/v2/about/Play Button.png" alt="" className=' hover:scale-110 ease-in-out duration-300' />
              </button>
            </DialogTrigger>
            <DialogContent className=' text-white aspect-video p-4 bg-zinc-950 border-zinc-900 flex flex-col items-center gap-4'
            style={{backgroundImage: "url('/v2/news/Tab Big.png')", backgroundSize: "cover", backgroundPosition: "center", backgroundRepeat:"no-repeat"}}
            
            >
              <iframe className=' z-50 w-full h-full' 
              src={`${process.env.NEXT_PUBLIC_API_URL}/${data.link.replace(/\\/g, '/')}`}
             title="video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
            </DialogContent>
            </Dialog>


            </div>

            <div className=' h-[400px] lg:h-[500px] lg:w-[40%] w-full border-orange-300 border-spacing-4 rounded-md p-10 flex flex-col gap-4'
            style={{backgroundImage: "url('/v2/about/desc.png')", backgroundSize: "cover", backgroundPosition: "top", backgroundRepeat:"no-repeat"}}
            >
                <h2 className=' text-2xl lg:text-4xl font-bold text-amber-950'>{data.title}</h2>
                <p className='text-sm md:text-lg text-amber-900 overflow-y-scroll'>
                  {data.description.split('\n').map((line, index) => (
                    <React.Fragment key={index}>
                      {line}
                      <br />
                    </React.Fragment>
                  ))}
                </p>
            </div>
        </div>
            ))}

        <div className='relative max-w-[1920px] w-[90%] lg:w-[85%] h-[500px] grid grid-cols-1 md:grid-cols-2 rounded-lg'
        style={{backgroundImage: "url('/v2/about/tab.png')", backgroundSize: "cover", backgroundPosition: "center", backgroundRepeat:"no-repeat"}}
        
        >
            <div className=' w-full h-auto flex flex-col gap-4 p-6'>

                  {data1.length === 0 && (
                    <>
                    <h2 className=' text-2xl lg:text-4xl font-bold text-orange-400'>ABOUT SECTION YET TO BE ADDED</h2>
                    </>
                  )}
                {data1.map((data) => (
                  <>
                  <h2 className=' text-2xl lg:text-4xl font-bold text-orange-400'>{data.title}</h2>
                <div className=' h-[90%] overflow-y-auto'>
                    <p className=' text-sm md:text-lg text-orange-100'>
                    {data.description.split('\n').map((line, index) => (
                    <React.Fragment key={index}>
                      {line}
                      <br />
                    </React.Fragment>
                  ))}
                    </p>

                </div>
                  </>
                ) 
                )}       
            </div>

            <div className=' relative w-full h-[500px] flex items-end justify-end'>
            <img src="/pd/Tab Character.png" alt="" width={600} className=' relative left-20 bottom-0 md:block hidden'/>

            </div>



        </div>


    </div>
  )
}
