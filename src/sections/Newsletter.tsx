import React from 'react'

export default function Newsletter() {
  return (
    <div id='newsletter' className=' flex items-center justify-center w-screen h-[500px]'
     style={{backgroundImage: "url('/assets/6th section BG.png')", backgroundSize: "cover", backgroundPosition: "center", backgroundRepeat:"no-repeat"}}
    >

        <div className=' flex flex-col items-center justify-center gap-10 '>
            <h2 className=' text-2xl lg:text-4xl font-bold italic text-white'>Subscribe to our news letter!</h2>
            <div className=' flex lg:flex-row flex-col items-center justify-center gap-4'>
                <input type="text" name="" id="" placeholder='ENTER YOUR EMAIL' className=' text-xl font-bold px-6 text-white bg-zinc-950 bg-opacity-5 rounded-lg h-[50px] md:w-[400px] lg:w-[750px]'
                style={{backgroundImage: "url('/assets/enter your email holder.png')", backgroundSize: "cover", backgroundPosition: "center", backgroundRepeat:"no-repeat"}}
                />
                <button className=' h-[80px] w-[250px] text-xl font-bold text-amber-950 hover:scale-110 ease-in-out duration-300'
                style={{backgroundImage: "url('/assets/button.png')", backgroundSize: "contain", backgroundPosition: "center", backgroundRepeat:"no-repeat"}}
                >SUBSCRIBE</button>
            </div>
        </div>

    </div>
  )
}
