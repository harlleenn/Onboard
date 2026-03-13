import React from 'react'
export default function Popup({title, description,button, handleStep, position, number }) {
  const viewportHeight = window.innerHeight
const viewportWidth = window.innerWidth

const showAbove = position.top > viewportHeight / 2
const isOnLeftEdge = position.left < 100
const isOnRightEdge = position.right > viewportWidth - 100
const popoverTop = showAbove 
  ? position.top - 120
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
  backgroundColor : "rgb(255 255 255 / 0.5)",
  width: "15%",
  height: "25%",
  zIndex:60,
  color: "white",
  borderRadius: 25,
  transitionProperty : "all",
  transitionDuration : "350ms"
 
  
 }

  return (
    <div style={popOverlay}>
   <div className='flex-col flex h-full py-6 px-2 justify-center gap-2 text-balance'>
      <div className='text-lg font-semibold'>{title}</div>
       <div className='text-md text-gray-200'>{description}</div>
       <div  className=" flex ">
        <div className='flex flex-col gap-2 px-2 '>
           <button onClick={handleStep} 
        className='bg-[#0d0d0daa]  
        rounded-full text-white cursor-pointer px-6 py-1 '>{button}</button>
        <div>Steps {number} / 5</div>
        </div>
       
       </div>
   </div>
     
       
    </div>
  )
}
