import React, { useState } from 'react'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

export default function Section4() {
  const [open, setOpen] = useState(false)
  
  return (
    <div id='games'  className=' relative w-screen h-[400px] lg:h-[700px] flex items-center justify-center'
     style={{backgroundImage: "url('/assets/4th section BG.png')", backgroundSize: "cover", backgroundPosition: "center", backgroundRepeat:"no-repeat"}}
    >

            <Dialog>
            <DialogTrigger>
              <div className=' hidden lg:flex items-center justify-center w-[200px] h-[200px]'
                style={{backgroundImage: "url('/assets/triangle button HOLDER.png')", backgroundSize: "cover", backgroundPosition: "center", backgroundRepeat:"no-repeat"}}
              >
                  <img onClick={() => setOpen(true)} src="/assets/triangle BUTTON.png" alt="" />


              </div>  
            </DialogTrigger>
            <DialogContent className=' text-white w-auto h-auto p-4 bg-zinc-950 border-zinc-900 flex flex-col items-center gap-4'>
              <iframe className=' z-50' width="853" height="505" src="https://www.youtube.com/embed/He-jKBESg9I?si=hDspTGvkSUsfHzss" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
            </DialogContent>
            </Dialog>

            
            <Dialog>
            <DialogTrigger>
              <div className=' lg:hidden flex items-center justify-center w-[100px] h-[100px]'
                style={{backgroundImage: "url('/assets/triangle button HOLDER.png')", backgroundSize: "cover", backgroundPosition: "center", backgroundRepeat:"no-repeat"}}
              >
                  <img src="/assets/triangle BUTTON.png" alt="" width={50} />

              
              </div>
            </DialogTrigger>
            <DialogContent className=' text-white w-auto h-auto p-4 bg-zinc-950 border-zinc-900 flex flex-col items-center gap-4'>
              <iframe className=' z-50' width="300" height="200" src="https://www.youtube.com/embed/He-jKBESg9I?si=hDspTGvkSUsfHzss" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
            </DialogContent>
            </Dialog>

    </div>
  )
}
