import React, { useEffect, useState } from 'react';
import { ChevronDown } from 'lucide-react';
import harishchandragad from '../assets/Harishchandragad.jpg';

const Goa = () => {
  const [scrollY, setScrollY] = useState(0);
  const [expandedDay, setExpandedDay] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // For true parallax effect, the image should move slower than scroll
  const parallaxOffset = scrollY * 0.3;

  return (
    <div className="min-h-screen">
      {/* Header Section */}
      <div className="relative bg-white py-8 lg:py-20">
        <div className="max-w-[1600px] mx-auto px-4 md:px-8 py-6 md:py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            {/* Left Column - Title */}
            <div className="flex items-center">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold text-gray-900 leading-tight md:ml-0 lg:ml-[150px]">
              Goa Backpacking
              </h1>
            </div>
            
            {/* Right Column - Info */}
            <div className="flex flex-col justify-center md:ml-0 lg:ml-[80px] mt-0 md:mt-[40px] lg:mt-[80px]">
              <div className="mb-6 md:mb-8">
                <p className="text-gray-600 text-lg md:text-xl lg:text-2xl flex items-center">
                  <span className="mr-3">📍</span>
                  Goa
                </p>
              </div>
              <div className="mb-8 md:mb-12">
                <p className="text-gray-600 text-lg md:text-xl lg:text-2xl">
                  🗓️ Feb
                </p>
              </div>
              <div>
                <p className="text-gray-700 text-lg md:text-xl lg:text-2xl max-w-lg leading-relaxed">
                Goa is a backpacker’s paradise, offering a perfect mix of sun-kissed beaches, vibrant nightlife, and cultural heritage. From the serene sands of South Goa to the bustling vibes of North Goa, it’s an adventure filled with hidden gems like quaint forts, cliffside cafes, and picturesque trails.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Parallax Image Section */}
      <div className="relative h-[50vh] md:h-[70vh] lg:h-[80vh] overflow-hidden">
        <div 
          className="absolute inset-0 w-full h-full"
          style={{ 
            backgroundImage: `url(${harishchandragad})`,
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundAttachment: 'fixed',
            transition: 'transform 0.1s ease-out'
          }}
        >
        
        </div>
        
      
      </div>

      {/* Additional Content Area */}
      <div className="bg-white">
        <div className="max-w-[1200px] mx-auto px-4 md:px-8">
          {/* Details Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 md:gap-12 lg:gap-16 mb-16 md:mb-24">
            {/* Price Column */}
            <div>
              <h3 className="text-gray-900 font-semibold mb-3 md:mb-4 text-lg md:text-xl">Price:</h3>
              <p className="text-gray-800 text-base md:text-lg mb-2">5555/- (Ex. Goa)</p>
              <p className="text-gray-800 text-base md:text-lg mb-2">7999/- (Ex. Goa)</p>
            
            </div>
            
            {/* Slots Column */}
            <div>
              <h3 className="text-gray-900 font-semibold mb-3 md:mb-4 text-lg md:text-xl">Slots:</h3>
              <p className="text-gray-800 text-base md:text-lg">👥 24 Explorers</p>
            </div>
            
            {/* Schedule Column */}
            <div>
              <h3 className="text-gray-900 font-semibold mb-3 md:mb-4 text-lg md:text-xl">Schedule:</h3>
              <p className="text-gray-800 text-base md:text-lg">🕒 ⏱︎ Feb</p>
            </div>
          </div>
          
          {/* Boarding Points */}
          <div className="mb-16 md:mb-24">
            <h3 className="text-gray-900 font-semibold mb-4 md:mb-6 text-lg md:text-xl">Boarding Points</h3>
            <div className="space-y-2 md:space-y-3">
              <p className="text-gray-800 text-base md:text-lg">📍 Pune</p>
              <p className="text-gray-800 text-base md:text-lg">📍 Goa</p>
            </div>
          </div>
          
          {/* Historical Information */}
          <div className="mb-16 md:mb-24">
            <p className="text-gray-700 mb-4 md:mb-6 text-base md:text-lg leading-relaxed">
            At Kafila Adventures, we craft the ultimate backpacking experience in Goa, blending exploration, adventure, and relaxation. From South Goa’s serene beaches and hidden gems to North Goa’s vibrant nightlife and historic landmarks, we ensure every moment is unforgettable. Join us for a journey filled with scenic trails, unique experiences, and memories that last a lifetime!
            </p>
          </div>
          
        

          {/* Includes Section - Matching screenshot style */}
          <div className="mb-16 md:mb-24">
            <h3 className="text-gray-900 font-bold mb-6 md:mb-8 text-2xl md:text-3xl">Includes:</h3>
            <div className="space-y-4 md:space-y-5">
              <p className="text-gray-900 text-xl md:text-2xl flex items-center">
                <span className="w-7 h-7 rounded-full bg-green-500 text-white flex items-center justify-center mr-4 flex-shrink-0">
                  <span className="text-lg font-bold">✓</span>
                </span>
                <span>Private Transportation</span>
              </p>
              <p className="text-gray-900 text-xl md:text-2xl flex items-center">
                <span className="w-7 h-7 rounded-full bg-green-500 text-white flex items-center justify-center mr-4 flex-shrink-0">
                  <span className="text-lg font-bold">✓</span>
                </span>
                <span>Comfortable accomodations on a triple sharing basis</span>
              </p>
              <p className="text-gray-900 text-xl md:text-2xl flex items-center">
                <span className="w-7 h-7 rounded-full bg-green-500 text-white flex items-center justify-center mr-4 flex-shrink-0">
                  <span className="text-lg font-bold">✓</span>
                </span>
                <span>Meals (Breakfast & Dinner)</span>
              </p>
              <p className="text-gray-900 text-xl md:text-2xl flex items-center">
                <span className="w-7 h-7 rounded-full bg-green-500 text-white flex items-center justify-center mr-4 flex-shrink-0">
                  <span className="text-lg font-bold">✓</span>
                </span>
                <span>Permits</span>
              </p>
              <p className="text-gray-900 text-xl md:text-2xl flex items-center">
                <span className="w-7 h-7 rounded-full bg-green-500 text-white flex items-center justify-center mr-4 flex-shrink-0">
                  <span className="text-lg font-bold">✓</span>
                </span>
                <span>Sightseeing & Entry fees</span>
              </p>
              <p className="text-gray-900 text-xl md:text-2xl flex items-center">
                <span className="w-7 h-7 rounded-full bg-green-500 text-white flex items-center justify-center mr-4 flex-shrink-0">
                  <span className="text-lg font-bold">✓</span>
                </span>
                <span>Oxygen Supply
                </span>
              </p><p className="text-gray-900 text-xl md:text-2xl flex items-center">
                <span className="w-7 h-7 rounded-full bg-green-500 text-white flex items-center justify-center mr-4 flex-shrink-0">
                  <span className="text-lg font-bold">✓</span>
                </span>
                <span>First Aid Support</span>
              </p>
              <p className="text-gray-900 text-xl md:text-2xl flex items-center">
                <span className="w-7 h-7 rounded-full bg-green-500 text-white flex items-center justify-center mr-4 flex-shrink-0">
                  <span className="text-lg font-bold">✓</span>
                </span>
                <span>Professional Tour Guides</span>
              </p>
            </div>
          </div>

          {/* Excludes Section - Matching screenshot style */}
          <div className="mb-16 md:mb-24">
            <h3 className="text-gray-900 font-bold mb-6 md:mb-8 text-2xl md:text-3xl">Excludes:</h3>
            <div className="space-y-4 md:space-y-5">
              <p className="text-gray-900 text-xl md:text-2xl flex items-center">
                <span className="w-7 h-7 rounded-full bg-red-500 text-white flex items-center justify-center mr-4 flex-shrink-0">
                  <span className="text-lg">✗</span>
                </span>
                <span>Personal expenses</span>
              </p>
              <p className="text-gray-900 text-xl md:text-2xl flex items-center">
                <span className="w-7 h-7 rounded-full bg-red-500 text-white flex items-center justify-center mr-4 flex-shrink-0">
                  <span className="text-lg">✗</span>
                </span>
                <span>Optional excursions</span>
              </p>
            </div>
          </div>

          {/* What to Carry Section - Matching screenshot style */}
          <div className="mb-24 md:mb-32">
            <h3 className="text-gray-900 font-bold mb-6 md:mb-8 text-2xl md:text-3xl">What to Carry?</h3>
            <div className="space-y-4 md:space-y-5">
              <p className="text-gray-900 text-xl md:text-2xl flex items-center">
                <span className="w-7 h-7 rounded-full bg-green-500 text-white flex items-center justify-center mr-4 flex-shrink-0">
                  <span className="text-lg font-bold">✓</span>
                </span>
                <span>Backpack [30-40L]</span>
              </p>
              <p className="text-gray-900 text-xl md:text-2xl flex items-center">
                <span className="w-7 h-7 rounded-full bg-green-500 text-white flex items-center justify-center mr-4 flex-shrink-0">
                  <span className="text-lg font-bold">✓</span>
                </span>
                <span>Thermal wear (inner layers)</span>
              </p>
              <p className="text-gray-900 text-xl md:text-2xl flex items-center">
                <span className="w-7 h-7 rounded-full bg-green-500 text-white flex items-center justify-center mr-4 flex-shrink-0">
                  <span className="text-lg font-bold">✓</span>
                </span>
                <span>Fleece jackets and windcheaters</span>
              </p>
              <p className="text-gray-900 text-xl md:text-2xl flex items-center">
                <span className="w-7 h-7 rounded-full bg-green-500 text-white flex items-center justify-center mr-4 flex-shrink-0">
                  <span className="text-lg font-bold">✓</span>
                </span>
                <span>Waterproof and insulated gloves</span>
              </p>
              <p className="text-gray-900 text-xl md:text-2xl flex items-center">
                <span className="w-7 h-7 rounded-full bg-green-500 text-white flex items-center justify-center mr-4 flex-shrink-0">
                  <span className="text-lg font-bold">✓</span>
                </span>
                <span>Woolen caps, mufflers, and socks</span>
              </p>
              <p className="text-gray-900 text-xl md:text-2xl flex items-center">
                <span className="w-7 h-7 rounded-full bg-green-500 text-white flex items-center justify-center mr-4 flex-shrink-0">
                  <span className="text-lg font-bold">✓</span>
                </span>
                <span>Comfortable trekking shoes
                </span>
              </p><p className="text-gray-900 text-xl md:text-2xl flex items-center">
                <span className="w-7 h-7 rounded-full bg-green-500 text-white flex items-center justify-center mr-4 flex-shrink-0">
                  <span className="text-lg font-bold">✓</span>
                </span>
                <span>Valid ID proof</span>
              </p><p className="text-gray-900 text-xl md:text-2xl flex items-center">
                <span className="w-7 h-7 rounded-full bg-green-500 text-white flex items-center justify-center mr-4 flex-shrink-0">
                  <span className="text-lg font-bold">✓</span>
                </span>
                <span>Personal medicines</span>
              </p><p className="text-gray-900 text-xl md:text-2xl flex items-center">
                <span className="w-7 h-7 rounded-full bg-green-500 text-white flex items-center justify-center mr-4 flex-shrink-0">
                  <span className="text-lg font-bold">✓</span>
                </span>
                <span>Sunglasses with UV protection</span>
              </p><p className="text-gray-900 text-xl md:text-2xl flex items-center">
                <span className="w-7 h-7 rounded-full bg-green-500 text-white flex items-center justify-center mr-4 flex-shrink-0">
                  <span className="text-lg font-bold">✓</span>
                </span>
                <span>Sunscreen lotion (SPF 50+), lip balm, and moisturizer</span>
              </p><p className="text-gray-900 text-xl md:text-2xl flex items-center">
                <span className="w-7 h-7 rounded-full bg-green-500 text-white flex items-center justify-center mr-4 flex-shrink-0">
                  <span className="text-lg font-bold">✓</span>
                </span>
                <span>Reusable water bottles (to stay hydrated)</span>
              </p><p className="text-gray-900 text-xl md:text-2xl flex items-center">
                <span className="w-7 h-7 rounded-full bg-green-500 text-white flex items-center justify-center mr-4 flex-shrink-0">
                  <span className="text-lg font-bold">✓</span>
                </span>
                <span>Headlamp or flashlight with extra batteries</span>
              </p><p className="text-gray-900 text-xl md:text-2xl flex items-center">
                <span className="w-7 h-7 rounded-full bg-green-500 text-white flex items-center justify-center mr-4 flex-shrink-0">
                  <span className="text-lg font-bold">✓</span>
                </span>
                <span>Camera to capture memories</span>
              </p><p className="text-gray-900 text-xl md:text-2xl flex items-center">
                <span className="w-7 h-7 rounded-full bg-green-500 text-white flex items-center justify-center mr-4 flex-shrink-0">
                  <span className="text-lg font-bold">✓</span>
                </span>
                <span>Power banks and chargers</span>
              </p><p className="text-gray-900 text-xl md:text-2xl flex items-center">
                <span className="w-7 h-7 rounded-full bg-green-500 text-white flex items-center justify-center mr-4 flex-shrink-0">
                  <span className="text-lg font-bold">✓</span>
                </span>
                <span>Head torch or Simple hand held torch</span>
              </p><p className="text-gray-900 text-xl md:text-2xl flex items-center">
                <span className="w-7 h-7 rounded-full bg-green-500 text-white flex items-center justify-center mr-4 flex-shrink-0">
                  <span className="text-lg font-bold">✓</span>
                </span>
                <span>Snacks and energy bars</span>
              </p>
            </div>
          </div>
        </div>
      </div>
{/* The Journey Section - Matching the design but responsive */}
<div className="py-16 md:py-24 bg-white">
  <div className="max-w-[1600px] mx-auto px-4 md:px-8">
    <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 text-center md:text-left mb-12 md:mb-16 md:ml-[100px] lg:ml-[150px]">The Journey</h2>
    
    <div className="max-w-6xl mx-auto">
      {/* Day 1 Section */}
      <div className="mb-8 md:mb-12">
        <button 
          onClick={() => setExpandedDay(expandedDay === 1 ? null : 1)}
          className="w-full md:w-[800px] text-left p-6 md:p-8 bg-gray-50 hover:bg-white rounded-lg flex flex-col md:flex-row justify-start items-start md:items-center mb-4 md:mb-8 transition-colors"
        >
          <div className="flex items-center gap-4 md:gap-8">
            <span className="text-xl md:text-3xl font-semibold text-gray-900">Day 1</span>
            <span className="text-lg md:text-2xl text-gray-800">Departure From Pune</span>
          </div>
        </button>
        
        {expandedDay === 1 && (
          <div className="p-6 md:p-8 bg-white rounded-lg mb-4 md:mb-8 md:w-[800px]">
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <span className="mt-1">⏰</span>
                <div>
                  
                  <span className="ml-3 text-lg md:text-xl">Begin your journey from Pune by boarding the Goa Express towards Margao</span>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Day 2 Section */}
      <div className="mb-8 md:mb-12">
        <button 
          onClick={() => setExpandedDay(expandedDay === 1 ? null : 1)}
          className="w-full md:w-[800px] text-left p-6 md:p-8 bg-gray-50 hover:bg-white rounded-lg flex flex-col md:flex-row justify-start items-start md:items-center mb-4 md:mb-8 transition-colors"
        >
          <div className="flex items-center gap-4 md:gap-8">
            <span className="text-xl md:text-3xl font-semibold text-gray-900">Day 2</span>
            <span className="text-lg md:text-2xl text-gray-800">South Goa Adventures</span>
          </div>
        </button>
        
        {expandedDay === 1 && (
          <div className="p-6 md:p-8 bg-white rounded-lg mb-4 md:mb-8 md:w-[800px]">
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <span className="mt-1">⏰</span>
                <div>
                  
                  <span className="ml-3 text-lg md:text-xl">Morning: Arrive at Margao and catch a bus to Palolem Beach. Check in to your place of stay and relax. Evening: Enjoy a scenic boat ride to spot dolphins and jellyfish. Visit picturesque locations such as Rajbagh Beach, Butterfly Beach, and Honeymoon Beach. Discover the hidden Turtle-shaped Rock and Monkey Island.</span>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
{/* Day 3 Section */}
<div className="mb-8 md:mb-12">
        <button 
          onClick={() => setExpandedDay(expandedDay === 1 ? null : 1)}
          className="w-full md:w-[800px] text-left p-6 md:p-8 bg-gray-50 hover:bg-white rounded-lg flex flex-col md:flex-row justify-start items-start md:items-center mb-4 md:mb-8 transition-colors"
        >
          <div className="flex items-center gap-4 md:gap-8">
            <span className="text-xl md:text-3xl font-semibold text-gray-900">Day 3</span>
            <span className="text-lg md:text-2xl text-gray-800">Serene South Goa</span>
          </div>
        </button>
        
        {expandedDay === 1 && (
          <div className="p-6 md:p-8 bg-white rounded-lg mb-4 md:mb-8 md:w-[800px]">
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <span className="mt-1">⏰</span>
                <div>
                  
                  <span className="ml-3 text-lg md:text-xl">Morning: Start your day with a serene sunrise at Galgibagh Beach, a peaceful and unexplored gem in South Goa. Afternoon: Visit a cliffside café and soak in the stunning views. Evening: Explore the historic Cabo de Rama Fort and enjoy the tranquility of Pebble Beach</span>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
{/* Day 4 Section */}
<div className="mb-8 md:mb-12">
        <button 
          onClick={() => setExpandedDay(expandedDay === 1 ? null : 1)}
          className="w-full md:w-[800px] text-left p-6 md:p-8 bg-gray-50 hover:bg-white rounded-lg flex flex-col md:flex-row justify-start items-start md:items-center mb-4 md:mb-8 transition-colors"
        >
          <div className="flex items-center gap-4 md:gap-8">
            <span className="text-xl md:text-3xl font-semibold text-gray-900">Day 4</span>
            <span className="text-lg md:text-2xl text-gray-800">North Goa’s Heritage and Nightlife</span>
          </div>
        </button>
        
        {expandedDay === 1 && (
          <div className="p-6 md:p-8 bg-white rounded-lg mb-4 md:mb-8 md:w-[800px]">
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <span className="mt-1">⏰</span>
                <div>
                  <span className="ml-3 text-lg md:text-xl">Morning: Leave South Goa and head towards Panjim to explore a different side of Goa. Afternoon: Visit the iconic churches of Panjim and stroll through the vibrant streets of Fontainhas, known for its Portuguese-style architecture. Take a ride along the famous Parra Road, lined with lush greenery. Evening: Immerse yourself in the thrilling nightlife of North Goa.</span>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
{/* Day 5 Section */}
<div className="mb-8 md:mb-12">
        <button 
          onClick={() => setExpandedDay(expandedDay === 1 ? null : 1)}
          className="w-full md:w-[800px] text-left p-6 md:p-8 bg-gray-50 hover:bg-white rounded-lg flex flex-col md:flex-row justify-start items-start md:items-center mb-4 md:mb-8 transition-colors"
        >
          <div className="flex items-center gap-4 md:gap-8">
            <span className="text-xl md:text-3xl font-semibold text-gray-900">Day 5</span>
            <span className="text-lg md:text-2xl text-gray-800">Historical North Goa</span>
          </div>
        </button>
        
        {expandedDay === 1 && (
          <div className="p-6 md:p-8 bg-white rounded-lg mb-4 md:mb-8 md:w-[800px]">
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <span className="mt-1">⏰</span>
                <div>
                  <span className="ml-3 text-lg md:text-xl">Morning: Start your day with a visit to the historical Chapora Fort for panoramic views. Afternoon: Stop by the renowned Artjuna Café to enjoy its artistic ambiance. Evening: Explore the serene Devil’s Finger viewpoint and the Lower Aguada Fort for a calm and peaceful experience</span>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
{/* Day 6 Section */}
<div className="mb-8 md:mb-12">
        <button 
          onClick={() => setExpandedDay(expandedDay === 1 ? null : 1)}
          className="w-full md:w-[800px] text-left p-6 md:p-8 bg-gray-50 hover:bg-white rounded-lg flex flex-col md:flex-row justify-start items-start md:items-center mb-4 md:mb-8 transition-colors"
        >
          <div className="flex items-center gap-4 md:gap-8">
            <span className="text-xl md:text-3xl font-semibold text-gray-900">Day 6</span>
            <span className="text-lg md:text-2xl text-gray-800">Beach Bliss in North Goa</span>
          </div>
        </button>
        
        {expandedDay === 1 && (
          <div className="p-6 md:p-8 bg-white rounded-lg mb-4 md:mb-8 md:w-[800px]">
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <span className="mt-1">⏰</span>
                <div>
                  
                  <span className="ml-3 text-lg md:text-xl">Morning: Begin the day at the picturesque Vagator Beach, enjoying its stunning scenery. Afternoon: Head to the lively Baga Beach for lunch and soak in the vibrant atmosphere. Evening: With hearts full of memories, catch a train back to Pune</span>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
{/* Day 7 Section */}
<div className="mb-8 md:mb-12">
        <button 
          onClick={() => setExpandedDay(expandedDay === 1 ? null : 1)}
          className="w-full md:w-[800px] text-left p-6 md:p-8 bg-gray-50 hover:bg-white rounded-lg flex flex-col md:flex-row justify-start items-start md:items-center mb-4 md:mb-8 transition-colors"
        >
          <div className="flex items-center gap-4 md:gap-8">
            <span className="text-xl md:text-3xl font-semibold text-gray-900">Day 7</span>
            <span className="text-lg md:text-2xl text-gray-800">Arrival in Pune</span>
          </div>
        </button>
        
        {expandedDay === 1 && (
          <div className="p-6 md:p-8 bg-white rounded-lg mb-4 md:mb-8 md:w-[800px]">
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <span className="mt-1">⏰</span>
                <div>
                  <span className="ml-3 text-lg md:text-xl">Morning: Reach Pune early in the morning, bringing back cherished memories of the trip.</span>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>


      
      
{/* Journey Images Grid */}
<div className="bg-white p-4 md:p-8">
  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 max-w-7xl mx-auto">
    {/* Left column - single large image */}
    <div className="rounded-xl overflow-hidden shadow-lg aspect-[3/4] md:aspect-[3.5/4]">
      <img 
        src="https://images.unsplash.com/photo-1506744038136-46273834b3fb" 
        alt="Mountain landscape with river" 
        className="w-full h-full object-cover"
      />
    </div>
    
    {/* Right column - two stacked smaller images */}
    <div className="grid grid-rows-1 md:grid-rows-2 gap-4 md:gap-5">
      <div className="rounded-xl overflow-hidden shadow-lg aspect-[16/9]">
        <img 
          src="https://images.unsplash.com/photo-1506744038136-46273834b3fb" 
          alt="Mountain landscape with trees" 
          className="w-full h-full object-cover"
        />
      </div>
      <div className="rounded-xl overflow-hidden shadow-lg aspect-[16/9]">
        <img 
          src="https://images.unsplash.com/photo-1506744038136-46273834b3fb" 
          alt="Mountain landscape with trees and river" 
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  </div>
</div>
    </div>
  </div>
</div>
</div>
  );
};

export default Goa;