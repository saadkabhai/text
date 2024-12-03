'use client'
import './page.css'
import confetti from 'canvas-confetti';
import { useEffect } from 'react';

export default function Home() {
  const startConfetti = () => {
    let duration = 1 * 1000;
    let end = Date.now() + duration;

    (function frame() {
      if (Date.now() < end) {
        confetti({
          particleCount: 20,
          startVelocity: 30,
          spread: 360,
          ticks: 60,
          origin: {
            x: Math.random(),
            y: 0
          },
          colors: ['#fb2503', '#f73003', '#ffe877', '#579b4f', '#5ec63b', '#39b6c2', '#034e8f', '#242d9e', '#7c4cb2', '#9a2c63', '#fd261f']
        });
        requestAnimationFrame(frame);
      }
    })();
  }
  useEffect(() => {
    const intervalId = setInterval(() => {
      startConfetti();
    }, 900); // Run every 10 seconds

    return () => clearInterval(intervalId); // Cleanup on unmount
  }, []);
  return (
    <div>
      <h1>Happy Birthday, HASSAAN!</h1>
    </div>
  );
}
