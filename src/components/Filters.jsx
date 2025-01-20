"use client"
import React from 'react';
import Link from 'next/link';
// import { Router } from 'lucide-react';
import { useRouter , usePathname } from 'next/navigation';
// import Router from 'next/router';
export default function Filters({ Grades, Exams  }) {
  const Router = useRouter();
  const url = usePathname();
  console.log(url)
 const handleChange = (e) => {
  const selectedCategory = e.target.value;
  Router.push(`${url}?classes=${selectedCategory.split(" ").join("-")}`);
 }
  return (
    <div className="max-w-[20rem] flex gap-8 justify-start items-center py-2">
      <div className="w-full max-w-md px-2">
        <select
         onChange={handleChange}
          className="w-[80%] px-4 py-2 text-base font-thin uppercase tracking-wider border-[1px] border-gray-800 rounded-lg hover:bg-purple-50 focus:outline-none focus:ring-2 focus:ring-purple-600"
        >
          <option disabled defaultValue={" Choose a Grade OR Exam"}>
            Choose a Grade OR Exam
          </option>
          {["filter by Grade or Exam",...Grades,...Exams].map((grade, index) => (
            <option key={index} value={grade} defaultValue={index === 0 ? true : false}>
              {grade}
            </option>
          ))}
        </select>
      </div>

    
    </div>
  );
}
