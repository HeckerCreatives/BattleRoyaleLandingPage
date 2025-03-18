"use client"
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
import SocketListener from '@/components/SocketListener'
import { Eye, EyeOff } from 'lucide-react'
import { Country } from '@/lib/data'
import Navigation from '@/components/landingpage/Navigation'
import Footer from '@/components/common/Footer'

interface Error {
  newemail: string;
 

}
interface PlayerDetails {
    kill: number;
    death: number;
    level: number;
    xp: number;
    userrank: number
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
  const [show, setShow] = useState('password')
  const [isFormValid, setIsFormValid] = useState(false); 
    const [errors, setErrors] = useState<Error | null>( null);
    const [rank, setRank] = useState(0); 
    const [playerDetails, setPlayerDetails] = useState<PlayerDetails>()

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
    
    useEffect(() => {
        const playerDetailsData = async () => {
            try {
                const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/usergamedetails/getusergamedetails`, {
                    withCredentials: true,
                    headers: {
                        'Content-Type': 'application/json',
                    }
                });
                setPlayerDetails(response.data.data);
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
        };

         playerDetailsData();
 
    }, []); 
    useEffect(() => {
        const rankData = async () => {
            try {
                const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/leaderboard/getleaderboard`, {
                    withCredentials: true,
                    headers: {
                        'Content-Type': 'application/json',
                    }
                });
                setRank(response.data.rank as number);
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
        };

         rankData();
 
    }, []); 

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
                const response = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/user/changeuserpassword`,{
                    newPassword: password
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
            } catch (error) {
                setPasswordload(false)
                if (axios.isAxiosError(error)) {
                    const axiosError = error as AxiosError<{ message: string, data: string }>;
                    if (axiosError.response && axiosError.response.status === 401) {
                        localStorage.setItem('auth', 'false');
                        router.push('/')
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

    }
    };

    // const findCountry = Country.find((item) => item.code === country )

    const findCountry = Country.find(
        (item) => item.code === country || item.name.toLowerCase() === country.toLowerCase()
      );
      

  return (
    <div className=' w-screen h-auto flex flex-col items-center justify-start overscroll-x-none '
    style={{backgroundImage: "url('/pd/BG.png')", backgroundSize: "cover", backgroundPosition: "bottom", backgroundRepeat:"no-repeat"}}
    
    >
        <SocketListener/>
        <div className=' max-w-[1920px] flex flex-col items-center justify-start gap-10 w-screen h-auto pb-40 '
        style={{backgroundImage: "url('/pd/BG.png')", backgroundSize: "cover", backgroundPosition: "bottom", backgroundRepeat:"no-repeat"}}
        >
        <Navigation/>
            

            <div className=' relative w-[90%] md:w-[60%] grid-cols-1 grid xl:grid-cols-2 gap-10 h-auto mt-10 border-[1px] border-orange-300 rounded-lg'
            style={{backgroundImage: "url('/pd/Tab.png')", backgroundSize: "cover", backgroundPosition: "center", backgroundRepeat:"no-repeat"}}
            
            >
                <div className=' absolute top-4 left-4 bg-gradient-to-r from-amber-950 to-[#643c0000] w-full py-2 px-4'>
                    <h2 className=' text-white text-xl font-bold'>Account Management</h2>
                </div>
                <div className=' flex flex-col gap-2 rounded-lg w-full h-auto p-4 md:p-10 mt-12'
                
                >
                    <p className=' text-sm text-orange-200'>Username</p>
                    <Input placeholder='Username' value={name} type='text' className=' w-[70%] md:w-[68%] bg-zinc-900 border-none text-white'/>
                    <p className=' text-sm text-orange-200'>Country</p>
                    <Input placeholder='Username' value={findCountry?.name} type='text' className=' w-[70%] md:w-[68%] bg-zinc-900 border-none text-white'/>
                    <p className=' text-sm text-orange-200'>Email</p>
                    <div className=' w-full flex items-center gap-4'>
                        <Input placeholder='Email' value={email} type='email' className=' w-[70%] bg-zinc-900 border-none text-white'/>
                        <Dialog>
                        <DialogTrigger className='h-10 w-[30%] text-sm py-2 bg-gradient-to-r from-orange-300 to-orange-400 rounded-lg font-bold text-amber-950 hover:scale-110 ease-in-out duration-200'
                        >
                          
                                
                            Edit
                        </DialogTrigger>
                        <DialogContent className=' w-[95%] md:w-[70%] lg:w-[50%] bg-zinc-950 border-none p-6'
                        style={{backgroundImage: "url('/pd/BG.png')", backgroundSize: "cover", backgroundPosition: "bottom", backgroundRepeat:"no-repeat"}}
                        
                        >
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
                    <p className=' text-sm text-orange-200'>Password</p>
                    <div className=' w-full flex items-center gap-4'>
                        <Input placeholder='Password' value='test12345' type='password' className=' w-[70%] bg-zinc-900 border-none text-white'/>
                        <Dialog>
                        <DialogTrigger className='h-10 w-[30%] text-sm font-bold py-2 rounded-lg text-amber-950 hover:scale-110 ease-in-out duration-200 bg-gradient-to-r from-orange-300 to-orange-400'
                        >
                           
                            Edit
                        </DialogTrigger>
                        <DialogContent className=' bg-zinc-950 border-none p-6 w-[95%] md:w-[70%] lg:w-[50%]'
                        style={{backgroundImage: "url('/pd/BG.png')", backgroundSize: "cover", backgroundPosition: "bottom", backgroundRepeat:"no-repeat"}}
                        
                        >
                            <h2 className=' text-lg font-semibold text-secondary'>Change Password</h2>
                            <p className=' text-sm text-white'>New Password</p>

                            <div className=' relative w-full'>
                            <Input placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)} type={show} className=' w-full bg-zinc-900 border-none text-white'/>
                            {show === 'password' ? (
                                <button onClick={() => setShow('text')} className=' text-white absolute top-3 right-2'><EyeOff size={20}/></button>
                            ):(
                                <button onClick={() => setShow('password')} className=' text-white absolute top-3 right-2'><Eye size={20}/></button>

                            )}
                            </div>

                           <button
                           onClick={changePassword}
                           style={{backgroundImage: "url('/assets/button.png')", backgroundSize: "contain", backgroundPosition: "center", backgroundRepeat:"no-repeat"}}
                            className=' mt-4 h-12 w-[200px] text-sm font-bold text-amber-950 hover:scale-110 ease-in-out duration-200 flex items-center justify-center gap-1'
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
                    <p className=' text-sm text-orange-200'>Credits</p>

                    <div className=' w-full flex items-center gap-4'>
                        <Input disabled={true} placeholder='Funds' value={funds} type='text' className=' w-[70%] bg-zinc-900 border-none text-white'/>
                        
                        <Dialog>
                        <DialogTrigger className=' w-[30%] h-10 py-2 text-sm bg-gradient-to-r from-orange-300 to-orange-400 rounded-lg font-bold text-amber-950 hover:scale-110 ease-in-out duration-200'>
                           Add
                        </DialogTrigger>
                        <DialogContent className=' flex items-center justify-center w-[90%] md:w-[400px] h-[300px] bg-zinc-950 border-zinc-900'
                        style={{backgroundImage: "url('/pd/BG.png')", backgroundSize: "cover", backgroundPosition: "bottom", backgroundRepeat:"no-repeat"}}
                        >
                           <p className=' text-white'>Coming Soon!</p>
                        </DialogContent>
                        </Dialog>
                    </div>

                    <div className=' w-full grid grid-cols-3 gap-4 mt-4'>
                        <div className=' bg-zinc-900 rounded-md flex flex-col items-center justify-center gap-4 p-4'>
                            <h2 className=' text-xl font-bold text-orange-300'>{playerDetails?.kill}</h2>
                            <p className=' text-sm text-zinc-400 h-10 text-center'>Total Kills</p>

                        </div>

                         <div className=' bg-zinc-900 rounded-md flex flex-col items-center justify-center gap-4 p-4'>
                            <h2 className=' text-xl font-bold text-orange-300'>{playerDetails?.death}</h2>
                            <p className=' text-sm text-zinc-400 h-10 text-center'>Total Deaths</p>

                        </div>

                         <div className=' bg-zinc-900 rounded-md flex flex-col items-center justify-center gap-4 p-4'>
                            <h2 className=' text-xl font-bold text-orange-300'>{playerDetails?.userrank}</h2>
                            <p className=' text-sm text-zinc-400 h-10 text-center'>Current Rank</p>

                        </div>
                    </div>
                </div>

                <div className=' relative w-full h-full xl:flex items-end justify-end hidden'>
                    <img src="/pd/Tab Character.png" alt="" width={500} className=' relative left-20 bottom-0 md:block hidden'/>

                </div>

            </div>

        </div>
        <Footer/>
    </div>
  )
}
