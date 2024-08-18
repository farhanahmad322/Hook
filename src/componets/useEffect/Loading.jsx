const Loading = () => {
  return (
    <div className="flex items-center justify-center min-h-screen ">
    <h1 className='font-extrabold text-3xl flex items-center justify-center space-x-2'>
    <svg className="animate-spin h-6 w-6 text-blue-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8h8a8 8 0 11-16 0z"></path>
    </svg>
    <span className="text-blue-500">Loading...</span>
    </h1>
    </div>
  )
}

export default Loading