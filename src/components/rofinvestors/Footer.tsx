'use client'
import React, { useState } from 'react'
import axios, { AxiosError } from 'axios'
import toast, { Toaster } from 'react-hot-toast';

export default function Footer() {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [loading, setLoadingf] = useState(false)
  
    const subscribe = async () => {
      setLoadingf(true)
      try {
        const response =  await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/investor/subscribeinvestor`,{
          email: email,
          name: name
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
          setName('')
          toast.success("Success")
        }
      } catch (error) {
        setLoadingf(false)
  
        if (axios.isAxiosError(error)) {
          const axiosError = error as AxiosError<{ message: string, data: string }>;
          if (axiosError.response && axiosError.response.status === 401) {
              localStorage.setItem('auth', 'false');
              toast.error("Unauthorized")
      
          }
          if (axiosError.response && axiosError.response.status === 400) {
            toast.error( `${axiosError.response.data.data}`)
                
        }
  
        if (axiosError.response && axiosError.response.status === 402) {
            toast.error( `${axiosError.response.data.data}`)
      
                    
        }
  
        if (axiosError.response && axiosError.response.status === 403) {
            toast.error( `${axiosError.response.data.data}`)
          
            
        }
  
        if (axiosError.response && axiosError.response.status === 404) {
            toast.error( `${axiosError.response.data.data}`)
            
        }
      } 
        
      }
    }
  return (
    <div id='invest' className=' w-full h-auto flex flex-col items-center justify-center py-20 px-4'
    style={{ backgroundImage: "url('/assets/Plate - Footer.png')" , backgroundSize:'cover', backgroundRepeat:'no-repeat', backgroundPosition:'top'}}>

        <div className=' w-full max-w-[1440px] flex flex-col gap-8 items-center'>

        <h2 className=' ~text-lg/2xl font-semibold text-white w-full text-start'>INVEST EARLY NOW</h2>


            <div className=' w-full grid grid-cols-1 md:grid-cols-2 gap-8'>
                <div className=' flex flex-col gap-8 text-white'>

                    <p className=' ~text-xs/lg text-zinc-100'>Collaborate with leading gaming and media platforms to maximize visibility and growth. We aim to partner with major gaming networks and media outlets to expand the game’s reach and visibility, both within Africa and internationally. These partnerships will fuel our growth, ensuring Rise of Fearless reaches the right audience and establishes itself as a global force in gaming, while also paving the way for foreign investors to easily tap into the African market.</p>

                </div>

                <div className=' w-full flex flex-col gap-8'>
                    <input onChange={(e) => setName(e.target.value)} value={name} type="text" placeholder='Name' className=' placeholder:text-white w-full p-2 bg-transparent border-[1px] border-white rounded-md text-white'/>
                    <input onChange={(e) => setEmail(e.target.value)} value={email} type="email" placeholder='Email' className=' placeholder:text-white w-full p-2 bg-transparent border-[1px] border-white rounded-md text-white'/>

                    <div className=' w-full flex items-center justify-end'>
                        <button disabled={loading} onClick={subscribe} className=' relative btnshadow flex items-center justify-center'>
                            <img src="/investor/assets/BUTTON.png" alt="button" width={300} height={300} className=' ~w-60/72'/>
                            <p className=' ~text-sm/lg font-semibold text-white absolute'>SUBMIT</p>{loading && <span>...</span>}
                        </button>

                    </div>
                </div>

            </div>

            <img src="/investor/logo.png" alt="logo" width={300} height={300} className=' ~mt-20/32 ~w-52/80'/>

        </div>
    
    </div>
  )
}
