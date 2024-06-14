import React from 'react'

export default function About() {
  return (
    <div id='about' className=' w-full h-auto flex flex-col gap-24 items-center justify-center py-20'
     style={{backgroundImage: "url('/v2/about/BG.png')", backgroundSize: "cover", backgroundPosition: "center", backgroundRepeat:"no-repeat"}}
    
    >

        <div className='relative max-w-[1920px] w-[90%] lg:w-[85%] h-auto flex lg:flex-row flex-col items-center gap-5'>
            <div className=' lg:h-[500px] h-[400px] lg:w-[60%] w-full border-orange-300 border-4 rounded-md flex items-center justify-center'
            style={{backgroundImage: "url('/v2/header/assets/BG A.png')", backgroundSize: "cover", backgroundPosition: "center", backgroundRepeat:"no-repeat"}}
            
            >
              <button className=''>
                <img src="/v2/about/Play Button.png" alt="" className=' hover:scale-110 ease-in-out duration-300' />
              </button>

            </div>

            <div className=' h-[400px] lg:h-[500px] lg:w-[40%] w-full border-orange-300 border-spacing-4 rounded-md p-10 flex flex-col gap-4'
            style={{backgroundImage: "url('/v2/about/Description Tab.png')", backgroundSize: "cover", backgroundPosition: "top", backgroundRepeat:"no-repeat"}}
            >
                <h2 className=' text-4xl font-bold text-amber-950'>Title</h2>
                <p className=' text-sm md:text-lg text-amber-900'>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>

            </div>
        </div>

        <div className='relative max-w-[1920px] w-[90%] lg:w-[85%] h-[500px] grid grid-cols-1 md:grid-cols-2 rounded-lg'
        style={{backgroundImage: "url('/v2/about/About Tab.png')", backgroundSize: "cover", backgroundPosition: "center", backgroundRepeat:"no-repeat"}}
        
        >
            <div className=' w-full h-[500px] flex flex-col gap-4 p-6'>
                
                <h2 className=' text-4xl font-bold text-orange-400'>ABOUT</h2>
                <div className=' h-[90%] overflow-y-auto'>
                    <p className=' text-sm md:text-lg text-orange-100'>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.""Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"</p>

                </div>
            </div>

            <div className=' relative w-full h-[500px] flex items-end justify-end'>
            <img src="/pd/Tab Character.png" alt="" width={600} className=' relative left-20 bottom-0 md:block hidden'/>

            </div>



        </div>


    </div>
  )
}
