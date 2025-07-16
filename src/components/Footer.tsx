import React from 'react';
import { motion } from 'framer-motion';
import { Github, Twitter, MessageCircle, Mail, ExternalLink } from 'lucide-react';

const Footer = () => {
  const footerLinks = {
    'Program': [
      { name: 'Curriculum', href: '#curriculum' },
      { name: 'Mentors', href: '#mentors' },
      { name: 'FAQ', href: '#faq' },
      { name: 'Apply Now', href: '#apply' }
    ],
    'Resources': [
      { name: 'Download Curriculum PDF', href: '#' },
      { name: 'Sui Documentation', href: 'https://docs.sui.io', external: true },
      { name: 'Move Language Guide', href: 'https://move-language.github.io', external: true },
      { name: 'Community Blog', href: '#' }
    ],
    'Community': [
      { name: 'Discord Server', href: '#' },
      { name: 'GitHub Repository', href: '#' },
      { name: 'Student Showcase', href: '#' },
      { name: 'Alumni Network', href: '#' }
    ]
  };

  const socialLinks = [
    { name: 'Twitter', icon: Twitter, href: 'https://x.com/SuiHubAfrica', color: 'hover:text-blue-400' },
    { name: 'Telegram', icon: MessageCircle, href: '#', color: 'hover:text-purple-400' },
    { name: 'Email', icon: Mail, href: 'mailto:hello@suihubafrica.com', color: 'hover:text-cyan-400' }
  ];

  const partners = [
    { name: 'Sui Foundation', logo: <img
              src="https://cocozqaswhyugfbilbxk.supabase.co/storage/v1/object/public/suihub//Sui_Symbol_White.png"
              
              className="w-10 h-10 object-contain"
            /> },
    
  ];

  return (
    <footer className="bg-gray-900 border-t border-gray-800 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-r from-blue-500 to-cyan-400 blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid lg:grid-cols-4 gap-12">
            {/* Brand Section */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="lg:col-span-1"
            >
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-10 h-10 bg-gradient-to-r from--500 to-cyan-400 rounded-xl flex items-center justify-center">
                  <img
              src="https://cocozqaswhyugfbilbxk.supabase.co/storage/v1/object/public/suihub//Sui_Symbol_White.png"
              alt="Sui Hub Logo"
              className="w-10 h-10 object-contain"
            />
                </div>
                <span className="text-white font-bold text-xl">Sui Hub Africa</span>
              </div>
              <p className="text-gray-400 leading-relaxed mb-6">
                Empowering the next generation of African blockchain developers through comprehensive training and mentorship.
              </p>
              <div className="flex space-x-4">
                {socialLinks.map((social) => {
                  const IconComponent = social.icon;
                  return (
                    <motion.a
                      key={social.name}
                      href={social.href}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className={`w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center text-gray-400 ${social.color} transition-colors duration-200`}
                    >
                      <IconComponent className="w-5 h-5" />
                    </motion.a>
                  );
                })}
              </div>
            </motion.div>

            {/* Links Sections */}
            {Object.entries(footerLinks).map(([title, links], index) => (
              <motion.div
                key={title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <h3 className="text-white font-semibold text-lg mb-6">{title}</h3>
                <ul className="space-y-3">
                  {links.map((link) => (
                    <li key={link.name}>
                      <a
                        href={link.href}
                        className="text-gray-400 hover:text-cyan-400 transition-colors duration-200 flex items-center"
                        {...(link.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                      >
                        {link.name}
                        {link.external && <ExternalLink className="w-3 h-3 ml-1" />}
                      </a>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Partners Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="py-8 border-t border-gray-800"
        >
          <div className="text-center mb-8">
            <h4 className="text-gray-400 text-sm font-medium mb-6">Sponsored by</h4>
            <div className="flex justify-center items-center space-x-8">
              {partners.map((partner, index) => (
                <motion.div
                  key={partner.name}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05 }}
                  className="flex items-center space-x-2 text-gray-400 hover:text-white transition-colors duration-200"
                >
                  <div className="w-8 h-8 bg-gradient-to-r from--500 to-cyan-400 rounded-lg flex items-center justify-center">
                    <span className="text-white font-bold text-sm">{partner.logo}</span>
                  </div>
                  <span className="font-medium">{partner.name}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Bottom Bar */}
        <div className="py-6 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm mb-4 md:mb-0">
              © 2025 Sui Hub Africa Bootcamp. All rights reserved.
            </div>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
                Terms of Service
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
                Code of Conduct
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;