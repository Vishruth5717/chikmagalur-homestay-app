const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Homestay API is running');
});

// Contact API
app.post('/api/contact', (req, res) => {
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

  // Simulate DB Logic
  console.log(`[CONTACT FORM] New Message from ${name} (${email}): ${message}`);

  res.status(200).json({ message: 'Message received successfully!', success: true });
});

// Booking API
app.post('/api/book', (req, res) => {
  const { checkIn, checkOut, adults, children, room, total } = req.body;

  // Simulate Booking Logic
  console.log(`[BOOKING] New Booking Request:
      Room: ${room?.title}
      Dates: ${checkIn} to ${checkOut}
      Guests: ${adults} Adults, ${children} Children
      Est. Total: ${total}
    `);

  // Mock Success
  res.status(200).json({
    message: 'Booking confirmed!',
    bookingId: 'BOOK-' + Date.now(),
    status: 'Confirmed'
  });
});


app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
