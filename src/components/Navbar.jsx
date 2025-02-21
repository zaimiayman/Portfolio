import React, { useEffect, useState, useCallback, useRef } from "react";
import img from "../assets/Light.png";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null);

  const handleScroll = useCallback(() => {
    setIsScrolled(window.scrollY > 80);
  }, []);

  const toggleMenu = useCallback(() => {
    setIsMenuOpen((prev) => !prev);
  }, []);

  const closeMenu = useCallback(() => {
    setIsMenuOpen(false);
  }, []);

  // Handle scroll and click outside for mobile menu
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        closeMenu();
      }
    };

    if (isMenuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
      window.addEventListener("scroll", closeMenu);
    }

    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener("mousedown", handleClickOutside);
      window.removeEventListener("scroll", closeMenu);
    };
  }, [handleScroll, isMenuOpen, closeMenu]);

  const navLinks = [
    { id: 1, text: "Home", href: "#", },
    { id: 2, text: "About", href: "#About",  },
    { id: 3, text: "Project", href: "#Projet" , },
    { id: 4, text: "Skills", href: "#Skills" , },
    { id: 5, text: "Contact", href: "#Contact" , },
  ];

  return (
    <nav
      className={`bg-white fixed w-full z-20 top-0 start-0 transition-shadow duration-300 ${
        isScrolled ? "shadow-md shadow-black/10" : ""
      }`}
      ref={menuRef}
    >
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4 md:px-6">
        {/* Logo */}
        <a
          href="/"
          className="flex items-center space-x-3 rtl:space-x-reverse focus:outline-none focus:ring-2 focus:ring-[#218873] rounded"
          aria-label="Home"
        >
          <img 
            src={img} 
            className="h-8 w-auto" 
            alt="Website Logo" 
            loading="lazy"
          />
        </a>

        <div className="flex items-center gap-4 md:gap-6 md:order-2">
          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={toggleMenu}
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 transition-colors"
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMenuOpen}
          >
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={isMenuOpen ? "M1 1l15 12M1 13l15-12" : "M1 1h15M1 7h15M1 13h15"}
              />
            </svg>
          </button>

          {/* Get Started Button */}
          <a
          href="#Contact"
            type="button"
            className="text-white bg-[#218873] hover:bg-[#17433e] focus:ring-4 focus:ring-[#218873]/50 focus:outline-none font-medium rounded-lg text-sm px-4 py-2 text-center transition-colors duration-300"
          >
            Hire Me
          </a>
        </div>

        {/* Navigation Menu */}
        <div
          className={`${
            isMenuOpen ? "block animate-fadeIn" : "hidden"
          } w-full md:flex md:w-auto md:order-1`}
          id="navbar-sticky"
        >
          <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-white md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0">
            {navLinks.map((link) => (
              <li key={link.id}>
                
                <a
                  href={link.href}
                  className="block py-2 px-3 text-gray-900 rounded md:rounded-none md:hover:text-[#218873] md:p-0 transition-colors duration-200 hover:bg-gray-100 md:hover:bg-transparent"
                  onClick={closeMenu}
                >
                  {link.text}
                </a>
              
              </li>
            ))}
          </ul>
        </div>
       
      </div>
      
    </nav>
  );
};

export default Navbar;