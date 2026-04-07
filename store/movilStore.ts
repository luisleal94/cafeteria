import { create } from 'zustand';
import { signOut } from '../services/authService';

interface UserStore {
  isLoggedIn: boolean;
  username: string;
  setLoggedIn: (value: boolean) => void;
  setUsername: (name: string) => void;
  logout: () => Promise<void>;
}

export const useUserStore = create<UserStore>((set) => ({
  isLoggedIn: true,
  username: '',
  
  setLoggedIn: (value) => set({ isLoggedIn: value }),
  
  setUsername: (name) => set({ username: name }),
  
  logout: async () => {
    try {
      const result = await signOut();
      if (result.success) {
        set({ isLoggedIn: false, username: '' });
      } else {
        console.error('Error en logout:', result.error);
      }
    } catch (error) {
      console.error('Error en logout:', error);
    }
  },
}));
