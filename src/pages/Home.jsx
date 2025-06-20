// Home.js
import React from 'react';
import HeroSection from '../components/HeroSection';
import StatisticSection from '../components/stats';
import UpcomingAdventuresSection from '../components/upcomingadventures';
import BeliefSection from '../components/Beliefsection';
import Mainimg from '../assets/Extras/Mountain Last.png'

const Home = () => {
  return (
    <div>
      <HeroSection />
      <StatisticSection/>
      <UpcomingAdventuresSection/>
      <BeliefSection/>
      
      {/* Travel Testimonial Section */}
      <div className="w-full relative">
       
        
        {/* Content Section */}
        <div className="w-full bg-white min-h-96 py-16 px-4">
          <div className="max-w-2xl mx-auto text-center">
            {/* Testimonials from travelers */}
            {/* <h2 className="text-4xl font-serif text-black mb-4">
              Testimonials
            </h2>
            <p className="text-4xl font-serif text-black mb-12">
              from travelers
            </p> */}
            
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
      {/* Natural Size Image Section */}
<div className="w-full flex justify-center items-center py-12">
  <img 
    src={Mainimg} // or use imported path
    alt="Adventure shot"
    className="max-w-full h-auto"
  />
</div>

  
      
    </div>
  );
};

export default Home;