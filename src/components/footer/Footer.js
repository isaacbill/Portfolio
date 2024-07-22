import React from 'react';
import { FaFacebookF, FaLinkedinIn, FaWhatsapp } from "react-icons/fa";
import { logo } from "../../assets/index";
import { Link } from 'react-router-dom';

const Footer = () => {
  const handleExternalRedirect = (url) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="w-full py-20 h-auto border-b-[1px] border-b-black grid grid-cols-1 md:grid-cols-2 lgl:grid-cols-4 gap-8">
      <div className="w-full h-full flex flex-col gap-8">
        <img className="w-100 h-80" src={logo} alt="logo" />
        <div className="flex gap-4">
          <a href='https://www.facebook.com/Jared.Ongeri.Eng' target="_blank" rel="noopener noreferrer">
            <span className="bannerIcon">
              <FaFacebookF />
            </span>
          </a>
          <a href='https://wa.me/+254701991654' target="_blank" rel="noopener noreferrer">
            <span className="bannerIcon">
              <FaWhatsapp />
            </span>
          </a>
          <a href='https://www.linkedin.com/in/jared-ongeri-52970a254' target="_blank" rel="noopener noreferrer">
            <span className="bannerIcon">
              <FaLinkedinIn />
            </span>
          </a>
        </div>
      </div>
      <div className="w-full h-full">
        <h3 className="text-xl uppercase text-designColor tracking-wider">
          Quick Links
        </h3>
        <ul className="flex flex-col gap-4 font-titleFont font-medium py-6 overflow-hidden">
          <li>
            <Link to='/'>
              <span className="w-full text-lg relative hover:text-designColor duration-300 group cursor-pointer">
                About
                <span className="w-full h-[1px] bg-designColor inline-flex absolute left-0 -bottom-1 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300"></span>
              </span>
            </Link>
          </li>
          <li>
            <span
              className="w-full text-lg relative hover:text-designColor duration-300 group cursor-pointer"
              onClick={() => handleExternalRedirect('https://portfolio-isaac-okeyos-projects.vercel.app')}
            >
              Go to my portfolio
              <span className="w-full h-[1px] bg-designColor inline-flex absolute left-0 -bottom-1 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300"></span>
            </span>
          </li>
          <li>
            <Link to='/services'>
              <span className="w-full text-lg relative hover:text-designColor duration-300 group cursor-pointer">
                Services
                <span className="w-full h-[1px] bg-designColor inline-flex absolute left-0 -bottom-1 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300"></span>
              </span>
            </Link>
          </li>
          <li>
            <Link to='/contact'>
              <span className="w-full text-lg relative hover:text-designColor duration-300 group cursor-pointer">
                Contact
                <span className="w-full h-[1px] bg-designColor inline-flex absolute left-0 -bottom-1 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300"></span>
              </span>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
