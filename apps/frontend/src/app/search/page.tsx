"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

interface Product {
  id: string;
  name: string;
  imageUrl: string;
  price: string;
  slug: string;
}

const dummySearchResults: Product[] = [
  { id: 's1', name: 'Search Result 1', imageUrl: 'https://via.placeholder.com/200x200?text=Result+1', price: '$15.00', slug: 'search-result-1' },
  { id: 's2', name: 'Search Result 2', imageUrl: 'https://via.placeholder.com/200x200?text=Result+2', price: '$25.00', slug: 'search-result-2' },
  { id: 's3', name: 'Search Result 3', imageUrl: 'https://via.placeholder.com/200x200?text=Result+3', price: '$35.00', slug: 'search-result-3' },
  { id: 's4', name: 'Search Result 4', imageUrl: 'https://via.placeholder.com/200x200?text=Result+4', price: '$45.00', slug: 'search-result-4' },
];

const SearchPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [results, setResults] = useState<Product[]>([]);
  const [loading, setLoading] = useState(false);
  const [noResults, setNoResults] = useState(false);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setNoResults(false);
    // Simulate API call
    setTimeout(() => {
      if (searchTerm.toLowerCase().includes('product')) {
        setResults(dummySearchResults);
        setNoResults(false);
      } else {
        setResults([]);
        setNoResults(true);
      }
      setLoading(false);
    }, 1000);
  };

  return (
    <div className="container mx-auto px-4 py-8 bg-charcoal-brown text-celadon-light min-h-screen">
      <h1 className="text-4xl font-bold mb-8 text-center">Search Products</h1>

      {/* Search Bar */}
      <form onSubmit={handleSearch} className="mb-8 max-w-xl mx-auto">
        <div className="flex">
          <input
            type="text"
            placeholder="Search for products..."
            className="flex-grow px-4 py-3 border border-dusty-olive-dark rounded-l-md focus:outline-none focus:ring-2 focus:ring-magical-neon-purple-vibrant bg-carbon-black text-celadon-light placeholder-muted-teal"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button
            type="submit"
            className="bg-magical-neon-purple-vibrant hover:bg-magical-neon-purple-deep text-white font-bold py-3 px-6 rounded-r-md transition-colors duration-300"
          >
            Search
          </button>
        </div>
        {/* Autocomplete Suggestions Placeholder */}
        {searchTerm.length > 2 && (
          <div className="mt-2 bg-carbon-black rounded-md shadow-lg">
            <p className="p-3 text-muted-teal">Autocomplete suggestions will appear here...</p>
          </div>
        )}
      </form>

      {/* Search Filters (Placeholder for integration with Product Listing Page filters) */}
      <div className="mb-8 text-center">
        <p className="text-lg text-muted-teal">Search filters will be integrated here (e.g., price, category, brand).</p>
      </div>

      {/* Search Results */}
      {loading ? (
        <div className="text-center text-xl">Loading results...</div>
      ) : noResults ? (
        <div className="text-center text-xl">
          No results found for "{searchTerm}".
          <p className="text-muted-teal mt-2">Try searching for "Product" or similar terms.</p>
          {/* Suggest similar products placeholder */}
          <div className="mt-4">
            <h3 className="text-lg font-semibold">Suggested Products:</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-4">
              {dummySearchResults.slice(0, 2).map((product) => (
                <Link href={`/products/${product.slug}`} key={product.id} className="block">
                  <div className="bg-carbon-black rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                    <Image
                      src={product.imageUrl}
                      alt={product.name}
                      width={200}
                      height={200}
                      className="w-full h-32 object-cover"
                    />
                    <div className="p-3 text-center">
                      <h3 className="text-md font-semibold text-celadon-light">{product.name}</h3>
                      <p className="text-magical-neon-purple-vibrant font-bold">{product.price}</p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      ) : (
        results.length > 0 && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {results.map((product) => (
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
        )
      )}
    </div>
  );
};

export default SearchPage;
