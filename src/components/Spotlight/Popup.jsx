import React from 'react'
export default function Popup({title, description, target, handleStep, position }) {
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
  // padding : 10, 
  borderRadius: 25
 }

  return (
    <div style={popOverlay}>
   <div className='flex-col flex h-full p-3  justify-center gap-2 text-balance'>
      <div className='text-lg font-semibold'>{title}</div>
       <div className='text-md text-gray-200'>{description}</div>
       <div >
        <button onClick={handleStep} 
        className='bg-[#0d0d0daa] px-6 py-1 rounded-full text-white cursor-pointer'>Next</button>
       </div>
   </div>
     
       
    </div>
  )
}
