import { ArrowLeft, ArrowRight, ArrowUpRight, Play, Share } from "lucide-react";
import React from "react";
import Rated from "../blocs/Rated";

const HeroSection = () => {
  return (
    <div className="min-h-screen px-12 grid grid-cols-2 items-center relative">
      {/* Colonne de gauche - Contenu */}
      <div className="mt-10">
        {/* Badge "Creative" */}
        <div className="inline-block border border-gray-300 px-4 py-2 rounded-xl font-semibold text-gray-700 bg-white/80 backdrop-blur-sm">
          Creative
        </div>
        
        {/* Titre principal */}
        <div className="mt-8">
          <h2 className="text-6xl font-bold text-gray-800 leading-tight">
            Smart Solutions <br /> for{" "}
            <span className="text-yellow-500">Bold</span> Business
          </h2>
          <p className="mt-6 text-gray-600 text-lg">
            Lorem ipsum dolor amets consectetuer adipiscin nonummy <br /> 
            euismod tincidun dolore aliquam volutpat.
          </p>
        </div>
        
        {/* Boutons */}
        <div className="flex items-center gap-8 mt-16">
          <button className="flex items-center gap-2 bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition-all duration-300 group">
            <span className="font-medium">Learn More</span>
            <ArrowUpRight className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </button>
          
          <button className="flex items-center gap-3 text-gray-700 hover:text-black transition-colors">
            <div className="w-12 h-12 rounded-full bg-black flex items-center justify-center group-hover:scale-110 transition-transform">
              <Play className="text-yellow-500 ml-1" size={20} />
            </div>
            <span className="font-medium">Play Video</span>
          </button>
        </div>
      </div>
      
      {/* Colonne de droite - Image et éléments visuels */}
     <div className="relative h-full flex items-center justify-center">
  {/* Cercle en arrière-plan */}
  <div className="absolute z-0 w-[450px] h-[450px] bg-gradient-to-br  to-[#edd604] blur-[100px] rounded-full"></div>

  {/* Image principale */}
  <div className="relative z-10 w-full max-w-lg ">
    <img
      src="/images/Adobe Express - file.png"
      alt="Business solution illustration"
      className="w-3xl h-3xl shadow-0"
    />
  </div>

        
    
        {/* Badge d'évaluation avec étoiles */}
        <div className="absolute top-135 -left-30 bg-yellow-400 backdrop-blur-sm px-4 py-3 rounded-xl shadow-lg flex items-center gap-3 z-20">
          <div className="flex gap-1">
            <div className="flex -space-x-3">
          <img
            src="/images/copyHerosection.png"
            alt="User testimonial"
            className="w-10 h-10 rounded-full border-2 border-white shadow"
          />
          <img
            src="/images/a.jpg"
            alt="User testimonial"
            className="w-10 h-10 rounded-full border-2 border-white shadow"
          />
          <img
            src="/images/c.jpg"
            alt="User testimonial"
            className="w-10 h-10 rounded-full border-2 border-white shadow"
          />
          <img
            src="/images/d.jpg"
            alt="User testimonial"
            className="w-10 h-10 rounded-full border-2 border-white shadow"
          />
        </div>
          </div>
          <span className="font-semibold text-gray-700">4.9 Star</span>
        </div>
        
        {/* Icônes de navigation */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex items-center gap-6 z-20">
          <button className="w-10 h-10 rounded-full bg-white shadow-lg flex items-center justify-center hover:bg-gray-50 transition-colors">
            <ArrowLeft size={20} />
          </button>
          <button className="w-10 h-10 rounded-full bg-white shadow-lg flex items-center justify-center hover:bg-gray-50 transition-colors">
            <ArrowRight size={20} />
          </button>
        </div>
        
        {/* Icône de partage */}
        <button className="absolute top-10 left-10 w-10 h-10 rounded-full bg-white shadow-lg flex items-center justify-center hover:bg-gray-50 transition-colors z-20">
          <Share size={20} />
        </button>
        
        {/* Arrière-plan décoratif */}
        <div className="absolute inset-0 bg-gradient-to-br from-yellow-50 to-gray-100 rounded-3xl -z-10"></div>
      </div>
    </div>
  );
};

export default HeroSection;