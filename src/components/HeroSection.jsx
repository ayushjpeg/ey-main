import { useRef } from "react";
import docimg from "../assets/docimg.png";

const HeroSection = () => {
  const scrollContainerRef = useRef(null);

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollLeft -= 200;
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollLeft += 200;
    }
  };

  return (
    <div className="flex flex-col items-center mt-6 lg:mt-0 px-6">
      <h1 className="text-m sm:text-5xl lg:text-6xl text-center tracking-wide">
        Discover Government Schemes
        <span className="bg-gradient-to-r from-orange-500 to-red-800 text-transparent bg-clip-text">
          {" "}
          Tailored for You
        </span>
      </h1>
      <div className="flex items-center mt-6 w-full justify-center">
        <button onClick={scrollLeft} className="mx-2 text-orange-500">
          ◀
        </button>
        <div
          className="flex overflow-x-hidden w-full justify-start"
          ref={scrollContainerRef}
          style={{
            scrollBehavior: "smooth",
            padding: "20px",
          }}
        >
          {/* Spacer Div for Padding */}
          <div style={{ width: "10px", flexShrink: 0 }}></div>

          {/* Image Frames */}
          <div className="flex-shrink-0 mx-4">
            <img
              src={docimg}
              alt="Illustration of government schemes"
              className="rounded-lg border border-orange-700 shadow-sm shadow-orange-400"
              style={{ width: "510px", height: "350px" }}
            />
          </div>
          <div className="flex-shrink-0 mx-4">
            <img
              src={docimg}
              alt="Illustration of scheme eligibility"
              className="rounded-lg border border-orange-700 shadow-sm shadow-orange-400"
              style={{ width: "510px", height: "350px" }}
            />
          </div>
          <div className="flex-shrink-0 mx-4">
            <img
              src={docimg}
              alt="Illustration of scheme eligibility"
              className="rounded-lg border border-orange-700 shadow-sm shadow-orange-400"
              style={{ width: "510px", height: "350px" }}
            />
          </div>
          <div className="flex-shrink-0 mx-4">
            <img
              src={docimg}
              alt="Illustration of scheme eligibility"
              className="rounded-lg border border-orange-700 shadow-sm shadow-orange-400"
              style={{ width: "510px", height: "350px" }}
            />
          </div>
          <div className="flex-shrink-0 mx-4">
            <img
              src={docimg}
              alt="Illustration of scheme eligibility"
              className="rounded-lg border border-orange-700 shadow-sm shadow-orange-400"
              style={{ width: "510px", height: "350px" }}
            />
          </div>
          <div className="flex-shrink-0 mx-4">
            <img
              src={docimg}
              alt="Illustration of scheme eligibility"
              className="rounded-lg border border-orange-700 shadow-sm shadow-orange-400"
              style={{ width: "510px", height: "350px" }}
            />
          </div>

        </div>
        <button onClick={scrollRight} className="mx-2 text-orange-500">
          ▶
        </button>
      </div>
      <p className="mt-10 text-lg text-center text-neutral-500 max-w-4xl">
        Simplify your access to government schemes with our AI-driven platform. 
        Upload your documents or provide your details to instantly discover the benefits 
        you're eligible for. Save time, avoid queues, and get the support you need effortlessly!
      </p>
      <div className="flex justify-center my-10">
        <a
          href="#"
          className="bg-gradient-to-r from-orange-500 to-orange-800 py-3 px-4 mx-3 rounded-md"
        >
          Upload Documents
        </a>
        <a href="#" className="py-3 px-4 mx-3 rounded-md border">
          Enter Details Manually
        </a>
      </div>
    </div>
  );
};

export default HeroSection;
