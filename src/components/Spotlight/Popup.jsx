import React from 'react'
import { X } from 'lucide-react'
export default function Popup({title, description,button, handleStep, position, number, onFinish }) {
  const viewportHeight = window.innerHeight
const viewportWidth = window.innerWidth

const showAbove = position.top > viewportHeight / 2
const isOnLeftEdge = position.left < 10
const isOnRightEdge = position.right > viewportWidth - 100
const popoverTop = showAbove 
  ? position.top - 20
  : position.top + 20  // slight offset from top of element
const popoverLeft = isOnLeftEdge
  ? position.left + position.width + 12  // right of element
  : isOnRightEdge
  ? position.left - 300  // left of element
  : position.left + 280 > viewportWidth
  ? viewportWidth - 300
  : position.left



   const popOverlay = {
  position : "fixed",
  top: popoverTop,
  left: popoverLeft,
  backgroundColor : "rgba(22,22,22,0.98)",
  width: "20%",
  height: "25%",
  zIndex:60,
  color: "white",
  borderRadius: 25,
  transitionProperty : "all",
  transitionDuration : "350ms",
  
  padding: "12px",
  borderWidth: "0.3px",
  borderColor: " rgba(255, 255, 255, 0.1)"
 
  
 }

  return (
    <div style={popOverlay}>
   <div className='flex-col flex h-full   justify-center gap-2 text-balance relative '>
     <div className=' cursor-pointer absolute top-0 right-0'onClick={() => onFinish()}><X/></div>
      <div className='text-lg font-semibold'>{title}</div>
       <div className='text-md text-gray-200'>{description}</div>
       <div  className=" flex mt-5  ">
       
        <div className='flex flex-row  w-full justify-between  p-1'>
           <div className=' '>Steps {number}/5</div>
           <button onClick={handleStep} 
        className='bg-[#0d0d0daa]  
        rounded-full text-white cursor-pointer px-6 py-1 border-1 border-white/5 '>{button}</button>
       
        </div>
       
       </div>
   </div>
     
       
    </div>
  )
}
