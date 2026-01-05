import { Clock } from "lucide-react";
import React from "react";

const Header = () => {
  return (
    <div className="min-h-30 border border-gray-200">
      <div className="min-h-15 border border-gray-300"></div>
      <div className="flex justify-around items-center text-gray-700 font-semibold mt-4">
       <div>
         <button className="text-gray-900 font-semibold text-2xl">Dev Labs</button>
       </div>
        <div>
          <ul className="flex gap-4">
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#about">About us</a>
            </li>
            <li>
              <a href="#service">Services</a>
            </li>
            <li>
              <a href="#projet">Projects</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </div>

        <div className="flex gap-6">
          <button className="border border-gray-300 p-1 px-4 outline-gray-500 outline rounded-md text-semibold hover:transition-all cursor-pointer hover:scale-100">Login</button>
          <button className="border border-black p-1 px-4 outline-black outline rounded-md text-semibold bg-black text-yellow-500 cursor-pointer ">Sign Up</button>
        </div>
      </div>
    </div>
  );
};

export default Header;
