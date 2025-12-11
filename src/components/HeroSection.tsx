import React from 'react';
import { motion } from 'framer-motion';
import { Download, ArrowDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import SocialLinks from './SocialLinks';

const HeroSection = React.memo(() => {
  const scrollToNext = () => {
    document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center pt-20">
      {/* SocialLinks absolutely positioned in HeroSection */}
      <div className="absolute left-8 bottom-8 z-50">
        <SocialLinks />
      </div>
      <div className="max-w-7xl mx-auto px-4 text-center">
        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-8"
        >
          {/* Name */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="text-2xl md:text-3xl font-light text-gray-300 mb-4"
          >
            Hello, I'm
          </motion.h2>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6"
          >
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">
              HARIHARASUDAN V
            </span>
          </motion.h1>

          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-3xl md:text-5xl font-bold text-white mb-8"
          >
            Web Developer | AI Enthusiast | Open Source Contributor
          </motion.h3>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto mb-12"
          >
            Certified web development intern with hands-on experience in React, JavaScript, and modern web technologies. Passionate about building scalable, creative solutions and contributing to open source. Always eager to learn and take on new challenges.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center"
          >
            <a
              href="/Hari_Resume.pdf"
              download
              className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white px-10 py-4 rounded-full text-lg font-semibold transition-all transform hover:scale-105 shadow-lg shadow-purple-500/25 flex items-center justify-center"
            >
              <Download className="mr-2" size={20} />
              Download Resume
            </a>
            <Button
              variant="outline"
              onClick={scrollToNext}
              className="border-2 border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-black px-10 py-4 rounded-full text-lg font-semibold transition-all transform hover:scale-105 bg-transparent backdrop-blur-sm"
            >
              Let's Work Together
            </Button>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="cursor-pointer"
          onClick={scrollToNext}
        >
          <ArrowDown className="text-gray-400 hover:text-purple-400 transition-colors" size={32} />
        </motion.div>
      </motion.div>
    </section>
  );
});

HeroSection.displayName = 'HeroSection';

export default HeroSection;
