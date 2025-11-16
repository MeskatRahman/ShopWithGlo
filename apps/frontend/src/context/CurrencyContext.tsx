"use client";

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

interface Currency {
  code: string;
  name: string;
  symbol: string;
  exchangeRateToUSD: number; // How many units of this currency equals 1 USD
}

interface CurrencyContextType {
  selectedCurrency: Currency;
  currencies: Currency[];
  changeCurrency: (currencyCode: string) => void;
  convertPrice: (priceUSD: number) => number;
  formatPrice: (price: number, currencyCode?: string) => string;
}

const defaultCurrencies: Currency[] = [
  { code: 'USD', name: 'US Dollar', symbol: '$', exchangeRateToUSD: 1 },
  { code: 'BDT', name: 'Bangladeshi Taka', symbol: '৳', exchangeRateToUSD: 109.5 }, // Example rate
  { code: 'EUR', name: 'Euro', symbol: '€', exchangeRateToUSD: 0.92 }, // Example rate
];

const CurrencyContext = createContext<CurrencyContextType | undefined>(undefined);

export const CurrencyProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [selectedCurrency, setSelectedCurrency] = useState<Currency>(defaultCurrencies[0]);

  // Simulate IP-based geolocation for initial currency
  useEffect(() => {
    const detectCurrency = async () => {
      // In a real app, you'd call a geolocation API here
      // For now, let's default to BDT for Bangladesh or USD otherwise
      const userCountry = 'BD'; // Placeholder: Simulate detection
      if (userCountry === 'BD') {
        const bdtCurrency = defaultCurrencies.find(c => c.code === 'BDT');
        if (bdtCurrency) {
          setSelectedCurrency(bdtCurrency);
        }
      }
    };
    detectCurrency();
  }, []);

  const changeCurrency = (currencyCode: string) => {
    const newCurrency = currencies.find(c => c.code === currencyCode);
    if (newCurrency) {
      setSelectedCurrency(newCurrency);
    }
  };

  const convertPrice = (priceUSD: number): number => {
    // Apply markup (e.g., 10%) - placeholder for PRD requirement
    const priceWithMarkupUSD = priceUSD * 1.10; 
    return priceWithMarkupUSD * selectedCurrency.exchangeRateToUSD;
  };

  const formatPrice = (price: number, currencyCode?: string): string => {
    const targetCurrency = currencyCode ? currencies.find(c => c.code === currencyCode) : selectedCurrency;
    if (!targetCurrency) return `${price}`; // Fallback

    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: targetCurrency.code,
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    }).format(price);
  };

  const currencies = defaultCurrencies; // For now, use default. Later fetch from backend.

  return (
    <CurrencyContext.Provider value={{ selectedCurrency, currencies, changeCurrency, convertPrice, formatPrice }}>
      {children}
    </CurrencyContext.Provider>
  );
};

export const useCurrency = () => {
  const context = useContext(CurrencyContext);
  if (context === undefined) {
    throw new Error('useCurrency must be used within a CurrencyProvider');
  }
  return context;
};
