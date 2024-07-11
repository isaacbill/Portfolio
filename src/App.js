import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import FooterBottom from "./components/footer/FooterBottom";
import Home from "./pages/Home";
import Features from "./pages/Features";
import Projects from "./pages/Projects";
import Resume from "./pages/Resume";
import Testimonial from "./pages/Testimonial";
import Contact from "./pages/Contact";

function App() {
  return (
    <Router>
      <div className="w-full h-auto bg-bodyColor text-lightText px-4">
        <Navbar />
        <div className="max-w-screen-xl mx-auto">
          <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/features" element={<Features />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/resume" element={<Resume />} />
            <Route path="/testimonial" element={<Testimonial />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        <Footer />
        <FooterBottom />
        </div>
      </div>
    </Router>
  );
}

export default App;
