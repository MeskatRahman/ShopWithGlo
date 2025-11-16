import React from 'react';
import Link from 'next/link';

interface Category {
  id: string;
  name: string;
  imageUrl: string;
  slug: string;
}

const categories: Category[] = [
  {
    id: '1',
    name: 'Electronics',
    imageUrl: 'https://via.placeholder.com/300x200?text=Electronics',
    slug: 'electronics',
  },
  {
    id: '2',
    name: 'Fashion',
    imageUrl: 'https://via.placeholder.com/300x200?text=Fashion',
    slug: 'fashion',
  },
  {
    id: '3',
    name: 'Home & Kitchen',
    imageUrl: 'https://via.placeholder.com/300x200?text=Home+%26+Kitchen',
    slug: 'home-kitchen',
  },
  {
    id: '4',
    name: 'Books',
    imageUrl: 'https://via.placeholder.com/300x200?text=Books',
    slug: 'books',
  },
  {
    id: '5',
    name: 'Sports & Outdoors',
    imageUrl: 'https://via.placeholder.com/300x200?text=Sports+%26+Outdoors',
    slug: 'sports-outdoors',
  },
  {
    id: '6',
    name: 'Beauty & Personal Care',
    imageUrl: 'https://via.placeholder.com/300x200?text=Beauty+%26+Personal+Care',
    slug: 'beauty-personal-care',
  },
];

const CategoryGrid: React.FC = () => {
  return (
    <section className="py-8">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">Shop by Category</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {categories.map((category) => (
            <Link href={`/categories/${category.slug}`} key={category.id} className="block">
              <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
                <img
                  src={category.imageUrl}
                  alt={category.name}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4 text-center">
                  <h3 className="text-xl font-semibold text-gray-800">{category.name}</h3>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoryGrid;
