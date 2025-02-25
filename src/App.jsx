import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { animateScroll as scroll, scroller } from "react-scroll";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import Services from "./components/Services";
import About from "./components/About";
import Blog from "./components/Blog";
import ContactUs from "./components/ContactUs";
import Footer from "./components/Footer";
import "./index.css";

// Scroll handler when navigating from another page
const ScrollToSection = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      scroller.scrollTo(location.hash.replace("#", ""), {
        duration: 800,
        delay: 0,
        smooth: "easeInOutQuart",
        offset: -70,
      });
    } else {
      scroll.scrollToTop();
    }
  }, [location]);

  return null;
};

export default function App() {
  return (
    <Router>
      <NavBar />
      <ScrollToSection />
      <Routes>
        {/* Main Page with sections */}
        <Route
          path="/"
          element={
            <>
              <section id="home">
                <Home />
              </section>
              <section id="services">
                <Services />
              </section>
              <section id="about">
                <About />
              </section>
              <section id="blog">
                <Blog />
              </section>
              <Footer />
            </>
          }
        />
        {/* Separate Contact Us Page */}
        <Route path="/contact" element={<ContactUs />} />
      </Routes>
    </Router>
  );
}
