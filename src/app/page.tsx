"use client"
import { useState, useEffect } from "react";
import Footer from "@/sections/Footer";
import Hero from "@/sections/Hero";
import Navbar from "@/sections/Navbar";
import Newsletter from "@/sections/Newsletter";
import Section2 from "@/sections/Section2";
import Section3 from "@/sections/Section3";
import Section4 from "@/sections/Section4";
import Section5 from "@/sections/Section5";
import Socials from "@/sections/Socials";
import Image from "next/image";
import Maps from "@/sections/Maps";
import About from "@/sections/About";

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
       <div className=" flex flex-col items-center overflow-x-hidden">
        <main>
          <Hero/>
          {/* <Section2/> */}
          <Section3/>
          <Maps/>
          <About/>
          {/* <Section4/>
          <Section5/> */}
          <Newsletter/>
        </main>
        <Footer/>
      </div>
    )}   
    </>
   
  );
}
