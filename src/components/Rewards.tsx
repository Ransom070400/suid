import React from 'react';
import { motion } from 'framer-motion';
import { Trophy, Star, Award, Zap } from 'lucide-react';

const Rewards = () => {
  const rewards = [
    {
      title: 'Weekly Champions',
      description: 'Top 3 performers get featured on our community spotlight',
      icon: Trophy,
      color: 'bg-[#4DA2FF]',
      prize: 'Community Recognition + Sui Tokens'
    },
    {
      title: 'Assignment Excellence',
      description: 'Outstanding weekly submissions earn special recognition',
      icon: Star,
      color: 'bg-[#4DA2FF]',
      prize: 'Bonus Points + Mentor Feedback'
    },
    {
      title: 'Final Demo Awards',
      description: 'Best capstone projects win prestigious recognition',
      icon: Award,
      color: 'bg-[#4DA2FF]',
      prize: 'Industry Connections + Portfolio Boost'
    },
    {
      title: 'Participation Streaks',
      description: 'Consistent engagement earns streak multipliers',
      icon: Zap,
      color: 'bg-[#4DA2FF]',
      prize: 'Streak Badges + Bonus Rewards'
    }
  ];

  const leaderboardData = [
    { rank: 1, name: 'Kwame A.', points: 2850, country: '🇬🇭', streak: 8 },
    { rank: 2, name: 'Aisha N.', points: 2720, country: '🇳🇬', streak: 7 },
    { rank: 3, name: 'Thabo M.', points: 2650, country: '🇿🇦', streak: 6 },
    { rank: 4, name: 'Fatima K.', points: 2480, country: '🇰🇪', streak: 5 },
    { rank: 5, name: 'Aman T.', points: 2350, country: '🇪🇹', streak: 4 }
  ];

  return (
    <section id="rewards" className="py-20 bg-gradient-to-br from-gray-800 to-gray-900 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-40 h-40 bg-[#4DA2FF] rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-32 h-32 bg-[#4DA2FF] rounded-full blur-2xl"></div>
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
              Gamified Learning &
            </span>
            <br />
            <span className="bg-[#4DA2FF] bg-clip-text text-transparent">
              Rewards
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Compete, learn, and earn recognition while building your blockchain development skills
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Rewards Grid */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-3xl font-bold text-white mb-8">Earn Recognition</h3>
            <div className="grid gap-6">
              {rewards.map((reward, index) => {
                const IconComponent = reward.icon;
                return (
                  <motion.div
                    key={reward.title}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.02 }}
                    className="bg-gradient-to-br from-gray-800/60 to-gray-900/60 backdrop-blur-xl border border-gray-700 rounded-2xl p-6 hover:border-gray-600 transition-all duration-300"
                  >
                    <div className="flex items-start space-x-4">
                      <div className={`w-12 h-12 ${reward.color} rounded-xl flex items-center justify-center flex-shrink-0`}>
                        <IconComponent className="w-6 h-6 text-white" />
                      </div>
                      <div className="flex-1">
                        <h4 className="text-xl font-bold text-white mb-2">{reward.title}</h4>
                        <p className="text-gray-400 mb-3">{reward.description}</p>
                        <div className="text-sm font-medium text-[#4DA2FF]">{reward.prize}</div>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          {/* Leaderboard */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-3xl font-bold text-white mb-8">Live Leaderboard</h3>
            <div className="bg-gradient-to-br from-gray-800/60 to-gray-900/60 backdrop-blur-xl border border-gray-700 rounded-2xl p-6">
              <div className="flex items-center justify-between mb-6">
                <h4 className="text-xl font-bold text-white">Current Cohort</h4>
                <div className="text-sm text-gray-400">Week 8 Rankings</div>
              </div>
              
              <div className="space-y-4">
                {leaderboardData.map((student, index) => (
                  <motion.div
                    key={student.rank}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className={`flex items-center justify-between p-4 rounded-xl ${
                      student.rank <= 3 
                        ? 'bg-[#4DA2FF] bg-opacity-20 border border-[#4DA2FF]/30' 
                        : 'bg-gray-800/50'
                    }`}
                  >
                    <div className="flex items-center space-x-4">
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold ${
                        'bg-[#4DA2FF] text-white'
                      }`}>
                        {student.rank}
                      </div>
                      <div>
                        <div className="flex items-center space-x-2">
                          <span className="text-white font-semibold">{student.name}</span>
                          <span className="text-lg">{student.country}</span>
                        </div>
                        <div className="text-sm text-gray-400">
                          {student.streak} week streak
                        </div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-lg font-bold text-[#4DA2FF]">{student.points}</div>
                      <div className="text-sm text-gray-400">points</div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Rewards;