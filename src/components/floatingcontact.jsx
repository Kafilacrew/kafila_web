import React, { useState } from 'react';
import { MessageCircle, Phone, X, MessageSquare } from 'lucide-react';

const FloatingContactButtons = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Phone number (update as needed)
  const phoneNumber = '+1234567890';
  
  // WhatsApp number and default message (update as needed)
  const whatsappNumber = '+1234567890';
  const whatsappMessage = encodeURIComponent('Hello! I need assistance.');

  return (
    // Using style prop as backup for visibility
    <div 
      className="fixed bottom-4 right-4 z-50" 
      style={{ 
        position: 'fixed', 
        bottom: '1rem', 
        right: '1rem', 
        zIndex: 999,
        pointerEvents: 'auto' 
      }}
    >
      {/* Floating buttons container */}
      <div className="flex flex-col items-end space-y-3">

        {/* WhatsApp button with hover label */}
        <div 
          className={`relative transition-all duration-300 ease-in-out ${
            isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4 pointer-events-none'
          }`}
          style={{ visibility: isOpen ? 'visible' : 'hidden' }}
        >
          <div className="group relative">
            <a 
              href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-500 text-white w-14 h-14 rounded-full flex items-center justify-center shadow-lg hover:bg-green-600 transition-colors"
              style={{ 
                backgroundColor: '#10B981', 
                color: 'white',
                width: '3.5rem',
                height: '3.5rem',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
                textDecoration: 'none'
              }}
            >
              <MessageCircle size={24} />
            </a>
            {/* WhatsApp hover label */}
            <div className="absolute right-full mr-2 top-1/2 transform -translate-y-1/2 opacity-0 group-hover:opacity-100 bg-gray-800 text-white px-2 py-1 rounded whitespace-nowrap transition-opacity duration-200">
              WhatsApp
            </div>
          </div>
        </div>

        {/* Phone button with hover label */}
        <div 
          className={`flex items-center space-x-2 transition-all duration-300 ease-in-out ${
            isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4 pointer-events-none'
          }`}
          style={{ visibility: isOpen ? 'visible' : 'hidden' }}
        >
          <div className="group relative">
            <a 
              href={`tel:${phoneNumber}`}
              className="bg-green-500 text-white w-14 h-14 rounded-full flex items-center justify-center shadow-lg hover:bg-green-600 transition-colors"
              style={{ 
                backgroundColor: '#10B981', 
                color: 'white',
                width: '3.5rem',
                height: '3.5rem',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
                textDecoration: 'none'
              }}
            >
              <Phone size={24} />
            </a>
            {/* Phone hover label */}
            <div className="absolute right-full mr-2 top-1/2 transform -translate-y-1/2 opacity-0 group-hover:opacity-100 bg-gray-800 text-white px-2 py-1 rounded whitespace-nowrap transition-opacity duration-200">
              Phone
            </div>
          </div>
        </div>

        {/* Main toggle button */}
        <button 
          onClick={() => setIsOpen(!isOpen)}
          className={`w-14 h-14 rounded-full flex items-center justify-center shadow-lg transition-all duration-300 ${
            isOpen ? 'bg-gray-900 text-white' : 'bg-gray-900 text-white hover:bg-gray-800'
          }`}
          style={{ 
            backgroundColor: '#111827', 
            color: 'white',
            width: '3.5rem',
            height: '3.5rem',
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
            cursor: 'pointer'
          }}
        >
          {isOpen ? <X size={24} /> : <MessageSquare size={24} />}
        </button>
      </div>
    </div>
  );
};

export default FloatingContactButtons;