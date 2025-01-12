import React from "react";

const extractKeywords = (text) => {
  // Extracting keywords by splitting and selecting significant words
  const stopWords = ["the", "and", "of", "to", "in", "for", "with", "on"];
  return text
    .split(" ")
    .filter((word) => word.length > 3 && !stopWords.includes(word.toLowerCase()))
    .slice(0, 2) // Take the first 2 significant words as keywords
    .join(" ");
};

const Result = ({ schemes }) => {
  return (
    <div className="container mx-auto mt-10 px-4">
      <h1 className="text-3xl sm:text-4xl font-bold text-center mb-10">
        
        <span className="bg-gradient-to-r from-orange-500 to-red-800 text-transparent bg-clip-text">
          {" "}
          Scheme Details
        </span>
      </h1>
      <div className="space-y-6">
        {schemes.map((scheme, index) => (
          <div
            key={index}
            className="border border-neutral-700 rounded-md p-6 shadow-lg bg-white flex flex-col sm:flex-row gap-6"
          >
            {/* Scheme Name and Link */}
            <div className="flex-1">
              <h2 className="text-xl font-semibold mb-2 text-black">
                {scheme["Scheme Name"]}
              </h2>
              <a
                href={scheme["Scheme URL"]}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:text-blue-700 text-sm break-all"
              >
                Visit Scheme
              </a>
            </div>

            {/* Tags */}
            <div className="flex-1">
              <h3 className="font-medium text-black mb-2">Tags:</h3>
              <div className="flex flex-wrap gap-2">
                {scheme.Tags.map((tag, tagIndex) => (
                  <span
                    key={tagIndex}
                    className="px-3 py-1 bg-gray-200 rounded-full text-sm text-neutral-800"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Eligibility Criteria */}
            {scheme["Eligibility Criteria to Verify"].length > 0 && (
              <div className="flex-1">
                <h3 className="font-medium text-black mb-2">Eligibility:</h3>
                <div className="flex flex-wrap gap-2">
                  {scheme["Eligibility Criteria to Verify"].map(
                    (criteria, criteriaIndex) => {
                      const keywords = extractKeywords(criteria);
                      return (
                        <span
                          key={criteriaIndex}
                          className="relative px-3 py-1 bg-gray-200 rounded-full text-sm text-neutral-800 group cursor-pointer"
                        >
                          {keywords}
                          {/* Tooltip for full eligibility details */}
                          <div className="absolute left-0 top-full mt-2 w-64 p-2 bg-white border border-neutral-700 shadow-lg rounded-md text-neutral-600 text-sm opacity-0 group-hover:opacity-100 transition-opacity z-10">
                            {criteria}
                          </div>
                        </span>
                      );
                    }
                  )}
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Result;
