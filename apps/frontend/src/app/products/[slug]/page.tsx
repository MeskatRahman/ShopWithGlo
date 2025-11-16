import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface Product {
  id: string;
  name: string;
  sku: string;
  priceBDT: string;
  priceUSD: string;
  stock: number;
  description: string;
  specifications: { [key: string]: string };
  images: string[];
  variants: { type: string; options: string[] }[];
  estimatedDelivery: string;
  shippingCost: string;
  returnPolicy: string;
  authenticityGuarantee: string;
  rating: number;
  reviewsCount: number;
}

const dummyProduct: Product = {
  id: 'pdp1',
  name: 'Premium Wireless Earbuds',
  sku: 'ELEC001',
  priceBDT: '৳ 3,500',
  priceUSD: '$35.00',
  stock: 150,
  description: 'Experience crystal-clear audio with our premium wireless earbuds. Featuring active noise cancellation, long-lasting battery life, and a comfortable ergonomic design, these earbuds are perfect for music lovers and professionals alike. Comes with a sleek charging case.',
  specifications: {
    'Connectivity': 'Bluetooth 5.2',
    'Battery Life': '8 hours (earbuds), 24 hours (with case)',
    'Noise Cancellation': 'Active Noise Cancellation (ANC)',
    'Water Resistance': 'IPX4',
    'Color Options': 'Black, White, Blue',
  },
  images: [
    'https://via.placeholder.com/600x400?text=Earbuds+Front',
    'https://via.placeholder.com/600x400?text=Earbuds+Side',
    'https://via.placeholder.com/600x400?text=Earbuds+Case',
  ],
  variants: [
    { type: 'Color', options: ['Black', 'White', 'Blue'] },
  ],
  estimatedDelivery: '15-20 business days',
  shippingCost: '৳ 150 (approx. $1.50)',
  returnPolicy: '30-day return policy',
  authenticityGuarantee: '100% original product guarantee',
  rating: 4.5,
  reviewsCount: 128,
};

const ProductDetailPage: React.FC<{ params: { slug: string } }> = ({ params }) => {
  // In a real application, you would fetch product data based on params.slug
  const product = dummyProduct; // Using dummy data for now

  return (
    <div className="container mx-auto px-4 py-8 bg-charcoal-brown text-celadon-light min-h-screen">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Image Gallery */}
        <div className="lg:col-span-1">
          <div className="relative w-full h-96 bg-carbon-black rounded-lg overflow-hidden shadow-lg mb-4">
            <Image
              src={product.images[0]}
              alt={product.name}
              fill
              style={{ objectFit: 'contain' }}
              className="p-4"
            />
          </div>
          <div className="flex gap-4 overflow-x-auto">
            {product.images.map((img, index) => (
              <div key={index} className="relative w-24 h-24 bg-carbon-black rounded-lg overflow-hidden cursor-pointer border-2 border-transparent hover:border-magical-neon-purple-vibrant transition-colors duration-200">
                <Image
                  src={img}
                  alt={`${product.name} image ${index + 1}`}
                  fill
                  style={{ objectFit: 'contain' }}
                  className="p-2"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Product Information & Actions */}
        <div className="lg:col-span-1 bg-carbon-black p-8 rounded-lg shadow-lg">
          <h1 className="text-4xl font-bold mb-3">{product.name}</h1>
          <p className="text-muted-teal mb-4">SKU: {product.sku}</p>

          <div className="flex items-baseline mb-4">
            <span className="text-5xl font-bold text-magical-neon-purple-vibrant mr-3">{product.priceBDT}</span>
            <span className="text-xl text-celadon-light">({product.priceUSD})</span>
          </div>

          {/* Stock Status */}
          <p className="text-lg font-semibold mb-6">
            Stock: <span className={product.stock > 0 ? 'text-tea-green-light' : 'text-magical-neon-pink'}>
              {product.stock > 0 ? `${product.stock} in stock` : 'Out of Stock'}
            </span>
          </p>

          {/* Description */}
          <h2 className="text-2xl font-semibold mb-3">Description</h2>
          <p className="text-celadon-light leading-relaxed mb-6">{product.description}</p>

          {/* Variants */}
          {product.variants.map((variant) => (
            <div key={variant.type} className="mb-6">
              <h3 className="text-lg font-medium mb-3">{variant.type}:</h3>
              <div className="flex flex-wrap gap-3">
                {variant.options.map((option) => (
                  <button key={option} className="px-4 py-2 border border-dusty-olive-dark rounded-md hover:bg-magical-neon-purple-vibrant hover:text-white transition-colors duration-200 text-celadon-light">
                    {option}
                  </button>
                ))}
              </div>
            </div>
          ))}

          {/* Call-to-Action */}
          <div className="flex gap-4 mb-8">
            <button className="flex-grow bg-magical-neon-purple-vibrant hover:bg-magical-neon-purple-deep text-white font-bold py-3 px-6 rounded-full text-lg transition-colors duration-300">
              Add to Cart
            </button>
            <button className="flex-grow bg-tea-green-light hover:bg-tea-green-dark text-black-primary font-bold py-3 px-6 rounded-full text-lg transition-colors duration-300">
              Buy Now
            </button>
            <button className="p-3 border border-dusty-olive-dark rounded-full text-celadon-light hover:text-magical-neon-purple-vibrant hover:border-magical-neon-purple-vibrant transition-colors duration-300">
              {/* Wishlist Icon */}
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
            </button>
          </div>

          {/* Shipping Information */}
          <div className="mb-6">
            <h3 className="text-lg font-medium mb-3">Shipping Information</h3>
            <p className="text-celadon-light">Estimated Delivery: {product.estimatedDelivery}</p>
            <p className="text-celadon-light">Shipping Cost: {product.shippingCost}</p>
            <p className="text-muted-teal text-sm mt-2">International shipping notice: Duties and taxes may apply.</p>
          </div>

          {/* Trust Elements */}
          <div className="mb-6">
            <h3 className="text-lg font-medium mb-3">Trust & Assurance</h3>
            <p className="text-celadon-light mb-2">Customer Rating: {product.rating} / 5 ({product.reviewsCount} reviews)</p>
            <p className="text-celadon-light mb-2">Return Policy: {product.returnPolicy}</p>
            <p className="text-celadon-light">Authenticity Guarantee: {product.authenticityGuarantee}</p>
          </div>

          {/* Specifications Table */}
          <div className="mb-6">
            <h3 className="text-lg font-medium mb-3">Specifications</h3>
            <table className="w-full text-left table-auto">
              <tbody>
                {Object.entries(product.specifications).map(([key, value]) => (
                  <tr key={key} className="border-b border-dusty-olive-dark last:border-b-0">
                    <td className="py-2 pr-4 font-medium text-celadon-light">{key}</td>
                    <td className="py-2 text-muted-teal">{value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailPage;
