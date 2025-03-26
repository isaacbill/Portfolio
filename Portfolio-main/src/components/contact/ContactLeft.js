import React from 'react'
import { FaFacebook,FaWhatsapp, FaLinkedinIn } from "react-icons/fa";
import { BusinessCard } from "../../assets/index";

const ContactLeft = () => {
  return (
    <div className="w-full lgl:w-[35%] h-full bg-gradient-to-r from-[#1e2024] to-[#23272b] p-4 lgl:p-8 rounded-lg shadow-shadowOne flex flex-col gap-8 justify-center">
      <img
        className="w-full h-64 object-cover rounded-lg mb-2"
        src={BusinessCard}
        alt="BusinessCard"
      />
      <div className="flex flex-col gap-4">
        <h3 className="text-3xl font-bold text-white">Jared Ongeri</h3>
        <p className="text-lg font-normal text-gray-400">
          Graduate Civil Engineer
        </p>
        <p className="text-base text-gray-400 tracking-wide">
          Email or call me and lets explore how i can be of service.
        </p>
        <p className="text-base text-gray-400 flex items-center gap-2">
          Phone: <span className="text-lightText">+254 701991654</span>
        </p>
        <p className="text-base text-gray-400 flex items-center gap-2">
          Email: <span className="text-lightText">jaredongeri14@gmail.com</span>
        </p>
      </div>
      <div className="flex flex-col gap-4">
        <h2 className="text-base uppercase font-titleFont mb-4">Find me in</h2>
        <div className="flex gap-4">
          <a href='https://www.facebook.com/Jared.Ongeri.Eng' target="_blank" rel="noopener noreferrer">
          <span className="bannerIcon">
            <FaFacebook />
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
    </div>
  );
}

export default ContactLeft