import { icon } from '@fortawesome/fontawesome-svg-core'
import React from 'react'

function Interests() {

const interestList = [
    {
        id: 1,  
        icon:"fa-solid fa-chess",
        title: "Chess",
        description:"i enjoy playing chess games , i often play chess tournaments "
    } , 
    {
        id: 2,  
        icon:"fa-solid fa-bicycle",
        title: "Bike Riding",
        description:"Bike is emotion , I am an active member of some Bike riding groups , and love riding bikes and exploring new things"
    } ,
    {
        id: 3,  
        icon:"fa-solid fa-gamepad",
        title: "Video games",
        description:"I am a big fan of video games though i dont have a gaming console but i play games on my computer"
    } ,
    {
        id: 4,  
        icon:"fa-solid fa-gamepad",
        title: "Video games",
        description:"I am a big fan of video games though i dont have a gaming console but i play games on my computer"
    }
]


  return (
    <>
    <div className="resumeInterestsSection">
        <h2 className='resumePartHeadding'>Interests : -</h2>
       <div className="intersets">
        {interestList.map((interest) => (
            <div className="interestItem" key={interest.id}>
                <div className="icon">
                    <i className={interest.icon}></i>
                </div>
                <div className="content">
                    <h3>{interest.title}</h3>
                    <p>{interest.description}</p>
                </div>
            </div>
        ))}
       </div>
    </div>
    </>
  )
}

export default Interests