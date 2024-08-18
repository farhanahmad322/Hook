import React, { useState } from 'react'

const Forms = () => {

const [email,setEmail]=useState(" ")
const [password,setPassword]=useState(" ")
const [allEntry,setAllNewEntry]=useState([])

const submitForm=(e)=>{
      e.preventDefault()

if(email && password){

const newEntry={id:new Date().getTime().toString(), email,password}
setAllNewEntry([...allEntry,newEntry])
setEmail("")
setPassword("")

 }  
else{
    alert("complite the Email and password")
  }

  
}

return (
  <>

  <div className="flex items-center justify-center min-h-screen">
  
    <form action="" onSubmit={submitForm} className="max-w-md mx-auto p-20 bg-white shadow-50 rounded-lg ">   
    
    <div className="mb-6"> 
      <label htmlFor="Email" className='block text-gray-700 font-bold mb-2'>Email</label>
      <input type="text" name='Email' id='email' autoComplete='off' value={email} onChange={(e)=>setEmail(e.target.value)} className='w-full px-10 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500' />
    </div>

    <div className="mb-6">
      <label htmlFor="Email" className="block text-gray-700 font-bold mb-2">Password</label>
      <input type="password" name='password' id='password' autoComplete='off' value={password} onChange={(e)=>setPassword(e.target.value)} className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"  />
    </div>

    <button type='submit' className="w-full bg-blue-500 text-white font-bold py-2 px-4 rounded-lg hover:bg-blue-600 transition duration-300">Login</button>
    </form>
    </div>
    <div>
    {
    allEntry.map((curr)=>{
      const {email,password,id}=curr
      return(
  <div className="p-6 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg shadow-lg " key={id}>
  <div className="mb-4 p-4 bg-white rounded-md shadow-inner">
    <h2 className="text-lg font-semibold text-gray-700 mb-1">Email ID</h2>
    <p className="text-xl font-bold text-blue-600">{email}</p>
  </div>
  <div className="p-4 bg-white rounded-md shadow-inner">
    <h2 className="text-lg font-semibold text-gray-700 mb-1">Password</h2>
    <p className="text-xl font-bold text-red-600">{password}</p>
  </div>
</div>
      )
    })
    }
    </div>
  </>
)
}

export default Forms