// pages/About.js
import React from 'react';
import CraftingTravelExperiences from '../components/craftingtravelexperience';
import BeliefSection from '../components/Beliefsection';
import PassionateTeammates from '../components/teammates';

const AboutHero = () => {
    return (
      <>
        {/* Hero Section */}
        <section 
          className="relative h-screen w-full bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url("/api/placeholder/1920/1080")'
          }}
        >
          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/60 z-10" />
          
          {/* Content */}
          <div className="relative z-20 flex h-full items-center justify-center text-center">
            <div className="max-w-3xl px-4">
              <h1 className="text-6xl lg:text-8xl font-light text-white tracking-tight mb-4">
                About Kafila
              </h1>
              <p className="text-lg lg:text-xl text-white/90 font-light max-w-xl mx-auto">
                Experience the world through unique adventures and authentic cultural journeys.
              </p>  
            </div>
            
          </div>
        </section>

        {/* Other Sections */}
        <CraftingTravelExperiences/>
        <BeliefSection/> 
        <PassionateTeammates/>
      </>
    );
  };
  
  export default AboutHero;