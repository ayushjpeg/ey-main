import React from "react";
import { useLocation } from "react-router-dom";

const extractKeywords = (text) => {
  const stopWords = ["the", "and", "of", "to", "in", "for", "with", "on"];
  return text
    .split(" ")
    .filter((word) => word.length > 3 && !stopWords.includes(word.toLowerCase()))
    .slice(0, 2);
};

const Result = () => {
  const location = useLocation();
  const { result } = location.state.data || {}; // Safeguard against missing state
  //console.log("Result data:", result);

  let schemes = [];

  if (result && Array.isArray(result)) {
    // Check if result is a valid array and parse it
    schemes = result.map((item) => {
      try {
        // Clean out the surrounding ```json and parse it
        const cleanedItem = item.replace(/```json|```/g, "");
        const parsedItem = JSON.parse(cleanedItem);
        
        return parsedItem;
      } catch (error) {
        console.error("Error parsing item", error);
        return null;
      }
    }).filter(Boolean); // Remove any null values from parsing errors
  }
  //console.log("Parsed schemes:", schemes);
  schemes = schemes[0];
  console.log(schemes);

  return (
    <div>
      {schemes.length > 0 ? (
        schemes.map((scheme, index) => (
          <div key={index}>
            <h2>{scheme["Scheme Name"]}</h2>
            <a href={scheme["Scheme URL"]} target="_blank" rel="noopener noreferrer">
              {scheme["Scheme Name"]}
            </a>
            <div>
              Tags: {scheme.Tags ? scheme.Tags.join(", ") : "N/A"}
            </div>
            <div>
              Eligibility Criteria:
              <ul>
                {scheme["Eligibility Criteria to Verify"] &&
                  scheme["Eligibility Criteria to Verify"].map((criterion, idx) => (
                    <li key={idx}>{criterion}</li>
                  ))}
              </ul>
            </div>
          </div>
        ))
      ) : (
        <p>No schemes found</p>
      )}
    </div>
  );
};

export default Result;
