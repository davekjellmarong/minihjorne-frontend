"use client";
import { useStore } from "@/stateManagment/ZustandStore";
// Define a type for your cart items

import { Product } from "@/utils/types";

// Function to add an item to the cart
export const addItemToCart = (product: Product): Product[] => {
  const cart = getItemsFromLocalStorage();
  const existingItemIndex = cart.findIndex(
    (cartProduct) => cartProduct.id === product.id,
  );

  if (existingItemIndex !== -1) {
    // If the item already exists in the cart, do nothing or update additional properties if needed
  } else {
    // If the item is not in the cart, add it
    cart.push({ ...product });
  }
  sendItemsToLocalStorage(cart);
  const setCartItems = useStore.getState().setCartItems;
  setCartItems(cart);
  return [...cart];
};

// Function to remove an item from the cart
export const removeItemFromCart = (productId: number): Product[] => {
  const cart = getItemsFromLocalStorage();

  const updatedCart = cart.filter((product) => product.id !== productId);
  sendItemsToLocalStorage(updatedCart);

  const setCartItems = useStore.getState().setCartItems;
  setCartItems(updatedCart);
  return [...updatedCart];
};

// Function to send items to local storage
export const sendItemsToLocalStorage = (cart: Product[]): void => {
  localStorage.setItem("cart", JSON.stringify(cart));
};

// Function to get items from local storage
export const getItemsFromLocalStorage = (): Product[] => {
  if (typeof window === "undefined") return [];
  const storedCart = localStorage.getItem("cart");
  return storedCart ? JSON.parse(storedCart) : [];
};
export const getSavedProductIds = (): number[] => {
  const savedCart = getItemsFromLocalStorage();
  const savedProductIds = savedCart.map((product) => product.id);
  return savedProductIds;
};

// Function to calculate the total price of items in the cart
export const calculateTotalPrice = (cart: Product[]): number => {
  return cart.reduce((total, product) => total + product.attributes.price, 0);
};
export const getCart = () => {
  const cart = getItemsFromLocalStorage();
  const totalPrice = calculateTotalPrice(cart);
  const productIds = getSavedProductIds();
  return {
    totalPrice: totalPrice,
    items: cart,
    productIds: productIds,
  };
};

// Function to clear cart items from local storage
export const clearCartInLocalStorage = (): void => {
  localStorage.removeItem("cart");
  const setCartItems = useStore.getState().setCartItems;
  setCartItems([]);
};
