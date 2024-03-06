import { Key } from "react";
import { DateObject } from "./IDateObject";

export interface ExchangeHistoryEntry {
  id: Key | null | undefined;
  sellAmount: number;
  buyAmount: number;
  sellCurrency: string;
  buyCurrency: string;
  date: DateObject;
}
