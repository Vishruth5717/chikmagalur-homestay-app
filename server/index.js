const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

const pool = require('./db');

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Homestay API is running');
});

// Contact API
app.post('/api/contact', async (req, res) => {
  const { name, email, message } = req.body;

  // Validation
  if (!name || !email || !message) {
    return res.status(400).json({ error: 'All fields are required.' });
  }

  // Simple Email Regex
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return res.status(400).json({ error: 'Invalid email format.' });
  }

  try {
    await pool.query(
      'INSERT INTO Inquiries (GuestName, Email, Message) VALUES ($1, $2, $3)',
      [name, email, message]
    );

    res.status(201).json({ message: 'Message received successfully!', success: true });
  } catch (error) {
    console.error('Error saving contact inquiry:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Booking API
app.post('/api/book', async (req, res) => {
  const { guestName, room, checkIn, checkOut } = req.body;

  if (!guestName || !room || !room.id || !checkIn || !checkOut) {
    return res.status(400).json({ error: 'Missing required booking details.' });
  }

  try {
    const result = await pool.query(
      'INSERT INTO Bookings (GuestName, RoomID, CheckInDate, CheckOutDate, Status) VALUES ($1, $2, $3, $4, $5) RETURNING BookingID',
      [guestName, room.id, checkIn, checkOut, 'Confirmed']
    );

    const newBookingId = result.rows[0].bookingid;

    res.status(201).json({
      message: 'Booking confirmed!',
      bookingId: newBookingId,
      status: 'Confirmed'
    });
  } catch (error) {
    console.error('Error processing booking:', error);
    res.status(500).json({ error: 'Internal server error: ' + error.message });
  }
});


app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);

  // Test DB Connection
  pool.query('SELECT NOW()', (err, res) => {
    if (err) {
      console.error('Database connection error:', err);
    } else {
      console.log('Database connected successfully');
    }
  });
});
