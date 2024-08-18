import React from 'react'
import { useState } from 'react'


    
function Hooks() {
    const [name, setName] = useState('Farhan')
  
    let chengeName=()=>{
  
      setName(name==="Farhan"?"Saubi": "Farhan")
    }
  return (
    <>
   <h1>my name is : {name}</h1>
      <button onClick={chengeName}>click to Chenge</button>
    </>
  )
}


export default Hooks