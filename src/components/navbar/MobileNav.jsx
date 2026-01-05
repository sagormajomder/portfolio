const MobileNav = ({ navLinks, isOpen, setIsOpen }) => {
  return (
    <>
      <div
        className='md:hidden text-gray-900 dark:text-white'
        onClick={() => setIsOpen(!isOpen)}>
        <span className='material-symbols-outlined cursor-pointer'>menu</span>
      </div>
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
    </>
  );
};

export default MobileNav;
