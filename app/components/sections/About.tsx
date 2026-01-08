import { Star } from "lucide-react";
import React from "react";

const About = () => {
  return (
    <div className="mt-10 w-full h-auto p-8 bg-gray-400">
      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-4">
          <h2 className="font-semibold text-2xl">About Us</h2>
          <h1 className="text-3xl">About the <br /><span className="text-yellow-600">Project</span></h1>
          <p className="text-gray-500">
            Lorem ipsum dolors amets consectetuers diam nonum euismod ncidun
            dolore aliuam volutpat.
          </p>
          <h2 className="text-yellow-500 font-semibold text-xl">What We Do</h2>
          <ul className="list-disc pr-5">
            <li className=" marker:text-yellow-500 text-gray-500 ">Impactful designs</li>
            <li className=" marker:text-yellow-500 text-gray-500 ">Scalable technologie</li>
            <li className=" marker:text-yellow-500 text-gray-500 ">Results that matter</li>
          </ul>
        </div>
        <div className="relative">
            <div className=" absolute z-10 w-full h-auto relative border rounded-2xl flex items-center justify-center">
                <img src="/images/hero2.jpeg" alt=""  className="w-full h-auto"/>
            </div>
            <div className="flex gap-2 items-center relative z-20 top-30 left-40">
                <Star/>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut, esse!</p>
            </div>

            <div className="w-[250px] h-[300px] rounded-full bg-yellow-500 z-30 relative">

            </div>
        </div>
      </div>
    </div>
  );
};

export default About;
