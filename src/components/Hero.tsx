import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const COUNTDOWN_KEY = 'suihub_countdown_target';

const Hero = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 60,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  // For the expanding background effect
  const bgRef = useRef(null);

  useEffect(() => {
    // Persist the countdown target date in localStorage
    let targetDate = localStorage.getItem(COUNTDOWN_KEY);
    if (!targetDate) {
      // Only set once: 60 days from now
      const now = new Date();
      targetDate = new Date(now.getTime() + 60 * 24 * 60 * 60 * 1000).getTime().toString();
      localStorage.setItem(COUNTDOWN_KEY, targetDate);
    }
    targetDate = parseInt(targetDate, 10);

    const updateTimer = () => {
      const current = new Date().getTime();
      const distance = targetDate - current;

      if (distance > 0) {
        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000)
        });
      } else {
        setTimeLeft({
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0
        });
      }
    };

    updateTimer();
    const timer = setInterval(updateTimer, 1000);

    return () => clearInterval(timer);
  }, []);

  // Expanding background effect: animate background size
  useEffect(() => {
    let frame;
    let scale = 1.14; // Start larger for more expansion
    let direction = 1;
    const minScale = 1.14;
    const maxScale = 1.25; // Expand a bit more

    const animateBackground = () => {
      scale += direction * 0.0006;
      if (scale > maxScale) {
        scale = maxScale;
        direction = -1;
      }
      if (scale < minScale) {
        scale = minScale;
        direction = 1;
      }
      if (bgRef.current) {
        bgRef.current.style.backgroundSize = `${scale * 100}% ${scale * 100}%`;
        bgRef.current.style.backgroundPosition = `center center`;
      }
      frame = requestAnimationFrame(animateBackground);
    };
    frame = requestAnimationFrame(animateBackground);
    return () => cancelAnimationFrame(frame);
  }, []);

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-visible"
      style={{ background: "transparent" }}
    >
      {/* Curved and expanding background box - set top margin to clear nav height */}
      <div
        ref={bgRef}
        className="relative z-0 w-full max-w-[95vw] h-[99vh] md:h-[96vh] bg-cover bg-center shadow-2xl"
        style={{
          backgroundImage:
            'url("https://cocozqaswhyugfbilbxk.supabase.co/storage/v1/object/public/suihub//sui%20anim.png")',
          backgroundSize: '114% 114%',
          backgroundPosition: 'center center',
          backgroundRepeat: 'no-repeat',
          opacity: 0.7,
          borderRadius: '4rem',
          transition: 'opacity 0.4s',
          willChange: 'background-size, background-position',
          overflow: 'hidden',
          marginTop: '5rem', // enough space for nav, adjust if needed
        }}
      />
      {/* Optional overlay for contrast */}
      <div
        className="absolute left-1/2 top-0 -translate-x-1/2 z-10 pointer-events-none w-full max-w-[95vw] h-[99vh] md:h-[96vh]"
        style={{
          borderRadius: '4rem',
          background: 'rgba(0,0,0,0.3)',
          overflow: 'hidden',
          marginTop: '5rem', // match background margin
        }}
      ></div>

      <div
        className="w-full z-20 absolute left-1/2 top-0 -translate-x-1/2"
        style={{
          marginTop: '5rem', // match background margin
          height: 'calc(99vh - 5rem)',
          display: 'flex',
          alignItems: 'center',
        }}
      >
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center w-full">
          {/* Centered Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center w-full"
          >
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6"
            >
              <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                Sui Move Bootcamp
              </span>
              <br />
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-col items-center gap-4"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-[#4DA2FF] text-white px-8 py-4 rounded-full font-semibold text-lg flex items-center justify-center hover:bg-[#358be0] transition-colors duration-300"
              >
                Apply Now
                <ArrowRight className="ml-2 w-5 h-5" />
              </motion.button>
            </motion.div>
          </motion.div>

          {/* Countdown Timer */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
            className="text-center mt-16 w-full"
          >
            <p className="text-gray-400 text-lg mb-6">Next Cohort Starts In:</p>
            <div className="flex justify-center space-x-4 md:space-x-8">
              {Object.entries(timeLeft).map(([unit, value]) => (
                <div key={unit} className="bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700 rounded-xl p-4 min-w-[80px]">
                  <div className="text-2xl md:text-3xl font-bold text-[#4DA2FF]">
                    {String(value).padStart(2, '0')}
                  </div>
                  <div className="text-gray-400 text-sm capitalize">{unit}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;