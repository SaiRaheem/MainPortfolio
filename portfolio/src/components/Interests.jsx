import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaDumbbell, FaChessKnight } from 'react-icons/fa';
import { MdSportsCricket } from 'react-icons/md';

const hobbies = [
    {
        id: 'calisthenics',
        title: 'Calisthenics',
        icon: <FaDumbbell />,
        color: 'text-neon-green',
        borderColor: 'border-neon-green',
        bgGlow: 'bg-neon-green/10',
        stats: [
            { label: 'Handstand Pushups', value: 'Unlocked', barColor: 'bg-neon-green' },
            { label: 'Muscle Up', value: 'Learning...', barColor: 'bg-yellow-400' },
            { label: 'Planche', value: '15%', barColor: 'bg-red-500' }
        ],
        description: "Mastering bodyweight control. Gravity is just a suggestion."
    },
    {
        id: 'cricket',
        title: 'Cricket',
        icon: <MdSportsCricket />,
        color: 'text-neon-blue',
        borderColor: 'border-neon-blue',
        bgGlow: 'bg-neon-blue/10',
        stats: [
            { label: 'Reaction Time', value: '0.4s', barColor: 'bg-neon-blue' },
            { label: 'Strategy', value: 'High', barColor: 'bg-neon-blue' },
            { label: 'Teamwork', value: 'Captain', barColor: 'bg-neon-blue' }
        ],
        description: "Tactical gameplay on the field. Calculated risks and execution."
    },
    {
        id: 'chess',
        title: 'Chess',
        icon: <FaChessKnight />,
        color: 'text-neon-pink',
        borderColor: 'border-neon-pink',
        bgGlow: 'bg-neon-pink/10',
        stats: [
            { label: 'Pattern Recog.', value: 'Advanced', barColor: 'bg-neon-pink' },
            { label: 'Problem Solving', value: 'Elite', barColor: 'bg-neon-pink' },
            { label: 'Elo Rating', value: '1200+', barColor: 'bg-neon-pink' }
        ],
        description: "Strategic warfare on 64 squares. Anticipating the opponent's next 5 moves."
    }
];

const Interests = () => {
    const [activeHobby, setActiveHobby] = useState(null);

    return (
        <section className="py-20 relative">
            <div className="max-w-7xl mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <h2 className="text-3xl md:text-4xl font-orbitron font-bold text-center mb-16">
                        <span className="text-neon-purple">&lt;</span> System Modules: Hobbies <span className="text-neon-purple">/&gt;</span>
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {hobbies.map((hobby) => (
                            <motion.div
                                key={hobby.id}
                                className={`relative p-6 rounded-lg border ${hobby.borderColor} ${hobby.bgGlow} backdrop-blur-sm cursor-pointer overflow-hidden group`}
                                whileHover={{ scale: 1.05 }}
                                onClick={() => setActiveHobby(activeHobby === hobby.id ? null : hobby.id)}
                            >
                                <div className={`text-5xl ${hobby.color} mb-4 flex justify-center group-hover:drop-shadow-[0_0_10px_currentColor] transition-all`}>
                                    {hobby.icon}
                                </div>
                                <h3 className={`text-2xl font-orbitron font-bold text-center text-white mb-2`}>{hobby.title}</h3>
                                <p className="text-gray-400 text-center font-inter text-sm mb-6">{hobby.description}</p>

                                {/* Creating a mini visual "hologram" line */}
                                <div className={`h-[1px] w-full bg-gradient-to-r from-transparent via-${hobby.color.replace('text-', '')} to-transparent opacity-50 mb-6`}></div>

                                <div className="space-y-4">
                                    {hobby.stats.map((stat, idx) => (
                                        <div key={idx}>
                                            <div className="flex justify-between text-xs font-orbitron text-gray-300 mb-1">
                                                <span>{stat.label}</span>
                                                <span className={hobby.color}>{stat.value}</span>
                                            </div>
                                            <div className="h-1.5 w-full bg-gray-800 rounded-full overflow-hidden">
                                                <motion.div
                                                    initial={{ width: 0 }}
                                                    whileInView={{ width: '100%' }} // Simple full width for "Unlocked" or calculate based on value? 
                                                    // For "15%" we can parse, but for strings let's just create a pulsing effect 
                                                    animate={{
                                                        width: stat.value.includes('%') ? stat.value : '100%',
                                                        opacity: [0.6, 1, 0.6]
                                                    }}
                                                    transition={{ duration: 2, repeat: Infinity }}
                                                    className={`h-full ${stat.barColor}`}
                                                />
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Interests;
