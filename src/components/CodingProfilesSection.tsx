import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';

const CodingProfilesSection = () => {
  const profiles = [
    {
      platform: 'LeetCode',
      username: 'your-username',
      stats: {
        solved: '450+',
        ranking: 'Top 15%'
      },
      color: 'from-orange-500 to-yellow-500',
      url: '#'
    },
    {
      platform: 'CodeChef',
      username: 'kl_9922008154',
      stats: {
        rating: '1800',
        stars: '4 Star'
      },
      color: 'from-purple-500 to-pink-500',
      url: 'https://www.codechef.com/users/kl_9922008154'
    },
    {
      platform: 'HackerRank',
      username: 'h9922008154',
      stats: {
        badges: '25+',
        level: 'Gold'
      },
      color: 'from-green-500 to-teal-500',
      url: 'https://www.hackerrank.com/profile/h9922008154'
    }
  ];

  return (
    <section className="py-24 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
              Coding Profiles
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            My competitive programming journey and achievements across platforms
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mx-auto">
          {profiles.map((profile, index) => (
            <motion.div
              key={profile.platform}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -10, scale: 1.05 }}
              className="group bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 hover:border-purple-500/50 transition-all duration-300 text-center"
            >
              <div className={`w-16 h-16 mx-auto mb-4 bg-gradient-to-r ${profile.color} rounded-full flex items-center justify-center font-bold text-2xl text-white`}>
                {profile.platform.charAt(0)}
              </div>
              
              <h3 className="text-xl font-bold mb-2 text-white">{profile.platform}</h3>
              <p className="text-gray-400 mb-4">@{profile.username}</p>
              
              <div className="space-y-2 mb-6">
                {Object.entries(profile.stats).map(([key, value]) => (
                  <div key={key} className="flex justify-between text-sm">
                    <span className="text-gray-400 capitalize">{key}:</span>
                    <span className="text-purple-400 font-medium">{value}</span>
                  </div>
                ))}
              </div>
              
              <Button
                size="sm"
                className={`bg-gradient-to-r ${profile.color} hover:opacity-90 text-white w-full group-hover:scale-105 transition-transform duration-300`}
              >
                <ExternalLink size={16} className="mr-2" />
                View Profile
              </Button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CodingProfilesSection;
