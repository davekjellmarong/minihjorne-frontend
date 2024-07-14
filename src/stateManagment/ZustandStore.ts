// create zustand store
"use client";
import { UserBackend } from "@/utils/types";
import { create } from "zustand";

interface ZustandState {
  jwt: string;
  user: UserBackend | null;
  setJwt: (jwt: string) => void;
  setUserZ: (user: UserBackend) => void;
  navVisible: boolean;
  showNav: () => void;
  hideNav: () => void;
  setNavVisible: (navVisible: boolean) => void;
}

export const useStore = create<ZustandState>()((set) => ({
  jwt: "",
  user: null,
  navVisible: true,
  setJwt: (jwt: string) => set({ jwt }),
  setUserZ: (user: UserBackend) => set({ user }),
  showNav: () => set({ navVisible: true }),
  hideNav: () => set({ navVisible: false }),
  setNavVisible: (navVisible: boolean) => set({ navVisible }),
}));
