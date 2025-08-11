import React from "react";

// أيقونة النجوم
const StarIcon = () => (
  <svg
    className="w-5 h-5 text-yellow-400"
    fill="currentColor"
    viewBox="0 0 20 20"
  >
    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.696h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.696l1.07-3.292z" />
  </svg>
);

const CertificatesSection = () => {
  const certificates = [
    {
      title: "Certificate of Attendance – Web3 Development",
      description:
        "Successfully participated in a Web3 Development training using Ethereum and Solidity.",
      date: "March 3 – March 5, 2025",
      image: "/image/image5.png", // ضع هنا مسار صورة الشهادة
      download: "../../public/cerrtifices.pdf/image5.png.pdf", // ضع هنا رابط PDF إذا متوفر
    },
    {
      title:
        "Certificate of Attendance - Developing an Interactive Web Project with FLASK",
      description:
        "Ahmed ELAALY actively participated in a training on developing an interactive web project using the FLASK framework at Orange Digital Center Agadir. The training took place from March 6 to 7, 2025.",
      date: "March 6-7, 2025",
      image: "/image/image6.png", // replace with your actual image path or URL
      download: "../../public/cerrtifices.pdf/image6.png.pdf", // replace with actual download link if available
    },
    {
      title: "Certificate of Achievement – Fundamentals of Programming",
      description:
        "Successfully completed the Fundamentals of Programming course, validating the acquisition of core programming concepts and foundational skills for further study or future programming projects.",
      date: "December 2, 2024",
      image: "/image/image7.png",
      download: "../../public/cerrtifices.pdf/image7.png.pdf",
    },
  ];

  return (
    <div className="p-8 md:p-1 dark:bg-gray-900 dark:text-white transition-colors duration-300">
      <h1 className="text-4xl font-bold pb-9">
        Professional <span className="text-primary">Certificates</span>
      </h1>

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-start">
        {certificates.map((cert) => (
          <div
            key={cert.title}
            className="bg-card p-6 rounded-lg shadow-lg"
          >
            {/* تقييم النجوم */}

            <div className="flex items-center space-x-1">
              <StarIcon />
              <StarIcon />
              <StarIcon />
              <StarIcon />
              <StarIcon />
            </div>

            {/* معلومات الشهادة */}
            <div>
              <h2 className="text-2xl font-semibold text-foreground">{cert.title}</h2>
              <p className="text-foreground dark:text-foreground pt-2">
                {cert.description}
              </p>
              <p className="text-sm text-foreground/70 dark:text-foreground/70 mt-1">
                📅 {cert.date}
              </p>
            </div>

            {/* صورة الشهادة */}
            <img
              src={cert.image}
              alt={cert.title}
              className="w-72 h-auto rounded-lg shadow-md mx-auto  pt-6 pb-6 border-solid border-black"
            />

            {/* زر تحميل الشهادة */}
            <a
              href={cert.download}
              download
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-violet-500 hover:bg-violet-600 transition duration-300"
            >
              <span className="mr-2">⬇️</span> Download Certificate
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CertificatesSection;
