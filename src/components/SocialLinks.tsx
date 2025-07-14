
import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Instagram } from 'lucide-react';

const SocialLinks = () => {
  const socialLinks = [
    {
      name: 'GitHub',
      icon: Github,
      url: 'https://github.com/hariharasudhan',
      color: 'hover:text-gray-300',
    },
    {
      name: 'LinkedIn',
      icon: Linkedin,
      url: 'https://www.linkedin.com/in/hariharasudhan/',
      color: 'hover:text-blue-400',
    },
    {
      name: 'Instagram',
      icon: Instagram,
      url: 'https://www.instagram.com/hariharasudhan/',
      color: 'hover:text-pink-400',
    },
    // Uncomment if you want phone or email
    // {
    //   name: 'Phone',
    //   icon: Phone,
    //   url: 'tel:+91XXXXXXXXXX',
    //   color: 'hover:text-green-400',
    // },
    // {
    //   name: 'Email',
    //   icon: Mail,
    //   url: 'mailto:hariharasudhan@email.com',
    //   color: 'hover:text-red-400',
    // },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.5 }}
      className="flex flex-col gap-4 "
    >
      {socialLinks.map((link, index) => (
        <motion.a
          key={link.name}
          href={link.url}
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ y: -4 }}
          className={`w-12 h-12  border border-gray-700/50 rounded-full flex items-center justify-center text-gray-400 ${link.color} transition-colors duration-200`}
        >
          <link.icon size={20} />
        </motion.a>
      ))}
      {/* Decorative vertical line */}
      <motion.div
        initial={{ height: 0 }}
        animate={{ height: 48 }}
        transition={{ duration: 0.8, delay: 1.2 }}
        className="w-px bg-gradient-to-t from-purple-500/50 to-transparent mx-auto"
      />
    </motion.div>
  );
};

export default SocialLinks;