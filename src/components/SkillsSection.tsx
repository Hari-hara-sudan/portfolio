import React, { useState } from 'react';
import { motion } from 'framer-motion';

const SkillsSection = React.memo(() => {
  const [animationKey, setAnimationKey] = useState(0);
  
  const skillCategories = [
    {
      title: 'Programming Languages',
      skills: [
        { name: 'Java', level: 85 },
        { name: 'Python', level: 80 }
      ]
    },
    {
      title: 'Libraries / Frameworks',
      skills: [
        { name: 'JavaScript', level: 90 },
        { name: 'React', level: 90 },
        { name: 'React Native', level: 85 },
        { name: 'Expo', level: 85 },
        { name: 'Next.js', level: 80 },
        { name: 'TailwindCSS', level: 90 },
        { name: 'Bootstrap', level: 80 },
        { name: 'HTML', level: 95 }
      ]
    },
    {
      title: 'Tools / Platforms',
      skills: [
        { name: 'Git', level: 90 },
        { name: 'VS Code', level: 90 },
        { name: 'Cursor', level: 85 },
        { name: 'Tableau', level: 80 }
      ]
    },
    {
      title: 'Databases',
      skills: [
        { name: 'MySQL', level: 80 }
      ]
    }
  ];

  const triggerAnimation = () => {
    setAnimationKey(prev => prev + 1);
  };

  return (
    <section id="skills" className="py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
              Skills & Expertise
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Technologies and tools I work with to bring ideas to life
          </p>
        </motion.div>

        <motion.div 
          key={animationKey}
          className="relative"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <div className="space-y-12">
            {skillCategories.map((category, categoryIndex) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: categoryIndex * 0.2 }}
                viewport={{ once: true, margin: "-50px" }}
                className="relative"
              >
                {/* Category header */}
                <div className="flex items-center mb-8">
                  <div className="relative z-10 w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center shadow-lg shadow-purple-500/30">
                    <div className="w-4 h-4 bg-white rounded-full"></div>
                  </div>
                  <div className="ml-6">
                    <h3 className="text-2xl font-bold text-white">{category.title}</h3>
                    <div className="w-16 h-0.5 bg-gradient-to-r from-purple-500 to-pink-500 mt-2"></div>
                  </div>
                </div>

                {/* Skills grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 ml-24">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: (categoryIndex * 0.2) + (skillIndex * 0.1) }}
                      viewport={{ once: true, margin: "-50px" }}
                      className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700/50 rounded-xl p-6 hover:border-purple-500/50 hover:shadow-lg hover:shadow-purple-500/20 transition-all duration-300 group"
                    >
                      <div className="flex justify-between items-center mb-4">
                        <span className="text-gray-300 font-medium group-hover:text-white transition-colors duration-200">{skill.name}</span>
                        <span className="text-purple-400 font-bold text-sm bg-purple-500/10 px-3 py-1 rounded-full">{skill.level}%</span>
                      </div>
                      <div className="w-full bg-gray-700/50 rounded-full h-2.5 overflow-hidden backdrop-blur-sm">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          transition={{ 
                            duration: 1.5, 
                            delay: 0.3,
                            ease: "easeOut"
                          }}
                          viewport={{ once: true, margin: "-100px" }}
                          className="bg-gradient-to-r from-purple-500 via-pink-500 to-purple-600 h-2.5 rounded-full relative shadow-lg"
                        >
                          {/* Animated shimmer effect */}
                          <motion.div
                            initial={{ x: "-100%" }}
                            animate={{ x: "100%" }}
                            transition={{ 
                              duration: 2, 
                              repeat: Infinity, 
                              repeatDelay: 1,
                              ease: "easeInOut"
                            }}
                            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent"
                          />
                        </motion.div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
});

SkillsSection.displayName = 'SkillsSection';

export default SkillsSection;
