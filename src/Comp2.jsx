import React, { useRef } from 'react'
import Navbar from './Components/Navbar'
import HeroPart from './Components/HeroPart'



function Comp2() {
  const clientX=  useRef(0)
  const clientY=  useRef(0)

  const pointerMove = (e)=>{
    console.log((e.clientX , e.clientY));
    clientX.current = e.clientX
    clientY.current = e.clientY
    console.log(clientX , clientY)
    }
  return (
   
    <div className="comp" id="comp2" onMouseMove={(e)=>pointerMove(e)}>
    <Navbar/>
<HeroPart/>
<div className="pointer" style={{top:clientY , left:clientX} }></div>


  </div>
  )
}

export default Comp2