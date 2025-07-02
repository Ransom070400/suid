import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, ArrowRight, MessageCircle, Mail } from 'lucide-react';

const ApplicationForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    country: '',
    experience: '',
    motivation: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="apply" className="py-20 bg-gray-900 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-32 h-32 bg-blue-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-40 h-40 bg-cyan-400 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-60 h-60 bg-purple-500 rounded-full blur-3xl"></div>
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
              Ready to Start Your
            </span>
            <br />
            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Journey?
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Join the next cohort of Sui developers and transform your career in just 10 weeks
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Application Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="bg-gradient-to-br from-gray-800/60 to-gray-900/60 backdrop-blur-xl border border-gray-700 rounded-3xl p-8">
              <h3 className="text-3xl font-bold text-white mb-2">Apply Now</h3>
              <p className="text-gray-400 mb-8">Fill out the form below to secure your spot in the next cohort</p>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 transition-all duration-200"
                    placeholder="Enter your full name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 transition-all duration-200"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="country" className="block text-sm font-medium text-gray-300 mb-2">
                    Country *
                  </label>
                  <select
                    id="country"
                    name="country"
                    required
                    value={formData.country}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600 rounded-xl text-white focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 transition-all duration-200"
                  >
                    <option value="">Select your country</option>
                    <option value="Nigeria">🇳🇬 Nigeria</option>
                    <option value="Kenya">🇰🇪 Kenya</option>
                    <option value="South Africa">🇿🇦 South Africa</option>
                    <option value="Ghana">🇬🇭 Ghana</option>
                    <option value="Egypt">🇪🇬 Egypt</option>
                    <option value="Ethiopia">🇪🇹 Ethiopia</option>
                    <option value="Morocco">🇲🇦 Morocco</option>
                    <option value="Uganda">🇺🇬 Uganda</option>
                    <option value="Tanzania">🇹🇿 Tanzania</option>
                    <option value="Other">🌍 Other African Country</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="experience" className="block text-sm font-medium text-gray-300 mb-2">
                    Programming Experience *
                  </label>
                  <select
                    id="experience"
                    name="experience"
                    required
                    value={formData.experience}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600 rounded-xl text-white focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 transition-all duration-200"
                  >
                    <option value="">Select your level</option>
                    <option value="Complete Beginner">Complete Beginner (No coding experience)</option>
                    <option value="Some Experience">Some Experience (Basic programming knowledge)</option>
                    <option value="Intermediate">Intermediate (1-3 years experience)</option>
                    <option value="Advanced">Advanced (3+ years experience)</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="motivation" className="block text-sm font-medium text-gray-300 mb-2">
                    Why do you want to join? *
                  </label>
                  <textarea
                    id="motivation"
                    name="motivation"
                    required
                    rows={4}
                    value={formData.motivation}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 transition-all duration-200 resize-none"
                    placeholder="Tell us about your goals and motivation for joining the bootcamp..."
                  />
                </div>

                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full bg-gradient-to-r from-blue-500 to-cyan-400 text-white px-8 py-4 rounded-full font-semibold text-lg hover:shadow-xl transition-shadow duration-300 flex items-center justify-center"
                >
                  Submit Application
                  <Send className="ml-2 w-5 h-5" />
                </motion.button>
              </form>
            </div>
          </motion.div>

          {/* Join Community */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Community Card */}
            <div className="bg-gradient-to-br from-gray-800/60 to-gray-900/60 backdrop-blur-xl border border-gray-700 rounded-3xl p-8">
              <h3 className="text-2xl font-bold text-white mb-4">Join Our Community</h3>
              <p className="text-gray-400 mb-6">
                Connect with fellow developers, get updates, and start learning even before the bootcamp begins!
              </p>
              
              <div className="space-y-4">
                <motion.a
                  href="#"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="flex items-center space-x-4 bg-blue-600/20 border border-blue-500/30 rounded-2xl p-4 hover:bg-blue-600/30 transition-colors duration-200"
                >
                  <div className="w-12 h-12 bg-blue-500 rounded-xl flex items-center justify-center">
                    <MessageCircle className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-white font-semibold">Join Discord</h4>
                    <p className="text-gray-400 text-sm">Chat with the community</p>
                  </div>
                  <ArrowRight className="w-5 h-5 text-blue-400" />
                </motion.a>

                <motion.a
                  href="#"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="flex items-center space-x-4 bg-cyan-600/20 border border-cyan-500/30 rounded-2xl p-4 hover:bg-cyan-600/30 transition-colors duration-200"
                >
                  <div className="w-12 h-12 bg-cyan-500 rounded-xl flex items-center justify-center">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-white font-semibold">Subscribe to Updates</h4>
                    <p className="text-gray-400 text-sm">Get the latest news</p>
                  </div>
                  <ArrowRight className="w-5 h-5 text-cyan-400" />
                </motion.a>
              </div>
            </div>

            {/* FAQ Preview */}
            <div className="bg-gradient-to-br from-gray-800/60 to-gray-900/60 backdrop-blur-xl border border-gray-700 rounded-3xl p-8">
              <h3 className="text-2xl font-bold text-white mb-6">Quick FAQ</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="text-white font-semibold mb-2">Is the bootcamp free?</h4>
                  <p className="text-gray-400 text-sm">Yes! This bootcamp is completely free thanks to support from the Sui Foundation.</p>
                </div>
                <div>
                  <h4 className="text-white font-semibold mb-2">Do I need prior experience?</h4>
                  <p className="text-gray-400 text-sm">No! We welcome complete beginners and will teach you everything from scratch.</p>
                </div>
                <div>
                  <h4 className="text-white font-semibold mb-2">What timezone are sessions in?</h4>
                  <p className="text-gray-400 text-sm">All live sessions are conducted in West Africa Time (WAT) with recordings available.</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ApplicationForm;