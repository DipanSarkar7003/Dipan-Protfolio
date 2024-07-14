import React from 'react'
import Comp2 from './Comp2'

const Layout = () => {
  return (
    <div className='layout' style={{position:"relative" , backgroundColor:"#262626"}}>

      <div className="comp" id="comp1">
        <div className="column"></div>
        <div className="column"></div>
        <div className="column"></div>
        <div className="column"></div>
        <div className="column"></div>
      </div>
      <div className="comp2">
      <Comp2/>

      </div>
      <div className="comp" id="comp3">
        
      </div>

    </div>
  )
}

export default Layout