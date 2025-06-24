import React, { useEffect, useState } from 'react';
import { ChevronDown } from 'lucide-react';
import para from '../assets/Treks/Ladakh/parallax.jpg';
import A1 from '../assets/Treks/Ladakh/main-1.jpg';
import A2 from '../assets/Treks/Ladakh/main-2.jpg';
import A3 from '../assets/Treks/Ladakh/main-3.jpg';

const Ladakh = () => {
  const [scrollY, setScrollY] = useState(0);
  const [expandedDay, setExpandedDay] = useState(null);
  const [isVisible, setIsVisible] = useState({});
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Detect mobile devices - tablets and phones only
    const checkIfMobile = () => {
      const isMobileDevice = window.innerWidth < 768 || 
        /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
      setIsMobile(isMobileDevice);
    };
    
    checkIfMobile();
    window.addEventListener('resize', checkIfMobile);

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

    // For mobile: use optimized scroll handler
    // For desktop: use regular scroll handler to preserve original behavior
    if (isMobile) {
      let ticking = false;
      const handleScrollOptimized = () => {
        if (!ticking) {
          requestAnimationFrame(() => {
            handleScroll();
            ticking = false;
          });
          ticking = true;
        }
      };
      window.addEventListener('scroll', handleScrollOptimized, { passive: true });
      return () => {
        window.removeEventListener('scroll', handleScrollOptimized);
        window.removeEventListener('resize', checkIfMobile);
      };
    } else {
      window.addEventListener('scroll', handleScroll);
      return () => {
        window.removeEventListener('scroll', handleScroll);
        window.removeEventListener('resize', checkIfMobile);
      };
    }
  }, [isVisible, isMobile]);

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
               Leh Ladakh Backpacking
              </h1>
            </div>
            
            {/* Right Column - Info */}
            <div className="flex flex-col justify-center md:ml-0 lg:ml-[80px] mt-0 md:mt-[40px] lg:mt-[80px]">
              <div className="mb-6 md:mb-8">
                <p className="text-gray-600 text-lg md:text-xl lg:text-2xl flex items-center">
                  <span className="mr-3">📍</span>
                  Leh Ladakh
                </p>
              </div>
              <div className="mb-8 md:mb-12">
                <p className="text-gray-600 text-lg md:text-xl lg:text-2xl">
                  🗓️ 25th-30th August 2025 <br/>24th-29th September
                </p>
              </div>
              <div>
                <p className="text-gray-700 text-lg md:text-xl lg:text-2xl max-w-lg leading-relaxed">
                Leh Ladakh, a land of breathtaking landscapes and serene monasteries, is a paradise for adventure enthusiasts and nature lovers alike. Nestled amidst the majestic Himalayas, it offers unique experiences with its rugged terrain, vibrant culture, and pristine beauty.
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
            backgroundImage: `url(${para})`,
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
              <p className="text-gray-800 text-base md:text-lg mb-2">5 Nights / 6 Days <br/>
