import { motion } from 'framer-motion';

const ContactForm = () => {
  return (
    <motion.form
      initial={{ opacity: 0, x: 30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className='space-y-4'>
      <div>
        <label className='block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1'>
          Name
        </label>
        <input
          className='w-full rounded-lg border-gray-300 dark:border-[#283339] bg-white dark:bg-[#111618] text-gray-900 dark:text-white px-4 py-3 focus:ring-2 focus:ring-primary focus:border-transparent outline-none'
          placeholder='Your Name'
          type='text'
        />
      </div>
      <div>
        <label className='block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1'>
          Email
        </label>
        <input
          className='w-full rounded-lg border-gray-300 dark:border-[#283339] bg-white dark:bg-[#111618] text-gray-900 dark:text-white px-4 py-3 focus:ring-2 focus:ring-primary focus:border-transparent outline-none'
          placeholder='your@email.com'
          type='email'
        />
      </div>
      <div>
        <label className='block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1'>
          Message
        </label>
        <textarea
          className='w-full rounded-lg border-gray-300 dark:border-[#283339] bg-white dark:bg-[#111618] text-gray-900 dark:text-white px-4 py-3 focus:ring-2 focus:ring-primary focus:border-transparent outline-none'
          placeholder='Tell me about your project...'
          rows='4'></textarea>
      </div>
      <motion.button
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className='w-full bg-primary text-white font-bold py-3 rounded-lg hover:bg-sky-600 transition-colors shadow-lg shadow-primary/20'
        type='button'>
        Send Message
      </motion.button>
    </motion.form>
  );
};

export default ContactForm;
