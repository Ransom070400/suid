import React from 'react';
import { motion } from 'framer-motion';
import { Quote, Star } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Adaora Okonkwo',
      role: 'Junior Blockchain Developer',
      company: 'DeFi Startup, Lagos',
      image: 'https://images.pexels.com/photos/3184289/pexels-photo-3184289.jpeg?auto=compress&cs=tinysrgb&w=400',
      quote: 'This bootcamp completely transformed my career! I went from knowing nothing about blockchain to deploying my first dApp in just 10 weeks. The mentors were incredible and the community support was amazing.',
      rating: 5,
      flag: '🇳🇬'
    },
    {
      name: 'Joshua Mwangi',
      role: 'Full-Stack Developer',
      company: 'Fintech Company, Nairobi',
      image: 'https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=400',
      quote: 'The hands-on approach and real-world projects made all the difference. I now feel confident building complex dApps and even got promoted at work thanks to my new blockchain skills!',
      rating: 5,
      flag: '🇰🇪'
    },
    {
      name: 'Fatima Al-Rashid',
      role: 'Smart Contract Developer',
      company: 'Web3 Agency, Cairo',
      image: 'https://images.pexels.com/photos/3184328/pexels-photo-3184328.jpeg?auto=compress&cs=tinysrgb&w=400',
      quote: 'The curriculum was perfectly structured and the weekly assignments kept me engaged. The Move programming language clicked for me immediately, and now I\'m working on multiple DeFi projects.',
      rating: 5,
      flag: '🇪🇬'
    },
    {
      name: 'Thabo Mokoena',
      role: 'Blockchain Consultant',
      company: 'Independent, Cape Town',
      image: 'https://images.pexels.com/photos/2182969/pexels-photo-2182969.jpeg?auto=compress&cs=tinysrgb&w=400',
      quote: 'Best investment I\'ve made in my career. The bootcamp gave me the confidence to start my own blockchain consulting business. The network I built here is invaluable.',
      rating: 5,
      flag: '🇿🇦'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  return (
    <section id="testimonials" className="py-20 bg-gradient-to-br from-gray-900 via-blue-900/20 to-gray-900 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-full h-full"
          style={{
            backgroundImage: `radial-gradient(circle at 25% 25%, #3B82F6 2px, transparent 2px),
                              radial-gradient(circle at 75% 75%, #06B6D4 2px, transparent 2px)`,
            backgroundSize: '100px 100px'
          }}
        ></div>
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
              Success
            </span>
            <br />
            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Stories
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Hear from our graduates who transformed their careers and are now building the future of Web3 in Africa
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-8"
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              variants={cardVariants}
              whileHover={{ 
                scale: 1.02,
                transition: { duration: 0.2 }
              }}
              className="group"
            >
              <div className="bg-gradient-to-br from-gray-800/60 to-gray-900/60 backdrop-blur-xl border border-gray-700 rounded-3xl p-8 h-full hover:border-gray-600 transition-all duration-300 relative">
                {/* Quote Icon */}
                <div className="absolute top-6 right-6 opacity-20 group-hover:opacity-30 transition-opacity duration-300">
                  <Quote className="w-12 h-12 text-cyan-400" />
                </div>

                {/* Rating */}
                <div className="flex items-center space-x-1 mb-6">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>

                {/* Testimonial Text */}
                <blockquote className="text-gray-300 leading-relaxed mb-8 text-lg">
                  "{testimonial.quote}"
                </blockquote>

                {/* Author Info */}
                <div className="flex items-center space-x-4">
                  <div className="relative">
                    <div className="w-16 h-16 rounded-2xl overflow-hidden border-2 border-gradient-to-r from-blue-500 to-cyan-400 p-0.5 bg-gradient-to-r from-blue-500 to-cyan-400">
                      <img
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="w-full h-full object-cover rounded-xl"
                      />
                    </div>
                    <div className="absolute -bottom-1 -right-1 text-xl">
                      {testimonial.flag}
                    </div>
                  </div>
                  <div>
                    <h4 className="text-white font-bold text-lg">{testimonial.name}</h4>
                    <p className="text-cyan-400 font-medium">{testimonial.role}</p>
                    <p className="text-gray-500 text-sm">{testimonial.company}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Community Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <div className="bg-gradient-to-br from-gray-800/40 to-gray-900/40 backdrop-blur-xl border border-gray-700 rounded-3xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-8">Join Our Growing Community</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                { number: '500+', label: 'Graduates' },
                { number: '15', label: 'Countries' },
                { number: '85%', label: 'Job Placement Rate' },
                { number: '50+', label: 'dApps Deployed' }
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent mb-2">
                    {stat.number}
                  </div>
                  <div className="text-gray-400">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;