"use client"
import { useState, useEffect } from "react";
import HeroSection from "@/components/landingpage/Header";
import Latestnews from "@/components/landingpage/News";
import Mapssection from "@/components/landingpage/Maps";
import Faq from "@/components/landingpage/Faq";
import Newsletter from "@/components/landingpage/Newsletter";
import Footer from "@/components/common/Footer";
import MapsSections from "@/components/landingpage/MapsSection";
import About from "@/components/landingpage/About";
import axios from "axios";
import { FaInstagram, FaTelegram } from "react-icons/fa6";
import { RiTwitterXLine } from "react-icons/ri";

interface Links {
  _id: string
  title: string
  createdAt:string 
  updatedAt: string
  link: string
}

export default function Home() {

  const [loading, setLoading] = useState(true);
  const [list, setList] = useState<Links[]>([])
  

  useEffect(() => {
    const handleLoad = () => {
        setLoading(false);
    };

    if (document.readyState === 'complete') {
      setLoading(false);
    } else {
      window.addEventListener('load', handleLoad);
    }

    return () => {
      window.removeEventListener('load', handleLoad);
    };
  }, []);

  
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
    <>
    { loading ? (
      <div className=" w-screen h-screen flex items-center justify-center bg-zinc-950"
      style={{backgroundImage: "url('/pd/BG.png')", backgroundSize: "cover", backgroundPosition: "bottom", backgroundRepeat:"no-repeat"}}
      
      >
        <div className=" relative flex flex-col items-center justify-center w-auto h-auto">
          <img src="/pd/Tab Character.png" alt="" width={120} />
          <div className=" loader2 text-orange-300 mt-2">
        
        </div>
        </div>
       
      </div>
    ): (
       <div className=" flex flex-col items-center justify-center overflow-x-hidden"
      style={{backgroundImage: "url('/investor/assets/BG Pattern Solid.png')", backgroundSize: "contain", backgroundPosition: "top", backgroundRepeat:"repeat"}}
       
       >
        <main className=" relative w-full flex flex-col items-center justify-center">
          <div className=' hidden fixed right-0 z-[99999]  bottom-8 lg:flex flex-col gap-4 items-center justify-center rounded-l-lg bg-amber-950 px-4 py-6'>
          
                    {list.map((item, index) => (
                      <a key={item._id} href={item.link} target='_blank'>
                        {getImage(item.title)}
                      </a>
                    ))}
                   
                  
          
                  </div>
          <HeroSection/>

          {/* Orange V border at hero clip boundary */}
          <svg
            viewBox="0 0 1440 64"
            preserveAspectRatio="none"
            xmlns="http://www.w3.org/2000/svg"
            className='w-full h-16 -mt-16 relative z-10 block shrink-0 pointer-events-none'
          >
            <polyline points="0,0 720,64 1440,0" fill="none" stroke="#f97316" strokeWidth="5" strokeLinejoin="miter"/>
          </svg>

          <Latestnews/>

          {/* Orange slope divider at news/maps boundary */}
          <svg
            viewBox="0 0 1440 64"
            preserveAspectRatio="none"
            xmlns="http://www.w3.org/2000/svg"
            className='w-full h-16 -mt-16 relative z-10 block shrink-0 pointer-events-none'
          >
            <line x1="0" y1="64" x2="1440" y2="0" stroke="#f97316" strokeWidth="12"/>
          </svg>

          <div className='-mt-16 w-full'>
            <MapsSections/>
          </div>

          {/* Orange slope divider at maps/faq boundary — rotated direction */}
          <svg
            viewBox="0 0 1440 64"
            preserveAspectRatio="none"
            xmlns="http://www.w3.org/2000/svg"
            className='w-full h-16 -mt-16 relative z-10 block shrink-0 pointer-events-none'
          >
            <line x1="0" y1="0" x2="1440" y2="64" stroke="#f97316" strokeWidth="12"/>
          </svg>

          <div className='-mt-16 w-full'>
            <Faq/>
          </div>
          <Mapssection/>

          <Newsletter/>
        </main>
        <Footer/>
      </div>
    )}   
    </>
   
  );
}
