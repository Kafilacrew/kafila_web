import { useState, useEffect } from 'react';
import BookingForm from '../components/Bookingform'; // Assuming shared component
import RefundPolicy from '../components/RefundPolicy';
import para from '../assets/Treks/Pondicherry/Pondipara.jpg';
import A1 from '../assets/Treks/Pondicherry/Pondi1.jpg';
import A2 from '../assets/Treks/Pondicherry/pondi2.jpg';
import A3 from '../assets/Treks/Pondicherry/pondi3.jpg';

const Pondicherry = () => {
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
                className="text-4xl xs:text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl 2xl:text-10xl font-times font-bold text-gray-900 leading-[0.9] text-center lg:text-left lg:ml-[20px] xl:ml-[50px] 2xl:ml-[100px] transition-all duration-700 px-2 sm:px-0 break-words hyphens-auto"
                style={{
                  opacity: scrollY < 50 ? 1 : 0.8,
                  transform: `translateY(${scrollY * 0.1}px)`
                }}
              >
                Pondicherry Backpacking
              </h1>
            </div>
            
            {/* Right Column - Info */}
            <div className="flex flex-col justify-center items-center lg:items-start space-y-3 sm:space-y-4 md:space-y-6 lg:space-y-8 lg:ml-[15px] xl:ml-[30px] 2xl:ml-[60px] px-4 sm:px-0">
              <div className="animate-on-scroll opacity-0 translate-y-10 transition-all duration-500" 
                   data-id="location" 
                   style={isVisible.location ? {opacity: 1, transform: 'translateY(0)'} : {}}>
                <p className="text-gray-600 text-sm xs:text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl flex items-center justify-center lg:justify-start">
                  <span className="mr-2 sm:mr-3 text-lg sm:text-xl md:text-2xl flex-shrink-0">📍</span>
                  <span className="break-words">Pondicherry</span>
                </p>
              </div>
              <div className="animate-on-scroll opacity-0 translate-y-10 transition-all duration-500" 
                   data-id="date" 
                   style={isVisible.date ? {opacity: 1, transform: 'translateY(0)'} : {}}>
                <p className="text-gray-600 text-sm xs:text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl text-center lg:text-left">
                  <span className="mr-2 sm:mr-3 text-lg sm:text-xl md:text-2xl flex-shrink-0">🗓️</span>
                  <span className="break-words">September 2025-October 2025</span>
                </p>
              </div>
              <div className="animate-on-scroll opacity-0 translate-y-10 transition-all duration-500" 
                   data-id="description" 
                   style={isVisible.description ? {opacity: 1, transform: 'translateY(0)'} : {}}>
                <p className="text-gray-700 text-xs xs:text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl max-w-full lg:max-w-lg leading-relaxed text-center lg:text-left break-words hyphens-auto">
                  Pondicherry, often called the French Riviera of the East, is a charming coastal town in South India known for its serene beaches, vibrant French colonial architecture, and spiritual vibe. It offers a unique blend of Indian culture and French influence, seen in its quaint cafes, tree-lined boulevards, and the famous Auroville township. Perfect for a peaceful getaway.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Parallax Image Section */}
      <div className="relative h-[50vh] sm:h-[60vh] md:h-[70vh] lg:h-[80vh] overflow-hidden">
        {isMobile ? (
          <div 
            className="absolute inset-0 w-full h-[130%] -top-[15%]"
            style={{ 
              backgroundImage: `url(${para})`,
              backgroundPosition: 'center center',
              backgroundSize: 'cover',
              backgroundRepeat: 'no-repeat',
              transform: `translate3d(0, ${parallaxOffset}px, 0)`,
              willChange: 'transform',
              backfaceVisibility: 'hidden'
            }}
          />
        ) : (
          <div 
            className="absolute inset-0 w-full h-full"
            style={{ 
              backgroundImage: `url(${para})`,
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
            <div className="animate-on-scroll opacity-0 translate-y-10 transition-all duration-700 ease-out text-left px-2 sm:px-0" 
                 data-id="price" 
                 style={isVisible.price ? {opacity: 1, transform: 'translateY(0)'} : {}}>
              <h3 className="text-gray-900 font-bold mb-2 sm:mb-3 text-lg sm:text-xl lg:text-2xl break-words">Price:</h3>
              <p className="text-gray-800 text-base sm:text-lg lg:text-xl break-words">
                ₹14,999/-
              </p>
            </div>
            <div className="animate-on-scroll opacity-0 translate-y-10 transition-all duration-700 ease-out delay-100 text-left px-2 sm:px-0" 
                 data-id="slots" 
                 style={isVisible.slots ? {opacity: 1, transform: 'translateY(0)'} : {}}>
              <h3 className="text-gray-900 font-bold mb-2 sm:mb-3 text-lg sm:text-xl lg:text-2xl break-words">Slots:</h3>
              <p className="text-gray-800 text-base sm:text-lg lg:text-xl break-words">👥 20 Explorers</p>
            </div>
            <div className="animate-on-scroll opacity-0 translate-y-10 transition-all duration-700 ease-out delay-200 text-left px-2 sm:px-0 sm:col-span-2 md:col-span-1" 
                 data-id="schedule" 
                 style={isVisible.schedule ? {opacity: 1, transform: 'translateY(0)'} : {}}>
              <h3 className="text-gray-900 font-bold mb-2 sm:mb-3 text-lg sm:text-xl lg:text-2xl break-words">Schedule:</h3>
              <p className="text-gray-800 text-base sm:text-lg lg:text-xl break-words">🕒 September 2025-October 2025</p>
            </div>
          </div>

          {/* Boarding Points */}
          <div className="py-6 sm:py-8 lg:py-12 animate-on-scroll opacity-0 translate-y-10 transition-all duration-700 ease-out px-2 sm:px-0" 
               data-id="boarding" 
               style={isVisible.boarding ? {opacity: 1, transform: 'translateY(0)'} : {}}>
            <h3 className="text-gray-900 font-bold mb-4 sm:mb-6 text-lg sm:text-xl lg:text-2xl text-left">Boarding Points</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
              {[
                "Pune"
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
                Come join us on an unforgettable journey to the vibrant coastal town of Pondicherry — a place where French charm meets tropical soul. From sunrise surfing and café hopping to sacred temples and mangrove backwaters, this trip is the perfect blend of adventure, culture, and calm. Whether you're chasing waves or chasing peace, Pondicherry has a story waiting just for you.
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
                "Transportation & accommodation",
                "Meals along the trek route from the Base Camp to Base Camp",
                "Sleeping bag, mattress, tents, crampons.",
                "Outdoor experts, guide, cook and support staff",
                "Essential entry fees and permits",
                "First Aid medical kit"
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

          {/* What to Carry Section */}
<div 
  className="py-6 sm:py-8 lg:py-12 animate-on-scroll opacity-0 translate-y-10 transition-all duration-700 ease-out px-2 sm:px-0" 
  data-id="carry"
  style={isVisible.carry ? { opacity: 1, transform: 'translateY(0)' } : {}}
>
  <h3 className="text-gray-900 font-bold mb-6 sm:mb-8 text-lg sm:text-xl lg:text-2xl xl:text-3xl text-left">
    What to Carry?
  </h3>
  <div className="grid grid-cols-1 gap-3 sm:gap-4 lg:gap-6 max-w-full">
    {[ 
      "Clothing & Footwear",
      "Government-issued photo ID (Aadhar/Passport/Driving License)",
      "Small backpack/daypack for local sightseeing",
      "Reusable water bottle",
      "Sunglasses, cap/hat",
      "Personal hygiene items",
      "Power bank",
      "Camera",
      "Personal medications & basic first aid items"
    ].map((item, index) => (
      <p key={index} className="text-gray-900 text-xl md:text-xl flex items-center">
        <span className="w-7 h-7 rounded-full bg-green-500 text-white flex items-center justify-center mr-4 flex-shrink-0">
          <span className="text-lg font-bold">✓</span>
        </span>
        <span className="text-gray-900 text-sm sm:text-base md:text-lg lg:text-xl break-words">{item}</span>
      </p>
    ))}
  </div>
</div>

        </div>
      </div>

      <BookingForm />

      {/* The Journey Section */}
      <div className="py-12 sm:py-16 lg:py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 text-center lg:text-left mb-8 sm:mb-12 lg:mb-16 animate-on-scroll opacity-0 translate-y-10 transition-all duration-700 ease-out break-words" 
              data-id="journey-title" 
              style={isVisible['journey-title'] ? {opacity: 1, transform: 'translateY(0)'} : {}}>
            The Journey
          </h2>
          
          <div className="space-y-6 sm:space-y-8">
            {/* 5N/6D Itinerary */}
            <div className="animate-on-scroll opacity-0 translate-y-10 transition-all duration-700 ease-out" 
                 data-id="day1" 
                 style={isVisible.day1 ? {opacity: 1, transform: 'translateY(0)'} : {}}>
              <button 
                onClick={() => setExpandedDay(expandedDay === 1 ? null : 1)}
                className="w-full max-w-4xl mx-auto block p-4 sm:p-6 lg:p-8 bg-gray-50 hover:bg-gray-100 rounded-xl transition-all duration-300 hover:shadow-lg group"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3 sm:gap-4 lg:gap-6 flex-1 min-w-0">
                    <span className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 flex-shrink-0"></span>
                    <span className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-800 break-words">Pondicherry Escapade</span>
                  </div>
                  <span className={`text-xl sm:text-2xl transition-transform duration-300 flex-shrink-0 ${expandedDay === 1 ? 'rotate-180' : ''}`}>
                    ▼
                  </span>
                </div>
              </button>
              
              {expandedDay === 1 && (
                <div className="max-w-4xl mx-auto mt-4 p-4 sm:p-6 lg:p-8 bg-white rounded-xl shadow-lg animate-scale-up">
                  <div className="space-y-4 sm:space-y-6">
                    {[
                      { time: "Day 1 – Departure from Pune", desc: "We begin our journey from Pune, leaving behind the city buzz for the coastal calm. An overnight ride filled with stories, music, and the thrill of what’s to come." },
                      { time: "Day 2 – Touchdown at the Coast", desc: "Upon arrival in Pondicherry, we head straight to Auroville Beach, letting the ocean air greet us. As the sun dips, we explore Rock Beach — lively, breezy, and the perfect start to this adventure." },
                      { time: "Day 3 – Surf & Serenity", desc: "The day starts with optional surfing at Serenity Beach. Later, we explore Auroville’s peaceful energy, visit the Matrimandir, and wind down with an evening stroll at Auro Beach." },
                      { time: "Day 4 - Mangroves & Mythology", desc: "A scenic boat ride through the Pichavaram mangroves sets the tone for the day. In the afternoon, we explore the historic Chidambaram Temple, steeped in spiritual grandeur." },
                      { time: "Day 5 – Colonial Charm & Café Culture", desc: "White Town’s pastel streets and vibrant cafés invite slow exploration. We wrap up the day with a visit to the Basilica of the Sacred Heart of Jesus, echoing calm and heritage." },
                      { time: "Day 6 – Sculpted Shores of Mahabalipuram", desc: "We visit the ancient wonders of Mahabalipuram, known for its stone temples by the sea. As night falls, we board the train back to Pune, carrying more than just souvenirs." },
                      { time: "Day 7 - Return to Pune", desc: "We arrive back home — a little tanner, a lot lighter, and filled with memories that smell of sea breeze and freedom." }
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

            {/* 7N/8D Itinerary */}
            {/* <div className="animate-on-scroll opacity-0 translate-y-10 transition-all duration-700 ease-out delay-100" 
                 data-id="day2" 
                 style={isVisible.day2 ? {opacity: 1, transform: 'translateY(0)'} : {}}>
              <button 
                onClick={() => setExpandedDay(expandedDay === 2 ? null : 2)}
                className="w-full max-w-4xl mx-auto block p-4 sm:p-6 lg:p-8 bg-gray-50 hover:bg-gray-100 rounded-xl transition-all duration-300 hover:shadow-lg group"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3 sm:gap-4 lg:gap-6 flex-1 min-w-0">
                    <span className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 flex-shrink-0">7N/8D</span>
                    <span className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-800 break-words">Ladakh Odyssey: High Passes & Beyond</span>
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
                      { time: "Day 1", desc: "Arrival in Leh (3,500m): Reach Leh Airport (IXL), transfer to hotel, and rest to acclimatize. Evening stroll in Leh Market." },
                      { time: "Day 2", desc: "Leh Sightseeing: Visit Shanti Stupa, Hall of Fame, Pathar Sahib Gurudwara, Magnetic Hill, and Sangam Point. Evening free." },
                      { time: "Day 3", desc: "Leh to Nubra Valley (3,048m): Drive via Khardung La Pass. Visit Diskit Monastery and Hunder Sand Dunes. Optional camel ride or ATV tour." },
                      { time: "Day 4", desc: "Nubra to Pangong Lake (4,250m): Drive via Shyok River. Check-in at lakeside camp and enjoy Pangong’s beauty." },
                      { time: "Day 5", desc: "Pangong to Hanle (4,250m): Drive via Chushul. Visit Hanle Monastery and stargaze under clear skies." },
                      { time: "Day 6", desc: "Hanle to Umling La (5,350m): Drive to the world’s highest motorable pass and return to Hanle. Evening relaxation." },
                      { time: "Day 7", desc: "Hanle to Leh: Return via Chushul. Evening exploration of Leh Market." },
                      { time: "Day 8", desc: "Departure: Check-out and transfer to Leh Airport (IXL) for departure." }
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
            </div> */}

            {/* Journey Images Bento Grid - Mobile Responsive */}
            <div className="animate-on-scroll opacity-0 translate-y-10 transition-all duration-700 ease-out delay-200" data-id="images" style={isVisible.images ? { opacity: 1, transform: 'translateY(0)' } : {}}>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-4 sm:gap-6 lg:gap-8 mt-12 sm:mt-16 auto-rows-[200px] sm:auto-rows-[220px] lg:auto-rows-[280px]">
    
                {/* Large vertical image */}
                    <div className="col-span-1 sm:col-span-2 lg:col-span-3 row-span-2 rounded-2xl overflow-hidden shadow-xl group">
                    <img 
                        src={A1} 
                        alt="Ladakh landscape" 
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    </div>

                {/* Top right image */}
                    <div className="col-span-1 sm:col-span-1 lg:col-span-3 row-span-1 rounded-2xl overflow-hidden shadow-xl group">
                    <img 
                    src={A2} 
                    alt="Ladakh view" 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    </div>

                    {/* Bottom right image */}
                    <div className="col-span-1 sm:col-span-2 lg:col-span-3 row-span-1 rounded-2xl overflow-hidden shadow-xl group">
                    <img 
                    src={A3} 
                    alt="Ladakh path" 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    </div>

                </div>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced CSS */}
      <style jsx="true">{`
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

        html {
          scroll-behavior: smooth;
          -webkit-overflow-scrolling: touch;
        }

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

        @media (max-width: 768px) {
          button {
            min-height: 44px;
          }
          
          p, span, h1, h2, h3 {
            -webkit-font-smoothing: antialiased;
            -moz-osx-font-smoothing: grayscale;
          }
          
          .break-words {
            word-wrap: break-word;
            word-break: break-word;
            hyphens: auto;
            -webkit-hyphens: auto;
            -ms-hyphens: auto;
          }
          
          .container-mobile {
            padding-left: 1rem;
            padding-right: 1rem;
          }
        }

        @media (max-width: 475px) {
          h1 {
            font-size: 2.25rem !important;
            line-height: 2.5rem !important;
          }
          
          .py-6 {
            padding-top: 1rem;
            padding-bottom: 1rem;
          }
        }

        body {
          overflow-x: hidden;
        }

        .min-w-0 {
          min-width: 0;
        }

        .flex-1 {
            flex: 1;
            1 auto;
        }

        .flex-shrink-0 {
          flex-shrink: 0;
        }

        .hyphens-auto {
          hyphens: auto;
          -webkit-hyphens: auto;
          -ms-hyphens: auto;
        }

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
      
      <RefundPolicy />
    </div>
  );
};

export default Pondicherry;