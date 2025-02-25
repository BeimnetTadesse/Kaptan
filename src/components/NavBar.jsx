import React, { useState, useEffect } from "react";
import { Link as ScrollLink } from "react-scroll"; // Smooth scrolling
import { Link as RouterLink, useLocation } from "react-router-dom"; // Page navigation
import logo from "../assets/logo.png";
import { FaXmark, FaBars } from "react-icons/fa6";

function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 80);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { link: "Home", path: "home" },
    { link: "Services", path: "services" },
    { link: "About", path: "about" },
    { link: "Blog", path: "blog" },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full pt-5 z-50 transition-all duration-300 ${
          isSticky ? "bg-white shadow-md py-3" : "bg-transparent py-3"
        }`}
      >
        <nav className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16 flex justify-between items-center">
          {/* Logo */}
          <RouterLink to="/" className="flex items-center space-x-3">
            <img src={logo} alt="Logo" className="w-10" />
            <span className="text-brandPrimary text-xl font-semibold">
              KAPTAN
            </span>
          </RouterLink>

          {/* Desktop Navigation */}
          <ul className="hidden md:flex space-x-10">
            {navItems.map(({ link, path }) => (
              <li key={path}>
                {location.pathname === "/" ? (
                  <ScrollLink
                    to={path}
                    smooth={true}
                    duration={800}
                    offset={-70}
                    className="cursor-pointer text-gray-900 hover:text-brandPrimary transition"
                  >
                    {link}
                  </ScrollLink>
                ) : (
                  <RouterLink
                    to={`/#${path}`}
                    className="text-gray-900 hover:text-brandPrimary transition"
                  >
                    {link}
                  </RouterLink>
                )}
              </li>
            ))}
          </ul>

          {/* Contact Us (Navigates to Separate Page) */}
          <div className="hidden md:flex space-x-6">
            <RouterLink to="/contact">
              <button className="bg-brandPrimary text-white py-2 px-4 rounded-lg hover:bg-neutralDGrey transition">
                Contact Us
              </button>
            </RouterLink>
          </div>

          {/* Mobile Menu Button */}
          <button onClick={toggleMenu} className="md:hidden">
            {isMenuOpen ? <FaXmark className="h-6 w-6" /> : <FaBars className="h-6 w-6" />}
          </button>
        </nav>
      </header>

      {/* Mobile Menu & Partial Backdrop */}
      {isMenuOpen && (
        <>
          {/* Backdrop only for the menu area */}
          <div className="fixed top-16 left-0 w-full h-[200px] bg-white shadow-lg z-40"></div>

          {/* Mobile Menu */}
          <div className="md:hidden bg-white fixed top-16 left-0 right-0 py-4 px-6 shadow-lg z-50">
            <ul className="flex flex-col space-y-4">
              {navItems.map(({ link, path }) => (
                <li key={path}>
                  {location.pathname === "/" ? (
                    <ScrollLink
                      to={path}
                      smooth={true}
                      duration={800}
                      offset={-70}
                      className="cursor-pointer text-gray-900 hover:text-brandPrimary block"
                      onClick={toggleMenu}
                    >
                      {link}
                    </ScrollLink>
                  ) : (
                    <RouterLink
                      to={`/#${path}`}
                      className="text-gray-900 hover:text-brandPrimary block"
                      onClick={toggleMenu}
                    >
                      {link}
                    </RouterLink>
                  )}
                </li>
              ))}
              <li>
                <RouterLink
                  to="/contact"
                  className="text-gray-900 hover:text-brandPrimary block"
                  onClick={toggleMenu}
                >
                  Contact Us
                </RouterLink>
              </li>
            </ul>
          </div>
        </>
      )}

      {/* Add space below navbar */}
      <div className="pt-20"></div>
    </>
  );
}

export default NavBar;
