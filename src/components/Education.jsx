import { motion } from 'framer-motion';

const Education = () => {
  return (
    <section className='px-4  flex justify-center py-16 bg-background-light dark:bg-[#111618]'>
      <div className='layout-content-container flex flex-col max-w-7xl flex-1'>
        <div className='px-4 pb-8 pt-5 text-center'>
          <h2 className='text-gray-900 dark:text-white text-3xl font-bold leading-tight tracking-[-0.015em]'>
            Education
          </h2>
        </div>
        <div className='px-4 space-y-6'>
          <motion.div
            initial={{ x: 20, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className='bg-white dark:bg-[#1a2329] p-6 rounded-xl border border-gray-200 dark:border-[#283339] flex flex-col md:flex-row md:items-center justify-between gap-4'>
            <div>
              <h3 className='text-gray-900 dark:text-white text-lg font-bold'>
                B.Sc in Computer Science and Engineering
              </h3>
              <p className='text-gray-600 dark:text-gray-400'>
                Green University of Bangladesh
              </p>
            </div>
            <div className='text-gray-500 dark:text-gray-400 text-sm font-medium bg-gray-100 dark:bg-[#111618] px-3 py-1 rounded w-fit'>
              2019 - 2022
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Education;
