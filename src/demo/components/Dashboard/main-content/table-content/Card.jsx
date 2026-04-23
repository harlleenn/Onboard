import { Notebook } from 'lucide-react'
import React from 'react'

export default function Card({notebook, title, todo}) {
  return (
    <div className=' h-50'>
          <div className='flex flex-row   rounded-2xl h-full   border-1 border-white/20  hover:bg-[#2c2b2bdf] ' >
        <div className=" text-white rounded-lg flex flex-col p-5  ">
          <div className='flex flex-row'>
                <Notebook/>
          </div>
      
          <h1  className="text-white text-lg font-bold mb-1">{notebook}</h1>
            <p className="text-gray-400 text-md ">{title}</p>
      
        <p className="text-gray-500 text-xs">{todo}</p>
      </div>
    
    </div>
    </div>

  )
}
