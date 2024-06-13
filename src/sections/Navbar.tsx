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

interface ResError {
  message: string;
  data: string
}


export default function Navbar() {
  const [login, setLogin] = useState(true)
  const [tab, setTab] = useState('login')
  const router = useRouter()
   const { toast } = useToast()

  const [auth, setAuth] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isOpen, setIsOpen] = useState(false);

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

  const handleDialogChange = (isOpen: boolean | ((prevState: boolean) => boolean)) => {
    setIsOpen(isOpen);
    if (!isOpen) {
      resetForm();
    }
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

  //   if (typeof window !== 'undefined') {
  //     localStorage.setItem('auth', 'true');
  //     setAuth('true'); // Update state
  //     router.push('/user');
  //   }
  // };

  const logoutUser = () => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('auth', 'false');
      setAuth('false'); // Update state
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

    {/*Register Form Validator*/}
    const validateForm = () => {
    let formIsValid = true;
    const errors: Error = {
      username: '', password: '', confirmPassword: '', email:'', country:''
    };

    // Validate Username
    if (username.length < 8) {
      formIsValid = false;
      errors.email = "Username must be at least 8 characters";
    }

    // Validate Password
    if (password.length < 8) {
      formIsValid = false;
      errors.password = "Password must be at least 8 characters";
    }

     // Validate Confirm Password
    if (password !== passwordconfirm) {
      formIsValid = false;
      errors.confirmPassword = "Passwords do not match";
    }

     if (country === '') {
      formIsValid = false;
      errors.confirmPassword = "No country selected";
    }

    // Validate Email
    if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
      formIsValid = false;
      errors.email = "Invalid email address";
    }

    setErrors(errors);
    setIsFormValid(formIsValid);

    return formIsValid;
    };

    {/*Register*/}
    const handleRegister = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (validateForm()) {
       const register = async () => {
        setLoading(true)
           try {
            const response = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/auth/register`,{
                username: username,
                password: password,
                email: email,
                country: country
            },{
            withCredentials: true,
            headers: {
              'Content-Type': 'application/json',
              }
            })
            setUsername('')
              setPassword('')
              setPasswordConfirm('')
              setEmail('')
              setCountry('')
            if (response.data.message === 'success') {
              setLoading(false)
               toast({
                title: "Success",
                description: "Successfully registered",
              })
            }

            if (response.data.message === 'failed') {
              setLoading(false)
             toast({
              variant: "destructive",
              title: "Error",
              description: "",
            })
            }
            setIsLoading(false)
            console.log(response.data)
          } catch (error) {
          
          }
         setLoading(false)
      }
      register()
    } else {
        console.log("Form has errors");

    }
    };

    const [playerusername, setPlayerusername] = useState('')
    const [playerpassword, setPlayerpassword] = useState('')

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

    useEffect(() =>{

    },[username,password,passwordconfirm,email,country])

    const [name, setName] = useState('')
    const [email2, setEmail2] = useState('')
    const [country2, setCountry2] = useState('')
    const [funds, setFunds] = useState('')
  
    {/*Player Data*/}
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
                console.log(response.data)
            } catch (error) {
                
            }
        }
        playerData()

    },[])

    

  return (
    <>

     <div className=' absolute top-10 h-32 w-[80%] text-white max-w-[1920px] hidden lg:block'
     style={{backgroundImage: "url('/assets/navigator TAB.png')", backgroundSize: "contain", backgroundPosition: "center", backgroundRepeat:"no-repeat"}}
    >
        <div className=' max-w-[1920px] relative grid grid-cols-3 px-8 h-full z-20'>
            <Link href='/'>
              <img src="/assets/logo 06 B.png" alt="" width={180} height={180} className='hover:scale-110 ease-in-out duration-200 xl:w-[180px] lg:w-[160px]' />
            </Link> 
            <div className=' flex items-center justify-center gap-4'>
                <Link href='' className=' lg:text-sm text-amber-950 font-bold hover:text-secondary ease-in-out duration-500'>HOME</Link>
                {/* <Link href='#games' className=' lg:text-sm text-amber-950 font-bold hover:text-secondary ease-in-out duration-500'>GAMES</Link>
                <Link href='#reviews' className=' lg:text-sm text-amber-950 font-bold hover:text-secondary ease-in-out duration-500'>REVIEWS</Link> */}
                <Link href='#news' className=' lg:text-sm text-amber-950 font-bold hover:text-secondary ease-in-out duration-500'>NEWS</Link>
                <Link href='#newsletter' className=' lg:text-sm text-amber-950 font-bold hover:text-secondary ease-in-out duration-500'>NEWSLETTER</Link>

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
                    <Link href='' className=' flex items-center gap-2 text-xs text-zinc-300 hover:text-secondary ease-in-out duration-500'><IoDownload size={20}/>Download Game</Link>
                    <p onClick={logoutUser} className=' flex items-center gap-2 text-xs text-zinc-300 hover:text-secondary ease-in-out duration-500 cursor-default'><IoLogOut size={20}/>Log Out</p>
                  </PopoverContent>
                </Popover>
              )}

             
                 
            </div>

        </div>

    </div>

     <div className=' lg:hidden w-[90%] flex items-center justify-between px-2 h-12 absolute top-12 border-x-4 border-amber-700'
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
         style={{backgroundImage: "url('/assets/sheetbg.png')", backgroundSize: "cover", backgroundPosition: "center", backgroundRepeat:"no-repeat"}}
        >
          <div className=' absolute flex flex-col items-center justify-start py-10 gap-5 top-0 w-full h-full bg-amber-950 bg-opacity-80'>
            <img src="/assets/logo 06 B.png" alt="" width={90} className=' hover:scale-110 ease-in-out duration-200' />

            { auth === 'true' && (
                 <Popover>
                  <PopoverTrigger className=' flex items-center gap-2 justify-end text-white'>
                     <div className=' w-12 h-12 bg-zinc-950 rounded-md'>
                        <img src="/assets/logo 06 B.png" alt="" width={50} className=' hover:scale-110 ease-in-out duration-200' />
                    </div>
                    <div className=' flex flex-col items-start justify-start'>
                        <p className=' text-sm font-semibold'>{name}</p>
                        <p className=' text-xs'>Lorem Ipsum</p>

                    </div>
                  </PopoverTrigger>
                  <PopoverContent className=' flex flex-col gap-4 w-auto h-auto bg-zinc-950 border-none mt-4 p-6 '>
                    <Link href='/user' className={`flex items-center gap-2 text-xs text-zinc-300 hover:text-secondary ease-in-out duration-500 `}><RiAccountBoxFill size={20}/>Account Management</Link>
                    <Link href='' className=' flex items-center gap-2 text-xs text-zinc-300 hover:text-secondary ease-in-out duration-500'><IoDownload size={20}/>Download Game</Link>
                    <p onClick={logoutUser} className=' flex items-center gap-2 text-xs text-zinc-300 hover:text-secondary ease-in-out duration-500 cursor-default'><IoLogOut size={20}/>Log Out</p>
                  </PopoverContent>
                </Popover>
              )}

            <div className=' flex flex-col items-center justify-center gap-4'>
               <Link href='/' className=' text-sm text-white font-bold'>HOME</Link>
                <Link href='#news' className=' text-sm text-white font-bold'>NEWS</Link>
                <Link href='#newsletter' className=' text-sm text-white font-bold'>NEWSLETTER</Link>
            </div>


               {auth === 'false' && (
                <a href="/auth/login">
                  <button
                  style={{backgroundImage: "url('/assets/button.png')", backgroundSize: "contain", backgroundPosition: "center", backgroundRepeat:"no-repeat"}}
                  className=' h-32 w-[200px] xl:w-[250px] lg:text-lg xl:text-xl font-bold text-amber-950 hover:scale-110 ease-in-out duration-200'
                  >Log In | Register</button>
                </a>

              )}

              

            <p className=' text-xs text-zinc-300 mt-10'>Follow us :</p>
            <div className=' flex items-center gap-4'>
                    <Link href=''>
                        <img src="/assets/fb.png" alt="" width={25} />
                    </Link>

                     <Link href=''>
                        <img src="/assets/discord.png" alt="" width={25} />
                    </Link>

                     <Link href=''>
                        <img src="/assets/tiktok.png" alt="" width={25} />
                    </Link>

                    <Link href=''>
                        <img src="/assets/telegram.png" alt="" width={25} />
                    </Link>

            </div>

              <p className=' text-xs text-zinc-300 mt-10'>www.loremipsum.com</p>


          </div>
        </SheetContent>
      </Sheet>
      </div>
    </>
   
  )
}
