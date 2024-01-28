// create zustand store
"use client"
import { CommonUser, UserBackend } from '@/utils/types'
import { create } from 'zustand'

  interface ZustandState {
    jwt: string
    user:  UserBackend | null
    setJwt: (jwt: string) => void,
    setUserZ: (user: UserBackend) => void
  }
  
  export const useStore = create<ZustandState>()((set) => ({
    jwt: '',
    user: null,
    setJwt: (jwt: string) => set({ jwt }),
    setUserZ: (user: UserBackend) => set({ user })
  }))