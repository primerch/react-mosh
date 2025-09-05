import { create } from 'zustand';

interface Store {
  valueA: number;
  valueB: number;

  increaseA: () => void;
  increaseB: () => void;
}

const useStore = create<Store>((set) => ({
  valueA: 0,
  valueB: 0,
  increaseA: () => set((store) => ({ valueA: store.valueA + 1 })),
  increaseB: () => set((store) => ({ valueB: store.valueB + 1 })),
}));

export default useStore;
