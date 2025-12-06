import { motion } from 'framer-motion';

const projects = [
  {
    title: 'ShopAdmin Dashboard',
    description:
      'A comprehensive admin dashboard for e-commerce platforms featuring real-time analytics, inventory management, and order tracking.',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDk_cusmnVRnltapveA4CcPnOerwdHoEnJ8iDDfgQ_Ui07XuMHAEkKMSPQffBVg3cUZpuMVzmvpH1xA0-SAsHGoTGwf_0_Y8fWVjDH9pgiAY07wpjR9JGa_WlvUTOQQHWNgSXW2b4D0Wsegl4MT8jXPcKlxR7G309ThBU3BbfKi273Ve6ZO4eq9Q6bdxKseI0fMDWkv0EPVA5NEKGn1F_Mb688haPHo1tfnw2M8zr-WMyiTMWuRDRT_onK8vdNV4w6pssdHvLbo__ov',
    tags: ['React', 'Chart.js', 'Firebase'],
  },
  {
    title: 'TaskMaster App',
    description:
      'A collaborative task management tool that helps teams organize and prioritize projects seamlessly with kanban boards.',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuB4ND8XuMqkDzpCtL1jFkQguInf5FqcDzdf00SlBe4bD3E4ETXZprd-x966Ap6WrCtn3PtJsL7R9roWFNcrFcVqY1PxiYbuOAp6TIq9qVZdHL78Dovyt7tPhbOLm7d1Xse3fH6B5IwlVRTGLswM3wMYU2VarpL4dBTFqtJsG0f7Hct61I9Dpoa6X8kKa042TQyb7iS8Mpc2-r6M2fl7njUwVMJdiPqTP0Le2DdUu-w2RnvRWGwLfGAra9ZaLQMoJiIAfsqhTj7RP6Tq',
    tags: ['Vue.js', 'Node.js', 'Socket.io'],
  },
  {
    title: 'CoinTracker',
    description:
      'A personal finance tracking web application that allows users to monitor their spending habits and set budget goals.',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuC01N1PeaHm5z087R2d4_nImeR3f_GZRTeRx6YQjmYosx72U1OhbaNMYNXoPV3v9jl-1D9xEcDuW0L6Ad5JA8_oyXEvULd0hqs77JFZOM4_Z_5hMrmcqnRVgWtq6_t6hWuzk3U_KjCje_Yx_AglbNkCLmIhLo6Hk96gaUzx_daEXU2kFiakjkeIJYY9ZOpTyfiLgHsBrhj0QFWjh0AEXTe50bU3j45EPfrwak-TmQrp_rMVBMTysXbiB6ML630lY1OLXiVSVmFaNxHF',
    tags: ['Next.js', 'PostgreSQL', 'Prisma'],
  },
];

const Projects = () => {
  return (
    <section
      className='px-4 flex justify-center py-16 bg-white dark:bg-[#151c20]'
      id='projects'>
      <div className='layout-content-container flex flex-col max-w-7xl flex-1'>
        <div className='px-4 pb-8 pt-5 text-center'>
          <h2 className='text-gray-900 dark:text-white text-3xl font-bold leading-tight tracking-[-0.015em]'>
            Featured Projects
          </h2>
          <p className='text-gray-500 dark:text-gray-400 mt-2'>
            A selection of things I've built.
          </p>
        </div>
        <div className='px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8'>
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className='bg-background-light dark:bg-[#1a2329] rounded-xl overflow-hidden shadow-sm border border-gray-100 dark:border-[#283339] hover:shadow-lg transition-all group'>
              <div
                className='h-48 w-full bg-cover bg-center'
                style={{ backgroundImage: `url('${project.image}')` }}></div>
              <div className='p-6 flex flex-col gap-3'>
                <h3 className='text-gray-900 dark:text-white text-xl font-bold'>
                  {project.title}
                </h3>
                <p className='text-gray-600 dark:text-gray-400 text-sm line-clamp-3'>
                  {project.description}
                </p>
                <div className='flex flex-wrap gap-2 mt-2'>
                  {project.tags.map(tag => (
                    <span
                      key={tag}
                      className='px-2 py-1 bg-primary/10 text-primary text-xs font-semibold rounded'>
                      {tag}
                    </span>
                  ))}
                </div>
                <button className='mt-4 w-full py-2 border border-primary text-primary hover:bg-primary hover:text-white rounded-lg text-sm font-semibold transition-colors'>
                  View Details
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
