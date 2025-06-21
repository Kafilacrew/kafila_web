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
        } else {
          currentTrekType = 'nanemachi'; // default fallback
        }
      }
    }
    
    const links = {
      devkund: 'https://forms.easebuzz.in/register/KafilaMOzbn/devkundtrek',
      andharban: 'https://forms.easebuzz.in/register/KafilaMOzbn/andharbantrek',
      nanemachi: 'https://forms.easebuzz.in/register/KafilaMOzbn/nanemachitrek'
    };
    
    window.open(links[currentTrekType], '_blank');
  };

  return (
    <div className="flex justify-center px-4">
      <button 
        onClick={handleBookNow}
        className="w-[500px] max-w-[1000px] py-3.5 px-6 rounded-lg text-white font-normal bg-slate-700 hover:bg-slate-600 active:bg-slate-800 transition-colors duration-200 flex items-center justify-center gap-3"
      >
        <svg 
          width="18" 
          height="18" 
          viewBox="0 0 24 24" 
          fill="none" 
          stroke="currentColor" 
          strokeWidth="2" 
          strokeLinecap="round" 
          strokeLinejoin="round"
          className="flex-shrink-0"
        >
          <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
          <line x1="16" y1="2" x2="16" y2="6"/>
          <line x1="8" y1="2" x2="8" y2="6"/>
          <line x1="3" y1="10" x2="21" y2="10"/>
        </svg>
        Book Now
      </button>
    </div>
  );
};

const App = () => {
  return (
    <div className=" flex items-center justify-center">
      <BookingButtons />
    </div>
  );
};

export default App;