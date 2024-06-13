"use client"

import React, { useState } from 'react'
import axios, { AxiosError} from 'axios';
import { useToast } from "@/components/ui/use-toast"
import { useRouter } from 'next/navigation';
import { Input } from "@/components/ui/input"
import { MdArrowBackIos } from "react-icons/md";
import { IoMdArrowBack } from "react-icons/io";
import Link from 'next/link';



export default function login() {
    const [playerusername, setPlayerusername] = useState('')
    const [playerpassword, setPlayerpassword] = useState('')
    const [ loading, setLoading] = useState(false)
    const router = useRouter()
    const { toast } = useToast()

    const [auth, setAuth] = useState<string | null>(null)



    {/*Log In*/}
    const loginPlayer = async () => {
      if ( playerusername === ''){
        toast({
          variant: "destructive",
          title: "Failed",
          description: 'Please enter your username'
        })
      }
      if ( playerpassword === ''){
        toast({
          variant: "destructive",
          title: "Failed",
          description: 'Please enter your password'
        })
      }

      if ( playerusername !== '' && playerpassword !== ''){
        setLoading(true)
        try {
          const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/auth/login?username=${playerusername}&password=${playerpassword}`,{
            withCredentials: true,
            headers: {
                'Content-Type': 'application/json',
                }
          })
          console.log(response)
          if ( response.data.message === 'success' && response.data){
            if (typeof window !== 'undefined') {
              setLoading(false)
                toast({
                  title: "Success",
                  description: "Successfully logged in",
                })
              localStorage.setItem('auth', 'true');
              setAuth('true'); // Update state
              router.push('/user');
            }
          }
          if (response.data.message === 'failed'){
              setLoading(false)
                toast({
                variant: "destructive",
                title: "Failed",
                description: `${response.data.data}`
              })
          }
            setLoading(false)
        } catch (error) {
            setLoading(false)
          console.log(error)
          
        }
      }
     
    }

    const back = () => {
      router.push('/')
    }


  return (
    <div className=' w-[100vw] h-[100vh] flex items-center justify-center'
     style={{backgroundImage: "url('/login/bgred.png')", backgroundSize: "cover", backgroundPosition: "center", backgroundRepeat:"no-repeat"}}
    >

      <div className=' hidden xl:block absolute top-0 w-screen h-32 bg-gradient-to-b from-zinc-950 to-[#00000088]'>

      </div>

      <div className=' hidden xl:block absolute bottom-0 w-screen h-48 bg-gradient-to-t from-zinc-950 to-[#00000088]'
      style={{backgroundImage: "url('/assets/header BG.png')", backgroundSize: "cover", backgroundPosition: "center", backgroundRepeat:"no-repeat"}}
      
      >

        <div className=' bg-zinc-950 w-full h-full bg-opacity-[0.96]'>

        </div>

      </div>
        <img src="/login/Rise of Fearless plain.png" width={100} alt="" className=' hidden xl:block absolute top-8 left-8'/>

        <div className=' relative grid grid-cols-1 md:grid-cols-2 w-[95%] md:w-[700px] xl:w-[800px] bg-zinc-900 rounded-md'
     style={{backgroundImage: "url('/login/Login Tab.png')", backgroundSize: "cover", backgroundPosition: "bottom", backgroundRepeat:"no-repeat"}}
        
        >

          <div onClick={back} className=' absolute top-8 left-8 bg-orange-300 rounded-md px-2 py-1 text-amber-950 flex items-center justify-center gap-2'>
            <IoMdArrowBack size={15}/>
            <p className=' text-xs cursor-default'>Back</p>
          </div>

          <div className=' w-full flex flex-col items-start gap-4 mt-4 p-8'>

          <div className=' flex flex-col mt-8'>
            <img src="/login/Rise of Fearless plain.png" width={100} alt="" className=' xl:hidden block'/>

            <p className=' text-lg font-semibold text-orange-300 w-full'>Log in with username & password</p>
            <p className=' text-xs text-zinc-400 mb-6'>Enter your account details</p>

          </div>
          

                      <Input placeholder='Username' onChange={(e) => setPlayerusername(e.target.value)} type='text' className=' bg-zinc-950 text-white border-orange-400 '/>
                      <Input placeholder='Password' onChange={(e) => setPlayerpassword(e.target.value)} type='password' className=' bg-zinc-950 text-white border-orange-400 '/>
                       <button
                       onClick={loginPlayer}
                        className=' flex items-center justify-center gap-2 py-2 w-full lg:text-sm xl:text-lg font-bold text-amber-950 ease-in-out duration-200 bg-gradient-to-r from-orange-300 to-orange-400 rounded-md'
                        >
                           { loading === true && (
                          <div className="loader">
                              <div className="bar1 bg-zinc-950"></div>
                              <div className="bar2 bg-zinc-950"></div>
                              <div className="bar3 bg-zinc-950"></div>
                              <div className="bar4 bg-zinc-950"></div>
                              <div className="bar5 bg-zinc-950"></div>
                              <div className="bar6 bg-zinc-950"></div>
                              <div className="bar7 bg-zinc-950"></div>
                              <div className="bar8 bg-zinc-950"></div>
                              <div className="bar9 bg-zinc-950"></div>
                              <div className="bar10 bg-zinc-950"></div>
                              <div className="bar11 bg-zinc-950"></div>
                              <div className="bar12 bg-zinc-950"></div>
                          </div>
                        )}
                          Log In</button>

                          <p className=' text-xs text-zinc-400 mt-16 flex items-center gap-6'>Do you have an account?<a href="/auth/register" className=' text-xs font-semibold px-4 py-1 border-2 border-orange-400 rounded-md text-orange-400'>Register</a></p>
                     
          </div>

          <img src="/login/Login Tab Character.png" width={300} alt="" className=' absolute bottom-0 right-0 md:block hidden'/>
    
          </div>

          <div className=' hidden xl:flex flex-col items-center gap-6 text-xs text-white absolute bottom-6 w-[500px]'>
            <p className=' text-center'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>

            <div className=' flex items-center gap-4 lg:gap-10'>
                    <Link href='https://web.facebook.com/'>
                        <img src="/assets/fb.png" alt="" width={30} className=' lg:w-[30px] w-[20px] hover:scale-110 ease-in-out duration-300'/>
                    </Link>

                     <Link href='https://discord.com/'>
                        <img src="/assets/discord.png" alt="" width={30} className=' lg:w-[30px] w-[20px] hover:scale-110 ease-in-out duration-300'/>
                    </Link>

                     <Link href='https://www.tiktok.com/'>
                        <img src="/assets/tiktok.png" alt="" width={30} className=' lg:w-[30px] w-[20px] hover:scale-110 ease-in-out duration-300'/>
                    </Link>

                    <Link href='https://web.telegram.org/'>
                        <img src="/assets/telegram.png" alt="" width={30} className=' lg:w-[30px] w-[20px] hover:scale-110 ease-in-out duration-300'/>
                    </Link>

            </div>

                <p className=' text-xs lg:text-sm text-zinc-300'>www.loremipsum.com</p>
          </div>

    </div>
  )
}
