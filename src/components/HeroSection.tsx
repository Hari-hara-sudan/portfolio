
import React, { Suspense } from 'react';
import { motion } from 'framer-motion';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Float, Text3D, Center } from '@react-three/drei';
import { Download, ArrowDown } from 'lucide-react';
import { Button } from '@/components/ui/button';

const FloatingGeometry = () => {
  return (
    <Float speed={2} rotationIntensity={1} floatIntensity={2}>
      <mesh position={[2, 0, 0]}>
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial color="#8b5cf6" />
      </mesh>
    </Float>
  );
};

const HeroSection = () => {
  const scrollToNext = () => {
    document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center pt-20">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto px-4">
        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center lg:text-left space-y-6"
        >
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-5xl md:text-7xl font-bold"
          >
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">
              Creative
            </span>
            <br />
            <span className="text-white">Developer</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-xl text-gray-300 max-w-lg"
          >
            Crafting exceptional digital experiences with cutting-edge technology and creative design
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
          >
            <Button
              className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white px-8 py-3 rounded-full text-lg font-semibold transition-all transform hover:scale-105"
            >
              <Download className="mr-2" size={20} />
              Download Resume
            </Button>
            <Button
              variant="outline"
              onClick={scrollToNext}
              className="border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-black px-8 py-3 rounded-full text-lg font-semibold transition-all transform hover:scale-105"
            >
              Let's Work Together
            </Button>
          </motion.div>
        </motion.div>

        {/* 3D Canvas */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4, duration: 1 }}
          className="h-96 lg:h-[500px]"
        >
          <Canvas camera={{ position: [0, 0, 5] }}>
            <ambientLight intensity={0.5} />
            <pointLight position={[10, 10, 10]} />
            <Suspense fallback={null}>
              <FloatingGeometry />
              <Float speed={1.5} rotationIntensity={0.5} floatIntensity={1}>
                <mesh position={[-2, 1, 0]}>
                  <sphereGeometry args={[0.8]} />
                  <meshStandardMaterial color="#06b6d4" />
                </mesh>
              </Float>
              <Float speed={2.5} rotationIntensity={1.5} floatIntensity={2}>
                <mesh position={[0, -1, 1]}>
                  <coneGeometry args={[0.6, 1.5]} />
                  <meshStandardMaterial color="#f59e0b" />
                </mesh>
              </Float>
            </Suspense>
            <OrbitControls enableZoom={false} enablePan={false} />
          </Canvas>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="cursor-pointer"
          onClick={scrollToNext}
        >
          <ArrowDown className="text-gray-400 hover:text-purple-400 transition-colors" size={32} />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
