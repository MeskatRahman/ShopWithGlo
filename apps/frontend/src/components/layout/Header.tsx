import React from 'react';
import Link from 'next/link';

const Header: React.FC = () => {
  return (
    <header className="bg-white shadow-sm">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <div>
          <Link href="/" className="text-2xl font-bold text-gray-800">
            ShopWithGlo
          </Link>
        </div>

        {/* Search Bar */}
        <div className="flex-grow mx-4 max-w-xl">
          <input
            type="text"
            placeholder="Search for products..."
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Right Section: Currency, Cart, User Account */}
        <div className="flex items-center space-x-4">
          {/* Currency Selector */}
          <select className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none">
            <option>USD</option>
            <option>EUR</option>
            <option>BDT</option>
          </select>

          {/* Cart Icon */}
          <Link href="/cart" className="text-gray-600 hover:text-gray-800">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
              />
            </svg>
          </Link>

          {/* User Account/Login */}
          <Link href="/account" className="text-gray-600 hover:text-gray-800 flex items-center space-x-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
              />
            </svg>
            <span>Account</span>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
