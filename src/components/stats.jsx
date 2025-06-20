import React, { useState, useEffect, useRef } from 'react';

const StatisticSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [counts, setCounts] = useState({
    adventures: 0,
    explorers: 0,
    destinations: 0
  });
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.5 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (observer) {
        observer.disconnect();
      }
    };
  }, []);

  useEffect(() => {
    if (isVisible) {
      animateValue('adventures', 0, 2000, 2000);
      animateValue('explorers', 0, 10000, 2000);
      animateValue('destinations', 0, 100, 2000);
    }
  }, [isVisible]);

  const animateValue = (key, start, end, duration) => {
    let startTimestamp = null;
    
    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
  
      setCounts(prevCounts => ({
        ...prevCounts,
        [key]: Math.floor(progress * (end - start) + start)
      }));
      
      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };
    
    window.requestAnimationFrame(step);
  };

  const formatNumber = (number, suffix = '') => {
    if (suffix === '+' && number >= 1000) {
      return `${(number / 1000).toFixed(1)}K${suffix}`;
    }
    return number.toLocaleString() + suffix;
  };

  return (
    <div 
      ref={sectionRef}
      className="w-full py-20 bg-gray-50"
    >
      <div className="max-w-7xl mx-auto px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          
          {/* Adventures */}
          <div className="text-center">
            <div className="mb-8 flex justify-center">
              <div className="relative w-16 h-16 bg-blue-500 rounded-lg flex items-center justify-center">
                <svg 
                  className="w-8 h-8 text-white" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="2"
                >
                  <circle cx="12" cy="10" r="3"></circle>
                  <path d="M12 21.7C17.3 17 20 13 20 10a8 8 0 1 0-16 0c0 3 2.7 6.9 8 11.7z"></path>
                </svg>
                {/* Map/route lines */}
                <svg 
                  className="absolute inset-0 w-full h-full" 
                  viewBox="0 0 64 64" 
                  fill="none"
                >
                  <path 
                    d="M16 32 L32 24 L48 40 L48 16 L32 24" 
                    stroke="rgba(255,255,255,0.3)" 
                    strokeWidth="2" 
                    strokeLinecap="round"
                  />
                </svg>
              </div>
            </div>
            <h2 className="text-5xl font-bold text-gray-900 mb-2">
              {formatNumber(counts.adventures, '+')}
            </h2>
            <p className="text-xl text-gray-700 font-normal">Adventures</p>
          </div>

          {/* Explorers */}
          <div className="text-center">
            <div className="mb-8 flex justify-center">
              <div className="relative w-16 h-16 bg-black rounded-lg flex items-center justify-center">
                <svg 
                  className="w-9 h-9 text-white" 
                  viewBox="0 0 24 24" 
                  fill="currentColor"
                >
                  <path d="M12 14c2 0 3.5-1 3.5-3 0-2-1.5-3-3.5-3s-3.5 1-3.5 3c0 2 1.5 3 3.5 3Z"></path>
                  <path d="M12 16c-4 0-7 1.5-7 3v2h14v-2c0-1.5-3-3-7-3Z"></path>
                  <circle cx="6" cy="9" r="2"></circle>
                  <circle cx="18" cy="9" r="2"></circle>
                  <path d="M6 12c-2 0-3.5.5-3.5 1.5V15h3v-.5c0-.5.5-1 1.5-2h-1Z"></path>
                  <path d="M18 12c2 0 3.5.5 3.5 1.5V15h-3v-.5c0-.5-.5-1-1.5-2h1Z"></path>
                </svg>
              </div>
            </div>
            <h2 className="text-5xl font-bold text-gray-900 mb-2">
              {formatNumber(counts.explorers, '+')}
            </h2>
            <p className="text-xl text-gray-700 font-normal">Explorers</p>
          </div>

          {/* Destinations */}
          <div className="text-center">
            <div className="mb-8 flex justify-center">
              <div className="relative w-16 h-16 bg-red-500 rounded-lg flex items-center justify-center">
                <svg 
                  className="w-8 h-8 text-white" 
                  viewBox="0 0 24 24" 
                  fill="currentColor"
                >
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"></path>
                </svg>
              </div>
            </div>
            <h2 className="text-5xl font-bold text-gray-900 mb-2">
              {formatNumber(counts.destinations, '+')}
            </h2>
            <p className="text-xl text-gray-700 font-normal">Destinations</p>
          </div>

        </div>
      </div>
    </div>
  );
};

export default StatisticSection;