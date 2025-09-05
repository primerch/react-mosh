import { create } from 'zustand';

interface Store {
  value: number;
  increment: () => void;
  decrement: () => void;
  reset: () => void;
}

const useStore = create<Store>((set) => ({
  value: 0,
  increment: () => set((store) => ({ value: store.value + 1 })),
  decrement: () => set((store) => ({ value: store.value - 1 })),
  reset: () => set(() => ({ value: 0 })),
}));

export default useStore;
