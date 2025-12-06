import { motion } from 'framer-motion';

const About = () => {
  return (
    <section
      className='px-4  flex justify-center py-16 bg-white dark:bg-[#151c20]'
      id='about'>
      <div className='layout-content-container flex flex-col max-w-7xl flex-1'>
        <div className='px-4 pb-3 pt-5'>
          <div className='flex items-center gap-3 mb-2'>
            <span className='h-px flex-1 bg-gray-200 dark:bg-[#283339]'></span>
            <span className='text-primary font-bold uppercase tracking-wider text-sm'>
              About Me
            </span>
            <span className='h-px flex-1 bg-gray-200 dark:bg-[#283339]'></span>
          </div>
          <h2 className='text-gray-900 dark:text-white text-3xl font-bold leading-tight tracking-[-0.015em] text-center mb-8'>
            Who I Am
          </h2>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className='px-4'>
          <div className='bg-gray-50 dark:bg-[#1a2329] p-8 rounded-xl border border-gray-100 dark:border-[#283339]'>
            <p className='text-gray-600 dark:text-gray-300 text-lg font-normal leading-relaxed pb-6'>
              I am a passionate Full Stack Developer with over 5 years of
              experience in building digital products. My journey began with a
              curiosity for how things work on the web, which quickly turned
              into a career obsession. I specialize in the JavaScript ecosystem,
              particularly React and Node.js, but I'm never afraid to pick up
              new tools to solve the right problems.
            </p>
            <p className='text-gray-600 dark:text-gray-300 text-lg font-normal leading-relaxed'>
              Beyond coding, I love mentoring junior developers and contributing
              to open-source projects. When I'm not at my computer, you can find
              me hiking, reading sci-fi novels, or experimenting with new coffee
              brewing methods.
            </p>
          </div>
          {/* Mini Stats */}
          <div className='grid grid-cols-2 md:grid-cols-4 gap-4 mt-8'>
            {[
              { value: '5+', label: 'Years Experience' },
              { value: '50+', label: 'Projects Done' },
              { value: '20+', label: 'Happy Clients' },
              { value: '100%', label: 'Commitment' },
            ].map((stat, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                className='p-4 bg-gray-50 dark:bg-[#1a2329] rounded-lg text-center border border-gray-100 dark:border-[#283339]'>
                <h3 className='text-3xl font-black text-primary'>
                  {stat.value}
                </h3>
                <p className='text-sm text-gray-500 dark:text-gray-400 mt-1'>
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
