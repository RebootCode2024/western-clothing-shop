"use client"; // Add this at the top

import { Inter } from "next/font/google";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./globals.css";
import { CartProvider } from "./context/CartContext";
import { SessionProvider } from "next-auth/react";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode; // Explicitly defining the type for children
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <SessionProvider>
          <CartProvider>{children}</CartProvider>
        </SessionProvider>
      </body>
    </html>
  );
}
