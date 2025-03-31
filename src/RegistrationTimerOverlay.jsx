import React, { useState, useEffect } from "react";

const RegistrationTimerOverlay = ({ endDate = "2025-04-01T00:00:00", onClose }) => {
  const [timeRemaining, setTimeRemaining] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const calculateTimeRemaining = () => {
      const now = new Date().getTime();
      const end = new Date(endDate).getTime();
      const difference = end - now;
      
      if (difference <= 0) {
        setTimeRemaining({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        return;
      }
      
      setTimeRemaining({
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((difference % (1000 * 60)) / 1000),
      });
    };
    
    calculateTimeRemaining();
    const timer = setInterval(calculateTimeRemaining, 1000);
    
    return () => clearInterval(timer);
  }, [endDate]);

  const handleClose = () => {
    setIsVisible(false);
    if (onClose) onClose();
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-4 right-4 z-40 animate-fade-in  ">
      <div className="bg-white rounded-lg shadow-lg p-2 md:p-4 text-gray-800 border border-gray-200">
        <div className="flex justify-end mb-1 md:mb-2">
          <button
            onClick={handleClose}
            className="text-gray-500 hover:text-gray-700 text-xs md:text-sm cursor-pointer"
            aria-label="Close timer"
          >
            ✕
          </button>
        </div>
        
        <div className="flex flex-col items-center gap-1 md:gap-2">
          <div className="flex flex-col gap-2 md:gap-3">
            {["days", "hours", "minutes", "seconds"].map((unit) => (
              <div key={unit} className="flex flex-col items-center">
                <span className="font-mono text-lg md:text-2xl font-bold">
                  {String(timeRemaining[unit]).padStart(2, "0")}
                </span>
                <span className="text-xs md:text-sm text-gray-600">{unit}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegistrationTimerOverlay;