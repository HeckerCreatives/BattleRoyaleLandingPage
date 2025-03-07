import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation';
import axios, { AxiosError } from 'axios';
import { toast } from '../ui/use-toast';
import Navigation from './Navigation';
import { motion } from 'framer-motion';

interface Success {
  message: string;
  data:{
    token: string;
   }
}

interface Error {
    country: string;
    username: string,
  email: string;
  password: string;
  confirmPassword: string;

}

interface Links {
  _id: string
  title: string
  createdAt:string 
  updatedAt: string
  link: string
}

interface Content {
  id: string,
  title: string,
  description: string,
  link: string,
}


export default function HeroSection() {
  const router = useRouter()
  const [list, setList] = useState<Links[]>([])
  const [data, setData] = React.useState<Content[]>([])


  useEffect(()=>{
    const headerData = async () => {
      try {
        const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/content/getcontent?type=header&limit=1`, {
            withCredentials: true,
            headers: {
                'Content-Type': 'application/json',
            }
        });
        setData(response.data.data);
    } catch (error) {
        if (axios.isAxiosError(error)) {
            const axiosError = error as AxiosError;
            if (axiosError.response && axiosError.response.status === 401) {
                localStorage.setItem('auth', 'false');
                router.push('/');
                toast({
                    variant: "destructive",
                    title: "Unauthorized",
                });
            }
        } 
    }
    }
    headerData()
  }, [])


  useEffect(() => {
    const handleHashChange = (url: any) => {
      const { hash } = new URL(url, window.location.origin);
      if (hash) {
        const element = document.querySelector(hash);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    };

    // Check for hash on initial load
    handleHashChange(window.location.href);

  
  }, []);



  return (
    <div className=' relative z-0 flex flex-col items-center w-full h-[100dvh] max-h-[1080px] px-4'
    style={{ backgroundImage: "url('/investor/assets/bg/hero.png')" , backgroundSize:'cover', backgroundRepeat:'no-repeat', backgroundPosition:'center',}}>
      <div className=' w-full h-full bg-gradient-to-b from-zinc-950 to-zinc-950/0 absolute'>

      </div>

     <Navigation/>

     

      <div className=' relative z-10 w-full h-full flex flex-col items-start justify-start '>
        <div className=' w-full flex flex-col gap-8 items-center justify-center mt-32'>
          <motion.h1 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px 0px" }}
          transition={{
              type: "spring",
              stiffness: 30,
              damping: 10,
              mass: 1,
              delay: 0
          }}className=' ~text-3xl/5xl font-bold text-center max-w-[800px] text-white'>{data[0]?.title}</motion.h1>
          <motion.p 
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
          className=' ~text-xs/lg text-center max-w-[800px] text-amber-50'>{data[0]?.description}</motion.p>

        </div>
        <motion.div 
        
        initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px 0px" }}
          transition={{
              type: "spring",
              stiffness: 30,
              damping: 10,
              mass: 1,
              delay: .4
          }}
          className=' w-full flex justify-center items-center gap-2 absolute bottom-16 '>
              <a href="/download" className=' hover:scale-110 transition-all duration-300'>
              <img src="/astore.png" alt="" width={150} className='~w-32/40 ' />
              </a>

              <a href="/download" className=' hover:scale-110 transition-all duration-300'>
              <img src="/gp.png" alt="" width={150} className=' ~w-32/40' />

              </a>

        </motion.div>
        </div>
    </div>
  )
}
