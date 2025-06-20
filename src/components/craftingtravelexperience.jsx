import React, { useEffect, useRef, useState } from 'react';
import group1 from '../assets/Extras/About-us-group.jpg'

const CraftingTravelExperiences = () => {
  const [isInView, setIsInView] = useState(false);
  const sectionRef = useRef(null);
  
  // Intersection Observer for triggering animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    
    return () => observer.disconnect();
  }, []);
  
  return (
    <section 
      ref={sectionRef}
      className="py-24 px-8 bg-white"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Images Section */}
          <div className="space-y-4">
            {/* Top Image */}
            <div 
              className={`relative transition-all duration-700 ease-out ${
                isInView 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-10'
              }`}
              style={{ 
                transitionDelay: isInView ? '200ms' : '0ms' 
              }}
            >
              <img 
                src={group1} 
                alt="Mountain landscape with river"
                className="w-full rounded-xl shadow-lg transform hover:scale-105 transition-transform duration-500"
              />
            </div>
            
            {/* Bottom Image - Animated Translation */}
            <div 
              className={`relative transition-all duration-700 ease-out ${
                isInView 
                  ? 'opacity-100 translate-y-0 lg:translate-x-24' 
                  : 'opacity-0 translate-y-10 lg:translate-x-0'
              }`}
              style={{ 
                transitionDelay: isInView ? '400ms' : '0ms' 
              }}
            >
              <img 
                src="/api/placeholder/800/400" 
                alt="Colorful waterfront houses in Copenhagen"
                className="w-full rounded-xl shadow-lg transform hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>
          
          {/* Content Section */}
          <div className="space-y-8">
            <h2 
              className={`text-5xl lg:text-6xl font-normal text-gray-900 leading-tight transition-all duration-700 ease-out ${
                isInView 
                  ? 'opacity-100 translate-x-0' 
                  : 'opacity-0 -translate-x-10'
              }`}
              style={{ 
                transitionDelay: isInView ? '600ms' : '0ms' 
              }}
            >
              Crafting travel<br />experiences
            </h2>
            
            <p 
              className={`text-lg text-gray-700 leading-relaxed max-w-lg transition-all duration-700 ease-out ${
                isInView 
                  ? 'opacity-100 translate-x-0' 
                  : 'opacity-0 -translate-x-10'
              }`}
              style={{ 
                transitionDelay: isInView ? '800ms' : '0ms' 
              }}
            >
              We are passionate about crafting extraordinary travel experiences that leave a lasting impact. With years of expertise, we have honed the art of live curating unique journeys that blend adventure, culture, and sustainability. Our mission is to connect travelers with the world's wonders while preserving its beauty for generations to come.
            </p>
            
            <button 
              className={`inline-flex items-center px-8 py-3 bg-black text-white rounded-full hover:bg-gray-800 transition-all duration-300 group ${
                isInView 
                  ? 'opacity-100 translate-x-0' 
                  : 'opacity-0 -translate-x-10'
              }`}
              style={{ 
                transitionDelay: isInView ? '1000ms' : '0ms' 
              }}
            >
              <span>Explore Now</span>
              <svg xmlns="http://www.w3.org/2000/svg" 
                   className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" 
                   viewBox="0 0 20 20" 
                   fill="currentColor">
                <path fillRule="evenodd" 
                      d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" 
                      clipRule="evenodd" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CraftingTravelExperiences;