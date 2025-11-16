"use client";

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useCart } from '../../context/CartContext';
import { useCurrency } from '../../context/CurrencyContext';

const CartPage: React.FC = () => {
  const { cartItems, updateQuantity, removeFromCart, saveForLater, cartSubtotalUSD, estimatedShippingUSD, cartTotalUSD } = useCart();
  const { formatPrice, convertPrice } = useCurrency();

  return (
    <div className="container mx-auto px-4 py-8 bg-charcoal-brown text-celadon-light min-h-screen">
      <h1 className="text-4xl font-bold mb-8 text-center">Your Shopping Cart</h1>

      {cartItems.length === 0 ? (
        <div className="text-center text-xl text-muted-teal">
          Your cart is empty. <Link href="/products" className="text-magical-neon-purple-vibrant hover:underline">Start Shopping!</Link>
        </div>
      ) : (
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Cart Items Display */}
          <div className="lg:w-2/3 bg-carbon-black p-6 rounded-lg shadow-lg">
            {cartItems.map((item) => (
              <div key={item.id} className="flex items-center border-b border-dusty-olive-dark py-4 last:border-b-0">
                <div className="relative w-24 h-24 mr-4 flex-shrink-0">
                  <Image
                    src={item.imageUrl}
                    alt={item.name}
                    fill
                    style={{ objectFit: 'contain' }}
                    className="rounded-md bg-muted-teal p-1"
                  />
                </div>
                <div className="flex-grow">
                  <h3 className="text-lg font-semibold text-celadon-light">{item.name}</h3>
                  {item.variant && <p className="text-muted-teal text-sm">Variant: {item.variant}</p>}
                  <p className="text-magical-neon-purple-vibrant font-bold mt-1">
                    {formatPrice(convertPrice(item.priceUSD))}
                  </p>
                  {!item.inStock && (
                    <p className="text-magical-neon-pink text-sm mt-1">Out of Stock</p>
                  )}
                </div>
                <div className="flex items-center space-x-4">
                  <input
                    type="number"
                    min="1"
                    value={item.quantity}
                    onChange={(e) => updateQuantity(item.id, parseInt(e.target.value))}
                    className="w-16 px-2 py-1 rounded-md bg-muted-teal text-black-primary text-center focus:outline-none"
                  />
                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="text-magical-neon-pink hover:text-magical-neon-purple-vibrant transition-colors duration-200"
                  >
                    Remove
                  </button>
                  <button
                    onClick={() => saveForLater(item.id)}
                    className="text-celadon-light hover:text-magical-neon-purple-vibrant transition-colors duration-200 text-sm"
                  >
                    Save for Later
                  </button>
                </div>
              </div>
            ))}
            <div className="mt-6 text-center">
              <Link href="/products" className="bg-tea-green-light hover:bg-tea-green-dark text-black-primary font-bold py-3 px-6 rounded-full text-lg transition-colors duration-300">
                Continue Shopping
              </Link>
            </div>
          </div>

          {/* Cart Summary */}
          <div className="lg:w-1/3 bg-carbon-black p-6 rounded-lg shadow-lg h-fit">
            <h2 className="text-2xl font-semibold mb-6">Order Summary</h2>
            <div className="space-y-3 text-celadon-light">
              <div className="flex justify-between">
                <span>Subtotal:</span>
                <span>{formatPrice(convertPrice(cartSubtotalUSD))}</span>
              </div>
              <div className="flex justify-between">
                <span>Estimated Shipping:</span>
                <span>{formatPrice(convertPrice(estimatedShippingUSD))}</span>
              </div>
              <div className="flex justify-between border-t border-dusty-olive-dark pt-3 font-bold text-xl">
                <span>Order Total:</span>
                <span>{formatPrice(convertPrice(cartTotalUSD))}</span>
              </div>
              {/* Savings/Discounts Placeholder */}
              <div className="text-sm text-tea-green-light">
                Savings applied: {formatPrice(convertPrice(0))}
              </div>
            </div>
            <div className="mt-8">
              <Link href="/checkout" className="block w-full bg-magical-neon-purple-vibrant hover:bg-magical-neon-purple-deep text-white font-bold py-3 px-6 rounded-full text-lg text-center transition-colors duration-300">
                Proceed to Checkout
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartPage;
