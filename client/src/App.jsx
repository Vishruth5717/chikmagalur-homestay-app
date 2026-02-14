import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Places from './components/Places';
import Gallery from './components/Gallery';
import Reviews from './components/Reviews';
import Contact from './components/Contact';
import Footer from './components/Footer';
import BookingModal from './components/BookingModal';
import WhatsAppButton from './components/WhatsAppButton';

function App() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  const handleBookNow = () => {
    setIsBookingOpen(true);
  };

  return (
    <div className="font-sans text-text antialiased relative">
      <Header onBookNow={handleBookNow} />
      <Hero onBookNow={handleBookNow} />
      <About />
      <Places />
      <Gallery />
      <Reviews />
      <Contact />
      <Footer />

      <WhatsAppButton />

      {/* Booking Modal Helper (Later) */}
      <BookingModal
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
      />
    </div>
  );
}

export default App;
