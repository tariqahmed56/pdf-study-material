"use client";
import { supabase } from '@/app/lib/supabaseClient';
import { useUser } from '@/hooks/useUser';
import React, { useEffect, useState, useCallback } from 'react';

function Page() {
  const [favoritePDFs, setFavoritePDFs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { user } = useUser();

  const getYourStuff = useCallback(async () => {
    console.log("run")
    setLoading(true);
    setError(null);
    try {
      const { data, error } = await supabase
        .from("book_marks")
        .select(`PDF(*)`)
        .eq("user_id", user.id);

      if (error) {
        throw error;
      }

      if (data) {
        setFavoritePDFs(data.map(pdf => pdf.PDF));
      }
    } catch (error) {
      console.error("Error fetching data:", error);
      setError(error.message || "Failed to fetch data");
    } finally {
      setLoading(false);
    }
  }, [user]);

  useEffect(() => {
    if (user) getYourStuff();
  }, [user, getYourStuff]);

  return (
    <div className="section">
      <h1 className="text-3xl font-bold mb-4">Favorite PDFs</h1>
      {loading ? (
        <div className="flex justify-center items-center h-64">
          <div className="loader ease-linear rounded-full border-4 border-t-4 border-gray-200 h-12 w-12"></div>
        </div>
      ) : error ? (
        <p className="text-red-500">{error}</p>
      ) : favoritePDFs.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {favoritePDFs.map((pdf) => (
            <div key={pdf.id} className="pdf-item p-4 border rounded-lg shadow-md">
              <h2 className="text-xl font-semibold mb-2">{pdf.title}</h2>
              <p className="text-gray-700 mb-2"><strong>Classes:</strong> {pdf.classes.join(', ')}</p>
              <p className="text-gray-700 mb-2"><strong>Subject:</strong> {pdf.subject}</p>
              <p className="text-gray-700 mb-2"><strong>Created At:</strong> {new Date(pdf.created_at).toLocaleDateString()}</p>
              <p className="text-gray-700 mb-2"><strong>Chapter Name:</strong> {pdf.chapter_name || 'N/A'}</p>
              <p className="text-gray-700 mb-2"><strong>Material Type:</strong> {pdf.material_type}</p>
              <a href={pdf.downloadUrl} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
                View PDF
              </a>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-gray-700">No favorite PDFs found.</p>
      )}
    </div>
  );
}

export default Page;
