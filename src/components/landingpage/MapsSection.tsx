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
   <div  className=' relative w-full h-auto flex flex-col items-center justify-center py-40 px-4'
    >
      <img src="/investor/assets/Tri Plate.png" alt="bg" className=' absolute h-full w-full' />


      <div className=' relative z-10 w-full py-40 flex flex-col gap-4 max-w-[1440px]'>
        {data.length !== 0 ? (
          <>
          <h2 className=' text-3xl  font-bold text-amber-50 font-gilgond mt-8'>THE MAP</h2>

          <div className='relative w-full h-auto grid grid-cols-1 lg:grid-cols-2 place-items-center gap-5'>
            <div className=' w-full flex flex-col'>
                    <Carousel className=' w-full' setApi={setApi}>
                        <CarouselContent>
                            {data.map((data, idx) => (
                            <CarouselItem className=' w-full cursor-pointer'>
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

            <div
            className='hidden lg:block 2xl:w-[500px] 2xl:h-[500px] xl:w-[400px] xl:h-[400px] lg:w-[350px] lg:h-[350px] md:w-[95%] md:h-[650px] h-[350px] lg:p-8 md:p-12 p-8'
            style={{
            backgroundImage: "url('/v2/stage/assets/Description Tab.png')",
            backgroundSize: 'contain',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            }}
            >
            
            {data[current - 1] && (
            <div className='flex flex-col gap-4 lg:w-full h-full overflow-y-auto'>
              <p className='text-2xl md:text-4xl font-bold text-orange-300'>
                {data[current - 1].title}
              </p>
              <p className='text-sm md:text-lg text-orange-100'>
                {data[current - 1].description.split('\n').map((line, index) => (
                      <React.Fragment key={index}>
                        {line}
                        <br />
                      </React.Fragment>
                    ))}
              </p>
            </div>
            )}
            </div>

            <div
            className='lg:hidden block w-[90%] h-[300px] lg:p-8 md:p-12 p-8'
            style={{
            backgroundImage: "url('/v2/stage/assets/Description Tab.png')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            }}
            >
            {data[current - 1] && (
            <div className='flex flex-col gap-4 lg:w-full h-full overflow-y-auto'>
              <p className='text-2xl md:text-4xl font-bold text-orange-300'>
                {data[current - 1].title}
              </p>
              <p className='text-sm md:text-lg text-orange-100'>
              {data[current - 1].description.split('\n').map((line, index) => (
                      <React.Fragment key={index}>
                        {line}
                        <br />
                      </React.Fragment>
                    ))}
            </p>
            </div>
            )}
            </div>
          </div>
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
