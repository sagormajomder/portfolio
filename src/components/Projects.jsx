'use client';

import { motion } from 'framer-motion';

const projects = [
  {
    title: 'Chapterly',
    description:
      'Chapterly helps readers explore, manage, and personalize book collections in one intuitive, user-friendly digital library platform.',
    image: 'https://i.ibb.co.com/9HB1rwT2/Screenshot-2025-12-13-193004.png',
    tags: ['React', 'Express', 'Firebase', 'Mongodb'],
  },
  {
    title: 'Game Matrix',
    description:
      'Discover and play unique indie games from a curated collection, with regular updates delivered through a gamer-focused newsletter.',
    image: 'https://i.ibb.co.com/S7xW6hXS/Screenshot-2025-12-13-194336.png',
    tags: ['TailwindCSS', 'React', 'Firebase'],
  },
  {
    title: 'MeowketPlace',
    description:
      'MeowketPlace is a pet‑focused marketplace designed to simplify shopping for pet essentials, offering a clean, playful, and trustworthy experience for owners and their beloved companions.',
    image: 'https://i.ibb.co.com/5gBSxZ45/Screenshot-2025-12-13-194147.png',
    tags: ['Next.js', 'Clerk', 'Mongodb'],
  },
];

const Projects = () => {
  return (
    <section
      className='px-4 flex justify-center py-16 bg-white dark:bg-[#151c20]'
      id='projects'>
      <div className='layout-content-container flex flex-col max-w-7xl flex-1'>
        <div className='px-4 pb-8 pt-5 text-center'>
          <h2 className='text-gray-900 dark:text-white text-3xl font-bold leading-tight tracking-[-0.015em]'>
            Featured Projects
          </h2>
          <p className='text-gray-500 dark:text-gray-400 mt-2'>
            A selection of things I've built.
          </p>
        </div>
        <div className='px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8'>
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className='bg-background-light dark:bg-[#1a2329] rounded-xl overflow-hidden shadow-sm border border-gray-100 dark:border-[#283339] hover:shadow-lg transition-all group'>
              <div
                className='h-48 w-full bg-cover bg-center'
                style={{ backgroundImage: `url('${project.image}')` }}></div>
              <div className='p-6 flex flex-col gap-3'>
                <h3 className='text-gray-900 dark:text-white text-xl font-bold'>
                  {project.title}
                </h3>
                <p className='text-gray-600 dark:text-gray-400 text-sm line-clamp-3'>
                  {project.description}
                </p>
                <div className='flex flex-wrap gap-2 mt-2'>
                  {project.tags.map(tag => (
                    <span
                      key={tag}
                      className='px-2 py-1 bg-primary/10 text-primary text-xs font-semibold rounded'>
                      {tag}
                    </span>
                  ))}
                </div>
                <button className='mt-4 w-full py-2 border border-primary text-primary hover:bg-primary hover:text-white rounded-lg text-sm font-semibold transition-colors'>
                  View Details
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
