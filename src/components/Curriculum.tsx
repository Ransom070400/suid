import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Play, FileText, Zap } from 'lucide-react';

const Curriculum = () => {
  const [expandedWeek, setExpandedWeek] = useState<number | null>(null);

  const curriculum = [
    {
      week: 1,
      title: 'Introduction to Blockchain & Sui',
      topic: 'Foundations of Web3 Development',
      assignment: 'Set up development environment and create first wallet',
      skills: ['Blockchain basics', 'Sui ecosystem overview', 'Development setup'],
      description: 'Start your journey into blockchain development with comprehensive introduction to Sui ecosystem, consensus mechanisms, and development tools setup.'
    },
    {
      week: 2,
      title: 'Move Programming Language',
      topic: 'Syntax and Core Concepts',
      assignment: 'Write basic Move scripts and understand resource model',
      skills: ['Move syntax', 'Resource model', 'Basic programming patterns'],
      description: 'Master the fundamentals of Move programming language, including its unique resource-oriented architecture and safety features.'
    },
    {
      week: 3,
      title: 'Smart Contract Development',
      topic: 'Building Your First Smart Contract',
      assignment: 'Create and deploy a simple token contract',
      skills: ['Contract structure', 'Testing', 'Deployment'],
      description: 'Learn to build, test, and deploy smart contracts on Sui blockchain with best practices for security and efficiency.'
    },
    {
      week: 4,
      title: 'Object-Centric Programming',
      topic: 'Sui Object Model Deep Dive',
      assignment: 'Build an object-based game or application',
      skills: ['Object ownership', 'Shared objects', 'Dynamic fields'],
      description: 'Explore Sui\'s unique object-centric model and learn how to create complex applications using object ownership patterns.'
    },
    {
      week: 5,
      title: 'DeFi Protocols on Sui',
      topic: 'Building Financial Applications',
      assignment: 'Create a DEX or lending protocol',
      skills: ['AMM mechanics', 'Liquidity pools', 'Financial math'],
      description: 'Dive into decentralized finance by building trading protocols, understanding market mechanics, and implementing financial primitives.'
    },
    {
      week: 6,
      title: 'NFTs and Digital Assets',
      topic: 'Creating and Managing Digital Assets',
      assignment: 'Launch your own NFT collection',
      skills: ['NFT standards', 'Metadata handling', 'Royalties'],
      description: 'Learn to create, manage, and trade NFTs on Sui with advanced features like dynamic NFTs and composability.'
    },
    {
      week: 7,
      title: 'Frontend Integration',
      topic: 'Building User Interfaces',
      assignment: 'Create a dApp frontend with wallet integration',
      skills: ['Sui SDK', 'Wallet integration', 'Transaction handling'],
      description: 'Connect your smart contracts to user-friendly interfaces using Sui TypeScript SDK and modern web frameworks.'
    },
    {
      week: 8,
      title: 'Advanced Patterns',
      topic: 'Complex Application Architecture',
      assignment: 'Implement a multi-contract system',
      skills: ['Design patterns', 'Inter-contract calls', 'Upgradability'],
      description: 'Master advanced development patterns for building scalable and maintainable decentralized applications.'
    },
    {
      week: 9,
      title: 'Security & Auditing',
      topic: 'Best Practices and Security',
      assignment: 'Audit and secure a vulnerable contract',
      skills: ['Security auditing', 'Common vulnerabilities', 'Best practices'],
      description: 'Learn to identify and prevent common security vulnerabilities while following industry best practices for secure development.'
    },
    {
      week: 10,
      title: 'Capstone Project',
      topic: 'Final Project Development',
      assignment: 'Build and present your capstone dApp',
      skills: ['Project management', 'Presentation', 'Portfolio building'],
      description: 'Apply everything you\'ve learned to build a comprehensive dApp that showcases your skills to potential employers or investors.'
    }
  ];

  const toggleWeek = (week: number) => {
    setExpandedWeek(expandedWeek === week ? null : week);
  };

  return (
    <section id="curriculum" className="py-20 bg-gradient-to-br from-gray-900 to-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              Program
            </span>
            <br />
            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Curriculum
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            A comprehensive 10-week journey from blockchain basics to advanced dApp development on Sui
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {curriculum.map((item, index) => (
            <motion.div
              key={item.week}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="mb-4"
            >
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-xl border border-gray-700 rounded-2xl overflow-hidden hover:border-gray-600 transition-all duration-300"
              >
                <button
                  onClick={() => toggleWeek(item.week)}
                  className="w-full p-6 text-left flex items-center justify-between"
                >
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full flex items-center justify-center">
                      <span className="text-white font-bold">{item.week}</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white">{item.title}</h3>
                      <p className="text-gray-400">{item.topic}</p>
                    </div>
                  </div>
                  <motion.div
                    animate={{ rotate: expandedWeek === item.week ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <ChevronDown className="w-6 h-6 text-gray-400" />
                  </motion.div>
                </button>

                <AnimatePresence>
                  {expandedWeek === item.week && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="border-t border-gray-700"
                    >
                      <div className="p-6">
                        <p className="text-gray-300 mb-6">{item.description}</p>
                        
                        <div className="grid md:grid-cols-2 gap-6">
                          <div className="bg-gray-800/50 rounded-xl p-4">
                            <div className="flex items-center space-x-2 mb-3">
                              <FileText className="w-5 h-5 text-blue-400" />
                              <h4 className="font-semibold text-white">Assignment</h4>
                            </div>
                            <p className="text-gray-400">{item.assignment}</p>
                          </div>

                          <div className="bg-gray-800/50 rounded-xl p-4">
                            <div className="flex items-center space-x-2 mb-3">
                              <Zap className="w-5 h-5 text-cyan-400" />
                              <h4 className="font-semibold text-white">Skills Learned</h4>
                            </div>
                            <div className="flex flex-wrap gap-2">
                              {item.skills.map((skill, skillIndex) => (
                                <span
                                  key={skillIndex}
                                  className="bg-gradient-to-r from-blue-500/20 to-cyan-400/20 text-cyan-400 px-3 py-1 rounded-full text-sm border border-cyan-400/30"
                                >
                                  {skill}
                                </span>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-gradient-to-r from-blue-500 to-cyan-400 text-white px-8 py-4 rounded-full font-semibold text-lg hover:shadow-xl transition-shadow duration-300 inline-flex items-center"
          >
            <Play className="w-5 h-5 mr-2" />
            Download Full Curriculum PDF
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Curriculum;