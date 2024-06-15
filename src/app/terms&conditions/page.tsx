"use client"

import NavbarUser from '@/components/NavbarUser'
import Footer from '@/sections/Footer'
import Navbar from '@/sections/Navbar'
import React from 'react'

export default function page() {
  return (
    <div className=' download w-screen h-auto flex flex-col items-center justify-center'
    style={{backgroundImage: "url('/pd/BG.png')", backgroundSize: "cover", backgroundPosition: "bottom", backgroundRepeat:"no-repeat"}}
    
    >
        <div className=' max-w-[1920px] flex flex-col items-center justify-center gap-10 w-screen h-screen '
        style={{backgroundImage: "url('/pd/BG.png')", backgroundSize: "cover", backgroundPosition: "bottom", backgroundRepeat:"no-repeat"}}
        >
        <Navbar/>

        <div className=' w-[80%] md:w-[50%] h-[500px] flex flex-col gap-6 items-center justify-center mt-5'>
            <h2 className=' text-2xl 2xl:text-4xl font-bold text-orange-200'>Terms & Conditions</h2>

            <div className=' w-full flex flex-col gap-4 h-[400px] overflow-y-auto'>
                <p className=' text-orange-100 text-xs text-center'>Please read these terms and conditions ("terms and conditions", "terms") carefully before using Rise Of Fearless("service").</p>
                <p className=' text-lg font-semibold text-orange-200 text-center'>Conditions of use</p>
                <p className=' text-zinc-300 text-sm text-center'>Please be aware that the contents of this Money Monster Island are not intended as financial advice. Money Monster Island is an idle game designed for play-to-earn functionality, seamlessly integrating both crypto and fiat currencies. Development priorities, roadmaps, and features are subject to significant changes based on ongoing research and community feedback.</p>

                <p className=' text-lg font-semibold text-orange-200 text-center'>Privacy Policy</p>
                <p className=' text-zinc-300 text-sm text-center'>Before you continue using our website, we advise you to read our privacy policy regarding our user data collection. It will help you better understand our practices.</p>

                <p className=' text-lg font-semibold text-orange-200 text-center'>Age Restrictions</p>
                <p className=' text-zinc-300 text-sm text-center'>You must be at least 13 (thirteen) years of age before you can use this platform. By using this website, you warrant that you are at least 13 years of age, and you may legally adhere to this Agreement. We assume no responsibility for liabilities related to age misrepresentation</p>

                <p className=' text-lg font-semibold text-orange-200 text-center'>Intellectual Property</p>
                <p className=' text-zinc-300 text-sm text-center'>You agree that all materials, products, and services provided on this platform are the property of MONEY MONSTER ISLAND, its affiliates, directors, officers, employees, agents, suppliers, or licensors including all copyrights, trade secrets, trademarks, patents, and other intellectual property. You also agree that you will not reproduce or redistribute the MONEY MONSTER ISLANDs intellectual property in any way, including electronic, digital, or new trademark registrations.

You agree that all materials, products, and services provided on this platform are the property of MONEY MONSTER ISLAND, its affiliates, directors, officers, employees, agents, suppliers, or licensors including all copyrights, trade secrets, trademarks, patents, and other intellectual property. You also agree that you will not reproduce or redistribute the MONEY MONSTER ISLANDs intellectual property in any way, including electronic, digital, or new trademark registrations.</p>

              <p className=' text-lg font-semibold text-orange-200 text-center'>User Account</p>
              <p className=' text-zinc-300 text-sm text-center'>As a user of this platform, you may be asked to register with us and provide private information. You are responsible for ensuring the accuracy of this information, and you are responsible for maintaining the safety and security of your identifying information. You are also responsible for all activities that occur under your account or password

If you think there are any possible issues regarding the security of your account on the website, inform us immediately so we may address them accordingly.


If you think there are any possible issues regarding the security of your account on the website, inform us immediately so we may address them accordingly.</p>

                <p className=' text-lg font-semibold text-orange-200 text-center'>Age Restrictions</p>
                <p className=' text-zinc-300 text-sm text-center'>You must be at least 13 (thirteen) years of age before you can use this platform. By using this website, you warrant that you are at least 13 years of age, and you may legally adhere to this Agreement. We assume no responsibility for liabilities related to age misrepresentation</p>
            </div>

             
          

        </div>

        </div>
        <Footer/>
    </div>
  )
}
