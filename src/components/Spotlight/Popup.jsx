import React from 'react'
export default function Popup({title, description, target, handleStep, position }) {
  const viewportHeight = window.innerHeight
const viewportWidth = window.innerWidth
// if element is in bottom half of screen, show popover ABOVE
const showAbove = position.top > viewportHeight / 2
const popoverTop = showAbove 
  ? position.top - 120  // above the element
  : position.top + position.height + 12  // below the element
// if popover would overflow right, align it to right edge instead
const popoverLeft = position.left + 280 > viewportWidth
  ? viewportWidth - 300
  : position.left
   const popOverlay = {
  position : "fixed",
  top: popoverTop,
  left: popoverLeft,
  backgroundColor : "red",
  width: "15%",
  height: 90,
  zIndex:60,
  color: "white",
  padding : 10, 
  borderRadius: 25
 }
  return (
    <div style={popOverlay}>
      <div>i am the {target}</div>
       <div>{title}</div>
       <div>{description}</div>
       <div>
        <button onClick={handleStep} 
        className='bg-amber-100 w-full text-white'>Next</button>
       </div>
       
    </div>
  )
}
