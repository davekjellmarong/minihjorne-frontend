// create zustand store
import { create } from 'zustand'

  interface ZustandState {
    jwt: string
    setJwt: (jwt: string) => void
  }
  
  const useStore = create<ZustandState>()((set) => ({
    jwt: '',
    setJwt: (jwt: string) => set({ jwt }),
  }))