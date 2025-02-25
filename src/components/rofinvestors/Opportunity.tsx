'use client'
import { roadmap } from '@/app/data'
import React from 'react'
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
  } from "@/components/ui/carousel"
import { ArrowBigLeft, ArrowLeft, ArrowRight } from 'lucide-react'
import { type CarouselApi } from "@/components/ui/carousel"
  

export default function Opportunity() {
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
    }, [api])

    // console.log(count, current)


  return (
    <div className=' w-full flex flex-col h-full items-center'>

        <div id='opportunity' className=' scroll-mt-12 w-full flex flex-col items-center justify-center'>
            <img src="/investor/assets/OPPORTUNITY.png" alt="text" width={300} height={300} className='  ~w-56/72'/>

            <div className=' w-full max-w-[1440px] grid grid-cols-1 md:grid-cols-2 gap-12 mt-12 px-4'>

                <div className=' h-full flex flex-col gap-8 text-white items-center justify-center px-4'>
                    <p className=' ~text-xs/sm'>Africa’s gaming market is set to exceed $2.5 billion by 2025, supported by over 600 million mobile users. Despite this potential, African stories remain largely untapped in gaming. Rise of Fearless is strategically positioned to fill this gap, offering a product that resonates locally and appeals globally. </p>

                    <p className=' ~text-xs/sm'>The future of Africa is incredibly promising, with countries like Ethiopia seeing rapid development. With advancements spreading across West Africa, we believe the continent is the next big thing, and this game represents a groundbreaking opportunity for investors and players alike. </p>

                    <h2 className=' ~text-lg/2xl font-semibold'>Our goal is to make this the largest game in Africa, targeting 5% of the continent’s 1.5 billion people.</h2>

                </div>

                <div>
                    <img src="/investor/assets/IMAGE - Opportunity.png" alt="image" />
                </div>

            </div>
        </div>

        <div id='revolution' className=' w-full flex flex-col items-center justify-center py-4' >
            
            <img src="/investor/assets/REVOLUTION.png" alt="text" width={300} height={300} className=' ~mt-20/40  ~w-56/72'/>
            <div className=' w-full max-w-[1440px] grid grid-cols-1 md:grid-cols-2 gap-12 mt-12 px-4'>

                <div>
                    <img src="/investor/assets/IMAGE -  Revolution.png" alt="image" />
                </div>

                <div className=' h-full flex flex-col gap-8 text-white items-center justify-center text-end'>
                    <p className=' ~text-xs/sm'>Millions in Africa do not have access to banks, making it difficult to save, invest, or participate in the global economy. Rise of Fearless changes this by using Play to Earn gaming and blockchain technology to give players direct access to digital earnings.</p>

                    <p className=' ~text-xs/sm'>Players can earn tokens by playing, which can be saved, traded, or converted into real-world value without needing a bank account. This opens new opportunities for financial growth, allowing gamers to build wealth, access financial services, and join the digital economy using only their mobile devices.</p>

                    <h2 className=' ~text-lg/2xl font-semibold'>Rise of Fearless is not just entertainment. 
                    It is a way for millions to gain financial freedom.</h2>

                </div>
            </div>
        </div>
        


        <div id='roadmap' className=' relative w-full h-auto flex items-center justify-center ~py-44/60 px-4'>
            <img src="/investor/assets/Plate for RAODMAP.png" alt="bg" className=' absolute w-full h-full' />
            <div className=' flex flex-col items-center gap-8 w-full h-full relative z-20 max-w-[1440px]'>
                <img src="/investor/assets/roadmap.png" alt="text" width={280} height={280} className='~w-48/64'/>

                <div className=' w-full flex flex-col ~gap-6/12 relative z-20'>

                    <div className=' w-full md:flex flex-col gap-8 hidden'>
                    {roadmap.map((item, index) => (
                        <div key={index} className=' group hover:scale-105 transition-all duration-300 w-full h-fit border-2 border-amber-300 rounded-md'>
                            <div className=' w-full h-fit p-2 rounded-md bg-amber-800'>
                                <div className=' relative w-full h-[300px] flex  bg-zinc-950 rounded-md p-6 overflow-hidden'>

                                    <div className=' flex flex-col w-[60%]'>
                                        <h2 className=' bg-gradient-to-r from-amber-800 to-amber-800/0 p-2 text-white text-xl font-bold'>{item.title}</h2>
                                        <p className=' text-zinc-300 ~text-xs/lg mt-6'>{item.description}</p>

                                    </div>

                                    <img src={item.img} alt="img" className=' group-hover:scale-125 transition-all duration-300 h-full absolute top-0 right-0'/>

                                </div>
                            </div>
                        </div>
                    ))}
                    </div>
                    
                   

                    <Carousel setApi={setApi} className=' w-full block md:hidden'>
                    <CarouselContent>
                    {roadmap.map((item, index) => (
                        <CarouselItem key={index}>
                             <div  className=' w-full h-fit border-2 border-amber-300 rounded-md'>
                            <div className=' w-full h-fit p-2 rounded-md bg-amber-800'>
                                <div className='w-full h-[300px] flex  bg-zinc-950 rounded-md p-6'>

                                    <div className=' flex flex-col w-full'>
                                        <h2 className=' bg-gradient-to-r from-amber-800 to-amber-800/0 p-2 text-white ~text-lg/xl font-bold'>{item.title}</h2>
                                        <p className=' text-zinc-300 ~text-xs/lg mt-6'>{item.description}</p>

                                    </div>

                                    {/* <img src={item.img} alt="img" className=''/> */}

                                </div>
                            </div>
                        </div>
                        </CarouselItem>
                       
                    ))}
                    </CarouselContent>
                    <CarouselPrevious />
                    <CarouselNext />
                    </Carousel>

                    <div className="w-full h-full md:hidden flex items-center justify-center gap-2">
                        <button
                            onClick={() => api && api.scrollTo((current -1 ) - 1)}
                            disabled={current === 1}
                            className="bg-amber-950 p-2 rounded-sm w-fit text-white disabled:opacity-50"
                        >
                            <ArrowLeft size={20} />
                        </button>
                        <button
                            onClick={() => api && api.scrollTo((current - 1) + 1)}
                            disabled={current === roadmap.length - 1}
                            className="bg-amber-950 p-2 rounded-sm w-fit text-white disabled:opacity-50"
                        >
                            <ArrowRight size={20} />
                        </button>
                    </div>



                    <div className=' w-full flex items-center justify-center mdmt-12'>
                        <button className=' relative drop-shadow-lg flex items-center justify-center'>
                            <img src="/investor/assets/BUTTON.png" alt="button" width={500} height={500} className=' ~w-72/96'/>
                            <p className=' ~text-sm/xl font-bold text-white absolute'>DOWNLOAD THE PITCH DECK</p>
                        </button>

                    </div>
                    

                </div>

            </div>
        </div>




    </div>
  )
}
