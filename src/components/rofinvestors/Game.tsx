'use client'
import React, { useState } from 'react'
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
  } from "@/components/ui/carousel"
  

export default function Game() {
    const [active, setActive] = useState('maps')
  return (
    <div id='game' className=' w-full relative h-full flex items-center justify-center ~py-32/48'>
        <img src="/investor/assets/Plate for GAME section.png" alt="bg" className=' absolute h-full w-full' />
        

        <div className=' relative z-20 w-full h-full flex flex-col gap-8 items-center px-4'>

            <img src="/investor/assets/game.png" alt="game" width={150} height={150} className=' ~w-24/36' />

            <p className=' ~text-xs/lg max-w-[900px] text-center text-zinc-100'>Rise of Fearless brings history to life with immersive gameplay. Players embody African warriors inspired by those who triumphed at Adwa, using their knowledge of the land and strategic brilliance to overcome challenges.</p>


            {/* <img src="/assets/Video.png" alt="video" className=' md:mt-8'/> */}

            <iframe className=' w-full aspect-video max-w-[1200px]'  src="https://www.youtube.com/embed/GhXPJRaQ4ng?si=W1efIUmizdSA5RMB" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>


            <div className=' grid grid-cols-1 md:grid-cols-2 lg:gap-6 max-w-[1540px] w-full h-auto bg-zinc-950 rounded-md border-8 border-amber-400 ~mt-4/32 p-10'>
                <div className=' flex flex-col h-fit ~gap-4/8'>
                    <p onClick={() => setActive('maps')} className={` cursor-pointer ~text-xl/4xl font-bold text-white p-1 rounded-sm ${active === 'maps' && 'bg-gradient-to-r from-amber-700 to-amber-500'}`}>- Maps</p>
                    {active === 'maps' && (
                    <p className=' text-zinc-200 ~text-xs/sm ~py-1/4 ~pl-4/8'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium, id mollitia? Sunt optio perferendis saepe cumque ducimus neque nisi distinctio debitis similique, iusto aut nihil modi reprehenderit. Vitae, nobis odio.</p>
                    )}

                    <p onClick={() => setActive('characters')} className={` cursor-pointer ~text-xl/4xl font-bold text-white p-1 rounded-sm ${active === 'characters' && 'bg-gradient-to-r from-amber-700 to-amber-500'}`}>- Characters</p>
                        {active === 'characters' && (
                        <p className=' text-zinc-200 ~text-xs/sm ~py-1/4 ~pl-4/8'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium, id mollitia? Sunt optio perferendis saepe cumque ducimus neque nisi distinctio debitis similique, iusto aut nihil modi reprehenderit. Vitae, nobis odio.</p>
                        )}
                    <p onClick={() => setActive('gameplay')} className={` cursor-pointer ~text-xl/4xl font-bold text-white p-1 rounded-sm ${active === 'gameplay' && 'bg-gradient-to-r from-amber-700 to-amber-500'}`}>- Gameplay</p>
                    {active === 'gameplay' && (
                        <p className=' text-zinc-200 ~text-xs/sm ~py-1/4 ~pl-4/8'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium, id mollitia? Sunt optio perferendis saepe cumque ducimus neque nisi distinctio debitis similique, iusto aut nihil modi reprehenderit. Vitae, nobis odio.</p>
                        )}

                </div>

                <Carousel className=' w-full h-full '>
                <CarouselContent className=' w-full h-full'>
                    <CarouselItem>
                        <div className=' w-full h-[400px] bg-zinc-700 rounded-md'>
                        </div>
                    </CarouselItem>

                    <CarouselItem>
                        <div className=' w-full h-[400px] bg-zinc-700 rounded-md'>
                        </div>
                    </CarouselItem>
                  
                </CarouselContent>
                {/* <CarouselPrevious />
                <CarouselNext /> */}
                </Carousel>


               

            </div>

            <div className=' w-full flex items-center justify-center ~mt-2/12'>
                        <a href='https://rof.game/' target='_blank' className=' relative drop-shadow-lg flex items-center justify-center'>
                            <img src="/investor/assets/BUTTON.png" alt="button" width={500} height={500} className=' ~w-72/96'/>
                            <p className=' ~text-sm/xl font-bold text-white absolute'>TRY RISE OF FEARLESS NOW</p>
                        </a>

            </div>

        </div>

    </div>
  )
}
