import React, { useEffect, useState } from 'react';
import harishchandragad from '../assets/Harishchandragad.jpg';
import RefundPolicy from '../components/RefundPolicy';
import UpcomingAdventuresSection from '../components/upcomingadventures';
import BookingForm from '../components/Bookingform';

const HarishchandragadTrek = () => {
  const [scrollY, setScrollY] = useState(0);
  const [expandedDay, setExpandedDay] = useState(null);
  const [isVisible, setIsVisible] = useState({});

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
      
      // Trigger animations when elements come into view
      const elements = document.querySelectorAll('.animate-on-scroll');
      elements.forEach((element) => {
        const rect = element.getBoundingClientRect();
        const isInView = rect.top <= window.innerHeight * 0.8;
        const id = element.getAttribute('data-id');
        
        if (isInView && !isVisible[id]) {
          setIsVisible(prev => ({ ...prev, [id]: true }));
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isVisible]);

  // For true parallax effect, the image should move slower than scroll
  const parallaxOffset = scrollY * 0.3;

  return (
    <div className="min-h-screen">
      {/* Header Section */}
      <div className="relative bg-white py-12 lg:py-20">
        <div className="max-w-[1600px] mx-auto px-6 md:px-8 py-6 md:py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 mt-[60px]">
            {/* Left Column - Title */}
            <div className="flex items-center">
              <h1 
                className={`text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-times font-bold text-gray-900 leading-tight md:ml-0 lg:ml-[150px] transition-all duration-700`}
                style={{
                  opacity: scrollY < 50 ? 1 : 0.8,
                  transform: `translateY(${scrollY * 0.1}px)`
                }}
              >
                Harishchandragad Trek
              </h1>
            </div>
            
            {/* Right Column - Info */}
            <div className="flex flex-col justify-center md:ml-0 lg:ml-[80px] mt-0 md:mt-[40px] lg:mt-[80px]">
              <div className="mb-6 md:mb-8 animate-on-scroll opacity-0 translate-y-10 transition-all duration-500" 
                   data-id="location" 
                   style={isVisible.location ? {opacity: 1, transform: 'translateY(0)'} : {}}>
                <p className="text-gray-600 text-lg md:text-xl lg:text-2xl flex items-center">
                  <span className="mr-3">📍</span>
                  Harishchandragad, Maharashtra
                </p>
              </div>
              <div className="mb-8 md:mb-12 animate-on-scroll opacity-0 translate-y-10 transition-all duration-500" 
                   data-id="date" 
                   style={isVisible.date ? {opacity: 1, transform: 'translateY(0)'} : {}}>
                <p className="text-gray-600 text-lg md:text-xl lg:text-2xl">
                  🗓️ January, 2025
                </p>
              </div>
              <div className="animate-on-scroll opacity-0 translate-y-10 transition-all duration-500" 
                   data-id="description" 
                   style={isVisible.description ? {opacity: 1, transform: 'translateY(0)'} : {}}>
                <p className="text-gray-700 text-lg md:text-xl lg:text-2xl max-w-lg leading-relaxed">
                  Unveil the beauty of tropical bliss. From sun-kissed shores to vibrant cultural experiences, this journey promises you a solitary escape.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Parallax Image Section */}
      <div className="relative h-[30vh] md:h-[70vh] lg:h-[80vh] overflow-hidden">
        <div 
          className="absolute inset-0 w-full h-full"
          style={{ 
            backgroundImage: `url(${harishchandragad})`,
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundAttachment: 'fixed',
            transition: 'transform 0.1s ease-out'
          }}
        />
      </div>

      {/* Additional Content Area */}
      <div className="bg-white">
        <div className="max-w-[1200px] mx-auto px-4 md:px-8">
          {/* Details Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 md:gap-12 lg:gap-16 mb-16 md:mb-24 mt-[40px]">
            {/* Price Column */}
            <div className="animate-on-scroll opacity-0 translate-y-10 transition-all duration-500" 
                 data-id="price" 
                 style={isVisible.price ? {opacity: 1, transform: 'translateY(0)'} : {}}>
              <h3 className="text-gray-900 font-bold mb-3 md:mb-4 text-lg md:text-xl">Price:</h3>
              <p className="text-gray-800 text-base md:text-lg mb-2">₹ 1299/- Non AC Travel (Ex. Pune)</p>
              <p className="text-gray-800 text-base md:text-lg">₹ 1499/- AC Travel (Ex. Pune)</p>
            </div>
            
            {/* Slots Column */}
            <div className="animate-on-scroll opacity-0 translate-y-10 transition-all duration-500" 
                 data-id="slots" 
                 style={isVisible.slots ? {opacity: 1, transform: 'translateY(0)'} : {}}>
              <h3 className="text-gray-900 font-semibold mb-3 md:mb-4 text-lg md:text-xl">Slots:</h3>
              <p className="text-gray-800 text-base md:text-lg">👥 30 Explorers</p>
            </div>
            
            {/* Schedule Column */}
            <div className="animate-on-scroll opacity-0 translate-y-10 transition-all duration-500" 
                 data-id="schedule" 
                 style={isVisible.schedule ? {opacity: 1, transform: 'translateY(0)'} : {}}>
              <h3 className="text-gray-900 font-semibold mb-3 md:mb-4 text-lg md:text-xl">Schedule:</h3>
              <p className="text-gray-800 text-base md:text-lg">🕒 January 2025</p>
            </div>
          </div>
          
          {/* Boarding Points */}
          <div className="mb-16 md:mb-24 animate-on-scroll opacity-0 translate-y-10 transition-all duration-500" 
               data-id="boarding" 
               style={isVisible.boarding ? {opacity: 1, transform: 'translateY(0)'} : {}}>
            <h3 className="text-gray-900 font-semibold mb-4 md:mb-6 text-lg md:text-xl">Boarding Points</h3>
            <div className="space-y-2 md:space-y-3">
              <p className="text-gray-800 text-base md:text-lg">📍 Swargate(Opp. Laxminarayan Theatre)</p>
              <p className="text-gray-800 text-base md:text-lg">📍 Good Luck Chowk</p>
              <p className="text-gray-800 text-base md:text-lg">📍 Sancheti</p>
              <p className="text-gray-800 text-base md:text-lg">📍 Khadki Railway Station</p>
              <p className="text-gray-800 text-base md:text-lg">📍 Nashik Phata</p>
            </div>
          </div>
          
          {/* Historical Information */}
          <div className="mb-16 md:mb-24 animate-on-scroll opacity-0 translate-y-10 transition-all duration-500" 
               data-id="history" 
               style={isVisible.history ? {opacity: 1, transform: 'translateY(0)'} : {}}>
            <p className="text-gray-700 mb-4 md:mb-6 text-base md:text-lg leading-relaxed">
              Harishchandragad is a historical hill fort situated in Ahmednagar district of Maharashtra. The height of the fort is 1,424 meters. Harishchandragad is very popular place for trekking in Maharashtra and also one of the famous Bhandardara tourist places. The fort originally dates back to the 6th century during the rule of Kalachuri dynasty. The citadel was built during this era and various caves probably have been carved out in the 11th century AD. Sage Changdev used to meditate here in 14th century AD. Later the fort was under the control of Mughals and Marathas captured it in 1747 AD. Remnants of Microlithic human Inhabitants have been discovered here. The various Puranas like Matsyapurana, Agnipurana and Skandapurana have many references about Harishchandragad. Rohidas, Taramati and Harishchandra are the three peaks in Harishchandragad.
            </p>
          </div>
          
          {/* Trek Details */}
          <div className="mb-16 md:mb-24 animate-on-scroll opacity-0 translate-y-10 transition-all duration-500" 
               data-id="details" 
               style={isVisible.details ? {opacity: 1, transform: 'translateY(0)'} : {}}>
            <h3 className="text-gray-900 font-bold mb-4 md:mb-6 text-lg md:text-xl">Trek Details</h3>
            <div className="space-y-2 md:space-y-3">
              <p className="text-gray-700 text-base md:text-lg">- Base Village: Paachnai</p>
              <p className="text-gray-700 text-base md:text-lg">- Altitude: 4,650 ft.</p>
              <p className="text-gray-700 text-base md:text-lg">- Difficulty Level: Easy to Moderate</p>
              <p className="text-gray-700 text-base md:text-lg">- Duration: 1 Night, 1 Day</p>
              <p className="text-gray-700 text-base md:text-lg">- Best Season: November to February</p>
            </div>
          </div>

          {/* Includes Section */}
          <div className="mb-16 md:mb-24 animate-on-scroll opacity-0 translate-y-10 transition-all duration-500" 
               data-id="includes" 
               style={isVisible.includes ? {opacity: 1, transform: 'translateY(0)'} : {}}>
            <h3 className="text-gray-900 font-bold mb-6 md:mb-8 text-xl md:text-2xl">Includes:</h3>
            <div className="space-y-4 md:space-y-5">
              <p className="text-gray-900 text-lg md:text-xl flex items-center">
                <span className="w-7 h-7 rounded-full bg-green-500 text-white flex items-center justify-center mr-4 flex-shrink-0">
                  <span className="text-lg font-bold">✓</span>
                </span>
                <span>Transport from Pune to Pune</span>
              </p>
              <p className="text-gray-900 text-lg md:text-xl flex items-center">
                <span className="w-7 h-7 rounded-full bg-green-500 text-white flex items-center justify-center mr-4 flex-shrink-0">
                  <span className="text-lg font-bold">✓</span>
                </span>
                <span>1 Breakfast and 1 lunch</span>
              </p>
              <p className="text-gray-900 text-lg md:text-xl flex items-center">
                <span className="w-7 h-7 rounded-full bg-green-500 text-white flex items-center justify-center mr-4 flex-shrink-0">
                  <span className="text-lg font-bold">✓</span>
                </span>
                <span>Forest Passes</span>
              </p>
              <p className="text-gray-900 text-lg md:text-xl flex items-center">
                <span className="w-7 h-7 rounded-full bg-green-500 text-white flex items-center justify-center mr-4 flex-shrink-0">
                  <span className="text-lg font-bold">✓</span>
                </span>
                <span>First Aid</span>
              </p>
              <p className="text-gray-900 text-lg md:text-xl flex items-center">
                <span className="w-7 h-7 rounded-full bg-green-500 text-white flex items-center justify-center mr-4 flex-shrink-0">
                  <span className="text-lg font-bold">✓</span>
                </span>
                <span>Guide charges</span>
              </p>
            </div>
          </div>

          {/* Excludes Section */}
          <div className="mb-16 md:mb-24 animate-on-scroll opacity-0 translate-y-10 transition-all duration-500" 
               data-id="excludes" 
               style={isVisible.excludes ? {opacity: 1, transform: 'translateY(0)'} : {}}>
            <h3 className="text-gray-900 font-bold mb-6 md:mb-8 text-xl md:text-2xl">Excludes:</h3>
            <div className="space-y-4 md:space-y-5">
              <p className="text-gray-900 text-lg md:text-xl flex items-center">
                <span className="w-7 h-7 rounded-full bg-red-500 text-white flex items-center justify-center mr-4 flex-shrink-0">
                  <span className="text-lg">✗</span>
                </span>
                <span>Personal expenses</span>
              </p>
              <p className="text-gray-900 text-lg md:text-xl flex items-center">
                <span className="w-7 h-7 rounded-full bg-red-500 text-white flex items-center justify-center mr-4 flex-shrink-0">
                  <span className="text-lg">✗</span>
                </span>
                <span>Optional excursions</span>
              </p>
            </div>
          </div>

          {/* What to Carry Section */}
          <div className="mb-24 md:mb-32 animate-on-scroll opacity-0 translate-y-10 transition-all duration-500" 
               data-id="carry" 
               style={isVisible.carry ? {opacity: 1, transform: 'translateY(0)'} : {}}>
            <h3 className="text-gray-900 font-bold mb-6 md:mb-8 text-xl md:text-2xl">What to Carry?</h3>
            <div className="space-y-4 md:space-y-5">
              <p className="text-gray-900 text-lg md:text-xl flex items-center">
                <span className="w-7 h-7 rounded-full bg-green-500 text-white flex items-center justify-center mr-4 flex-shrink-0">
                  <span className="text-lg font-bold">✓</span>
                </span>
                <span>Backpack [30-40L]</span>
              </p>
              <p className="text-gray-900 text-lg md:text-xl flex items-center">
                <span className="w-7 h-7 rounded-full bg-green-500 text-white flex items-center justify-center mr-4 flex-shrink-0">
                  <span className="text-lg font-bold">✓</span>
                </span>
                <span>Trekking Shoes[Good grip]</span>
              </p>
              <p className="text-gray-900 text-lg md:text-xl flex items-center">
                <span className="w-7 h-7 rounded-full bg-green-500 text-white flex items-center justify-center mr-4 flex-shrink-0">
                  <span className="text-lg font-bold">✓</span>
                </span>
                <span>Full sleeves Trekking T-shirt</span>
              </p>
              <p className="text-gray-900 text-lg md:text-xl flex items-center">
                <span className="w-7 h-7 rounded-full bg-green-500 text-white flex items-center justify-center mr-4 flex-shrink-0">
                  <span className="text-lg font-bold">✓</span>
                </span>
                <span>Full Trekking Pants</span>
              </p>
              <p className="text-gray-900 text-lg md:text-xl flex items-center">
                <span className="w-7 h-7 rounded-full bg-green-500 text-white flex items-center justify-center mr-4 flex-shrink-0">
                  <span className="text-lg font-bold">✓</span>
                </span>
                <span>Poncho/Raincoat</span>
              </p>
            </div>
          </div>
        </div>
      </div>

      <BookingForm/>

      {/* The Journey Section */}
      <div className="py-16 md:py-16 bg-white">
        <div className="max-w-[1600px] mx-auto px-4 md:px-8">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 text-center md:text-left mb-12 md:mb-16 md:ml-[100px] lg:ml-[150px] animate-on-scroll opacity-0 translate-y-10 transition-all duration-500" 
              data-id="journey-title" 
              style={isVisible['journey-title'] ? {opacity: 1, transform: 'translateY(0)'} : {}}>
            The Journey
          </h2>
          
          <div className="max-w-6xl mx-auto">
            {/* Day 1 Section */}
            <div className="mb-8 md:mb-12 animate-on-scroll opacity-0 translate-y-10 transition-all duration-500" 
                 data-id="day1" 
                 style={isVisible.day1 ? {opacity: 1, transform: 'translateY(0)'} : {}}>
              <button 
                onClick={() => setExpandedDay(expandedDay === 1 ? null : 1)}
                className="w-full md:w-[800px] text-left p-6 md:p-8 bg-gray-50 hover:bg-gray-50 rounded-lg flex flex-col md:flex-row justify-start items-start md:items-center mb-4 md:mb-8 transition-all duration-300 hover:shadow-lg"
              >
                <div className="flex items-center gap-4 md:gap-8">
                  <span className="text-xl md:text-3xl font-semibold text-gray-900">Day 1</span>
                  <span className="text-lg md:text-2xl text-gray-800">The Journey Begins</span>
                </div>
              </button>
              
              {expandedDay === 1 && (
                <div className="p-6 md:p-8 bg-white rounded-lg mb-4 md:mb-8 md:w-[800px] animate-scale-up">
                  <div className="space-y-4">
                    <div className="flex items-start gap-4">
                      <span className="mt-1">⏰</span>
                      <div>
                        <span className="font-semibold text-lg md:text-xl">10:00 pm:</span>
                        <span className="ml-3 text-lg md:text-xl">Assemble at the designated pickup point in Pune and start the journey toward Morshi</span>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Day 2 Section */}
            <div className="mb-8 md:mb-12 animate-on-scroll opacity-0 translate-y-10 transition-all duration-500" 
                 data-id="day2" 
                 style={isVisible.day2 ? {opacity: 1, transform: 'translateY(0)'} : {}}>
              <button 
                onClick={() => setExpandedDay(expandedDay === 2 ? null : 2)}
                className="w-full md:w-[800px] text-left p-6 md:p-8 bg-gray-50 hover:bg-gray-50 rounded-lg flex flex-col md:flex-row justify-start items-start md:items-center mb-4 md:mb-8 transition-all duration-300 hover:shadow-lg"
              >
                <div className="flex items-center gap-4 md:gap-8">
                  <span className="text-xl md:text-3xl font-semibold text-gray-900">Day 2</span>
                  <span className="text-lg md:text-2xl text-gray-800">Conquer Harishchandragad</span>
                </div>
              </button>
              
              {expandedDay === 2 && (
                <div className="p-6 md:p-8 bg-white rounded-lg mb-4 md:mb-8 md:w-[800px] animate-scale-up">
                  <div className="space-y-4">
                    <div className="flex items-start gap-4">
                      <span className="mt-1">⏰</span>
                      <div>
                        <span className="font-semibold text-lg md:text-xl">03:00 am:</span>
                        <span className="ml-3 text-lg md:text-xl">Arrive at the base village, freshen up, and gear up for the trek</span>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <span className="mt-1">⏰</span>
                      <div>
                        <span className="font-semibold text-lg md:text-xl">04:00 am:</span>
                        <span className="ml-3 text-lg md:text-xl">Enjoy a hot breakfast to fuel your adventure.</span>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <span className="mt-1">⏰</span>
                      <div>
                        <span className="font-semibold text-lg md:text-xl">04:30 am:</span>
                        <span className="ml-3 text-lg md:text-xl">Quick introduction session and safety briefing before the trek begins.</span>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <span className="mt-1">⏰</span>
                      <div>
                        <span className="font-semibold text-lg md:text-xl">10:00 am:</span>
                        <span className="ml-3 text-lg md:text-xl">Reach the summit and soak in the stunning sunrise and 360° views of the Sahyadri range. Snap some Insta-worthy photos!</span>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <span className="mt-1">⏰</span>
                      <div>
                        <span className="font-semibold text-lg md:text-xl">11:00 pm:</span>
                        <span className="ml-3 text-lg md:text-xl">Begin the descent, navigating carefully through the rugged terrain.</span>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <span className="mt-1">⏰</span>
                      <div>
                        <span className="font-semibold text-lg md:text-xl">04:00 pm:</span>
                        <span className="ml-3 text-lg md:text-xl">Reach the base village and celebrate your achievement.</span>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <span className="mt-1">⏰</span>
                      <div>
                        <span className="font-semibold text-lg md:text-xl">05:00 pm:</span>
                        <span className="ml-3 text-lg md:text-xl">Relish a delicious lunch of authentic local cuisine.</span>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <span className="mt-1">⏰</span>
                      <div>
                        <span className="font-semibold text-lg md:text-xl">06:00 pm:</span>
                        <span className="ml-3 text-lg md:text-xl">Start your return journey to Pune with hearts full of memories and triumph.</span>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <span className="mt-1">⏰</span>
                      <div>
                        <span className="font-semibold text-lg md:text-xl">11:00 pm:</span>
                        <span className="ml-3 text-lg md:text-xl">REACH PUNE</span>
                      </div>
                    </div>
                    <div className="mt-6 md:mt-8 p-4 md:p-6 bg-gray-50 rounded-lg">
                      <p className="text-base md:text-lg text-gray-700">
                        <strong>Note:</strong> Please be punctual throughout the trek. In some scenarios, our schedule might be delayed, but your cooperation is essential to ensure we stay on track.
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </div>


            {/* Journey Images Grid */}
            <div className="bg-white p-4 md:p-8 animate-on-scroll opacity-0 translate-y-10 transition-all duration-500" 
                 data-id="images" 
                 style={isVisible.images ? {opacity: 1, transform: 'translateY(0)'} : {}}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 max-w-7xl mx-auto">
                {/* Left column - single large image */}
                <div className="rounded-xl overflow-hidden shadow-lg aspect-[3/4] md:aspect-[3.5/4] group">
                  <img 
                    src="https://images.unsplash.com/photo-1506744038136-46273834b3fb" 
                    alt="Mountain landscape with river" 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                
                {/* Right column - two stacked smaller images */}
                <div className="grid grid-rows-1 md:grid-rows-2 gap-4 md:gap-5">
                  <div className="rounded-xl overflow-hidden shadow-lg aspect-[16/9] group">
                    <img 
                      src="https://images.unsplash.com/photo-1506744038136-46273834b3fb" 
                      alt="Mountain landscape with trees" 
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                  <div className="rounded-xl overflow-hidden shadow-lg aspect-[16/9] group">
                    <img 
                      src="https://images.unsplash.com/photo-1506744038136-46273834b3fb" 
                      alt="Mountain landscape with trees and river" 
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Add custom CSS for animations */}
      <style jsx>{`
        @keyframes scaleUp {
          from {
            opacity: 0;
            transform: scale(0.9);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        .animate-scale-up {
          animation: scaleUp 0.3s ease-out forwards;
        }

        .animate-on-scroll {
          transition: all 0.5s ease-out;
        }
      `}</style>
         <UpcomingAdventuresSection/>
      <RefundPolicy/>
    </div>
  );
};

export default HarishchandragadTrek;