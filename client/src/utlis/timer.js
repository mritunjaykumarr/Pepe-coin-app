const timerFunction = () => {
  const second = 1000,
    minute = second * 60,
    hour = minute * 60,
    day = hour * 24;

  // Get current date and determine target date
  const today = new Date(),
    dd = String(today.getDate()).padStart(2, "0"),
    mm = String(today.getMonth() + 1).padStart(2, "0"),
    yyyy = today.getFullYear(),
    nextYear = yyyy + 1,
    dayMonth = "09/30/",
    finished =
      today > new Date(`${dayMonth}${yyyy}`)
        ? `${dayMonth}${nextYear}`
        : `${dayMonth}${yyyy}`;

  // Countdown target date
  const countDown = new Date(finished).getTime();

  const x = setInterval(() => {
    const now = new Date().getTime(),
      distance = countDown - now;

    // Calculate remaining days, hours, minutes, and seconds
    const daysRemaining = Math.floor(distance / day);
    const hoursRemaining = Math.floor((distance % day) / hour);
    const minutesRemaining = Math.floor((distance % hour) / minute);
    const secondsRemaining = Math.floor((distance % minute) / second);

    // Update HTML elements
    document.getElementById("days").textContent = `${daysRemaining} D`;
    document.getElementById("hours").textContent = `${hoursRemaining} H`;
    document.getElementById("minutes").textContent = `${minutesRemaining} M`;
    document.getElementById("seconds").textContent = `${secondsRemaining} S`;

    // Clear interval if countdown is finished
    if (distance < 0) {
      clearInterval(x);
      document.getElementById("days").textContent = "0 D";
      document.getElementById("hours").textContent = "0 H";
      document.getElementById("minutes").textContent = "0 M";
      document.getElementById("seconds").textContent = "0 S";
    }
  }, 1000); // Update every second
};

export default timerFunction