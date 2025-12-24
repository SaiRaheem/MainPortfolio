import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaBars, FaTimes, FaGithub, FaLinkedin } from 'react-icons/fa';

const Navbar = ({ activeSection, setActiveSection }) => {
    const [isOpen, setIsOpen] = useState(false);

    const navLinks = [
        { name: 'Home', id: 'home' },
        { name: 'About', id: 'about' },
        { name: 'Skills', id: 'skills' },
        { name: 'Projects', id: 'projects' },
        { name: 'Interests', id: 'interests' },
        { name: 'Contact', id: 'contact' },
    ];

    return (
        <nav className="fixed top-0 left-0 w-full z-50 bg-cyber-black/90 backdrop-blur-md border-b border-neon-blue/30 shadow-[0_0_15px_rgba(0,243,255,0.1)]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-20">
                    {/* Logo */}
                    <div
                        className="flex-shrink-0 cursor-pointer group"
                        onClick={() => setActiveSection('home')}
                    >
                        <h1 className="text-2xl font-orbitron font-bold text-white tracking-wider group-hover:text-neon-blue transition-colors duration-300">
                            SAI<span className="text-neon-blue">.DEV</span>
                        </h1>
                    </div>

                    {/* Desktop Menu */}
                    <div className="hidden md:block">
                        <div className="ml-10 flex items-baseline space-x-8">
                            {navLinks.map((link) => (
                                <button
                                    key={link.name}
                                    onClick={() => setActiveSection(link.id)}
                                    className={`px-3 py-2 rounded-md text-sm font-medium font-orbitron tracking-wide transition-all duration-300 hover:text-glow relative ${activeSection === link.id
                                            ? 'text-neon-blue'
                                            : 'text-gray-300 hover:text-neon-blue'
                                        }`}
                                >
                                    {link.name}
                                    {activeSection === link.id && (
                                        <motion.div
                                            layoutId="underline"
                                            className="absolute left-0 right-0 bottom-0 h-0.5 bg-neon-blue shadow-[0_0_10px_#00f3ff]"
                                        />
                                    )}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Socials Desktop */}
                    <div className="hidden md:flex items-center space-x-4">
                        <a href="https://github.com/sairaheem" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-neon-blue transition-colors text-xl">
                            <FaGithub />
                        </a>
                        <a href="https://linkedin.com/in/sairaheem" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-neon-blue transition-colors text-xl">
                            <FaLinkedin />
                        </a>
                    </div>

                    {/* Mobile menu button */}
                    <div className="-mr-2 flex md:hidden">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-800 focus:outline-none"
                        >
                            {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden bg-cyber-black border-b border-neon-blue/30"
                    >
                        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                            {navLinks.map((link) => (
                                <button
                                    key={link.name}
                                    onClick={() => {
                                        setActiveSection(link.id);
                                        setIsOpen(false);
                                    }}
                                    className={`block px-3 py-2 rounded-md text-base font-medium font-orbitron w-full text-left ${activeSection === link.id
                                            ? 'text-neon-blue bg-gray-900'
                                            : 'text-gray-300 hover:text-neon-blue'
                                        }`}
                                >
                                    {link.name}
                                </button>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;
