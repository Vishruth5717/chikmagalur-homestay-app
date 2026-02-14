const pool = require('./db');

const seedRooms = async () => {
    try {
        console.log('Seeding Rooms...');

        // Clear existing data
        await pool.query('DELETE FROM Rooms');

        // Reset sequence if needed (optional, depends on DB setup)
        // await pool.query('ALTER SEQUENCE rooms_roomid_seq RESTART WITH 1');

        const rooms = [
            { name: 'Standard Room', capacity: 2, price: 3000 },
            { name: 'Deluxe Suite', capacity: 3, price: 5000 },
            { name: 'Family Dormitory', capacity: 6, price: 1000 } // Price per person logic handled in frontend, storing base price here
        ];

        for (const room of rooms) {
            await pool.query(
                'INSERT INTO Rooms (RoomName, MaxCapacity, PricePerNight) VALUES ($1, $2, $3)',
                [room.name, room.capacity, room.price]
            );
        }

        console.log('Rooms seeded successfully!');
        process.exit(0);
    } catch (error) {
        console.error('Error seeding rooms:', error);
        process.exit(1);
    }
};

seedRooms();
