import React from "react";
import { ChevronDown } from "react-feather";

interface CurrencySelectProps {
  availableCurrencies: string[];
  selectedCurrency: string;
  onCurrencyChange: (newCurrency: string) => void;
}

function CurrencySelect({
  availableCurrencies,
  selectedCurrency,
  onCurrencyChange,
}: CurrencySelectProps) {
  console.log(availableCurrencies);

  return (
    <div className="custom-select relative w-48 h-[60px] rounded-md cursor-pointer">
      <select
        className="appearance-none absolute w-full h-full block p-4 rounded-md border border-[#C1C2CA] shadow-sm focus:border-[#3a3a3b] focus:ring focus:ring-primary-200 focus:ring-opacity-50 disabled:cursor-not-allowed disabled:bg-gray-50"
        value={selectedCurrency}
        onChange={(event) => onCurrencyChange(event.target.value)}
      >
        {availableCurrencies.map((currency: string) => (
          <option key={currency} value={currency}>
            {currency}
          </option>
        ))}
      </select>
      <div className="custom-select-indicator absolute inset-y-0 right-0 flex items-center px-2 text-gray-400 pointer-events-none">
        <ChevronDown />
      </div>
    </div>
  );
}

export default CurrencySelect;
