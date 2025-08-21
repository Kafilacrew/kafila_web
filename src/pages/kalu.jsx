import React, { useEffect, useState } from 'react';
import RefundPolicy from '../components/RefundPolicy';
import UpcomingAdventuresSection from '../components/upcomingadventures';
import BookingForm from '../components/Bookingform';
import Kpara from '../assets/Treks/Kalu/parallax.avif';
import K1 from '../assets/Treks/Kalu/kalu-1.webp';
import K2 from '../assets/Treks/Kalu/kalu-2.jpeg';
import K3 from '../assets/Treks/Kalu/kalu-3.avif';

const KaluWaterfallTrek = () => {
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
    <div className="min-h-screen overflow-x-hidden">
      {/* Header Section */}
      <div className="relative bg-white py-6 sm:py-8 md:py-12 lg:py-16 xl:py-20">
        <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 xl:gap-16 mt-16 sm:mt-20 lg:mt-24 xl:mt-28">
            {/* Left Column - Title */}
            <div className="flex items-center justify-center lg:justify-start">
              <h1 
                className="text-4xl xs:text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl 2xl:text-10xl font-times font-bold text-gray-900 leading-[0.9] text-center lg:text-left lg:ml-[20px] xl:ml-[50px] 2xl:ml-[100px] transition-all duration-700 px-2 sm:px-0 break-words hyphens-auto mt-[50px]"
                style={{
                  opacity: scrollY < 50 ? 1 : 0.8,
                  transform: `translateY(${scrollY * 0.1}px)`
                }}
              >
                Kalu Waterfall Trek
              </h1>
            </div>
            
            {/* Right Column - Info */}
            <div className="flex flex-col justify-center items-center lg:items-start space-y-3 sm:space-y-4 md:space-y-6 lg:space-y-8 lg:ml-[15px] xl:ml-[30px] 2xl:ml-[60px] px-4 sm:px-0">
              <div className="animate-on-scroll opacity-0 translate-y-10 transition-all duration-500" 
                   data-id="location" 
                   style={isVisible.location ? {opacity: 1, transform: 'translateY(0)'} : {}}>
                <p className="text-gray-600 text-sm xs:text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl flex items-center justify-center lg:justify-start">
                  <span className="mr-2 sm:mr-3 text-lg sm:text-xl md:text-2xl flex-shrink-0">📍</span>
                  <span className="break-words">Malshej, Maharashtra</span>
                </p>
              </div>
              <div className="animate-on-scroll opacity-0 translate-y-10 transition-all duration-500" 
                   data-id="date" 
                   style={isVisible.date ? {opacity: 1, transform: 'translateY(0)'} : {}}>
                <p className="text-gray-600 text-sm xs:text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl text-center lg:text-left">
                  <span className="mr-2 sm:mr-3 text-lg sm:text-xl md:text-2xl flex-shrink-0">🗓️</span>
                  <span className="break-words">August-September, 2025</span>
                </p>
              </div>
              <div className="animate-on-scroll opacity-0 translate-y-10 transition-all duration-500" 
                   data-id="description" 
                   style={isVisible.description ? {opacity: 1, transform: 'translateY(0)'} : {}}>
                <p className="text-gray-700 text-xs xs:text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl max-w-full lg:max-w-lg leading-relaxed text-center lg:text-left break-words hyphens-auto">
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
              backgroundImage: `url(${Kpara})`,
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
              backgroundImage: `url(${Kpara})`,
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
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Details Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 lg:gap-12 py-8 sm:py-12 lg:py-16">
            {/* Price Column */}
            <div className="animate-on-scroll opacity-0 translate-y-10 transition-all duration-700 ease-out text-left px-2 sm:px-0" 
                 data-id="price" 
                 style={isVisible.price ? {opacity: 1, transform: 'translateY(0)'} : {}}>
              <h3 className="text-gray-900 font-bold mb-2 sm:mb-3 text-lg sm:text-xl lg:text-2xl break-words">Price:</h3>
              <p className="text-gray-800 text-base sm:text-lg lg:text-xl break-words">₹ 1399/-</p>
            </div>
            
            {/* Slots Column */}
            <div className="animate-on-scroll opacity-0 translate-y-10 transition-all duration-700 ease-out delay-100 text-left px-2 sm:px-0" 
                 data-id="slots" 
                 style={isVisible.slots ? {opacity: 1, transform: 'translateY(0)'} : {}}>
              <h3 className="text-gray-900 font-bold mb-2 sm:mb-3 text-lg sm:text-xl lg:text-2xl break-words">Slots:</h3>
              <p className="text-gray-800 text-base sm:text-lg lg:text-xl break-words">👥 30 Explorers</p>
            </div>
            
            {/* Schedule Column */}
            <div className="animate-on-scroll opacity-0 translate-y-10 transition-all duration-700 ease-out delay-200 text-left px-2 sm:px-0 sm:col-span-2 md:col-span-1" 
                 data-id="schedule" 
                 style={isVisible.schedule ? {opacity: 1, transform: 'translateY(0)'} : {}}>
              <h3 className="text-gray-900 font-bold mb-2 sm:mb-3 text-lg sm:text-xl lg:text-2xl break-words">Schedule:</h3>
              <p className="text-gray-800 text-base sm:text-lg lg:text-xl break-words">🕒 August-September 2025</p>
            </div>
          </div>
          
          {/* Boarding Points */}
          <div className="py-6 sm:py-8 lg:py-12 animate-on-scroll opacity-0 translate-y-10 transition-all duration-700 ease-out px-2 sm:px-0" 
               data-id="boarding" 
               style={isVisible.boarding ? {opacity: 1, transform: 'translateY(0)'} : {}}>
            <h3 className="text-gray-900 font-bold mb-4 sm:mb-6 text-lg sm:text-xl lg:text-2xl text-left">Boarding Points</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
              {[
                "Swargate",
                "Good Luck Chowk",
                "Khadki Railway Station",
                "Thitabi"
              ].map((point, index) => (
                <p key={index} className="text-gray-800 text-sm sm:text-base lg:text-lg flex items-start text-left break-words">
                  <span className="mr-2 sm:mr-3 text-base sm:text-lg flex-shrink-0 mt-0.5">📍</span>
                  <span className="break-words">{point}</span>
                </p>
              ))}
            </div>
          </div>
          
          {/* Historical Information */}
          <div className="py-6 sm:py-8 lg:py-12 animate-on-scroll opacity-0 translate-y-10 transition-all duration-700 ease-out px-2 sm:px-0" 
               data-id="history" 
               style={isVisible.history ? {opacity: 1, transform: 'translateY(0)'} : {}}>
            <div className="max-w-full">
              <p className="text-gray-700 text-xs xs:text-sm sm:text-base lg:text-lg xl:text-xl leading-relaxed text-left break-words hyphens-auto">
                Kalu Waterfall is a spectacular seasonal waterfall located in the lush Malshej Ghat region of Maharashtra, originating from the Harishchandragad hills and cascading nearly 1,200 feet (≈370 m) in five distinct stages . It tumbles from the Deccan Plateau down into the Konkan, merging with the nearby Mahuli Falls to form the Kalu River.
              </p>
            </div>
          </div>

          {/* Includes Section */}
          <div className="py-6 sm:py-8 lg:py-12 animate-on-scroll opacity-0 translate-y-10 transition-all duration-700 ease-out px-2 sm:px-0" 
               data-id="includes" 
               style={isVisible.includes ? {opacity: 1, transform: 'translateY(0)'} : {}}>
            <h3 className="text-gray-900 font-bold mb-6 sm:mb-8 text-lg sm:text-xl lg:text-2xl xl:text-3xl text-left">Includes:</h3>
            <div className="grid grid-cols-1 gap-3 sm:gap-4 lg:gap-6 max-w-full">
              {[
                "Transport from Pune to Pune",
                "1 Breakfast and 1 lunch",
                "Forest Passes",
                "First Aid",
                "Guide charges"
              ].map((item, index) => (
                <div key={index} className="flex items-start justify-start">
                  <span className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 rounded-full bg-green-500 text-white flex items-center justify-center mr-3 sm:mr-4 flex-shrink-0 mt-1">
                    <span className="text-xs sm:text-sm md:text-base font-bold">✓</span>
                  </span>
                  <span className="text-gray-900 text-sm sm:text-base md:text-lg lg:text-xl break-words">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Excludes Section */}
          <div className="py-6 sm:py-8 lg:py-12 animate-on-scroll opacity-0 translate-y-10 transition-all duration-700 ease-out px-2 sm:px-0" 
               data-id="excludes" 
               style={isVisible.excludes ? {opacity: 1, transform: 'translateY(0)'} : {}}>
            <h3 className="text-gray-900 font-bold mb-6 sm:mb-8 text-lg sm:text-xl lg:text-2xl xl:text-3xl text-left">Excludes:</h3>
            <div className="grid grid-cols-1 gap-3 sm:gap-4 lg:gap-6 max-w-full">
              {[
                "Personal expenses",
                "Optional excursions"
              ].map((item, index) => (
                <div key={index} className="flex items-start justify-start">
                  <span className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 rounded-full bg-red-500 text-white flex items-center justify-center mr-3 sm:mr-4 flex-shrink-0 mt-1">
                    <span className="text-xs sm:text-sm md:text-base">✗</span>
                  </span>
                  <span className="text-gray-900 text-sm sm:text-base md:text-lg lg:text-xl break-words">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* What to Carry Section - Clean left-aligned list */}
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
                <span>Trekking Shoes [Good Grip]</span>
              </p>
              <p className="text-gray-900 text-xl md:text-2xl flex items-center">
                <span className="w-7 h-7 rounded-full bg-green-500 text-white flex items-center justify-center mr-4 flex-shrink-0">
                  <span className="text-lg font-bold">✓</span>
                </span>
                <span>Full Sleeves Trekking T-Shirt</span>
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
                <span>Two Socks Pair</span>
              </p>
              <p className="text-gray-900 text-xl md:text-2xl flex items-center">
                <span className="w-7 h-7 rounded-full bg-green-500 text-white flex items-center justify-center mr-4 flex-shrink-0">
                  <span className="text-lg font-bold">✓</span>
                </span>
                <span>Winter Wear
                </span>
              </p><p className="text-gray-900 text-xl md:text-2xl flex items-center">
                <span className="w-7 h-7 rounded-full bg-green-500 text-white flex items-center justify-center mr-4 flex-shrink-0">
                  <span className="text-lg font-bold">✓</span>
                </span>
                <span>Towel</span>
              </p><p className="text-gray-900 text-xl md:text-2xl flex items-center">
                <span className="w-7 h-7 rounded-full bg-green-500 text-white flex items-center justify-center mr-4 flex-shrink-0">
                  <span className="text-lg font-bold">✓</span>
                </span>
                <span>Chappal/Sandals</span>
              </p><p className="text-gray-900 text-xl md:text-2xl flex items-center">
                <span className="w-7 h-7 rounded-full bg-green-500 text-white flex items-center justify-center mr-4 flex-shrink-0">
                  <span className="text-lg font-bold">✓</span>
                </span>
                <span>Minimum 2-3L Water</span>
              </p><p className="text-gray-900 text-xl md:text-2xl flex items-center">
                <span className="w-7 h-7 rounded-full bg-green-500 text-white flex items-center justify-center mr-4 flex-shrink-0">
                  <span className="text-lg font-bold">✓</span>
                </span>
                <span>Dry Food Items</span>
              </p><p className="text-gray-900 text-xl md:text-2xl flex items-center">
                <span className="w-7 h-7 rounded-full bg-green-500 text-white flex items-center justify-center mr-4 flex-shrink-0">
                  <span className="text-lg font-bold">✓</span>
                </span>
                <span>Valid Govt. ID</span>
              </p><p className="text-gray-900 text-xl md:text-2xl flex items-center">
                <span className="w-7 h-7 rounded-full bg-green-500 text-white flex items-center justify-center mr-4 flex-shrink-0">
                  <span className="text-lg font-bold">✓</span>
                </span>
                <span>Sunglasses</span>
              </p><p className="text-gray-900 text-xl md:text-2xl flex items-center">
                <span className="w-7 h-7 rounded-full bg-green-500 text-white flex items-center justify-center mr-4 flex-shrink-0">
                  <span className="text-lg font-bold">✓</span>
                </span>
                <span>Cap/Hat</span>
              </p><p className="text-gray-900 text-xl md:text-2xl flex items-center">
                <span className="w-7 h-7 rounded-full bg-green-500 text-white flex items-center justify-center mr-4 flex-shrink-0">
                  <span className="text-lg font-bold">✓</span>
                </span>
                <span>Sunscreen</span>
              </p>
            </div>
          </div>
        </div>
      </div>
      
       <BookingForm/> 

      {/* The Journey Section - Enhanced */}
      <div className="py-12 sm:py-16 lg:py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 text-center lg:text-left mb-8 sm:mb-12 lg:mb-16 animate-on-scroll opacity-0 translate-y-10 transition-all duration-700 ease-out break-words" 
              data-id="journey-title" 
              style={isVisible['journey-title'] ? {opacity: 1, transform: 'translateY(0)'} : {}}>
            The Journey
          </h2>
          
          <div className="space-y-6 sm:space-y-8">
            {/* Day 1 Section */}
            <div className="animate-on-scroll opacity-0 translate-y-10 transition-all duration-700 ease-out" 
                 data-id="day1" 
                 style={isVisible.day1 ? {opacity: 1, transform: 'translateY(0)'} : {}}>
              <button 
                onClick={() => setExpandedDay(expandedDay === 1 ? null : 1)}
                className="w-full max-w-4xl mx-auto block p-4 sm:p-6 lg:p-8 bg-gray-50 hover:bg-gray-100 rounded-xl transition-all duration-300 hover:shadow-lg group"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3 sm:gap-4 lg:gap-6 flex-1 min-w-0">
                    <span className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 flex-shrink-0">Day 1</span>
                    <span className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-800 break-words">The Journey Begins</span>
                  </div>
                  <span className={`text-xl sm:text-2xl transition-transform duration-300 flex-shrink-0 ${expandedDay === 1 ? 'rotate-180' : ''}`}>
                    ▼
                  </span>
                </div>
              </button>
              
              {expandedDay === 1 && (
                <div className="max-w-4xl mx-auto mt-4 p-4 sm:p-6 lg:p-8 bg-white rounded-xl shadow-lg animate-scale-up">
                  <div className="space-y-4 sm:space-y-6">
                    <div className="flex items-start gap-3 sm:gap-4">
                      <span className="text-xl sm:text-2xl mt-1 flex-shrink-0">⏰</span>
                      <div className="min-w-0 flex-1">
                        <span className="font-bold text-base sm:text-lg lg:text-xl text-gray-900 break-words">10:30 pm:</span>
                        <span className="ml-2 sm:ml-3 text-base sm:text-lg lg:text-xl text-gray-700 break-words">Reporting at Given pick up points & Depart towards Thitabi.</span>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Day 2 Section */}
            <div className="animate-on-scroll opacity-0 translate-y-10 transition-all duration-700 ease-out delay-100" 
                 data-id="day2" 
                 style={isVisible.day2 ? {opacity: 1, transform: 'translateY(0)'} : {}}>
              <button 
                onClick={() => setExpandedDay(expandedDay === 2 ? null : 2)}
                className="w-full max-w-4xl mx-auto block p-4 sm:p-6 lg:p-8 bg-gray-50 hover:bg-gray-100 rounded-xl transition-all duration-300 hover:shadow-lg group"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3 sm:gap-4 lg:gap-6 flex-1 min-w-0">
                    <span className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 flex-shrink-0">Day 2</span>
                    <span className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-800 break-words">Conquer Kalu Waterfall</span>
                  </div>
                  <span className={`text-xl sm:text-2xl transition-transform duration-300 flex-shrink-0 ${expandedDay === 2 ? 'rotate-180' : ''}`}>
                    ▼
                  </span>
                </div>
              </button>
              
              {expandedDay === 2 && (
                <div className="max-w-4xl mx-auto mt-4 p-4 sm:p-6 lg:p-8 bg-white rounded-xl shadow-lg animate-scale-up">
                  <div className="space-y-4 sm:space-y-6">
                    {[
                      { time: "04:30 am", desc: "Reach the Base Village" },
                      { time: "05:30 am", desc: "Freshen up & Have Breakfast & start hiking on the trail after a short briefing session." },
                      { time: "07:00 am", desc: "Leave for Kalu Waterfall after a brief time at the waterfall" },
                      { time: "09:00 am", desc: "Reach Kalu after a short hike.Enjoy the mesmerising view." },
                      { time: "11:00 am", desc: "Return towards the base camp for lunch." },
                      { time: "01:30 pm", desc: "Proceed towards Pune after resting for some time." },
                      { time: "08:30 pm", desc: "Reach Pune" }
                    ].map((item, index) => (
                      <div key={index} className="flex items-start gap-3 sm:gap-4">
                        <span className="text-xl sm:text-2xl mt-1 flex-shrink-0">⏰</span>
                        <div className="min-w-0 flex-1">
                          <span className="font-bold text-base sm:text-lg lg:text-xl text-gray-900 break-words">{item.time}:</span>
                          <span className="ml-2 sm:ml-3 text-base sm:text-lg lg:text-xl text-gray-700 break-words hyphens-auto">{item.desc}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Journey Images Bento Grid - Mobile Responsive */}
            <div className="animate-on-scroll opacity-0 translate-y-10 transition-all duration-700 ease-out delay-200" data-id="images" style={isVisible.images ? { opacity: 1, transform: 'translateY(0)' } : {}}>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-4 sm:gap-6 lg:gap-8 mt-12 sm:mt-16 auto-rows-[200px] sm:auto-rows-[220px] lg:auto-rows-[280px]">
    
                {/* Large vertical image */}
                    <div className="col-span-1 sm:col-span-2 lg:col-span-3 row-span-2 rounded-2xl overflow-hidden shadow-xl group">
                    <img 
                        src={K1} 
                        alt="Kalu landscape" 
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    </div>

                {/* Top right image */}
                    <div className="col-span-1 sm:col-span-1 lg:col-span-3 row-span-1 rounded-2xl overflow-hidden shadow-xl group">
                    <img 
                    src={K2} 
                    alt="Kalu view" 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    </div>

                    {/* Bottom right image */}
                    <div className="col-span-1 sm:col-span-2 lg:col-span-3 row-span-1 rounded-2xl overflow-hidden shadow-xl group">
                    <img 
                    src={K3} 
                    alt="Kalu path" 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    </div>

                </div>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced CSS */}
      <style jsx>{`
        @keyframes scaleUp {
          from {
            opacity: 0;
            transform: scale(0.95) translateY(20px);
          }
          to {
            opacity: 1;
            transform: scale(1) translateY(0);
          }
        }

        .animate-scale-up {
          animation: scaleUp 0.4s cubic-bezier(0.4, 0, 0.2, 1) forwards;
        }

        .animate-on-scroll {
          transition: all 0.7s cubic-bezier(0.4, 0, 0.2, 1);
        }

        /* Smooth scrolling for all devices */
        html {
          scroll-behavior: smooth;
          -webkit-overflow-scrolling: touch;
        }

        /* Custom breakpoint for extra small devices */
        @media (min-width: 475px) {
          .xs\\:text-5xl {
            font-size: 5rem;
            line-height: 1;
          }
          .xs\\:text-3xl {
            font-size: 1.875rem;
            line-height: 2.25rem;
          }
          .xs\\:text-sm {
            font-size: 0.875rem;
            line-height: 1.25rem;
          }
          .xs\\:text-base {
            font-size: 1rem;
            line-height: 1.5rem;
          }
        }

        /* Add custom text utilities for larger sizes */
        .text-8xl {
          font-size: 6rem;
          line-height: 1;
        }
        
        .text-9xl {
          font-size: 8rem;
          line-height: 1;
        }
        
        .text-10xl {
          font-size: 10rem;
          line-height: 1;
        }

        /* Enhanced mobile optimizations */
        @media (max-width: 768px) {
          /* Better touch targets */
          button {
            min-height: 44px;
          }
          
          /* Improve text readability */
          p, span, h1, h2, h3 {
            -webkit-font-smoothing: antialiased;
            -moz-osx-font-smoothing: grayscale;
          }
          
          /* Prevent text overflow */
          .break-words {
            word-wrap: break-word;
            word-break: break-word;
            hyphens: auto;
            -webkit-hyphens: auto;
            -ms-hyphens: auto;
          }
          
          /* Better container spacing */
          .container-mobile {
            padding-left: 1rem;
            padding-right: 1rem;
          }
        }

        /* Extra small devices */
        @media (max-width: 475px) {
          /* Adjusted text size for very small screens */
          h1 {
            font-size: 2.25rem !important;
            line-height: 2.5rem !important;
          }
          
          /* Reduce padding on small screens */
          .py-6 {
            padding-top: 1rem;
            padding-bottom: 1rem;
          }
        }

        /* Prevent horizontal scroll */
        body {
          overflow-x: hidden;
        }

        /* Better flex layout for buttons */
        .min-w-0 {
          min-width: 0;
        }

        .flex-1 {
          flex: 1 1 0%;
        }

        .flex-shrink-0 {
          flex-shrink: 0;
        }

        /* Hyphenation support */
        .hyphens-auto {
          hyphens: auto;
          -webkit-hyphens: auto;
          -ms-hyphens: auto;
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

export default KaluWaterfallTrek;