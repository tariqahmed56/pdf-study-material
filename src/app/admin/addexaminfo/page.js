"use client"
import { supabase } from '@/app/lib/supabaseClient';
import Tiptap from '@/components/Tiptap'
import { useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';

const AddExamInfo = () => {
  const [content,setContent] = useState(()=>localStorage.getItem('content') || "");
  const [title,setTitle] = useState(()=>localStorage.getItem('title') || "");
  const handleSubmit = async () => {
    const {data,error} = await supabase.from("EXAM_INFO").insert([{title,description:content}]);
    if(!error){
      localStorage.setItem('title',"");
      localStorage.setItem('content',"");
      setContent("");
      setTitle("");
      toast.success("Exam Information added successfully.");
    }else{
      toast.error("Something went wrong , try again.")
    }
   
  }
  return (
    <div className='section h-auto py-4 relative border-gray-500 mx-auto   lg:!max-w-[65%] rounded-lg '>
    <form className="w-full mx-auto h-auto gap-2 flex flex-col" onSubmit={(e)=>e.preventDefault()}>
      <h1 className='heading !text-center'>Add New Exam Information</h1>
      <input value={title} onChange={(e)=>{
        localStorage.setItem('title',e.target.value)
        setTitle(e.target.value)
      }
      } label="Title" minLength={10} placeholder='Type a brief title ...' name="title" required  type="text" className="input !py-2 border !border-gray-200"/>
      <Tiptap content={content} setContent={setContent}/>
      <div className="mt-4">
        <button onClick={handleSubmit} className=" w-full px-4 py-2 bg-indigo-600 text-xl text-white rounded">Submit</button>
      </div>
    </form>
    <ToastContainer />
    </div>
  )
}

export default AddExamInfo