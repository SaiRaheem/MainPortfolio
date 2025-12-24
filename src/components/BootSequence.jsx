import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const BootSequence = ({ onComplete }) => {
    const [lines, setLines] = useState([]);

    const bootLines = [
        "Initializing System Core...",
        "Loading Kernel Modules...",
        "Mounting File Systems...",
        "Establishing Secure Connection...",
        "Access Granted.",
        "Welcome, User."
    ];

    useEffect(() => {
        let delay = 0;
        bootLines.forEach((line, index) => {
            delay += Math.random() * 300 + 200;
            setTimeout(() => {
                setLines(prev => [...prev, line]);
                if (index === bootLines.length - 1) {
                    setTimeout(onComplete, 800);
                }
            }, delay);
        });
    }, []);

    return (
        <div className="fixed inset-0 bg-cyber-black z-[100] flex items-center justify-center font-orbitron text-neon-green p-8">
            <div className="w-full max-w-2xl">
                {lines.map((line, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="mb-2"
                    >
                        <span className="opacity-50 text-sm mr-4">[{new Date().toLocaleTimeString()}]</span>
                        {line}
                    </motion.div>
                ))}
                <motion.div
                    animate={{ opacity: [0, 1, 0] }}
                    transition={{ repeat: Infinity, duration: 0.8 }}
                    className="w-3 h-5 bg-neon-green inline-block ml-2"
                />
            </div>
        </div>
    );
};

export default BootSequence;
