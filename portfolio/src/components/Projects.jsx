import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import CyberCard from './CyberCard';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const projectsData = [
    {
        title: "Property Listing & Booking Platform",
        description: "A responsive full-stack platform for hotel/property listings with search, filtering, and booking features.",
        techStack: ["React", "Node.js", "Express.js", "MongoDB", "REST APIs"],
        features: [
            "Advanced Search & Filtering System",
            "Secure Booking Flow with Payment Integration",
            "Admin Dashboard for Property Management",
            "User Reviews and Ratings System"
        ],
        github: "https://github.com/sairaheem",
        demo: "#",
        architecture: "Client (React) -> Load Balancer -> API Gateway (Express) -> Controller -> Service -> DB (MongoDB)"
    },
    {
        title: "Automated Instagram Reels Bot",
        description: "A Python-based automation system that edits, schedules, and posts reels 24/7.",
        techStack: ["Python", "MoviePy", "Cloudinary", "Instagram Graph API"],
        features: [
            "Auto-Video Editing & Captioning",
            "Scheduled Posting via Instagram Graph API",
            "Cloud Storage Integration (Cloudinary)",
            "Error Logging & Notification System"
        ],
        github: "https://github.com/sairaheem",
        demo: "#",
        architecture: "Cron Job -> Python Script -> Media Processing (MoviePy) -> Cloud Upload -> Social API"
    }
];

const Projects = () => {
    const [selectedProject, setSelectedProject] = useState(null);

    return (
        <section id="projects" className="py-20 relative">
            <div className="max-w-7xl mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <h2 className="text-3xl md:text-4xl font-orbitron font-bold text-center mb-16">
                        <span className="text-neon-pink">&lt;</span> Featured Projects <span className="text-neon-pink">/&gt;</span>
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {projectsData.map((project, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.2, duration: 0.5 }}
                                onClick={() => setSelectedProject(project)}
                                className="cursor-pointer"
                            >
                                <CyberCard className="h-full flex flex-col hover:bg-gray-900/80 transition-all duration-300 group">
                                    <h3 className="text-2xl font-orbitron text-white mb-4 group-hover:text-neon-blue transition-colors">{project.title}</h3>

                                    <p className="text-gray-400 mb-6 flex-grow font-inter line-clamp-3">
                                        {project.description}
                                    </p>

                                    <div className="flex flex-wrap gap-2 mb-6">
                                        {project.techStack.slice(0, 3).map((tech, idx) => (
                                            <span key={idx} className="text-xs font-orbitron text-neon-green border border-neon-green/30 px-2 py-1 rounded-sm">
                                                {tech}
                                            </span>
                                        ))}
                                        {project.techStack.length > 3 && (
                                            <span className="text-xs font-orbitron text-gray-500 border border-gray-700 px-2 py-1 rounded-sm">+{project.techStack.length - 3}</span>
                                        )}
                                    </div>
                                    <div className="text-neon-blue text-sm font-orbitron text-right group-hover:underline">Click for Details &gt;&gt;</div>
                                </CyberCard>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>

            {/* Project Modal */}
            <AnimatePresence>
                {selectedProject && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setSelectedProject(null)}
                        className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
                    >
                        <motion.div
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.9, opacity: 0 }}
                            onClick={(e) => e.stopPropagation()}
                            className="bg-cyber-black border border-neon-pink w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-lg shadow-[0_0_50px_rgba(255,0,255,0.2)] relative"
                        >
                            <button
                                onClick={() => setSelectedProject(null)}
                                className="absolute top-4 right-4 text-gray-400 hover:text-white"
                            >
                                <span className="text-2xl">&times;</span>
                            </button>

                            <div className="p-8">
                                <h2 className="text-3xl font-orbitron text-white mb-2">{selectedProject.title}</h2>
                                <div className="h-1 w-20 bg-neon-pink mb-6"></div>

                                <p className="text-gray-300 font-inter mb-8 text-lg">{selectedProject.description}</p>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                                    <div>
                                        <h4 className="text-neon-blue font-orbitron mb-4 border-b border-gray-800 pb-2">Key Features</h4>
                                        <ul className="space-y-2">
                                            {selectedProject.features.map((feature, i) => (
                                                <li key={i} className="text-gray-400 flex items-start gap-2">
                                                    <span className="text-neon-pink mt-1">&gt;</span> {feature}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                    <div>
                                        <h4 className="text-neon-green font-orbitron mb-4 border-b border-gray-800 pb-2">Tech Stack</h4>
                                        <div className="flex flex-wrap gap-2">
                                            {selectedProject.techStack.map((tech, i) => (
                                                <span key={i} className="bg-gray-900 border border-gray-700 text-gray-300 px-3 py-1 rounded text-sm">{tech}</span>
                                            ))}
                                        </div>
                                    </div>
                                </div>

                                <div className="bg-gray-900/50 p-6 rounded border border-gray-700 mb-8">
                                    <h4 className="text-neon-purple font-orbitron mb-2">System Architecture</h4>
                                    <p className="font-mono text-sm text-gray-400 bg-black p-4 rounded border-l-4 border-neon-purple">
                                        {selectedProject.architecture}
                                    </p>
                                </div>

                                <div className="flex gap-4 justify-end">
                                    <a href={selectedProject.github} target="_blank" rel="noopener noreferrer" className="px-6 py-2 border border-neon-blue text-neon-blue hover:bg-neon-blue hover:text-black transition-colors font-orbitron font-bold rounded-sm">
                                        View Code
                                    </a>
                                    <a href={selectedProject.demo} className="px-6 py-2 border border-neon-pink text-neon-pink hover:bg-neon-pink hover:text-black transition-colors font-orbitron font-bold rounded-sm opacity-50 cursor-not-allowed">
                                        Live Demo
                                    </a>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
};

export default Projects;
