import React from 'react';
import Devkund from '../assets/Treks/Devkund/Devkund-main.jpg'
import Andharban from '../assets/Treks/Andarbhan/Andarban-main.webp'
import Nanemachi from '../assets/Treks/Nanemachi/Nanemachi-main.jpg'
import Kalu from '../assets/Treks/Kalu/main.webp'
import Adrai from '../assets/Treks/AdraiJungle/Adrai-main.webp'
import Visapur from '../assets/Treks/Visapur/main.webp'

const UpcomingAdventuresSection = () => {
  const adventures = [
    {
      id: 1,
      title: "Nanemachi Waterfall Trek",
      date: "August-September 2025",
      slots: "25 Slots Available",
      image: Nanemachi,
      link: "/nanemachi"
    },
    {
      id: 2,
      title: "Devkund Waterfall Trek",
      date: "August-September 2025",
      slots: "25 Slots Available",
      image: Devkund,
      link: "/devkund"
     },
    {
      id: 3,
      title: "Andharban Jungle Trek",
      date: "August-September 2025",
      slots: "25 Slots Available",
      image: Andharban,
      link: "/andharban"
    },
    {
      id: 4,
      title: "Kalu Waterfall Trek",
      date: "August-September 2025",
      slots: "25 Slots Available",
      image: Kalu,
      link: "/kalu"
    },
    {
      id: 5,
      title: "Aadrai Jungle Trek",
      date: "August-September 2025",
      slots: "25 Slots Available",
      image: Adrai,
      link: "/aadrai"
    },
    {
      id: 6,
      title: "Visapur Fort Trek",
      date: "August-September 2025",
      slots: "25 Slots Available",
      image: Visapur,
      link: "/visapur"
    }
    
    /*,
    {
      id: 4,
      title: "Leh Ladakh",
      date: "May, June, July",
      slots: "25 Slots Available",
      image: "/api/placeholder/600/400",
      link: "/ladakh"
    },
    {
      id: 5,
      title: "Goa",
      date: "February",
      slots: "25 Slots Available",
      image: "/api/placeholder/600/400",
      link: "/goa"
    },
    {
      id: 6,
      title: "Hampi,Badami",
      date: "February",
      slots: "25 Slots Available",
      image: "/api/placeholder/600/400",
      link: "/hampi-badami"
    }*/
  ];

  return (
    <div className="w-full py-8 sm:py-12 md:py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 sm:mb-10 md:mb-12 lg:mb-16 gap-6 md:gap-4">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 w-full md:w-auto">
            Monsoon Trails
          </h2>
          <div className="w-full md:w-auto md:text-right">
            <p className="text-sm sm:text-base text-gray-700 mb-4 max-w-2xl md:ml-auto">
              Indulge in our carefully crafted packages to immerse you in the most captivating and transformative travel adventures.
            </p>
            {/* <a 
              href="/all-packages" 
              className="inline-block text-gray-800 border-b border-gray-800 pb-1 hover:border-gray-600 transition-colors duration-300 text-sm sm:text-base"
            >
              See All Packages
            </a> */}
          </div>
        </div>

        {/* Adventure Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7 lg:gap-8">
          {adventures.map((adventure) => (
            <a 
              key={adventure.id}
              href={adventure.link}
              className="group block overflow-hidden rounded-2xl"
            >
              {/* Card Container with hover animation */}
              <div className="relative bg-white rounded-2xl overflow-hidden transform transition-all duration-300 group-hover:-translate-y-1 sm:group-hover:-translate-y-3 group-hover:shadow-xl">
                {/* Image Container */}
                <div className="relative h-64 sm:h-72 md:h-80 overflow-hidden rounded-2xl">
                  <img 
                    src={adventure.image} 
                    alt={adventure.title}
                    className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-110 rounded-2xl"
                  />
                  
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-85 group-hover:opacity-90 transition-opacity duration-300 rounded-2xl"></div>
                  
                  {/* Content overlay */}
                  <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-5 md:p-6 text-white">
                    <h3 className="text-xl sm:text-2xl md:text-2xl font-bold mb-2 sm:mb-3">
                      {adventure.title}
                    </h3>
                    
                    <div className="flex items-center text-xs sm:text-sm mb-1 sm:mb-2">
                      <svg className="w-3 h-3 sm:w-4 sm:h-4 mr-1.5 sm:mr-2" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                        <circle cx="12" cy="12" r="10"></circle>
                        <polyline points="12 6 12 12 16 14"></polyline>
                      </svg>
                      <span>{adventure.date}</span>
                    </div>
                    
                    <div className="flex items-center text-xs sm:text-sm mt-1 sm:mt-2">
                      <svg className="w-3 h-3 sm:w-4 sm:h-4 mr-1.5 sm:mr-2" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"></path>
                      </svg>
                      <span>{adventure.slots}</span>
                    </div>
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default UpcomingAdventuresSection;