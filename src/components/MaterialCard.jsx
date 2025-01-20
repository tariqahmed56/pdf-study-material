import React from "react";
import DownloadButton from "./DownloadButton";

const MaterialCard = ({ data }) => {
  return (
    <div className="bg-white border rounded-lg shadow-md overflow-hidden">
      <div className="p-4">
        <h2 className="text-xl font-bold text-gray-800">{data.title}</h2>
        <p className="text-sm text-gray-600 mt-2">
          <span className="font-semibold">Subject:</span> {data.subject}
        </p>
        <p className="text-sm text-gray-600 mt-1">
          <span className="font-semibold">Material Type:</span> {data.material_type}
        </p>
        <p className="text-sm text-gray-600 mt-1">
          <span className="font-semibold">For Students : </span> {data.classes.join(", ")}
        </p>
        {data.chapter_name && (
          <p className="text-sm text-gray-600 mt-1">
            <span className="font-semibold">Chapter Name:</span> {data.chapter_name}
          </p>
        )}
        <p className="text-sm text-gray-400 mt-3">
          <span className="font-semibold">Uploaded At:</span>{" "}
          {new Date(data.created_at).toLocaleDateString()}
        </p>
        <div className="mt-4">
          {data.downloadUrl ? (
            <DownloadButton />
          ) : (
            <span className="text-red-500 text-sm font-medium">
              Download not available
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

export default MaterialCard;
