import React from "react";

export default function NavBar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white bg-opacity-90 backdrop-blur-sm shadow-sm ">
      <div className="flex justify-between items-center p-6  md:space-x-10">
        <div className="text-3xl font-bold">Resume Builder</div>

        <div>
          <ul className="flex justify-around items-center gap-10">
            <li className="text-base font-medium text-gray-500 hover:text-gray-900">
              <a href="#">Home</a>
            </li>
            <li className="text-base font-medium text-gray-500 hover:text-gray-900">
              <a href="#">Projects</a>
            </li>
            <li className="text-base font-medium text-gray-500 hover:text-gray-900">
              <a href="#">Resume</a>
            </li>
            <li className="text-base font-medium text-gray-500 hover:text-gray-900">
              <a href="#">Blog</a>
            </li>
          </ul>
        </div>

        <div>
          <button className="border-[1px] border-gray-400 py-2 px-6 rounded-md ">
            Download CV
          </button>
        </div>
      </div>
    </nav>
  );
}
