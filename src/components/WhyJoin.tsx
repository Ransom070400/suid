import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Users, Rocket, Trophy, Code, Star } from 'lucide-react';

const WhyJoin = () => {
  const benefits = [
    {
      icon: BookOpen,
      title: 'Beginner Friendly',
      description: 'No prior blockchain experience needed. Start from absolute zero and progress systematically.',
      color: 'bg-blue-600'
    },
    {
      icon: Users,
      title: 'Live Mentorship',
      description: 'Weekly live sessions with industry experts and personalized guidance throughout your journey.',
      color: 'bg-blue-600'
    },
    {
      icon: Rocket,
      title: 'Build Real dApps',
      description: 'Deploy actual decentralized applications on Sui blockchain with real-world use cases.',
      color: 'bg-blue-600'
    },
    {
      icon: Trophy,
      title: 'Leaderboards & Rewards',
      description: 'Compete with peers, earn recognition, and win exciting prizes for top performers.',
      color: 'bg-blue-600'
    },
    {
      icon: Code,
      title: 'Weekly Assignments',
      description: 'Hands-on coding challenges that reinforce learning and build your portfolio progressively.',
      color: 'bg-blue-600'
    },
    {
      icon: Star,
      title: 'Final Demo Day',
      description: 'Showcase your capstone project to the community and graduate as a certified Move developer.',
      color: 'bg-blue-600'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <section id="why-join" className="py-20 bg-gray-900 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-600 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-600 rounded-full blur-3xl"></div>
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
              Why Join the
            </span>
            <br />
            <span className="bg-blue-600 bg-clip-text text-transparent">
              Bootcamp?
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Transform your career with comprehensive training, expert mentorship, and hands-on experience building on the Sui blockchain.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {benefits.map((benefit, index) => {
            const IconComponent = benefit.icon;
            return (
              <motion.div
                key={benefit.title}
                variants={cardVariants}
                whileHover={{ 
                  scale: 1.05,
                  transition: { duration: 0.2 }
                }}
                className="group"
              >
                <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-xl border border-gray-700 rounded-2xl p-8 h-full hover:border-gray-600 transition-all duration-300">
                  <div className="mb-6">
                    <div className={`w-16 h-16 ${benefit.color} rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-3">{benefit.title}</h3>
                    <p className="text-gray-400 leading-relaxed">{benefit.description}</p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8"
        >
          {[
            { number: '10', label: 'Weeks of Training' },
            { number: '50+', label: 'Hours of Content' },
            { number: '20+', label: 'Live Sessions' },
            { number: '5+', label: 'Real Projects' }
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="text-4xl md:text-5xl font-bold bg-blue-600 bg-clip-text text-transparent mb-2">
                {stat.number}
              </div>
              <div className="text-gray-400">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default WhyJoin;