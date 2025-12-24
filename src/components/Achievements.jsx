import React from 'react';
import { motion } from 'framer-motion';

const achievements = [
    { title: "LeetCode Problems", value: "300+", color: "text-neon-yellow" }, // neon-yellow not defined, stick to palette
    { title: "CSSBattle Challenges", value: "50+", color: "text-neon-pink" },
    { title: "CTF Challenges", value: "Solved", color: "text-neon-blue" },
];

const Achievements = () => {
    return (
        <section className="py-12 bg-gray-900/30 border-y border-neon-blue/10">
            <div className="max-w-7xl mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                    {achievements.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                            className="p-6"
                        >
                            <h3 className={`text-4xl md:text-5xl font-bold font-orbitron mb-2 text-glow ${index === 0 ? 'text-neon-blue' : index === 1 ? 'text-neon-pink' : 'text-neon-green'}`}>
                                {item.value}
                            </h3>
                            <p className="text-gray-400 font-orbitron tracking-wider text-sm md:text-base uppercase">
                                {item.title}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Achievements;
