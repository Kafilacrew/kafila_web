import React, { useEffect, useState } from 'react';
import harishchandragad from '../assets/Harishchandragad.jpg';
import RefundPolicy from '../components/RefundPolicy';
import UpcomingAdventuresSection from '../components/upcomingadventures';
import BookingForm from '../components/Bookingform';
import Nanemachi1 from '../assets/Treks/Nanemachi/Nanemachi-parallex.webp'
import Nanemachi2 from '../assets/Treks/Nanemachi/Nanemachi-1.jpg'
import Nanemachi3 from '../assets/Treks/Nanemachi/Nanemachi-2.avif'
import Nanemachi4 from '../assets/Treks/Nanemachi/Nanemachi-3.avif'

const NanemachiTrek = () => {
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
      <div className="relative bg-white py-12 sm:py-8 md:py-12 lg:py-16 xl:py-20">
        <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 xl:gap-16 mt-12 sm:mt-16 lg:mt-20 xl:mt-24">
            {/* Left Column - Title */}
            <div className="flex items-center justify-center lg:justify-start">
              <h1 
                className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-times font-bold text-gray-900 leading-[0.9] text-center lg:text-left lg:ml-[50px] xl:ml-[100px] 2xl:ml-[150px] transition-all duration-700"
                style={{
                  opacity: scrollY < 50 ? 1 : 0.8,
                  transform: `translateY(${scrollY * 0.1}px)`
                }}
              >
                Nanemachi Trek
              </h1>
            </div>
            
            {/* Right Column - Info */}
            <div className="flex flex-col justify-center items-center lg:items-start space-y-4 sm:space-y-6 lg:space-y-8 lg:ml-[30px] xl:ml-[60px] 2xl:ml-[80px]">
              <div className="animate-on-scroll opacity-0 translate-y-10 transition-all duration-500" 
                   data-id="location" 
                   style={isVisible.location ? {opacity: 1, transform: 'translateY(0)'} : {}}>
                <p className="text-gray-600 text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl flex items-center justify-center lg:justify-start">
                  <span className="mr-3 text-xl sm:text-2xl">📍</span>
                  Nanemachi, Maharashtra
                </p>
              </div>
              <div className="animate-on-scroll opacity-0 translate-y-10 transition-all duration-500" 
                   data-id="date" 
                   style={isVisible.date ? {opacity: 1, transform: 'translateY(0)'} : {}}>
                <p className="text-gray-600 text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl text-center lg:text-left">
                  <span className="mr-3 text-xl sm:text-2xl">🗓️</span>
                  June-July, 2025
                </p>
              </div>
              <div className="animate-on-scroll opacity-0 translate-y-10 transition-all duration-500" 
                   data-id="description" 
                   style={isVisible.description ? {opacity: 1, transform: 'translateY(0)'} : {}}>
                <p className="text-gray-700 text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl max-w-lg leading-relaxed text-center lg:text-left">
                  Unveil the beauty of tropical bliss. From sun-kissed shores to vibrant cultural experiences, this journey promises you a solitary escape.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Parallax Image Section - Keep desktop effect, fix mobile */}
      <div className="relative h-[50vh] sm:h-[60vh] md:h-[70vh] lg:h-[80vh] overflow-hidden">
        {isMobile ? (
          // Mobile: Transform-based parallax
          <div 
            className="absolute inset-0 w-full h-[130%] -top-[15%]"
            style={{ 
              backgroundImage: `url(${Nanemachi1})`,
              backgroundPosition: 'center center',
              backgroundSize: 'cover',
              backgroundRepeat: 'no-repeat',
              transform: `translate3d(0, ${parallaxOffset}px, 0)`,
              willChange: 'transform',
              backfaceVisibility: 'hidden'
            }}
          />
        ) : (
          // Desktop: Your exact original parallax effect
          <div 
            className="absolute inset-0 w-full h-full"
            style={{ 
              backgroundImage: `url(${Nanemachi1})`,
              backgroundPosition: 'center',
              backgroundSize: 'cover',
              backgroundAttachment: 'fixed',
              transition: 'transform 0.1s ease-out'
            }}
          />
        )}
      </div>

      {/* Additional Content Area */}
      <div className="bg-white">
        <div className="max-w-[1200px] mx-auto px-4 md:px-8">
          {/* Details Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 md:gap-12 lg:gap-16 mb-12 sm:mb-16 md:mb-24 mt-[30px] sm:mt-[40px]">
            {/* Price Column */}
            <div className="animate-on-scroll opacity-0 translate-y-10 transition-all duration-500 text-left" 
                 data-id="price" 
                 style={isVisible.price ? {opacity: 1, transform: 'translateY(0)'} : {}}>
              <h3 className="text-gray-900 font-bold mb-2 sm:mb-3 md:mb-4 text-lg md:text-xl">Price:</h3>
              <p className="text-gray-800 text-base md:text-lg mb-2">₹ 1399/- (Ex. Pune)</p>
            </div>
            
            {/* Slots Column */}
            <div className="animate-on-scroll opacity-0 translate-y-10 transition-all duration-500 text-left" 
                 data-id="slots" 
                 style={isVisible.slots ? {opacity: 1, transform: 'translateY(0)'} : {}}>
              <h3 className="text-gray-900 font-semibold mb-2 sm:mb-3 md:mb-4 text-lg md:text-xl">Slots:</h3>
              <p className="text-gray-800 text-base md:text-lg">👥 50 Explorers</p>
            </div>
            
            {/* Schedule Column */}
            <div className="animate-on-scroll opacity-0 translate-y-10 transition-all duration-500 text-left sm:col-span-2 md:col-span-1" 
                 data-id="schedule" 
                 style={isVisible.schedule ? {opacity: 1, transform: 'translateY(0)'} : {}}>
              <h3 className="text-gray-900 font-semibold mb-2 sm:mb-3 md:mb-4 text-lg md:text-xl">Schedule:</h3>
              <p className="text-gray-800 text-base md:text-lg">🕒 June-July 2025</p>
            </div>
          </div>
          
          {/* Boarding Points */}
          <div className="mb-12 sm:mb-16 md:mb-24 animate-on-scroll opacity-0 translate-y-10 transition-all duration-500" 
               data-id="boarding" 
               style={isVisible.boarding ? {opacity: 1, transform: 'translateY(0)'} : {}}>
            <h3 className="text-gray-900 font-semibold mb-4 md:mb-6 text-lg md:text-xl text-left">Boarding Points</h3>
            <div className="space-y-2 md:space-y-3">
              <p className="text-gray-800 text-sm sm:text-base md:text-lg text-left">📍 Swargate(Near Laxminarayan Theatre)</p>
              <p className="text-gray-800 text-sm sm:text-base md:text-lg text-left">📍 Deccan Corner(Opp. to Vimlabai Garware College)</p>
              <p className="text-gray-800 text-sm sm:text-base md:text-lg text-left">📍 Vanaz</p>
              <p className="text-gray-800 text-sm sm:text-base md:text-lg text-left">📍 Waki Gavthan</p>
            </div>
          </div>
          
          {/* Historical Information */}
          <div className="mb-12 sm:mb-16 md:mb-24 animate-on-scroll opacity-0 translate-y-10 transition-all duration-500" 
               data-id="history" 
               style={isVisible.history ? {opacity: 1, transform: 'translateY(0)'} : {}}>
            <p className="text-gray-700 mb-4 md:mb-6 text-sm sm:text-base md:text-lg leading-relaxed text-left">
              Nanemachi waterfall is located in Nanemachi village in Mahad in the Raigad district of the Konkan region. Located inside the dense Jungle of Raigad, this heavenly & spectacular 400ft high waterfall is regarded as the biggest waterfall in Raigad. The view around and the waterfall is really fascinating to our eyes and make us lost completely. A must do waterfall trek in the monsoon season.
            </p>
          </div>

          {/* Includes Section */}
          <div className="mb-12 sm:mb-16 md:mb-24 animate-on-scroll opacity-0 translate-y-10 transition-all duration-500" 
               data-id="includes" 
               style={isVisible.includes ? {opacity: 1, transform: 'translateY(0)'} : {}}>
            <h3 className="text-gray-900 font-bold mb-4 sm:mb-6 md:mb-8 text-lg sm:text-xl md:text-2xl text-left">Includes:</h3>
            <div className="space-y-3 sm:space-y-4 md:space-y-5">
              <p className="text-gray-900 text-sm sm:text-base md:text-lg lg:text-xl flex items-start justify-start">
                <span className="w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-green-500 text-white flex items-center justify-center mr-3 sm:mr-4 flex-shrink-0 mt-1 sm:mt-0">
                  <span className="text-sm sm:text-lg font-bold">✓</span>
                </span>
                <span>Transport from Pune to Pune</span>
              </p>
              <p className="text-gray-900 text-sm sm:text-base md:text-lg lg:text-xl flex items-start justify-start">
                <span className="w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-green-500 text-white flex items-center justify-center mr-3 sm:mr-4 flex-shrink-0 mt-1 sm:mt-0">
                  <span className="text-sm sm:text-lg font-bold">✓</span>
                </span>
                <span>1 Breakfast and 1 lunch</span>
              </p>
              <p className="text-gray-900 text-sm sm:text-base md:text-lg lg:text-xl flex items-start justify-start">
                <span className="w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-green-500 text-white flex items-center justify-center mr-3 sm:mr-4 flex-shrink-0 mt-1 sm:mt-0">
                  <span className="text-sm sm:text-lg font-bold">✓</span>
                </span>
                <span>Forest Passes</span>
              </p>
              <p className="text-gray-900 text-sm sm:text-base md:text-lg lg:text-xl flex items-start justify-start">
                <span className="w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-green-500 text-white flex items-center justify-center mr-3 sm:mr-4 flex-shrink-0 mt-1 sm:mt-0">
                  <span className="text-sm sm:text-lg font-bold">✓</span>
                </span>
                <span>First Aid</span>
              </p>
              <p className="text-gray-900 text-sm sm:text-base md:text-lg lg:text-xl flex items-start justify-start">
                <span className="w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-green-500 text-white flex items-center justify-center mr-3 sm:mr-4 flex-shrink-0 mt-1 sm:mt-0">
                  <span className="text-sm sm:text-lg font-bold">✓</span>
                </span>
                <span>Guide charges</span>
              </p>
            </div>
          </div>

          {/* Excludes Section */}
          <div className="mb-12 sm:mb-16 md:mb-24 animate-on-scroll opacity-0 translate-y-10 transition-all duration-500" 
               data-id="excludes" 
               style={isVisible.excludes ? {opacity: 1, transform: 'translateY(0)'} : {}}>
            <h3 className="text-gray-900 font-bold mb-4 sm:mb-6 md:mb-8 text-lg sm:text-xl md:text-2xl text-left">Excludes:</h3>
            <div className="space-y-3 sm:space-y-4 md:space-y-5">
              <p className="text-gray-900 text-sm sm:text-base md:text-lg lg:text-xl flex items-start justify-start">
                <span className="w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-red-500 text-white flex items-center justify-center mr-3 sm:mr-4 flex-shrink-0 mt-1 sm:mt-0">
                  <span className="text-sm sm:text-lg">✗</span>
                </span>
                <span>Personal expenses</span>
              </p>
              <p className="text-gray-900 text-sm sm:text-base md:text-lg lg:text-xl flex items-start justify-start">
                <span className="w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-red-500 text-white flex items-center justify-center mr-3 sm:mr-4 flex-shrink-0 mt-1 sm:mt-0">
                  <span className="text-sm sm:text-lg">✗</span>
                </span>
                <span>Optional excursions</span>
              </p>
            </div>
          </div>

          {/* What to Carry Section - Clean left-aligned list */}
          <div className="mb-16 sm:mb-20 md:mb-24 lg:mb-32">
            <h3 className="text-gray-900 font-bold mb-6 sm:mb-8 md:mb-10 text-xl sm:text-2xl md:text-3xl lg:text-4xl text-left">What to Carry?</h3>
            <div className="grid grid-cols-1 gap-4 sm:gap-5 md:gap-6">
              {[
                "Backpack [30-40L]",
                "Thermal wear (inner layers)",
                "Fleece jackets and windcheaters",
                "Waterproof and insulated gloves",
                "Woolen caps, mufflers, and socks",
                "Comfortable trekking shoes",
                "Valid ID proof",
                "Personal medicines",
                "Sunglasses with UV protection",
                "Sunscreen lotion (SPF 50+), lip balm, and moisturizer",
                "Reusable water bottles (to stay hydrated)",
                "Headlamp or flashlight with extra batteries",
                "Camera to capture memories",
                "Power banks and chargers",
                "Head torch or Simple hand held torch",
                "Snacks and energy bars"
              ].map((item, index) => (
                <div 
                  key={index} 
                  className="flex items-start justify-start"
                >
                  <span className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 rounded-full bg-green-500 text-white flex items-center justify-center mr-3 sm:mr-4 md:mr-5 flex-shrink-0 mt-1 sm:mt-0">
                    <span className="text-xs sm:text-sm md:text-base font-bold">✓</span>
                  </span>
                  <span className="text-gray-900 text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed text-left">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <BookingForm/>

      {/* The Journey Section */}
      <div className="py-12 sm:py-16 md:py-16 bg-white">
        <div className="max-w-[1600px] mx-auto px-4 md:px-8">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 text-center md:text-left mb-8 sm:mb-12 md:mb-16 md:ml-[50px] lg:ml-[100px] xl:ml-[150px] animate-on-scroll opacity-0 translate-y-10 transition-all duration-500" 
              data-id="journey-title" 
              style={isVisible['journey-title'] ? {opacity: 1, transform: 'translateY(0)'} : {}}>
            The Journey
          </h2>
          
          <div className="max-w-6xl mx-auto">
            {/* Day 1 Section */}
            <div className="mb-6 sm:mb-8 md:mb-12 animate-on-scroll opacity-0 translate-y-10 transition-all duration-500" 
                 data-id="day1" 
                 style={isVisible.day1 ? {opacity: 1, transform: 'translateY(0)'} : {}}>
              <button 
                onClick={() => setExpandedDay(expandedDay === 1 ? null : 1)}
                className="w-full max-w-[800px] text-left p-4 sm:p-6 md:p-8 bg-gray-50 hover:bg-gray-100 rounded-lg flex flex-col md:flex-row justify-start items-start md:items-center mb-4 md:mb-8 transition-all duration-300 hover:shadow-lg"
              >
                <div className="flex items-center gap-3 sm:gap-4 md:gap-8">
                  <span className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold text-gray-900">Day 1</span>
                  <span className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-800">The Journey Begins</span>
                </div>
              </button>
              
              {expandedDay === 1 && (
                <div className="p-4 sm:p-6 md:p-8 bg-white rounded-lg mb-4 md:mb-8 max-w-[800px] animate-scale-up">
                  <div className="space-y-4">
                    <div className="flex items-start gap-3 sm:gap-4">
                      <span className="mt-1">⏰</span>
                      <div>
                        <span className="font-semibold text-base sm:text-lg md:text-xl">10:00 pm:</span>
                        <span className="ml-2 sm:ml-3 text-base sm:text-lg md:text-xl">Assemble at the designated pickup point in Pune and start the journey toward Waki Gavthan</span>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Day 2 Section */}
            <div className="mb-6 sm:mb-8 md:mb-12 animate-on-scroll opacity-0 translate-y-10 transition-all duration-500" 
                 data-id="day2" 
                 style={isVisible.day2 ? {opacity: 1, transform: 'translateY(0)'} : {}}>
              <button 
                onClick={() => setExpandedDay(expandedDay === 2 ? null : 2)}
                className="w-full max-w-[800px] text-left p-4 sm:p-6 md:p-8 bg-gray-50 hover:bg-gray-100 rounded-lg flex flex-col md:flex-row justify-start items-start md:items-center mb-4 md:mb-8 transition-all duration-300 hover:shadow-lg"
              >
                <div className="flex items-center gap-3 sm:gap-4 md:gap-8">
                  <span className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold text-gray-900">Day 2</span>
                  <span className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-800">Adventure Day</span>
                </div>
              </button>
              
              {expandedDay === 2 && (
                <div className="p-4 sm:p-6 md:p-8 bg-white rounded-lg mb-4 md:mb-8 max-w-[800px] animate-scale-up">
                  <div className="space-y-4">
                    <div className="flex items-start gap-3 sm:gap-4">
                      <span className="mt-1">⏰</span>
                      <div>
                        <span className="font-semibold text-base sm:text-lg md:text-xl">4:30 am:</span>
                        <span className="ml-2 sm:ml-3 text-base sm:text-lg md:text-xl"> Reach the Base Village.</span>
                      </div>
                    </div>
                    <div className="flex items-start gap-3 sm:gap-4">
                      <span className="mt-1">⏰</span>
                      <div>
                        <span className="font-semibold text-base sm:text-lg md:text-xl">06:00 am:</span>
                        <span className="ml-2 sm:ml-3 text-base sm:text-lg md:text-xl"> Freshen up & Have Breakfast & start hiking on the trail after a short briefing session.</span>
                      </div>
                    </div>
                    <div className="flex items-start gap-3 sm:gap-4">
                      <span className="mt-1">⏰</span>
                      <div>
                        <span className="font-semibold text-base sm:text-lg md:text-xl">07:30 am:</span>
                        <span className="ml-2 sm:ml-3 text-base sm:text-lg md:text-xl">Reach Nanemachi & embrace the views.</span>
                      </div>
                    </div>
                    <div className="flex items-start gap-3 sm:gap-4">
                      <span className="mt-1">⏰</span>
                      <div>
                        <span className="font-semibold text-base sm:text-lg md:text-xl">09:00 am:</span>
                        <span className="ml-2 sm:ml-3 text-base sm:text-lg md:text-xl">Leave for Saatsada Waterfall after a brief time at the waterfall</span>
                      </div>
                    </div>
                    <div className="flex items-start gap-3 sm:gap-4">
                      <span className="mt-1">⏰</span>
                      <div>
                        <span className="font-semibold text-base sm:text-lg md:text-xl">11:00 am:</span>
                        <span className="ml-2 sm:ml-3 text-base sm:text-lg md:text-xl">Reach Saatsada after a short hike.</span>
                      </div>
                    </div>
                    <div className="flex items-start gap-3 sm:gap-4">
                      <span className="mt-1">⏰</span>
                      <div>
                        <span className="font-semibold text-base sm:text-lg md:text-xl">12:30 pm:</span>
                        <span className="ml-2 sm:ml-3 text-base sm:text-lg md:text-xl">Return towards the base camp for lunch.</span>
                      </div>
                    </div>
                    <div className="flex items-start gap-3 sm:gap-4">
                      <span className="mt-1">⏰</span>
                      <div>
                        <span className="font-semibold text-base sm:text-lg md:text-xl">02:30 pm:</span>
                        <span className="ml-2 sm:ml-3 text-base sm:text-lg md:text-xl">Proceed towards Pune after resting for some time.</span>
                      </div>
                    </div>
                    <div className="flex items-start gap-3 sm:gap-4">
                      <span className="mt-1">⏰</span>
                      <div>
                        <span className="font-semibold text-base sm:text-lg md:text-xl">08:30 pm:</span>
                        <span className="ml-2 sm:ml-3 text-base sm:text-lg md:text-xl">Reach Pune.</span>
                      </div>
                    </div>
                    <div className="mt-4 sm:mt-6 md:mt-8 p-3 sm:p-4 md:p-6 bg-gray-50 rounded-lg">
                      <p className="text-sm sm:text-base md:text-lg text-gray-700">
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
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 md:gap-10 max-w-7xl mx-auto">
                {/* Left column - single large image */}
                <div className="rounded-xl overflow-hidden shadow-lg aspect-[4/3] sm:aspect-[3/4] md:aspect-[3.5/4] group">
                  <img 
                    src={Nanemachi2} 
                    alt="Mountain landscape with river" 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                
                {/* Right column - two stacked smaller images */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 md:grid-rows-2 gap-4 md:gap-5">
                  <div className="rounded-xl overflow-hidden shadow-lg aspect-[16/9] group">
                    <img 
                      src={Nanemachi3} 
                      alt="Mountain landscape with trees" 
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                  <div className="rounded-xl overflow-hidden shadow-lg aspect-[16/9] group">
                    <img 
                      src={Nanemachi4} 
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

        /* Enhanced CSS */
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

        /* Smooth scrolling for all devices */
        html {
          scroll-behavior: smooth;
          -webkit-overflow-scrolling: touch;
        }

        /* Custom breakpoint for extra small devices */
        @media (min-width: 475px) {
          .xs\:text-4xl {
            font-size: 2.25rem;
            line-height: 2.5rem;
          }
        }

        /* Enhanced mobile optimizations */
        @media (max-width: 1024px) {
          /* Better touch targets */
          button {
            min-height: 44px;
          }
          
          /* Improve text readability */
          p, span {
            -webkit-font-smoothing: antialiased;
            -moz-osx-font-smoothing: grayscale;
          }
        }

        /* Reduce motion for users who prefer it */
        @media (prefers-reduced-motion: reduce) {
          .animate-on-scroll,
          .animate-scale-up {
            animation: none;
            transition: none;
          }
          
          [style*="transform"] {
            transform: none !important;
          }
        }
      `}</style>
      
      <UpcomingAdventuresSection/>
      <RefundPolicy/>
          </div>
  );
};

export default NanemachiTrek;