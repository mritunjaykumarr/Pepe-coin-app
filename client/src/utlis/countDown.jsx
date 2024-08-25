import "../style/refer.css"

import React, { useState, useEffect } from "react";

const TIMER_KEY = "timerStartTime";
const TIMER_DURATION_KEY = "timerDuration";

const startTimer = ({ hours, minutes, seconds, completed }) => {
  if (completed) {
    return <span>Claim your Today Pepe!</span>;
  } else {
    return (
      <p className="timer">
        {hours}:{minutes}:{seconds}
      </p>
    );
  }
};

const TimerComponent = () => {
  const [timeLeft, setTimeLeft] = useState({
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  const [isCompleted, setIsCompleted] = useState(false);

  useEffect(() => {
    const storedStartTime = localStorage.getItem(TIMER_KEY);
    const storedDuration = localStorage.getItem(TIMER_DURATION_KEY);
    let startTime, duration;

    if (storedStartTime && storedDuration) {
      startTime = new Date(storedStartTime);
      duration = parseInt(storedDuration, 10);
    } else {
      startTime = new Date();
      duration = 24 * 60 * 60 * 1000; // 24 hours in milliseconds
      localStorage.setItem(TIMER_KEY, startTime);
      localStorage.setItem(TIMER_DURATION_KEY, duration);
    }

    const updateTimer = () => {
      const now = new Date();
      const elapsedTime = now - startTime;
      const remainingTime = duration - elapsedTime;

      if (remainingTime <= 0) {
        localStorage.removeItem(TIMER_KEY);
        localStorage.removeItem(TIMER_DURATION_KEY);
        setTimeLeft({ hours: 0, minutes: 0, seconds: 0 });
        setIsCompleted(true);
      } else {
        const hours = Math.floor((remainingTime / (1000 * 60 * 60)) % 24);
        const minutes = Math.floor((remainingTime / (1000 * 60)) % 60);
        const seconds = Math.floor((remainingTime / 1000) % 60);

        setTimeLeft({ hours, minutes, seconds });
        setIsCompleted(false);
      }
    };

    // Update the timer immediately and then every second
    updateTimer();
    const intervalId = setInterval(updateTimer, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return startTimer({
    hours: timeLeft.hours,
    minutes: timeLeft.minutes,
    seconds: timeLeft.seconds,
    completed: isCompleted,
  });
};

export default TimerComponent;
