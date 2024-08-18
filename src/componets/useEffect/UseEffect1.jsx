import  { useEffect, useState } from 'react'

const UseEffect1 = () => {
const [count,setCount]=useState(0)

const counting=()=>{
    setCount(count+1)
}


    useEffect(()=>{
        if(count>=1){
             document.title=`Chats (${count})`

            }
            else{

                 document.title=`Chat`

            }
         },[count]);




return (
<>
<div className='flex flex-col items-center justify-center min-h-screen space-y-4'>

<h1 className='text-white'>{count}</h1>
<button onClick={counting} className='btn bg-blue-700 text-white font-bold py-2 px-4 rounded-lg hover:bg-blue-600 transition duration-300'>
    Click Me
</button>

</div>

</>

)
}

export default UseEffect1