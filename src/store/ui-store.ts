import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface UIState {
  sedePreferida: 'caballito' | 'nunez' | null;
  isModalReservaOpen: boolean;
  isDark: boolean;
  setSedePreferida: (sede: 'caballito' | 'nunez' | null) => void;
  setModalReservaOpen: (open: boolean) => void;
  toggleDark: () => void;
}

export const useUIStore = create<UIState>()(
  persist(
    (set) => ({
      sedePreferida: null,
      isModalReservaOpen: false,
      isDark: false,
      setSedePreferida: (sede) => set({ sedePreferida: sede }),
      setModalReservaOpen: (open) => set({ isModalReservaOpen: open }),
      toggleDark: () => set((state) => ({ isDark: !state.isDark })),
    }),
    {
      name: 'ui-storage',
    }
  )
);


