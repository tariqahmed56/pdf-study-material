"use client"
import { useUser } from '@/hooks/useUser';
import React from 'react';
import { toast } from 'react-toastify';

const DownloadButton = () => {
  const {user} = useUser();
  console.log(user)
  const handleDownload = async () => {
    try {
      const downloadUrl = 'https://nxqineudxlnblzqvxbgh.supabase.co/storage/v1/object/public/PDFS/1737314746062';
      const response = await fetch(downloadUrl, {
        method: 'GET',
      });

      if (!response.ok) {
       toast.error("failed to download")
      }

      const blob = await response.blob();

      const url = window.URL.createObjectURL(blob);

      const a = document.createElement('a');
      a.href = url;
      a.download = `${downloadUrl.split("/").pop()}`; 
      document.body.appendChild(a);
      a.click();

      a.remove();
      window.URL.revokeObjectURL(url);
    } catch (error) {
      console.error('Error downloading the file:', error);
    }
  };

  return (
    <button
      onClick={handleDownload}
      className="px-4 py-2 text-base bg-gradient-to-br from-purple-700 to-blue-600 bg-blue-500 text-white rounded-xl"
    >
      Download File
    </button>
  );
};

export default DownloadButton;
