import React from "react";
import DownloadButton from "./DownloadButton";
import { supabase } from "@/app/lib/supabaseClient";

const LatestCards = async () => {
  const { data, error } = await supabase
    .from('PDF') // Replace with your table name
    .select('*') // Specify the columns you want
    .order('created_at', { ascending: false }) // Sort by created_at in descending order
    .limit(3);
    console.log(data)
  const pdfs = [
    {
      id: 1,
      title: "Class 10 Mathematics Notes",
      uploadDate: "12th Jan 2025",
    },
    {
      id: 2,
      title: "Physics Past Papers",
      uploadDate: "10th Jan 2025",
    },
    {
      id: 3,
      title: "Chemistry Revision Guide",
      uploadDate: "8th Jan 2025",
    },
  ];


  return (
    <section className="bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        {/* Section Heading */}
        <h2 className="text-3xl font-bold !text-center text-gray-800 mb-8 heading">
          Latest Material
        </h2>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {data.map((pdf) => (
            <div
              key={pdf.id}
              className="bg-white shadow-lg rounded-lg p-6 transition-transform transform hover:scale-105"
            >
              {/* Title */}
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                {pdf.title}
              </h3>

              {/* Upload Date */}
              <p className="text-sm text-gray-500 mb-4">
                Uploaded on: {pdf.uploadDate}
              </p>

              {/* Buttons */}
              <div className="flex space-x-4">
               <DownloadButton url={pdf.downloadUrl} title={pdf.title}/>
                <button className="px-4 py-2 bg-gray-200 text-gray-800 rounded-md shadow hover:bg-gray-300 transition">
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LatestCards;
