import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface User {
  id: string;
  username: string;
  email: string;
  avatar: string;
  following: string[];
}

interface AuthState {
  user: User | null;
  setUser: (user: User | null) => void;
  isAuthenticated: boolean;
  login: (email: string, password: string) => Promise<void>;
  signup: (username: string, email: string, password: string) => Promise<void>;
  logout: () => void;
}

export const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      user: null,
      isAuthenticated: false,
      setUser: (user) => set({ user, isAuthenticated: !!user }),
      login: async (email, password) => {
        // Simulate API call
        const mockUser = {
          id: '1',
          username: 'testuser',
          email,
          avatar: 'https://images.unsplash.com/photo-1520785643438-5bf77931f493?w=150&h=150&fit=crop',
          following: ['2', '3']
        };
        set({ user: mockUser, isAuthenticated: true });
      },
      signup: async (username, email, password) => {
        // Simulate API call
        const mockUser = {
          id: '1',
          username,
          email,
          avatar: 'https://images.unsplash.com/photo-1520785643438-5bf77931f493?w=150&h=150&fit=crop',
          following: []
        };
        set({ user: mockUser, isAuthenticated: true });
      },
      logout: () => set({ user: null, isAuthenticated: false })
    }),
    {
      name: 'auth-storage'
    }
  )
);