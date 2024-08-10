// create zustand store
"use client";
import { getItemsFromLocalStorage } from "@/utils/CartUtils";
import { Product } from "@/utils/types";
import { create } from "zustand";

interface ZustandState {
  navVisible: boolean;
  showNav: () => void;
  hideNav: () => void;
  cartItems: Product[];
  setCartItems: (items: Product[]) => void;
}
const initialCartItems = getItemsFromLocalStorage();
export const useStore = create<ZustandState>()((set) => ({
  navVisible: true,
  showNav: () => set({ navVisible: true }),
  hideNav: () => set({ navVisible: false }),
  cartItems: initialCartItems,
  setCartItems: (items) => set({ cartItems: items }),
}));
