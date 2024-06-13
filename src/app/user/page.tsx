"use client"
import NavbarUser from '@/components/NavbarUser'
import Footer from '@/sections/Footer'
import Navbar from '@/sections/Navbar'
import React, { useEffect, useState } from 'react'
import { Input } from "@/components/ui/input"
import axios,{ AxiosError} from 'axios'
import { useToast } from "@/components/ui/use-toast"
import { useRouter } from 'next/navigation'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

interface Error {
  newemail: string;
 

}


export default function page() {
   const { toast } = useToast()
  const router = useRouter()
  const [data, setData] = useState()
  const [password, setPassword] = useState('')
  const [passwordload, setPasswordload] = useState(false)
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [country, setCountry] = useState('')
  const [funds, setFunds] = useState('')
  const [newemail, setNewemail] = useState('')
  const [isFormValid, setIsFormValid] = useState(false); 
    const [errors, setErrors] = useState<Error | null>( null);


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
                setEmail(response.data.data.email)
                setCountry(response.data.data.country)
                setFunds(response.data.data.funds)
                console.log(response.data)
            } catch (error) {
                 if (axios.isAxiosError(error)) {
                    const axiosError = error as AxiosError;
                    if (axiosError.response && axiosError.response.status === 401) {
                        localStorage.setItem('auth', 'false');
                        router.push('/')
                        toast({
                        variant: "destructive",
                        title: "Unauthorized",
                        })
                
                    }
                } 
            }
        }
        playerData()

    },[])

     {/*Change Password*/}
     const changePassword = async () => {
        setPasswordload(true)
        if (password === ''){
            setPasswordload(false)
            toast({
                variant:"destructive",
                title: "Failed",
                  description: "Enter a new password",
            })
        } else{
            try {
                const response = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/user/changepassworduser`,{
                    password: password
                },{
                    withCredentials: true,
                    headers: {
                        'Content-Type': 'application/json',
                    }
                })
                if (response.data.message === 'success'){
                    setPasswordload(false)
                    setPassword('')
                    toast({
                    title: "Success",
                    description: "Password changed successfully",
                })
                }
                console.log(response.data)
            } catch (error) {
                if (axios.isAxiosError(error)) {
                    const axiosError = error as AxiosError;
                    if (axiosError.response && axiosError.response.status === 401) {
                        localStorage.setItem('auth', 'false');
                        router.push('/')
                        toast({
                        variant: "destructive",
                        title: "Unauthorized",
                        })
                
                    }
                } 
                
            }
        }
     }

    {/*Change Email*/}

    {/*Validate Email*/}
    const validateForm = () => {
    let formIsValid = true;
    const errors: Error = {
      newemail:''
    };
    // Validate Email
    if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(newemail)) {
      formIsValid = false;
      errors.newemail = "Invalid email address";
    }

    setErrors(errors);
    setIsFormValid(formIsValid);

    return formIsValid;
    };

    const handleEmail = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (validateForm()) {
        const changeEmail = async () => {
        setPasswordload(true)
        if (newemail === ''){
            setPasswordload(false)
            toast({
                variant:"destructive",
                title: "Failed",
                  description: "Enter a new email",
            })
        } else{
            try {
                const response = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/user/updateuserprofile`,{
                    email: newemail
                },{
                    withCredentials: true,
                    headers: {
                        'Content-Type': 'application/json',
                    }
                })
                if (response.data.message === 'success'){
                    setPasswordload(false)
                    setNewemail('')
                    setPassword('')
                    toast({
                    title: "Success",
                    description: "Email changed successfully",
                })
                }
                console.log(response.data)
            } catch (error) {
                if (axios.isAxiosError(error)) {
                    const axiosError = error as AxiosError;
                    if (axiosError.response && axiosError.response.status === 401) {
                        localStorage.setItem('auth', 'false');
                        router.push('/')
                        toast({
                        variant: "destructive",
                        title: "Unauthorized",
                        })
                
                    }
                } 
                
            }
        }
    }
    changeEmail()
      
    } else {
        console.log("Form has errors");

    }
    };

  return (
    <div className=' w-screen h-auto flex flex-col items-center justify-start bg-zinc-950 overscroll-x-none '>
        <div className=' max-w-[1920px] flex flex-col items-center justify-start gap-10 w-screen h-auto pb-40 bg-zinc-900 '>
        <NavbarUser/>
            <p className=' text-xl font-semibold text-zinc-200 w-[90%] md:w-[70%] text-start py-2 border-b-2 border-zinc-800'>Account Management</p>

            <div className=' w-[90%] md:w-[70%] grid-cols-1 grid lg:grid-cols-2 gap-10'>
                <div className=' flex flex-col gap-6 bg-zinc-950 rounded-lg w-full h-auto p-4 md:p-10'>
                    <p className=' text-lg text-zinc-200 '>User Information</p>

                    <Input placeholder='Username' value={name} type='text' className=' w-[60%] md:w-[68%] bg-zinc-900 border-none text-white'/>
                    <div className=' w-full flex items-center gap-4'>
                        <Input placeholder='Email' value={email} type='email' className=' w-[70%] bg-zinc-900 border-none text-white'/>
                        <Dialog>
                        <DialogTrigger className='h-10 w-[30%]'
                        >
                              <button
                           
                            className=' w-full text-sm py-2 bg-secondary rounded-lg font-bold text-amber-950 hover:scale-110 ease-in-out duration-200'
                            >
                                
                            Edit</button>
                        </DialogTrigger>
                        <DialogContent className=' w-[95%] md:w-[70%] lg:w-[50%] bg-zinc-950 border-none p-6'>
                            <h2 className=' text-lg font-semibold text-secondary'>Change Email</h2>
                            <p className=' text-sm text-white'>New Email</p>
                           <Input placeholder='Enter your new email' value={newemail} onChange={(e) => setNewemail(e.target.value)} type='email' required className=' w-full bg-zinc-900 border-none text-white'/>

                           <button
                           onClick={handleEmail}
                           style={{backgroundImage: "url('/assets/button.png')", backgroundSize: "contain", backgroundPosition: "center", backgroundRepeat:"no-repeat"}}
                            className=' mt-4 h-12 w-[200px] text-lg font-bold text-amber-950 hover:scale-110 ease-in-out duration-200 flex items-center justify-center gap-1'
                            >
                            { passwordload === true && (
                                <div className="loader">
                                    <div className="bar1"></div>
                                    <div className="bar2"></div>
                                    <div className="bar3"></div>
                                    <div className="bar4"></div>
                                    <div className="bar5"></div>
                                    <div className="bar6"></div>
                                    <div className="bar7"></div>
                                    <div className="bar8"></div>
                                    <div className="bar9"></div>
                                    <div className="bar10"></div>
                                    <div className="bar11"></div>
                                    <div className="bar12"></div>
                                </div>
                            )}
                            Change Email</button>

                            {errors && errors.newemail && (
                            <span className=" text-red-400 text-xs">{errors.newemail}</span>
                          )}
                        </DialogContent>
                        </Dialog>
                       
                    </div>

                    <div className=' w-full flex items-center gap-4'>
                        <Input placeholder='Password' value='test12345' type='password' className=' w-[70%] bg-zinc-900 border-none text-white'/>
                        <Dialog>
                        <DialogTrigger className='h-10 w-[30%]'
                        >
                              <button
                           
                            className=' h-10 w-full text-sm font-bold py-2 rounded-lg text-amber-950 hover:scale-110 ease-in-out duration-200 bg-secondary'
                            >
                                
                            Edit</button>
                        </DialogTrigger>
                        <DialogContent className=' bg-zinc-950 border-none p-6 w-[95%] md:w-[70%] lg:w-[50%]'>
                            <h2 className=' text-lg font-semibold text-secondary'>Change Password</h2>
                            <p className=' text-sm text-white'>New Password</p>
                           <Input placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)} type='password' className=' w-full bg-zinc-900 border-none text-white'/>

                           <button
                           onClick={changePassword}
                           style={{backgroundImage: "url('/assets/button.png')", backgroundSize: "contain", backgroundPosition: "center", backgroundRepeat:"no-repeat"}}
                            className=' mt-4 h-12 w-[200px] text-lg font-bold text-amber-950 hover:scale-110 ease-in-out duration-200 flex items-center justify-center gap-1'
                            >
                            { passwordload === true && (
                                <div className="loader">
                                    <div className="bar1"></div>
                                    <div className="bar2"></div>
                                    <div className="bar3"></div>
                                    <div className="bar4"></div>
                                    <div className="bar5"></div>
                                    <div className="bar6"></div>
                                    <div className="bar7"></div>
                                    <div className="bar8"></div>
                                    <div className="bar9"></div>
                                    <div className="bar10"></div>
                                    <div className="bar11"></div>
                                    <div className="bar12"></div>
                                </div>
                            )}
                            Change Password</button>
                        </DialogContent>
                        </Dialog>

                      
                    </div>

                    <div className=' w-full flex items-center gap-4'>
                        <Input placeholder='Funds' value={funds} type='text' className=' w-[70%] bg-zinc-900 border-none text-white'/>
                        <button
                        className=' h-10 w-[30%] py-2 text-sm bg-secondary rounded-lg font-bold text-amber-950 hover:scale-110 ease-in-out duration-200'
                        >Add</button>
                    </div>
                </div>

            </div>

        </div>
        <Footer/>
    </div>
  )
}
