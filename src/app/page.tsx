"use client"
import { useState, useEffect } from "react";
import HeroSection from "@/components/landingpage/Header";
import Latestnews from "@/components/landingpage/News";
import Mapssection from "@/components/landingpage/Maps";
import Faq from "@/components/landingpage/Faq";
import Newsletter from "@/components/landingpage/Newsletter";
import Footer from "@/components/common/Footer";
import MapsSections from "@/components/landingpage/MapsSection";

export default function Home() {

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const handleLoad = () => {
        setLoading(false);
    };

    if (document.readyState === 'complete') {
      setTimeout(() => {
        setLoading(false);
      }, 2000);
    } else {
      window.addEventListener('load', handleLoad);
    }

    return () => {
      window.removeEventListener('load', handleLoad);
    };
  }, []);


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
        <main className=" w-full flex flex-col items-center justify-center">
          <HeroSection/>
          <Latestnews/>
          <MapsSections/>
          <Faq/>
          <Mapssection/>
          <Newsletter/>
        </main>
        <Footer/>
      </div>
    )}   
    </>
   
  );
}
