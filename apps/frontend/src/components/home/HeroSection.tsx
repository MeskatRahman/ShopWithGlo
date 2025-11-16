import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface Banner {
  id: string;
  imageUrl: string;
  altText: string;
  title: string;
  description: string;
  link: string;
}

const banners: Banner[] = [
  {
    id: '1',
    imageUrl: 'https://via.placeholder.com/1200x400?text=Featured+Product+1',
    altText: 'Featured Product 1',
    title: 'Discover Our Latest Collection',
    description: 'Shop now and get amazing discounts on new arrivals!',
    link: '/products/new-collection',
  },
  {
    id: '2',
    imageUrl: 'https://via.placeholder.com/1200x400?text=Special+Offer+2',
    altText: 'Special Offer 2',
    title: 'Limited Time Offer: 50% Off!',
    description: 'Don\'t miss out on our incredible deals across all categories.',
    link: '/offers',
  },
  {
    id: '3',
    imageUrl: 'https://via.placeholder.com/1200x400?text=Summer+Sale+3',
    altText: 'Summer Sale 3',
    title: 'Summer Sale Extravaganza',
    description: 'Grab your favorites before they\'re gone!',
    link: '/summer-sale',
  },
];

const HeroSection: React.FC = () => {
  const [currentBannerIndex, setCurrentBannerIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBannerIndex((prevIndex) => (prevIndex + 1) % banners.length);
    }, 5000); // Change banner every 5 seconds
    return () => clearInterval(interval);
  }, []);

  const currentBanner = banners[currentBannerIndex];

  return (
    <section className="relative w-full h-[400px] overflow-hidden">
      <Image
        src={currentBanner.imageUrl}
        alt={currentBanner.altText}
        fill
        style={{ objectFit: 'cover' }}
        priority
        className="transition-opacity duration-1000 ease-in-out"
      />
      <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center text-center p-4">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
          {currentBanner.title}
        </h1>
        <p className="text-lg md:text-xl text-white mb-8 max-w-2xl">
          {currentBanner.description}
        </p>
        <Link href={currentBanner.link} className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-full text-lg transition-colors duration-300">
          Shop Now
        </Link>
      </div>
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {banners.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentBannerIndex(index)}
            className={`h-3 w-3 rounded-full bg-white ${
              currentBannerIndex === index ? 'opacity-100' : 'opacity-50'
            } hover:opacity-75 transition-opacity duration-300`}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroSection;
