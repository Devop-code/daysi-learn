import { PlaySquare } from "lucide-react";
import React from "react";

function Brand() {
  return (
    <div className="w-full h-auto py-5 px-50 bg-gray-800">
      <div className="flex gap-2  justify-between">
        {[...Array(5)].map((_, i) => (
          <div key={i} className="flex text-yellow-400 items-center">
            <PlaySquare/>
            <p className="text-2xl">Band Name</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Brand;
