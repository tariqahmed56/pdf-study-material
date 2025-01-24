import DownloadButton from "./DownloadButton";
import { supabase } from "@/app/lib/supabaseClient";
import BookMark from "./BookMark";

export const revalidate = 60;
const LatestCards = async () => {
  // const {user} = useUser();
  const { data, error } = await supabase
    .from('PDF') 
    .select('*') 
    .order('created_at', { ascending: false })
    .limit(3);
    console.log(data);
  return (
    <section className="bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold !text-center text-gray-800 mb-8 heading">
          Recently Uploaded
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {data.map((pdf) => (
            <div
              key={pdf.id}
              className="bg-white relative shadow-lg rounded-lg p-6 transition-transform transform hover:scale-105"
            >
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                {pdf.title}
              </h3>

              <p className="text-sm text-gray-500 mb-4">
                Uploaded on: {new Date(pdf.created_at).toLocaleDateString()}
              </p>

              <div className="flex space-x-4">
               <DownloadButton url={pdf.downloadUrl} title={pdf.title}/>
                <button className="px-4 py-2 bg-gray-200 text-gray-800 rounded-md shadow hover:bg-gray-300 transition">
                  View Details
                </button>
              </div>
              <BookMark pdfId={pdf.id}/>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LatestCards;
