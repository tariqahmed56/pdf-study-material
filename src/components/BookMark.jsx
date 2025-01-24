"use client"
import { supabase } from '@/app/lib/supabaseClient';
import { useUser } from '@/hooks/useUser'
import { Bookmark } from 'lucide-react';
import React from 'react'

const BookMark = ({pdfId}) => {
    const {user} = useUser();
    const handleBookMark = async (pdfId,userId) => {
        // console.log(pdfId,userId)
        const {data , error} = await supabase.from('book_marks').insert([
            {
                pdf_id: pdfId ,
                user_id : user.id
            }
        ])
        console.log(pdfId,error)
      }
  return (
    <Bookmark onClick={()=> handleBookMark(pdfId, user.id)} size={25}  color="purple" className="absolute top-3 right-2 cursor-pointer hover:fill-purple-700"/>
)
}

export default BookMark