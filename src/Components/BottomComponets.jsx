import React,{useState,useEffect} from 'react'
import "../Styles/bottom.css"

function BottomComponets() {
    const [state, setState] = useState(0)

    useEffect(()=>{
        fetch('https://api.countapi.xyz/update/mypalce/laptop/?amount=1')
        .then(response => response.json())
        .then((response )=>{
        setState(response.value)
            
        })
     },[])
    
  


    

    return (
        <div className="BottomComponetsWrapper">
            <div className="info">
            <p>This page was viewed</p>
            <h1 >{state}</h1>
            <p>Times</p>
            </div>
          

        </div>
    )
}

export default BottomComponets
