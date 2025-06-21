import React, { useState } from 'react';
import kafilaLogo from '../assets/kafilalogo.png';

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="fixed w-full z-50 bg-transparent">
      <div className="px-4 sm:px-6 md:px-8 py-4 sm:py-6">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center">
            <div className="text-black">
              <div className="relative">
                <div className="flex flex-col items-center">
                  <img 
                    src={kafilaLogo} 
                    alt="Kafila Adventures Logo" 
                    className="w-[60px] h-[75px] sm:w-[70px] sm:h-[87px] md:w-[80px] md:h-[100px] ml-[20px] sm:ml-[30px] md:ml-[50px] brightness-0"
                  />
                  <div className="text-center mt-1 sm:mt-2 text-xs sm:text-sm font-bold tracking-wider">
                    {/* Optional text */}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center">
            <div className="flex items-center space-x-10">
              <a href="/" className="text-black hover:text-gray-500 text-lg font-normal transition-colors">
                Home
              </a>
              <a href="/about" className="text-black hover:text-gray-500 text-lg font-normal transition-colors">
                About
              </a>
              {/* <a href="#" className="text-black hover:text-gray-500 text-lg font-normal transition-colors">
                Gallery
              </a> */}
              {/* <div className="relative">
                <button
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                  className="text-black hover:text-gray-500 text-lg font-normal transition-colors flex items-center"
                >
                  Adventures
                  <svg 
                    className="ml-1 h-4 w-4" 
                    fill="none" 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth="2" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                  >
                    <path d="M19 9l-7 7-7-7"></path>
                  </svg>
                </button>
              </div> */}
              <a href="/Contactus" className="text-black hover:text-gray-500 text-lg font-normal transition-colors">
                Contact Us
              </a>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-black hover:text-gray-500 focus:outline-none"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isMobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`md:hidden fixed top-0 left-0 h-full w-64 bg-white shadow-lg transform transition-transform duration-300 ease-in-out ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'} z-40`}>
          <div className="px-4 pt-16 pb-3 space-y-3">
            <a 
              href="/" 
              className="block text-black hover:text-gray-500 text-base font-normal py-2 transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Home
            </a>
            <a 
              href="/about" 
              className="block text-black hover:text-gray-500 text-base font-normal py-2 transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              About
            </a>
            <a 
              href="/Contactus" 
              className="block text-black hover:text-gray-500 text-base font-normal py-2 transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Contact Us
            </a>
          </div>
        </div>

        {/* Overlay for mobile menu */}
        {isMobileMenuOpen && (
          <div 
            className="md:hidden fixed inset-0 bg-black bg-opacity-50 z-30"
            onClick={() => setIsMobileMenuOpen(false)}
          ></div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;