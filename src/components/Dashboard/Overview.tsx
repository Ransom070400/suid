import React from 'react';
import { motion } from 'framer-motion';
import { 
  BookOpen, 
  Video, 
  Trophy, 
  Clock, 
  Target, 
  TrendingUp,
  Calendar,
  Award,
  Users,
  CheckCircle
} from 'lucide-react';
import { useAuth } from '../../contexts/AuthContext';

const Overview = () => {
  const { user } = useAuth();

  const stats = [
    {
      title: 'Lessons Completed',
      value: `${user?.progress.completedLessons}/${user?.progress.totalLessons}`,
      percentage: Math.round((user?.progress.completedLessons || 0) / (user?.progress.totalLessons || 1) * 100),
      icon: Video,
      color: 'from-blue-500 to-cyan-400'
    },
    {
      title: 'Assignments Done',
      value: `${user?.progress.completedAssignments}/${user?.progress.totalAssignments}`,
      percentage: Math.round((user?.progress.completedAssignments || 0) / (user?.progress.totalAssignments || 1) * 100),
      icon: BookOpen,
      color: 'from-green-500 to-emerald-400'
    },
    {
      title: 'Current Rank',
      value: `#${user?.progress.rank}`,
      percentage: 85,
      icon: Trophy,
      color: 'from-yellow-500 to-orange-400'
    },
    {
      title: 'Total Points',
      value: user?.progress.points?.toLocaleString() || '0',
      percentage: 75,
      icon: Target,
      color: 'from-purple-500 to-pink-400'
    }
  ];

  const recentActivities = [
    {
      type: 'lesson',
      title: 'Completed: Advanced Move Patterns',
      time: '2 hours ago',
      icon: Video,
      color: 'text-blue-400'
    },
    {
      type: 'assignment',
      title: 'Submitted: DeFi Protocol Assignment',
      time: '1 day ago',
      icon: BookOpen,
      color: 'text-green-400'
    },
    {
      type: 'achievement',
      title: 'Earned: Quick Learner Badge',
      time: '2 days ago',
      icon: Award,
      color: 'text-yellow-400'
    },
    {
      type: 'community',
      title: 'Joined: Weekly Study Group',
      time: '3 days ago',
      icon: Users,
      color: 'text-purple-400'
    }
  ];

  const upcomingEvents = [
    {
      title: 'Live Mentor Session: Security Best Practices',
      date: 'Today, 7:00 PM WAT',
      type: 'live-session'
    },
    {
      title: 'Assignment Due: NFT Marketplace',
      date: 'Sunday, 11:59 PM WAT',
      type: 'deadline'
    },
    {
      title: 'Community Townhall',
      date: 'Monday, 6:00 PM WAT',
      type: 'community'
    }
  ];

  return (
    <div className="space-y-8">
      {/* Welcome Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-3xl font-bold text-white mb-2">
          Welcome back, {user?.name}! 👋
        </h1>
        <p className="text-gray-400">
          You're currently in Week {user?.progress.currentWeek} of the bootcamp. Keep up the great work!
        </p>
      </motion.div>

      {/* Stats Grid */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
      >
        {stats.map((stat, index) => {
          const IconComponent = stat.icon;
          return (
            <motion.div
              key={stat.title}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.02 }}
              className="bg-gradient-to-br from-gray-800/60 to-gray-900/60 backdrop-blur-xl border border-gray-700 rounded-2xl p-6 hover:border-gray-600 transition-all duration-300"
            >
              <div className="flex items-center justify-between mb-4">
                <div className={`w-12 h-12 bg-gradient-to-r ${stat.color} rounded-xl flex items-center justify-center`}>
                  <IconComponent className="w-6 h-6 text-white" />
                </div>
                <div className="text-right">
                  <div className="text-2xl font-bold text-white">{stat.value}</div>
                  <div className="text-sm text-gray-400">{stat.percentage}%</div>
                </div>
              </div>
              <h3 className="text-gray-300 font-medium">{stat.title}</h3>
              <div className="mt-3 bg-gray-700 rounded-full h-2">
                <div 
                  className={`h-2 bg-gradient-to-r ${stat.color} rounded-full transition-all duration-500`}
                  style={{ width: `${stat.percentage}%` }}
                />
              </div>
            </motion.div>
          );
        })}
      </motion.div>

      <div className="grid lg:grid-cols-2 gap-8">
        {/* Recent Activity */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-gradient-to-br from-gray-800/60 to-gray-900/60 backdrop-blur-xl border border-gray-700 rounded-2xl p-6"
        >
          <div className="flex items-center space-x-3 mb-6">
            <TrendingUp className="w-6 h-6 text-cyan-400" />
            <h2 className="text-xl font-bold text-white">Recent Activity</h2>
          </div>
          
          <div className="space-y-4">
            {recentActivities.map((activity, index) => {
              const IconComponent = activity.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="flex items-center space-x-4 p-3 bg-gray-800/30 rounded-xl hover:bg-gray-800/50 transition-colors duration-200"
                >
                  <div className={`w-10 h-10 bg-gray-700 rounded-lg flex items-center justify-center ${activity.color}`}>
                    <IconComponent className="w-5 h-5" />
                  </div>
                  <div className="flex-1">
                    <p className="text-white font-medium">{activity.title}</p>
                    <p className="text-gray-400 text-sm">{activity.time}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Upcoming Events */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="bg-gradient-to-br from-gray-800/60 to-gray-900/60 backdrop-blur-xl border border-gray-700 rounded-2xl p-6"
        >
          <div className="flex items-center space-x-3 mb-6">
            <Calendar className="w-6 h-6 text-cyan-400" />
            <h2 className="text-xl font-bold text-white">Upcoming Events</h2>
          </div>
          
          <div className="space-y-4">
            {upcomingEvents.map((event, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="p-4 bg-gray-800/30 rounded-xl border-l-4 border-cyan-400 hover:bg-gray-800/50 transition-colors duration-200"
              >
                <h3 className="text-white font-medium mb-1">{event.title}</h3>
                <div className="flex items-center space-x-2">
                  <Clock className="w-4 h-4 text-gray-400" />
                  <p className="text-gray-400 text-sm">{event.date}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Quick Actions */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="bg-gradient-to-br from-gray-800/60 to-gray-900/60 backdrop-blur-xl border border-gray-700 rounded-2xl p-6"
      >
        <h2 className="text-xl font-bold text-white mb-6">Quick Actions</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="flex items-center space-x-3 p-4 bg-gradient-to-r from-blue-500/20 to-cyan-400/20 border border-blue-500/30 rounded-xl hover:from-blue-500/30 hover:to-cyan-400/30 transition-all duration-200"
          >
            <Video className="w-6 h-6 text-blue-400" />
            <span className="text-white font-medium">Continue Learning</span>
          </motion.button>
          
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="flex items-center space-x-3 p-4 bg-gradient-to-r from-green-500/20 to-emerald-400/20 border border-green-500/30 rounded-xl hover:from-green-500/30 hover:to-emerald-400/30 transition-all duration-200"
          >
            <BookOpen className="w-6 h-6 text-green-400" />
            <span className="text-white font-medium">View Assignments</span>
          </motion.button>
          
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="flex items-center space-x-3 p-4 bg-gradient-to-r from-purple-500/20 to-pink-400/20 border border-purple-500/30 rounded-xl hover:from-purple-500/30 hover:to-pink-400/30 transition-all duration-200"
          >
            <Users className="w-6 h-6 text-purple-400" />
            <span className="text-white font-medium">Join Community</span>
          </motion.button>
        </div>
      </motion.div>
    </div>
  );
};

export default Overview;