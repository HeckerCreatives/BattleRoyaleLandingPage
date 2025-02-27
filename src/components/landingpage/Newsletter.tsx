import { toast } from '@/components/ui/use-toast'
import axios, { AxiosError } from 'axios'
import { motion } from 'framer-motion'
import router from 'next/router'
import React, { useState } from 'react'

export default function Newsletter() {
  const [email, setEmail] = useState('')
  const [loading, setLoadingf] = useState(false)

  const subscribe = async () => {
    setLoadingf(true)
    try {
      const response =  await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/subscription/subscribe`,{
        email: email,
      },{
        withCredentials: true,
        headers: {
          'Content-Type': 'application/json',
        }
      })

      console.log(response.data)
      if(response.data.message === 'success'){
        setLoadingf(false)
        setEmail('')
        toast({
          variant: 'default',
          title: "Success",
          })
      }
    } catch (error) {
      setLoadingf(false)
      setEmail('')

      if (axios.isAxiosError(error)) {
        const axiosError = error as AxiosError<{ message: string, data: string }>;
        if (axiosError.response && axiosError.response.status === 401) {
            localStorage.setItem('auth', 'false');
            toast({
            variant: "destructive",
            title: "Unauthorized",
            })
    
        }
        if (axiosError.response && axiosError.response.status === 400) {
          toast({
            variant: "destructive",
            title: `${axiosError.response.data.data}`,
            })   
              
      }

      if (axiosError.response && axiosError.response.status === 402) {
        toast({
          variant: "destructive",
          title: `${axiosError.response.data.data}`,
          })           
                  
      }

      if (axiosError.response && axiosError.response.status === 403) {
        toast({
          variant: "destructive",
          title: `${axiosError.response.data.data}`,
          })              
          
      }

      if (axiosError.response && axiosError.response.status === 404) {
        toast({
          variant: "destructive",
          title: `${axiosError.response.data.data}`,
          })               
      }
    } 
      
    }
  }


  return (
    <div id='newsletter' className=' flex items-center justify-center w-screen h-[500px]'
    //  style={{backgroundImage: "url('/assets/6th section BG.png')", backgroundSize: "cover", backgroundPosition: "center", backgroundRepeat:"no-repeat"}}
    >

        <div className=' flex flex-col items-center justify-center gap-10 '>
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
            }}
            className=' text-2xl lg:text-4xl font-bold italic text-white font-gilgond text-center'>Subscribe to our news letter!</motion.h2>
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
            }}
            className=' flex lg:flex-row flex-col items-center justify-center gap-4'>
                <input value={email} onChange={(e) => setEmail(e.target.value)} type="text" name="" id="" placeholder='ENTER YOUR EMAIL' className=' placeholder:text-white text-xl font-bold px-6 text-white bg-zinc-950 bg-opacity-5 rounded-lg h-[50px] md:w-[400px] lg:w-[750px]'
                style={{backgroundImage: "url('/assets/enter your email holder.png')", backgroundSize: "cover", backgroundPosition: "center", backgroundRepeat:"no-repeat"}}
                />
                <button onClick={subscribe} className=' h-[80px] w-[250px] text-xl font-bold text-amber-950 hover:scale-110 ease-in-out duration-300 flex items-center justify-center gap-2'
                style={{backgroundImage: "url('/assets/button.png')", backgroundSize: "contain", backgroundPosition: "center", backgroundRepeat:"no-repeat"}}
                >
                   { loading === true && (
                          <div className="loader">
                              <div className="bar1 bg-white"></div>
                              <div className="bar2 bg-white"></div>
                              <div className="bar3 bg-white"></div>
                              <div className="bar4 bg-white"></div>
                              <div className="bar5 bg-white"></div>
                              <div className="bar6 bg-white"></div>
                              <div className="bar7 bg-white"></div>
                              <div className="bar8 bg-white"></div>
                              <div className="bar9 bg-white"></div>
                              <div className="bar10 bg-white"></div>
                              <div className="bar11 bg-white"></div>
                              <div className="bar12 bg-white"></div>
                          </div>
                        )}
                  SUBSCRIBE</button>
            </motion.div>
        </div>

    </div>
  )
}
