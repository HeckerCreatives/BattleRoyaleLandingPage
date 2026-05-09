'use client'

import React from 'react'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { RiArrowRightDoubleLine } from 'react-icons/ri'
import { type CarouselApi } from "@/components/ui/carousel"
import axios,{ AxiosError} from 'axios'
import { useToast } from '@/components/ui/use-toast'
import { useRouter } from 'next/navigation'
import About from './About'
import { motion } from 'framer-motion'


interface Maps {
    id: string,
    title: string,
    description: string,
    link: string,
}


export default function MapsSections() {
    const { toast } = useToast()
    const router = useRouter()
    const [data, setData] = React.useState<Maps[]>([])
    const [api, setApi] = React.useState<CarouselApi>()
    const [current, setCurrent] = React.useState(0)
    const [count, setCount] = React.useState(0)

    React.useEffect(() => {
        if (!api) {
        return
        }
    
        setCount(api.scrollSnapList().length)
        setCurrent(api.selectedScrollSnap() + 1)
    
        api.on("select", () => {
        setCurrent(api.selectedScrollSnap() + 1)
        })
    }, [api, count])

    const handleDotClick = (index: number) => {
      setCurrent(index + 1);
      if (api) {
        api.scrollTo(index);
      }
    };

    React.useEffect(() => {
        const mapData = async () =>{
            try {
                const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/content/getcontent?type=map`, {
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
        mapData()
    }, [])


  return (
   <div id="maps" className=' relative w-full h-auto flex flex-col items-center justify-center py-20 px-4'
    style={{backgroundImage: "url('/investor/assets/Tri Plate.png')", backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', clipPath: 'polygon(0 64px, 100% 0, 100% 100%, 0 calc(100% - 64px))'}}
    >
      <div className='absolute inset-0 bg-gradient-to-b from-black/50 via-black/80 to-transparent' />

      <div className=' relative z-10 w-full flex flex-col gap-4 max-w-[1440px]'>
        {data.length !== 0 ? (
          <>
          <motion.h2 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px 0px" }}
          transition={{
              type: "spring",
              stiffness: 30,
              damping: 10,
              mass: 1,
              delay: 0
          }}className=' text-3xl  font-bold text-amber-50 font-gilgond mt-8'>THE MAP</motion.h2>

          <motion.div 
          
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px 0px" }}
          transition={{
              type: "spring",
              stiffness: 30,
              damping: 10,
              mass: 1,
              delay: .2
          }}className='relative w-full h-auto grid grid-cols-1 lg:grid-cols-2 place-items-center gap-5'>
            <div className=' w-full flex flex-col'>
                    <Carousel className=' w-full' setApi={setApi}>
                        <CarouselContent>
                            {data.map((data, idx) => (
                            <CarouselItem key={idx} className=' w-full cursor-pointer'>
                            <div className=' relative flex flex-col gap-5 w-full md:h-[400px] h-[250px] rounded-xl p-6 text-white'
                                style={{backgroundImage:`url('${process.env.NEXT_PUBLIC_API_URL}/${data.link.replace(/\\/g, '/')}')`, backgroundSize: "contain", backgroundPosition: "center", backgroundRepeat:"no-repeat"}}
                            >
                            </div>
                          </CarouselItem>                            
                            ))}
                        </CarouselContent>
                
                    </Carousel>

            <div className='flex items-center justify-center gap-2 w-full md:mt-6 mt-4'>
              {data.map((_, idx) => (
                <div
                  key={idx}
                  onClick={() => handleDotClick(idx)}
                  className={`${
                    current === idx + 1 ? 'w-4 h-4' : 'w-3 h-3'
                  } rounded-full cursor-pointer ${
                    current === idx + 1 ? 'bg-amber-950' : 'bg-orange-200'
                  }`}
                ></div>
              ))}
            </div>
            </div>

            {/* Desktop description panel */}
            <div className='hidden lg:flex flex-col gap-4 w-full max-w-[450px] h-auto min-h-[350px] p-8 rounded-xl bg-gradient-to-br from-amber-950 to-zinc-900 border border-orange-400/40 shadow-xl shadow-orange-950/40'>
            {data[current - 1] && (
              <>
              <p className='text-2xl xl:text-3xl font-bold text-orange-300 leading-snug'>
                {data[current - 1].title}
              </p>
              <div className='h-px w-16 bg-orange-500/60 rounded-full' />
              <p className='text-sm lg:text-base text-orange-100 leading-relaxed overflow-y-auto'>
                {data[current - 1].description.split('\n').map((line, index) => (
                  <React.Fragment key={index}>{line}<br /></React.Fragment>
                ))}
              </p>
              </>
            )}
            </div>

            {/* Mobile description panel */}
            <div className='lg:hidden w-full max-w-[560px] h-auto p-6 rounded-xl bg-gradient-to-br from-amber-950 to-zinc-900 border border-orange-400/40 shadow-lg shadow-orange-950/40'>
            {data[current - 1] && (
              <>
              <p className='text-xl sm:text-2xl font-bold text-orange-300 leading-snug mb-3'>
                {data[current - 1].title}
              </p>
              <div className='h-px w-12 bg-orange-500/60 rounded-full mb-3' />
              <p className='text-sm text-orange-100 leading-relaxed'>
                {data[current - 1].description.split('\n').map((line, index) => (
                  <React.Fragment key={index}>{line}<br /></React.Fragment>
                ))}
              </p>
              </>
            )}
            </div>
          </motion.div>
          </>
        ):(
          <div className=' w-full h-[400px] flex items-center justify-center mt-10 text-white'>
             <h2 className=' text-3xl font-bold italic'>NO MAPS YET!</h2>
          </div>
        )}
        
        {/* <About/> */}
      </div>
      

    </div>
  )
}
