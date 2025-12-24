import React from 'react';
import { motion } from 'framer-motion';

const experienceData = [
    {
        title: "Python Full Stack Intern",
        organization: "Eduskills (Remote)",
        period: "Mar 2024 – Jun 2024",
        description: "Built CRUD applications using Django, HTML, CSS, and SQL. Collaborated on debugging and testing in a team environment. Gained hands-on exposure to backend development and MVC architecture."
    }
];

const educationData = [
    {
        title: "B.Tech - Computer Science & Engineering",
        organization: "RVR & JC College of Engineering, Guntur",
        period: "June 2022 – Present",
        description: "CGPA: 7.3 / 10. Focusing on Data Structures, Algorithms, and Full Stack Development."
    }
];

const Experience = () => {
    return (
        <section id="experience" className="py-20 relative bg-cyber-black/[0.8]">
            <div className="max-w-7xl mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <h2 className="text-3xl md:text-4xl font-orbitron font-bold text-center mb-16">
                        <span className="text-neon-green">&lt;</span> Career & Education <span className="text-neon-green">/&gt;</span>
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                        {/* Experience Column */}
                        <div>
                            <h3 className="text-2xl font-orbitron text-neon-blue mb-8 flex items-center gap-3">
                                <span className="w-2 h-8 bg-neon-blue rounded-sm"></span>
                                Professional Experience
                            </h3>
                            <div className="space-y-8 border-l-2 border-gray-800 ml-3 pl-8 relative">
                                {experienceData.map((item, index) => (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, x: -20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        transition={{ delay: index * 0.2, duration: 0.5 }}
                                        className="relative"
                                    >
                                        <div className="absolute -left-[41px] top-0 w-5 h-5 bg-cyber-black border-2 border-neon-blue rounded-full"></div>
                                        <div className="bg-gray-900/40 p-6 rounded-lg border border-gray-800 hover:border-neon-blue/50 transition-colors duration-300">
                                            <span className="text-sm font-orbitron text-neon-green mb-2 block tracking-wider">{item.period}</span>
                                            <h4 className="text-xl font-bold text-white mb-1">{item.title}</h4>
                                            <h5 className="text-gray-400 mb-4 text-sm">{item.organization}</h5>
                                            <p className="text-gray-300 text-sm leading-relaxed">
                                                {item.description}
                                            </p>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </div>

                        {/* Education Column */}
                        <div>
                            <h3 className="text-2xl font-orbitron text-neon-pink mb-8 flex items-center gap-3">
                                <span className="w-2 h-8 bg-neon-pink rounded-sm"></span>
                                Education
                            </h3>
                            <div className="space-y-8 border-l-2 border-gray-800 ml-3 pl-8 relative">
                                {educationData.map((item, index) => (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, x: -20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        transition={{ delay: index * 0.2, duration: 0.5 }}
                                        className="relative"
                                    >
                                        <div className="absolute -left-[41px] top-0 w-5 h-5 bg-cyber-black border-2 border-neon-pink rounded-full"></div>
                                        <div className="bg-gray-900/40 p-6 rounded-lg border border-gray-800 hover:border-neon-pink/50 transition-colors duration-300">
                                            <span className="text-sm font-orbitron text-neon-pink mb-2 block tracking-wider">{item.period}</span>
                                            <h4 className="text-xl font-bold text-white mb-1">{item.title}</h4>
                                            <h5 className="text-gray-400 mb-4 text-sm">{item.organization}</h5>
                                            <p className="text-gray-300 text-sm leading-relaxed">
                                                {item.description}
                                            </p>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Experience;
