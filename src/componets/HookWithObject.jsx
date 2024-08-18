import React, { useState } from 'react'

function HookWithObject() {
    const [myObject,setObject]=useState({
        myName:"Farhan",myage:25,myDegree:"B.tech"
    })

    const chengeObject=()=>{
        setObject({...myObject,myName:"saubi"})

    }
  return (
    <>
   <h1> name: {myObject.myName} and age: {myObject.myage} and degree:{myObject.myDegree}</h1>
   <button onClick={chengeObject}> update</button>
    </>
  )
}   

export default HookWithObject