'use client';

import { motion } from 'framer-motion';
import { CiLinkedin } from 'react-icons/ci';
import { FaLaptopCode } from 'react-icons/fa6';
import { VscGithub } from 'react-icons/vsc';

const Footer = () => {
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
    <footer className='bg-[#111618] border-t border-[#283339] py-8'>
      <div className='px-4 md:px-40 flex justify-center'>
        <div className='layout-content-container flex flex-col max-w-[960px] flex-1 items-center gap-6'>
          <div className='flex items-center gap-2 text-white'>
            <div className=' text-primary'>
              {' '}
              <FaLaptopCode className='text-2xl' />
            </div>
            <span className='text-xl font-bold'>Sagor Majomder</span>
          </div>
          {/* Social Icons */}
          <div className='flex gap-2'>
            {socialIcons.map((icon, i) => (
              <motion.a
                key={i}
                whileHover={{ scale: 1.2, color: '#13a4ec' }}
                className='text-gray-400 transition-colors'
                target='_blank'
                href={icon.link}>
                <span className='text-2xl p-2 rounded-lg bg-gray-200 dark:bg-[#283339] inline-block'>
                  {icon.iconJsx}
                </span>
              </motion.a>
            ))}
          </div>
          <p className='text-gray-500 text-sm'>
            © {new Date().getFullYear()} Sagor Majomder. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
