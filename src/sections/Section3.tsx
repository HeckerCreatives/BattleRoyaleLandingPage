"use client"
import React, { use, useEffect, useState } from 'react'
import { RiArrowRightDoubleLine } from 'react-icons/ri'
import {motion} from 'framer-motion'
import { fadeIn } from '@/lib/variant'
import axios from 'axios'
import { MdOutlineKeyboardArrowLeft,  MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Skeleton } from "@/components/ui/skeleton"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { list } from 'postcss'

interface News {
    banner:string
description:string
newsid:string
title:string

}


export default function Section3() {
    const [data, setData] = useState<News[]>([])
    const [ totalpages, setTotalpages] = useState(0)
    const [ currentpage, setCurrentpage] = useState<number>(0)
    const [loading, setLoading] = useState(false)
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [img, setImg] = useState('')
    const [id,setId] = useState('')
    const [ imgurlleft, setImgurlleft] = useState(`${process.env.NEXT_PUBLIC_API_URL}/${img.replace(/\\/g, '/')}`)

    console.log('right', imgurlleft)

    useEffect(() => {
        const news = async () => {
            setLoading(true)
            try {
                const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/news/getnewslist?page=${currentpage}&limit=3`)
                setLoading(false)
                setTitle(response.data.data.news[0].title)
                setDescription(response.data.data.news[0].description)
                setImg(response.data.data.news[0].banner)
                setId(response.data.data.news[0].newsid)
                setTotalpages(response.data.data.totalpages)
                setData(response.data.data.news)
                console.log(response.data)
            } catch (error) {
                
            }
        }
        news()
    },[currentpage])

    console.log(totalpages)


  return (
    <div id='news' className=' w-screen flex items-start justify-center h-auto pb-40 md:pb-56 lg:pb-40 py-20'
     style={{backgroundImage: "url('/assets/section 3 BG.png')", backgroundSize: "cover", backgroundPosition: "center", backgroundRepeat:"no-repeat"}}
    >
        <div className=' hidden max-w-[1920px] w-full lg:flex flex-row items-start justify-center text-white'>

                {data.length !== 0 && (
                    <motion.div 
                    variants={fadeIn('right', .2)}
                    initial='hidden'
                    whileInView={'show'}
                    viewport={{once:false, amount: 0.2}}
                    className=' flex flex-col gap-2 p-6 w-[60%] h-auto'>
                     <h2 className=' text-3xl font-bold italic'>LATEST NEWS</h2>
                    <div className=' grid place-items-center grid-cols-2 bg-red-950 rounded-lg h-[550px]'>

                    <div className=' w-[90%] h-[300px] bg-red-900 flex items-center justify-center rounded-xl'
                     style={{
                        backgroundImage: `url('${process.env.NEXT_PUBLIC_API_URL}/${img.replace(/\\/g, '/')}')`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        backgroundRepeat: "no-repeat"
                    }}
                    >
                        
                        {/* <img src={`${process.env.NEXT_PUBLIC_API_URL}/${img.replace(/\\/g, '/')}`} alt="" width={400} height={400} className=' rounded-lg' /> */}
                    </div>

                    <div className=' flex flex-col gap-5 w-full h-auto rounded-xl p-6 text-white'>
                        <p className=' text-sm font-semibold'>11.11.18/ in <span className=' text-secondary'>GAMES</span></p>
                        <h2 className=' text-2xl font-bold'>{title}</h2>
                        <h2 className=' text-lg font-semibold text-zinc-200 line-clamp-4'>{description}</h2>
                       
                        <Dialog>
                        <DialogTrigger>
                             <h2 className=' flex items-center gap-4 text-2xl font-bold italic mt-5'>READ MORE <RiArrowRightDoubleLine size={50} className=' text-secondary'/></h2>
                        </DialogTrigger>
                        <DialogContent className=' text-white p-10 bg-zinc-950 border-zinc-900 w-[80%] h-[80%] flex flex-col items-center gap-4'>
                            <div className=' w-full h-[40%] rounded-md' 
                             style={{
                                backgroundImage: `url('${process.env.NEXT_PUBLIC_API_URL}/${img.replace(/\\/g, '/')}')`,
                                backgroundSize: "cover",
                                backgroundPosition: "center",
                                backgroundRepeat: "no-repeat"
                            }}
                            >

                            </div>
                        
                           <div className=' w-full'>
                            <p className=' text-secondary text-2xl font-bold'>{title}</p>
                           </div>

                           <div className=' w-full h-[50%] overflow-y-auto'>
                            <p className=' text-lg text- start text-zinc-300 whitespace-pre-line'>{description}</p>
                           </div>
                        </DialogContent>
                        </Dialog>

                    </div>

                    </div>
                     </motion.div>
                )}
               

                { data.length === 0 && (
                    <div className=' w-full flex items-center justify-center mt-10'>
                      <h2 className=' text-3xl font-bold italic'>NO NEWS YET!</h2>

                    </div>
                )} 

                {data.length !== 0 && (
                    <motion.div 
                    variants={fadeIn('left', .2)}
                    initial='hidden'
                    whileInView={'show'}
                    viewport={{once:false, amount: 0.2}}
                    className=' w-[30%] h-[500px] mt-8'>

                        <div className=' w-full grid grid-cols-1 gap-6 mt-10 h-[500px]'>

                            {loading ? (
                                <>
                                <div className='w-full flex items-center gap-4'>
                                
                                    <Skeleton className="w-[100px] h-[100px] rounded-md bg-zinc-300 bg-opacity-30" />
                                    
                                    <div className=' flex flex-col gap-1 w-[70%]'>
                                        <Skeleton className="w-full h-[30px] rounded-md bg-zinc-300 bg-opacity-30" />
                                        <Skeleton className="w-full h-[70px] rounded-md bg-zinc-300 bg-opacity-30" />
                                    </div>

                                </div>

                                <div className='w-full flex items-center gap-4 mt-4'>
                                
                                    <Skeleton className="w-[100px] h-[100px] rounded-md bg-zinc-300 bg-opacity-30" />
                                    
                                    <div className=' flex flex-col gap-1 w-[70%]'>
                                        <Skeleton className="w-full h-[30px] rounded-md bg-zinc-300 bg-opacity-30" />
                                        <Skeleton className="w-full h-[70px] rounded-md bg-zinc-300 bg-opacity-30" />
                                    </div>

                                </div>

                                <div className='w-full flex items-center gap-4 mt-4'>
                                
                                    <Skeleton className="w-[100px] h-[100px] rounded-md bg-zinc-300 bg-opacity-30" />
                                    
                                    <div className=' flex flex-col gap-1 w-[70%]'>
                                        <Skeleton className="w-full h-[30px] rounded-md bg-zinc-300 bg-opacity-30" />
                                        <Skeleton className="w-full h-[70px] rounded-md bg-zinc-300 bg-opacity-30" />
                                    </div>

                                </div>
                                </>
                            ):(
                                <div className=' flex flex-col gap-4'>
                                { data.map((news, idx) => {
                                    const imageUrl = `${process.env.NEXT_PUBLIC_API_URL}/${news.banner.replace(/\\/g, '/')}`;
                                  
                                    return (
                                        <div 
                                            onClick={() => { 
                                                setTitle(news.title); 
                                                setDescription(news.description); 
                                                setImg(news.banner); 
                                                setId(news.newsid); 
                                            }} 
                                            key={idx} 
                                            className={`w-full flex items-center p-3 gap-4 h-[170px] ${news.newsid === id ? 'bg-red-950 rounded-md h-[170px]' : ''}`}
                                        >
                                            <div className='rounded-lg'>
                                                <div 
                                                    className='h-[120px] w-[200px] rounded-md background-image' 
                                                    style={{
                                                        backgroundImage: `url('${imageUrl}')`,
                                                        backgroundSize: "cover",
                                                        backgroundPosition: "center",
                                                        backgroundRepeat: "no-repeat"
                                                    }}
                                                >
                                                    {/* Temporarily remove the <img> tag */}
                                                    {/* <img src={imageUrl} alt="" /> */}
                                                </div>
                                            </div>
                                            <div className='flex flex-col gap-1 w-[70%]'>
                                                <p className='text-lg font-semibold line-clamp-2'>{news.title}</p>
                                                <p className='text-sm text-zinc-100 line-clamp-3'                                                
                                                >{news.description}</p>
                                            </div>
                                        </div>
                                    );
                                })}

                                </div>
                            )}

                            <div className={` ${ totalpages === 1 ? 'hidden' : 'flex items-center justify-center gap-4 mt-4'}`}>
                                    <button 
                                    onClick={() => setCurrentpage( currentpage - 1)}
                                    disabled={loading ? true : currentpage === 0} 
                                    className=' text-secondary'><MdOutlineKeyboardArrowLeft size={40}/></button>
                                    <p className=' text-lg font-bold bg-zinc-950 px-4 py-2 text-center  rounded-md'>{currentpage + 1}</p>
                                    <button
                                    onClick={() => setCurrentpage(currentpage + 1)}
                                    disabled={ loading ? true :  currentpage + 1 === totalpages}
                                    className=' text-secondary'><MdOutlineKeyboardArrowRight size={40}/></button>

                            </div>
                            
                        </div>
                    </motion.div>
                )}

            
        </div>

        <div className='lg:hidden max-w-[1920px] w-[90%] flex flex-col items-start justify-center text-white gap-4 '>

            { data.length !== 0 && (
                <>
                 <motion.div 
             variants={fadeIn('right', .2)}
            initial='hidden'
            whileInView={'show'}
            viewport={{once:false, amount: 0.2}}
            className=' flex flex-col gap-2 w-full h-auto'>
                <h2 className=' text-3xl font-bold italic'>LATEST NEWS</h2>
                <div className=' grid place-items-center grid-cols-1 bg-red-950 rounded-lg h-auto p-4'>

                   <div className=' w-full h-[300px] bg-red-900 flex items-center justify-center rounded-xl'
                     style={{
                        backgroundImage: `url('${process.env.NEXT_PUBLIC_API_URL}/${img.replace(/\\/g, '/')}')`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        backgroundRepeat: "no-repeat"
                    }}
                    >
                    </div>

                    <div className=' flex flex-col gap-5 w-full h-auto rounded-xl p-6 text-white'>
                        <p className=' text-sm font-semibold'>11.11.18/ in <span className=' text-secondary'>GAMES</span></p>
                        <h2 className=' text-2xl font-bold'>{title}</h2>
                        <h2 className=' text-lg font-semibold text-zinc-200 line-clamp-4'>{description}</h2>
                       
                        <Dialog>
                        <DialogTrigger>
                             <h2 className=' flex items-center gap-4 text-2xl font-bold italic mt-5'>READ MORE <RiArrowRightDoubleLine size={50} className=' text-secondary'/></h2>
                        </DialogTrigger>
                        <DialogContent className=' text-white p-8 bg-zinc-950 border-zinc-900 w-[90%] md:w-[400px] flex flex-col items-center gap-4'>
                           <img src={`${process.env.NEXT_PUBLIC_API_URL}/${img}`} alt="image" width={500} height={500} />
                           <div className=' w-full'>
                            <p className=' text-secondary text-lg font-semibold'>{title}</p>
                           </div>

                           <div className=' w-full h-[250px] overflow-y-auto'>
                            <p className=' text-sm text-zinc-300 text-start'>{description}</p>
                           </div>
                        </DialogContent>
                        </Dialog>

                    </div>

                </div>

              
                </motion.div>
                </>
            )}

            { data.length === 0 && (
                    <div className=' w-full flex items-center justify-center mt-10'>
                      <h2 className=' text-3xl font-bold italic'>NO NEWS YET!</h2>

                    </div>
                )} 

            { data.length !== 0 && (
                <>
                    <motion.div 
             variants={fadeIn('left', .2)}
            initial='hidden'
            whileInView={'show'}
            viewport={{once:false, amount: 0.2}}
            className=' w-full h-[500px] mt-8'>

                <div className=' w-full grid grid-cols-1 gap-6 mt-10 h-[500px]'>

                    {loading ? (
                        <div className=' w-full h-auto flex flex-col gap-4 items-center justify-center'>
                            <div className='w-full flex items-center justify-center gap-4'>
                            
                                <Skeleton className="w-[100px] h-[100px] rounded-md bg-zinc-300 bg-opacity-30" />
                                
                                <div className=' flex flex-col gap-1 w-[70%]'>
                                    <Skeleton className="w-full h-[30px] rounded-md bg-zinc-300 bg-opacity-30" />
                                    <Skeleton className="w-full h-[70px] rounded-md bg-zinc-300 bg-opacity-30" />
                                </div>

                            </div>

                            <div className='w-full flex items-center justify-center gap-4 mt-4'>
                            
                                <Skeleton className="w-[100px] h-[100px] rounded-md bg-zinc-300 bg-opacity-30" />
                                
                                <div className=' flex flex-col gap-1 w-[70%]'>
                                    <Skeleton className="w-full h-[30px] rounded-md bg-zinc-300 bg-opacity-30" />
                                    <Skeleton className="w-full h-[70px] rounded-md bg-zinc-300 bg-opacity-30" />
                                </div>

                            </div>

                            <div className='w-full flex items-center justify-center gap-4 mt-4'>
                            
                                <Skeleton className="w-[100px] h-[100px] rounded-md bg-zinc-300 bg-opacity-30" />
                                
                                <div className=' flex flex-col gap-1 w-[70%]'>
                                    <Skeleton className="w-full h-[30px] rounded-md bg-zinc-300 bg-opacity-30" />
                                    <Skeleton className="w-full h-[70px] rounded-md bg-zinc-300 bg-opacity-30" />
                                </div>

                            </div>
                        </div>
                    ):(
                        <>
                         { data.map((news, idx) =>(
                         <div onClick={() => {setTitle(news.title); setDescription(news.description); setImg(news.banner); setId(news.newsid)}} key={idx} className={`w-full flex items-center p-3 gap-4 ${ news.newsid === id && ' bg-red-950 rounded-md'}`}>
                            <div className=' rounded-lg'
                            
                            >
                                <img src={`${process.env.NEXT_PUBLIC_API_URL}/${news.banner}`} alt="" width={200} height={200} />
                                </div>
                                <div className=' flex flex-col gap-1 w-[70%]'>
                                    <p className='text-lg font-semibold line-clamp-2'>{news.title}</p>
                                    <p className=' text-sm text-zinc-100 line-clamp-3'>{news.description}</p>
                                </div>
                                

                            </div>
                        ))}
                        </>
                    )}

                    

                    <div className={` ${ totalpages === 1 ? 'hidden' : 'flex items-center justify-center gap-4 mt-4'}`}>
                            <button 
                            onClick={() => setCurrentpage( currentpage - 1)}
                            disabled={loading ? true : currentpage === 0} 
                            className=' text-secondary'><MdOutlineKeyboardArrowLeft size={40}/></button>
                            <p className=' text-lg font-bold bg-zinc-950 px-4 py-2 text-center  rounded-md'>{currentpage + 1}</p>
                            <button
                            onClick={() => setCurrentpage(currentpage + 1)}
                            disabled={ loading ? true :  currentpage + 1 === totalpages}
                            className=' text-secondary'><MdOutlineKeyboardArrowRight size={40}/></button>

                    </div>
                    
                </div>
                    </motion.div>
                </>
            )}
           

           
        </div>

    

    </div>
  )
}
