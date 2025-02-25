"use client"

import Footer from '@/components/common/Footer'
import Navigation from '@/components/landingpage/Navigation'
import React from 'react'

export default function page() {
  return (
    <div className=' download w-screen h-auto flex flex-col items-center justify-center'
    style={{backgroundImage: "url('/pd/BG.png')", backgroundSize: "cover", backgroundPosition: "bottom", backgroundRepeat:"no-repeat"}}
    
    >
        <div className=' max-w-[1920px] flex flex-col items-center justify-start gap-10 w-screen h-auto pb-20'
        style={{backgroundImage: "url('/pd/BG.png')", backgroundSize: "cover", backgroundPosition: "bottom", backgroundRepeat:"no-repeat"}}
        >
        <Navigation/>

        <div className=' w-[80%] md:w-[50%] h-[700px] flex flex-col gap-6 items-center justify-center mt-20 lg:mt-5'>
            <h2 className=' text-2xl 2xl:text-4xl font-bold text-orange-200'>Privacy Policy</h2>

            <div className=' w-full flex flex-col gap-2 h-[600px] overflow-y-auto'>
              <p className=' text-lg font-semibold text-orange-400 '>At Rise of Fearless (rof.game), your privacy is our priority. This Privacy Policy explains how we collect, use, and protect your data. By using our app, you agree to this policy.</p>

                {/* <p className=' text-zinc-300 text-sm'>We hold the privacy of our users in high regard. This Privacy Policy elucidates the procedures governing the collection, utilization, disclosure, and protection of your information during your interactions with our platform. It is imperative that you read this Privacy Policy attentively.If you disagree with the terms outlined herein, kindly refrain from accessing the application.

We retain the right to modify this Privacy Policy at any time and for any reason. Any alterations will be communicated by updating the "Last updated" date of this Privacy Policy. It is recommended that you periodically review this Privacy Policy to stay abreast of any updates. Your continued use of the application after the posting of a revised Privacy Policy will be construed as awareness, acceptance, and agreement to the modifications.

This Privacy Policy does not extend to the third-party online/mobile store from which you install the application, including any in-game virtual items, which may independently collect and utilize your data. We bear no responsibility for data collected by such third parties.</p> */}

                <p className=' text-lg font-semibold text-orange-200 mt-4'>Information We Collect</p>
                <p className=' text-zinc-300 text-sm'>* Personal Information: Name, email, and username for account creation.</p>
                <p className=' text-zinc-300 text-sm'>* Non-Personal Information: Device type, operating system, IP address, and gameplay analytics.</p>

                <p className=' text-lg font-semibold text-orange-200 mt-4'>
                How We Use Your Data</p>
                <p className=' text-zinc-300 text-sm'>* To provide and improve game functionality.</p>
                <p className=' text-zinc-300 text-sm'>* To notify you of important updates.</p>
                <p className=' text-zinc-300 text-sm'>* To analyze app usage for improvements.</p>


                <p className=' text-lg font-semibold text-orange-200 mt-4'>
                Data Sharing</p>
                <p className=' text-zinc-300 text-sm'>We do not sell your data. Limited sharing occurs with:</p>
                <p className=' text-zinc-300 text-sm'>* Service providers for hosting or analytics.</p>
                <p className=' text-zinc-300 text-sm'>* Payment platforms to process transactions.</p>

                <p className=' text-lg font-semibold text-orange-200 mt-4 '>
                Your Rights</p>
                <p className=' text-zinc-300 text-sm'>Access, modify, or delete your data by contacting support@rof.game.</p>

                <p className=' text-lg font-semibold text-orange-200 mt-4'>
                Security</p>
                <p className=' text-zinc-300 text-sm'>We employ encryption and follow industry standards to protect your data.</p>

                <p className=' text-lg font-semibold text-orange-200 mt-4'>
                Children’s Privacy</p>
                <p className=' text-zinc-300 text-sm'>We do not knowingly collect data from users under 13.</p>

                <p className=' text-lg font-semibold text-orange-200 mt-4'>
                Contact Us</p>
                <p className=' text-zinc-300 text-sm'>Email us at <span className=' text-orange-400'>support@rof.game</span> for questions or concerns.</p>

                

                
            </div>

             
          

        </div>

        </div>
        <Footer/>
    </div>
  )
}
