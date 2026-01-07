import React from 'react';

const Rated = () => {
  return (
    <div className="border border-gray-300  rounded-md bg-yellow-400 mb-4">
      <div className="flex items-center">
        
        {/* Avatars superposés */}
        <div className="flex -space-x-3">
          <img
            src="/images/image.png"
            alt="User testimonial"
            className="w-10 h-10 rounded-full border-2 border-white shadow"
          />
          <img
            src="/images/image.png"
            alt="User testimonial"
            className="w-10 h-10 rounded-full border-2 border-white shadow"
          />
          <img
            src="/images/image.png"
            alt="User testimonial"
            className="w-10 h-10 rounded-full border-2 border-white shadow"
          />
          <img
            src="/images/image.png"
            alt="User testimonial"
            className="w-10 h-10 rounded-full border-2 border-white shadow"
          />
        </div>

        {/* Texte avec marge à gauche */}
        <div className="ml-4">
          <h2 className="font-semibold">
            4.9 stars <span className="text-gray-700">Rated</span>
          </h2>
        </div>
      </div>
    </div>
  );
};

export default Rated;