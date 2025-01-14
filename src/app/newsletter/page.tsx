'use client'
import Loader from '@/components/Loader'
import { toast } from '@/components/ui/use-toast'
import Footer from '@/sections/Footer'
import Navbar from '@/sections/Navbar'
import axios, { AxiosError } from 'axios'
import { useRouter, useSearchParams } from 'next/navigation'
import React, { useState } from 'react'

export default function page() {
    const [email, setEmail] = useState('')
    const [loading, setLoadingf] = useState(false)
    const params = useSearchParams()
    const getEmail = params.get('email')
    const router = useRouter()

    
    const unsubscribe = async () => {
        setLoadingf(true)
        try {
          const response =  await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/subscription/unsubscribe`,{
            email: getEmail,
          },{
            withCredentials: true,
            headers: {
              'Content-Type': 'application/json',
            }
          })
    
          console.log(response.data)
          if(response.data.message === 'success'){
            setLoadingf(false)
            router.push('/')
            setEmail('')
            toast({
              variant: 'default',
              title: "Successfully unsubcribe to the newsletter",
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

   <div className=' download w-screen h-auto flex flex-col items-center justify-center'
       style={{backgroundImage: "url('/pd/BG.png')", backgroundSize: "cover", backgroundPosition: "bottom", backgroundRepeat:"no-repeat"}}
       
       >
           <div className=' max-w-[1920px] flex flex-col items-center justify-start gap-10 w-screen h-auto pb-20'
           style={{backgroundImage: "url('/pd/BG.png')", backgroundSize: "cover", backgroundPosition: "bottom", backgroundRepeat:"no-repeat"}}
           >
           <Navbar/>
   
           <div className=' w-[80%] md:w-[50%] h-[700px] flex flex-col gap-6 items-center justify-center mt-20 lg:mt-5'>

            <div className=' flex flex-col gap-2 items-center justify-center'>
                <img src="/assets/logo 06 B.png" alt="" width={180} height={180} className='hover:scale-110 ease-in-out duration-200 xl:w-[180px] lg:w-[160px] mb-6' />

                <p className=' text-lg  mb-4 text-orange-500'>{getEmail}</p>
                <p className=' text-xl text-white'>Are you sure about unsubcribing Rise of Fearless Newsletter?</p>
                <p className=' text-zinc-400'>If you unsubscribe now, you will miss news & updates.</p>

                <div className=' flex items-center gap-8'>
                    <a href='/' className=' bg-zinc-800 px-6 py-2 rounded-md text-white'>Cancel</a>

                    <button onClick={unsubscribe} className=' h-[80px] w-[200px] text-sm font-bold text-amber-950 hover:scale-110 ease-in-out duration-300 flex items-center justify-center gap-2'
                        style={{backgroundImage: "url('/assets/button.png')", backgroundSize: "contain", backgroundPosition: "center", backgroundRepeat:"no-repeat"}}
                        >
                            {loading === true && (
                                <Loader/>
                            )}

                        
                        
                        UNSUBSCRIBE</button>

                </div>
            </div>
           </div>
   
           </div>
           <Footer/>
       </div>
  )
}
