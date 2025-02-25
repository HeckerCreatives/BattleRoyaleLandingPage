import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { RiAccountBoxFill, RiMenu4Fill } from "react-icons/ri";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import axios, { AxiosError} from 'axios';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { IoDownload, IoLogOut } from 'react-icons/io5';
import { useRouter } from 'next/navigation';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import toast, { Toaster } from 'react-hot-toast';
import { useToast } from "@/components/ui/use-toast"



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


export default function Navbar() {
  const [login, setLogin] = useState(true)
  const [tab, setTab] = useState('login')
  const router = useRouter()
   const { toast } = useToast()

  const [auth, setAuth] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isOpen, setIsOpen] = useState(false);
  const [list, setList] = useState<Links[]>([])


  //get socials
  useEffect(() => {
    const fetchlinks = async () => {
        try {
            const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/sociallinks/getsociallinksa`);

            setList(response.data.data)
        
        } catch (error) {
          
        }
    };

    fetchlinks();
  }, []);

  const getImage = (type: string) => {
    if(type === 'facebook'){
      return  <img src="/v2/header/assets/FB.png" alt="" width={30} className=' w-[40px] hover:scale-110 ease-in-out duration-300'/>

    } else if(type === 'discord'){
      return  <img src="/v2/header/assets/Discord.png" alt="" width={30} className=' w-[40px] hover:scale-110 ease-in-out duration-300'/>
    } else if(type === 'tiktok'){
      return  <img src="/v2/header/assets/Tiktok.png" alt="" width={30} className=' w-[40px] hover:scale-110 ease-in-out duration-300'/>
    } else {
      return <img src="/v2/header/assets/Telegram.png" alt="" width={30} className=' w-[40px] hover:scale-110 ease-in-out duration-300'/>
    }

  }

  const resetForm = () => {
    setUsername('');
    setPassword('');
    setPasswordConfirm('');
    setEmail('');
    setCountry('');
    setPlayerusername('');
    setPlayerpassword('');
    setTab('login');
  };

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const storedAuth = localStorage.getItem('auth');
      if (storedAuth === null) {
        localStorage.setItem('auth', 'false');
        setAuth('false');
      } else {
        setAuth(storedAuth);
      }
      setIsLoading(false); // Auth state has been determined
    }
  }, []);


  const logoutUser = () => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('auth', 'false');
      setAuth('false'); 
      router.push('/');
      window.location.reload();
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

   const [ email, setEmail] = useState('')
   const [ username, setUsername] = useState('')
    const [ password, setPassword] = useState('')
    const [ passwordconfirm, setPasswordConfirm] = useState('')
    const [ country, setCountry] = useState('')
    const [ loading, setLoading] = useState(false)
    const [isFormValid, setIsFormValid] = useState(false); 
    const [ success, setSuccess] = useState<Success>()
    const [errors, setErrors] = useState<Error | null>( null);

 
    const [playerusername, setPlayerusername] = useState('')
    const [playerpassword, setPlayerpassword] = useState('')

    useEffect(() =>{

    },[username,password,passwordconfirm,email,country])

    const [name, setName] = useState('')
    const [email2, setEmail2] = useState('')
    const [country2, setCountry2] = useState('')
    const [funds, setFunds] = useState('')
  
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
                setEmail2(response.data.data.email)
                setCountry2(response.data.data.country)
                setFunds(response.data.data.funds)
            } catch (error) {
                
            }
        }
        playerData()

    },[])

    

  return (
    <>

     <div className=' sticky z-50 top-4 h-32 w-[80%] text-white max-w-[1920px] hidden lg:block'
     style={{backgroundImage: "url('/assets/navigator TAB.png')", backgroundSize: "contain", backgroundPosition: "center", backgroundRepeat:"no-repeat"}}
    >
        <div className=' max-w-[1920px] relative grid grid-cols-3 px-8 h-full z-20'>
            <Link href='/'>
              <img src="/assets/logo 06 B.png" alt="" width={180} height={180} className='hover:scale-110 ease-in-out duration-200 xl:w-[180px] lg:w-[160px]' />
            </Link> 
            <div className=' flex items-center justify-center gap-4'>
                <Link href='/' className=' lg:text-sm text-amber-950 font-bold hover:text-secondary ease-in-out duration-500'>HOME</Link>
               
                <Link href='/#news' className=' lg:text-sm text-amber-950 font-bold hover:text-secondary ease-in-out duration-500'>NEWS</Link>
                <Link href='/#maps' className=' lg:text-sm text-amber-950 font-bold hover:text-secondary ease-in-out duration-500'>MAPS</Link>
                <Link href='/#about' className=' lg:text-sm text-amber-950 font-bold hover:text-secondary ease-in-out duration-500'>ABOUT</Link>
                <Link href='/#newsletter' className=' lg:text-sm text-amber-950 font-bold hover:text-secondary ease-in-out duration-500'>NEWSLETTER</Link>

            </div>



            <div className=' flex items-center justify-end'>

              {auth === 'false' && (
                <a href="/auth/login">
                  <button
                  style={{backgroundImage: "url('/assets/button.png')", backgroundSize: "contain", backgroundPosition: "center", backgroundRepeat:"no-repeat"}}
                  className=' h-32 w-[200px] xl:w-[250px] lg:text-lg xl:text-xl font-bold text-amber-950 hover:scale-110 ease-in-out duration-200'
                  >Log In | Register</button>
                </a>
               
             
              )}

              { auth === 'true' && (
                 <Popover>
                  <PopoverTrigger className=' flex items-center gap-2 justify-end'>
                     <div className=' w-12 h-12 rounded-md flex items-center justify-center'>
                        <img src="/assets/logo 06 B.png" alt="" width={100} className=' hover:scale-110 ease-in-out duration-200' />
                    </div>
                    <div className=' flex flex-col items-start justify-start text-amber-950 '>
                        <p className=' text-sm font-semibold'>{name}</p>
                        <p className=' text-xs'>Player</p>

                    </div>
                  </PopoverTrigger>
                  <PopoverContent className=' flex flex-col gap-4 w-auto h-auto bg-zinc-950 border-none mt-4 p-6 '>
                    <Link href='/user' className={`flex items-center gap-2 text-xs text-zinc-300 hover:text-secondary ease-in-out duration-500 `}><RiAccountBoxFill size={20}/>Account Management</Link>
                    <Link href='/download' className=' flex items-center gap-2 text-xs text-zinc-300 hover:text-secondary ease-in-out duration-500'><IoDownload size={20}/>Download Game</Link>
                    <p onClick={logoutUser} className=' flex items-center gap-2 text-xs text-zinc-300 hover:text-secondary ease-in-out duration-500 cursor-default'><IoLogOut size={20}/>Log Out</p>
                  </PopoverContent>
                </Popover>
              )}

             
                 
            </div>

        </div>

    </div>

     <div className=' lg:hidden w-[90%] z-50 flex items-center justify-between px-2 h-12 absolute top-4 border-x-4 border-amber-700'
     style={{backgroundImage: "url('/assets/navigator TAB.png')", backgroundSize: "cover", backgroundPosition: "center", backgroundRepeat:"no-repeat"}}
     >
      <img src="/assets/logo 06 B.png" alt="" width={90} className=' hover:scale-110 ease-in-out duration-200' />
        <Sheet key='left'>
        <SheetTrigger>
          <div className=' flex items-center justify-center h-7 w-7 bg-amber-950 rounded-md'>
            <RiMenu4Fill size={20} color='white'/>
          </div>
        </SheetTrigger>
        <SheetContent className=' border-none p-0 m-0'

        >
          <div className=' absolute flex flex-col items-center justify-start py-10 gap-5 top-0 w-full h-full bg-opacity-80'
         style={{backgroundImage: "url('/Left Rectangular.png')", backgroundSize: "cover", backgroundPosition: "bottom", backgroundRepeat:"no-repeat"}}
          
          >
            <img src="/assets/logo 06 B.png" alt="" width={90} className=' hover:scale-110 ease-in-out duration-200' />

            { auth === 'true' && (
                 <Popover>
                  <PopoverTrigger className=' flex items-center gap-2 justify-end text-white'>
                     <div className=' w-12 h-12 flex items-center justify-center rounded-md'>
                        <img src="/assets/logo 06 B.png" alt="" width={50} className=' hover:scale-110 ease-in-out duration-200' />
                    </div>
                    <div className=' flex flex-col items-start justify-start'>
                        <p className=' text-sm font-semibold text-orange-200'>{name}</p>
                        <p className=' text-[.6em]'>Player</p>

                    </div>
                  </PopoverTrigger>
                  <PopoverContent className=' flex flex-col gap-4 w-auto h-auto bg-zinc-950 border-none mt-4 p-6 '>
                    <Link href='/user' className={`flex items-center gap-2 text-xs text-zinc-300 hover:text-secondary ease-in-out duration-500 `}><RiAccountBoxFill size={20}/>Account Management</Link>
                    <Link href='/download' className=' flex items-center gap-2 text-xs text-zinc-300 hover:text-secondary ease-in-out duration-500'><IoDownload size={20}/>Download Game</Link>
                    <p onClick={logoutUser} className=' flex items-center gap-2 text-xs text-zinc-300 hover:text-secondary ease-in-out duration-500 cursor-pointer'><IoLogOut size={20}/>Log Out</p>
                  </PopoverContent>
                </Popover>
              )}

            <div className=' flex flex-col items-center justify-center gap-4'>
                <Link href='/' className=' text-xs md:text-sm text-orange-100 font-bold '>HOME</Link>
               
                <Link href='/#news' className=' text-xs md:text-sm text-orange-100 font-bold '>NEWS</Link>
                <Link href='/#maps' className=' text-xs md:text-sm text-orange-100 font-bold '>MAPS</Link>
                <Link href='/#about' className=' text-xs md:text-sm text-orange-100 font-bold '>ABOUT</Link>
                <Link href='/#newsletter' className=' text-xs md:text-sm text-orange-100 font-bold '>NEWSLETTER</Link>
            </div>


               {auth === 'false' && (
                <a href="/auth/login">
                  <button
                  style={{backgroundImage: "url('/assets/button.png')", backgroundSize: "contain", backgroundPosition: "center", backgroundRepeat:"no-repeat"}}
                  className=' h-24 w-[200px] xl:w-[250px] lg:text-lg xl:text-xl font-bold text-amber-950 hover:scale-110 ease-in-out duration-200'
                  >Log In | Register</button>
                </a>

              )}

              

            <p className=' text-xs text-zinc-300 mt-6'>Follow us :</p>
            <div className=' flex items-center gap-4'>

              {list.map((item, index) => (
                <a key={item._id} href={item.link} target='_blank'>
                  {getImage(item.title)}
                </a>
              ))}
                   {/* <Link href='https://web.facebook.com/'>
                        <img src="/v2/header/assets/FB.png" alt="" width={30} className=' w-[40px] hover:scale-110 ease-in-out duration-300'/>
                    </Link>

                     <Link href='https://discord.com/'>
                        <img src="/v2/header/assets/Discord.png" alt="" width={30} className=' w-[40px] hover:scale-110 ease-in-out duration-300'/>
                    </Link>

                     <Link href='https://www.tiktok.com/'>
                        <img src="/v2/header/assets/Tiktok.png" alt="" width={30} className=' w-[40px] hover:scale-110 ease-in-out duration-300'/>
                    </Link>

                    <Link href='https://web.telegram.org/'>
                        <img src="/v2/header/assets/Telegram.png" alt="" width={30} className=' w-[40px] hover:scale-110 ease-in-out duration-300'/>
                    </Link> */}


            </div>

              <p className=' text-xs text-zinc-300 mt-6 w-[80%] text-center'>© 2024 Rise of Fearless (rof.game). All rights reserved. Unauthorized use, reproduction, or distribution of any content is strictly prohibited.</p>


          </div>
        </SheetContent>
      </Sheet>
      </div>
    </>
   
  )
}
