import React from 'react';
import Link from 'next/link';

interface Review {
  id: string;
  author: string;
  rating: number;
  comment: string;
}

const customerReviews: Review[] = [
  {
    id: 'cr1',
    author: 'Alice W.',
    rating: 5,
    comment: 'Absolutely love my new headphones! The sound quality is superb and they are so comfortable.',
  },
  {
    id: 'cr2',
    author: 'Bob S.',
    rating: 4,
    comment: 'Fast shipping and great product. The smartwatch works perfectly, though battery life could be better.',
  },
  {
    id: 'cr3',
    author: 'Charlie D.',
    rating: 5,
    comment: 'ShopWithGlo always delivers! High-quality products and excellent customer service.',
  },
];

const CustomerReviewsSnippet: React.FC = () => {
  return (
    <section className="py-12 bg-charcoal-brown">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-celadon-light mb-8 text-center">What Our Customers Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {customerReviews.map((review) => (
            <div key={review.id} className="bg-carbon-black p-6 rounded-lg shadow-lg">
              <div className="flex items-center mb-4">
                {/* Star Rating Placeholder */}
                <div className="flex text-magical-neon-purple-vibrant mr-2">
                  {'★'.repeat(review.rating)}
                  {'☆'.repeat(5 - review.rating)}
                </div>
                <p className="font-semibold text-celadon-light">{review.author}</p>
              </div>
              <p className="text-muted-teal italic">"{review.comment}"</p>
            </div>
          ))}
        </div>
        <div className="text-center mt-8">
          <Link href="/reviews" className="text-magical-neon-purple-vibrant hover:underline font-semibold">
            Read All Reviews &rarr;
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CustomerReviewsSnippet;
