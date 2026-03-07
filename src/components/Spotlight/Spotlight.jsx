import React, { useState } from 'react'
import { useRef } from 'react';
import Overlay from './Popup';
export default function MainPage() {
  const [postition , setPosition] = useState(0)
  const [active , setActive] = useState(false)
  const ref = useRef(null);
  const handleRef = () => {
     const element = ref.current.getBoundingClientRect()
     setPosition(element);
     setActive((prev) => !prev)
    console.log(element)
    console.log(`active is ${active}`)
  }
 
const myStyle = {
  position : "fixed",
  top: postition.top,
  bottom: postition.bottom,
  left: postition.left,
  right: postition.right,
  width: postition.width,
  height: postition.height,
  // boxShadow: "0 0 0 99px rgba(0,0,0,0.85)",
  backgroundColor: "white",
  color: "black",
  borderRadius: 25,
    zIndex: 80
}
const myOverlay ={
 position :"fixed",
 backgroundColor : "rgba(0,0,0,0.85)",
  width:"100%",
  height:"100%",
  zIndex: 20
}


  return (
    <div className='h-screen w-full flex flex-col justify-center items-center bg-gray-200 z-0'>
    <div >
           <div className='flex flex-row gap-5 mb-10 justify-center items-center  '> 
           <div className='w-56 h-56 bg-red-100 rounded-lg text-white flex justify-center items-center z-10'>
        hi i am a card
      </div>
      <div className='w-56 h-56 bg-pink-900 rounded-lg text-white flex justify-center items-center z-10'>
        hi i am a card
      </div>
      <div className='w-56 h-56 bg-blue-700 rounded-lg text-white flex justify-center items-center z-10'>
        hi i am a card
      </div>
      </div>
      <div className='flex justify-center'>
         <button className='border-2 cursor-pointer p-5 rounded-4xl z-90' 
         onClick={handleRef} ref={ref}>Spotlight on this button</button>
      </div>
       
    </div>
   {active ?<Overlay active={active} postition={postition} ref={ref} handleRef={handleRef}  /> : "" } 
  {active && <div style={myOverlay} />}
  {active && <div style={myStyle} />}
      
    
  
    </div>
  )
}
