import { motion } from 'framer-motion';

const ContactInfo = () => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className='space-y-6'>
      <div className='bg-background-light dark:bg-[#1a2329] p-6 rounded-xl border border-gray-100 dark:border-[#283339]'>
        <h3 className='text-gray-900 dark:text-white text-xl font-bold mb-4'>
          Contact Information
        </h3>
        <div className='space-y-4'>
          <div className='flex items-center gap-4'>
            <div className='size-10 rounded-full bg-primary/20 flex items-center justify-center text-primary shrink-0'>
              <span className='material-symbols-outlined'>mail</span>
            </div>
            <div>
              <p className='text-sm text-gray-500 dark:text-gray-400'>Email</p>
              <a
                className='text-gray-900 dark:text-white font-medium hover:text-primary break-all'
                href='mailto:alex.morgan@dev.com'>
                sagormajomder@gmail.com
              </a>
            </div>
          </div>
          <div className='flex items-center gap-4'>
            <div className='size-10 rounded-full bg-primary/20 flex items-center justify-center text-primary shrink-0'>
              <span className='material-symbols-outlined'>call</span>
            </div>
            <div>
              <p className='text-sm text-gray-500 dark:text-gray-400'>Phone</p>
              <p className='text-gray-900 dark:text-white font-medium'>
                +8801683428564
              </p>
            </div>
          </div>
          <div className='flex items-center gap-4'>
            <div className='size-10 rounded-full bg-primary/20 flex items-center justify-center text-primary shrink-0'>
              <span className='material-symbols-outlined'>chat</span>
            </div>
            <div>
              <p className='text-sm text-gray-500 dark:text-gray-400'>
                WhatsApp
              </p>
              <a
                className='text-gray-900 dark:text-white font-medium hover:text-primary'
                href='https://wa.me/8801683428564'>
                Chat on WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ContactInfo;
