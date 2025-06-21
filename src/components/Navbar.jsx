import React, { useState } from 'react';
import kafilaLogo from '../assets/kafilalogo.png';

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <>
      {/* Force viewport constraints */}
      <style jsx>{`
        * {
          box-sizing: border-box;
        }
        
        body {
          overflow-x: hidden;
          margin: 0;
          padding: 0;
        }
        
        .navbar-container {
          width: 100vw;
          max-width: 100vw;
          overflow: hidden;
          position: relative;
        }
        
        .navbar-content {
          display: flex;
          justify-content: space-between;
          align-items: center;
          width: 100%;
          max-width: 100%;
          padding: 8px 2px;
          margin: 0;
          box-sizing: border-box;
        }
        
        .logo-container {
          flex-shrink: 1;
          min-width: 0;
          overflow: hidden;
        }
        
        .hamburger-container {
          flex-shrink: 0;
          width: 18px;
          height: 18px;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        
        @media (min-width: 640px) {
          .navbar-content {
            padding: 16px 16px;
          }
        }
        
        @media (min-width: 1024px) {
          .navbar-content {
            padding: 24px 32px;
          }
          
          .hamburger-container {
            display: none;
          }
        }
      `}</style>
      
      <nav className="fixed w-full z-50 bg-transparent">
        <div className="navbar-container">
          <div className="navbar-content">
            {/* Logo */}
            <div className="logo-container">
              <img 
                src={kafilaLogo} 
                alt="Kafila Adventures Logo" 
                className="w-[80px] h-[25px] sm:w-[45px] sm:h-[56px] md:w-[60px] md:h-[75px] lg:w-[80px] lg:h-[100px] brightness-0 ml-[15px] mt-[15px]"
                style={{ display: 'block', maxWidth: '100%', height: 'auto' }}
              />
            </div>

            {/* Desktop Navigation Links */}
            <div className="hidden lg:flex items-center">
              <div className="flex items-center space-x-10">
                <a href="/" className="text-black hover:text-gray-500 text-lg font-normal transition-colors">
                  Home
                </a>
                <a href="/about" className="text-black hover:text-gray-500 text-lg font-normal transition-colors">
                  About
                </a>
                <a href="/Contactus" className="text-black hover:text-gray-500 text-lg font-normal transition-colors">
                  Contact Us
                </a>
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="hamburger-container lg:hidden">
              <button 
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="text-black hover:text-gray-500 focus:outline-none relative z-50"
                style={{ 
                  width: '20px', 
                  height: '20px', 
                  padding: '0',
                  margin: '0',
                  border: 'none',
                  background: 'transparent',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}
              >
                <svg 
                  width="40" 
                  height="40" 
                  fill="none" 
                  viewBox="0 0 18 18" 
                  stroke="currentColor" 
                  strokeWidth="3"
                  style={{ display: 'block' }}
                >
                  {isMobileMenuOpen ? (
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                  )}
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`lg:hidden fixed top-0 right-0 h-full w-full max-w-xs bg-white shadow-lg transform transition-transform duration-300 ease-in-out ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'} z-40`}>
          <div className="px-6 pt-20 pb-6 space-y-4">
            <a 
              href="/" 
              className="block text-black hover:text-gray-500 text-lg font-normal py-3 transition-colors border-b border-gray-100"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Home
            </a>
            <a 
              href="/about" 
              className="block text-black hover:text-gray-500 text-lg font-normal py-3 transition-colors border-b border-gray-100"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              About
            </a>
            <a 
              href="/Contactus" 
              className="block text-black hover:text-gray-500 text-lg font-normal py-3 transition-colors border-b border-gray-100"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Contact Us
            </a>
          </div>
        </div>

        {/* Overlay for mobile menu */}
        {isMobileMenuOpen && (
          <div 
            className="lg:hidden fixed inset-0 bg-black bg-opacity-50 z-30"
            onClick={() => setIsMobileMenuOpen(false)}
          ></div>
        )}
      </nav>
    </>
  );
};

export default Navbar;