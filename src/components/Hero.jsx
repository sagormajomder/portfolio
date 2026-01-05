'use client';

import { motion } from 'framer-motion';
import { CiLinkedin } from 'react-icons/ci';
import { HiOutlineDownload } from 'react-icons/hi';
import { VscGithub } from 'react-icons/vsc';
const Hero = () => {
  const socialIcons = [
    {
      iconJsx: <CiLinkedin />,
      link: 'https://www.linkedin.com/in/sagormajomder',
    },
    {
      iconJsx: <VscGithub />,
      link: 'https://github.com/sagormajomder',
    },
  ];

  return (
    <section
      className='px-4  flex justify-center py-10 md:py-20 bg-background-light dark:bg-[#111618]'
      id='home'>
      <div className='layout-content-container flex flex-col max-w-7xl flex-1'>
        <div className='@container'>
          <div className='flex flex-col-reverse gap-6 px-4 py-6 md:py-10 @[480px]:gap-8 @[864px]:flex-row items-center'>
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              // viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className='flex flex-col gap-6 @[480px]:min-w-[400px] @[480px]:gap-8 @[864px]:justify-center flex-1'>
              <div className='flex flex-col gap-4 text-left'>
                <div className='inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 w-fit'>
                  <span className='w-2 h-2 rounded-full bg-primary animate-pulse'></span>
                  <span className='text-xs font-bold text-primary tracking-wide uppercase'>
                    Available for hire
                  </span>
                </div>
                <h1 className='text-gray-900 dark:text-white text-4xl font-black leading-tight tracking-[-0.033em] @[480px]:text-5xl @[480px]:font-black @[480px]:leading-tight @[480px]:tracking-[-0.033em]'>
                  Sagor Majomder <br /> Full Stack Developer
                </h1>
                <h2 className='text-gray-600 dark:text-gray-300 text-lg font-normal leading-normal max-w-lg'>
                  Crafting robust and scalable web applications with modern
                  technologies. Bridging the gap between design and engineering.
                </h2>
              </div>
              {/* Resume Download Button */}
              <div className='flex flex-wrap gap-4 items-center'>
                <motion.a
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  href='https://drive.google.com/file/d/1-F_qXNiYf7QhrQrP19UQcLGp_aDh_1KL/view?usp=sharing'
                  target='_blank'
                  className='flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-6 bg-primary text-white text-base font-bold leading-normal tracking-[0.015em] hover:bg-sky-600 transition-colors shadow-lg shadow-primary/20 gap-1'>
                  <HiOutlineDownload className='text-xl' />
                  <span className='truncate'>Download Resume</span>
                </motion.a>
                {/* Social Icons */}
                <div className='flex gap-3'>
                  {socialIcons.map((icon, index) => (
                    <motion.a
                      key={index}
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      href={icon.link}
                      target='_blank'
                      className='rounded-lg bg-gray-200 dark:bg-[#283339] p-3 hover:bg-gray-300 dark:hover:bg-[#34424a] transition-colors group'>
                      <span className=' text-gray-700 dark:text-white group-hover:text-primary transition-colors text-2xl'>
                        {icon.iconJsx}
                      </span>
                    </motion.a>
                  ))}
                </div>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className='w-full max-w-[320px] md:max-w-[400px] flex justify-center @[864px]:w-1/2'>
              <div className='relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-white dark:border-[#283339] shadow-2xl'>
                <div
                  className='w-full h-full bg-top bg-no-repeat bg-cover'
                  data-alt='Portrait of Alex Morgan'
                  style={{
                    backgroundImage: 'url(/dev.png)',
                  }}></div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
