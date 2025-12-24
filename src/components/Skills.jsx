import React from 'react';
import { motion } from 'framer-motion';

const skillsData = [
    { category: "Languages", skills: ["Python", "Java", "C", "JavaScript"] },
    { category: "Frontend", skills: ["HTML5", "CSS3", "React.js", "Tailwind CSS"] },
    { category: "Backend", skills: ["Node.js", "Express.js", "Django", "REST APIs"] },
    { category: "Databases", skills: ["MongoDB", "MySQL", "SQL"] },
    { category: "Tools", skills: ["Git", "GitHub", "Postman", "VS Code"] },
    { category: "Cybersecurity", skills: ["Nmap", "Wireshark", "CTF Tools"] }
];

const Skills = () => {
    return (
        <section id="skills" className="py-20 bg-cyber-black/[0.8]">
            <div className="max-w-6xl mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <h2 className="text-3xl md:text-4xl font-orbitron font-bold text-center mb-16">
                        <span className="text-neon-purple">&lt;</span> Technical Skills <span className="text-neon-purple">/&gt;</span>
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {skillsData.map((category, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ delay: index * 0.1, duration: 0.5 }}
                                className="bg-gray-900/40 border border-gray-800 rounded-lg p-6 hover:border-neon-blue/50 transition-colors duration-300"
                            >
                                <h3 className="text-xl font-orbitron text-neon-blue mb-4 border-b border-gray-800 pb-2">{category.category}</h3>
                                <div className="flex flex-wrap gap-2">
                                    {category.skills.map((skill, idx) => (
                                        <span key={idx} className="bg-gray-800 text-gray-300 text-sm px-3 py-1 rounded-full border border-gray-700 hover:border-neon-pink hover:text-neon-pink transition-all cursor-default">
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Skills;
