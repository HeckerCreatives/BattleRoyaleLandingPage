import React from 'react'

export default function Section4() {
  return (
    <div  className=' w-screen h-[400px] lg:h-[700px] flex items-center justify-center'
     style={{backgroundImage: "url('/assets/4th section BG.png')", backgroundSize: "cover", backgroundPosition: "center", backgroundRepeat:"no-repeat"}}
    >

        <div className=' hidden lg:flex items-center justify-center w-[200px] h-[200px]'
          style={{backgroundImage: "url('/assets/triangle button HOLDER.png')", backgroundSize: "cover", backgroundPosition: "center", backgroundRepeat:"no-repeat"}}
        >
            <img src="/assets/triangle BUTTON.png" alt="" />

        </div>

        <div className=' lg:hidden flex items-center justify-center w-[100px] h-[100px]'
          style={{backgroundImage: "url('/assets/triangle button HOLDER.png')", backgroundSize: "cover", backgroundPosition: "center", backgroundRepeat:"no-repeat"}}
        >
            <img src="/assets/triangle BUTTON.png" alt="" width={50} />

        </div>

    </div>
  )
}
