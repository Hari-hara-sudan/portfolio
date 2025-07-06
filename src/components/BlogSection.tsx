
import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const BlogSection = () => {
  const articles = [
    {
      id: 1,
      title: 'Building Scalable React Applications',
      excerpt: 'Learn the best practices for creating maintainable and scalable React applications',
      date: '2024-01-15',
      readTime: '5 min read',
      image: '/placeholder.svg'
    },
    {
      id: 2,
      title: 'The Future of Web Development',
      excerpt: 'Exploring emerging technologies and trends shaping the future of web development',
      date: '2024-01-10',
      readTime: '7 min read',
      image: '/placeholder.svg'
    },
    {
      id: 3,
      title: 'Optimizing Performance in Modern Apps',
      excerpt: 'Techniques and strategies for improving application performance and user experience',
      date: '2024-01-05',
      readTime: '6 min read',
      image: '/placeholder.svg'
    }
  ];

  return (
    <section id="blog" className="py-24 px-4">
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
              Featured Articles
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Insights and thoughts on web development, technology, and design
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((article, index) => (
            <motion.article
              key={article.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="group bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl overflow-hidden hover:border-purple-500/50 transition-all duration-300 cursor-pointer"
            >
              <div className="relative overflow-hidden">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              
              <div className="p-6">
                <div className="flex items-center gap-4 text-sm text-gray-400 mb-3">
                  <div className="flex items-center gap-1">
                    <Calendar size={16} />
                    <span>{new Date(article.date).toLocaleDateString()}</span>
                  </div>
                  <span>{article.readTime}</span>
                </div>
                
                <h3 className="text-xl font-bold mb-3 text-white group-hover:text-purple-400 transition-colors">
                  {article.title}
                </h3>
                
                <p className="text-gray-300 mb-4 line-clamp-3">
                  {article.excerpt}
                </p>
                
                <Button
                  variant="ghost"
                  className="text-purple-400 hover:text-purple-300 p-0 h-auto font-medium group-hover:translate-x-2 transition-transform duration-300"
                >
                  Read More
                  <ArrowRight size={16} className="ml-2" />
                </Button>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
