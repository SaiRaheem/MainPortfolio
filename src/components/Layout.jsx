import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

const Layout = ({ children, activeSection, setActiveSection }) => {
    return (
        <div className="min-h-screen flex flex-col relative z-0">
            <div className="fixed inset-0 bg-cyber-black -z-10">
                {/* Background scanner line optional */}
                <div className="absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[length:100%_4px,3px_100%] pointer-events-none" />
            </div>
            <Navbar activeSection={activeSection} setActiveSection={setActiveSection} />
            <main className="flex-grow pt-20 px-4 md:px-8 max-w-7xl mx-auto w-full">
                {children}
            </main>
            <Footer />
        </div>
    );
};

export default Layout;
