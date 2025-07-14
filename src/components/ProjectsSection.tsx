import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';
import { Button } from '@/components/ui/button';

const ProjectsSection = React.memo(() => {
  const projects = [
    {
      id: 1,
      title: 'ShareWheels',
      description: 'A comprehensive carpooling platform for both urban and intercity travel. Features real-time ride posting/joining, location-based ride matching, driver verification, and secure booking. Focused on reducing traffic, congestion, and carbon emissions. Built with Expo (React Native), Firebase, and Google APIs.',
      image: '/sharewheels%20.jpg',
      tags: ['Expo', 'React Native', 'Firebase', 'Google APIs'],
      demoUrl: 'https://github.com/Hari-hara-sudan/carpooling',
      githubUrl: '#'
    },
    {
      id: 2,
      title: 'Blood Donor Application',
      description: 'Mobile app to connect blood donors with seekers based on blood group and proximity. Features emergency requests, real-time notifications, secure login, and history tracking. Built with Firebase Realtime Database and Expo (React Native).',
      image: '/blooddonation.jpg',
      tags: ['Firebase', 'Expo', 'React Native'],
      demoUrl: '#',
      githubUrl: '#'
    },
    {
      id: 3,
      title: 'LexiAI',
      description: 'AI-powered legal document summarization and bias detection app. Cross-platform mobile app using React Native, Expo, Google Gemini AI, and Firebase. Features PDF/TXT upload, real-time summarization, bias analysis, user authentication, and history tracking.',
      image: '/Lexi.jpg',
      tags: ['React Native', 'Expo', 'Firebase', 'Google Gemini AI'],
      demoUrl: '#',
      githubUrl: '#'
    },
    {
      id: 4,
      title: 'HomiesHere',
      description: 'Real-time messenger app for seamless communication with modern UI and cross-platform compatibility. Features user authentication, message storage, chat history, push notifications, and group chat. Built with Firebase (Realtime Database) and Expo (React Native).',
      image: '/Honmieshere.jpg',
      tags: ['Firebase', 'Expo', 'React Native'],
      demoUrl: '#',
      githubUrl: '#'
    },
    {
      id: 5,
      title: 'CLV Analysis Dashboard',
      description: 'Interactive dashboard using Tableau Public to analyze Customer Lifetime Value (CLV) across various dimensions. Features dynamic filters, segmented visualizations, and multiple chart types. Data source: Excel.',
      image: '/image.png',
      tags: ['Tableau', 'Excel'],
      demoUrl: '#',
      githubUrl: '#'
    }
  ];

  return (
    <section id="projects" className="py-24 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
              Featured Projects
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Here are some of my recent projects that showcase my skills and creativity
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true, margin: "-50px" }}
              whileHover={{ y: -5 }}
              className="group bg-gray-800/60 border border-gray-700/50 rounded-2xl p-6 hover:border-purple-500/50 transition-all duration-300"
            >
              <div className="relative overflow-hidden rounded-xl">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover rounded-xl transition-all duration-300 group-hover:scale-110 group-hover:blur-sm"
                />
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                {/* Blur overlay */}
                <div className="absolute inset-0 bg-black/20 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                {/* Shimmer effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-purple-400 transition-colors">{project.title}</h3>
                <p className="text-gray-300 mb-6 leading-relaxed">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
                <div className="flex gap-4">
                  <Button
                    size="sm"
                    className="bg-gradient-to-r from-purple-500 to-pink-500 hover:opacity-90 text-white flex-1 group-hover:scale-105 transition-transform"
                  >
                    <ExternalLink size={16} className="mr-2" />
                    Live Demo
                  </Button>
                  <Button
                    size="sm"
                    variant="outline"
                    className="border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-black flex-1 group-hover:scale-105 transition-transform"
                  >
                    <Github size={16} className="mr-2" />
                    Code
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
});

ProjectsSection.displayName = 'ProjectsSection';

export default ProjectsSection;
