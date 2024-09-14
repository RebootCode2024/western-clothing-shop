"use client";
import { createContext, useState, useEffect } from 'react';

// Create the CartContext
export const CartContext = createContext();

// CartProvider component to wrap around the app
export const CartProvider = ({ children }) => {
  // Retrieve cart from localStorage, if any
  const getCartFromStorage = () => {
    if (typeof window !== "undefined") {
      const storedCart = localStorage.getItem('cart');
      return storedCart ? JSON.parse(storedCart) : [];
    }
    return [];
  };

  const [cart, setCart] = useState(getCartFromStorage);

  // Save cart to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  const addToCart = (product, quantity = 1) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find(item => item.id === product.id);
      if (existingItem) {
        return prevCart.map(item =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      } else {
        return [...prevCart, { ...product, quantity }];
      }
    });
  };

  const removeFromCart = (product) => {
    setCart((prevCart) =>
      prevCart.map(item =>
        item.id === product.id && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  };

  const deleteFromCart = (product) => {
    setCart((prevCart) => prevCart.filter(item => item.id !== product.id));
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, deleteFromCart }}>
      {children}
    </CartContext.Provider>
  );
};
