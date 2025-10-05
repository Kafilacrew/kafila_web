import React from 'react';

const BookingButtons = ({ trekType = "auto" }) => {
  const links = {
    devkund: 'https://forms.easebuzz.in/register/KafilaMOzbn/devkund',
    andharban: 'https://forms.easebuzz.in/register/KafilaMOzbn/AB12',
    nanemachi: 'https://forms.easebuzz.in/register/KafilaMOzbn/NS12',
    aadrai: 'https://forms.easebuzz.in/register/KafilaMOzbn/aadraiJungle1',
    kalu: 'https://forms.easebuzz.in/sign-up/KafilaMOzbn/KW8',
    kedarnath: 'https://forms.easebuzz.in/register/KafilaMOzbn/kedarnath1',
    pondicherry: 'https://forms.easebuzz.in/register/KafilaMOzbn/pondicherry1',
    'water-rappelling': 'https://forms.easebuzz.in/register/KafilaMOzbn/WR5'
  };

  const trekKeys = Object.keys(links); // ['devkund', 'andharban', ... ]

  const handleBookNow = () => {
    let currentTrekType = trekType;

    if (trekType === "auto") {
      const text = (
        window.location.href + 
        window.location.pathname + 
        document.title + 
        document.body.textContent
      ).toLowerCase();

      // Find first matching trek type
      currentTrekType = trekKeys.find(key => text.includes(key)) || null;
    }

    if (currentTrekType && links[currentTrekType]) {
      window.open(links[currentTrekType], '_blank');
    } else {
      // No redirection for other pages
      console.log('No booking link available for this page.');
      // Optionally, you can alert user:
      // alert('Booking not available for this page.');
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
