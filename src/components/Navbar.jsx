import React, { useState, useRef, useEffect } from 'react';
import kafilaLogo from '../assets/kafilalogo.png';

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [hoveredSubmenu, setHoveredSubmenu] = useState(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobileAdventureOpen, setIsMobileAdventureOpen] = useState(false);
  const [isMobileBackpackingOpen, setIsMobileBackpackingOpen] = useState(false);
  const [isMobileHimalayanOpen, setIsMobileHimalayanOpen] = useState(false);
  const [isMobileMonsoonOpen, setIsMobileMonsoonOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
        setHoveredSubmenu(null);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const linkClasses = `text-lg transition-colors duration-300 ${
    scrolled ? 'text-black hover:text-gray-500' : 'text-white hover:text-gray-300'
  }`;

  return (
    <nav className={`fixed w-full z-50 ${scrolled ? 'bg-white shadow-md' : 'bg-transparent'}`}>
      <div className="flex items-center justify-between px-4 py-2 lg:px-8">
        {/* Logo */}
        <div>
          <img
            src={kafilaLogo}
            alt="Kafila Adventures Logo"
            className="w-[50px] h-[70px] sm:w-[55px] sm:h-[65px] md:w-[70px] md:h-[85px] lg:w-[80px] lg:h-[100px] brightness-0"
          />
        </div>

        {/* Desktop Links */}
        <div className="hidden lg:flex items-center space-x-10">
          <a href="/" className={linkClasses}>Home</a>
          <a href="/about" className={linkClasses}>About</a>

          {/* Adventures Dropdown */}
          <div className="relative" ref={dropdownRef}>
            <button
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className={`${linkClasses} flex items-center space-x-1`}
            >
              <span>Adventures</span>
              <svg
                className={`w-4 h-4 transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`}
                fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            {isDropdownOpen && (
              <div className="absolute top-full left-0 mt-2 w-72 max-w-[90vw] bg-white rounded-lg shadow-xl border border-gray-200 py-2 z-50">

                {/* Backpacking Trips */}
                <div>
                  <button
                    onClick={() => setHoveredSubmenu(hoveredSubmenu === 'backpacking' ? null : 'backpacking')}
                    className="w-full flex justify-between px-4 py-3 text-gray-700 hover:bg-gray-50"
                  >
                    <span>Backpacking Trips</span>
                    <svg
                      className={`w-4 h-4 transition-transform ${hoveredSubmenu === 'backpacking' ? 'rotate-180' : ''}`}
                      fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>

                  {hoveredSubmenu === 'backpacking' && (
                    <div className="px-4 pb-2 space-y-2">
                      {[
                        { name: 'Bir Billing', path: 'bir' },
                        { name: 'Goa Backpacking', path: 'goa' },
                        { name: 'Hampi Badami', path: 'hampi' },
                        { name: 'Pondicherry', path: 'pondicherry' },
                      ]
                        .sort((a, b) => a.name.localeCompare(b.name))
                        .map(({ name, path }) => (
                          <a
                            key={path}
                            href={`/${path}`}
                            onClick={() => { setIsDropdownOpen(false); setHoveredSubmenu(null); }}
                            className="block px-3 py-1.5 text-sm text-gray-600 hover:bg-white hover:text-gray-900 rounded"
                          >
                            {name}
                          </a>
                        ))}
                    </div>
                  )}
                </div>

                <div className="h-px bg-gray-200 mx-2 my-1"></div>

                {/* Himalayan Treks */}
                <div>
                  <button
                    onClick={() => setHoveredSubmenu(hoveredSubmenu === 'himalayan' ? null : 'himalayan')}
                    className="w-full flex justify-between px-4 py-3 text-gray-700 hover:bg-gray-50"
                  >
                    <span>Himalayan Treks</span>
                    <svg
                      className={`w-4 h-4 transition-transform ${hoveredSubmenu === 'himalayan' ? 'rotate-180' : ''}`}
                      fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  {hoveredSubmenu === 'himalayan' && (
                    <div className="px-4 pb-2 space-y-2">
                      {[
                        { name: 'Brahmatal', path: 'brahmatal' },
                        { name: 'Kedarnath', path: 'kedarnath' },
                        { name: 'Kedarkantha', path: 'kedarkantha' },
                        { name: 'Kuari Pass', path: 'kuaripass' },
                        { name: 'Leh Ladakh', path: 'ladakh' },
                      ]
                        .sort((a, b) => a.name.localeCompare(b.name))
                        .map(({ name, path }) => (
                          <a
                            key={path}
                            href={`/${path}`}
                            onClick={() => { setIsDropdownOpen(false); setHoveredSubmenu(null); }}
                            className="block px-3 py-1.5 text-sm text-gray-600 hover:bg-white hover:text-gray-900 rounded"
                          >
                            {name}
                          </a>
                        ))}
                    </div>
                  )}
                </div>

                <div className="h-px bg-gray-200 mx-2 my-1"></div>

                {/* Monsoon Treks */}
                <div>
                  <button
                    onClick={() => setHoveredSubmenu(hoveredSubmenu === 'monsoon' ? null : 'monsoon')}
                    className="w-full flex justify-between px-4 py-3 text-gray-700 hover:bg-gray-50"
                  >
                    <span>Monsoon Treks</span>
                    <svg
                      className={`w-4 h-4 transition-transform ${hoveredSubmenu === 'monsoon' ? 'rotate-180' : ''}`}
                      fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  {hoveredSubmenu === 'monsoon' && (
                    <div className="px-4 pb-2 space-y-2">
                      {[
                        'aadrai',
                        'andharban',
                        'devkund',
                        'kalu',
                        'nanemachi',
                        'visapur',
                        'water-rappelling',
                      ]
                        .sort()
                        .map((path) => (
                          <a
                            key={path}
                            href={`/${path}`}
                            onClick={() => { setIsDropdownOpen(false); setHoveredSubmenu(null); }}
                            className="block px-3 py-1.5 text-sm text-gray-600 hover:bg-white hover:text-gray-900 rounded"
                          >
                            {path === 'water-rappelling'
                              ? 'Waterfall Rappelling'
                              : path.replace(/-/g, ' ').replace(/\b\w/g, (l) => l.toUpperCase()) + ' Trek'}
                          </a>
                        ))}
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>

          <a href="/Contactus" className={linkClasses}>Contact Us</a>
        </div>

        {/* Mobile Menu Button */}
        <div className="lg:hidden">
          <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="text-black focus:outline-none relative z-50">
            <svg width="40" height="40" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3">
              {isMobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden fixed top-0 right-0 h-full w-full max-w-xs bg-white shadow-lg transform transition-transform duration-300 ease-in-out ${
          isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        } z-40`}
      >
        <div className="px-6 pt-20 pb-6 space-y-4 overflow-y-auto">
          {[{ label: 'Home', href: '/' }, { label: 'About', href: '/about' }, { label: 'Contact Us', href: '/Contactus' }].map(
            (link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="block text-black hover:text-gray-500 text-lg py-3 border-b border-gray-100"
              >
                {link.label}
              </a>
            )
          )}

          {/* Adventures */}
          <div className="border-b border-gray-100">
            <button
              onClick={() => setIsMobileAdventureOpen(!isMobileAdventureOpen)}
              className="w-full flex justify-between text-black text-lg py-3"
            >
              <span>Adventures</span>
              <svg
                className={`w-4 h-4 transition-transform ${isMobileAdventureOpen ? 'rotate-180' : ''}`}
                fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            {isMobileAdventureOpen && (
              <div className="pl-4 pb-2 space-y-3">

                {/* Backpacking */}
                <div>
                  <button
                    onClick={() => setIsMobileBackpackingOpen(!isMobileBackpackingOpen)}
                    className="w-full flex justify-between text-gray-700 py-2"
                  >
                    <span>Backpacking Trips</span>
                    <svg
                      className={`w-3 h-3 transition-transform ${isMobileBackpackingOpen ? 'rotate-180' : ''}`}
                      fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>

                  {isMobileBackpackingOpen && (
                    <div className="pl-4 mt-1 space-y-1">
                      {['bir', 'goa', 'hampi', 'pondicherry']
                        .sort()
                        .map((path) => (
                          <a
                            key={path}
                            href={`/${path}`}
                            onClick={() => setIsMobileMenuOpen(false)}
                            className="block text-gray-600 hover:text-gray-800 text-sm py-1.5"
                          >
                            {path === 'bir'
                              ? 'Bir Billing'
                              : path === 'goa'
                              ? 'Goa Backpacking'
                              : path === 'hampi'
                              ? 'Hampi Badami'
                              : 'Pondicherry'}
                          </a>
                        ))}
                    </div>
                  )}
                </div>

                {/* Himalayan Treks (updated to use name-path mapping) */}
                <div>
                  <button
                    onClick={() => setIsMobileHimalayanOpen(!isMobileHimalayanOpen)}
                    className="w-full flex justify-between text-gray-700 py-2"
                  >
                    <span>Himalayan Treks</span>
                    <svg
                      className={`w-3 h-3 transition-transform ${isMobileHimalayanOpen ? 'rotate-180' : ''}`}
                      fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>

                  {isMobileHimalayanOpen && (
                    <div className="pl-4 mt-1 space-y-1">
                      {[
                        { name: 'Brahmatal', path: 'brahmatal' },
                        { name: 'Kedarnath', path: 'kedarnath' },
                        { name: 'Kedarkantha', path: 'kedarkantha' },
                        { name: 'Kuari Pass', path: 'kuaripass' },
                        { name: 'Leh Ladakh', path: 'ladakh' },
                      ]
                        .sort((a, b) => a.name.localeCompare(b.name))
                        .map(({ name, path }) => (
                          <a
                            key={path}
                            href={`/${path}`}
                            onClick={() => {
                              setIsMobileMenuOpen(false);
                              setIsMobileAdventureOpen(false);
                              setIsMobileHimalayanOpen(false);
                            }}
                            className="block text-gray-600 hover:text-gray-800 text-sm py-1.5"
                          >
                            {name}
                          </a>
                        ))}
                    </div>
                  )}
                </div>

                {/* Monsoon Treks */}
                <div>
                  <button
                    onClick={() => setIsMobileMonsoonOpen(!isMobileMonsoonOpen)}
                    className="w-full flex justify-between text-gray-700 py-2"
                  >
                    <span>Monsoon Treks</span>
                    <svg
                      className={`w-3 h-3 transition-transform ${isMobileMonsoonOpen ? 'rotate-180' : ''}`}
                      fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>

                  {isMobileMonsoonOpen && (
                    <div className="pl-4 mt-1 space-y-1">
                      {[
                        'aadrai',
                        'andharban',
                        'devkund',
                        'kalu',
                        'nanemachi',
                        'visapur',
                        'water-rappelling',
                      ]
                        .sort()
                        .map((path) => (
                          <a
                            key={path}
                            href={`/${path}`}
                            onClick={() => {
                              setIsMobileMenuOpen(false);
                              setIsMobileAdventureOpen(false);
                              setIsMobileMonsoonOpen(false);
                            }}
                            className="block text-gray-600 hover:text-gray-800 text-sm py-1.5"
                          >
                            {path === 'water-rappelling'
                              ? 'Waterfall Rappelling'
                              : path.replace(/-/g, ' ').replace(/\b\w/g, (l) => l.toUpperCase()) + ' Trek'}
                          </a>
                        ))}
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Mobile Overlay */}
      {isMobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 bg-black bg-opacity-50 z-30" onClick={() => setIsMobileMenuOpen(false)} />
      )}
    </nav>
  );
};

export default Navbar;
