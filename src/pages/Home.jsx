// Home.js
import React from 'react';
import HeroSection from '../components/HeroSection';
import StatisticSection from '../components/stats';
import UpcomingAdventuresSection from '../components/upcomingadventures';
import BeliefSection from '../components/Beliefsection';

const Home = () => {
  return (
    <div>
      <HeroSection />
      <StatisticSection/>
      <UpcomingAdventuresSection/>
      <BeliefSection/>
      
      {/* Travel Testimonial Section */}
      <div className="w-full relative">
        {/* Video Background Section */}
        <div className="relative w-full h-64 overflow-hidden rounded-2xl">
          {/* Transparent overlay to catch clicks */}
          <div className="absolute inset-0 z-10" onClick={(e) => e.preventDefault()}></div>
          
          <iframe 
            className="absolute top-1/2 left-1/2 w-full h-full max-w-none rounded-2xl"
            src="https://www.youtube.com/embed/278IRQ6HSi4?autoplay=1&loop=1&mute=1&playlist=278IRQ6HSi4&controls=0&modestbranding=1&showinfo=0&playsinline=1&enablejsapi=1&start=0&end=25&iv_load_policy=3&rel=0"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            style={{ 
              pointerEvents: 'none',
              transform: 'translate(-50%, -50%)',
              width: '400%',
              height: '400%',
              borderRadius: '1rem' // 16px border radius - same as rounded-2xl
            }}
            title="Beautiful drone shot - Cinematic FPV on an empty beach"
          />
        </div>
        
        {/* Content Section */}
        <div className="w-full bg-white min-h-96 py-16 px-4">
          <div className="max-w-2xl mx-auto text-center">
            {/* Testimonials from travelers */}
            <h2 className="text-4xl font-serif text-black mb-4">
              Testimonials
            </h2>
            <p className="text-4xl font-serif text-black mb-12">
              from travelers
            </p>
            
            {/* Ready to Embark section */}
            <h3 className="text-4xl font-serif text-black mb-2">
              Ready to Embark
            </h3>
            <p className="text-4xl font-serif text-black mb-12">
              on a new Journey?
            </p>
            
            {/* Call to action text */}
            <p className="text-center text-black text-base max-w-3xl mx-auto leading-relaxed">
              Don't let your dream getaway remain a dream any longer. Take action now and let us craft your next unforgettable adventure. Join us in turning your travel fantasies into unforgettable realities.
            </p>
          </div>
        </div>
      </div>
      
      {/* Other sections will go here */}
      
    </div>
  );
};

export default Home;