import React, { useEffect, useState } from 'react'

export const UseEffect2 = () => {
    const[widthCount,setWidthCount]=useState(window.screen.width)

    const actulawidth=()=>{
        console.log("hahah");
        setWidthCount(window.innerWidth)
        
    }
    useEffect(()=>{
        window.addEventListener("resize",actulawidth)

        return ()=>{
            window.removeEventListener("resize",actulawidth)
        }
    })
  return (
    <>
   <div className="flex flex-col items-center justify-center min-h-screen">
      <div className="bg-white rounded-lg shadow-lg p-8 border text-center">
        <p className="mb-6 text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500 drop-shadow-lg">
          Size of your window is:
        </p>
        <h1 className="text-5xl font-extrabold text-indigo-600 drop-shadow-md">
          {widthCount}
        </h1>
      </div> 
    </div>
    </>
   
  )
}


