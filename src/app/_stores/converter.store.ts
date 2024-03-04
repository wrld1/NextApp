import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

interface DateObject {
  year: number;
  month: number;
  day: number;
}

interface ConverterState {
  rates: Record<string, number>;
  updateRates: (newRates: Record<string, number>) => void;
  date: DateObject;
  setDate: (newDate: DateObject) => void;
}

export const useConverter = create<ConverterState>()(
  persist(
    (set, get) => ({
      rates: {},
      updateRates: (newRates) => set(() => ({ rates: newRates })),
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
