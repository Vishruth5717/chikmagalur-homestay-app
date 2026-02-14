import heroBg from '../assets/hero-bg.jpg';

const Hero = ({ onBookNow }) => {
    return (
        <section id="home" className="relative h-screen flex items-center justify-center bg-gray-900 text-white">
            {/* Background Image */}
            <div className="absolute inset-0 overflow-hidden">
                <img src={heroBg} alt="Homestay Background" className="w-full h-full object-cover opacity-60" />
                <div className="absolute inset-0 bg-black/40"></div>
            </div>

            <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
                <h1 className="text-5xl md:text-7xl font-serif font-bold mb-6 leading-tight">
                    Earthy Mountain Luxury
                </h1>
                <p className="text-xl md:text-2xl mb-8 font-light text-gray-200">
                    Escape to the serene mist of Chikkamagaluru. Coffee, comfort, and clouds await.
                </p>
                <button onClick={onBookNow} className="btn-accent text-lg px-8 py-4">
                    Book Your Stay
                </button>
            </div>
        </section>
    );
};

export default Hero;
