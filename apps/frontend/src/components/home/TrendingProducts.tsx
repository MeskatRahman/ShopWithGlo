import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface Product {
  id: string;
  name: string;
  imageUrl: string;
  price: string;
  slug: string;
}

const trendingProducts: Product[] = [
  {
    id: 'tp1',
    name: 'Ergonomic Office Chair',
    imageUrl: 'https://via.placeholder.com/300x300?text=Office+Chair',
    price: '$249.99',
    slug: 'ergonomic-office-chair',
  },
  {
    id: 'tp2',
    name: 'Noise-Cancelling Earbuds',
    imageUrl: 'https://via.placeholder.com/300x300?text=Earbuds',
    price: '$129.99',
    slug: 'noise-cancelling-earbuds',
  },
  {
    id: 'tp3',
    name: 'Portable Bluetooth Speaker',
    imageUrl: 'https://via.placeholder.com/300x300?text=Bluetooth+Speaker',
    price: '$79.99',
    slug: 'portable-bluetooth-speaker',
  },
  {
    id: 'tp4',
    name: 'Organic Coffee Beans (1kg)',
    imageUrl: 'https://via.placeholder.com/300x300?text=Coffee+Beans',
    price: '$29.99',
    slug: 'organic-coffee-beans',
  },
];

const TrendingProducts: React.FC = () => {
  return (
    <section className="py-12 bg-charcoal-brown">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-celadon-light mb-8 text-center">Trending / Best Sellers</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {trendingProducts.map((product) => (
            <Link href={`/products/${product.slug}`} key={product.id} className="block">
              <div className="bg-carbon-black rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <Image
                  src={product.imageUrl}
                  alt={product.name}
                  width={300}
                  height={300}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h3 className="text-lg font-semibold text-celadon-light mb-2">{product.name}</h3>
                  <p className="text-magical-neon-purple-vibrant font-bold">{product.price}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrendingProducts;
