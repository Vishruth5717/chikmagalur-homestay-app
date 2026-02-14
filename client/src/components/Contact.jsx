import React, { useState } from 'react';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });
    const [status, setStatus] = useState('');

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('sending');

        // Basic validation
        if (!formData.email.includes('@')) {
            setStatus('error');
            return;
        }

        try {
            const response = await fetch('http://localhost:5000/api/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                setStatus('success');
                setFormData({ name: '', email: '', message: '' });
            } else {
                setStatus('error');
            }
        } catch (error) {
            console.error("Error submitting form", error);
            setStatus('error');
        }
    };

    return (
        <section id="contact" className="py-20 bg-white">
            <div className="container mx-auto px-4">
                <h2 className="text-4xl font-serif font-bold text-primary text-center mb-12">Contact Us</h2>

                <div className="flex flex-col lg:flex-row gap-12">
                    {/* Left: Map */}
                    <div className="lg:w-1/2 min-h-[400px] rounded-xl overflow-hidden shadow-soft">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d124440.3707267152!2d75.7188734!3d13.3150766!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bbad760366bc049%3A0x673c004d4f82664b!2sChikkamagaluru%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                            width="100%"
                            height="100%"
                            style={{ border: 0, minHeight: '400px' }}
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            title="Homestay Location"
                        ></iframe>
                    </div>

                    {/* Right: Form & Details */}
                    <div className="lg:w-1/2 space-y-8">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="p-4 bg-background rounded-lg border border-gray-100">
                                <h3 className="font-serif font-bold text-secondary mb-1">Phone</h3>
                                <p className="text-text">+91 98765 43210</p>
                            </div>
                            <div className="p-4 bg-background rounded-lg border border-gray-100">
                                <h3 className="font-serif font-bold text-secondary mb-1">Email</h3>
                                <p className="text-text">stay@mountainhigh.com</p>
                            </div>
                            <div className="col-span-1 md:col-span-2 p-4 bg-background rounded-lg border border-gray-100">
                                <h3 className="font-serif font-bold text-secondary mb-1">Address</h3>
                                <p className="text-text">Estate Road, Mullayanagiri Hills, Chikkamagaluru, Karnataka 577101</p>
                            </div>
                        </div>

                        <form onSubmit={handleSubmit} className="space-y-4">
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                                    placeholder="Your Name"
                                />
                            </div>
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                                    placeholder="your@email.com"
                                />
                            </div>
                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                    rows="4"
                                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                                    placeholder="How can we help you?"
                                ></textarea>
                            </div>
                            <button
                                type="submit"
                                disabled={status === 'sending'}
                                className="w-full btn-primary"
                            >
                                {status === 'sending' ? 'Sending...' : 'Send Message'}
                            </button>
                            {status === 'success' && <p className="text-green-600 text-center">Message sent successfully!</p>}
                            {status === 'error' && <p className="text-red-600 text-center">Something went wrong. Please try again.</p>}
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
