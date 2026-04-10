import React from 'react';

const NoRefundPolicy = () => {
  return (
    <div className="max-w-4xl mx-auto p-6 bg-white">
      <h1 className="text-center text-4xl font-bold mb-8">No Refund Policy</h1>

      <div className="p-6 bg-gray-50 rounded-xl">
        <p className="text-gray-800 text-lg leading-relaxed">
          This trek follows a strict <strong>NO CANCELLATION AND REFUND POLICY</strong>. Once the booking is
          confirmed, the amount paid is non-refundable under any circumstances. Please book only
          if you are sure about joining the trek.
        </p>
      </div>
    </div>
  );
};

export default NoRefundPolicy;
