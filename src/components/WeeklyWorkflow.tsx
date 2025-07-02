import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Users, Clock, Trophy } from 'lucide-react';

const WeeklyWorkflow = () => {
  const workflow = [
    {
      day: 'Monday',
      title: 'New Lessons Drop',
      description: 'Fresh content releases + Community Townhall',
      icon: Calendar,
      color: 'from-blue-500 to-cyan-400',
      time: '6:00 PM WAT'
    },
    {
      day: 'Thursday',
      title: 'Live Mentor Session',
      description: 'Q&A, code reviews, and personalized guidance',
      icon: Users,
      color: 'from-purple-500 to-pink-400',
      time: '7:00 PM WAT'
    },
    {
      day: 'Sunday',
      title: 'Assignment Deadline',
      description: 'Submit your weekly project and get feedback',
      icon: Clock,
      color: 'from-orange-500 to-red-400',
      time: '11:59 PM WAT'
    },
    {
      day: 'Monday',
      title: 'Leaderboard Update',
      description: 'See rankings and celebrate top performers',
      icon: Trophy,
      color: 'from-green-500 to-emerald-400',
      time: 'After Townhall'
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
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <section id="workflow" className="py-20 bg-gray-900 relative overflow-hidden">
      {/* Background Grid */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(rgba(59, 130, 246, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(59, 130, 246, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px'
        }}></div>
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
              Weekly
            </span>
            <br />
            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Workflow
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            A structured rhythm that keeps you engaged, learning, and progressing every week
          </p>
        </motion.div>

        {/* Calendar Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
        >
          {workflow.map((item, index) => {
            const IconComponent = item.icon;
            return (
              <motion.div
                key={index}
                variants={cardVariants}
                whileHover={{ 
                  scale: 1.05,
                  transition: { duration: 0.2 }
                }}
                className="group"
              >
                <div className="bg-gradient-to-br from-gray-800/60 to-gray-900/60 backdrop-blur-xl border border-gray-700 rounded-2xl p-6 h-full hover:border-gray-600 transition-all duration-300">
                  <div className={`w-14 h-14 bg-gradient-to-r ${item.color} rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <IconComponent className="w-7 h-7 text-white" />
                  </div>
                  
                  <div className="mb-3">
                    <div className="text-sm font-medium text-gray-400 mb-1">{item.day}</div>
                    <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                    <p className="text-gray-400 text-sm leading-relaxed mb-3">{item.description}</p>
                    <div className="text-xs text-cyan-400 font-medium">{item.time}</div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Weekly Timeline Visualization */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-xl border border-gray-700 rounded-3xl p-8"
        >
          <h3 className="text-2xl font-bold text-white text-center mb-8">Sample Week Timeline</h3>
          
          <div className="grid grid-cols-7 gap-2 text-center">
            {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map((day, index) => (
              <div key={day} className="py-2">
                <div className="text-sm font-medium text-gray-400 mb-2">{day}</div>
                <div className="space-y-1">
                  {index === 0 && (
                    <>
                      <div className="bg-gradient-to-r from-blue-500 to-cyan-400 rounded-lg p-2 text-xs text-white">
                        Lessons Drop
                      </div>
                      <div className="bg-gradient-to-r from-green-500 to-emerald-400 rounded-lg p-2 text-xs text-white">
                        Leaderboard
                      </div>
                    </>
                  )}
                  {index === 3 && (
                    <div className="bg-gradient-to-r from-purple-500 to-pink-400 rounded-lg p-2 text-xs text-white">
                      Live Session
                    </div>
                  )}
                  {index === 6 && (
                    <div className="bg-gradient-to-r from-orange-500 to-red-400 rounded-lg p-2 text-xs text-white">
                      Deadline
                    </div>
                  )}
                  {index !== 0 && index !== 3 && index !== 6 && (
                    <div className="bg-gray-700/50 rounded-lg p-2 text-xs text-gray-500">
                      Study Time
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default WeeklyWorkflow;