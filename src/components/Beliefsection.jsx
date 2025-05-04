import React, { useEffect, useRef, useState } from 'react';
import { User, Rocket, Leaf, Star } from 'lucide-react';

const BeliefCard = ({ icon: Icon, title, description, isBlack = false, index, isVisible }) => {
  return (
    <div 
      className={`flex items-center space-x-3 p-4 sm:p-6 md:p-8 rounded-3xl transition-all duration-500 ease-out transform hover:scale-105 hover:shadow-lg ${
        isBlack
          ? "bg-black text-white" 
          : "bg-white text-gray-800 border border-gray-800"
      }`}
      style={{ 
        borderRadius: '24px',
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateX(0)' : 'translateX(-100px)',
        transition: `all 0.6s ease-out ${index * 0.1}s`
      }}
    >
      <div 
        className={`w-6 h-6 sm:w-8 sm:h-8 rounded-full flex items-center justify-center flex-shrink-0 transition-colors duration-300 hover:bg-opacity-90 ${
          isBlack ? "bg-white" : "bg-transparent border border-gray-800"
        }`}
      >
        <Icon className={`w-6 h-6 sm:w-8 sm:h-8 ${isBlack ? 'text-gray-800' : 'text-gray-800'}`} />
      </div>
      <div className="flex-1">
        <h3 className="text-lg sm:text-xl font-medium mb-2 sm:mb-3">{title}</h3>
        <p className="text-sm sm:text-base md:text-lg leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  );
};

const BeliefSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
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

  const beliefs = [
    {
      icon: User,
      title: "Customer Centric",
      description: "Being customer-centric is the compass that guides our travel services. We prioritize our customers' needs.",
      isBlack: false
    },
    {
      icon: Leaf,
      title: "Sustainable Travel",
      description: "Committed to responsible and eco-conscious journeys, traveling the world with minimal footprints and pollutions.",
      isBlack: true
    },
    {
      icon: Rocket,
      title: "Authentic Experiences",
      description: "We deliver journeys that immerse you in unforgettable encounter with the world's diverse cultures & landscapes.",
      isBlack: false
    },
    {
      icon: Star,
      title: "Quality Guides",
      description: "Every journey will be led by knowledgeable, passionate experts who enhance your travel experience.",
      isBlack: true
    }
  ];

  return (
    <div className="w-full bg-white py-12 sm:py-16 md:py-24">

      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8" ref={sectionRef}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
          {/* Left Column */}
          <div className="order-1 lg:order-1">
            {/* Title */}
            <h1 
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium mb-8 sm:mb-12 lg:mb-16 leading-tight sm:leading-snug lg:leading-none text-gray-900"
              style={{ 
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateX(0)' : 'translateX(-60px)',
                transition: 'all 0.8s ease-out'
              }}
            >
              Our true beliefs<br />
              for your benefits
            </h1>

            {/* Paragraph */}
            <p 
              className="text-base sm:text-lg text-gray-800 leading-relaxed max-w-lg lg:mt-[300px] xl:mt-[400px]"
              style={{ 
                opacity: isVisible ? 1 : 0,
                transition: 'opacity 1s ease-out 0.3s'
              }}
            >
              Our beliefs aren't just words; they are the foundation of every adventure we offer. With high commitment to sustainability, authenticity, and customer-centricity, we ensure that every trip you take with us is valuable.
            </p>
          </div>

          {/* Right Column */}
          <div className="order-2 lg:order-2 space-y-3 sm:space-y-4">
            {beliefs.map((belief, index) => (
              <BeliefCard
                key={index}
                icon={belief.icon}
                title={belief.title}
                description={belief.description}
                isBlack={belief.isBlack}
                index={index}
                isVisible={isVisible}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BeliefSection;