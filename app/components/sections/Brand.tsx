import { PlaySquare } from "lucide-react";
import React from "react";

function Brand() {
  return (
    <div className="w-full h-auto py-5 px-4 md:px-8 lg:px-50 bg-gray-800 overflow-x-auto">
      <div className="flex gap-2 justify-between md:justify-between">
        {[...Array(5)].map((_, i) => (
          <div key={i} className="flex text-yellow-400 items-center gap-2 whitespace-nowrap shrink-0">
            <PlaySquare className="w-4 h-4 md:w-6 md:h-6"/>
            <p className="text-sm md:text-2xl">Band Name</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Brand;
