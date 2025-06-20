import React from 'react';

const RefundPolicy = () => {
  return (
    <div className="max-w-4xl mx-auto p-6 bg-white">
      <h1 className="text-center text-4xl font-bold mb-8">Refund Policy</h1>
      
      <p className="mb-6">
        We understand that plans can change, and sometimes it becomes necessary to cancel a trek. Below is our refund policy outlining the refundable amounts based on the cancellation period:
      </p>
      
      <div className="space-y-5">
        <div className="flex gap-3">
          <div className="flex-shrink-0 w-6 h-6">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <p>
            <strong>Cancellation within 7 Days:</strong> If the trek is canceled within 7 days prior to the scheduled trek start date, a refund of 50% of the total amount paid, will be issued.
          </p>
        </div>
        
        <div className="flex gap-3">
          <div className="flex-shrink-0 w-6 h-6">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <p>
            <strong>Cancellation within 3 Days:</strong> If the trek is canceled within 3 days prior to the scheduled trek start date, a refund of 25% of the total amount paid, will be issued.
          </p>
        </div>
        
        <div className="flex gap-3">
          <div className="flex-shrink-0 w-6 h-6">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <p>
            <strong>Cancellation 1 Day Prior:</strong> No refund will be provided for cancellations made 1 day prior to the scheduled trek start date. The total amount paid, excluding the non-refundable initial payment, will be non-refundable.
          </p>
        </div>
        
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
        
        <div className="flex gap-3">
          <div className="flex-shrink-0 w-6 h-6">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <p>
            Refunds will be processed within 4 business days from the date of cancellation request.
          </p>
        </div>
        
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
      </div>
      
      <div className="mt-8 p-4 bg-gray-50 rounded-lg">
        <p className="font-semibold">
          We highly recommend all participants to carefully review their travel plans and ensure their availability before booking a trek with us. In case of any cancellations or changes, please inform us as soon as possible, adhering to the specified cancellation periods mentioned above.
        </p>
      </div>
      
      <p className="mt-6">
        If you have any further questions or require assistance regarding the refund policy, please feel free to contact us.
      </p>
    </div>
  );
};

export default RefundPolicy;