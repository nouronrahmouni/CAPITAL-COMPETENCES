'use client';

import { useState, useEffect } from 'react';

interface CountdownTimerProps {
  hours: number;
  minutes: number;
}

export default function CountdownTimer({ hours, minutes }: CountdownTimerProps) {
  const [timeLeft, setTimeLeft] = useState({
    hours: hours,
    minutes: minutes,
    seconds: 59
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        let newSeconds = prev.seconds - 1;
        let newMinutes = prev.minutes;
        let newHours = prev.hours;

        if (newSeconds < 0) {
          newSeconds = 59;
          newMinutes -= 1;
        }

        if (newMinutes < 0) {
          newMinutes = 59;
          newHours -= 1;
        }

        if (newHours < 0) {
          clearInterval(timer);
          return { hours: 0, minutes: 0, seconds: 0 };
        }

        return { hours: newHours, minutes: newMinutes, seconds: newSeconds };
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="mb-6 p-4 bg-gradient-to-r from-red-500 to-orange-500 rounded-xl text-white">
      <p className="text-sm font-medium mb-2">⏰ OFFER ENDS IN:</p>
      <div className="flex justify-center gap-4">
        <div className="bg-white/20 rounded-lg px-4 py-2">
          <span className="text-3xl font-bold">{String(timeLeft.hours).padStart(2, '0')}</span>
          <p className="text-xs">HOURS</p>
        </div>
        <div className="bg-white/20 rounded-lg px-4 py-2">
          <span className="text-3xl font-bold">{String(timeLeft.minutes).padStart(2, '0')}</span>
          <p className="text-xs">MINS</p>
        </div>
        <div className="bg-white/20 rounded-lg px-4 py-2">
          <span className="text-3xl font-bold">{String(timeLeft.seconds).padStart(2, '0')}</span>
          <p className="text-xs">SECS</p>
        </div>
      </div>
    </div>
  );
}
