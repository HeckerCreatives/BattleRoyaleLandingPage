import React, { useEffect, useState } from 'react'
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
  } from "@/components/ui/sheet"
  import { Menu } from 'lucide-react';
  import {
    Popover,
    PopoverContent,
    PopoverTrigger,
  } from "@/components/ui/popover"
import { navigation } from '@/app/data';
import axios, { AxiosError } from 'axios';
import { toast } from '../ui/use-toast';
import { useRouter } from 'next/navigation';
import { IoDownload, IoLogOut } from 'react-icons/io5';
import { RiAccountBoxFill, RiTwitterXLine } from 'react-icons/ri';
import { FaInstagram, FaTelegram } from 'react-icons/fa6';
  
  interface Links {
    _id: string
    title: string
    createdAt:string 
    updatedAt: string
    link: string
  }
  


  interface Links {
    _id: string
    title: string
    createdAt:string 
    updatedAt: string
    link: string
  }

export default function Navigation() {
  const router = useRouter()
  const [auth, setAuth] = useState<string | null>(null);
  const [name, setName] = useState('')
    const [list, setList] = useState<Links[]>([])
  



  useEffect(() => {
    if (typeof window !== 'undefined') {
      const storedAuth = localStorage.getItem('auth');
      if (storedAuth === null) {
        localStorage.setItem('auth', 'false');
        setAuth('false');
      } else {
        setAuth(storedAuth);
      }
    }
  }, []);


  const logoutUser = () => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('auth', 'false');
      setAuth('false'); 
      router.push('/');
    }
  };


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


    useEffect(() => {
        const playerData = async () => {
            try {
                const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/user/getuserdetails`,{
                    withCredentials: true,
                    headers: {
                    'Content-Type': 'application/json',
                }
                })
                setName(response.data.data.username)
            } catch (error) {
                
            }
        }
        playerData()

    },[])

      //get socials
       useEffect(() => {
        const fetchlinks = async () => {
            try {
                const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/sociallinks/getsociallinksa?filter=user`);
    
                setList(response.data.data)
            
            } catch (error) {
              
            }
        };
    
        fetchlinks();
      }, []);
    
    
      const getImage = (type: string) => {
        if(type === 'instagram'){
          return  <FaInstagram size={32} className=' bg-orange-300 p-1 rounded-full text-amber-950 hover:scale-110 ease-in-out duration-300'/>
        }  else if(type === 'x'){
          return  <RiTwitterXLine size={32} className=' bg-orange-300 p-1 rounded-full text-amber-950 hover:scale-110 ease-in-out duration-300'/>
        } else {
          return <FaTelegram size={32} className=' bg-orange-300 p-1 rounded-full text-amber-950 hover:scale-110 ease-in-out duration-300'/>
        }
    
      }

  return (
    <nav className=' relative z-10 w-full max-w-[1240px] h-auto flex items-center justify-between mt-4'>
    <img src="/investor/navigator TAB.png" alt="tab" className=' w-full absolute z-10 h-[92px]' />
    <a href="/">
    <img src="/investor/logo.png" alt="logo" width={90} height={90} className=' relative z-10 ml-2 lg:ml-4' />
    </a>

      <div className=' mr-4 relative z-10 hidden lg:flex items-center gap-4 text-amber-950 font-bold text-sm font-dihjauti p-2'>
        {navigation.map((item, index) => (
          <a key={index} href={item.path} className=' hover:text-orange-500 transition-all duration-300'>{item.name}</a>
        ))}

        <div className=' flex items-center justify-end'>
        {auth === 'false' && (
          <a href="/auth/login" className=' relative flex items-center justify-center hover:scale-105 transition-all duration-300'>
            <img src="/assets/button.png" alt="button" width={200}/>
            <p className=' absolute '>Log In | Register</p>
            
          </a>
        

        )}

        { auth === 'true' && (
          <Popover>
            <PopoverTrigger className=' flex items-center gap-2 justify-end bg-amber-950 p-2 rounded-md text-amber-50'>
              <div className=' w-auto h-auto rounded-md flex items-center justify-center'>
                  <img src="/assets/logo 06 B.png" alt="" width={50} className=' hover:scale-110 ease-in-out duration-200' />
              </div>
              <div className=' flex flex-col items-start justify-start text-amber-50 '>
                  <p className=' text-xs font-semibold'>{name}</p>
                  <p className=' text-[.6rem] text-amber-500'>Player</p>

              </div>
            </PopoverTrigger>
            <PopoverContent className=' flex flex-col gap-4 w-auto h-auto bg-amber-950 border-none mt-4 p-6 '>
              <a href='/user' className={`flex items-center gap-2 text-xs text-zinc-300 hover:text-secondary ease-in-out duration-500 `}><RiAccountBoxFill size={20}/>Account Management</a>
              <a href='/download' className=' flex items-center gap-2 text-xs text-zinc-300 hover:text-secondary ease-in-out duration-500'><IoDownload size={20}/>Download Game</a>
              <p onClick={logoutUser} className=' flex items-center gap-2 text-xs text-zinc-300 hover:text-secondary ease-in-out duration-500 cursor-default'><IoLogOut size={20}/>Log Out</p>
            </PopoverContent>
          </Popover>
        )}
        </div>
      </div>

      <Sheet>
      <SheetTrigger className=' mr-2 relative z-10 lg:hidden block bg-amber-800 text-white p-1 rounded-sm'>
        <Menu size={20}/>
      </SheetTrigger>
      <SheetContent className=' bg-amber-950 border-amber-900'
      style={{ backgroundImage: "url('/investor/assets/BG Pattern Solid.png')" , backgroundSize:'cover', backgroundRepeat:'no-repeat', backgroundPosition:'bottom'}}>
        <SheetHeader>
          <SheetTitle className=' flex items-center justify-center'>
            <img src="/investor/logo.png" alt="logo" width={120} height={120} />
          </SheetTitle>
          <SheetDescription>
            
          </SheetDescription>
        </SheetHeader>

        <div className=' flex flex-col items-center gap-8 text-white text-sm font-dihjauti p-2 mt-6'>
          {navigation.map((item, index) => (
            <a key={index} href={item.path}>{item.name}</a>
          ))}

      {auth === 'false' && (
          <a href="/auth/login" className=' relative flex items-center justify-center hover:scale-105 transition-all duration-300 text-amber-950'>
            <img src="/assets/button.png" alt="button" width={200}/>
            <p className=' absolute '>Log In | Register</p>
            
          </a>
        

        )}
        
        { auth === 'true' && (
          <Popover>
          <PopoverTrigger className=' flex items-center gap-2 justify-end bg-amber-950 p-2 rounded-md text-amber-50'>
            <div className=' w-auto h-auto rounded-md flex items-center justify-center'>
                <img src="/assets/logo 06 B.png" alt="" width={50} className=' hover:scale-110 ease-in-out duration-200' />
            </div>
            <div className=' flex flex-col items-start justify-start text-amber-50 '>
                <p className=' text-xs font-semibold'>{name}</p>
                <p className=' text-[.6rem] text-amber-500'>Player</p>

            </div>
          </PopoverTrigger>
          <PopoverContent className=' flex flex-col gap-4 w-auto h-auto bg-amber-950 border-none mt-4 p-6 '>
            <a href='/user' className={`flex items-center gap-2 text-xs text-zinc-300 hover:text-secondary ease-in-out duration-500 `}><RiAccountBoxFill size={20}/>Account Management</a>
            <a href='/download' className=' flex items-center gap-2 text-xs text-zinc-300 hover:text-secondary ease-in-out duration-500'><IoDownload size={20}/>Download Game</a>
            <p onClick={logoutUser} className=' flex items-center gap-2 text-xs text-zinc-300 hover:text-secondary ease-in-out duration-500 cursor-default'><IoLogOut size={20}/>Log Out</p>
          </PopoverContent>
        </Popover>
        )}

          <div className=' w-full flex items-center justify-center gap-4 mt-6'>
            {list.map((item, index) => (
                          <a key={item._id} href={item.link} target='_blank'>
                            {getImage(item.title)}
                          </a>
                        ))}

          </div>
        </div>
      </SheetContent>
      </Sheet>


      
    </nav>
  )
}
