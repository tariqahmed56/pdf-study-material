// import { supabase } from '@/app/lib/supabaseClient'
"use client";
import { supabase } from "@/app/lib/supabaseClient";
import MaterialCard from "@/components/MaterialCard";
import { useUser } from "@/hooks/useUser";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

const Favorite = () => {
  const { user, loading } = useUser();
  const router = useRouter();
  const [bookmarkedPDFs, setBookmarkedPDFs] = useState([]);
  const [fetching, setFetching] = useState(true);


  useEffect(() => {
    if (!loading && user === undefined) {
      console.log(user);
      router.push("/");
      return;
    } else {
      const FavoritePdfs = async () => {
      
        let { data, error } = await supabase
          .from("book_marks") 
          .select(`PDF (*)`)
          .eq("user_id", user.id);
        let bookmarked = data.map((pdf) => pdf.PDF);
        setBookmarkedPDFs(bookmarked);
        setFetching(false);
        if (error) {
          throw new error(error);
        } else {
          console.log(bookmarked);
        }
      };
      if (user) FavoritePdfs();
    }
  }, [user]);

  return (
    <div className="section text-3xl justify-start items-center">
      {bookmarkedPDFs.length === 0 && !fetching && (
        <h1>No Favorite items.</h1>
      )}
      {fetching ? (
        <div className="section justify-center items-center">
          <div
            className="h-24 w-24 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em]"
            role="status"
          >
            <span className="sr-only">Loading...</span>
          </div>
        </div>
      ) :(
        <div className="grid relative grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        <h1 className="heading !text-center col-span-1 md:col-span-2 lg:col-span-3 xl:col-span-4">Favorites</h1>
        {bookmarkedPDFs.map((pdf) => (
          <MaterialCard data={pdf} key={pdf.id} />
        ))}
      </div>
      ) }
     
    </div>
  );
};

export default Favorite;
