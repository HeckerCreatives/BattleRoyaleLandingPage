import React, { useEffect, useState } from 'react'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { TiArrowLeftThick, TiArrowRightThick } from 'react-icons/ti'
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { Button } from '@/components/ui/button'
import { Battery, CheckIcon, ChevronsUpDownIcon, Crown, FlaskConical, HelpCircle, Loader2, Scissors, Shirt, Sword, Type, Zap } from 'lucide-react'

import axios from 'axios'


interface Items {
  _id: string
  itemid:string
  itemname: string
  description: string
  amount: 10,
  currency: string
  type: string
  consumable: string
  createdAt: string
  updatedAt: string
    quantity: number,
    isEquipped: boolean,
              
}


export default function Inventory() {
    const [inventory, setInventory] = useState('skin')
    const [selectItem, setSelectItem] = useState('')
    const [open, setOpen] = useState(false)
    const [list, setList] = useState<Items[]>([])
    const [items, setItems] = useState<Items[]>([])
    const [qty, setQty] = useState(1)
    const [loading, setLoading] = useState(false)
    const [loadingList, setLoadingList] = useState(false)
    const [ totalpages, setTotalPages] = useState(0)
    const [ currentpage, setCurrentpage] = useState<number>(0)
    const grantItems = items.filter((item) =>
    ["energy", "potion", "title"].includes(item.type)
    )

    
    

     const fetchData = async () => {
        const res = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/marketplace/inventory?page=${currentpage}&limit=6&type=${inventory}`,{
        withCredentials: true,
         headers: {
         'Content-Type': 'application/json',
           }
        })
        setList(res.data.data)
        setTotalPages(res.data.pagination.totalPages)
      }

    
     useEffect(() => {
        setLoadingList(true)
        const handler = setTimeout(() => {
          fetchData();
        setLoadingList(false)

        }, 500);
        return () => {
          clearTimeout(handler);
        };
      }, [inventory, currentpage]);



    const getItemIcon = (type: string) => {
        switch (type.toLowerCase()) {
            case "energy":
            return <Zap className="h-5 w-5 " />
            case "potion":
            return <FlaskConical className="h-5 w-5 " />
            case "title":
            return <Crown className="h-5 w-5 " />
            case "skin":
            return <Shirt className="h-5 w-5 " />
            case "hair":
            return <Scissors className="h-5 w-5 " />
            case "weapon":
            return <Sword className="h-5 w-5 " />
            default:
            return <HelpCircle className="h-5 w-5 " />
        }
        }
    
  return (
     <div className=' relative w-full h-full rounded-lg flex flex-col gap-6 items-start p-4 z-50 overflow-y-auto'
                                        style={{backgroundImage: "url('/userdashboard/Assets/TAB HOLDER small.png')", backgroundSize: "cover", backgroundPosition: "center", backgroundRepeat:"no-repeat"}}
                                        
                                        >

                                          

                                            <div className=' hidden w-full bg-amber-900 md:grid grid-cols-5 p-2'>
                                                <p onClick={() => setInventory('skin')} className={`w-full text-sm text-center border-r-4 border-amber-950 cursor-pointer ${inventory === 'skin' ? ' text-orange-500' : ' text-orange-100'}`}>Skins</p>
                                                <p onClick={() => setInventory('title')} className={`w-full text-sm text-center border-r-4 border-amber-950 cursor-pointer ${inventory === 'title' ? ' text-orange-500' : ' text-orange-100'}`}>Titles</p>
                                                <p onClick={() => setInventory('hair')} className={`w-full text-sm text-center border-r-4 border-amber-950 cursor-pointer ${inventory === 'hair' ? ' text-orange-500' : ' text-orange-100'}`}>Hair Styles</p>
                                                <p onClick={() => setInventory('weapon')} className={`w-full text-sm text-center border-r-4 border-amber-950 cursor-pointer ${inventory === 'weapon' ? ' text-orange-500' : ' text-orange-100'}`}>Weapon</p>
                                                <p onClick={() => setInventory('usable')} className={`w-full text-sm text-center cursor-pointer ${inventory === 'usable' ? ' text-orange-500' : ' text-orange-100'}`}>Usable</p>
                                        

                                            </div>

                                            <Select value={inventory} onValueChange={setInventory}>
                                            <SelectTrigger className=" visible md:hidden bg-zinc-950 border-2 border-orange-300 border-opacity-30 text-orange-100">
                                                <SelectValue placeholder="Select" />
                                            </SelectTrigger>
                                            <SelectContent className=' bg-zinc-950 border-orange-300 border-opacity-30 text-orange-100'>
                                                <SelectItem value="skin" className=' cursor-pointer'>Skins</SelectItem>
                                                <SelectItem value="title" className=' cursor-pointer'>Titles</SelectItem>
                                                <SelectItem value="hair" className=' cursor-pointer'>Hair Styles</SelectItem>
                                                <SelectItem value="weapon" className=' cursor-pointer'>Weapon</SelectItem>
                                                <SelectItem value="usable" className=' cursor-pointer'>Usable</SelectItem>
                                            </SelectContent>
                                            </Select>

                                           <div
                                        className="grid 
                                        grid-cols-1
                                        md:grid-cols-2
                                                    lg:grid-cols-3 
                                                    w-full 
                                                    h-[75%] 
                                                    overflow-y-auto 
                                                    gap-4"
                                        >

                                            {list.map((item, index) => (
                                                <div
                                                key={index}
                                                className=" bg-gradient-to-b from-amber-950 to-amber-900 
                                                            border-2 border-orange-300 border-opacity-50 p-4 space-y-1"
                                                >
                                                    <div className=' p-3 w-fit rounded-md bg-orange-700 flex items-center justify-center text-white mb-4'>
                                                       {getItemIcon(item.type)}
                                                    </div>
                                                <p className="text-[clamp(1rem,1vw,1.2rem)] font-semibold text-orange-500">
                                                    {item.itemname}
                                                </p>
                                                <p className="text-[clamp(0.5rem,0.9vw,0.7rem)] text-white">
                                                    Quantity: {item.quantity?.toLocaleString() || 0}
                                                </p>
                                                </div>
                                            ))}
                                            </div>

                                            {list.length === 0 && (
                                                <div className=' w-full flex items-center justify-center py-16'>
                                                   {loadingList && <Loader2 size={16} className="animate-spin mr-2" />}
                                                    <p className=' text-xs text-zinc-300'>No items</p>
                                    
                                                </div>
                                            )}

                                        

                                           <div className=' w-full flex items-center justify-end gap-4'>
                                                <button 
                                                onClick={() => setCurrentpage( currentpage - 1)}
                                                disabled={loading ? true : currentpage === 0} 
                                            className=' cursor-pointer  bg-gradient-to-r from-orange-200 to-orange-400 rounded-md text-amber-950 px-6'><TiArrowLeftThick size={30}/></button>
                                                {/* <p className=' text-sm font-bold bg-zinc-950 px-4 py-2 text-center  rounded-md'>{currentpage + 1}</p> */}
                                                <button
                                                onClick={() => setCurrentpage(currentpage + 1)}
                                                disabled={ loading ? true :  currentpage + 1 === totalpages}
                                                className=' cursor-pointer bg-gradient-to-r from-orange-200 to-orange-400 rounded-md text-amber-950 px-6'><TiArrowRightThick size={30}/></button>

                                            </div>
                                        </div>
  )
}
