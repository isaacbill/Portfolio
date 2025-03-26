import React from 'react';
import { useTypewriter, Cursor } from "react-simple-typewriter";
import Media from './Media';

const LeftBanner = () => {
  const [text] = useTypewriter({
    words: ["Civil Engineer.", "Risk Surveyor.", "Site Supervisor.", "CAD Instructor"],
    loop: true,
    typeSpeed: 20,
    deleteSpeed: 10,
    delaySpeed: 2000,
  });

  return (
    <div className="w-full lgl:w-1/2 flex flex-col gap-20">
      <div className="flex flex-col gap-5">
        <h4 className=" text-lg font-normal">WELCOME TO MY WORLD</h4>
        <h1 className="text-6xl font-bold text-white">
          Hi, I'm <span className="text-designColor capitalize">Jared Ongeri</span>
        </h1>
        <h2 className="text-4xl font-bold text-white">
          A <span>{text}</span>
          <Cursor
            cursorBlinking="false"
            cursorStyle="|"
            cursorColor="#ff014f"
          />
        </h2>
        <p className="text-base font-bodyFont leading-6 tracking-wide">
          I am a dedicated Risk Surveyor with expertise in Project Management, Enterprise All-Risk Management, 
          Risk Profiling, and conducting detailed risk surveys. With experience at Heritage Insurance, I provide 
          actionable recommendations for risk improvements, ensuring business continuity and enhancing clients' safety practices.
          Previously, as a Site Quality Engineer-Project Management at Edermann Property Limited, I strengthened my skills in construction 
          site management, OSHA compliance, and all-risk management. With a strong foundation in civil engineering, 
          expertise in CAD software, BIM workflows, and project management tools, I possess over 3 years of field experience 
          in the engineering and insurance sectors, where I manage risks, improve processes, and ensure project success.
        </p>
      </div>
      {/* Media */}
      <Media />
    </div>
  );
}

export default LeftBanner;
