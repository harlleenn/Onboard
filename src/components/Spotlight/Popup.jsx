import React from 'react'

export default function Overlay({active , postition, handleRef }) {
   const popOverlay = {
  position : "fixed",
  top : postition.top +  postition.height + 12,
  left: postition.left,
  right: postition.right,
  backgroundColor : "rgba(0,0,0,0.90)",
  width: "15%",
  height: 90,
  zIndex:90,
  color: "white",
  padding : 10, 
  borderRadius: 25


 }
  return (
    <div >
        {active && <div style={popOverlay}   >
          <h1>title</h1>
          <p>description</p>
              <button>next click on button</button>
          </div>}
       
    </div>
  )
}
