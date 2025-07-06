
import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Twitter, Instagram } from 'lucide-react';

const SocialLinks = () => {
  const socialLinks = [
    {
      name: 'GitHub',
      icon: Github,
      url: 'https://github.com/rifamr/',
      color: 'hover:text-gray-300'
    },
    {
      name: 'LinkedIn',
      icon: Linkedin,
      url: 'https://www.linkedin.com/in/rifamr0106/',
      color: 'hover:text-blue-400'
    },
    {
      name: 'Instagram',
      icon: Instagram,
      url: 'https://www.instagram.com/riha.an5682/',
      color: 'hover:text-blue-400'
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, delay: 1 }}
      className="fixed left-8 bottom-8 z-40 hidden lg:flex flex-col gap-4"
    >
      {socialLinks.map((link, index) => (
        <motion.a
          key={link.name}
          href={link.url}
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.2 + index * 0.1 }}
          whileHover={{ scale: 1.2, y: -5 }}
          className={`w-12 h-12 bg-gray-800/80 backdrop-blur-sm border border-gray-700/50 rounded-full flex items-center justify-center text-gray-400 ${link.color} transition-all duration-300 hover:border-purple-500/50`}
        >
          <link.icon size={20} />
        </motion.a>
      ))}
      
      {/* Decorative line */}
      <motion.div
        initial={{ height: 0 }}
        animate={{ height: 60 }}
        transition={{ duration: 0.8, delay: 1.5 }}
        className="w-px bg-gradient-to-t from-purple-500/50 to-transparent mx-auto"
      />
    </motion.div>
  );
};

export default SocialLinks;
