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


export default function Latestnews() {
    const [data, setData] = useState<News[]>([])
    const [ totalpages, setTotalpages] = useState(0)
    const [ currentpage, setCurrentpage] = useState<number>(0)
    const [loading, setLoading] = useState(false)
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [img, setImg] = useState('')
    const [id,setId] = useState('')
    const [ imgurlleft, setImgurlleft] = useState(`${process.env.NEXT_PUBLIC_API_URL}/${img.replace(/\\/g, '/')}`)


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
            } catch (error) {
                
            }
        }
        news()
    },[currentpage])



  return (
    <div id='news' className=' relative z-30 w-screen flex items-start justify-center h-auto md:py-40 pb-20'
    >
        <div className=' max-w-[1440px] w-full flex flex-col gap-4 h-auto text-white px-4'>
            {data.length !== 0 && (
                <h2 className=' ~text-xl/3xl font-bold italic mb-6 font-gilgond mt-8'>LATEST NEWS</h2>

            )}

            {data.length !== 0 ? (
                <div className=' grid grid-cols-1 lg:grid-cols-[1fr_500px] gap-6'>
                <div className=' w-full'>
                    <motion.div 
                    variants={fadeIn('right', .2)}
                    initial='hidden'
                    whileInView={'show'}
                    viewport={{once:false, amount: 0.2}}
                    className=' flex flex-col items-start gap-2 aspect-video '>
                    <div className=' grid place-items-center grid-cols-2 rounded-lg  w-full p-6 border-2 h-full border-orange-300/70'
                    style={{backgroundImage: "url('/v2/news/assets/Tab Big.png')", backgroundSize: "cover", backgroundPosition: "center", backgroundRepeat:"no-repeat"}}
                    >

                    <div className=' w-[90%] aspect-video bg-zinc-900 flex items-center justify-center rounded-xl'
                     style={{
                        backgroundImage: `url('${process.env.NEXT_PUBLIC_API_URL}/${img.replace(/\\/g, '/')}')`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        backgroundRepeat: "no-repeat"
                    }}
                    >
                        
                    </div>

                    <div className=' flex flex-col ~gap-2/5 w-full h-auto rounded-xl p-6 text-white'>
                        <h2 className=' ~text-lg/2xl font-bold'>{title}</h2>
                        <h2 className=' ~text-xs/lg font-semibold text-zinc-200 line-clamp-4'>{description}</h2>
                       
                        <Dialog>
                        <DialogTrigger className=' bg-gradient-to-r from-orange-300 to-orange-400 rounded-md max-w-[200px] py-2 flex items-center justify-center'>
                             <h2 className=' flex items-center gap-2 text-amber-950 ~text-xs/lg font-bold italic'>READ MORE <RiArrowRightDoubleLine size={20} className=' text-amber-950'/></h2>
                        </DialogTrigger>
                        <DialogContent className=' text-white p-10 bg-zinc-950 border-2 border-orange-300/70 rounded-md w-[95%] max-h-[80%] overflow-y-auto flex flex-col items-center gap-4'
                        style={{backgroundImage: "url('/v2/news/Tab Big.png')", backgroundSize: "cover", backgroundPosition: "center", backgroundRepeat:"no-repeat"}}
                        >
                            <div className=' w-full aspect-video rounded-md' 
                             style={{
                                backgroundImage: `url('${process.env.NEXT_PUBLIC_API_URL}/${img.replace(/\\/g, '/')}')`,
                                backgroundSize: "cover",
                                backgroundPosition: "center",
                                backgroundRepeat: "no-repeat"
                            }}
                            >

                            </div>
                        
                           <div className=' w-full'>
                            <p className=' text-secondary ~text-lg/2xl font-bold'>{title}</p>
                           </div>

                           <div className=' w-full'>
                            <p className=' ~text-sm/lg text- start text-zinc-300 whitespace-pre-line'>{description}</p>
                           </div>
                        </DialogContent>
                        </Dialog>

                    </div>

                    </div>
                     </motion.div>
                </div>

                <div className=' w-full'>
                    <motion.div 
                    variants={fadeIn('left', .2)}
                    initial='hidden'
                    whileInView={'show'}
                    viewport={{once:false, amount: 0.2}}
                    className=' w-full flex flex-col gap-4 items-center '>

                        <div className=' w-full grid grid-cols-1 gap-6 h-full'>
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
                                            className={`w-full flex items-center gap-4 px-6 border-2 border-orange-300/70 rounded-md h-full min-h-[155px] cursor-pointer p-4`}

                                            style={{backgroundImage: "url('/v2/news/assets/Tab Small A.png')", backgroundSize: "cover", backgroundPosition: "center", backgroundRepeat:"no-repeat"}}

                                            >
                                                <img src={`${imageUrl}`} alt="img" className=' aspect-video' height={200} width={200} />
                                           
                                            <div className='flex flex-col gap-1 w-[500px]'>
                                                <p className='~text-xs/sm font-semibold line-clamp-2'>{news.title}</p>
                                                <p className='text-xs text-wrap text-zinc-300 line-clamp-3'                                                
                                                >{news.description}</p>
                                            </div>
                                        </div>
                                    );
                                })} 


                          
                            
                        </div>

                          <div className={` ${ totalpages === 1 ? 'hidden' : 'flex items-center justify-center gap-4'}`}>
                                    <button 
                                    onClick={() => setCurrentpage( currentpage - 1)}
                                    disabled={loading ? true : currentpage === 0} 
                                    className=' text-secondary cursor-pointer'><MdOutlineKeyboardArrowLeft size={40}/></button>
                                    <p className=' text-lg font-bold bg-zinc-950 px-4 py-2 text-center  rounded-md'>{currentpage + 1}</p>
                                    <button
                                    onClick={() => setCurrentpage(currentpage + 1)}
                                    disabled={ loading ? true :  currentpage + 1 === totalpages}
                                    className=' text-secondary cursor-pointer'><MdOutlineKeyboardArrowRight size={40}/></button>

                            </div>
                    </motion.div>
                </div>
                

                </div>
            ) : (
                <div className=' w-full flex items-center justify-center mt-10'>
                    <h2 className=' text-3xl font-bold italic'>NO NEWS YET!</h2>
                </div>
            )}
            
        </div>

    
    

    </div>
  )
}
