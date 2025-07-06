
import React, { Suspense } from 'react';
import { motion } from 'framer-motion';
import Particles from 'react-particles';
import { loadSlim } from 'tsparticles-slim';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Text3D, Float } from '@react-three/drei';
import HeroSection from '../components/HeroSection';
import AboutSection from '../components/AboutSection';
import ProjectsSection from '../components/ProjectsSection';
import SkillsSection from '../components/SkillsSection';
import ContactSection from '../components/ContactSection';
import BlogSection from '../components/BlogSection';
import CodingProfilesSection from '../components/CodingProfilesSection';
import SocialLinks from '../components/SocialLinks';
import Navigation from '../components/Navigation';
import { particlesConfig } from '../config/particlesConfig';
import type { Engine } from 'tsparticles-engine';

const Index = () => {
  const particlesInit = async (main: Engine) => {
    await loadSlim(main);
  };

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white overflow-x-hidden">
      {/* Particles Background */}
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={particlesConfig}
        className="absolute inset-0 -z-10"
      />
      
      {/* Navigation */}
      <Navigation />
      
      {/* Main Content */}
      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <HeroSection />
        <AboutSection />
        <ProjectsSection />
        <SkillsSection />
        <BlogSection />
        <CodingProfilesSection />
        <ContactSection />
      </motion.main>
      
      {/* Social Links */}
      <SocialLinks />
      
      {/* Gradient Overlays */}
      <div className="fixed top-0 left-0 w-full h-full pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl"></div>
      </div>
    </div>
  );
};

export default Index;
