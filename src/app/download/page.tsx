import NavbarUser from '@/components/NavbarUser'
import Footer from '@/sections/Footer'
import React from 'react'

export default function page() {
  return (
    <div className=' download w-screen h-auto flex flex-col items-center justify-start'
    style={{backgroundImage: "url('/pd/BG.png')", backgroundSize: "cover", backgroundPosition: "bottom", backgroundRepeat:"no-repeat"}}
    
    >
        <div className=' max-w-[1920px] flex flex-col items-center justify-start gap-10 w-screen h-auto pb-40 '
        style={{backgroundImage: "url('/pd/BG.png')", backgroundSize: "cover", backgroundPosition: "bottom", backgroundRepeat:"no-repeat"}}
        >
        <NavbarUser/>

        <div className=' w-[60%] h-[500px] flex flex-col gap-6 items-center justify-center'>
            <h2 className=' text-4xl font-bold text-orange-200'>Play Game</h2>
            <p className=' text-sm text-orange-100 text-center'>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>

            <div className=' flex justify-center items-center gap-2 mt-6 clear-start bg-orange-300 p-2 rounded-lg'>
              <a href="https://www.apple.com/ph/app-store/">
                <img src="/astore.png" alt="" width={200} className=' 2xl:w-[200px] w-[120px] drop-shadow-md shadow-white' />
              </a>
              <a href="https://play.google.com/store/games?hl=en&fbclid=IwZXh0bgNhZW0CMTAAAR3ly3HMKLmI37Cmp0M9GC_5BWBtQUhpmYCU7yAnNCivWihGVzxuzcRe1Ik_aem_AT5s9sJFhCA_hWjYwNGU503hjbYLrkq8ihii4GCibOKImBOF_B4rG42Swv8x6xcrcQ7rg5GffIbUYPGF43_j0t15">
              <img src="/gp.png" alt="" width={200} className=' 2xl:w-[200px] w-[120px]' />

              </a>

            </div>

        </div>

        </div>
        <Footer/>
    </div>
  )
}
