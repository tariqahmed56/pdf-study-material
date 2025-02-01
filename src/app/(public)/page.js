"use client"
import { Download, Star } from "lucide-react";
import { SAMPLE_MATERIALS } from "@/constants";
import WhatWeOffer from "@/components/WhatWeOffer";
import LatestCards from "@/components/LatestCards";
import Link from "next/link";

const Home = () => {
  return (
    <div className="section">
      <div className="relative h-[90dvh] w-full flex items-center justify-center  overflow-hidden">
        <div className=" relative flex flex-col justify-center items-center bg-white bg-opacity-5 backdrop-blur-md  rounded-xl shadow-xl overflow-hidden w-full md:w-[90%] h-[70dvh] text-center">
          <div className="absolute w-[300px] h-[300px]  bg-purple-500 rounded-full blur-xl  opacity-50 animate-move top-1/2 left-1/2 -translate-x-[90%] -translate-y-[70%] "></div>
          <div className="absolute w-[300px]  h-[300px]  bg-blue-600 rounded-full blur-xl opacity-30 animate-move-reverse top-1/2 left-1/2 -translate-x-1/2 -translate-y-[70%] "></div>
          <h1 className="text-4xl px-4 md:text-5xl font-bold text-transparent animate-gradient gradient-text mb-4">
          Past Papers, Notes, and Success in One Place.          </h1>

          <p className="text-lg md:text-xl text-black opacity-90 mb-6">
            Access notes, past papers, and resources tailored to help you excel
            in your exams.
          </p>
          <Link
            href="/past-papers"
            className="inline-block z-50 px-6 py-3 bg-blue-600 text-white text-lg font-medium rounded-full shadow-md hover:bg-blue-700 transition"
          >
            Browse Past papers
          </Link>
        </div>
      </div>
      <WhatWeOffer/>
      <LatestCards/>
    </div>
  );
};

export default Home;
