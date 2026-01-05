'use client';

import ProjectCard from './projects/ProjectCard';

import { projects } from '../data/projects';

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
        <div className='px-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8'>
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
