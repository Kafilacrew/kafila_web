import React from 'react';
import { CreditCard } from 'lucide-react';

const BookingButtons = ({ trekType = "nanemachi" }) => {
  const handleBookNow = () => {
    const links = {
      devkund: 'https://forms.easebuzz.in/register/KafilaMOzbn/devkundwaterfall',
      andharban: 'https://forms.easebuzz.in/register/KafilaMOzbn/andharbanjungle',
      nanemachi: 'https://forms.easebuzz.in/register/KafilaMOzbn/nanemachitrek'
    };
    
    window.open(links[trekType], '_blank');
  };

  return (
    <div className="flex justify-center px-4">
      <button 
        onClick={handleBookNow}
        className="w-full max-w-[500px] py-4 px-6 rounded-md text-white font-medium bg-gray-800 hover:bg-gray-300 active:bg-gray-500 transition-colors duration-200 flex items-center justify-center gap-2"
      >
        <CreditCard className="h-5 w-5" />
        Book Now
      </button>
    </div>
  );
};

export default BookingButtons;