import React, { useState, useEffect } from 'react';
import Mainimg from '../assets/Extras/MainPage.jpg'
import herobg2 from '../assets/Extras/herobg2.jpg'
import herobg3 from '../assets/Extras/herobg3.avif'

const HeroSection = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  // Fixed: Properly structure the images array with actual image imports
  const images = [
    herobg2,
    Mainimg,
    herobg3
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full" style={{ minHeight: '100vh' }}>
      {/* Background Images with Ken Burns effect and slideshow */}
      <div className="absolute inset-0">
        {images.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ${
              index === currentImageIndex ? 'opacity-100' : 'opacity-0'
            }`}
            style={{
              backgroundImage: `url("${image}")`, // Fixed: Use the actual image variable
              backgroundPosition: '50% 50%',
              animation: index === currentImageIndex ? 'kentBurns 20s ease-in-out infinite alternate' : 'none'
            }}
          />
        ))}
        
        {/* Overlay with fade in */}
        <div 
          className="absolute inset-0 animate-fade-in" 
          style={{ backgroundColor: 'rgba(0, 0, 0, 0.4)' }}
        />
      </div>

      {/* Content Container */}
      <div className="relative z-10 min-h-screen flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 w-full py-8 sm:py-12">
          <div className="relative w-full">
            {/* Main heading - Centered with staggered line animation */}
            <h1 
              className="text-white text-center"
              style={{ 
                fontSize: 'clamp(1.75rem, 6vw, 4rem)',
                lineHeight: '1.1',
                fontWeight: '800',
                letterSpacing: '-1px',
                marginBottom: 'clamp(2rem, 8vh, 5rem)',
                marginTop: 'clamp(5%, 10%, 15%)'
              }}
            >
              <span className="block opacity-0 translate-y-8 animate-[slide-up-fade_0.8s_ease-out_0.2s_forwards]">
                Embark on journeys
              </span>
              <span className="block opacity-0 translate-y-8 animate-[slide-up-fade_0.8s_ease-out_0.4s_forwards]">
                not just destinations
              </span>
              <span className="block opacity-0 translate-y-8 animate-[slide-up-fade_0.8s_ease-out_0.6s_forwards]">
                with our adventures.
              </span>
            </h1>
            
            {/* Bottom section with subheading and button */}
            <div className="relative w-full" style={{ marginTop: 'clamp(2rem, 8vh, 8rem)' }}>
              <div className="flex flex-col lg:flex-row justify-between items-center lg:items-end gap-8 lg:gap-4">
                {/* Subheading - Bottom left with slide in from left */}
                <p 
                  className="text-white opacity-0 translate-x-[-50px] animate-[slide-right-fade_0.8s_ease-out_1s_forwards] text-center lg:text-left"
                  style={{ 
                    fontSize: 'clamp(0.875rem, 1.5vw, 1.125rem)',
                    lineHeight: '1.6',
                    fontWeight: '300',
                    maxWidth: '100%',
                    width: '100%',
                    ['@media (min-width: 1024px)']: {
                      maxWidth: '40%'
                    }
                  }}
                >
                  Unlock the doors to diverse cultures, awe-inspiring<br className="hidden sm:block" />
                  landscapes, and thrilling adventures with us.
                </p>
                
                {/* Button - Bottom right with slide in from bottom */}
                {/* <button 
                  className="group inline-flex items-center bg-transparent border-2 border-white text-white transition-all duration-300 hover:bg-white hover:text-black opacity-0 translate-y-[50px] animate-[slide-up-fade_0.8s_ease-out_1.2s_forwards]"
                  style={{ 
                    padding: 'clamp(0.625rem, 2vw, 0.75rem) clamp(1.5rem, 3vw, 2.5rem)',
                    fontSize: 'clamp(0.875rem, 1.5vw, 1rem)',
                    borderRadius: '50px',
                    fontWeight: '400',
                    letterSpacing: '0.5px'
                  }}
                >
                  Explore Now
                  <svg 
                    className="ml-3 transform transition-transform duration-300 group-hover:translate-x-1" 
                    style={{ 
                      width: 'clamp(16px, 2.5vw, 20px)', 
                      height: 'clamp(16px, 2.5vw, 20px)' 
                    }}
                    fill="none" 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth="2" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                  >
                    <path d="M9 5l7 7-7 7"></path>
                  </svg>
                </button> */}
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes kentBurns {
          0% {
            transform: scale(1);
          }
          100% {
            transform: scale(1.1);
          }
        }

        @keyframes slide-up-fade {
          0% {
            opacity: 0;
            transform: translateY(30px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slide-right-fade {
          0% {
            opacity: 0;
            transform: translateX(-50px);
          }
          100% {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes fade-in {
          0% {
            opacity: 0;
          }
          100% {
            opacity: 1;
          }
        }

        .animate-fade-in {
          animation: fade-in 1s ease-in forwards;
        }

        /* Mobile-specific adjustments */
        @media (max-width: 640px) {
          h1 span {
            line-height: 1.2;
          }
        }
      `}</style>
    </div>
  );
};

export default HeroSection;