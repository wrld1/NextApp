import { DateObject } from "@/types/IDateObject";
import { ExchangeHistoryEntry } from "@/types/IExchangeHistoryEntry";
import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import { v4 as uuidv4 } from "uuid";

interface ConverterState {
  rates: Record<string, number>;
  updateRates: (newRates: Record<string, number>) => void;
  date: DateObject;
  setDate: (newDate: DateObject) => void;
  exchangeHistory: ExchangeHistoryEntry[];
  addExchangeHistory: (
    sellAmount: number,
    buyAmount: number,
    sellCurrency: string,
    buyCurrency: string
  ) => void;
  clearExchangeHistory: () => void;
}

export const useConverter = create<ConverterState>()(
  persist(
    (set, get) => ({
      rates: {},
      updateRates: (newRates) => set(() => ({ rates: newRates })),
      date: {
        year: new Date().getFullYear(),
        month: new Date().getMonth() + 1,
        day: new Date().getDate() - 1,
      },
      setDate: (newDate) => set(() => ({ date: newDate })),
      exchangeHistory: [],
      addExchangeHistory: (
        sellAmount: number,
        buyAmount: number,
        sellCurrency: string,
        buyCurrency: string
      ) => {
        const currentHistory = get().exchangeHistory;
        const newEntry = {
          id: uuidv4(),
          sellAmount,
          buyAmount,
          sellCurrency,
          buyCurrency,
          date: get().date,
        };
        set(() => ({ exchangeHistory: [...currentHistory, newEntry] }));
      },
      clearExchangeHistory: () => set(() => ({ exchangeHistory: [] })),
    }),
    {
      name: "converter-storage",
      storage: createJSONStorage(() => localStorage),
    }
  )
);
