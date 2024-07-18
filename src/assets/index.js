import logo from "./images/logo.png";
import projectOne from "./images/projects/projectOne.jpg";
import projectTwo from "./images/projects/projectTwo.jpg";
import projectThree from "./images/projects/projectThree.jpeg";
import testimonialOne from "./images/testmonial/testimonialOne.png";
import testimonialTwo from "./images/testmonial/testimonialTwo.png";
import quote from "./images/testmonial/quote.png"
import contactImg from "./images/contact/contactImg.png"
import jaredImg from "./images/jared.jpeg"

import slide1 from "./images/slides/image1.png";
import slide2 from "./images/slides/image2.png";
import slide3 from "./images/slides/image3.png";
import slide4 from "./images/slides/image4.png";
import slide5 from "./images/slides/image5.png";
import slide6 from "./images/slides/image6.png";

// Import images from slideshow folder dynamically
function importAll(r) {
  let images = {};
  r.keys().forEach((key, index) => {
    images[key.replace("./", "")] = r(key).default;
  });
  return images;
}

const slideshowImages = importAll(require.context("./images/slides", false, /\.(png|jpe?g|svg)$/));


export {
  logo,
  jaredImg,
  projectOne,
  projectTwo,
  projectThree,
  testimonialOne,
  testimonialTwo,
  quote,
  contactImg,
  slideshowImages,
  slide1,slide2,slide3,slide4,slide5,slide6
};
