import React, { useState } from 'react'

const ShortCircutEvl = () => {

  const [demo,setDemo]=useState("check")
  return (
<>

   <h1>{"farhn" || demo}</h1>
   <h1>{"saubi" && demo}</h1>
</>
  )
}

export default ShortCircutEvl