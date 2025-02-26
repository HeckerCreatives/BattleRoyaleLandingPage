import React from 'react'

export default function MapsSections() {
  return (
    <div id='maps' className=' relative z-20 w-full h-full mt-12 flex items-center justify-center'>
    <img src="/investor/assets/Tri Plate.png" alt="plate" className=' min-h-[900px]'/>
    <div className=' w-full h-full absolute flex flex-col items-center justify-center px-4'>

        <div className=' w-full max-w-[1440px] h-[60%] flex flex-col text-white'>
            <h2 className=' ~text-2xl/4xl font-dihjauti font-bold max-w-[300px] md:max-w-[500px]'>The legacy of Adwa is at the heart of Rise of Fearless</h2>
            <p className=' ~text-xs/lg mt-8 max-w-[900px]'>With carefully crafted maps based on iconic African landscapes, such as the Great TITE Rift Valley and Lalibela’s rock-hewn churches, and characters rooted in historical traditions, Rise of Fearless delivers an immersive experience that resonates on a global scale.</p>

            <div className=' w-full flex items-center justify-center mt-12'>
                <img src="/investor/assets/group1.png" alt="map" width={800} height={800} className=' md:w-[60%]' />
            </div>

            <div className=' w-full flex items-center justify-center ~mt-12/32'>
                <a href='/#newsletter' className=' relative drop-shadow-lg flex items-center justify-center'>
                    <img src="/investor/assets/BUTTON.png" alt="button" width={500} height={500} className=' ~w-64/96'/>
                    <p className=' !text-sm/2xl font-bold text-white absolute'>CONNECT WITH US</p>
                </a>

            </div>


        </div>

        
    </div>
</div>
  )
}
