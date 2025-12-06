import { motion } from 'framer-motion';

const Footer = () => {
    return (
        <footer className="bg-[#111618] border-t border-[#283339] py-8">
            <div className="px-4 md:px-40 flex justify-center">
                <div className="layout-content-container flex flex-col max-w-[960px] flex-1 items-center gap-6">
                    <div className="flex items-center gap-2 text-white">
                        <div className="size-6 text-primary">
                            <span className="material-symbols-outlined text-2xl">terminal</span>
                        </div>
                        <span className="text-xl font-bold">DevPortfolio</span>
                    </div>
                    <div className="flex gap-6">
                        <motion.a whileHover={{ scale: 1.2, color: '#13a4ec' }} className="text-gray-400 transition-colors" href="#">
                            <span className="material-symbols-outlined">public</span>
                        </motion.a>
                        <motion.a whileHover={{ scale: 1.2, color: '#13a4ec' }} className="text-gray-400 transition-colors" href="#">
                            <span className="material-symbols-outlined">code</span>
                        </motion.a>
                        <motion.a whileHover={{ scale: 1.2, color: '#13a4ec' }} className="text-gray-400 transition-colors" href="#">
                            <span className="material-symbols-outlined">alternate_email</span>
                        </motion.a>
                    </div>
                    <p className="text-gray-500 text-sm">© 2023 Alex Morgan. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
