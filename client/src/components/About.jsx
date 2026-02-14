import React from 'react';

// SVG Icons
const CoffeeIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 8h1a4 4 0 0 1 0 8h-1"></path><path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"></path><line x1="6" y1="1" x2="6" y2="4"></line><line x1="10" y1="1" x2="10" y2="4"></line><line x1="14" y1="1" x2="14" y2="4"></line></svg>
);
const FireIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.1.2-2.2.5-3.3.3-1.07 1.5-1.93 2.5-2.2.667.133 1.333.6 2 1.4z"></path></svg>
);
const WifiIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12.55a11 11 0 0 1 14.08 0"></path><path d="M1.42 9a16 16 0 0 1 21.16 0"></path><path d="M8.53 16.11a6 6 0 0 1 6.95 0"></path><line x1="12" y1="20" x2="12.01" y2="20"></line></svg>
);
const CarIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2"></path><circle cx="7" cy="17" r="2"></circle><path d="M9 17h6"></path><circle cx="17" cy="17" r="2"></circle></svg>
);

const About = () => {
    const amenities = [
        { icon: <CoffeeIcon />, title: 'Estate Coffee' },
        { icon: <FireIcon />, title: 'Bonfire Nights' },
        { icon: <WifiIcon />, title: 'High-Speed WiFi' },
        { icon: <CarIcon />, title: 'Ample Parking' },
    ];

    return (
        <section id="about" className="py-20 bg-background">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row items-center gap-12">
                    {/* Image Side */}
                    <div className="md:w-1/2">
                        <div className="relative rounded-xl overflow-hidden shadow-soft group">
                            <img
                                src="https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80"
                                alt="Homestay Exterior"
                                className="w-full h-[400px] object-cover transform group-hover:scale-105 transition-transform duration-500"
                            />
                            <div className="absolute inset-0 bg-primary/10 group-hover:bg-primary/0 transition-all duration-500"></div>
                        </div>
                    </div>

                    {/* Text Side */}
                    <div className="md:w-1/2 text-left">
                        <h2 className="text-4xl font-serif font-bold text-primary mb-6 relative inline-block">
                            Our Story
                            <span className="absolute bottom-0 left-0 w-1/2 h-1 bg-accent rounded-full"></span>
                        </h2>
                        <p className="text-lg text-text mb-6 leading-relaxed">
                            Nestled in the lush greenery of a private coffee estate in Chikkamagaluru,
                            <span className="font-serif font-semibold text-secondary"> The Mellows</span> offers a sanctuary from the chaos of city life.
                            Built with love and inspired by local heritage, our home opens its doors to travelers seeking peace, mist, and the aroma of fresh coffee.
                        </p>
                        <p className="text-lg text-text mb-8 leading-relaxed">
                            Whether you're here to trek the peaks or simply curl up with a book by the window, our spaces are designed to make you feel grounded and refreshed.
                        </p>

                        <div className="grid grid-cols-2 gap-4">
                            {amenities.map((item, index) => (
                                <div key={index} className="flex items-center space-x-3 p-3 bg-white rounded-lg shadow-sm">
                                    <span className="text-accent">{item.icon}</span>
                                    <span className="font-medium text-secondary">{item.title}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
