import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Routes, useLocation } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import FooterBottom from "./components/footer/FooterBottom";
import Home from "./pages/Home";
import Features from "./pages/Features";
import Projects from "./pages/Projects";
import Resume from "./pages/Resume";
import Testimonial from "./pages/Testimonial";
import Contact from "./pages/Contact";
import Uploads from "./pages/Uploads";

function App() {
  // Custom hook to scroll to the top on route change
  function ScrollToTop() {
    const { pathname } = useLocation();

    useEffect(() => {
      window.scrollTo(0, 0);
    }, [pathname]);

    return null;
  }

  return (
    <Router>
      <div className="w-full h-auto bg-bodyColor text-lightText px-4">
        <Navbar />
        <div id="top" className="max-w-screen-xl mx-auto">
          {/* Include ScrollToTop component to handle scrolling */}
          <ScrollToTop />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/features" element={<Features />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/resume" element={<Resume />} />
            <Route path="/testimonial" element={<Testimonial />} />
            <Route path="/contact" element={<Contact />} />  
            <Route path="/services" element={<Uploads />} />             
          </Routes>
          <Footer />
          <FooterBottom />
          
        </div>
      </div>
    </Router>
  );
}

export default App;
