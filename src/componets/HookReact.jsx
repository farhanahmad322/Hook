import React, { useState } from 'react'

function HookReact() {

let bioData=[
  {
    id:0, myName:"farhan",age:26,
  },{

  id:1,myName:"Ahmad",age:30,
}
]
const [myArray, setMyArray]=useState(bioData)

let clearArray=()=>{
  setMyArray([]);

}

let removeElem=(id)=>{
   const mynewArray=myArray.filter((e) =>{
     return e.id!==id

   })

   setMyArray(mynewArray)

}
return (
  <>
  
  {
  myArray.map((e)=>
   <h1 key={e.id}>  name : {e.myName} and age : {e.age}
   <button onClick={()=>removeElem(e.id)}>Remove</button>
    </h1>
     )
  }

  <button onClick={clearArray}>Clrear</button>
  </>
)
}

export default HookReact