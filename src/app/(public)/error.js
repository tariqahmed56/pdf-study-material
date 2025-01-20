"use client"
import React, { useEffect } from 'react'
const error = ({error}) => {
    useEffect(()=>{
        console.error(error)
    },[])
  return (
    <div className='section justify-center items-center text-2xl'>
        <h1 className='text-red-500 font-roboto uppercase font-extrabold'>something went wrong.</h1>
        <h2 className='max-w-[30rem] text-base'><span className='font-bold uppercase'>error message:</span> {error.message}</h2>
    </div>
  )
}

export default error