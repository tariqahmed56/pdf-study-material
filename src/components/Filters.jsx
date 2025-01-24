"use client";
import React, { useEffect } from "react";
import { useRouter, usePathname, useSearchParams } from "next/navigation";

export default function Filters({ Grades, Exams , showSubjectFilter = true }) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    console.log(`${pathname}?${searchParams.toString()}`);
  }, [pathname, searchParams]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    const queryParam = name === "classes" ? "classes" : "subject";
    const params = new URLSearchParams(searchParams);
    params.set(queryParam, value);
    router.push(`${pathname}?${params.toString()}`);
  };

  return (
    <div className="container mx-auto flex flex-wrap justify-center gap-6 sm:justify-start items-center py-4 px-4 sm:px-8">
      {/* Grade or Exam Filter */}
      <div className="w-full sm:w-auto">
        <select
          name="classes"
          onChange={handleChange}
          className="w-full sm:w-auto outline-none px-5 py-3 text-sm font-medium uppercase tracking-wide text-gray-700 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-purple-600 focus:border-purple-600 hover:bg-gray-100 transition-all"
        >
          {["Filter by Grade or Exam", ...Grades, ...Exams].map((grade, index) => (
            <option key={index} value={index === 0 ? "" : grade} defaultValue={""}>
              {grade}
            </option>
          ))}
        </select>
      </div>

      {/* Subject Filter */}
     {showSubjectFilter && <div className="w-full sm:w-auto">
        <select
          name="subject"
          onChange={handleChange}
          className="w-full sm:w-auto px-5 py-3 text-sm  outline-none  font-medium uppercase tracking-wide text-gray-700 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-purple-600 focus:border-purple-600 hover:bg-gray-100 transition-all"
        >
          <option value="" defaultValue={""}>
            Filter by Exam Subject
          </option>
          <option value="math">Math</option>
          <option value="physics">Physics</option>
          <option value="chemistry">Chemistry</option>
          <option value="zoology">Zoology</option>
          <option value="botany">Botany</option>
          <option value="english">English</option>
        </select>
      </div>}

      {/* Reset Button */}
      <button
        onClick={() => router.push(pathname)}
        className="px-6 py-3 text-sm font-semibold uppercase tracking-wide text-white bg-red-500 rounded-lg shadow-md hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-400 transition-all"
      >
        Reset Filters
      </button>
    </div>
  );
}
