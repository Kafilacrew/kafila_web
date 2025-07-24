import React from 'react';
import { CreditCard } from 'lucide-react';

const BookingButtons = ({ trekType = "auto" }) => {
  const handleBookNow = () => {
    let currentTrekType = trekType;
    
    // Auto-detect trek type from URL or page if not specified
    if (trekType === "auto") {
      const currentUrl = window.location.href.toLowerCase();
      const currentPath = window.location.pathname.toLowerCase();
      
      if (currentUrl.includes('devkund') || currentPath.includes('devkund')) {
        currentTrekType = 'devkund';
      } else if (currentUrl.includes('andharban') || currentPath.includes('andharban')) {
        currentTrekType = 'andharban';
      } else if (currentUrl.includes('nanemachi') || currentPath.includes('nanemachi')) {
        currentTrekType = 'nanemachi';
      } else if (currentUrl.includes('aadrai') || currentPath.includes('aadrai')) {
        currentTrekType = 'aadrai';
      } else if (currentUrl.includes('kalu') || currentPath.includes('kalu')) {
        currentTrekType = 'kalu';
      } else {
        // Fallback: try to detect from page title or content
        const pageTitle = document.title.toLowerCase();
        const pageContent = document.body.textContent.toLowerCase();
        
        if (pageTitle.includes('devkund') || pageContent.includes('devkund')) {
          currentTrekType = 'devkund';
        } else if (pageTitle.includes('andharban') || pageContent.includes('andharban')) {
          currentTrekType = 'andharban';
        } else if (pageTitle.includes('nanemachi') || pageContent.includes('nanemachi')) {
          currentTrekType = 'nanemachi';
        } else if (pageTitle.includes('aadrai') || pageContent.includes('aadrai')) {
          currentTrekType = 'aadrai';
        } else if (pageTitle.includes('kalu') || pageContent.includes('kalu')) {
          currentTrekType = 'kalu';
        } else {
          currentTrekType = 'nanemachi'; // default fallback
        }
      }
    }
    
    const links = {
      devkund: 'https://forms.easebuzz.in/register/KafilaMOzbn/devkund',
      andharban: 'https://forms.easebuzz.in/register/KafilaMOzbn/andharbantrek',
      nanemachi: 'https://forms.easebuzz.in/register/KafilaMOzbn/NS10',
      aadrai: 'https://forms.easebuzz.in/register/KafilaMOzbn/aadraiJungle1',
      kalu: 'https://forms.easebuzz.in/register/KafilaMOzbn/kalu'
    };
    
    window.open(links[currentTrekType], '_blank');
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

const App = () => {
  return (
    <div className="flex items-center justify-center py-4 sm:py-6 md:py-8">
      <BookingButtons />
    </div>
  );
};

export default App;