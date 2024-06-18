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
    <div id='news' className=' relative z-30 w-screen flex items-start justify-center h-auto md:py-40 py-20'
     style={{backgroundImage: "url('/v2/news/assets/BG.png')", backgroundSize: "cover", backgroundPosition: "center", backgroundRepeat:"no-repeat"}}
    >
        <div className=' hidden max-w-[1920px] w-full lg:flex flex-row gap-4 h-[500px] items-center justify-center text-white'>
            {data.length !== 0 && (
                <h2 className=' text-3xl font-bold italic absolute top-14 left-24'>LATEST NEWS</h2>

            )}

                {data.length !== 0 && (
                    <motion.div 
                    variants={fadeIn('right', .2)}
                    initial='hidden'
                    whileInView={'show'}
                    viewport={{once:false, amount: 0.2}}
                    className=' flex flex-col items-start gap-2 lg:w-[60%] xl:w-[50%] h-full'>
                    <div className=' grid place-items-center grid-cols-2 rounded-lg  w-full p-6 border-4 h-full border-orange-300'
                    style={{backgroundImage: "url('/v2/news/assets/Tab Big.png')", backgroundSize: "cover", backgroundPosition: "center", backgroundRepeat:"no-repeat"}}
                    >

                    <div className=' w-[90%] h-[400px] lg:h-[280px] bg-red-900 flex items-center justify-center rounded-xl'
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
                        <DialogTrigger className=' bg-gradient-to-r from-orange-300 to-orange-400 rounded-md w-[200px] py-2 flex items-center justify-center'>
                             <h2 className=' flex items-center gap-2 text-amber-950 text-lg font-bold italic'>READ MORE <RiArrowRightDoubleLine size={30} className=' text-amber-950'/></h2>
                        </DialogTrigger>
                        <DialogContent className=' text-white p-10 bg-zinc-950 border-4 border-orange-300 rounded-md w-[80%] h-[80%] flex flex-col items-center gap-4'
                        style={{backgroundImage: "url('/v2/news/Tab Big.png')", backgroundSize: "cover", backgroundPosition: "center", backgroundRepeat:"no-repeat"}}
                        >
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
                    className=' flex flex-col gap-4 items-center w-[30%] h-full '>

                        <div className=' w-full grid grid-cols-1 gap-6 h-full'>

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
                                <div className=' flex flex-col gap-4 items-start justify-start lg:h-[400px] xl:h-[450px] 2xl:h-[500px]'>
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
                                            className={`w-full flex items-center gap-4 h-[150px] lg:h-[120px] xl:h-[140px] 2xl:h-[170px] px-6 border-4 border-orange-300 rounded-md ${news.newsid === id ? ' rounded-md h-[160px] ' : ''}`}

                                            style={{backgroundImage: "url('/v2/news/assets/Tab Small A.png')", backgroundSize: "cover", backgroundPosition: "center", backgroundRepeat:"no-repeat"}}

                                            >
                                            <div className='rounded-lg'>
                                                <div 
                                                    className=' h-[70px]  2xl:h-[110px] w-[120px] 2xl:w-[200px] rounded-md background-image' 
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

                          
                            
                        </div>

                          <div className={` ${ totalpages === 1 ? 'hidden' : 'flex items-center justify-center gap-4'}`}>
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
                <div className=' grid place-items-center grid-cols-1 rounded-lg h-auto p-8 mt-6 border-4 border-orange-300'
                style={{backgroundImage: "url('/v2/news/assets/Tab Big.png')", backgroundSize: "cover", backgroundPosition: "center", backgroundRepeat:"no-repeat"}}
                
                >

                   <div className=' w-full h-[220px] bg-red-900 flex items-center justify-center rounded-xl'
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
                       <DialogTrigger className=' bg-gradient-to-r from-orange-300 to-orange-400 rounded-md w-[200px] py-2 flex items-center justify-center'>
                             <h2 className=' flex items-center gap-2 text-amber-950 text-lg font-bold italic'>READ MORE <RiArrowRightDoubleLine size={30} className=' text-amber-950'/></h2>
                        </DialogTrigger>
                        <DialogContent className=' text-white p-8 bg-zinc-950 rounded-md w-[90%] md:w-[400px] flex flex-col items-center gap-4 border-4 border-orange-300'
                        style={{backgroundImage: "url('/v2/news/Tab Big.png')", backgroundSize: "cover", backgroundPosition: "center", backgroundRepeat:"no-repeat"}}
                        
                        >
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
            className=' w-full h-[450px] mt-4'>

                <div className=' w-full grid grid-cols-1 gap-2  h-[450px]'>

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
                         <div onClick={() => {setTitle(news.title); setDescription(news.description); setImg(news.banner); setId(news.newsid)}} key={idx} className={`w-full flex items-center py-3 px-8 h-[120px] gap-4 border-4 border-orange-300 rounded-md ${ news.newsid === id && ' bg-red-950 rounded-md'}`}
                        style={{backgroundImage: "url('/v2/news/assets/Tab Small A.png')", backgroundSize: "cover", backgroundPosition: "center", backgroundRepeat:"no-repeat"}}
                         
                         >
                            <div className=' rounded-lg'
                            
                            >
                                <img src={`${process.env.NEXT_PUBLIC_API_URL}/${news.banner}`} alt="" width={200} height={200} />
                                </div>
                                <div className=' flex flex-col gap-1 w-[70%]'>
                                    <p className='text-lg font-semibold line-clamp-2'>{news.title}</p>
                                    <p className=' text-sm text-zinc-100 line-clamp-2'>{news.description}</p>
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
