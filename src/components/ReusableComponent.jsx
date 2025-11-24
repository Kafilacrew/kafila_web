import { useState, useEffect } from 'react';
import BookingForm from './Bookingform';
import RefundPolicy from './RefundPolicy';
import RefundPolicy1 from './RefundPolicy1';   // <-- ADDED
import DropdownSection from './DropdownSection';

const ReusableComponent = ({
  title,
  location,
  date,
  description,
  parallaxImage,
  price,
  slots,
  schedule,
  boardingPoints,
  historyText,
  includes,
  excludes,
  whatToCarry,
  journeyTitle,
  itinerary,
  itineraries, // New prop for multiple itineraries
  images,
  showBookingForm = true
}) => {
  const [scrollY, setScrollY] = useState(0);
  const [isVisible, setIsVisible] = useState({});
  const [isMobile, setIsMobile] = useState(false);

  const currentURL = window.location.pathname;


  useEffect(() => {
    const checkIfMobile = () => {
      const isMobileDevice = window.innerWidth < 768 ||
        /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
      setIsMobile(isMobileDevice);
    };

    checkIfMobile();
    window.addEventListener('resize', checkIfMobile);

    const handleScroll = () => {
      setScrollY(window.scrollY);

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

  const parallaxOffset = scrollY * 0.3;

  return (
    <div className="min-h-screen overflow-x-hidden">
      {/* Header Section */}
      <div className="relative bg-white py-6 sm:py-8 md:py-12 lg:py-16 xl:py-20">
        <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 xl:gap-16 mt-16 sm:mt-20 lg:mt-24 xl:mt-28">
            <div className="flex items-center justify-center lg:justify-start">
              <h1
                className="text-4xl xs:text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl 2xl:text-10xl font-times font-bold text-gray-900 leading-[0.9] text-center lg:text-left lg:ml-[20px] xl:ml-[50px] 2xl:ml-[100px] transition-all duration-700 px-2 sm:px-0 break-words hyphens-auto"
                style={{
                  opacity: scrollY < 50 ? 1 : 0.8,
                  transform: `translateY(${scrollY * 0.1}px)`
                }}
              >
                {title}
              </h1>
            </div>

            <div className="flex flex-col justify-center items-center lg:items-start space-y-4 sm:space-y-6 lg:ml-[15px] xl:ml-[30px] 2xl:ml-[60px] px-4 sm:px-0">
              <div className="animate-on-scroll opacity-0 translate-y-10 transition-all duration-500"
                data-id="location"
                style={isVisible.location ? { opacity: 1, transform: 'translateY(0)' } : {}}>
                <p className="text-gray-600 text-lg sm:text-xl lg:text-2xl flex items-center justify-center lg:justify-start">
                  <span className="mr-3 text-xl flex-shrink-0">📍</span>
                  <span className="break-words">{location}</span>
                </p>
              </div>
              <div className="animate-on-scroll opacity-0 translate-y-10 transition-all duration-500"
                data-id="date"
                style={isVisible.date ? { opacity: 1, transform: 'translateY(0)' } : {}}>
                <p className="text-gray-600 text-lg sm:text-xl lg:text-2xl text-center lg:text-left">
                  <span className="mr-3 text-xl flex-shrink-0">🗓️</span>
                  <span className="break-words">{date}</span>
                </p>
              </div>
              <div className="animate-on-scroll opacity-0 translate-y-10 transition-all duration-500"
                data-id="description"
                style={isVisible.description ? { opacity: 1, transform: 'translateY(0)' } : {}}>
                <p className="text-gray-700 text-base sm:text-lg lg:text-xl max-w-full lg:max-w-lg leading-relaxed text-center lg:text-left break-words hyphens-auto">
                  {description}
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
              backgroundImage: `url(${parallaxImage})`,
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
              backgroundImage: `url(${parallaxImage})`,
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
              style={isVisible.price ? { opacity: 1, transform: 'translateY(0)' } : {}}>
              <h3 className="text-gray-900 font-bold mb-3 text-xl lg:text-2xl break-words">Price:</h3>
              <p className="text-gray-800 text-lg lg:text-xl break-words">{price}</p>
            </div>
            <div className="animate-on-scroll opacity-0 translate-y-10 transition-all duration-700 ease-out delay-100 text-left px-2 sm:px-0"
              data-id="slots"
              style={isVisible.slots ? { opacity: 1, transform: 'translateY(0)' } : {}}>
              <h3 className="text-gray-900 font-bold mb-3 text-xl lg:text-2xl break-words">Slots:</h3>
              <p className="text-gray-800 text-lg lg:text-xl break-words">{slots}</p>
            </div>
            <div className="animate-on-scroll opacity-0 translate-y-10 transition-all duration-700 ease-out delay-200 text-left px-2 sm:px-0 sm:col-span-2 md:col-span-1"
              data-id="schedule"
              style={isVisible.schedule ? { opacity: 1, transform: 'translateY(0)' } : {}}>
              <h3 className="text-gray-900 font-bold mb-3 text-xl lg:text-2xl break-words">Schedule:</h3>
              <p className="text-gray-800 text-lg lg:text-xl break-words">{schedule}</p>
            </div>
          </div>

          {/* Boarding Points */}
          <div className="py-6 sm:py-8 lg:py-12 animate-on-scroll opacity-0 translate-y-10 transition-all duration-700 ease-out px-2 sm:px-0"
            data-id="boarding"
            style={isVisible.boarding ? { opacity: 1, transform: 'translateY(0)' } : {}}>
            <h3 className="text-gray-900 font-bold mb-6 text-2xl lg:text-3xl text-left">Boarding Points</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {boardingPoints?.map((point, index) => (
                <p key={index} className="text-gray-800 text-lg flex items-start text-left break-words">
                  <span className="mr-3 text-lg flex-shrink-0 mt-0.5">📍</span>
                  <span className="break-words">{point}</span>
                </p>
              ))}
            </div>
          </div>

          {/* Historical Information */}
          <div className="py-6 sm:py-8 lg:py-12 animate-on-scroll opacity-0 translate-y-10 transition-all duration-700 ease-out px-2 sm:px-0"
            data-id="history"
            style={isVisible.history ? { opacity: 1, transform: 'translateY(0)' } : {}}>
            <div className="max-w-full">
              <p className="text-gray-700 text-base sm:text-lg lg:text-xl leading-relaxed text-left break-words hyphens-auto">
                {historyText}
              </p>
            </div>
          </div>

          {/* Includes Section */}
          <div className="py-6 sm:py-8 lg:py-12 animate-on-scroll opacity-0 translate-y-10 transition-all duration-700 ease-out px-2 sm:px-0"
            data-id="includes"
            style={isVisible.includes ? { opacity: 1, transform: 'translateY(0)' } : {}}>
            <h3 className="text-gray-900 font-bold mb-8 text-2xl lg:text-3xl text-left">Includes:</h3>
            <div className="grid grid-cols-1 gap-4 max-w-full">
              {includes?.map((item, index) => (
                <div key={index} className="flex items-start justify-start">
                  <span className="w-7 h-7 rounded-full bg-green-500 text-white flex items-center justify-center mr-4 flex-shrink-0 mt-1">
                    <span className="text-sm font-bold">✓</span>
                  </span>
                  <span className="text-gray-900 text-lg break-words">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Excludes Section */}
          <div className="py-6 sm:py-8 lg:py-12 animate-on-scroll opacity-0 translate-y-10 transition-all duration-700 ease-out px-2 sm:px-0"
            data-id="excludes"
            style={isVisible.excludes ? { opacity: 1, transform: 'translateY(0)' } : {}}>
            <h3 className="text-gray-900 font-bold mb-8 text-2xl lg:text-3xl text-left">Excludes:</h3>
            <div className="grid grid-cols-1 gap-4 max-w-full">
              {excludes?.map((item, index) => (
                <div key={index} className="flex items-start justify-start">
                  <span className="w-7 h-7 rounded-full bg-red-500 text-white flex items-center justify-center mr-4 flex-shrink-0 mt-1">
                    <span className="text-sm">✗</span>
                  </span>
                  <span className="text-gray-900 text-lg break-words">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* What to Carry Section */}
          <div className="mb-24 md:mb-32">
            <h3 className="text-gray-900 font-bold mb-8 text-2xl lg:text-3xl text-left">What to Carry?</h3>
            <div className="grid grid-cols-1 gap-4 max-w-full">
              {whatToCarry?.map((item, index) => (
                <p key={index} className="text-gray-900 flex items-center">
                  <span className="w-7 h-7 rounded-full bg-green-500 text-white flex items-center justify-center mr-4 flex-shrink-0">
                    <span className="text-sm font-bold">✓</span>
                  </span>
                  <span className="text-gray-900 text-lg break-words">{item}</span>
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Booking Form */}
      {showBookingForm && <BookingForm />}

      {/* The Journey Section */}
      <div className="py-12 sm:py-16 lg:py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 text-center lg:text-left mb-12 lg:mb-16 animate-on-scroll opacity-0 translate-y-10 transition-all duration-700 ease-out break-words"
            data-id="journey-title"
            style={isVisible['journey-title'] ? { opacity: 1, transform: 'translateY(0)' } : {}}>
            The Journey
          </h2>

          <div className="space-y-8">
            {/* Handle multiple itineraries with dropdowns */}
            {itineraries && itineraries.length > 1 ? (
              itineraries.map((itineraryItem, index) => (
                <DropdownSection
                  key={index}
                  title={itineraryItem.title}
                  subtitle={itineraryItem.subtitle}
                  items={itineraryItem.items}
                  isVisible={isVisible[`day${index + 1}`]}
                  dataId={`day${index + 1}`}
                />
              ))
            ) : (
              /* Handle single itinerary - display directly */
              <div className="animate-on-scroll opacity-0 translate-y-10 transition-all duration-700 ease-out"
                data-id="day1"
                style={isVisible.day1 ? { opacity: 1, transform: 'translateY(0)' } : {}}>
                <div className="w-full max-w-4xl mx-auto p-6 lg:p-8 bg-gray-50 rounded-xl">
                  <div className="mb-6">
                    <h3 className="text-2xl lg:text-3xl font-bold text-gray-900">{journeyTitle}</h3>
                  </div>

                  <div className="space-y-6">
                    {itinerary?.map((item, index) => (
                      <div key={index} className="flex items-start gap-4">
                        <span className="text-xl mt-1 flex-shrink-0">⏰</span>
                        <div className="min-w-0 flex-1">
                          <span className="font-bold text-lg text-gray-900 break-words">{item.time}:</span>
                          <span className="ml-3 text-lg text-gray-700 break-words hyphens-auto">{item.desc}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Journey Images Bento Grid */}
          {images && (
            <div className="animate-on-scroll opacity-0 translate-y-10 transition-all duration-700 ease-out delay-200" 
              data-id="images" 
              style={isVisible.images ? { opacity: 1, transform: 'translateY(0)' } : {}}>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-4 sm:gap-6 lg:gap-8 mt-12 sm:mt-16 auto-rows-[200px] sm:auto-rows-[220px] lg:auto-rows-[280px]">
                <div className="col-span-1 sm:col-span-2 lg:col-span-3 row-span-2 rounded-2xl overflow-hidden shadow-xl group">
                  <img
                    src={images[0]}
                    alt="Journey landscape"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>

                <div className="col-span-1 sm:col-span-1 lg:col-span-3 row-span-1 rounded-2xl overflow-hidden shadow-xl group">
                  <img
                    src={images[1]}
                    alt="Journey view"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>

                <div className="col-span-1 sm:col-span-2 lg:col-span-3 row-span-1 rounded-2xl overflow-hidden shadow-xl group">
                  <img
                    src={images[2]}
                    alt="Journey path"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Enhanced CSS */}
      <style>{`
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
          flex: 1 1 auto;
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

      {(() => {
        const refundPolicy1Pages = [
  "/bir",
  "/goa",
  "/hampi",
  "/pondicherry",
  "/brahmatal",
  "/kedarkantha",
  "/kedarnath",
  "/kuaripass",
  "/ladakh"
];

        return refundPolicy1Pages.includes(currentURL)
          ? <RefundPolicy1 />
          : <RefundPolicy />;
      })()}

    </div>
  );
};

export default ReusableComponent;