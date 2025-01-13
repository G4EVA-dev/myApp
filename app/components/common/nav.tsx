"use client";
import React, { useState } from "react";

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white bg-opacity-90 backdrop-blur-sm shadow-sm">
      <div className="flex justify-between items-center p-6 md:space-x-10">
        {/* Logo */}
        <div className="text-3xl font-bold">Resume-Builder.</div>

        {/* Hamburger Icon */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="focus:outline-none">
            <span className="block w-6 h-1 bg-black mb-1"></span>
            <span className="block w-6 h-1 bg-black mb-1"></span>
            <span className="block w-6 h-1 bg-black"></span>
          </button>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex">
          <ul className="flex justify-around items-center gap-10">
            <li className="text-base font-medium text-gray-500 hover:text-gray-900">
              <a href="#">Home</a>
            </li>
            <li className="text-base font-medium text-gray-500 hover:text-gray-900">
              <a href="#">About Us</a>
            </li>
            <li className="text-base font-medium text-gray-500 hover:text-gray-900">
              <a href="#">Contact Us</a>
            </li>
            <li className="text-base font-medium text-gray-500 hover:text-gray-900">
              <a href="#">Blog</a>
            </li>
          </ul>
        </div>

        <div className="hidden md:block">
          <button className="border-[1px] border-gray-400 py-2 px-6 rounded-md">
            Join Us
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 left-0 w-full h-full bg-black text-white z-40 transform transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex justify-between items-center p-6 bg-black ">
          <div className="text-3xl font-bold">Resume-Builder.</div>
          <button onClick={toggleMenu} className="focus:outline-none">
            <span className="block w-6 h-1 bg-white mb-1"></span>
            <span className="block w-6 h-1 bg-white mb-1"></span>
            <span className="block w-6 h-1 bg-white"></span>
          </button>
        </div>

        <ul className="flex flex-col items-center space-y-6 mt-10 bg-black ">
          <li className="text-lg font-medium hover:text-gray-300">
            <a href="#" onClick={toggleMenu}>
              Home
            </a>
          </li>
          <li className="text-lg font-medium hover:text-gray-300">
            <a href="#" onClick={toggleMenu}>
              About Us
            </a>
          </li>
          <li className="text-lg font-medium hover:text-gray-300">
            <a href="#" onClick={toggleMenu}>
              Contact Us
            </a>
          </li>
          <li className="text-lg font-medium hover:text-gray-300">
            <a href="#" onClick={toggleMenu}>
              Blog
            </a>
          </li>
        </ul>

        <div className="mt-10 flex justify-center">
          <button className="border-[1px] border-gray-400 text-white py-2 px-6 rounded-md hover:bg-gray-700">
            Join Us
          </button>
        </div>
      </div>
    </nav>
  );
}
