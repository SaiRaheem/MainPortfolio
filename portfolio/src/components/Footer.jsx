import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="bg-cyber-black border-t border-neon-blue/20 py-8 mt-20 relative overflow-hidden">
            {/* Background elements */}
            <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-neon-blue to-transparent opacity-50"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center">
                <div className="mb-4 md:mb-0">
                    <p className="text-gray-400 font-inter text-sm">
                        © {new Date().getFullYear()} Shaik Sai Raheem. <span className="text-neon-blue">System Online.</span>
                    </p>
                </div>

                <div className="flex space-x-6">
                    <a href="https://github.com/sairaheem" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-neon-blue transition-colors text-xl hover:text-glow">
                        <FaGithub />
                    </a>
                    <a href="https://linkedin.com/in/sairaheem" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-neon-blue transition-colors text-xl hover:text-glow">
                        <FaLinkedin />
                    </a>
                    <a href="mailto:sairaheem2005@gmail.com" className="text-gray-400 hover:text-neon-blue transition-colors text-xl hover:text-glow">
                        <FaEnvelope />
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
