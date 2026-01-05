const DesktopNav = ({ navLinks }) => {
  return (
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
  );
};

export default DesktopNav;
