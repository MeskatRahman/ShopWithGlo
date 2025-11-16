import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

interface Product {
  id: string;
  name: string;
  imageUrl: string;
  price: string;
  slug: string;
}

const dummyProducts: Product[] = [
  { id: 'p1', name: 'Product 1', imageUrl: 'https://via.placeholder.com/200x200?text=Product+1', price: '$10.00', slug: 'product-1' },
  { id: 'p2', name: 'Product 2', imageUrl: 'https://via.placeholder.com/200x200?text=Product+2', price: '$20.00', slug: 'product-2' },
  { id: 'p3', name: 'Product 3', imageUrl: 'https://via.placeholder.com/200x200?text=Product+3', price: '$30.00', slug: 'product-3' },
  { id: 'p4', name: 'Product 4', imageUrl: 'https://via.placeholder.com/200x200?text=Product+4', price: '$40.00', slug: 'product-4' },
  { id: 'p5', name: 'Product 5', imageUrl: 'https://via.placeholder.com/200x200?text=Product+5', price: '$50.00', slug: 'product-5' },
  { id: 'p6', name: 'Product 6', imageUrl: 'https://via.placeholder.com/200x200?text=Product+6', price: '$60.00', slug: 'product-6' },
  { id: 'p7', name: 'Product 7', imageUrl: 'https://via.placeholder.com/200x200?text=Product+7', price: '$70.00', slug: 'product-7' },
  { id: 'p8', name: 'Product 8', imageUrl: 'https://via.placeholder.com/200x200?text=Product+8', price: '$80.00', slug: 'product-8' },
];

const ProductListingPage: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8 bg-charcoal-brown text-celadon-light min-h-screen">
      <h1 className="text-4xl font-bold mb-8 text-center">All Products</h1>

      <div className="flex flex-col md:flex-row gap-8">
        {/* Filters Section */}
        <aside className="w-full md:w-1/4 bg-carbon-black p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold mb-6">Filters</h2>
          
          {/* Price Range */}
          <div className="mb-6">
            <h3 className="text-lg font-medium mb-3">Price Range</h3>
            <input type="range" min="0" max="1000" className="w-full accent-magical-neon-purple-vibrant" />
            <div className="flex justify-between text-sm mt-2">
              <span>$0</span>
              <span>$1000+</span>
            </div>
          </div>

          {/* Category */}
          <div className="mb-6">
            <h3 className="text-lg font-medium mb-3">Category</h3>
            <ul>
              <li className="mb-2"><Link href="#" className="hover:text-magical-neon-purple-vibrant">Electronics</Link></li>
              <li className="mb-2"><Link href="#" className="hover:text-magical-neon-purple-vibrant">Fashion</Link></li>
              <li className="mb-2"><Link href="#" className="hover:text-magical-neon-purple-vibrant">Home & Kitchen</Link></li>
            </ul>
          </div>

          {/* Brand */}
          <div className="mb-6">
            <h3 className="text-lg font-medium mb-3">Brand</h3>
            <input type="text" placeholder="Search brand..." className="w-full px-3 py-2 rounded-md bg-muted-teal text-black-primary placeholder-carbon-black focus:outline-none" />
          </div>

          {/* Rating */}
          <div className="mb-6">
            <h3 className="text-lg font-medium mb-3">Rating</h3>
            <div className="flex items-center gap-2">
              <input type="checkbox" id="4stars" className="accent-magical-neon-purple-vibrant" />
              <label htmlFor="4stars" className="text-celadon-light">4 Stars & Up</label>
            </div>
          </div>
        </aside>

        {/* Products Display Section */}
        <main className="w-full md:w-3/4">
          {/* Sort Options and View Toggle */}
          <div className="flex justify-between items-center mb-6 bg-carbon-black p-4 rounded-lg shadow-md">
            <div className="flex items-center gap-4">
              <label htmlFor="sort" className="font-medium">Sort by:</label>
              <select id="sort" className="px-3 py-2 rounded-md bg-muted-teal text-black-primary focus:outline-none">
                <option>Price (Low to High)</option>
                <option>Price (High to Low)</option>
                <option>Newest</option>
                <option>Popular</option>
                <option>Rating</option>
              </select>
            </div>
            {/* View Toggle Placeholder */}
            <div className="text-celadon-light">
              Grid / List View
            </div>
          </div>

          {/* Product Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {dummyProducts.map((product) => (
              <Link href={`/products/${product.slug}`} key={product.id} className="block">
                <div className="bg-carbon-black rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                  <Image
                    src={product.imageUrl}
                    alt={product.name}
                    width={200}
                    height={200}
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

          {/* Pagination/Infinite Scroll Placeholder */}
          <div className="text-center mt-8 text-celadon-light">
            Load More Products (Infinite Scroll / Pagination)
          </div>
        </main>
      </div>
    </div>
  );
};

export default ProductListingPage;
