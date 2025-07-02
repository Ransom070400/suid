import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Github, Linkedin, Twitter } from 'lucide-react';

const Mentors = () => {
  const [currentMentor, setCurrentMentor] = useState(0);

  const mentors = [
    {
      name: 'Dr. Amina Hassan',
      role: 'Senior Blockchain Architect',
      company: 'Sui Foundation',
      bio: 'Former Google engineer with 8+ years in blockchain development. Led the development of multiple DeFi protocols on Sui with over $50M TVL.',
      expertise: ['Move Programming', 'DeFi Protocols', 'Smart Contract Security'],
      image: 'https://images.pexels.com/photos/3184295/pexels-photo-3184295.jpeg?auto=compress&cs=tinysrgb&w=400',
      socials: {
        twitter: '#',
        github: '#',
        linkedin: '#'
      }
    },
    {
      name: 'Kofi Asante',
      role: 'Web3 Product Manager',
      company: 'Mysten Labs',
      bio: 'Product lead for several successful Web3 startups. Expert in tokenomics design and community building with 5+ years in African blockchain ecosystem.',
      expertise: ['Product Strategy', 'Tokenomics', 'Community Building'],
      image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400',
      socials: {
        twitter: '#',
        github: '#',
        linkedin: '#'
      }
    },
    {
      name: 'Sarah Okafor',
      role: 'Full-Stack Developer',
      company: 'Independent Consultant',
      bio: 'Full-stack developer specializing in dApp development. Built and deployed 20+ applications on various blockchains with focus on user experience.',
      expertise: ['Frontend Development', 'dApp Architecture', 'UI/UX Design'],
      image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=400',
      socials: {
        twitter: '#',
        github: '#',
        linkedin: '#'
      }
    },
    {
      name: 'Marcus Chen',
      role: 'DevRel Engineer',
      company: 'Sui Ecosystem',
      bio: 'Developer Relations expert with deep knowledge of Sui ecosystem. Regular speaker at blockchain conferences and author of popular Sui tutorials.',
      expertise: ['Developer Experience', 'Technical Writing', 'Community Education'],
      image: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=400',
      socials: {
        twitter: '#',
        github: '#',
        linkedin: '#'
      }
    }
  ];

  const nextMentor = () => {
    setCurrentMentor((prev) => (prev + 1) % mentors.length);
  };

  const prevMentor = () => {
    setCurrentMentor((prev) => (prev - 1 + mentors.length) % mentors.length);
  };

  const goToMentor = (index: number) => {
    setCurrentMentor(index);
  };

  return (
    <section id="mentors" className="py-20 bg-gray-900 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-40 left-10 w-20 h-20 border-2 border-cyan-400 rotate-45 animate-pulse"></div>
        <div className="absolute bottom-40 right-20 w-16 h-16 border-2 border-blue-500 rotate-12 animate-pulse delay-1000"></div>
        <div className="absolute top-60 right-40 w-24 h-24 border-2 border-purple-500 rotate-45 animate-pulse delay-2000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              Meet Your
            </span>
            <br />
            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Mentors
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Learn from industry experts who have built successful careers in blockchain development
          </p>
        </motion.div>

        {/* Mentor Carousel */}
        <div className="max-w-5xl mx-auto">
          <div className="relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentMentor}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5 }}
                className="bg-gradient-to-br from-gray-800/60 to-gray-900/60 backdrop-blur-xl border border-gray-700 rounded-3xl p-8 md:p-12"
              >
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  {/* Mentor Image */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="text-center md:text-right"
                  >
                    <div className="relative inline-block">
                      <div className="w-64 h-64 rounded-3xl overflow-hidden border-4 border-gradient-to-r from-blue-500 to-cyan-400 p-1 bg-gradient-to-r from-blue-500 to-cyan-400">
                        <img
                          src={mentors[currentMentor].image}
                          alt={mentors[currentMentor].name}
                          className="w-full h-full object-cover rounded-2xl"
                        />
                      </div>
                      {/* Floating Social Icons */}
                      <div className="absolute -bottom-4 -right-4 flex space-x-2">
                        {Object.entries(mentors[currentMentor].socials).map(([platform, url]) => {
                          const IconComponent = platform === 'twitter' ? Twitter : platform === 'github' ? Github : Linkedin;
                          return (
                            <motion.a
                              key={platform}
                              href={url}
                              whileHover={{ scale: 1.1 }}
                              whileTap={{ scale: 0.9 }}
                              className="w-10 h-10 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full flex items-center justify-center hover:shadow-lg transition-shadow duration-200"
                            >
                              <IconComponent className="w-5 h-5 text-white" />
                            </motion.a>
                          );
                        })}
                      </div>
                    </div>
                  </motion.div>

                  {/* Mentor Info */}
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                  >
                    <div className="mb-2">
                      <span className="text-sm font-medium text-cyan-400">{mentors[currentMentor].company}</span>
                    </div>
                    <h3 className="text-3xl md:text-4xl font-bold text-white mb-2">
                      {mentors[currentMentor].name}
                    </h3>
                    <p className="text-xl text-gray-300 mb-6">{mentors[currentMentor].role}</p>
                    
                    <p className="text-gray-400 leading-relaxed mb-6">
                      {mentors[currentMentor].bio}
                    </p>

                    <div>
                      <h4 className="text-lg font-semibold text-white mb-3">Expertise</h4>
                      <div className="flex flex-wrap gap-2">
                        {mentors[currentMentor].expertise.map((skill, index) => (
                          <span
                            key={index}
                            className="bg-gradient-to-r from-blue-500/20 to-cyan-400/20 text-cyan-400 px-4 py-2 rounded-full text-sm border border-cyan-400/30"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Navigation Arrows */}
            <button
              onClick={prevMentor}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-gray-800/80 backdrop-blur-sm border border-gray-600 rounded-full flex items-center justify-center text-white hover:bg-gray-700/80 transition-colors duration-200"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={nextMentor}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-gray-800/80 backdrop-blur-sm border border-gray-600 rounded-full flex items-center justify-center text-white hover:bg-gray-700/80 transition-colors duration-200"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>

          {/* Dot Indicators */}
          <div className="flex justify-center space-x-3 mt-8">
            {mentors.map((_, index) => (
              <button
                key={index}
                onClick={() => goToMentor(index)}
                className={`w-3 h-3 rounded-full transition-all duration-200 ${
                  index === currentMentor
                    ? 'bg-gradient-to-r from-blue-500 to-cyan-400 w-8'
                    : 'bg-gray-600 hover:bg-gray-500'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Mentors;