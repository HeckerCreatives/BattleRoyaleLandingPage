"use client"
import Footer from '@/components/common/Footer'
import Navigation from '@/components/landingpage/Navigation'
import React from 'react'

export default function page() {
  return (
    <div className=' download w-screen h-auto flex flex-col items-center justify-center'
    style={{backgroundImage: "url('/pd/BG.png')", backgroundSize: "cover", backgroundPosition: "bottom", backgroundRepeat:"no-repeat"}}
    
    >
        <div className=' max-w-[1920px] flex flex-col items-center justify-start gap-10 w-screen h-auto pb-20 '
        style={{backgroundImage: "url('/pd/BG.png')", backgroundSize: "cover", backgroundPosition: "bottom", backgroundRepeat:"no-repeat"}}
        >
        <Navigation/>

        <div className=' w-[80%] md:w-[50%] h-[500px] flex flex-col gap-6 items-center justify-center mt-20 lg:mt-5'>
            <h2 className=' text-2xl 2xl:text-4xl font-bold text-orange-200 text-center'>Terms and Conditions for Rise of Fearless: A Battle Royale Game</h2>

            <div className=' w-full flex flex-col gap-4 h-[400px] overflow-y-auto'>
                <p className=' text-orange-100 text-xs text-start'>Welcome to Rise of Fearless! Please read these Terms and Conditions ("Terms", "Terms and Conditions") carefully before using the Rise of Fearless game (the "Service") operated by [Your Company Name] ("us", "we", or "our"). Your access to and use of the Service is conditioned on your acceptance of and compliance with these Terms. These Terms apply to all visitors, users, and others who access or use the Service.
                  <br/>
                By accessing or using the Service, you agree to be bound by these Terms. If you disagree with any part of the Terms, then you may not access the Service.
                </p>


                <p className=' text-lg font-semibold text-orange-200 text-start'>1. Accounts</p>
                <p className=' text-zinc-300 text-sm text-start'>1.1 When you create an account with us, you must provide information that is accurate, complete, and current at all times. Failure to do so constitutes a breach of the Terms, which may result in immediate termination of your account on our Service.</p>
                <p className=' text-zinc-300 text-sm text-start'>1.2 You are responsible for safeguarding the password that you use to access the Service and for any activities or actions under your password, whether your password is with our Service or a third-party service.</p>
                <p className=' text-zinc-300 text-sm text-start'>1.3 You agree not to disclose your password to any third party. You must notify us immediately upon becoming aware of any breach of security or unauthorized use of your account.</p>


                <p className=' text-lg font-semibold text-orange-200 text-start'>2. Privacy</p>
                <p className=' text-zinc-300 text-sm text-start'>2.1 Your use of the Service is also governed by our Privacy Policy, which covers how we collect, use, share, and store your personal information.</p>

                <p className=' text-lg font-semibold text-orange-200 text-start'>3. Intellectual Property</p>
                <p className=' text-zinc-300 text-sm text-start'>3.1 The Service and its original content (excluding Content provided by users), features, and functionality are and will remain the exclusive property of [Your Company Name] and its licensors.</p>
                <p className=' text-zinc-300 text-sm text-start'>3.2 You may not modify, copy, distribute, transmit, display, perform, reproduce, publish, license, create derivative works from, transfer, or sell any information, software, products, or services obtained from the Service.</p>

                <p className=' text-lg font-semibold text-orange-200 text-start'>4. User Conduct</p>
                <p className=' text-zinc-300 text-sm text-start'>4.1 You agree that you will not engage in any activity that interferes with or disrupts the Service (or the servers and networks which are connected to the Service).</p>
                <p className=' text-zinc-300 text-sm text-start'>4.2 You agree not to engage in any of the following prohibited activities:
                <br/>
                Cheating or hacking
                <br/>

                Harassing or abusive behavior
                <br/>

                Infringing on the rights of other users
                <br/>
                Posting inappropriate or offensive content</p>

                <p className=' text-lg font-semibold text-orange-200 text-start'>5. Termination</p>
                <p className=' text-zinc-300 text-sm text-start'>5.1 We may terminate or suspend your account immediately, without prior notice or liability, for any reason whatsoever, including without limitation if you breach the Terms.</p>
                <p className=' text-zinc-300 text-sm text-start'>5.2 Upon termination, your right to use the Service will immediately cease. If you wish to terminate your account, you may simply discontinue using the Service.</p>

                <p className=' text-lg font-semibold text-orange-200 text-start'>6. Limitation of Liability</p>
                <p className=' text-zinc-300 text-sm text-start'>6.1 In no event shall [Your Company Name], nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential, or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from (i) your access to or use of or inability to access or use the Service; (ii) any conduct or content of any third party on the Service; (iii) any content obtained from the Service; and (iv) unauthorized access, use, or alteration of your transmissions or content, whether based on warranty, contract, tort (including negligence), or any other legal theory, whether or not we have been informed of the possibility of such damage, and even if a remedy set forth herein is found to have failed its essential purpose.</p>

                <p className=' text-lg font-semibold text-orange-200 text-start'>7. Governing Law</p>
                <p className=' text-zinc-300 text-sm text-start'>7.1 These Terms shall be governed and construed in accordance with the laws of [Your Country], without regard to its conflict of law provisions.</p>

                <p className=' text-lg font-semibold text-orange-200 text-start'>8. Changes</p>
                <p className=' text-zinc-300 text-sm text-start'>8.1 We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a revision is material, we will try to provide at least 30 days' notice prior to any new terms taking effect. What constitutes a material change will be determined at our sole discretion.</p>
                <p className=' text-zinc-300 text-sm text-start'>8.2 By continuing to access or use our Service after those revisions become effective, you agree to be bound by the revised terms. If you do not agree to the new terms, please stop using the Service.</p>

                <p className=' text-lg font-semibold text-orange-200 text-start'>9. Contact Us</p>
                <p className=' text-zinc-300 text-sm text-start'>9.1 If you have any questions about these Terms, please contact us at <strong>support@rof.game</strong>.</p>
                <p className=' text-zinc-300 text-sm text-start'>By playing Rise of Fearless, you acknowledge that you have read, understood, and agree to be bound by these Terms and Conditions.</p>
            


              



               
            </div>

             
          

        </div>

        </div>
        <Footer/>
    </div>
  )
}
