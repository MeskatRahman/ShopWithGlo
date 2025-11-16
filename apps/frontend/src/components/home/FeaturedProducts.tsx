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

const featuredProducts: Product[] = [
  {
    id: 'fp1',
    name: 'Wireless Bluetooth Headphones',
    imageUrl: 'https://via.placeholder.com/300x300?text=Headphones',
    price: '$99.99',
    slug: 'wireless-bluetooth-headphones',
  },
  {
    id: 'fp2',
    name: 'Smartwatch with Health Tracker',
    imageUrl: 'https://via.placeholder.com/300x300?text=Smartwatch',
    price: '$149.99',
    slug: 'smartwatch-health-tracker',
  },
  {
    id: 'fp3',
    name: '4K Ultra HD Smart TV',
    imageUrl: 'https://via.placeholder.com/300x300?text=Smart+TV',
    price: '$599.99',
    slug: '4k-ultra-hd-smart-tv',
  },
  {
    id: 'fp4',
    name: 'Gaming Laptop RTX 3080',
    imageUrl: 'https://via.placeholder.com/300x300?text=Gaming+Laptop',
    price: '$1899.99',
    slug: 'gaming-laptop-rtx-3080',
  },
];

const FeaturedProducts: React.FC = () => {
  return (
    <section className="py-12 bg-charcoal-brown">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-celadon-light mb-8 text-center">Featured Products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {featuredProducts.map((product) => (
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

export default FeaturedProducts;
