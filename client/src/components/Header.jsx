import React, { useState, useEffect } from 'react';

const Header = ({ onBookNow }) => {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Home', href: '#home' },
        { name: 'About Us', href: '#about' },
        { name: 'Nearby Places', href: '#places' },
        { name: 'Gallery', href: '#gallery' },
        { name: 'Contact Us', href: '#contact' },
    ];

    return (
        <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'}`}>
            <div className="container mx-auto px-4 flex justify-between items-center">
                <div className={`text-2xl font-serif font-bold ${isScrolled ? 'text-primary' : 'text-white'}`}>
                    <a href="#home">The Mellows</a>
                </div>

                <nav className="hidden md:flex items-center space-x-8">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            className={`font-medium hover:text-accent transition-colors ${isScrolled ? 'text-text' : 'text-white'}`}
                        >
                            {link.name}
                        </a>
                    ))}
                    <button
                        onClick={onBookNow}
                        className="btn-accent"
                    >
                        Book Now
                    </button>
                </nav>

                {/* Mobile Menu Button Placeholder */}
                <div className="md:hidden">
                    <button className={`text-2xl ${isScrolled ? 'text-primary' : 'text-white'}`}>
                        ☰
                    </button>
                </div>
            </div>
        </header>
    );
};

export default Header;
