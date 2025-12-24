import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Contact = () => {
    const [formState, setFormState] = useState({ name: '', email: '', message: '' });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSent, setIsSent] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        // Simulate API call
        setTimeout(() => {
            setIsSubmitting(false);
            setIsSent(true);
            setFormState({ name: '', email: '', message: '' });
            setTimeout(() => setIsSent(false), 3000);
        }, 1500);
    };

    return (
        <section id="contact" className="py-20 relative overflow-hidden">
            {/* Background glow for contact */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-neon-purple/20 rounded-full blur-[100px] -z-10"></div>

            <div className="max-w-4xl mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-12"
                >
                    <h2 className="text-3xl md:text-4xl font-orbitron font-bold mb-6">
                        <span className="text-neon-blue">&lt;</span> Initiate Contact <span className="text-neon-blue">/&gt;</span>
                    </h2>
                    <p className="text-gray-400 font-inter">
                        Have a project in mind or just want to say hi? Send me a signal.
                    </p>
                </motion.div>

                <div className="relative">
                    <AnimatePresence>
                        {isSent && (
                            <motion.div
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.8 }}
                                className="absolute inset-0 z-10 flex items-center justify-center bg-black/80 backdrop-blur-sm rounded-lg border border-neon-green"
                            >
                                <div className="text-center">
                                    <h3 className="text-2xl font-orbitron text-neon-green mb-2">TRANSMISSION SUCCESSFUL</h3>
                                    <p className="text-gray-400">Message received. Stand by for response.</p>
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>

                    <div className="bg-gray-900/50 p-8 rounded-lg border border-neon-blue/20 shadow-[0_0_15px_rgba(0,243,255,0.1)] backdrop-blur-sm">
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-sm font-orbitron text-neon-blue">Name_</label>
                                    <input
                                        required
                                        type="text"
                                        placeholder="Enter your name"
                                        value={formState.name}
                                        onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                                        className="w-full bg-black/50 border border-gray-700 rounded-md p-3 text-white focus:border-neon-blue focus:outline-none focus:shadow-[0_0_10px_rgba(0,243,255,0.3)] transition-all"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-orbitron text-neon-blue">Email_</label>
                                    <input
                                        required
                                        type="email"
                                        placeholder="Enter your email"
                                        value={formState.email}
                                        onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                                        className="w-full bg-black/50 border border-gray-700 rounded-md p-3 text-white focus:border-neon-blue focus:outline-none focus:shadow-[0_0_10px_rgba(0,243,255,0.3)] transition-all"
                                    />
                                </div>
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-orbitron text-neon-blue">Message_</label>
                                <textarea
                                    required
                                    rows="5"
                                    placeholder="Type your message..."
                                    value={formState.message}
                                    onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                                    className="w-full bg-black/50 border border-gray-700 rounded-md p-3 text-white focus:border-neon-blue focus:outline-none focus:shadow-[0_0_10px_rgba(0,243,255,0.3)] transition-all resize-none"
                                ></textarea>
                            </div>
                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className={`w-full py-4 border font-orbitron font-bold tracking-widest transition-all duration-300 rounded-sm uppercase
                                    ${isSubmitting
                                        ? 'bg-gray-800 border-gray-600 text-gray-400 cursor-wait'
                                        : 'bg-neon-blue/10 border-neon-blue text-neon-blue hover:bg-neon-blue hover:text-black'
                                    }
                                `}
                            >
                                {isSubmitting ? 'Transmitting...' : 'Send Transmission'}
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
