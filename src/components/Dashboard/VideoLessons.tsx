import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Play, 
  CheckCircle, 
  Clock, 
  BookOpen, 
  Download,
  Search,
  Filter,
  Star
} from 'lucide-react';

const VideoLessons = () => {
  const [selectedWeek, setSelectedWeek] = useState(7);
  const [searchTerm, setSearchTerm] = useState('');

  const weeks = [
    {
      week: 1,
      title: 'Introduction to Blockchain & Sui',
      lessons: [
        {
          id: 1,
          title: 'What is Blockchain?',
          duration: '15:30',
          completed: true,
          thumbnail: 'https://images.pexels.com/photos/5380664/pexels-photo-5380664.jpeg?auto=compress&cs=tinysrgb&w=400',
          description: 'Learn the fundamentals of blockchain technology and how it works.'
        },
        {
          id: 2,
          title: 'Introduction to Sui Blockchain',
          duration: '22:45',
          completed: true,
          thumbnail: 'https://images.pexels.com/photos/5380642/pexels-photo-5380642.jpeg?auto=compress&cs=tinysrgb&w=400',
          description: 'Discover what makes Sui unique in the blockchain ecosystem.'
        },
        {
          id: 3,
          title: 'Setting Up Your Development Environment',
          duration: '18:20',
          completed: true,
          thumbnail: 'https://images.pexels.com/photos/4164418/pexels-photo-4164418.jpeg?auto=compress&cs=tinysrgb&w=400',
          description: 'Install and configure all necessary tools for Sui development.'
        }
      ]
    },
    {
      week: 7,
      title: 'Frontend Integration',
      lessons: [
        {
          id: 19,
          title: 'Sui TypeScript SDK Overview',
          duration: '25:15',
          completed: true,
          thumbnail: 'https://images.pexels.com/photos/4348404/pexels-photo-4348404.jpeg?auto=compress&cs=tinysrgb&w=400',
          description: 'Learn how to use the Sui TypeScript SDK for frontend development.'
        },
        {
          id: 20,
          title: 'Wallet Integration with Sui Wallet',
          duration: '32:40',
          completed: true,
          thumbnail: 'https://images.pexels.com/photos/5380664/pexels-photo-5380664.jpeg?auto=compress&cs=tinysrgb&w=400',
          description: 'Integrate wallet functionality into your dApp.'
        },
        {
          id: 21,
          title: 'Building a React dApp Interface',
          duration: '45:30',
          completed: false,
          thumbnail: 'https://images.pexels.com/photos/4164418/pexels-photo-4164418.jpeg?auto=compress&cs=tinysrgb&w=400',
          description: 'Create a complete frontend interface for your smart contracts.',
          current: true
        },
        {
          id: 22,
          title: 'Transaction Handling and Error Management',
          duration: '28:15',
          completed: false,
          thumbnail: 'https://images.pexels.com/photos/5380642/pexels-photo-5380642.jpeg?auto=compress&cs=tinysrgb&w=400',
          description: 'Handle transactions and manage errors gracefully in your dApp.'
        }
      ]
    }
  ];

  const currentWeekData = weeks.find(w => w.week === selectedWeek);

  const VideoCard = ({ lesson, weekNumber }: { lesson: any; weekNumber: number }) => (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      whileHover={{ scale: 1.02 }}
      className={`bg-gradient-to-br from-gray-800/60 to-gray-900/60 backdrop-blur-xl border rounded-2xl overflow-hidden hover:border-gray-600 transition-all duration-300 ${
        lesson.current ? 'border-cyan-400 ring-2 ring-cyan-400/20' : 'border-gray-700'
      }`}
    >
      <div className="relative">
        <img
          src={lesson.thumbnail}
          alt={lesson.title}
          className="w-full h-48 object-cover"
        />
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full flex items-center justify-center"
          >
            <Play className="w-8 h-8 text-white ml-1" />
          </motion.button>
        </div>
        
        {/* Status Badge */}
        <div className="absolute top-4 right-4">
          {lesson.completed ? (
            <div className="bg-green-500 rounded-full p-2">
              <CheckCircle className="w-4 h-4 text-white" />
            </div>
          ) : lesson.current ? (
            <div className="bg-cyan-400 rounded-full p-2">
              <Play className="w-4 h-4 text-white" />
            </div>
          ) : (
            <div className="bg-gray-600 rounded-full p-2">
              <Clock className="w-4 h-4 text-white" />
            </div>
          )}
        </div>

        {/* Duration */}
        <div className="absolute bottom-4 right-4 bg-black/70 backdrop-blur-sm rounded-lg px-2 py-1">
          <span className="text-white text-sm">{lesson.duration}</span>
        </div>
      </div>

      <div className="p-6">
        <div className="flex items-start justify-between mb-3">
          <h3 className="text-lg font-bold text-white leading-tight">{lesson.title}</h3>
          {lesson.current && (
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 text-white text-xs px-2 py-1 rounded-full">
              Current
            </span>
          )}
        </div>
        
        <p className="text-gray-400 text-sm mb-4 leading-relaxed">{lesson.description}</p>
        
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2 text-sm text-gray-400">
            <BookOpen className="w-4 h-4" />
            <span>Week {weekNumber}</span>
          </div>
          
          <div className="flex items-center space-x-2">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="p-2 text-gray-400 hover:text-cyan-400 transition-colors duration-200"
            >
              <Download className="w-4 h-4" />
            </motion.button>
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
                lesson.completed
                  ? 'bg-green-500/20 text-green-400 border border-green-500/30'
                  : 'bg-gradient-to-r from-blue-500 to-cyan-400 text-white hover:shadow-lg'
              }`}
            >
              {lesson.completed ? 'Completed' : 'Watch Now'}
            </motion.button>
          </div>
        </div>
      </div>
    </motion.div>
  );

  return (
    <div className="space-y-8">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="flex flex-col md:flex-row md:items-center justify-between"
      >
        <div>
          <h1 className="text-3xl font-bold text-white mb-2">Video Lessons</h1>
          <p className="text-gray-400">
            Master Sui blockchain development through comprehensive video tutorials
          </p>
        </div>
        
        <div className="flex items-center space-x-4 mt-4 md:mt-0">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search lessons..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 pr-4 py-2 bg-gray-800/50 border border-gray-600 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 transition-all duration-200"
            />
          </div>
          
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="p-2 bg-gray-800/50 border border-gray-600 rounded-xl text-gray-400 hover:text-white hover:border-gray-500 transition-all duration-200"
          >
            <Filter className="w-5 h-5" />
          </motion.button>
        </div>
      </motion.div>

      {/* Week Selector */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="bg-gradient-to-br from-gray-800/60 to-gray-900/60 backdrop-blur-xl border border-gray-700 rounded-2xl p-6"
      >
        <h2 className="text-xl font-bold text-white mb-4">Select Week</h2>
        <div className="flex flex-wrap gap-3">
          {weeks.map((week) => (
            <motion.button
              key={week.week}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setSelectedWeek(week.week)}
              className={`px-4 py-2 rounded-xl font-medium transition-all duration-200 ${
                selectedWeek === week.week
                  ? 'bg-gradient-to-r from-blue-500 to-cyan-400 text-white'
                  : 'bg-gray-800/50 text-gray-400 hover:text-white hover:bg-gray-700/50'
              }`}
            >
              Week {week.week}
            </motion.button>
          ))}
        </div>
      </motion.div>

      {/* Current Week Content */}
      {currentWeekData && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="space-y-6"
        >
          <div className="bg-gradient-to-br from-gray-800/60 to-gray-900/60 backdrop-blur-xl border border-gray-700 rounded-2xl p-6">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-xl flex items-center justify-center">
                <span className="text-white font-bold">{currentWeekData.week}</span>
              </div>
              <div>
                <h2 className="text-2xl font-bold text-white">{currentWeekData.title}</h2>
                <p className="text-gray-400">
                  {currentWeekData.lessons.filter(l => l.completed).length} of {currentWeekData.lessons.length} lessons completed
                </p>
              </div>
            </div>
            
            {/* Progress Bar */}
            <div className="bg-gray-700 rounded-full h-2 mb-4">
              <div 
                className="h-2 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full transition-all duration-500"
                style={{ 
                  width: `${(currentWeekData.lessons.filter(l => l.completed).length / currentWeekData.lessons.length) * 100}%` 
                }}
              />
            </div>
          </div>

          {/* Lessons Grid */}
          <div className="grid md:grid-cols-2 gap-6">
            {currentWeekData.lessons.map((lesson) => (
              <VideoCard key={lesson.id} lesson={lesson} weekNumber={currentWeekData.week} />
            ))}
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default VideoLessons;