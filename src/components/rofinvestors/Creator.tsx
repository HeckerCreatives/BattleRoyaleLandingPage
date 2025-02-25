import { creator } from '@/app/data'
import React from 'react'

export default function Creator() {
  return (
    <div id='creator' className=' scroll-mt-12 w-full h-auto flex flex-col items-center py-20 px-4'>

        <div className=' w-full max-w-[1440px] flex flex-col items-center justify-center mt-4'>
            <img src="/investor/assets/aboutthecreator.png" alt="" width={480} className=' ~w-72/96'/>

            <div className=' relative w-fit hidden lg:flex items-center justify-center mt-20'>
                <img src="/investor/assets/Description TAB.png" alt="" />
                <img src="/investor/assets/IMAGE - About Creation.png" alt="creator" width={700} height={700} className=' left-0 -translate-y-2 absolute'/>


                <div className=' w-full h-fit grid grid-cols-1 md:grid-cols-2 absolute p-6 '>

                    <div>
                    </div>

                    <div className=' flerx flex-col'>
                        <p className=' whitespace-pre-wrap ~text-xs/sm mt-4'>{creator.description}</p>
                    </div>

                </div>
            </div>

            <div className=' relative w-fit lg:hidden flex items-center justify-center ~mt-8/20'>

                <div className=' w-full h-fit grid grid-cols-1 md:grid-cols-2 p-6 bg-orange-200 rounded-md'>
                    <div>
                        <img src="/investor/assets/IMAGE - About Creation.png" alt="creator" width={700} height={700} className=' md:h-[400px] -translate-y-4'/>
                    </div>

                    <div className=' flerx flex-col'>
                        <p className=' whitespace-pre-wrap ~text-xs/sm mt-4'>{creator.description}</p>
                    </div>

                </div>
            </div>

        </div>

    </div>
  )
}
