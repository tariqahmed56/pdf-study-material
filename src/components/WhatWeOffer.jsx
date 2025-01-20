import Link from "next/link";
import { FiFileText, FiBookOpen, FiClipboard } from "react-icons/fi";

const WhatWeOffer = () => {
  // Categories of PDFs
  const offers = [
    {
      title: "Past Papers",
      description:
        "Access past papers to prepare for your exams. Reviewing these helps you understand the exam format, practice time management, and improve your problem-solving skills.",
      buttonText: "Explore Past Papers",
      link: "/past-papers",
      icon: <FiClipboard className="w-16 h-16 text-purple-700 mx-auto mb-4" />,
    },
    {
      title: "Practice Questions",
      description:
        "Practice questions for exams like MDCAT, ECAT, and SAT. Cover key subjects such as Math, Physics, and Biology to build confidence and boost your scores.",
      buttonText: "Download Questions",
      link: "/practice-questions",
      icon: <FiBookOpen className="w-16 h-16 text-blue-600 mx-auto mb-4" />,
    },
    {
      title: "Syllabus",
      description:
        "Access up-to-date syllabi for MDCAT, ECAT, SAT, and Board exams. A clear syllabus ensures you stay focused and cover all important topics effectively.",
      buttonText: "View Syllabus",
      link: "/syllabus",
      icon: <FiFileText className="w-16 h-16 text-indigo-600 mx-auto mb-4" />,
    },
  ];

  return (
    <section className="bg-gray-100 py-16" id="what-we-offer">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="heading !text-4xl font-bold mb-4">What We Offer</h2>
          <p className="text-gray-600 text-lg">
            Enhance your preparation with our curated resources designed for students.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {offers.map((offer) => (
            <div
              key={offer.title}
              className="relative card-hover bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition group z-90 hover:text-white overflow-hidden"
            >

              {offer.icon}
              <h3 className="text-xl font-bold text-gray-700 mb-4 text-center">
                {offer.title}
              </h3>
              <p className="text-gray-600 mb-6 text-center">{offer.description}</p>
              <Link
                href={offer.link}
                className="block font-bold bg-gradient-to-br from-purple-700 to-blue-600 text-white text-center py-2 px-4 rounded-md hover:bg-blue-700 transition"
              >
                {offer.buttonText}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatWeOffer;
