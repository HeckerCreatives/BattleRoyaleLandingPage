"use client"
import React, { useState } from 'react'
import axios, { AxiosError} from 'axios';
import { useToast } from "@/components/ui/use-toast"
import { useRouter } from 'next/navigation';
import { Input } from "@/components/ui/input"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { MdArrowBackIos } from 'react-icons/md';
import { IoMdArrowBack } from 'react-icons/io';
import Link from 'next/link';

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

export default function login() {
    const [ loading, setLoading] = useState(false)
    const router = useRouter()
    const { toast } = useToast()

    const [auth, setAuth] = useState<string | null>(null)

    const [ email, setEmail] = useState('')
    const [ username, setUsername] = useState('')
    const [ password, setPassword] = useState('')
    const [ passwordconfirm, setPasswordConfirm] = useState('')
    const [ country, setCountry] = useState('')
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
              router.push('/auth/login')
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
            setLoading(false)
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

    const back = () => {
      router.push('/')
    }



  return (
    <div className=' w-screen h-screen bg-zinc-950 flex items-center justify-center'
      style={{backgroundImage: "url('/login/bgred.png')", backgroundSize: "cover", backgroundPosition: "center", backgroundRepeat:"no-repeat"}}
    
    >

      <img src="/login/Rise of Fearless plain.png" width={100} alt="" className=' hidden xl:block absolute top-8 left-8 z-20'/>


      <div className=' hidden xl:block absolute top-0 w-screen h-32 bg-gradient-to-b from-zinc-950 to-[#00000000]'>

      </div>

      <div className=' hidden 2xl:block absolute bottom-0 w-screen h-32 bg-gradient-to-t from-zinc-950 to-[#00000000]'>

      </div><div className=' hidden 2xl:block absolute bottom-0 w-screen h-32 bg-gradient-to-t from-zinc-950 to-[#00000088]'
      style={{backgroundImage: "url('/assets/header BG.png')", backgroundSize: "cover", backgroundPosition: "center", backgroundRepeat:"no-repeat"}}
      
      >

        <div className=' bg-zinc-950 w-full h-full bg-opacity-[0.96]'>

        </div>

      </div>

      <div className=' relative grid grid-cols-1 md:grid-cols-2 w-[95%] md:w-[700px] xl:w-[800px] bg-zinc-900 rounded-md'
     style={{backgroundImage: "url('/login/Sign Up Tab.png')", backgroundSize: "cover", backgroundPosition: "bottom", backgroundRepeat:"no-repeat"}}
        
        >

           <div onClick={back} className=' absolute top-8 left-6 bg-orange-300 rounded-md px-2 py-1 text-amber-950 flex items-center justify-center gap-2'>
            <IoMdArrowBack size={15}/>
            <p className=' text-xs cursor-default'>Back</p>
          </div>
                    

              <div className=' w-full flex flex-col items-start gap-2 lg:gap-4 p-6'>
                 <div className=' flex flex-col items-start mt-8'>
                  <img src="/login/Rise of Fearless plain.png" width={100} alt="" className=' xl:hidden block'/>
                  <p className=' text-lg font-semibold text-orange-300'>Sign Up</p>
                  <p className=' text-xs text-zinc-400 mb-2'>Enter your account details</p>

                </div>
                      <Input placeholder='Username' value={username} onChange={(e) => setUsername(e.target.value)} type='text' className=' bg-zinc-950 border-orange-300 text-white'/>
                      <Input placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)} type='password' className=' bg-zinc-950 border-orange-300 text-white '/>
                      <Input placeholder='Confirm password' value={passwordconfirm} onChange={(e) => setPasswordConfirm(e.target.value)} type='password' className=' bg-zinc-950 border-orange-300 text-white '/>
                      <Input placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)} type='email' className=' bg-zinc-950 text-white border-orange-300'/>
                      <Select onValueChange={setCountry} value={country}>
                      <SelectTrigger className="w-full bg-zinc-950 border-orange-300 text-white">
                        <SelectValue placeholder="Select country" />
                      </SelectTrigger>
                      <SelectContent className=' bg-zinc-950 border-orange-300 text-white'>
                        <SelectItem value="PH">PH</SelectItem>
                      </SelectContent>
                    </Select>

                  
                      <button
                       onClick={handleRegister}
                        className=' flex items-center justify-center gap-2 py-2 w-full lg:text-sm xl:text-lg font-bold text-amber-950  ease-in-out duration-200 bg-gradient-to-r from-orange-300 to-orange-400 rounded-md'
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

                         {errors && errors.username && (
                            <span className=" text-red-400 text-xs">{errors.username}</span>
                          )}

                           {errors && errors.password && (
                            <span className=" text-red-400 text-xs">{errors.password}</span>
                          )}

                           {errors && errors.confirmPassword && (
                            <span className=" text-red-400 text-xs">{errors.confirmPassword}</span>
                          )}

                          {errors && errors.country && (
                            <span className=" text-red-400 text-xs">{errors.country}</span>
                          )}

                          {errors && errors.email && (
                            <span className=" text-red-400 text-xs">{errors.email}</span>
                          )}

                          <p className=' text-xs text-zinc-400 mt-4 flex items-center gap-6'>Already have an account?<a href="/auth/login" className=' text-xs font-semibold px-4 py-1 border-2 border-orange-400 rounded-md text-orange-400'>Log In</a></p>


              </div>

              <div className=' relative md:flex items-end justify-end h-full w-full ml-10 hidden'>
                <img src="/login/Sign Up Tab Character.png" width={400} alt="" className=' relative bottom-0 right-0'/>
              </div>

          </div>

          <div className=' hidden 2xl:flex flex-col items-center gap-4 text-xs text-white absolute bottom-3 w-[500px]'>
            <p className=' text-center text-xs'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>

            <div className=' flex items-center gap-4 lg:gap-10'>
                    <Link href='https://web.facebook.com/'>
                        <img src="/assets/fb.png" alt="" width={30} className=' lg:w-[20px] w-[20px] hover:scale-110 ease-in-out duration-300'/>
                    </Link>

                     <Link href='https://discord.com/'>
                        <img src="/assets/discord.png" alt="" width={30} className=' lg:w-[20px] w-[20px] hover:scale-110 ease-in-out duration-300'/>
                    </Link>

                     <Link href='https://www.tiktok.com/'>
                        <img src="/assets/tiktok.png" alt="" width={30} className=' lg:w-[20px] w-[20px] hover:scale-110 ease-in-out duration-300'/>
                    </Link>

                    <Link href='https://web.telegram.org/'>
                        <img src="/assets/telegram.png" alt="" width={30} className=' lg:w-[20px] w-[20px] hover:scale-110 ease-in-out duration-300'/>
                    </Link>

            </div>

               <div className=' flex items-center gap-4'>
                <a href="" className=' hover:text-orange-300 ease-in-out duration-200'>Terms & Conditions</a>
                <a href="" className=' hover:text-orange-300 ease-in-out duration-200'>Privacy Policy</a>

               </div>
          </div>
    </div>
  )
}
