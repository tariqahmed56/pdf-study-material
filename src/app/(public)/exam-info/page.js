import { supabase } from "@/app/lib/supabaseClient";
import { formatSupabaseDate } from "@/hooks/formatDateFromSupabase";
import Link from "next/link";

const ExamInfo = async() => {
   const { data , error } = await supabase.from("EXAM_INFO").select("*");  
     if(error){
      throw new Error("Something went wrong. check your internet and try again by refreshing the page.");
     }
  return (
    <section className='section'>
        <h1 className='text-3xl font-bold !text-center heading'>Exam Information</h1>
       <div className='grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3'>
          {data.map((exam, index) => (
            <div key={index} className='bg-white shadow-md rounded-lg p-4'>
              <h2 className='text-xl font-semibold'>{exam.title}</h2>
              <p className='text-sm text-gray-500'>{formatSupabaseDate(exam.created_at)}</p>
              <Link href={`exam-info/${exam.id}`}>
              <button className="text-blue-400 underline text-sm italic">Read more</button> 
              </Link>
            </div>
          ))}    
        </div>
    </section>
  )
}

export default ExamInfo