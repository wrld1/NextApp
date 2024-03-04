import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

interface DateObject {
  year: number;
  month: number;
  day: number;
}

interface ConverterState {
  bears: number;
  date: DateObject;
  increase: (by: number) => void;
  setDate: (newDate: DateObject) => void;
}

export const useConverter = create<ConverterState>()(
  persist(
    (set, get) => ({
      bears: 0,
      increase: (by) => set((state) => ({ bears: state.bears + by })),
      date: {
        year: new Date().getFullYear(),
        month: new Date().getMonth() + 1,
        day: new Date().getDate(),
      },
      setDate: (newDate) => set(() => ({ date: newDate })),
    }),
    {
      name: "converter-storage",
      storage: createJSONStorage(() => localStorage),
    }
  )
);
