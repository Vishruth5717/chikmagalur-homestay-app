import React from 'react';

const Places = () => {
    const places = [
        {
            title: 'Mullayanagiri Peak',
            distance: '15 km',
            description: 'The highest peak in Karnataka, offering breathtaking views and a scenic trek.',
            image: 'https://images.unsplash.com/photo-1589308078059-be1415eab4c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80'
        },
        {
            title: 'Baba Budangiri',
            distance: '20 km',
            description: 'A sacred mountain range famous for its shrine and stunning landscapes.',
            image: 'https://images.unsplash.com/photo-1624969862293-b749659ccc4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1471&q=80'
        },
        {
            title: 'Hebbe Falls',
            distance: '10 km',
            description: 'A majestic waterfall tucked inside a coffee estate, accessible by jeep.',
            image: 'https://images.unsplash.com/photo-1432405972618-c60b0225b8f9?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80'
        },
        {
            title: 'Chikmagalur Golf Club',
            distance: '5 km',
            description: 'Lush green golf course set against the backdrop of the Western Ghats.',
            image: 'https://images.unsplash.com/photo-1587174486073-ae5e5cff23aa?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80'
        },
        {
            title: 'Bhadra Wildlife Sanctuary',
            distance: '35 km',
            description: 'A biodiversity hotspot home to tigers, elephants, and exotic birds.',
            image: 'https://images.unsplash.com/photo-1518005052304-a373bb6df816?ixlib=rb-4.0.3&auto=format&fit=crop&w=1471&q=80'
        },
        {
            title: 'Jhari Waterfalls',
            distance: '22 km',
            description: 'Also known as Buttermilk Falls, a stunning cascade surrounded by dense forests.',
            image: 'https://images.unsplash.com/photo-1476900164809-ff19b8ae5968?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80'
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
