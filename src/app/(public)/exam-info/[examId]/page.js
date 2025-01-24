import parse from 'html-react-parser'
import { supabase } from '@/app/lib/supabaseClient'
import React from 'react'

const page = async({params}) => {
    const {examId} = await params;
   const {data,error} = await supabase.from('EXAM_INFO').select('*').eq('id',examId.toString());
    if(error){
        throw new Error("Something went wrong. check your internet and try again by refreshing the page.");
    }
    console.log(error);
  return (
    <div className='section px-2 relative text-2xl'>
        <div className='editor-content !border-none !shadow-none'>
         <h1 className='!text-3xl uppercase font-bold tracking-wider heading !text-center w-full mx-auto my-1 py-2'> {data[0].title}</h1>
        {parse(data[0].description)}
        </div>
    </div>
  )
} 

export default page