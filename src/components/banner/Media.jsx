import React from 'react';
import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";
import { SiAutodeskrevit,SiAutocad,SiArchicad} from "react-icons/si";
import { MdEngineering } from "react-icons/md";

const Media = () => {
  return (
    <div className="flex flex-col xl:flex-row gap-6 lgl:gap-0 justify-between">
      <div>
        <h2 className="text-base uppercase font-titleFont mb-4">
          Find me in
        </h2>
        <div className="flex gap-4">
          <a href="https://www.facebook.com/Jared.Ongeri.Eng">
            <span className="bannerIcon">
              <FaFacebookF />
            </span>
          </a>
          <a href="https://www.twitter.com">
            <span className="bannerIcon">
              <FaTwitter />
            </span>
          </a>
          <a href="https://www.linkedin.com/in/jared-ongeri-52970a254">
            <span className="bannerIcon">
              <FaLinkedinIn />
            </span>
          </a>
        </div>
      </div>
      <div>
        <h2 className="text-base uppercase font-titleFont mb-4">
          BEST SKILL ON
        </h2>
        <div className="flex gap-4">
          <span className="bannerIcon">
            <SiArchicad />
          </span>
          <span className="bannerIcon">
            <SiAutodeskrevit />
          </span>
          <span className="bannerIcon">
            <SiAutocad />
          </span>
          <span className="bannerIcon">
            <MdEngineering />
          </span>
        </div>
      </div>
    </div>
  );
};

export default Media;
