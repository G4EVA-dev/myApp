import React from "react";

export default function Hero() {
  return (
    <div className="mt-[550px] mb-[50px] ">
      <div className="text-center">
        <h1 className="text-5xl font-bold ">Welcome To ResumeBuilder</h1>

        <p className="mt-7 text-2xl slide-up">
          Craft Your Perfect Resume in Minutes!
        </p>
      </div>
      <div className="flex justify-center items-center gap-10 mt-20">
        <button className="border-[1px] border-gray-300 bg-black text-white py-2 px-4 rounded-md hover:opacity-50 ">
          Get Your Resume
        </button>
        <button className="border-[1px] border-gray-300 bg-white text-black py-2 px-4 rounded-md hover:opacity-50 ">
          View Projects
        </button>
      </div>
    </div>
  );
}
