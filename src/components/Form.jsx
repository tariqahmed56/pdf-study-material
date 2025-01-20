"use client"
import { supabase } from "@/app/lib/supabaseClient";
import { Download } from "lucide-react";
import React, { useActionState, useRef, useState } from "react";
import { FaAd, FaPlusCircle } from "react-icons/fa";
import { Flip, toast, Zoom } from "react-toastify";

function Form() {
  // const [classes, setClasses] = useState([""]);
  const [formData, setFormData] = useState({});
  const [file, setFile] = useState(null)
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState({
    fileUploading: false,
    DataUploading: false
  })


  const handleFileChange = async (e) => {
    const file = e.target.files[0];
    setFile(file);
    if (!file) {
      toast.error("file t upload kar", {
        position: "bottom-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Flip,
      })
      return;
    }
    const uniqueName = Date.now();
    try {
      setLoading(prev => ({ ...prev, fileUploading: true }));
      const FileUrl = `https://nxqineudxlnblzqvxbgh.supabase.co/storage/v1/object/public/PDFS/${uniqueName}`
       const { data, error } = await supabase.storage.from("PDFS").upload(`${uniqueName}`, file, {
          contentType: "application/pdf",
      });
      console.log(error)
      setFormData(prev => (
        {
          ...prev,
          downloadUrl: FileUrl
        }
      ))
      setLoading(prev => ({ ...prev, fileUploading: false }));
    } catch (error) {
      toast.error("Something went wrong , try again.", {
        position: "bottom-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Flip,
      })
      console.error(error)
    }


  };


  async function handleSubmit(event) {
    event.preventDefault()
      setMessage({})
    if (!file) {
      toast.error("Pdf kon upload kar sy , Kaara ", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Zoom,
      })
      return;
    }
    const form = event.target;
    const formData1 = new FormData(form);

    const formObject = Object.fromEntries(formData1);
    const newFormData = { ...formObject, classes: formData1.getAll("classes") };
    setFormData((prev) => ({ ...prev, ...newFormData }));
    try {
      setLoading(prev => ({ ...prev, DataUploading: true }))
      const { data, error } = await supabase.from('PDF').insert(formData).single();
      setLoading(prev => ({ ...prev, DataUploading: false }));
      if (!error) {

        setMessage({
          type: "success",
          message: "Upload thy gayo . (successfull)."
        });
      } else {
        console.log(error)
        setMessage({
          type: "error",
          message: "kujh maslo thay gayo, try again"
        })
        toast.error("kujh maslo thay gayo, try again. ", {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: false,
          draggable: true,
          progress: undefined,
          theme: "light",
          transition: Zoom,
        })
      }

    } catch (error) {
       console.error(error);
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-3xl mx-auto w-full px-6 py-8 bg-white shadow-md rounded-xl space-y-6"
    >
      <h1 className='heading px-0 !text-2xl !text-center w-full'>Add New Material </h1>

      {/* Title Field */}
      <div>
        <label htmlFor="title" className="label-style ">
          Title
        </label>
        <input
          type="text"
          id="title"
          name="title"
          required
          placeholder="Enter the title"
          className="block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
        />
      </div>

      {/* Subject Field */}
      <div>
        <label htmlFor="subject" className="label-style ">
          Subject
        </label>
        <input
          type="text"
          id="subject"
          name="subject"
          placeholder="Enter the subject"
          required
          className="block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
        />
      </div>

      <div>
        <label htmlFor="material_type" className="label-style ">
          Material Type
        </label>
        <select
          required
          onChange={(e) => {
            setFormData((prevData) => ({ ...prevData, material_type: e.target.value }));
            console.log(formData)
          }}
          id="material_type"
          name="material_type"
          className="block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 text-gray-600"
        >
          <option value="Select Material Type" defaultValue={"Select Material Type..."} disabled>
            Select Material Type
          </option>
          {["past-papers", "practice-questions", "syllabus"].map((item, indx) => (
            <option value={item} key={indx}>
              {item}
            </option>
          ))}
        </select>
      </div>
      {/* Chapter */}
      {formData?.material_type === "practice-questions" && <div>
        <label htmlFor="subject" className="label-style ">
          Chapter Name
        </label>
        <input
          type="text"
          id="subject"
          name="chapter_name"
          placeholder="Chapter jo Naaalo"
          required
          className="block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
        />
      </div>}
      {/* Class Fields */}

      <div>
        <label className="label-style ">Classes</label>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {["Grade 9", "Grade 10", "Grade 11", "Grade 12", "MDCAT", "ECAT", "USAT"].map((classValue, index) => (
            <fieldset required name="classes" key={index} className="flex items-center space-x-2">
              <input
                type="checkbox"
                value={classValue}
                name="classes"
                className="h-5 w-5 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"
              />
              <span className="text-gray-700">{classValue}</span>
            </fieldset>
          ))}
        </div>
      </div>



      {/* File Upload */}
      <div>
        <label className="label-style ">Upload PDF</label>
        <div className="flex flex-col items-center justify-center border-2 border-dashed border-gray-300 rounded-lg p-6 bg-gray-50 hover:bg-gray-100">
          <input
            type="file"
            accept=".pdf"
            onChange={handleFileChange}
            className="sr-only"
            id="file-upload"
          />
          <label
            htmlFor="file-upload"
            className="cursor-pointer px-6 py-2 bg-indigo-600 text-white rounded-md font-medium shadow-sm hover:bg-indigo-700 focus:ring-2 focus:ring-indigo-500"
          >
            Click to upload a PDF
          </label>
        </div>
        {loading.fileUploading && (
          <p className="mt-2 text-sm font-medium text-violet-700">Uploading...</p>
        )}
      </div>

      {/* Submit Button */}
      <div>
        <button
          type="submit"
          disabled={loading.DataUploading || loading.fileUploading}
          className={`w-full px-6 py-3 text-white font-medium rounded-lg shadow-md focus:ring-2 focus:ring-offset-2 disabled:bg-indigo-200 focus:ring-indigo-500 ${loading.DataUploading
              ? "bg-indigo-300 cursor-not-allowed"
              : "bg-indigo-600 hover:bg-indigo-700"
            }`}
        >
          {loading.DataUploading ? "Loading..." : "Submit"}
        </button>
      </div>

      {/* Success/Error Message */}
      {message.message && (
        <p
          className={`text-center mt-4 font-medium ${message.type === "success" ? "text-green-600" : "text-red-600"
            }`}
        >
          {message.message}
        </p>
      )}
    </form>

  );
}

export default Form;
