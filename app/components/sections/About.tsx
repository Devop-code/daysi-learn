import { Sparkle, Star } from "lucide-react";
import React from "react";

const About = () => {
  return (
    <div className="w-full px-8 py-20 lg:px-16 bg-gray-50" id="about">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mx-auto max-w-6xl items-center">
        <div className="space-y-4">
          <h2 className=" text-sm font-semibold text-foreground italic">About <span className="text-amber-500">Us</span></h2>
          <h1 className="text-4xl lg:text-5xl font-bold leading-tight text-foreground">About the <br /><span >Project</span></h1>
          <p className="text-muted-foreground leading-relaxed max-w-md">
            Lorem ipsum dolors amets consectetuers diam nonum euismod ncidun
            dolore aliuam volutpat.
          </p>
          <h2 className="text-amber-500 font-semibold text-lg pt-4">What We Do</h2>
          <ul className="space-y-3">
            <li className=" flex items-center gap-3">
              <span className="size-2 rounded-full bg-amber-500 shrink-0"></span>
              <span className="text-muted-foreground">Impactful designs</span>
            </li>
            <li className=" flex items-center gap-3">
              <span className="size-2 rounded-full bg-amber-500 shrink-0"></span>
              <span className="text-muted-foreground">Scalable technologies</span>
            </li>
            <li className=" flex items-center gap-3">
              <span className="size-2 rounded-full bg-amber-500 shrink-0"></span>
              <span className="text-muted-foreground">Results that matter</span>
            </li>
          </ul>
        </div>
        <div className="relative">
            <div className="absolute -top-8 -right-4 w-[90%] h-[85%] bg-gray-100 z-0"
            style={{borderRadius:" 60% 40% 30% 70% / 60% 30% 70% 40%"}}>

            </div>
        <div className="relative z-10">
                <img src="/images/b.jpg" alt="image de about" className="w-full object-cover h-auto shadow-sm rounded-2xl" />
        </div>
            <div className="absolute -top-4 right-0 z-20 flex items-start gap-2 max-w-[200px]">
            <Sparkle className="w-5 h-5 text-amber-500 shrink-0 mt-1" fill="currentColor" />
            <p className="text-xs text-muted-foreground leading-relaxed">
              Lorem ipsum dolors amets nonum euismod dolore aliuam.
            </p>
          </div>
          <div className="absolute -bottom-6 left-1/4 z-20">
              <div className="relative w-24 h-24">
                <div className="absolute insert-0 rounded-full border-2 border-amber-400 bg-amber-400">
                      <svg viewBox="0 0 100 100" className="w-full h-full animate-pulse">
                  <defs>
                    <path id="circlePath" d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0" />
                  </defs>
                  <text className="text-[8px] fill-white font-semibold uppercase tracking-widest">
                    <textPath href="#circlePath">• Creative Business • Award Winning •</textPath>
                  </text>
                </svg>
                </div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white shadow-sm">

                </div>
              </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
