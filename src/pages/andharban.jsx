import React, { useEffect, useState } from 'react';
import harishchandragad from '../assets/Harishchandragad.jpg';
import RefundPolicy from '../components/RefundPolicy';
import UpcomingAdventuresSection from '../components/upcomingadventures';
import BookingForm from '../components/Bookingform';
import Apara from '../assets/Treks/Andarbhan/Andarban-Parallex.webp'
import A1 from '../assets/Treks/Andarbhan/Andarban-1.jpg'
import A2 from '../assets/Treks/Andarbhan/Andarban-2.jpeg'
import A3 from '../assets/Treks/Andarbhan/Andarban-3.webp'

const AndharbanJungleTrek = () => {
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
               Andharban Jungle Trek
              </h1>
            </div>
            
            {/* Right Column - Info */}
            <div className="flex flex-col justify-center md:ml-0 lg:ml-[80px] mt-0 md:mt-[40px] lg:mt-[80px]">
              <div className="mb-6 md:mb-8 animate-on-scroll opacity-0 translate-y-10 transition-all duration-500" 
                   data-id="location" 
                   style={isVisible.location ? {opacity: 1, transform: 'translateY(0)'} : {}}>
                <p className="text-gray-600 text-lg md:text-xl lg:text-2xl flex items-center">
                  <span className="mr-3">📍</span>
                  Andharban, Maharashtra
                </p>
              </div>
              <div className="mb-8 md:mb-12 animate-on-scroll opacity-0 translate-y-10 transition-all duration-500" 
                   data-id="date" 
                   style={isVisible.date ? {opacity: 1, transform: 'translateY(0)'} : {}}>
                <p className="text-gray-600 text-lg md:text-xl lg:text-2xl">
                  🗓️ June-July, 2025
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

      {/* Parallax Image Section - Keep desktop effect, fix mobile */}
      <div className="relative h-[30vh] md:h-[70vh] lg:h-[80vh] overflow-hidden">
        {isMobile ? (
          // Mobile: Transform-based parallax
          <div 
            className="absolute inset-0 w-full h-[130%] -top-[15%]"
            style={{ 
              backgroundImage: `url(${Apara})`,
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
              backgroundImage: `url(${Apara})`,
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
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 md:gap-12 lg:gap-16 mb-16 md:mb-24 mt-[40px]">
            {/* Price Column */}
            <div className="animate-on-scroll opacity-0 translate-y-10 transition-all duration-500" 
                 data-id="price" 
                 style={isVisible.price ? {opacity: 1, transform: 'translateY(0)'} : {}}>
              <h3 className="text-gray-900 font-bold mb-3 md:mb-4 text-lg md:text-xl">Price:</h3>
              <p className="text-gray-800 text-base md:text-lg mb-2">₹ 1399/-(Ex. Pune)</p>
            </div>
            
            {/* Slots Column */}
            <div className="animate-on-scroll opacity-0 translate-y-10 transition-all duration-500" 
                 data-id="slots" 
                 style={isVisible.slots ? {opacity: 1, transform: 'translateY(0)'} : {}}>
              <h3 className="text-gray-900 font-semibold mb-3 md:mb-4 text-lg md:text-xl">Slots:</h3>
              <p className="text-gray-800 text-base md:text-lg">👥 25 Explorers</p>
            </div>
            
            {/* Schedule Column */}
            <div className="animate-on-scroll opacity-0 translate-y-10 transition-all duration-500" 
                 data-id="schedule" 
                 style={isVisible.schedule ? {opacity: 1, transform: 'translateY(0)'} : {}}>
              <h3 className="text-gray-900 font-semibold mb-3 md:mb-4 text-lg md:text-xl">Schedule:</h3>
              <p className="text-gray-800 text-base md:text-lg">🕒 June-July 2025</p>
            </div>
          </div>
          
          {/* Boarding Points */}
          <div className="mb-16 md:mb-24 animate-on-scroll opacity-0 translate-y-10 transition-all duration-500" 
               data-id="boarding" 
               style={isVisible.boarding ? {opacity: 1, transform: 'translateY(0)'} : {}}>
            <h3 className="text-gray-900 font-semibold mb-4 md:mb-6 text-lg md:text-xl">Boarding Points</h3>
            <div className="space-y-2 md:space-y-3">
              <p className="text-gray-800 text-base md:text-lg">📍 Swargate(Opp. Laxminarayan Theatre)</p>
              <p className="text-gray-800 text-base md:text-lg">📍 Deccan Corner (Opp. To Vimlabai Garware)</p>
              <p className="text-gray-800 text-base md:text-lg">📍 Vanaz</p>
            </div>
          </div>
          
          {/* Historical Information */}
          <div className="mb-16 md:mb-24 animate-on-scroll opacity-0 translate-y-10 transition-all duration-500" 
               data-id="history" 
               style={isVisible.history ? {opacity: 1, transform: 'translateY(0)'} : {}}>
            <p className="text-gray-700 mb-4 md:mb-6 text-base md:text-lg leading-relaxed">
            Andharban, meaning 'Dark Dense Forest', is one of the most scenic monsoon treks in the Sahyadris, located near Pimpri, Maharashtra, about 16 km from Pune. This trek offers a magical walk through misty, dense forests, lush green trails, and gushing waterfalls. As you journey through the fog-covered jungle, you'll witness breathtaking views of the Kundalika Valley, Bhira Dam, and Tamhini Ghat ranges. With its serene ambiance and natural beauty, Andharban is a monsoon paradise for every nature lover and trekking enthusiast.
            </p>
          </div>
          
          {/* Trek Details */}
          {/* <div className="mb-16 md:mb-24 animate-on-scroll opacity-0 translate-y-10 transition-all duration-500" 
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
          </div> */}

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
                <span>Sunscream</span>
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
                        <span className="font-semibold text-lg md:text-xl">10:30 pm:</span>
                        <span className="ml-3 text-lg md:text-xl">Time to rise and shine! We kindly request all participants to report at their respective boarding points. Our exciting adventure begins as we depart towards the picturesque destination of Tamhini - Pimpri.</span>
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
                  <span className="text-lg md:text-2xl text-gray-800">Adventure Day</span>
                </div>
              </button>
              
              {expandedDay === 2 && (
                <div className="p-6 md:p-8 bg-white rounded-lg mb-4 md:mb-8 md:w-[800px] animate-scale-up">
                  <div className="space-y-4">
                    <div className="flex items-start gap-4">
                      <span className="mt-1">⏰</span>
                      <div>
                        <span className="font-semibold text-lg md:text-xl">03:30 am:</span>
                        <span className="ml-3 text-lg md:text-xl">Welcome to the base village of Pimpri! Take a moment to stretch your legs, freshen up, and get ready for an amazing day ahead. But first, let's fuel up with a delicious breakfast to energize ourselves for the thrilling journey that awaits.</span>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <span className="mt-1">⏰</span>
                      <div>
                        <span className="font-semibold text-lg md:text-xl">05:30 am:</span>
                        <span className="ml-3 text-lg md:text-xl">With our bellies satisfied and spirits high, it's time to hit the trail after a short briefing session. Get ready to immerse yourself in the wonders of nature as we embark on an adventure through the enchanting Dark Forest. Let the beauty of the surroundings and the tranquility of the wilderness captivate your senses.</span>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <span className="mt-1">⏰</span>
                      <div>
                        <span className="font-semibold text-lg md:text-xl">12:30 pm:</span>
                        <span className="ml-3 text-lg md:text-xl">We've conquered the trail, and now we arrive at the base village of Pimpri-Tamhini . It's time to take a breather, have a scrumptious lunch, and give our tired feet a well-deserved rest. Reflect on the memorable moments and share stories with fellow trekkers, creating bonds that will last a lifetime.</span>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <span className="mt-1">⏰</span>
                      <div>
                        <span className="font-semibold text-lg md:text-xl">03:00 pm:</span>
                        <span className="ml-3 text-lg md:text-xl">As the day starts to wind down, we begin our return journey towards Pune. Relax, enjoy the scenic views, and cherish the memories we've made together. Laughter and camaraderie fill the air as we bid farewell to the mesmerizing landscapes and the adventures that unfolded.</span>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <span className="mt-1">⏰</span>
                      <div>
                        <span className="font-semibold text-lg md:text-xl">08:30 pm:</span>
                        <span className="ml-3 text-lg md:text-xl">We've reached Pune, marking the end of our exhilarating trek. It's been a day filled with excitement, challenges, and laughter. Take a moment to reflect on the experiences and achievements gained throughout the journey. We hope this trek has left you with a sense of fulfillment and a desire for more thrilling adventures to come.</span>
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
                    src={Apara} 
                    alt="Mountain landscape with river" 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                
                {/* Right column - two stacked smaller images */}
                <div className="grid grid-rows-1 md:grid-rows-2 gap-4 md:gap-5">
                  <div className="rounded-xl overflow-hidden shadow-lg aspect-[16/9] group">
                    <img 
                      src={A2} 
                      alt="Mountain landscape with trees" 
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                  <div className="rounded-xl overflow-hidden shadow-lg aspect-[16/9] group">
                    <img 
                      src={A3} 
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

        /* Smooth scrolling for all devices */
        html {
          scroll-behavior: smooth;
          -webkit-overflow-scrolling: touch;
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

export default AndharbanJungleTrek;