import React from 'react';

const BookingButtons = ({ trekType = "auto" }) => {
  const links = {
  harishchandragad: 'https://forms.easebuzz.in/register/KafilaMOzbn/Harishchandragad',
  kalsubai: 'https://forms.easebuzz.in/register/KafilaMOzbn/Kalsubai',
  sandhanvalley: 'https://forms.easebuzz.in/register/KafilaMOzbn/Sandhanvalley',
  ladakh: 'https://forms.easebuzz.in/register/KafilaMOzbn/Ladakh',
  goa: 'https://forms.easebuzz.in/register/KafilaMOzbn/Goa',
  hampi: 'https://forms.easebuzz.in/register/KafilaMOzbn/Hampi',
  nanemachi: 'https://forms.easebuzz.in/register/KafilaMOzbn/Nanemachi',
  devkund: 'https://forms.easebuzz.in/register/KafilaMOzbn/Devkund',
  andharban: 'https://forms.easebuzz.in/register/KafilaMOzbn/Andharban',
  kalu: 'https://forms.easebuzz.in/register/KafilaMOzbn/Kalu',
  aadrai: 'https://forms.easebuzz.in/register/KafilaMOzbn/Aadrai',
  visapur: 'https://forms.easebuzz.in/register/KafilaMOzbn/Visapur',
  kedarnath: 'https://forms.easebuzz.in/register/KafilaMOzbn/Kedarnath',
  pondicherry: 'https://forms.easebuzz.in/register/KafilaMOzbn/Pondicherry',
  "water-rappelling": 'https://forms.easebuzz.in/register/KafilaMOzbn/Water-rappelling',
  kedarkantha: 'https://forms.easebuzz.in/register/KafilaMOzbn/Kedarkantha',
  bir: 'https://forms.easebuzz.in/register/KafilaMOzbn/Bir',
  brahmatal: 'https://forms.easebuzz.in/register/KafilaMOzbn/Brahmatal',
  ratangad: 'https://forms.easebuzz.in/register/KafilaMOzbn/Ratangad',
  kuaripass: 'https://forms.easebuzz.in/register/KafilaMOzbn/Kuaripass',
  harihar: 'https://forms.easebuzz.in/register/KafilaMOzbn/Harihar',
  bhairavgad: 'https://forms.easebuzz.in/register/KafilaMOzbn/Bhairavgad',
  vasotafort: 'https://forms.easebuzz.in/register/KafilaMOzbn/VasotaFort',
  'rajmachi-fireflies': 'https://forms.easebuzz.in/register/KafilaMOzbn/RajmachiFireflies',
  vietnam: 'https://forms.easebuzz.in/register/KafilaMOzbn/Vietnam',
  turtlefest: 'https://forms.easebuzz.in/register/KafilaMOzbn/TurtleFest',
  'chandrashila-tungnath': 'https://forms.easebuzz.in/register/KafilaMOzbn/ChandrashilaTungnath',
};


  const trekKeys = Object.keys(links);

  const handleBookNow = () => {
    let currentTrekType = trekType;

    if (trekType === "auto") {
      const pathname = window.location.pathname.toLowerCase();

      // Prefer matching by URL path (more reliable for pages like Velas)
      currentTrekType = trekKeys.find(key => pathname.includes(key)) || null;

      // Fallback to broader text search only if path-based match fails
      if (!currentTrekType) {
        const text = (
          window.location.href + 
          window.location.pathname + 
          document.title + 
          document.body.textContent
        ).toLowerCase();

        currentTrekType = trekKeys.find(key => text.includes(key)) || null;
      }
    }

    if (currentTrekType && links[currentTrekType]) {
      window.open(links[currentTrekType], '_blank');
    } else {
      console.log('No booking link available for this page.');
    }
  };

  return (
    <div className="flex justify-center px-2 sm:px-4 md:px-6 lg:px-8">
      <button 
        onClick={handleBookNow}
        className="w-full max-w-[280px] sm:max-w-[350px] md:max-w-[450px] lg:max-w-[500px] xl:max-w-[600px] py-3 sm:py-3.5 md:py-4 px-4 sm:px-6 md:px-8 rounded-lg text-white font-medium sm:font-normal bg-slate-700 hover:bg-slate-600 active:bg-slate-800 transition-colors duration-200 flex items-center justify-center gap-2 sm:gap-3 text-sm sm:text-base md:text-lg touch-manipulation"
      >
        <svg 
          width="16" 
          height="16" 
          viewBox="0 0 24 24" 
          fill="none" 
          stroke="currentColor" 
          strokeWidth="2" 
          strokeLinecap="round" 
          strokeLinejoin="round"
          className="flex-shrink-0 sm:w-[18px] sm:h-[18px] md:w-5 md:h-5"
        >
          <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
          <line x1="16" y1="2" x2="16" y2="6"/>
          <line x1="8" y1="2" x2="8" y2="6"/>
          <line x1="3" y1="10" x2="21" y2="10"/>
        </svg>
        <span className="whitespace-nowrap">Book Now</span>
      </button>
    </div>
  );
};

export default BookingButtons;
