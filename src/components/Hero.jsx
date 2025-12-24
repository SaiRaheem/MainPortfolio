import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
    const roles = ["Full Stack Developer", "MERN Stack", "Python Developer", "Automation Engineer"];
    const [currentRole, setCurrentRole] = useState(0);
    const [displayText, setDisplayText] = useState("");
    const [isDeleting, setIsDeleting] = useState(false);

    useEffect(() => {
        const handleTyping = () => {
            const fullText = roles[currentRole];

            if (isDeleting) {
                setDisplayText(prev => fullText.substring(0, prev.length - 1));
            } else {
                setDisplayText(prev => fullText.substring(0, prev.length + 1));
            }

            if (!isDeleting && displayText === fullText) {
                setTimeout(() => setIsDeleting(true), 2000); // Wait before deleting
            } else if (isDeleting && displayText === "") {
                setIsDeleting(false);
                setCurrentRole((prev) => (prev + 1) % roles.length);
            }
        };

        const timer = setTimeout(handleTyping, isDeleting ? 50 : 150);
        return () => clearTimeout(timer);
    }, [displayText, isDeleting, currentRole, roles]);

    return (
        <section id="home" className="min-h-[90vh] flex items-center justify-center relative overflow-hidden">
            {/* Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-neon-blue/10 rounded-full blur-[100px] -z-10"></div>

            <div className="text-center z-10 px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <h2 className="text-neon-blue font-orbitron text-lg md:text-xl mb-4 tracking-widest uppercase">
                        &lt;System.Initialize /&gt;
                    </h2>
                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold font-orbitron text-white mb-6 text-glow">
                        Hi, I’m <span className="text-neon-green">Shaik Sai Raheem</span>
                    </h1>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5, duration: 0.8 }}
                    className="h-12 md:h-16 mb-8"
                >
                    <span className="text-xl md:text-3xl font-inter text-gray-300">
                        I am a <span className="text-neon-pink font-semibold">{displayText}</span>
                        <span className="animate-blink text-neon-pink">|</span>
                    </span>
                </motion.div>

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.8, duration: 0.8 }}
                    className="max-w-2xl mx-auto text-gray-400 mb-10 text-lg md:text-xl"
                >
                    Cyber-Inspired Builder crafting responsive web apps and automation scripts.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1, duration: 0.8 }}
                    className="flex flex-col md:flex-row gap-6 justify-center"
                >
                    <a href="#projects" className="px-8 py-3 bg-transparent border border-neon-blue text-neon-blue font-orbitron font-bold tracking-wide hover:bg-neon-blue/10 hover:shadow-[0_0_20px_rgba(0,243,255,0.4)] transition-all duration-300 rounded-sm">
                        View Projects
                    </a>
                    <a href="/resume.pdf" download className="px-8 py-3 bg-neon-purple/10 border border-neon-purple text-neon-purple font-orbitron font-bold tracking-wide hover:bg-neon-purple/20 hover:shadow-[0_0_20px_rgba(188,19,254,0.4)] transition-all duration-300 rounded-sm">
                        Download Resume
                    </a>
                    <a href="#contact" className="px-8 py-3 bg-transparent border border-neon-green text-neon-green font-orbitron font-bold tracking-wide hover:bg-neon-green/10 hover:shadow-[0_0_20px_rgba(0,255,65,0.4)] transition-all duration-300 rounded-sm">
                        Contact Me
                    </a>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
