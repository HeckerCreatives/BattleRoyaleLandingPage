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
        <div className=' max-w-[1920px] flex flex-col items-center justify-start gap-10 w-screen h-auto pb-20'
        style={{backgroundImage: "url('/pd/BG.png')", backgroundSize: "cover", backgroundPosition: "bottom", backgroundRepeat:"no-repeat"}}
        >
        <Navbar/>

        <div className=' w-[80%] md:w-[50%] h-[500px] flex flex-col gap-6 items-center justify-center mt-20 lg:mt-5'>
            <h2 className=' text-2xl 2xl:text-4xl font-bold text-orange-200'>Privacy Policy</h2>

            <div className=' w-full flex flex-col gap-4 h-[400px] overflow-y-auto'>
                <p className=' text-zinc-300 text-sm text-center'>We hold the privacy of our users in high regard. This Privacy Policy elucidates the procedures governing the collection, utilization, disclosure, and protection of your information during your interactions with our platform. It is imperative that you read this Privacy Policy attentively.If you disagree with the terms outlined herein, kindly refrain from accessing the application.

We retain the right to modify this Privacy Policy at any time and for any reason. Any alterations will be communicated by updating the "Last updated" date of this Privacy Policy. It is recommended that you periodically review this Privacy Policy to stay abreast of any updates. Your continued use of the application after the posting of a revised Privacy Policy will be construed as awareness, acceptance, and agreement to the modifications.

This Privacy Policy does not extend to the third-party online/mobile store from which you install the application, including any in-game virtual items, which may independently collect and utilize your data. We bear no responsibility for data collected by such third parties.</p>

                <p className=' text-lg font-semibold text-orange-200 text-center'>COLLECTION OF YOUR INFORMATION</p>
                <p className=' text-zinc-300 text-sm text-center'>We may gather information about you through various means. The information collected via the platform encompasses personal data necessary for the payment policy</p>

                <p className=' text-lg font-semibold text-orange-200 text-center'>DISCLOSURE OF YOUR INFORMATION</p>
                <p className=' text-zinc-300 text-sm text-center'>Information we collect about you may be shared in specific situations, including:

By Law or to Protect Rights. We may disclose information if required by legal processes, to investigate potential policy violations, or to safeguard the rights, property, and safety of others, as allowed or mandated by applicable laws.

Third-Party Service Providers. We may share your information with third parties rendering services on our behalf, such as payment processing, data analysis, email delivery, hosting services, customer service, and marketing assistance.

Online Postings. Posts on the platform may be publicly viewed and distributed perpetually outside the application.

Sale or Bankruptcy. In the event of reorganization, sale, merger, or acquisition, your information may be transferred to the successor entity. You acknowledge and accept that such transfers may transpire, and the transferee may choose not to honor commitments outlined in this Privacy Policy.

We disclaim responsibility for the actions of third parties with whom you share personal or sensitive data. You are responsible for managing communications with third parties if you wish to cease receiving correspondence, emails, or other communications from them.</p>

                <p className=' text-lg font-semibold text-orange-200 text-center'>SECURITY OF YOUR INFORMATION</p>
                <p className=' text-zinc-300 text-sm text-center'>We implement administrative, technical, and physical security measures to protect your personal information. Despite our efforts, no security measures are infallible, and online information is vulnerable to interception and misuse. We cannot guarantee absolute security.</p>

              <p className=' text-lg font-semibold text-orange-200 text-center'>POLICY FOR CHILDREN</p>
              <p className=' text-zinc-300 text-sm text-center'>We do not knowingly solicit information from or market to children under the age of 13. If you discover any data collected from children under 13, please contact us using the provided contact information.</p>

                <p className=' text-lg font-semibold text-orange-200 text-center'>OPTIONS REGARDING YOUR INFORMATION</p>
                <p className=' text-zinc-300 text-sm text-center'>You may at any time review or change the information in your account or terminate your account by:

● Logging into your account settings and updating your account

● Contacting us using the contact information provided below

● [Other]

Upon your request to terminate your account, we will deactivate or delete your account and information from our active databases. However, some information may be retained in our files to prevent fraud, troubleshoot problems, assist with any investigations, enforce our Terms of Use and/or comply with legal requirements.</p>
            </div>

             
          

        </div>

        </div>
        <Footer/>
    </div>
  )
}
