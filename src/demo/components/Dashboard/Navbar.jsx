import { Bell } from 'lucide-react'
import React from 'react'

export default function Navbar() {
  return (
    <div className=' bg-[hsl(0,0%,3%)] w-full h-15 border-b border-white/15 relative p-3'>
        <div className='flex items-center justify-between h-full px-5'>
          <div id='search'>
             <input placeholder='Search' 
              className=' h-10 w-56  p-2 rounded-lg bg-[hsl(0,0%,10%)] text-white border border-white/10'/>
          </div>
              <div className='flex flex-row gap-5 justify-center items-center'>
                <Bell color='white'/>
                <div className='bg-white rounded-full flex justify-center  px-3 py-1'>
                </div>
              </div>
        </div>
      
    </div>
  )
}
