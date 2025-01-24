import React from 'react'

const Loading = () => {
  return (
    <div className='section justify-center items-center'>
       <div
    className="h-24 w-24 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em]"
    role="status"
  >
    <span className="sr-only">Loading...</span>
  </div>
    </div>
     )
}

export default Loading