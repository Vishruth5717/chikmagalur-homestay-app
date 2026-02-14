import React, { useState } from 'react';

// Icons
const ChevronLeft = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="15 18 9 12 15 6"></polyline></svg>;
const ChevronRight = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg>;

const RoomCard = ({ room, onSelect, isDateSelected, adultsCount }) => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [errorMsg, setErrorMsg] = useState("");

    const nextImage = (e) => {
        e.stopPropagation();
        setCurrentImageIndex((prev) => (prev + 1) % room.images.length);
    };

    const prevImage = (e) => {
        e.stopPropagation();
        setCurrentImageIndex((prev) => (prev === 0 ? room.images.length - 1 : prev - 1));
    };

    const handleSelect = () => {
        if (!isDateSelected) {
            setErrorMsg("Please select dates first");
            setTimeout(() => setErrorMsg(""), 3000);
            return;
        }

        if (adultsCount > room.maxAdults) {
            setErrorMsg(`Max ${room.maxAdults} adults allowed`);
            setTimeout(() => setErrorMsg(""), 3000);
            return;
        }

        onSelect(room);
    };

    return (
        <div className="border border-gray-200 rounded-xl overflow-hidden hover:shadow-lg transition-all duration-300 flex flex-col md:flex-row h-full">
            <div className="md:w-1/3 h-64 md:h-auto relative group">
                <img
                    src={room.images[currentImageIndex]}
                    alt={room.title}
                    className="w-full h-full object-cover transition-all duration-500"
                />

                {/* Carousel Controls */}
                <div className="absolute inset-0 flex justify-between items-center px-2 opacity-0 group-hover:opacity-100 transition-opacity">
                    <button
                        onClick={prevImage}
                        className="bg-black/50 hover:bg-black/70 text-white rounded-full p-1 backdrop-blur-sm"
                    >
                        <ChevronLeft />
                    </button>
                    <button
                        onClick={nextImage}
                        className="bg-black/50 hover:bg-black/70 text-white rounded-full p-1 backdrop-blur-sm"
                    >
                        <ChevronRight />
                    </button>
                </div>

                <div className="absolute top-2 right-2 bg-primary text-white text-xs px-2 py-1 rounded-full z-10">
                    Max {room.capacity} Guests
                </div>

                {/* Dots */}
                <div className="absolute bottom-2 left-0 right-0 flex justify-center space-x-1.5">
                    {room.images.map((_, idx) => (
                        <div
                            key={idx}
                            className={`w-2 h-2 rounded-full shadow-sm ${idx === currentImageIndex ? 'bg-white' : 'bg-white/50'}`}
                        />
                    ))}
                </div>
            </div>

            <div className="p-4 md:w-2/3 flex flex-col justify-between">
                <div>
                    <h3 className="text-xl font-serif font-bold text-secondary mb-2">{room.title}</h3>
                    <p className="text-sm text-gray-600 mb-3">{room.description}</p>
                    <ul className="text-sm text-gray-500 mb-4 space-y-1">
                        {room.amenities.map((amenity, idx) => (
                            <li key={idx}>• {amenity}</li>
                        ))}
                    </ul>
                </div>
                <div className="flex flex-col items-end mt-4">
                    <div className="flex justify-between items-center w-full mb-2">
                        <div className="text-lg font-bold text-primary">
                            ₹{room.price ? room.price : (room.pricePerAdult * adultsCount)}
                            <span className="text-sm font-normal text-gray-500">/ night</span>
                        </div>
                        {/* Error Message */}
                        {errorMsg && (
                            <span className="text-red-500 text-xs font-medium animate-pulse">
                                {errorMsg}
                            </span>
                        )}
                    </div>
                    <button
                        onClick={handleSelect}
                        className="btn-accent py-2 px-6 text-sm w-full md:w-auto"
                    >
                        Select Room
                    </button>
                </div>
            </div>
        </div>
    );
};

export default RoomCard;
