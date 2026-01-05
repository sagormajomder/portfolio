'use client';

import ProjectCard from './projects/ProjectCard';

const projects = [
  {
    title: 'Champy',
    tagline: 'Challenge Yourself, Conquer the World',
    description:
      'Champy is a dynamic contest platform designed to foster competition and skill development. It offers a user-friendly interface for participants to join various contests, track their progress on global leaderboards, and engage with a community of like-minded individuals. Built with modern web technologies, Champy ensures a seamless and responsive experience for all users.',
    image: 'https://i.ibb.co.com/1fyYMZkv/Screenshot-2026-01-05-120641.png',
    tags: ['React', 'Express', 'Firebase', 'Mongodb'],
    githubLink: 'https://github.com/sagormajomder/champy',
    liveLink: 'https://champy-sm.web.app/',
  },
  {
    title: 'Chapterly',
    tagline: 'Every Book, Every Chapter, Your Way',
    description:
      'Chapterly helps readers explore, manage, and personalize book collections in one intuitive, user-friendly digital library platform.',
    image: 'https://i.ibb.co.com/9HB1rwT2/Screenshot-2025-12-13-193004.png',
    tags: ['React', 'Express', 'Firebase', 'Mongodb'],
    githubLink: 'https://github.com/sagormajomder/chapterly',
    liveLink: 'https://chapterly-sm.web.app/',
  },

  {
    title: 'MeowketPlace',
    tagline: 'Your one‑stop shop for happy pets',
    description:
      'MeowketPlace is a pet‑focused marketplace designed to simplify shopping for pet essentials, offering a clean, playful, and trustworthy experience for owners and their beloved companions.',
    image: 'https://i.ibb.co.com/5gBSxZ45/Screenshot-2025-12-13-194147.png',
    tags: ['Next.js', 'Clerk', 'Mongodb'],
    githubLink: 'https://github.com/sagormajomder/meowket-place',
    liveLink: 'https://meowket-place.vercel.app/',
  },
  {
    title: 'Game Matrix',
    tagline: 'Dive into the world of games.',
    description:
      'Discover and play unique indie games from a curated collection, with regular updates delivered through a gamer-focused newsletter.',
    image: 'https://i.ibb.co.com/S7xW6hXS/Screenshot-2025-12-13-194336.png',
    tags: ['TailwindCSS', 'React', 'Firebase'],
    githubLink: 'https://github.com/sagormajomder/game-matrix',
    liveLink: 'https://game-matrix-sm.web.app/',
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
