import React, { useEffect, useState } from 'react';
import harishchandragad from '../assets/Harishchandragad.jpg';

const Kalsubai= () => {
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
                Kalsubai Fort Trek
              </h1>
            </div>
            
            {/* Right Column - Info */}
            <div className="flex flex-col justify-center md:ml-0 lg:ml-[80px] mt-0 md:mt-[40px] lg:mt-[80px]">
              <div className="mb-6 md:mb-8">
                <p className="text-gray-600 text-lg md:text-xl lg:text-2xl flex items-center">
                  <span className="mr-3">📍</span>
                  Kalsubai, Maharashtra
                </p>
              </div>
              <div className="mb-8 md:mb-12">
                <p className="text-gray-600 text-lg md:text-xl lg:text-2xl">
                  🗓️ January, 2025
                </p>
              </div>
              <div>
                <p className="text-gray-700 text-lg md:text-xl lg:text-2xl max-w-lg leading-relaxed">
                  Unveil the beauty of tropical bliss. From sun-kissed shores to vibrant cultural experiences, this journey promises you a solitary escape.
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
              <p className="text-gray-800 text-base md:text-lg mb-2">₹ 1599/ - AC Travel (Ex. Pune)</p>
              <p className="text-gray-800 text-base md:text-lg">₹ 1299/- Non AC Travel (Ex. Pune)</p>
              <p className="text-gray-800 text-base md:text-lg">₹ 720/-  (Ex. Baari)</p>
            </div>
            
            {/* Slots Column */}
            <div>
              <h3 className="text-gray-900 font-semibold mb-3 md:mb-4 text-lg md:text-xl">Slots:</h3>
              <p className="text-gray-800 text-base md:text-lg">👥 50 Explorers</p>
            </div>
            
            {/* Schedule Column */}
            <div>
              <h3 className="text-gray-900 font-semibold mb-3 md:mb-4 text-lg md:text-xl">Schedule:</h3>
              <p className="text-gray-800 text-base md:text-lg">🕒 January 2025</p>
            </div>
          </div>
          
          {/* Boarding Points */}
          <div className="mb-16 md:mb-24">
            <h3 className="text-gray-900 font-semibold mb-4 md:mb-6 text-lg md:text-xl">Boarding Points</h3>
            <div className="space-y-2 md:space-y-3">
              <p className="text-gray-800 text-base md:text-lg">📍 Katraj Chowk</p>
              <p className="text-gray-800 text-base md:text-lg">📍 Swargate (Opp.Laxminarayan Theatre)</p>
              <p className="text-gray-800 text-base md:text-lg">📍 Good Luck Chowk</p>
              <p className="text-gray-800 text-base md:text-lg">📍 Sancheti</p>
              <p className="text-gray-800 text-base md:text-lg">📍 Khadki Railway Station</p>
              <p className="text-gray-800 text-base md:text-lg">📍 Nashik Patha</p>
            </div>
          </div>
          
          {/* Historical Information */}
          <div className="mb-16 md:mb-24">
            <p className="text-gray-700 mb-4 md:mb-6 text-base md:text-lg leading-relaxed">
            Kalsubai is a mountain in the Western Ghats, located in the Indian state of Maharashtra. Its summit, situated at an elevation of 1,646 metres (5,400 ft), is the highest point in Maharashtra.The mountain range lies within the Kalsubai Harishchandragad Wildlife Sanctuary. It is visited throughout the year by avid trekkers, Kalsubai temple devotees and wildlife enthusiasts alike. It is named after one of the three sisters Kalsubai, Ratnabai and Katrabai. The mountain range was formed by the same geological events that gave birth to the Western Ghats. Resting on the Deccan Plateau, a large igneous province, it consists of solidified flood basalt dating back to the Cenozoic era.
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
                <span>Transport from Pune to Pune</span>
              </p>
              <p className="text-gray-900 text-xl md:text-2xl flex items-center">
                <span className="w-7 h-7 rounded-full bg-green-500 text-white flex items-center justify-center mr-4 flex-shrink-0">
                  <span className="text-lg font-bold">✓</span>
                </span>
                <span>1 Breakfast and 1 lunch</span>
              </p>
              <p className="text-gray-900 text-xl md:text-2xl flex items-center">
                <span className="w-7 h-7 rounded-full bg-green-500 text-white flex items-center justify-center mr-4 flex-shrink-0">
                  <span className="text-lg font-bold">✓</span>
                </span>
                <span>First Aid</span>
              </p>
              <p className="text-gray-900 text-xl md:text-2xl flex items-center">
                <span className="w-7 h-7 rounded-full bg-green-500 text-white flex items-center justify-center mr-4 flex-shrink-0">
                  <span className="text-lg font-bold">✓</span>
                </span>
                <span>Professional guides</span>
              </p>
              <p className="text-gray-900 text-xl md:text-2xl flex items-center">
                <span className="w-7 h-7 rounded-full bg-green-500 text-white flex items-center justify-center mr-4 flex-shrink-0">
                  <span className="text-lg font-bold">✓</span>
                </span>
                <span>Forest charges</span>
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
                <span>Trekking Shoes[Good grip]</span>
              </p>
              <p className="text-gray-900 text-xl md:text-2xl flex items-center">
                <span className="w-7 h-7 rounded-full bg-green-500 text-white flex items-center justify-center mr-4 flex-shrink-0">
                  <span className="text-lg font-bold">✓</span>
                </span>
                <span>Full sleeves Trekking T-shirt</span>
              </p>
              <p className="text-gray-900 text-xl md:text-2xl flex items-center">
                <span className="w-7 h-7 rounded-full bg-green-500 text-white flex items-center justify-center mr-4 flex-shrink-0">
                  <span className="text-lg font-bold">✓</span>
                </span>
                <span>Full Trekking Pants</span>
              </p>
              <p className="text-gray-900 text-xl md:text-2xl flex items-center">
                <span className="w-7 h-7 rounded-full bg-green-500 text-white flex items-center justify-center mr-4 flex-shrink-0">
                  <span className="text-lg font-bold">✓</span>
                </span>
                <span>Poncho/Raincoat</span>
              </p>
              <p className="text-gray-900 text-xl md:text-2xl flex items-center">
                <span className="w-7 h-7 rounded-full bg-green-500 text-white flex items-center justify-center mr-4 flex-shrink-0">
                  <span className="text-lg font-bold">✓</span>
                </span>
                <span>2 Socks Pair</span>
              </p>
              <p className="text-gray-900 text-xl md:text-2xl flex items-center">
                <span className="w-7 h-7 rounded-full bg-green-500 text-white flex items-center justify-center mr-4 flex-shrink-0">
                  <span className="text-lg font-bold">✓</span>
                </span>
                <span>Winter wears</span>
              </p>
              <p className="text-gray-900 text-xl md:text-2xl flex items-center">
                <span className="w-7 h-7 rounded-full bg-green-500 text-white flex items-center justify-center mr-4 flex-shrink-0">
                  <span className="text-lg font-bold">✓</span>
                </span>
                <span>Towels</span>
              </p>
              <p className="text-gray-900 text-xl md:text-2xl flex items-center">
                <span className="w-7 h-7 rounded-full bg-green-500 text-white flex items-center justify-center mr-4 flex-shrink-0">
                  <span className="text-lg font-bold">✓</span>
                </span>
                <span>Chappals/Sandals</span>
              </p>
              <p className="text-gray-900 text-xl md:text-2xl flex items-center">
                <span className="w-7 h-7 rounded-full bg-green-500 text-white flex items-center justify-center mr-4 flex-shrink-0">
                  <span className="text-lg font-bold">✓</span>
                </span>
                <span>Minimum 2-3 L Water</span>
              </p>
              <p className="text-gray-900 text-xl md:text-2xl flex items-center">
                <span className="w-7 h-7 rounded-full bg-green-500 text-white flex items-center justify-center mr-4 flex-shrink-0">
                  <span className="text-lg font-bold">✓</span>
                </span>
                <span>Dry Food Items</span>
              </p>
              <p className="text-gray-900 text-xl md:text-2xl flex items-center">
                <span className="w-7 h-7 rounded-full bg-green-500 text-white flex items-center justify-center mr-4 flex-shrink-0">
                  <span className="text-lg font-bold">✓</span>
                </span>
                <span>Govt. ID Card</span>
              </p>
              <p className="text-gray-900 text-xl md:text-2xl flex items-center">
                <span className="w-7 h-7 rounded-full bg-green-500 text-white flex items-center justify-center mr-4 flex-shrink-0">
                  <span className="text-lg font-bold">✓</span>
                </span>
                <span>Sunglasses</span>
              </p>
              <p className="text-gray-900 text-xl md:text-2xl flex items-center">
                <span className="w-7 h-7 rounded-full bg-green-500 text-white flex items-center justify-center mr-4 flex-shrink-0">
                  <span className="text-lg font-bold">✓</span>
                </span>
                <span>Cap/Hat</span>
              </p>
              <p className="text-gray-900 text-xl md:text-2xl flex items-center">
                <span className="w-7 h-7 rounded-full bg-green-500 text-white flex items-center justify-center mr-4 flex-shrink-0">
                  <span className="text-lg font-bold">✓</span>
                </span>
                <span>Head torch or Simple hand held torch</span>
              </p>
              <p className="text-gray-900 text-xl md:text-2xl flex items-center">
                <span className="w-7 h-7 rounded-full bg-green-500 text-white flex items-center justify-center mr-4 flex-shrink-0">
                  <span className="text-lg font-bold">✓</span>
                </span>
                <span>Sunscreen</span>
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
      <span className="text-lg md:text-2xl text-gray-800">The Day of Adventure</span>
    </div>
  </button>
  
  {expandedDay === 1 && (
    <div className="p-6 md:p-8 bg-white rounded-lg mb-4 md:mb-8 md:w-[800px]">
      <div className="space-y-4">
        <div className="flex items-start gap-4">
          <span className="mt-1">🕖</span>
          <div>
            <span className="font-semibold text-lg md:text-xl">07:30pm (Friday):</span>
            <span className="ml-3 text-lg md:text-xl">Start the journey towards base village from respective boarding points</span>
          </div>
        </div>

        <div className="flex items-start gap-4">
          <span className="mt-1">🌃</span>
          <div>
            <span className="font-semibold text-lg md:text-xl">02:30am:</span>
            <span className="ml-3 text-lg md:text-xl">Reach the base & take rest!</span>
          </div>
        </div>

        <div className="flex items-start gap-4">
          <span className="mt-1">🌅</span>
          <div>
            <span className="font-semibold text-lg md:text-xl">03:00 am:</span>
            <span className="ml-3 text-lg md:text-xl">After Breakfast start hiking towards the peak after a short briefing and introduction session.</span>
          </div>
        </div>

        <div className="flex items-start gap-4">
          <span className="mt-1">🏔️</span>
          <div>
            <span className="font-semibold text-lg md:text-xl">05:45 am:</span>
            <span className="ml-3 text-lg md:text-xl">Reach the peak & experience the sunrise</span>
          </div>
        </div>

        <div className="flex items-start gap-4">
          <span className="mt-1">⬇️</span>
          <div>
            <span className="font-semibold text-lg md:text-xl">07:30 am:</span>
            <span className="ml-3 text-lg md:text-xl">Start descending after exploring the peak and having picture sessions</span>
          </div>
        </div>

        <div className="flex items-start gap-4">
          <span className="mt-1">🍽️</span>
          <div>
            <span className="font-semibold text-lg md:text-xl">11:30 am:</span>
            <span className="ml-3 text-lg md:text-xl">Finally after everyone descends down safely we reach the base & have lunch!</span>
          </div>
        </div>

        <div className="flex items-start gap-4">
          <span className="mt-1">🚗</span>
          <div>
            <span className="font-semibold text-lg md:text-xl">02:30 pm:</span>
            <span className="ml-3 text-lg md:text-xl">Start the Return Journey towards Pune</span>
          </div>
        </div>

        <div className="flex items-start gap-4">
          <span className="mt-1">🏠</span>
          <div>
            <span className="font-semibold text-lg md:text-xl">08:00 pm:</span>
            <span className="ml-3 text-lg md:text-xl">Reach Pune</span>
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

export default Kalsubai;