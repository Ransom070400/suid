import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, FileText, Zap } from 'lucide-react';

const Curriculum = () => {
  const [expandedWeek, setExpandedWeek] = useState<number | null>(null);

  const curriculum = [
    {
      week: 1,
      title: 'Introduction to Sui',
      topic: 'Sui Blockchain Overview',
      assignment: 'Set up your Sui wallet and explore Sui basics',
      skills: ['Sui fundamentals', 'Wallet setup', 'Consensus overview'],
      description: 'Kickstart your journey with an overview of the Sui blockchain, its architecture, consensus, and the basics of interacting with Sui.'
    },
    {
      week: 2,
      title: 'Introduction to Move',
      topic: 'Move Language Fundamentals',
      assignment: 'Write your first Move module and scripts',
      skills: ['Move syntax', 'Resource model', 'Basic programming patterns'],
      description: 'Learn the basics of the Move programming language, focusing on syntax, resource-oriented programming, and core concepts powering Sui smart contracts.'
    },
    {
      week: 3,
      title: 'Writing Your First Smart Contract',
      topic: 'Move Smart Contracts on Sui',
      assignment: 'Develop and deploy a simple Move smart contract',
      skills: ['Move modules', 'Testing & deployment', 'Contract structure'],
      description: 'Apply your Move knowledge to write, test, and deploy your first smart contract on the Sui blockchain.'
    },
    {
      week: 4,
      title: 'Building a dApp on Sui',
      topic: 'Frontend & Blockchain Integration',
      assignment: 'Create a simple dApp interacting with your contract',
      skills: ['Frontend integration', 'Sui SDK', 'Wallet connection'],
      description: 'Learn to connect your smart contract to a frontend application and enable real user interactions with Sui using web technologies.'
    },
    {
      week: 5,
      title: 'Advanced Features',
      topic: 'zkLogin, Object Model, and More',
      assignment: 'Implement advanced features like zkLogin or dynamic fields',
      skills: ['zkLogin', 'Advanced Sui features', 'Object-centric programming'],
      description: 'Explore advanced Sui features such as zkLogin, object-centric programming, and dynamic fields to build more robust applications.'
    },
    {
      week: 6,
      title: 'Capstone Project',
      topic: 'Project Development & Presentation',
      assignment: 'Build and present your capstone Sui dApp',
      skills: ['Project management', 'Presentation', 'Portfolio building'],
      description: 'Consolidate your learning by building and showcasing a comprehensive Sui dApp project to demonstrate your skills.'
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
            <span className="bg-[#4DA2FF] bg-clip-text text-transparent">
              Curriculum
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            A focused 6-week journey from Sui basics to advanced dApp development
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
                    <div className="w-12 h-12 bg-[#4DA2FF] rounded-full flex items-center justify-center">
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
                              <FileText className="w-5 h-5 text-[#4DA2FF]" />
                              <h4 className="font-semibold text-white">Assignment</h4>
                            </div>
                            <p className="text-gray-400">{item.assignment}</p>
                          </div>

                          <div className="bg-gray-800/50 rounded-xl p-4">
                            <div className="flex items-center space-x-2 mb-3">
                              <Zap className="w-5 h-5 text-[#4DA2FF]" />
                              <h4 className="font-semibold text-white">Skills Learned</h4>
                            </div>
                            <div className="flex flex-wrap gap-2">
                              {item.skills.map((skill, skillIndex) => (
                                <span
                                  key={skillIndex}
                                  className="bg-[#4DA2FF] bg-opacity-20 text-[#4DA2FF] px-3 py-1 rounded-full text-sm border border-[#4DA2FF]/30"
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
      </div>
    </section>
  );
};

export default Curriculum;