- Mini Bus Travel: ₹17,999/-<br/>
- Bike Travel(Dual Sharing): ₹18,499/-<br/>
- Bike Travel: ₹23,999/-<br/>
7 Nights / 8 Days<br/>
- Mini Bus Travel: ₹24,999/-<br/>
- Bike Travel(Dual Sharing): ₹25,999/-<br/>
- Bike Travel: ₹31,999/</p><br/>
            
            </div>
            
            {/* Slots Column */}
            <div>
              <h3 className="text-gray-900 font-semibold mb-3 md:mb-4 text-lg md:text-xl">Slots:</h3>
              <p className="text-gray-800 text-base md:text-lg">👥 24 Explorers</p>
            </div>
            
            {/* Schedule Column */}
            <div>
              <h3 className="text-gray-900 font-semibold mb-3 md:mb-4 text-lg md:text-xl">Schedule:</h3>
              <p className="text-gray-800 text-base md:text-lg">🕒 25th-30th August 2025 <br/>24th-29th September</p>
            </div>
          </div>
          
          {/* Boarding Points */}
          <div className="mb-16 md:mb-24">
            <h3 className="text-gray-900 font-semibold mb-4 md:mb-6 text-lg md:text-xl">Boarding Points</h3>
            <div className="space-y-2 md:space-y-3">
              <p className="text-gray-800 text-base md:text-lg">📍 Leh</p>
              <p className="text-gray-800 text-base md:text-lg">📍 Delhi</p>
            </div>
          </div>
          
          {/* Historical Information */}
          <div className="mb-16 md:mb-24">
            <p className="text-gray-700 mb-4 md:mb-6 text-base md:text-lg leading-relaxed">
            Experience the enchanting landscapes of Ladakh with this meticulously curated itinerary by Kafila Adventures Nestled in the lap of the Himalayas, Ladakh is a land of stunning mountain vistas, pristine lakes, and vibrant Buddhist culture. With high-altitude passes, serene valleys, and azure skies, this trip promises to be a soul-stirring adventure.Are you ready?
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
            <span className="text-xl md:text-3xl font-semibold text-gray-900">5N/6D</span>
            <span className="text-lg md:text-2xl text-gray-800">Ladakh Odyssey: A Journey to the Land of High Passes</span>
          </div>
        </button>
        
        {expandedDay === 1 && (
          <div className="p-6 md:p-8 bg-white rounded-lg mb-4 md:mb-8 md:w-[800px]">
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <span className="mt-1">⏰</span>
                <div>
                  <span className="font-semibold text-lg md:text-xl">Day 1: Arrival in Leh (3,500m)</span>
                  <span className="ml-3 text-lg md:text-xl"><br/>- Arrival: Reach Leh Airport (IXL) and transfer to your hotel.<br/>
- Check-In: Relax and allow your body to acclimatize to the high altitude.<br/>
- Evening: Explore the Leh Market and its surroundings, soaking in the local vibes.</span>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <span className="mt-1">⏰</span>
                <div>
                  <span className="font-semibold text-lg md:text-xl">Day 2: Local Ride to Sham Valley</span>
                  <span className="ml-3 text-lg md:text-xl"><br/>- 09:00 AM: Begin your bike ride to Sham Valley.<br/>
- Highlights: Visit Magnetic Hill, Gurudwara Pathar Sahib, and the confluence of the Indus and Zanskar rivers at Sangam Point.<br/>
- 04:00 PM: Return to Leh and spend the evening relaxing or exploring the local market.</span>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <span className="mt-1">⏰</span>
                <div>
                  <span className="font-semibold text-lg md:text-xl">Day 3: Leh to Nubra Valley (3,048m)</span>
                  <span className="ml-3 text-lg md:text-xl"><br/>- 08:00 AM: Drive to Nubra Valley via the iconic Khardung La Pass (5,602m), one of the highest motorable roads in the world.
<br/>- 01:00 PM: Lunch at North Pullu.
<br/>- 03:00 PM: Visit Diskit Monastery and the mesmerizing Hunder Sand Dunes.
<br/>- 05:00 PM: Check-in at your camp/hotel in Nubra Valley.
<br/>- Evening: Optional camel ride or ATV tour amidst the desert dunes.</span>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <span className="mt-1">⏰</span>
                <div>
                  <span className="font-semibold text-lg md:text-xl">Day 4: Nubra Valley to Pangong Lake (4,250m)</span>
                  <span className="ml-3 text-lg md:text-xl"><br/>- 08:00 AM: Drive to the world-famous Pangong Lake via Shyok River and Tangste Valley.
<br/>- 02:00 PM: Lunch at Tangste.
<br/>- 04:00 PM: Arrive at Pangong Lake and check-in at your lakeside camp.
<br/>- Evening: Marvel at the lake's surreal hues and the surrounding landscapes.</span>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <span className="mt-1">⏰</span>
                <div>
                  <span className="font-semibold text-lg md:text-xl">Day 5: Pangong Lake to Leh (3,500m)</span>
                  <span className="ml-3 text-lg md:text-xl"><br/>- 08:00 AM: Drive back to Leh, traversing the scenic Chang La Pass (5,360m).
<br/>- 01:00 PM: Lunch at Karu.
<br/>- 03:00 PM: Check-in at your hotel in Leh.
<br/>- Evening: Free time to explore Leh Market or relax.</span>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <span className="mt-1">⏰</span>
                <div>
                  <span className="font-semibold text-lg md:text-xl">Day 6: Departure from Leh</span>
                  <span className="ml-3 text-lg md:text-xl"><br/>- 08:00 AM: Check-out from your hotel.
<br/>- 09:00 AM: Transfer to Leh Airport (IXL) or bus stand for your onward journey</span>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Day 2 Section */}
      <div className="mb-8 md:mb-12">
        <button 
          onClick={() => setExpandedDay(expandedDay === 2 ? null : 2)}
          className="w-full md:w-[800px] text-left p-6 md:p-8 bg-gray-50 hover:bg-white rounded-lg flex flex-col md:flex-row justify-start items-start md:items-center mb-4 md:mb-8 transition-colors"
        >
          <div className="flex items-center gap-4 md:gap-8">
            <span className="text-xl md:text-3xl font-semibold text-gray-900">7N/8D</span>
            <span className="text-lg md:text-2xl text-gray-800">Ladakh Odyssey: A Journey to the Land of High Passes & Beyond</span>
          </div>
        </button>
        
        {expandedDay === 2 && (
          <div className="p-6 md:p-8 bg-white rounded-lg mb-4 md:mb-8 md:w-[800px]">
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <span className="mt-1">⏰</span>
                <div>
                  <span className="font-semibold text-lg md:text-xl">Day 1: Arrival in Leh (3,500m)</span>
                  <span className="ml-3 text-lg md:text-xl"><br/>- Arrival: Reach Leh Airport (IXL) and transfer to your hotel.
<br/>- Check-In: Spend the day resting to acclimatize to the high altitude.
<br/>- Evening: Stroll through Leh Market and explore the local surroundings.</span>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <span className="mt-1">⏰</span>
                <div>
                  <span className="font-semibold text-lg md:text-xl">Day 2: Leh Local Sightseeing</span>
                  <span className="ml-3 text-lg md:text-xl"><br/>- 09:00 AM: Visit Shanti Stupa for panoramic views of Leh and its surroundings.
<br/>- 10:30 AM: Explore the Hall of Fame, a museum dedicated to the Indian Army.
<br/>- 12:00 PM: Visit Pathar Sahib Gurudwara, Magnetic Hill, and the Sangam Point, where the Indus and Zanskar rivers meet.
<br/>- Evening: Relax at your hotel or spend time exploring Leh Market.</span>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <span className="mt-1">⏰</span>
                <div>
                  <span className="font-semibold text-lg md:text-xl">Day 3: Leh to Nubra Valley (3,048m)</span>
                  <span className="ml-3 text-lg md:text-xl"><br/>- 08:00 AM: Drive to Nubra Valley via Khardung La Pass (5,602m), one of the highest motorable roads in the world.
<br/>- 01:00 PM: Lunch break at North Pullu.
<br/>- 03:00 PM: Visit Diskit Monastery and the famous Hunder Sand Dunes.
<br/>- 05:00 PM: Check-in at your camp/hotel in Nubra Valley.
<br/>- Evening: Optional camel ride or ATV tour in the sand dunes.</span>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <span className="mt-1">⏰</span>
                <div>
                  <span className="font-semibold text-lg md:text-xl">Day 4: Nubra Valley to Pangong Lake (4,250m)</span>
                  <span className="ml-3 text-lg md:text-xl"><br/>- 08:00 AM: Journey to Pangong Lake via the scenic Shyok River and Tangste Valley.
<br/>- 02:00 PM: Lunch break at Tangste.
<br/>- 04:00 PM: Arrive at Pangong Lake and check-in at your lakeside camp.
<br/>- Evening: Experience the mesmerizing hues of the lake and its surrounding landscapes.</span>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <span className="mt-1">⏰</span>
                <div>
                  <span className="font-semibold text-lg md:text-xl">Day 5: Pangong Lake to Hanle (4,250m)</span>
                  <span className="ml-3 text-lg md:text-xl"><br/>- 08:00 AM: Drive to Hanle via Chushul and the Loma Bend.
<br/>- 01:00 PM: Lunch break at Chushul.
<br/>- 03:00 PM: Check-in at your camp/hotel in Hanle.
<br/>- Evening: Visit Hanle Monastery and enjoy spectacular stargazing under the clear Ladakhi skies.</span>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <span className="mt-1">⏰</span>
                <div>
                  <span className="font-semibold text-lg md:text-xl">Day 6: Hanle to Umling La (5,350m) and Back to Hanle</span>
                  <span className="ml-3 text-lg md:text-xl"><br/>- 08:00 AM: Drive to Umling La Pass, the world’s highest motorable pass.
<br/>- 12:00 PM: Lunch break at Umling La.
<br/>- 02:00 PM: Return to Hanle.
<br/>- Evening: Relax and unwind at your camp/hotel.</span>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <span className="mt-1">⏰</span>
                <div>
                  <span className="font-semibold text-lg md:text-xl">Day 7: Hanle to Leh (3,500m)</span>
                  <span className="ml-3 text-lg md:text-xl"><br/>- 08:00 AM: Begin your journey back to Leh via Chushul and Karu.
<br/>- 01:00 PM: Lunch break at Karu.
<br/>- 03:00 PM: Arrive in Leh and check-in at your hotel.
<br/>- Evening: Spend your final evening exploring the vibrant Leh Market.</span>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <span className="mt-1">⏰</span>
                <div>
                  <span className="font-semibold text-lg md:text-xl">Day 8: Departure from Leh</span>
                  <span className="ml-3 text-lg md:text-xl">- <br/>08:00 AM: Check-out from your hotel.
<br/>- 09:00 AM: Transfer to Leh Airport (IXL) for your departure.</span>
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
        src= {A1}
        alt="Mountain landscape with river" 
        className="w-full h-full object-cover"
      />
    </div>
    
    {/* Right column - two stacked smaller images */}
    <div className="grid grid-rows-1 md:grid-rows-2 gap-4 md:gap-5">
      <div className="rounded-xl overflow-hidden shadow-lg aspect-[16/9]">
        <img 
          src= {A2}
          alt="Mountain landscape with trees" 
          className="w-full h-full object-cover"
        />
      </div>
      <div className="rounded-xl overflow-hidden shadow-lg aspect-[16/9]">
        <img 
        src={A3}
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

export default Ladakh;