import React, { useState, useEffect } from 'react';
import Mainimg from '../assets/Extras/MainPage.jpg';
import herobg2 from '../assets/Extras/herobg2.jpg';
import herobg3 from '../assets/Extras/herobg3.avif';

const HeroSection = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Array of hero background images
  const images = [herobg2, Mainimg, herobg3];

  // Auto-change image every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex(
        (prevIndex) => (prevIndex + 1) % images.length
      );
    }, 3000);
    return () => clearInterval(interval);
  }, [images.length]); // ✅ Added dependency to satisfy ESLint

  return (
    <div className="relative w-full min-h-screen">
      {/* Background slideshow with fade and Ken Burns effect */}
      <div className="absolute inset-0">
        {images.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ${
              index === currentImageIndex ? 'opacity-100' : 'opacity-0'
            }`}
            style={{
              backgroundImage: `url("${image}")`,
              animation:
                index === currentImageIndex
                  ? 'kentBurns 20s ease-in-out infinite alternate'
                  : 'none',
            }}
          />
        ))}

        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-40 animate-fade-in" />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 min-h-screen flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 w-full py-8 sm:py-12">
          <div className="w-full">
            {/* Main heading */}
            <h1
              className="text-white text-center font-extrabold leading-tight mb-[clamp(2rem,8vh,5rem)] mt-[clamp(5%,10%,15%)]"
              style={{
                fontSize: 'clamp(1.75rem, 6vw, 4rem)',
                letterSpacing: '-1px',
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

            {/* Subheading */}
            <div className="w-full mt-[clamp(2rem,8vh,8rem)] flex flex-col lg:flex-row justify-between items-center lg:items-end gap-8 lg:gap-4">
              <p
                className="text-white text-center lg:text-left lg:max-w-[40%] opacity-0 translate-x-[-50px] animate-[slide-right-fade_0.8s_ease-out_1s_forwards] text-sm sm:text-base font-light leading-relaxed"
              >
                Unlock the doors to diverse cultures, awe-inspiring
                <br className="hidden sm:block" />
                landscapes, and thrilling adventures with us.
              </p>

              {/* Explore Now Button (optional) */}
              {/* <button className="group inline-flex items-center bg-transparent border-2 border-white text-white transition-all duration-300 hover:bg-white hover:text-black opacity-0 translate-y-[50px] animate-[slide-up-fade_0.8s_ease-out_1.2s_forwards] px-6 py-3 rounded-full text-sm sm:text-base">
                Explore Now
                <svg
                  className="ml-3 transform transition-transform duration-300 group-hover:translate-x-1"
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

      {/* Animations */}
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

        /* Mobile tweaks */
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
