import { motion } from 'framer-motion';

const Contact = () => {
    return (
        <section className="px-4 md:px-40 flex justify-center py-16 bg-white dark:bg-[#151c20]" id="contact">
            <div className="layout-content-container flex flex-col max-w-[960px] flex-1">
                <div className="px-4 pb-8 pt-5 text-center">
                    <h2 className="text-gray-900 dark:text-white text-3xl font-bold leading-tight tracking-[-0.015em]">Get In Touch</h2>
                    <p className="text-gray-500 dark:text-gray-400 mt-2">Have a project in mind? Let's discuss.</p>
                </div>
                <div className="px-4 grid grid-cols-1 md:grid-cols-2 gap-10">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        className="space-y-6"
                    >
                        <div className="bg-background-light dark:bg-[#1a2329] p-6 rounded-xl border border-gray-100 dark:border-[#283339]">
                            <h3 className="text-gray-900 dark:text-white text-xl font-bold mb-4">Contact Information</h3>
                            <div className="space-y-4">
                                <div className="flex items-center gap-4">
                                    <div className="size-10 rounded-full bg-primary/20 flex items-center justify-center text-primary">
                                        <span className="material-symbols-outlined">mail</span>
                                    </div>
                                    <div>
                                        <p className="text-sm text-gray-500 dark:text-gray-400">Email</p>
                                        <a className="text-gray-900 dark:text-white font-medium hover:text-primary" href="mailto:alex.morgan@dev.com">alex.morgan@dev.com</a>
                                    </div>
                                </div>
                                <div className="flex items-center gap-4">
                                    <div className="size-10 rounded-full bg-primary/20 flex items-center justify-center text-primary">
                                        <span className="material-symbols-outlined">call</span>
                                    </div>
                                    <div>
                                        <p className="text-sm text-gray-500 dark:text-gray-400">Phone</p>
                                        <p className="text-gray-900 dark:text-white font-medium">+1 (555) 123-4567</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-4">
                                    <div className="size-10 rounded-full bg-primary/20 flex items-center justify-center text-primary">
                                        <span className="material-symbols-outlined">chat</span>
                                    </div>
                                    <div>
                                        <p className="text-sm text-gray-500 dark:text-gray-400">WhatsApp</p>
                                        <a className="text-gray-900 dark:text-white font-medium hover:text-primary" href="#">Chat on WhatsApp</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                    <motion.form
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        className="space-y-4"
                    >
                        <div>
                            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Name</label>
                            <input className="w-full rounded-lg border-gray-300 dark:border-[#283339] bg-white dark:bg-[#111618] text-gray-900 dark:text-white px-4 py-3 focus:ring-2 focus:ring-primary focus:border-transparent outline-none" placeholder="Your Name" type="text" />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Email</label>
                            <input className="w-full rounded-lg border-gray-300 dark:border-[#283339] bg-white dark:bg-[#111618] text-gray-900 dark:text-white px-4 py-3 focus:ring-2 focus:ring-primary focus:border-transparent outline-none" placeholder="your@email.com" type="email" />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Message</label>
                            <textarea className="w-full rounded-lg border-gray-300 dark:border-[#283339] bg-white dark:bg-[#111618] text-gray-900 dark:text-white px-4 py-3 focus:ring-2 focus:ring-primary focus:border-transparent outline-none" placeholder="Tell me about your project..." rows="4"></textarea>
                        </div>
                        <motion.button
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            className="w-full bg-primary text-white font-bold py-3 rounded-lg hover:bg-sky-600 transition-colors shadow-lg shadow-primary/20" type="button"
                        >
                            Send Message
                        </motion.button>
                    </motion.form>
                </div>
            </div>
        </section>
    );
};

export default Contact;
