import React from 'react';

const Reviews = () => {
    const reviews = [
        {
            name: "Ananya Sharma",
            rating: 5,
            comment: "A slice of heaven! The coffee estate tour was the highlight of our trip. The rooms were spotless and the view was mesmerizing.",
            location: "Bangalore"
        },
        {
            name: "Rahul & Meera",
            rating: 5,
            comment: "The Mellows lives up to its name. Perfectly serene. The staff was incredibly warm and the home-cooked food was delicious.",
            location: "Mumbai"
        },
        {
            name: "David Smith",
            rating: 5,
            comment: "Best homestay experience in Chikmagalur. Waking up to the sound of birds and the smell of coffee is unforgettable.",
            location: "London"
        }
    ];

    return (
        <section id="reviews" className="py-20 bg-white">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-serif font-bold text-primary mb-4">Guest Reviews</h2>
                    <p className="text-lg text-gray-600">What our guests are saying about their stay.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {reviews.map((review, index) => (
                        <div key={index} className="bg-background p-8 rounded-xl shadow-soft border border-gray-100 hover:shadow-lg transition-all duration-300">
                            <div className="flex text-accent mb-4">
                                {[...Array(review.rating)].map((_, i) => (
                                    <span key={i} className="text-xl">★</span>
                                ))}
                            </div>
                            <p className="text-text italic mb-6 leading-relaxed">"{review.comment}"</p>
                            <div className="border-t border-gray-200 pt-4">
                                <h4 className="font-serif font-bold text-secondary text-lg">{review.name}</h4>
                                <span className="text-sm text-gray-500">{review.location}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Reviews;
