'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import DesktopNav from './navbar/DesktopNav';
import MobileNav from './navbar/MobileNav';
import NavbarLogo from './navbar/NavbarLogo';

const navLinks = [
  { name: 'Home', href: '/#home' },
  { name: 'About', href: '/#about' },
  { name: 'Skills', href: '/#skills' },
  { name: 'Projects', href: '/#projects' },
  { name: 'Contact', href: '/#contact' },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className=' border-b-gray-200 sticky top-0 z-100 dark:border-b-[#283339] bg-background-light/95 dark:bg-[#111618]/95 backdrop-blur-sm border-b border-solid'>
      <nav className='flex items-center justify-between whitespace-nowrap px-4 py-3 max-w-7xl mx-auto'>
        <NavbarLogo />
        <DesktopNav navLinks={navLinks} />
        <MobileNav navLinks={navLinks} isOpen={isOpen} setIsOpen={setIsOpen} />
      </nav>
    </motion.header>
  );
};

export default Navbar;
