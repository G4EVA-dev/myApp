import React from "react";

export default function NavBar() {
  return (
    <nav className="w-full flex justify-around items-center h-27 py-10 bg-slate-50 shadow-lg ">
      <div>Resume Builder</div>

      <div>
        <ul className="flex justify-around items-center gap-10">
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">Projects</a>
          </li>
          <li>
            <a href="#">Resume</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
        </ul>
      </div>

      <div>
        <button>Download CV</button>
      </div>
    </nav>
  );
}
