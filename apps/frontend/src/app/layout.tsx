"use client";

import type { Metadata } from "next";
import "./globals.css";
import Layout from "../components/layout/Layout";
import { CurrencyProvider } from "../context/CurrencyContext";

export const metadata: Metadata = {
  title: "ShopWithGlo",
  description: "Your one-stop shop for all your needs",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <CurrencyProvider>
          <Layout>{children}</Layout>
        </CurrencyProvider>
      </body>
    </html>
  );
}
