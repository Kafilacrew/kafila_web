import React from 'react';

const VideoBackground = ({ 
  videoId = "278IRQ6HSi4",
  startTime = 0,
  endTime = 25,
  title = "Beautiful drone shot - Cinematic FPV on an empty beach",
  className = "w-full h-64 overflow-hidden rounded-2xl"
}) => {
  return (
    <div className={`relative ${className}`}>
      {/* Video Background Section */}
      {/* Transparent overlay to catch clicks */}
      <div className="absolute inset-0 z-10" onClick={(e) => e.preventDefault()}></div>
      
      <iframe 
        className="absolute top-1/2 left-1/2 w-full h-full max-w-none rounded-2xl"
        src={`https://www.youtube.com/embed/${videoId}?autoplay=1&loop=1&mute=1&playlist=${videoId}&controls=0&modestbranding=1&showinfo=0&playsinline=1&enablejsapi=1&start=${startTime}&end=${endTime}&iv_load_policy=3&rel=0`}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        style={{ 
          pointerEvents: 'none',
          transform: 'translate(-50%, -50%)',
          width: '400%',
          height: '400%',
          borderRadius: '1rem' // 16px border radius - same as rounded-2xl
        }}
        title={title}
      />
    </div>
  );
};

export default VideoBackground;