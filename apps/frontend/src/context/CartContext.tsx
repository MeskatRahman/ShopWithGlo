"use client";

import React, { createContext, useContext, useState, ReactNode, useEffect } from 'react';
import { useCurrency } from './CurrencyContext'; // Assuming CurrencyContext is in the same directory

interface CartItem {
  id: string;
  productId: string;
  name: string;
  imageUrl: string;
  variant?: string;
  priceUSD: number;
  quantity: number;
  inStock: boolean; // Placeholder for stock status
}

interface CartContextType {
  cartItems: CartItem[];
  addToCart: (item: Omit<CartItem, 'id' | 'inStock'>, initialQuantity?: number) => void;
  updateQuantity: (itemId: string, quantity: number) => void;
  removeFromCart: (itemId: string) => void;
  saveForLater: (itemId: string) => void; // Placeholder
  cartSubtotalUSD: number;
  cartTotalUSD: number;
  estimatedShippingUSD: number;
  // Add other cart-related functions/data as needed
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const { convertPrice, formatPrice, selectedCurrency } = useCurrency();

  // Load cart from localStorage on initial render
  useEffect(() => {
    const storedCart = localStorage.getItem('shopwithglo_cart');
    if (storedCart) {
      setCartItems(JSON.parse(storedCart));
    }
  }, []);

  // Save cart to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('shopwithglo_cart', JSON.stringify(cartItems));
  }, [cartItems]);

  const addToCart = (item: Omit<CartItem, 'id' | 'inStock'>, initialQuantity: number = 1) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find(
        (i) => i.productId === item.productId && i.variant === item.variant
      );

      if (existingItem) {
        return prevItems.map((i) =>
          i.id === existingItem.id ? { ...i, quantity: i.quantity + initialQuantity } : i
        );
      } else {
        // Generate a simple unique ID for the cart item
        const newItemId = `${item.productId}-${item.variant || 'no-variant'}-${Date.now()}`;
        return [...prevItems, { ...item, id: newItemId, quantity: initialQuantity, inStock: true }]; // Assume in stock for now
      }
    });
  };

  const updateQuantity = (itemId: string, quantity: number) => {
    setCartItems((prevItems) =>
      prevItems.map((item) => (item.id === itemId ? { ...item, quantity } : item))
    );
  };

  const removeFromCart = (itemId: string) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== itemId));
  };

  const saveForLater = (itemId: string) => {
    // Placeholder for "save for later" logic
    console.log(`Item ${itemId} saved for later.`);
    // In a real app, you'd move it to a separate "saved for later" state or backend
    removeFromCart(itemId); // Remove from active cart
  };

  // Calculate subtotal in USD
  const cartSubtotalUSD = cartItems.reduce((sum, item) => sum + item.priceUSD * item.quantity, 0);
  const estimatedShippingUSD = 5.00; // Dummy shipping cost in USD

  // Calculate total in USD
  const cartTotalUSD = cartSubtotalUSD + estimatedShippingUSD;

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        updateQuantity,
        removeFromCart,
        saveForLater,
        cartSubtotalUSD,
        cartTotalUSD,
        estimatedShippingUSD,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};
