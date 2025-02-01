import { fetchMaterials } from "@/app/lib/fetchMaterial";
import { supabase } from "@/app/lib/supabaseClient";
import Filters from "@/components/Filters";
import MaterialCard from "@/components/MaterialCard";
import { Exams, Grades } from "@/constants";
import { ErrorBoundary } from "next/dist/client/components/error-boundary";
import React, { Suspense } from "react";
export const revalidate = 180;
const page = async ({ searchParams }) => {
  const params = await searchParams;
  const classVal = await params?.classes?.split("-")?.join(" ");
  let AllpastPaper = [];
  AllpastPaper = await fetchMaterials("past-papers");
   let filteredPastPaper = classVal ? AllpastPaper.filter((pdf)=>pdf.classes.includes(classVal)) : AllpastPaper;
   
  // const { data, error } = await supabase
  //   .from("PDF")
  //   .select("*")
  //   .eq("material_type", "past-papers")

  // if (error) {
  //   throw new Error("Something went wrong. check your internet and try again by refreshing the page")
  // } else {
  //   if(classVal) {
  //    pastPaper = data.filter((pdf)=>pdf.classes.includes(classVal));
  //   }else {
  //     pastPaper = data;
  //   }
  // }

  return (
      <section className="section text-2xl !flex-col gap-0">
        <Filters
          Grades={Grades}
          Exams={Exams}
          showSubjectFilter={false}
        />
        <div className="grid grid-columns gap-3 justify-center items-center">
          {filteredPastPaper.length === 0 && <h1>No Study materials Found. Reset the filters .😫</h1>}
          {filteredPastPaper.map((pdf) => (
           <MaterialCard data={pdf} key={pdf.id}/>
))}
        </div>
      </section>
  );
};

export default page;
