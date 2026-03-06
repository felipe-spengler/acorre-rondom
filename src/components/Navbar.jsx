import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Zap } from 'lucide-react';
import { motion } from 'framer-motion';

import logoImg from '../assets/logo.jpg';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Home', path: '/' },
        { name: 'Inscrições', path: '/inscricoes' },
        { name: 'Contato', path: '/contato' },
    ];

    return (
        <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'py-4 glass border-b border-white/10' : 'py-6 bg-transparent'}`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center">
                    <Link to="/" className="flex items-center space-x-3 group">
                        <motion.div
                            whileHover={{ rotate: -5, scale: 1.1 }}
                            className="w-10 h-10 rounded-lg overflow-hidden border border-primary transition-transform shadow-[0_0_15px_rgba(255,77,0,0.3)] group-hover:shadow-[0_0_25px_rgba(255,77,0,0.6)]"
                        >
                            <img src={logoImg} alt="ACORRE" className="w-full h-full object-cover" />
                        </motion.div>
                        <motion.span
                            initial={{ x: 0 }}
                            whileHover={{ x: 5, skewX: -10 }}
                            className="text-2xl font-black tracking-tighter italic bg-gradient-to-r from-white via-white to-primary bg-[length:200%_100%] bg-clip-text hover:text-transparent transition-all duration-500 hover:bg-[100%_0%]"
                        >
                            ACORRE
                        </motion.span>
                    </Link>

                    {/* Desktop Links */}
                    <div className="hidden md:flex items-center space-x-8">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                to={link.path}
                                className={`text-sm font-medium transition-colors hover:text-primary ${location.pathname === link.path ? 'text-primary' : 'text-gray-300'}`}
                            >
                                {link.name}
                            </Link>
                        ))}
                        <Link to="/inscricoes" className="bg-primary text-black px-6 py-2 rounded-full font-bold text-sm hover:bg-primary-light transition-all transform hover:scale-105">
                            INSCREVA-SE
                        </Link>
                    </div>

                    {/* Mobile menu button */}
                    <div className="md:hidden">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="text-gray-300 hover:text-white p-2"
                        >
                            {isOpen ? <X size={28} /> : <Menu size={28} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="md:hidden glass border-b border-white/10 h-screen absolute top-full left-0 w-full"
                >
                    <div className="px-4 pt-8 pb-3 space-y-4">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                to={link.path}
                                onClick={() => setIsOpen(false)}
                                className={`block text-2xl font-bold py-4 border-b border-white/5 ${location.pathname === link.path ? 'text-primary' : 'text-white'}`}
                            >
                                {link.name}
                            </Link>
                        ))}
                        <div className="pt-4">
                            <Link
                                to="/inscricoes"
                                onClick={() => setIsOpen(false)}
                                className="block w-full text-center bg-primary text-black py-4 rounded-xl font-black text-lg"
                            >
                                INSCREVA-SE AGORA
                            </Link>
                        </div>
                    </div>
                </motion.div>
            )}
        </nav>
    );
};

export default Navbar;
