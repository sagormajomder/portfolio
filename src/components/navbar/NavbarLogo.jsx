import { FaLaptopCode } from 'react-icons/fa6';

const NavbarLogo = () => {
  return (
    <div className='flex items-center gap-3 text-gray-900 dark:text-white'>
      <div className='text-primary'>
        <FaLaptopCode className='text-2xl' />
      </div>
      <h2 className='text-gray-900 dark:text-white text-lg font-bold leading-tight tracking-[-0.015em]'>
        Sagor Majomder
      </h2>
    </div>
  );
};

export default NavbarLogo;
