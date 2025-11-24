import React, { useState } from 'react';

const RefundPolicy1 = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white">
      <h1 className="text-center text-4xl font-bold mb-8">Refund Policy</h1>
      
      <p className="mb-6">
        We understand that plans can change, and sometimes it becomes necessary to cancel a trek. Below is our refund policy outlining the refundable amounts based on the cancellation period:
      </p>
      
      {/* Dropdown Section */}
      <div className="mb-8">
        <button 
          onClick={() => setIsExpanded(!isExpanded)}
          className="w-full p-6 bg-gray-50 hover:bg-gray-100 rounded-xl transition-all duration-300 hover:shadow-lg group"
        >
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4 flex-1 min-w-0">
              <span className="text-lg md:text-xl lg:text-2xl text-gray-800 break-words font-semibold">Cancellation Policy Details</span>
            </div>
            <span className={`text-xl transition-transform duration-300 flex-shrink-0 ${isExpanded ? 'rotate-180' : ''}`}>
              ▼
            </span>
          </div>
        </button>
        
        {isExpanded && (
          <div className="mt-4 p-6 bg-white rounded-xl shadow-lg animate-scale-up">
            <div className="space-y-5">

              {/* Updated 45 Days */}
              <div className="flex gap-3">
                <div className="flex-shrink-0 w-6 h-6">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <p>
                  <strong>Cancellation within 45 Days:</strong> If the trek is canceled within 45 days prior to the scheduled trek start date, a refund of 50% of the total amount paid will be issued.
                </p>
              </div>

              {/* Updated 30 Days */}
              <div className="flex gap-3">
                <div className="flex-shrink-0 w-6 h-6">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <p>
                  <strong>Cancellation within 30 Days:</strong> If the trek is canceled within 30 days prior to the scheduled trek start date, a refund of 25% of the total amount paid will be issued.
                </p>
              </div>

              {/* Updated 15 Days Prior */}
              <div className="flex gap-3">
                <div className="flex-shrink-0 w-6 h-6">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <p>
                  <strong>Cancellation 15 Days Prior:</strong> No refund will be provided for cancellations made within 15 days of the scheduled trek start date. The total amount paid, excluding the non-refundable initial payment, will be non-refundable.
                </p>
              </div>

              {/* Refund method */}
              <div className="flex gap-3">
                <div className="flex-shrink-0 w-6 h-6">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <p>
                  Refunds will be issued to the original payment method used during the booking process.
                </p>
              </div>

              {/* Processing time */}
              <div className="flex gap-3">
                <div className="flex-shrink-0 w-6 h-6">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <p>
                  Refunds will be processed within 4 business days from the date of the cancellation request.
                </p>
              </div>

              {/* Bank charges */}
              <div className="flex gap-3">
                <div className="flex-shrink-0 w-6 h-6">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <p>
                  Any applicable bank or transaction fees incurred during the refund process will be deducted from the refundable amount.
                </p>
              </div>

              {/* New note */}
              <div className="flex gap-3">
                <div className="flex-shrink-0 w-6 h-6">
                  {/* <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg> */}
                </div>
                <p>
                  <strong>Please Note:</strong> The first installment is strictly non-refundable under any circumstances.
                </p>
              </div>

            </div>
          </div>
        )}
      </div>
      
      <div className="mt-8 p-4 bg-gray-50 rounded-lg">
        <p className="font-semibold">
          We highly recommend all participants to carefully review their travel plans and ensure their availability before booking a trek with us.
        </p>
      </div>
      
      <p className="mt-6">
        If you have any further questions or require assistance regarding the refund policy, please feel free to contact us.
      </p>

      {/* Animation */}
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

export default RefundPolicy1;
