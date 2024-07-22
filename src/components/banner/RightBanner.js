// RightBanner.js

import React, { useState, useEffect } from 'react';
import { slide1, slide2, slide3,slide4,slide5,slide6 } from "../../assets/index";

const RightBanner = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const images = [slide1, slide2, slide3,slide4,slide5,slide6];
  const totalImages = images.length;

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex(prevIndex =>
        prevIndex === totalImages - 1 ? 0 : prevIndex + 1
      );
    }, 3000); // Change image every 3 seconds (adjust as needed)

    return () => clearInterval(interval);
  }, [totalImages]);

  return (
    <div className="w-full lgl:w-1/2 flex justify-center items-center relative">
      <img
        className="w-[400px] h-[500px] lgl:w-[500px] lgl:h-[580px] z-10"
        src={images[currentImageIndex]}
        alt={`Slide ${currentImageIndex + 1}`}
      />
      {/* <div className="absolute bottom-0 w-[350px] h-[300px] lgl:w-[500px] lgl:h-[500px] bg-gradient-to-r from-[#1e2024] to-[#202327] shadow-shadowOne flex justify-center items-center"></div> */}
    </div>
  );
}

export default RightBanner;
