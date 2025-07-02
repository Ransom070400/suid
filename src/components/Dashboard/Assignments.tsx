import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  BookOpen, 
  CheckCircle, 
  Clock, 
  AlertCircle, 
  Upload,
  Download,
  Calendar,
  Star,
  Code,
  FileText
} from 'lucide-react';

const Assignments = () => {
  const [selectedTab, setSelectedTab] = useState('current');

  const assignments = [
    {
      id: 1,
      title: 'NFT Marketplace Smart Contract',
      week: 7,
      dueDate: '2025-01-26',
      status: 'pending',
      difficulty: 'Advanced',
      points: 100,
      description: 'Build a complete NFT marketplace with minting, buying, and selling functionality using Move on Sui.',
      requirements: [
        'Implement NFT minting with metadata',
        'Create marketplace listing functionality',
        'Add buying and selling mechanisms',
        'Include royalty distribution',
        'Write comprehensive tests'
      ],
      resources: [
        { name: 'NFT Standard Documentation', type: 'pdf' },
        { name: 'Marketplace Template', type: 'code' },
        { name: 'Testing Guide', type: 'video' }
      ],
      submission: null
    },
    {
      id: 2,
      title: 'DeFi Liquidity Pool',
      week: 6,
      dueDate: '2025-01-19',
      status: 'submitted',
      difficulty: 'Advanced',
      points: 100,
      grade: 95,
      description: 'Create a liquidity pool contract with automated market maker functionality.',
      requirements: [
        'Implement AMM algorithm',
        'Add liquidity provision',
        'Create swap functionality',
        'Include fee distribution',
        'Add slippage protection'
      ],
      submission: {
        submittedAt: '2025-01-18',
        feedback: 'Excellent implementation! Great attention to security details.',
        grade: 95
      }
    },
    {
      id: 3,
      title: 'Token Staking Contract',
      week: 5,
      dueDate: '2025-01-12',
      status: 'graded',
      difficulty: 'Intermediate',
      points: 75,
      grade: 88,
      description: 'Build a token staking contract with rewards distribution.',
      submission: {
        submittedAt: '2025-01-11',
        feedback: 'Good work! Consider optimizing gas usage in the reward calculation.',
        grade: 88
      }
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'pending': return 'text-yellow-400 bg-yellow-400/20 border-yellow-400/30';
      case 'submitted': return 'text-blue-400 bg-blue-400/20 border-blue-400/30';
      case 'graded': return 'text-green-400 bg-green-400/20 border-green-400/30';
      case 'overdue': return 'text-red-400 bg-red-400/20 border-red-400/30';
      default: return 'text-gray-400 bg-gray-400/20 border-gray-400/30';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'pending': return Clock;
      case 'submitted': return Upload;
      case 'graded': return CheckCircle;
      case 'overdue': return AlertCircle;
      default: return Clock;
    }
  };

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Beginner': return 'text-green-400 bg-green-400/20';
      case 'Intermediate': return 'text-yellow-400 bg-yellow-400/20';
      case 'Advanced': return 'text-red-400 bg-red-400/20';
      default: return 'text-gray-400 bg-gray-400/20';
    }
  };

  const filteredAssignments = assignments.filter(assignment => {
    if (selectedTab === 'current') return assignment.status === 'pending';
    if (selectedTab === 'submitted') return assignment.status === 'submitted';
    if (selectedTab === 'graded') return assignment.status === 'graded';
    return true;
  });

  const AssignmentCard = ({ assignment }: { assignment: any }) => {
    const StatusIcon = getStatusIcon(assignment.status);
    
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        whileHover={{ scale: 1.01 }}
        className="bg-gradient-to-br from-gray-800/60 to-gray-900/60 backdrop-blur-xl border border-gray-700 rounded-2xl p-6 hover:border-gray-600 transition-all duration-300"
      >
        {/* Header */}
        <div className="flex items-start justify-between mb-4">
          <div className="flex-1">
            <div className="flex items-center space-x-3 mb-2">
              <h3 className="text-xl font-bold text-white">{assignment.title}</h3>
              <span className={`px-2 py-1 rounded-full text-xs font-medium ${getDifficultyColor(assignment.difficulty)}`}>
                {assignment.difficulty}
              </span>
            </div>
            <p className="text-gray-400 text-sm">Week {assignment.week} • {assignment.points} points</p>
          </div>
          
          <div className={`flex items-center space-x-2 px-3 py-1 rounded-full border ${getStatusColor(assignment.status)}`}>
            <StatusIcon className="w-4 h-4" />
            <span className="text-sm font-medium capitalize">{assignment.status}</span>
          </div>
        </div>

        {/* Description */}
        <p className="text-gray-300 mb-4 leading-relaxed">{assignment.description}</p>

        {/* Due Date */}
        <div className="flex items-center space-x-2 mb-4">
          <Calendar className="w-4 h-4 text-gray-400" />
          <span className="text-gray-400 text-sm">
            Due: {new Date(assignment.dueDate).toLocaleDateString('en-US', { 
              weekday: 'long', 
              year: 'numeric', 
              month: 'long', 
              day: 'numeric' 
            })}
          </span>
        </div>

        {/* Grade Display */}
        {assignment.grade && (
          <div className="flex items-center space-x-2 mb-4">
            <Star className="w-4 h-4 text-yellow-400" />
            <span className="text-yellow-400 font-semibold">Grade: {assignment.grade}/100</span>
          </div>
        )}

        {/* Requirements */}
        <div className="mb-4">
          <h4 className="text-white font-semibold mb-2">Requirements:</h4>
          <ul className="space-y-1">
            {assignment.requirements.slice(0, 3).map((req: string, index: number) => (
              <li key={index} className="text-gray-400 text-sm flex items-start space-x-2">
                <span className="text-cyan-400 mt-1">•</span>
                <span>{req}</span>
              </li>
            ))}
            {assignment.requirements.length > 3 && (
              <li className="text-gray-500 text-sm">
                +{assignment.requirements.length - 3} more requirements
              </li>
            )}
          </ul>
        </div>

        {/* Resources */}
        <div className="mb-6">
          <h4 className="text-white font-semibold mb-2">Resources:</h4>
          <div className="flex flex-wrap gap-2">
            {assignment.resources.map((resource: any, index: number) => (
              <motion.button
                key={index}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center space-x-2 px-3 py-1 bg-gray-700/50 rounded-lg text-sm text-gray-300 hover:bg-gray-600/50 transition-colors duration-200"
              >
                {resource.type === 'pdf' && <FileText className="w-3 h-3" />}
                {resource.type === 'code' && <Code className="w-3 h-3" />}
                {resource.type === 'video' && <BookOpen className="w-3 h-3" />}
                <span>{resource.name}</span>
                <Download className="w-3 h-3" />
              </motion.button>
            ))}
          </div>
        </div>

        {/* Feedback */}
        {assignment.submission?.feedback && (
          <div className="mb-4 p-3 bg-blue-500/10 border border-blue-500/30 rounded-xl">
            <h4 className="text-blue-400 font-semibold mb-1">Mentor Feedback:</h4>
            <p className="text-gray-300 text-sm">{assignment.submission.feedback}</p>
          </div>
        )}

        {/* Actions */}
        <div className="flex items-center justify-between">
          <div className="text-gray-400 text-sm">
            {assignment.submission?.submittedAt && (
              <span>Submitted on {new Date(assignment.submission.submittedAt).toLocaleDateString()}</span>
            )}
          </div>
          
          <div className="flex space-x-3">
            {assignment.status === 'pending' && (
              <>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-4 py-2 bg-gray-700 text-white rounded-lg hover:bg-gray-600 transition-colors duration-200"
                >
                  View Details
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-4 py-2 bg-gradient-to-r from-blue-500 to-cyan-400 text-white rounded-lg hover:shadow-lg transition-shadow duration-200"
                >
                  Start Assignment
                </motion.button>
              </>
            )}
            
            {assignment.status === 'submitted' && (
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-500 transition-colors duration-200"
              >
                View Submission
              </motion.button>
            )}
            
            {assignment.status === 'graded' && (
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-500 transition-colors duration-200"
              >
                View Results
              </motion.button>
            )}
          </div>
        </div>
      </motion.div>
    );
  };

  return (
    <div className="space-y-8">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-3xl font-bold text-white mb-2">Assignments</h1>
        <p className="text-gray-400">
          Complete hands-on coding challenges to reinforce your learning
        </p>
      </motion.div>

      {/* Stats */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="grid grid-cols-1 md:grid-cols-4 gap-6"
      >
        {[
          { label: 'Total Assignments', value: '10', icon: BookOpen, color: 'from-blue-500 to-cyan-400' },
          { label: 'Completed', value: '6', icon: CheckCircle, color: 'from-green-500 to-emerald-400' },
          { label: 'Pending', value: '1', icon: Clock, color: 'from-yellow-500 to-orange-400' },
          { label: 'Average Grade', value: '91%', icon: Star, color: 'from-purple-500 to-pink-400' }
        ].map((stat, index) => {
          const IconComponent = stat.icon;
          return (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gradient-to-br from-gray-800/60 to-gray-900/60 backdrop-blur-xl border border-gray-700 rounded-2xl p-6"
            >
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-400 text-sm">{stat.label}</p>
                  <p className="text-2xl font-bold text-white">{stat.value}</p>
                </div>
                <div className={`w-12 h-12 bg-gradient-to-r ${stat.color} rounded-xl flex items-center justify-center`}>
                  <IconComponent className="w-6 h-6 text-white" />
                </div>
              </div>
            </motion.div>
          );
        })}
      </motion.div>

      {/* Tabs */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="bg-gradient-to-br from-gray-800/60 to-gray-900/60 backdrop-blur-xl border border-gray-700 rounded-2xl p-6"
      >
        <div className="flex space-x-4">
          {[
            { id: 'current', label: 'Current', count: 1 },
            { id: 'submitted', label: 'Submitted', count: 1 },
            { id: 'graded', label: 'Graded', count: 1 },
            { id: 'all', label: 'All', count: 3 }
          ].map((tab) => (
            <motion.button
              key={tab.id}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setSelectedTab(tab.id)}
              className={`px-4 py-2 rounded-xl font-medium transition-all duration-200 ${
                selectedTab === tab.id
                  ? 'bg-gradient-to-r from-blue-500 to-cyan-400 text-white'
                  : 'bg-gray-800/50 text-gray-400 hover:text-white hover:bg-gray-700/50'
              }`}
            >
              {tab.label} ({tab.count})
            </motion.button>
          ))}
        </div>
      </motion.div>

      {/* Assignments List */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="space-y-6"
      >
        {filteredAssignments.map((assignment) => (
          <AssignmentCard key={assignment.id} assignment={assignment} />
        ))}
      </motion.div>
    </div>
  );
};

export default Assignments;