import { create } from 'zustand';

interface BgStoreState {
  backgroundClass: string;
  setBackgroundClass: (className: string) => void;
}

export const useBgStore = create<BgStoreState>()((set) => ({
  backgroundClass: 'bg-register-background',
  setBackgroundClass: (className) => set({ backgroundClass: className }),
}));
