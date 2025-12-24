import React from 'react';
import { motion } from 'framer-motion';

const CyberCard = ({ children, className = "" }) => {
    return (
        <motion.div
            whileHover={{ scale: 1.02 }}
            className={`relative bg-gray-900/50 backdrop-blur-sm border border-neon-blue/30 p-6 rounded-lg shadow-[0_0_10px_rgba(0,243,255,0.05)] hover:shadow-[0_0_20px_rgba(0,243,255,0.2)] hover:border-neon-blue/60 transition-all duration-300 group overflow-hidden ${className}`}
        >
            {/* Corner accents */}
            <div className="absolute top-0 left-0 w-2 h-2 border-t-2 border-l-2 border-neon-blue opacity-50 group-hover:opacity-100 transition-opacity" />
            <div className="absolute top-0 right-0 w-2 h-2 border-t-2 border-r-2 border-neon-blue opacity-50 group-hover:opacity-100 transition-opacity" />
            <div className="absolute bottom-0 left-0 w-2 h-2 border-b-2 border-l-2 border-neon-blue opacity-50 group-hover:opacity-100 transition-opacity" />
            <div className="absolute bottom-0 right-0 w-2 h-2 border-b-2 border-r-2 border-neon-blue opacity-50 group-hover:opacity-100 transition-opacity" />

            {children}
        </motion.div>
    );
};

export default CyberCard;
