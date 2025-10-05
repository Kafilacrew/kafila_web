import React from "react";
import { FaStar } from "react-icons/fa";

const GoogleReview = () => {
  return (
    <div className="flex flex-col items-center justify-center text-center p-6 bg-white rounded-2xl shadow-lg w-80 mx-auto mt-10 border border-gray-200 hover:shadow-xl transition-shadow duration-300">
      {/* Google Logo + Title */}
      <div className="flex items-center gap-2 mb-2">
        {/* Official Google “G” SVG */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 48 48"
          className="w-8 h-8"
        >
          <path
            fill="#EA4335"
            d="M24 9.5c3.54 0 6.64 1.22 9.12 3.6l6.84-6.84C35.9 2.73 30.47 0 24 0 14.6 0 6.55 5.36 2.56 13.1l7.98 6.19C12.08 13.02 17.57 9.5 24 9.5z"
          />
          <path
            fill="#4285F4"
            d="M46.98 24.5c0-1.6-.15-3.13-.43-4.62H24v9.13h13.02c-.56 2.9-2.23 5.36-4.75 7.03l7.38 5.73C43.94 37.66 46.98 31.64 46.98 24.5z"
          />
          <path
            fill="#FBBC05"
            d="M10.54 28.29A14.47 14.47 0 0 1 9.5 24c0-1.49.26-2.94.74-4.29l-7.98-6.19A23.99 23.99 0 0 0 0 24c0 3.91.94 7.6 2.56 10.9l7.98-6.19z"
          />
          <path
            fill="#34A853"
            d="M24 48c6.48 0 11.92-2.13 15.89-5.77l-7.38-5.73c-2.06 1.39-4.7 2.2-8.51 2.2-6.43 0-11.92-3.52-14.46-8.6l-7.98 6.19C6.55 42.64 14.6 48 24 48z"
          />
          <path fill="none" d="M0 0h48v48H0z" />
        </svg>

        <h2 className="text-xl font-semibold text-gray-800">Google Reviews</h2>
      </div>

      {/* Stars */}
      <div className="flex justify-center gap-1 text-yellow-400 mb-1">
        {[...Array(5)].map((_, i) => (
          <FaStar key={i} size={18} />
        ))}
      </div>

      {/* Rating Text */}
      <p className="text-gray-600 text-sm mb-1">4.9 out of 5</p>
      <p className="text-gray-500 text-xs">(Based on 175 reviews)</p>
    </div>
  );
};

export default GoogleReview;
