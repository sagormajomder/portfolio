'use client';

import ContactForm from './contact/ContactForm';
import ContactHeader from './contact/ContactHeader';
import ContactInfo from './contact/ContactInfo';

const Contact = () => {
  return (
    <section
      className='px-4 flex justify-center py-16 bg-white dark:bg-[#151c20] overflow-hidden'
      id='contact'>
      <div className='layout-content-container flex flex-col max-w-7xl flex-1'>
        <ContactHeader />
        <div className='px-4 grid grid-cols-1 md:grid-cols-2 gap-10'>
          <ContactInfo />
          <ContactForm />
        </div>
      </div>
    </section>
  );
};

export default Contact;
