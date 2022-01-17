import React from 'react'
import "../Styles/left.css"
import RightComponet from './RightComponet'

function LeftComponent() {
    return (
        <div className="leftComponentConatiner">
            <div className="leftComponentIfon">   
             <h1>detail of  dog</h1>
             <img src="./Assets/dog.jpg" alt="" className="dog-pic"/>
             <div className="descriptioOFDog">
                 <header>They Provide Endless Entertainment.</header>
                 <p>Whether we're watching our four-legged friends get the zoomies around 
                      there's nothing that says "pure joy" like puppies at play. Those big floppy ears and goofy grins are the highlight of our days. So much so, that a 2017 study conducted by BarkBox found that the average 
                     dog owner posts about their pup six times per week on social media.</p>
             </div>
             </div>
        
            <RightComponet/>
        </div>
    )
}

export default LeftComponent
