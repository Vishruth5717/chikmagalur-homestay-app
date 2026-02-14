import React, { useState } from 'react';
import RoomCard from './RoomCard';

const BookingModal = ({ isOpen, onClose }) => {
    const [step, setStep] = useState(1);
    const [searchParams, setSearchParams] = useState({
        checkIn: '',
        checkOut: '',
        adults: 2,
        children: 0,
    });
    const [selectedRoom, setSelectedRoom] = useState(null);
    const [isProcessing, setIsProcessing] = useState(false);
    const [guestName, setGuestName] = useState('');

    if (!isOpen) return null;

    const handleSearchChange = (e) => {
        setSearchParams({ ...searchParams, [e.target.name]: e.target.value });
    };


    const handleRoomSelect = (room) => {
        if (!searchParams.checkIn || !searchParams.checkOut) {
            alert("Please select Check-in and Check-out dates first.");
            return;
        }
        setSelectedRoom(room);
        setStep(2);
    };

    const calculateTotal = () => {
        if (!selectedRoom || !searchParams.checkIn || !searchParams.checkOut) return 0;
        const start = new Date(searchParams.checkIn);
        const end = new Date(searchParams.checkOut);
        const nights = Math.max(1, Math.ceil((end - start) / (1000 * 60 * 60 * 24)));

        let pricePerNight = 0;
        if (selectedRoom.price) {
            pricePerNight = selectedRoom.price; // Fixed price
        } else if (selectedRoom.pricePerAdult) {
            pricePerNight = selectedRoom.pricePerAdult * searchParams.adults; // Per person price
        }

        return pricePerNight * nights;
    };

    const handlePayment = async () => {
        if (!guestName.trim()) {
            alert("Please enter your full name to proceed.");
            return;
        }

        setIsProcessing(true);

        try {
            const response = await fetch(`${import.meta.env.VITE_API_URL}/api/book`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    guestName: guestName,
                    room: selectedRoom,
                    checkIn: searchParams.checkIn,
                    checkOut: searchParams.checkOut,
                    adults: searchParams.adults,
                    children: searchParams.children,
                    total: calculateTotal()
                }),
            });

            if (response.ok) {
                const data = await response.json();
                alert(`Booking Confirmed! \nBooking ID: ${data.bookingId}\nRoom: ${selectedRoom.title}\nTotal: ₹${calculateTotal()}`);
                onClose();
                setStep(1);
                setSelectedRoom(null);
                setGuestName('');
            } else {
                const errorData = await response.json();
                alert(`Booking failed: ${errorData.error || "Unknown error"}`);
            }
        } catch (error) {
            console.error("Error processing booking:", error);
            alert(`An error occurred while booking: ${error.message}`);
        } finally {
            setIsProcessing(false);
        }
    };

    const rooms = [
        {
            id: 1,
            title: "Standard Room",
            description: "Cozy room with estate view.",
            capacity: 2,
            maxAdults: 2,
            price: 3000,
            amenities: ["King Bed", "WiFi", "Breakfast"],
            images: [
                "https://images.unsplash.com/photo-1611892440504-42a792e24d32?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
                "https://images.unsplash.com/photo-1598928506311-c55ded91a20c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
                "https://images.unsplash.com/photo-1560185007-cde436f6a4d0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80"
            ]
        },
        {
            id: 2,
            title: "Deluxe Suite",
            description: "Spacious suite with private balcony.",
            capacity: 3,
            maxAdults: 2,
            price: 5000,
            amenities: ["King Bed", "Balcony", "Jacuzzi", "WiFi", "Breakfast"],
            images: [
                "https://images.unsplash.com/photo-1590490360182-c33d57733427?ixlib=rb-4.0.3&auto=format&fit=crop&w=1474&q=80",
                "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
                "https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80"
            ]
        },
        {
            id: 3,
            title: "Family Dormitory",
            description: "Perfect for large groups.",
            capacity: 6,
            maxAdults: 6,
            pricePerAdult: 1000, // Explicitly separate pricing model
            amenities: ["6 Single Beds", "2 Bathrooms", "WiFi", "Breakfast"],
            images: [
                "https://images.unsplash.com/photo-1555854785-985c9e3a840c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
                "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
                "https://images.unsplash.com/photo-1591088398332-8a7791972843?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80"
            ]
        }
    ];

    return (
        <div className="fixed inset-0 z-[60] flex items-center justify-center bg-black/60 backdrop-blur-sm p-4">
            <div className="bg-white rounded-xl shadow-2xl w-full max-w-5xl max-h-[90vh] overflow-y-auto relative animate-fadeIn flex flex-col">

                {/* Header */}
                <div className="p-6 border-b flex justify-between items-center bg-primary text-white sticky top-0 z-20">
                    <h2 className="text-2xl font-serif font-bold">
                        {step === 1 ? "Select Dates & Room" : "Confirm Booking"}
                    </h2>
                    <button onClick={onClose} className="text-white hover:text-accent text-2xl">&times;</button>
                </div>

                {/* Content */}
                <div className="p-6 overflow-y-auto">
                    {/* Steps Indicator */}
                    <div className="flex justify-center mb-8">
                        <div className={`w-8 h-8 rounded-full flex items-center justify-center ${step >= 1 ? 'bg-primary text-white' : 'bg-gray-200 text-gray-500'} font-bold`}>1</div>
                        <div className={`w-24 h-1 bg-gray-200 mx-2 self-center ${step >= 2 ? 'bg-primary' : ''}`}></div>
                        <div className={`w-8 h-8 rounded-full flex items-center justify-center ${step >= 2 ? 'bg-primary text-white' : 'bg-gray-200 text-gray-500'} font-bold`}>2</div>
                    </div>

                    {/* STEP 1: Search & Room List */}
                    {step === 1 && (
                        <div className="space-y-8">
                            {/* Search Filters */}
                            <div className="bg-gray-50 p-6 rounded-xl border border-gray-100 shadow-sm">
                                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                                    <div>
                                        <label className="block text-xs font-bold text-gray-500 uppercase tracking-wide mb-1">Check-in</label>
                                        <input
                                            type="date"
                                            name="checkIn"
                                            min={new Date().toISOString().split('T')[0]}
                                            required
                                            value={searchParams.checkIn}
                                            className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-primary outline-none bg-white"
                                            onChange={handleSearchChange}
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-xs font-bold text-gray-500 uppercase tracking-wide mb-1">Check-out</label>
                                        <input
                                            type="date"
                                            name="checkOut"
                                            min={searchParams.checkIn ? new Date(new Date(searchParams.checkIn).getTime() + 86400000).toISOString().split('T')[0] : new Date().toISOString().split('T')[0]}
                                            required
                                            value={searchParams.checkOut}
                                            className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-primary outline-none bg-white"
                                            onChange={handleSearchChange}
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-xs font-bold text-gray-500 uppercase tracking-wide mb-1">Adults</label>
                                        <select name="adults" className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-primary outline-none bg-white" onChange={handleSearchChange} defaultValue={2}>
                                            {[1, 2, 3, 4, 5, 6].map(num => <option key={num} value={num}>{num}</option>)}
                                        </select>
                                    </div>
                                    <div>
                                        <label className="block text-xs font-bold text-gray-500 uppercase tracking-wide mb-1">Children</label>
                                        <select name="children" className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-primary outline-none bg-white" onChange={handleSearchChange} defaultValue={0}>
                                            {[0, 1, 2, 3, 4].map(num => <option key={num} value={num}>{num}</option>)}
                                        </select>
                                    </div>
                                </div>
                            </div>

                            {/* Room List */}
                            <div className="space-y-6">
                                <h3 className="text-xl font-serif font-bold text-secondary">Available Rooms</h3>
                                {rooms.map(room => (
                                    <RoomCard
                                        key={room.id}
                                        room={room}
                                        onSelect={handleRoomSelect}
                                        isDateSelected={!!(searchParams.checkIn && searchParams.checkOut)}
                                        adultsCount={parseInt(searchParams.adults)}
                                    />
                                ))}
                            </div>
                        </div>
                    )}

                    {/* STEP 2: Payment */}
                    {step === 2 && selectedRoom && (
                        <div className="max-w-2xl mx-auto space-y-6">
                            <div className="bg-gray-50 p-8 rounded-xl border border-gray-200 relative overflow-hidden">
                                <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-primary to-accent"></div>
                                <h3 className="text-2xl font-serif font-bold text-gray-800 mb-6 text-center">Booking Summary</h3>

                                <div className="space-y-4">
                                    <div className="flex justify-between items-center border-b border-dashed border-gray-300 pb-3">
                                        <span className="text-gray-600">Room</span>
                                        <span className="font-bold text-lg text-primary">{selectedRoom.title}</span>
                                    </div>
                                    <div className="grid grid-cols-2 gap-4 border-b border-dashed border-gray-300 pb-3">
                                        <div>
                                            <span className="text-xs text-gray-500 uppercase block">Check-in</span>
                                            <span className="font-medium">{searchParams.checkIn}</span>
                                        </div>
                                        <div className="text-right">
                                            <span className="text-xs text-gray-500 uppercase block">Check-out</span>
                                            <span className="font-medium">{searchParams.checkOut}</span>
                                        </div>
                                    </div>
                                    <div className="flex justify-between items-center border-b border-dashed border-gray-300 pb-3">
                                        <span className="text-gray-600">Guests</span>
                                        <span className="font-medium">{searchParams.adults} Adults, {searchParams.children} Children</span>
                                    </div>

                                    <div className="flex justify-between items-center pt-2">
                                        <span className="text-xl font-bold text-gray-800">Total</span>
                                        <span className="text-3xl font-serif font-bold text-primary">
                                            ₹{calculateTotal()}
                                        </span>
                                    </div>
                                    <p className="text-xs text-gray-500 text-right">
                                        *Includes all taxes & fees. {" "}
                                        {(() => {
                                            const start = new Date(searchParams.checkIn);
                                            const end = new Date(searchParams.checkOut);
                                            const nights = Math.ceil((end - start) / (1000 * 60 * 60 * 24));
                                            return `${nights} night${nights !== 1 ? 's' : ''}`;
                                        })()}
                                    </p>
                                </div>
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
                                <input
                                    type="text"
                                    value={guestName}
                                    onChange={(e) => setGuestName(e.target.value)}
                                    className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary outline-none"
                                    placeholder="Enter your full name"
                                    required
                                />
                            </div>

                            <button
                                onClick={handlePayment}
                                disabled={isProcessing}
                                className="w-full btn-secondary text-lg py-4 shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all"
                            >
                                {isProcessing ? 'Processing Payment...' : 'Confirm & Pay Now'}
                            </button>

                            <button onClick={() => setStep(1)} className="block w-full text-center text-gray-500 hover:text-primary underline mt-4">
                                &larr; Back to Room Selection
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </div >
    );
};

export default BookingModal;
