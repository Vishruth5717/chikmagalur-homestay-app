import mullayanagiri from '../assets/mullayanagiri.jpg';
import bababudangiri from '../assets/bababudangiri.jpg';
import hebbeFalls from '../assets/hebbefalls.jpg';
import golf from '../assets/golf.jpg';
import bhadra from '../assets/bhadra-wildlife-sanctuary.jpg';
import jhari from '../assets/jhari.jpg';

const Places = () => {
    const places = [
        {
            title: 'Mullayanagiri Peak',
            distance: '15 km',
            description: 'The highest peak in Karnataka, offering breathtaking views and a scenic trek.',
            image: mullayanagiri
        },
        {
            title: 'Baba Budangiri',
            distance: '20 km',
            description: 'A sacred mountain range famous for its shrine and stunning landscapes.',
            image: bababudangiri
        },
        {
            title: 'Hebbe Falls',
            distance: '10 km',
            description: 'A majestic waterfall tucked inside a coffee estate, accessible by jeep.',
            image: hebbeFalls
        },
        {
            title: 'Chikmagalur Golf Club',
            distance: '5 km',
            description: 'Lush green golf course set against the backdrop of the Western Ghats.',
            image: golf
        },
        {
            title: 'Bhadra Wildlife Sanctuary',
            distance: '35 km',
            description: 'A biodiversity hotspot home to tigers, elephants, and exotic birds.',
            image: bhadra
        },
        {
            title: 'Jhari Waterfalls',
            distance: '22 km',
            description: 'Also known as Buttermilk Falls, a stunning cascade surrounded by dense forests.',
            image: jhari
        },
    ];

    return (
        <section id="places" className="py-20 bg-white">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-serif font-bold text-primary mb-4">Nearby Attractions</h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        Explore the hidden gems of the Western Ghats, all just a short drive away.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {places.map((place, index) => (
                        <div key={index} className="card group">
                            <div className="relative h-64 overflow-hidden">
                                <img
                                    src={place.image}
                                    alt={place.title}
                                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                                />
                                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-bold text-primary shadow-sm">
                                    {place.distance}
                                </div>
                            </div>
                            <div className="p-6">
                                <h3 className="text-2xl font-serif font-bold text-secondary mb-3">{place.title}</h3>
                                <p className="text-gray-600 leading-relaxed">
                                    {place.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Places;
