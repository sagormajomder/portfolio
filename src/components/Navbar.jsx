import { motion } from 'framer-motion';
import { useState } from 'react';
import { FaLaptopCode } from 'react-icons/fa6';

const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Contact', href: '#contact' },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className='sticky top-0 z-100 flex items-center justify-between whitespace-nowrap border-b border-solid border-b-gray-200 dark:border-b-[#283339] bg-background-light/95 dark:bg-[#111618]/95 backdrop-blur-sm px-4 md:px-10 py-3'>
      <div className='flex items-center gap-3 text-gray-900 dark:text-white'>
        <div className='text-primary'>
          <FaLaptopCode className='text-2xl' />
        </div>
        <h2 className='text-gray-900 dark:text-white text-lg font-bold leading-tight tracking-[-0.015em]'>
          Sagor Majomder
        </h2>
      </div>
      <div className='hidden md:flex flex-1 justify-end gap-8'>
        <nav className='flex items-center gap-9'>
          {navLinks.map(link => (
            <a
              key={link.name}
              className='text-gray-700 dark:text-white text-sm font-medium leading-normal hover:text-primary transition-colors'
              href={link.href}>
              {link.name}
            </a>
          ))}
        </nav>
      </div>
      {/* Mobile Menu Icon */}
      <div
        className='md:hidden text-gray-900 dark:text-white'
        onClick={() => setIsOpen(!isOpen)}>
        <span className='material-symbols-outlined cursor-pointer'>menu</span>
      </div>
      {/* Mobile Menu (Simple implementation) */}
      {isOpen && (
        <div className='absolute top-full left-0 w-full bg-background-light dark:bg-[#111618] border-b border-gray-200 dark:border-[#283339] md:hidden flex flex-col p-4 shadow-lg'>
          {navLinks.map(link => (
            <a
              key={link.name}
              className='py-2 text-gray-700 dark:text-white text-sm font-medium hover:text-primary transition-colors'
              href={link.href}
              onClick={() => setIsOpen(false)}>
              {link.name}
            </a>
          ))}
        </div>
      )}
    </motion.header>
  );
};

export default Navbar;
