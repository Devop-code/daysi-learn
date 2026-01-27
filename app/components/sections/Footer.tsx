import { ArrowRight, PlaySquare } from "lucide-react";
import React from "react";

const Footer = () => {
  return (
    <section className="w-full h-auto mx-auto p-4 md:p-8 lg:p-20 bg-gray-800">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-20">
        <div>
          <h1 className="text-amber-300 items-center font-semibold flex gap-4 text-2xl">
            {" "}
            <PlaySquare /> Band Name
          </h1>{" "}
          <br />
          <p className="text-sm text-muted-foreground text-white">
            Lorem ipsum dolor, sit amet consectetur <br /> adipisicing elit. Facilis
            delectus beatae illum?
          </p>
        </div>
        <div  className=" space-y-4 leading-2 text-white">
          <h1 className="text-amber-300 text-2xl">Link</h1>
          <ul className="text-sm  gap-2 space-y-2">
            <li>
              <a href="#home" className=" decoration-0">
                Home
              </a>
            </li>
            <li>
              <a href="#about" className=" decoration-0">
                About Us
              </a>
            </li>
            <li>
              <a href="#service" className=" decoration-0">
                Service
              </a>
            </li>
            <li>
              <a href="#portfolio" className=" decoration-0">
                Portfolio
              </a>
            </li>
            <li>
              <a href="#project" className=" decoration-0">
                Project
              </a>
            </li>
          </ul>
        </div>
        <div className=" space-y-4 leading-2">
          <h1 className="text-amber-300 text-2xl">Service</h1>
          <ul className="text-sm list-none space-y-2 text-white">
            <li>Architectural Design</li>
            <li>Interior Design</li>
            <li>Urban Design</li>
            <li>Master Planning</li>
            <li>Project Management</li>
          </ul>
        </div>
        <div className=" space-y-4 leading-2">
          <h1 className="text-amber-300 text-2xl">Address</h1>
          <ul className="text-sm  list-none space-y-2 text-white">
            <li>555-555-5555</li>
            <li>user@gmail.com</li>
            <li>123 Street Name ,City</li>
            <li>Name, State, Country, 12345</li>
          </ul>
          <div className="flex items-center bg-gray-400 rounded-md overflow-hidden">
            <input
              type="email"
              name="email"
              id="email"
              placeholder="email address here"
              className="flex-1 p-3 bg-gray-400 text-white placeholder-gray-600 outline-none border-none"
            />
            <button className="bg-amber-400 hover:bg-amber-500 p-3 flex items-center justify-center">
              <ArrowRight className="h-5 w-5 text-gray-800" />
            </button>
          </div>
        </div>
      </div>
      <div className="col-span-1 sm:col-span-2 lg:col-span-4 flex gap-4 mt-8 md:mt-0">
        <div className="size-8 rounded-full border border-amber-300 items-center flex p-2 cursor-pointer hover:bg-amber-300 transition-colors cursor-pointer hover:bg-amber-300 transition-colors">
          <PlaySquare />
        </div>
        <div className="size-8 rounded-full border border-amber-300 items-center flex p-2 cursor-pointer hover:bg-amber-300 transition-colors">
          <PlaySquare />
        </div>
        <div className="size-8 rounded-full border border-amber-300 items-center flex p-2">
          <PlaySquare />
        </div>
      </div>
      <h1 className="col-span-1 sm:col-span-2 lg:col-span-4 flex mt-6 md:mt-8 relative text-xs md:text-base">
       <span className="text-white"> Privacy Policy :</span> <hr className="hidden md:block w-6xl absolute top-3 right-5"/>
      </h1>
    </section>
  );
};

export default Footer;
