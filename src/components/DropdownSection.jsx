import { useState } from 'react';

const DropdownSection = ({ title, subtitle, items, isVisible, dataId }) => {
  const [expandedDay, setExpandedDay] = useState(null);

  return (
    <div className="animate-on-scroll opacity-0 translate-y-10 transition-all duration-700 ease-out" 
         data-id={dataId} 
         style={isVisible ? {opacity: 1, transform: 'translateY(0)'} : {}}>
      <button 
        onClick={() => setExpandedDay(expandedDay === 1 ? null : 1)}
        className="w-full max-w-4xl mx-auto block p-6 lg:p-8 bg-gray-50 hover:bg-gray-100 rounded-xl transition-all duration-300 hover:shadow-lg group"
      >
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4 lg:gap-6 flex-1 min-w-0">
            {subtitle && (
              <span className="text-2xl lg:text-3xl font-bold text-gray-900 flex-shrink-0">{subtitle}</span>
            )}
            <span className="text-lg md:text-xl lg:text-2xl text-gray-800 break-words">{title}</span>
          </div>
          <span className={`text-xl transition-transform duration-300 flex-shrink-0 ${expandedDay === 1 ? 'rotate-180' : ''}`}>
            ▼
          </span>
        </div>
      </button>
      
      {expandedDay === 1 && (
        <div className="max-w-4xl mx-auto mt-4 p-6 lg:p-8 bg-white rounded-xl shadow-lg animate-scale-up">
          <div className="space-y-6">
            {items?.map((item, index) => (
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
      )}

      {/* CSS Animation */}
      <style jsx>{`
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
      `}</style>
    </div>
  );
};

export default DropdownSection;