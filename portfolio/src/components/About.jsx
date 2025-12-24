import React from 'react';
import { motion } from 'framer-motion';
import CyberCard from './CyberCard';

const About = () => {
    return (
        <section id="about" className="py-20 relative">
            <div className="max-w-4xl mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <h2 className="text-3xl md:text-4xl font-orbitron font-bold text-center mb-12">
                        <span className="text-neon-blue">&lt;</span> About Me <span className="text-neon-blue">/&gt;</span>
                    </h2>

                    <CyberCard className="p-8 md:p-12">
                        <p className="text-gray-300 text-lg leading-relaxed font-inter mb-6">
                            I am a results-driven <span className="text-neon-green font-semibold">Full Stack Developer</span> and software enthusiast with a passion for building scalable web applications and automation tools.
                            My journey began with MERN Stack development, but my curiosity led me to explore <span className="text-neon-pink font-semibold">Python Automations</span>, Machine Learning, and Cybersecurity.
                        </p>
                        <p className="text-gray-300 text-lg leading-relaxed font-inter mb-6">
                            With a strong foundation in <span className="text-neon-purple font-semibold">Data Structures & Algorithms</span> (300+ LeetCode problems solved), I love solving complex engineering problems.
                            I have hands-on experience building platforms like Property Booking systems and automated Social Media bots.
                        </p>
                        <p className="text-gray-300 text-lg leading-relaxed font-inter">
                            Currently, I am looking for entry-level software/full-stack roles where I can contribute to high-impact projects while continuing to upskill in emerging technologies.
                        </p>
                    </CyberCard>
                </motion.div>
            </div>
        </section>
    );
};

export default About;
