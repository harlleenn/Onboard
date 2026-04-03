import React from 'react'

export default function Card({title, sublabel, number }) {
  return (
    <div className='flex flex-col  ' >
        <div className=" text-white rounded-lg flex flex-col border-1 border-white/20 justify-center p-5 h-40  ">
            <p className="text-gray-400 text-sm mb-1">{title}</p>
        <h1  className="text-white text-4xl font-bold mb-1">{number}</h1>
        <p className="text-gray-500 text-xs">{sublabel}</p>
      </div>
    
    </div>
  )
}
