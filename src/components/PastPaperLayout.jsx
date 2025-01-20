import React from 'react'
import { Outlet } from 'react-router'

const PastPaperLayout = () => {
    window.scrollTo({
        top: 0,
      });
      
  return (
    <div className='section'>
        <Outlet/>
    </div>
  )
}

export default PastPaperLayout