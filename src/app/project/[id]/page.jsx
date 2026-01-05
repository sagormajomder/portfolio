'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { HiOutlineArrowLeft, HiOutlineExternalLink } from 'react-icons/hi';
import { VscGithub } from 'react-icons/vsc';
import Footer from '../../../components/Footer';
import Navbar from '../../../components/Navbar';
import { projects } from '../../../data/projects';

const ProjectDetailsPage = () => {
  const { id } = useParams();
  const project = projects.find(p => p.id === id);

  if (!project) {
    return (
      <div className='flex flex-col min-h-screen'>
        <Navbar />
        <main className='flex-1 flex items-center justify-center'>
          <div className='text-center'>
            <h1 className='text-2xl font-bold mb-4'>Project not found</h1>
            <Link href='/' className='text-primary hover:underline'>
              Go back home
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className='flex flex-col min-h-screen bg-background-light dark:bg-[#111618]'>
      <Navbar />
      <main className='flex-1 py-12 md:py-20'>
        <div className='layout-content-container max-w-5xl mx-auto px-4'>
          <Link
            href='/#projects'
            className='inline-flex items-center text-gray-600 dark:text-gray-400 hover:text-primary transition-colors mb-8 group'>
            <HiOutlineArrowLeft className='mr-2 text-xl group-hover:-translate-x-1 transition-transform' />
            Back to Projects
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className='bg-white dark:bg-[#1a2329] rounded-2xl shadow-xl overflow-hidden border border-gray-100 dark:border-[#283339]'>
            {/* Project Image */}
            <div
              className='h-64 md:h-96 w-full bg-cover bg-center'
              style={{ backgroundImage: `url('${project.image}')` }}></div>

            <div className='p-6 md:p-10'>
              <div className='flex flex-col md:flex-row gap-8 justify-between items-start mb-8'>
                <div>
                  <h1 className='text-3xl md:text-4xl font-black text-gray-900 dark:text-white mb-2'>
                    {project.title}
                  </h1>
                  <p className='text-xl text-primary font-medium'>
                    {project.tagline}
                  </p>
                </div>
                <div className='flex gap-4 shrink-0'>
                  <a
                    href={project.liveLink}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='flex items-center gap-2 px-5 py-2.5 bg-primary text-white rounded-lg font-bold hover:bg-sky-600 transition-colors shadow-lg shadow-primary/20'>
                    <HiOutlineExternalLink className='text-xl' />
                    Live Demo
                  </a>
                  <a
                    href={project.githubLink}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='flex items-center gap-2 px-5 py-2.5 bg-gray-200 dark:bg-[#283339] text-gray-800 dark:text-white rounded-lg font-bold hover:bg-gray-300 dark:hover:bg-[#34424a] transition-colors'>
                    <VscGithub className='text-xl' />
                    Source Code
                  </a>
                </div>
              </div>

              <div className='space-y-10'>
                {/* Description */}
                <section>
                  <h2 className='text-2xl font-bold text-gray-900 dark:text-white mb-4'>
                    Overview
                  </h2>
                  <p className='text-lg text-gray-600 dark:text-gray-300 leading-relaxed'>
                    {project.description}
                  </p>
                </section>

                {/* Tech Stack */}
                <section>
                  <h2 className='text-2xl font-bold text-gray-900 dark:text-white mb-4'>
                    Technology Stack
                  </h2>
                  <div className='flex flex-wrap gap-3'>
                    {project.tags.map(tag => (
                      <span
                        key={tag}
                        className='px-4 py-2 bg-primary/10 text-primary font-semibold rounded-lg text-sm'>
                        {tag}
                      </span>
                    ))}
                  </div>
                </section>

                <div className='grid md:grid-cols-2 gap-10'>
                  {/* Challenges */}
                  <section>
                    <h2 className='text-2xl font-bold text-gray-900 dark:text-white mb-4'>
                      Challenges Faced
                    </h2>
                    <ul className='space-y-3'>
                      {project.challenges?.map((challenge, index) => (
                        <li key={index} className='flex items-start gap-3'>
                          <span className='mt-1.5 w-2 h-2 rounded-full bg-red-500 shrink-0'></span>
                          <span className='text-gray-600 dark:text-gray-300'>
                            {challenge}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </section>

                  {/* Improvements */}
                  <section>
                    <h2 className='text-2xl font-bold text-gray-900 dark:text-white mb-4'>
                      Future Improvements
                    </h2>
                    <ul className='space-y-3'>
                      {project.improvements?.map((improvement, index) => (
                        <li key={index} className='flex items-start gap-3'>
                          <span className='mt-1.5 w-2 h-2 rounded-full bg-green-500 shrink-0'></span>
                          <span className='text-gray-600 dark:text-gray-300'>
                            {improvement}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </section>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ProjectDetailsPage;
