import { motion } from 'framer-motion';
import Link from 'next/link';

const ProjectCard = ({ project, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: 'easeOut', delay: index * 0.1 }}
      viewport={{ once: true }}
      whileHover={{ y: -10, transition: { duration: 0.3 } }}
      className='bg-background-light dark:bg-[#1a2329] rounded-xl overflow-hidden shadow-sm border border-gray-100 dark:border-[#283339] hover:shadow-lg transition-all group h-full flex flex-col'>
      <div
        className='h-48 w-full bg-cover bg-center shrink-0'
        style={{ backgroundImage: `url('${project.image}')` }}></div>
      <div className='p-6 flex flex-col gap-3 flex-grow'>
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
        <Link
          href={project.githubLink}
          target='_blank'
          className='mt-auto w-full'>
          <button className='mt-4 w-full py-2 border border-primary text-primary hover:bg-primary hover:text-white rounded-lg text-sm font-semibold transition-colors'>
            View Details
          </button>
        </Link>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
