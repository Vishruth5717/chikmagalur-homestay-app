const Gallery = () => {
    // Using reliable Lorem Picsum URLs for high-quality nature placeholders
    const images = [
        'https://picsum.photos/id/1015/800/600', // River/Nature
        'https://picsum.photos/id/1016/800/600', // Canyon
        'https://picsum.photos/id/1018/800/600', // Mountains
        'https://picsum.photos/id/1019/800/600', // Forest
        'https://picsum.photos/id/1029/800/600', // Park
        'https://picsum.photos/id/1036/800/600', // Winter/Nature
    ];

    return (
        <section id="gallery" className="py-20 bg-background">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-serif font-bold text-primary mb-4">Our Gallery</h2>
                    <p className="text-lg text-text">A glimpse into the serenity that awaits you.</p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                    {images.map((src, index) => (
                        <div key={index} className="relative overflow-hidden group rounded-xl shadow-soft h-64">
                            <img
                                src={src}
                                alt={`Gallery ${index + 1}`}
                                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                                onError={(e) => {
                                    console.error(`Failed to load image: ${src}`);
                                    e.target.style.display = 'none'; // Hide broken image
                                    // Optional: Replace with a fundamental fallback
                                    // e.target.src = 'https://via.placeholder.com/400?text=Image+Error';
                                }}
                            />
                            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300"></div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Gallery;
