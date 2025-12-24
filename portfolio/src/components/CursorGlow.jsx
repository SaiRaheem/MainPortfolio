import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const CursorGlow = () => {
    const [position, setPosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const handleMouseMove = (e) => {
            setPosition({ x: e.clientX, y: e.clientY });
        };

        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    return (
        <>
            <motion.div
                className="fixed top-0 left-0 w-8 h-8 rounded-full border border-neon-blue pointer-events-none z-[9999] mix-blend-screen"
                animate={{
                    x: position.x - 16,
                    y: position.y - 16,
                }}
                transition={{ type: "spring", stiffness: 500, damping: 28 }}
            />
            <motion.div
                className="fixed top-0 left-0 w-2 h-2 bg-neon-pink rounded-full pointer-events-none z-[9999]"
                animate={{
                    x: position.x - 4,
                    y: position.y - 4,
                }}
                transition={{ type: "spring", stiffness: 1500, damping: 100 }}
            />
        </>
    );
};

export default CursorGlow;
