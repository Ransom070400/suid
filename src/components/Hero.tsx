import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Code, Zap, ArrowRight, Download } from 'lucide-react';

const Hero = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const targetDate = new Date('2025-03-01T00:00:00').getTime();
    
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate - now;
      
      if (distance > 0) {
        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000)
        });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const floatingAnimation = {
    y: [0, -20, 0],
    transition: {
      duration: 3,
      repeat: Infinity,
      repeatType: "reverse" as const
    }
  };

  return (
    <section id="home" className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-32 h-32 border-2 border-cyan-400 rotate-45 animate-pulse"></div>
        <div className="absolute top-40 right-32 w-24 h-24 border-2 border-blue-500 rotate-12 animate-pulse delay-1000"></div>
        <div className="absolute bottom-32 left-32 w-20 h-20 border-2 border-purple-500 rotate-45 animate-pulse delay-2000"></div>
        <div className="absolute bottom-20 right-20 w-28 h-28 border-2 border-cyan-400 rotate-12 animate-pulse delay-500"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center bg-gradient-to-r from-blue-500/20 to-cyan-400/20 backdrop-blur-sm border border-blue-500/30 rounded-full px-4 py-2 mb-6"
            >
              <Zap className="w-4 h-4 text-cyan-400 mr-2" />
              <span className="text-cyan-400 text-sm font-medium">10-Week Intensive Program</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6"
            >
              <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                Sui Hub Africa
              </span>
              <br />
              <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                Bootcamp
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-xl md:text-2xl text-gray-300 mb-4"
            >
              A 10-Week Program to Become a Certified Move Smart Contract Developer
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="text-lg text-cyan-400 font-semibold mb-8"
            >
              From Zero to Move Hero
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-blue-500 to-cyan-400 text-white px-8 py-4 rounded-full font-semibold text-lg flex items-center justify-center hover:shadow-xl transition-shadow duration-300"
              >
                Apply Now
                <ArrowRight className="ml-2 w-5 h-5" />
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-gray-600 text-white px-8 py-4 rounded-full font-semibold text-lg flex items-center justify-center hover:border-cyan-400 hover:text-cyan-400 transition-colors duration-300"
              >
                <Download className="mr-2 w-5 h-5" />
                Download Curriculum
              </motion.button>
            </motion.div>
          </motion.div>

          {/* Right Column - Visual */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <motion.div
              animate={floatingAnimation}
              className="relative z-10"
            >
              <div className="bg-gradient-to-br from-blue-500/20 to-cyan-400/20 backdrop-blur-xl border border-gray-600 rounded-3xl p-8 mx-auto max-w-md">
                <div className="text-center">
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    className="w-24 h-24 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full mx-auto mb-6 flex items-center justify-center"
                  >
                    <Code className="w-12 h-12 text-white" />
                  </motion.div>
                  <h3 className="text-2xl font-bold text-white mb-4">Developer Journey</h3>
                  <div className="space-y-3">
                    {['Learn Move', 'Build dApps', 'Deploy on Sui', 'Graduate as Hero'].map((step, index) => (
                      <motion.div
                        key={step}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.8 + index * 0.2 }}
                        className="flex items-center space-x-3"
                      >
                        <div className="w-6 h-6 bg-cyan-400 rounded-full flex items-center justify-center">
                          <span className="text-gray-900 text-sm font-bold">{index + 1}</span>
                        </div>
                        <span className="text-gray-300">{step}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Countdown Timer */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
          className="text-center mt-16"
        >
          <p className="text-gray-400 text-lg mb-6">Next Cohort Starts In:</p>
          <div className="flex justify-center space-x-4 md:space-x-8">
            {Object.entries(timeLeft).map(([unit, value]) => (
              <div key={unit} className="bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700 rounded-xl p-4 min-w-[80px]">
                <div className="text-2xl md:text-3xl font-bold text-cyan-400">{value}</div>
                <div className="text-gray-400 text-sm capitalize">{unit}</div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;