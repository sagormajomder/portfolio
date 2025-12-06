import { motion } from 'framer-motion';

const skillsData = [
    {
        category: 'Frontend',
        icon: 'web',
        items: ['React.js', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Redux', 'HTML5/CSS3']
    },
    {
        category: 'Backend',
        icon: 'dns',
        items: ['Node.js', 'Express', 'Python', 'PostgreSQL', 'MongoDB', 'Firebase']
    },
    {
        category: 'Tools & DevOps',
        icon: 'build',
        items: ['Git & GitHub', 'Docker', 'AWS', 'Figma', 'Jira']
    }
];

const Skills = () => {
    return (
        <section className="px-4 md:px-40 flex justify-center py-16 bg-background-light dark:bg-[#111618]" id="skills">
            <div className="layout-content-container flex flex-col max-w-[960px] flex-1">
                <div className="px-4 pb-8 pt-5 text-center">
                    <h2 className="text-gray-900 dark:text-white text-3xl font-bold leading-tight tracking-[-0.015em]">
                        Technical Skills
                    </h2>
                    <p className="text-gray-500 dark:text-gray-400 mt-2">The tools and technologies I use to bring ideas to life.</p>
                </div>
                <div className="px-4 grid gap-8">
                    {skillsData.map((skillGroup, index) => (
                        <motion.div
                            key={skillGroup.category}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ delay: index * 0.2, duration: 0.5 }}
                            viewport={{ once: true }}
                        >
                            <h3 className="text-gray-900 dark:text-white text-xl font-semibold mb-4 flex items-center gap-2">
                                <span className="material-symbols-outlined text-primary">{skillGroup.icon}</span> {skillGroup.category}
                            </h3>
                            <div className="flex flex-wrap gap-3">
                                {skillGroup.items.map((item) => (
                                    <motion.span
                                        key={item}
                                        whileHover={{ scale: 1.1 }}
                                        className="px-4 py-2 rounded-full bg-white dark:bg-[#1a2329] border border-gray-200 dark:border-[#283339] text-gray-700 dark:text-gray-200 text-sm font-medium shadow-sm cursor-default"
                                    >
                                        {item}
                                    </motion.span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
