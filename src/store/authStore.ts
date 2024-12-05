import { create } from 'zustand';
import { User } from '../types';

interface AuthState {
  user: User | null;
  login: (username: string, password: string) => Promise<boolean>;
  logout: () => void;
}

export const useAuthStore = create<AuthState>((set) => ({
  user: null,
  login: async (username: string, password: string) => {
    // Simulate API call
    if (username === 'anuel' && password === 'uah123uah456') {
      set({ user: { username, isAuthenticated: true } });
      return true;
    }
    return false;
  },
  logout: () => set({ user: null }),
}));