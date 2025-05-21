import React, { useState, useEffect } from 'react';
import { Clock } from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

const CountdownTimer = () => {
  const isMobile = useIsMobile();
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    // Set the date we're counting down to - June 2, 2025
    const countDownDate = new Date('June 2, 2025 00:00:00').getTime();

    // Update the countdown every 1 second
    const timer = setInterval(() => {
      // Get current date and time
      const now = new Date().getTime();

      // Find the distance between now and the countdown date
      const distance = countDownDate - now;

      // Time calculations for days, hours, minutes and seconds
      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      // Update state with new values
      setTimeLeft({ days, hours, minutes, seconds });

      // If the countdown is finished, clear the interval
      if (distance < 0) {
        clearInterval(timer);
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    }, 1000);

    // Clean up the interval on component unmount
    return () => clearInterval(timer);
  }, []);

  // If countdown is over
  if (timeLeft.days <= 0 && timeLeft.hours <= 0 && timeLeft.minutes <= 0 && timeLeft.seconds <= 0) {
    return (
      <div className="w-full bg-educational-blue text-white py-2 text-center font-medium">
        PSLE Bootcamps have started! Register now to secure your spot.
      </div>
    );
  }

  return (
    <div className="w-full bg-educational-blue text-white py-2">
      <div className="max-w-4xl mx-auto flex items-center justify-center px-4">
        <div className={`w-full flex ${isMobile ? 'flex-col' : 'flex-row'} items-center justify-center gap-2`}>
          <div className="flex items-center">
            <Clock className="mr-2 h-4 w-4" />
            <span className="font-medium text-sm sm:text-base">PSLE Bootcamps starting in:</span>
          </div>
          <div className="flex items-center justify-center gap-2 sm:gap-4">
            <div className="flex flex-col items-center">
              <span className="text-lg sm:text-xl font-bold">{timeLeft.days}</span>
              <span className="text-xs opacity-80">Days</span>
            </div>
            <span className="text-lg sm:text-xl font-bold">:</span>
            <div className="flex flex-col items-center">
              <span className="text-lg sm:text-xl font-bold">{timeLeft.hours}</span>
              <span className="text-xs opacity-80">Hours</span>
            </div>
            <span className="text-lg sm:text-xl font-bold">:</span>
            <div className="flex flex-col items-center">
              <span className="text-lg sm:text-xl font-bold">{timeLeft.minutes}</span>
              <span className="text-xs opacity-80">Minutes</span>
            </div>
            <span className="text-lg sm:text-xl font-bold">:</span>
            <div className="flex flex-col items-center">
              <span className="text-lg sm:text-xl font-bold">{timeLeft.seconds}</span>
              <span className="text-xs opacity-80">Seconds</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CountdownTimer;
