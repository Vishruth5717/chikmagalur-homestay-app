import React from 'react';

// Simple SVG Icons
const PhoneIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
);
const MailIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
);
const MapPinIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
);
const InstagramIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
);
const FacebookIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
);
const YoutubeIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.33 29 29 0 0 0-.46-5.33z"></path><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon></svg>
);


const Footer = () => {
    return (
        <footer className="bg-[#1A1A1A] text-white pt-16 pb-8">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">

                    {/* Column 1: The Mellows Contact */}
                    <div>
                        <h3 className="text-2xl font-serif font-bold mb-6">The Mellows</h3>
                        <div className="space-y-4 text-gray-300">
                            <div className="flex items-start space-x-3">
                                <span className="mt-1 text-accent"><PhoneIcon /></span>
                                <p>+91 7676414588</p>
                            </div>
                            <div className="flex items-start space-x-3">
                                <span className="mt-1 text-accent"><MailIcon /></span>
                                <p>themellows@gmail.com</p>
                            </div>
                            <div className="flex items-start space-x-3">
                                <span className="mt-1 text-accent"><MapPinIcon /></span>
                                <p>Bababudangiri Road, Nagenahalli, Chikmagalur, KA - 577101</p>
                            </div>
                        </div>
                    </div>

                    {/* Column 2: Quick Links */}
                    <div>
                        <h3 className="text-2xl font-serif font-bold mb-6">Quick Links</h3>
                        <ul className="space-y-3 text-gray-300">
                            <li><a href="#about" className="hover:text-accent transition-colors">About</a></li>
                            <li><a href="#gallery" className="hover:text-accent transition-colors">Gallery</a></li>
                            <li><a href="#reviews" className="hover:text-accent transition-colors">Reviews</a></li>
                            <li><a href="#contact" className="hover:text-accent transition-colors">Contact</a></li>
                        </ul>
                    </div>

                    {/* Column 3: Social */}
                    <div>
                        <h3 className="text-2xl font-serif font-bold mb-6">Social</h3>
                        <div className="flex space-x-4 mb-6">
                            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-accent hover:text-white transition-all text-gray-400">
                                <InstagramIcon />
                            </a>
                            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-accent hover:text-white transition-all text-gray-400">
                                <FacebookIcon />
                            </a>
                            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-accent hover:text-white transition-all text-gray-400">
                                <YoutubeIcon />
                            </a>
                        </div>
                        <p className="text-gray-400">Follow us for latest posts and updates.</p>
                    </div>

                </div>

                {/* Copyright Bar */}
                <div className="border-t border-gray-800 pt-8 text-center text-gray-500 text-sm">
                    <p>© 2025 The Mellows | All Rights Reserved</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
