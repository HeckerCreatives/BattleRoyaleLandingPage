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

const Description = [
    {
    id: 1,
    name: 'MAP 1',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."'
},
{
    id: 2,
    name: 'MAP 2',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."'
},
{
    id: 3,
    name: 'MAP 3',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."'
},
{
    id: 4,
    name: 'MAP 4',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."'
}
]


export default function Maps() {

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


  return (
   <div id='maps' className=' w-full lg:h-screen h-auto flex flex-col items-center justify-center py-20'
     style={{backgroundImage: "url('/v2/stage/assets/BG.png')", backgroundSize: "cover", backgroundPosition: "center", backgroundRepeat:"no-repeat"}}
    >
        <h2 className=' text-2xl md:text-4xl lg:text-5xl font-bold text-orange-400'>THE MAP</h2>

        <div className='relative max-w-[1920px] w-[90%] lg:w-[85%] lg:h-[700px] h-auto grid grid-cols-1 lg:grid-cols-2 place-items-center gap-5'>
             <div className=' w-full flex flex-col'>
                <Carousel className=' w-full' setApi={setApi}>
                    <CarouselContent>
                        <CarouselItem className=' w-full'>
                            <div className=' relative flex flex-col gap-5 w-full md:h-[400px] h-[250px] rounded-xl p-6 text-white'
                                style={{backgroundImage: "url('/v2/stage/assets/Tab A.png')", backgroundSize: "contain", backgroundPosition: "center", backgroundRepeat:"no-repeat"}}
                            >
                            
                            </div>

                        </CarouselItem>

                        <CarouselItem>
                            <div className=' relative flex flex-col gap-5 w-full last:md:h-[400px] h-[250px] rounded-xl p-6 text-white'
                                style={{backgroundImage: "url('/v2/stage/assets/Tab B.png')", backgroundSize: "contain", backgroundPosition: "center", backgroundRepeat:"no-repeat"}}
                            >
                            
                            </div>
                            
                        </CarouselItem>

                        <CarouselItem>
                            <div className=' relative flex flex-col gap-5 w-full md:h-[400px] h-[250px] rounded-xl p-6 text-white'
                                style={{backgroundImage: "url('/v2/stage/assets/Tab C.png')", backgroundSize: "contain", backgroundPosition: "center", backgroundRepeat:"no-repeat"}}
                            >
                            
                            </div>
                            
                        </CarouselItem>

                        <CarouselItem>
                            <div className=' relative flex flex-col gap-5 w-full md:h-[400px] h-[250px] rounded-xl p-6 text-white'
                                style={{backgroundImage: "url('/v2/stage/assets/Tab D.png')", backgroundSize: "contain", backgroundPosition: "center", backgroundRepeat:"no-repeat"}}
                            >
                            
                            </div>
                            
                        </CarouselItem>

                        

                        
                        
                    </CarouselContent>
            
                </Carousel>

                <div className=' flex items-center justify-center gap-4 w-full md:mt-6 mt-4'>
                    { current === 1 ? (
                         <div className=' w-4 h-4 rounded-full bg-orange-400'>

                        </div>
                    ): (
                        <div className=' w-3 h-3 rounded-full bg-orange-200'>

                        </div>
                    )}

                    { current === 2 ? (
                          <div className=' w-4 h-4 rounded-full bg-orange-400'>

                        </div>
                    ): (
                       <div className=' w-3 h-3 rounded-full bg-orange-200'>

                        </div>
                    )}

                    { current === 3 ? (
                          <div className=' w-4 h-4 rounded-full bg-orange-400'>

                        </div>
                    ): (
                        <div className=' w-3 h-3 rounded-full bg-orange-200'>

                        </div>
                    )}

                    { current === 4 ? (
                          <div className=' w-4 h-4 rounded-full bg-orange-400'>

                        </div>
                    ): (
                          <div className=' w-3 h-3 rounded-full bg-orange-200'>

                        </div>
                    )}


                 

                </div>
             </div>
             

            <div className=' hidden lg:block 2xl:w-[500px] 2xl:h-[500px] xl:w-[400px] xl:h-[400px] lg:w-[350px] lg:h-[350px] md:w-[95%] md:h-[650px] h-[350px] lg:p-8 md:p-12 p-8 '
            style={{backgroundImage: "url('/v2/stage/assets/Description Tab.png')", backgroundSize: "contain", backgroundPosition: "center", backgroundRepeat:"no-repeat"}}
            >
                { current === 1 && (
                    <div className=' flex flex-col gap-4 lg:w-full h-full overflow-y-auto'>
                        <p className=' text-2xl md:text-4xl font-bold text-orange-300'>{Description[0].name}</p>
                        <p className=' text-sm md:text-lg text-orange-100'>{Description[0].description}</p>
                    </div>
                )}

                { current === 2 && (
                    <div className=' flex flex-col gap-4  w-full h-full overflow-y-auto'>
                        <p className=' text-2xl md:text-4xl font-bold text-orange-300'>{Description[1].name}</p>
                        <p className=' text-sm md:text-lg text-orange-100'>{Description[1].description}</p>
                    </div>
                )}

                 { current === 3 && (
                    <div className=' flex flex-col gap-4  w-full h-full overflow-y-auto'>
                        <p className=' text-2xl md:text-4xl font-bold text-orange-300'>{Description[2].name}</p>
                        <p className=' text-sm md:text-lg text-orange-100'>{Description[2].description}</p>
                    </div>
                )}

                 { current === 4 && (
                    <div className=' flex flex-col gap-4  w-full h-full overflow-y-auto'>
                        <p className=' text-2xl md:text-4xl font-bold text-orange-300'>{Description[3].name}</p>
                        <p className=' text-sm md:text-lg text-orange-100'>{Description[3].description}</p>
                    </div>
                )}

            </div>

            <div className='lg:hidden block w-[90%] h-[300px] lg:p-8 md:p-12 p-8 '
            style={{backgroundImage: "url('/v2/stage/assets/Description Tab.png')", backgroundSize: "cover", backgroundPosition: "center", backgroundRepeat:"no-repeat"}}
            >
                { current === 1 && (
                    <div className=' flex flex-col gap-4 lg:w-full h-full overflow-y-auto'>
                        <p className=' text-2xl md:text-4xl font-bold text-orange-300'>{Description[0].name}</p>
                        <p className=' text-sm md:text-lg text-orange-100'>{Description[0].description}</p>
                    </div>
                )}

                { current === 2 && (
                    <div className=' flex flex-col gap-4  w-full h-full overflow-y-auto'>
                        <p className=' text-2xl md:text-4xl font-bold text-orange-300'>{Description[1].name}</p>
                        <p className=' text-sm md:text-lg text-orange-100'>{Description[1].description}</p>
                    </div>
                )}

                 { current === 3 && (
                    <div className=' flex flex-col gap-4  w-full h-full overflow-y-auto'>
                        <p className=' text-2xl md:text-4xl font-bold text-orange-300'>{Description[2].name}</p>
                        <p className=' text-sm md:text-lg text-orange-100'>{Description[2].description}</p>
                    </div>
                )}

                 { current === 4 && (
                    <div className=' flex flex-col gap-4  w-full h-full overflow-y-auto'>
                        <p className=' text-2xl md:text-4xl font-bold text-orange-300'>{Description[3].name}</p>
                        <p className=' text-sm md:text-lg text-orange-100'>{Description[3].description}</p>
                    </div>
                )}

            </div>
        </div>

    </div>
  )
}
