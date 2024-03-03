"use client";
import { Repeat } from "react-feather";
import CurrencyInput from "./CurrencyInput";
import CurrencySelect from "./CurrencySelect";
import InputLabel from "./InputLabel";
import ActionButton from "@/components/ActionButton";
import Datepicker from "./Datepicker";
import { useEffect, useState } from "react";

const INITIAL_CURRENCIES = ["USD", "GBP", "UAH", "CNY"];

const ConverterSection = () => {
  const [availableCurrencies, setAvailableCurrencies] =
    useState(INITIAL_CURRENCIES);
  const [sellCurrency, setSellCurrency] = useState(availableCurrencies[0]);
  const [buyCurrency, setBuyCurrency] = useState(
    availableCurrencies.filter((c) => c !== sellCurrency)[0]
  );
  const [sellAmount, setSellAmount] = useState(0);
  const [buyAmount, setBuyAmount] = useState(0);
  const [rate, setRate] = useState(1);

  useEffect(() => {
    const fetchRate = async () => {
      try {
        const response = await fetch(
          `https://v6.exchangerate-api.com/v6/f7f76e28d6eee79f65a85963/latest/${sellCurrency}/${buyCurrency}`
        );
        const data = await response.json();
        setRate(data.conversion_rate);
      } catch (error) {
        console.error("Error fetching exchange rate:", error);
      }
    };

    if (sellCurrency && buyCurrency) {
      fetchRate();
    }
  }, [sellCurrency, buyCurrency]);

  const handleSellAmountChange = (newSellAmount: number) => {
    setSellAmount(newSellAmount);
    setBuyAmount(newSellAmount * rate);
  };

  const handleBuyAmountChange = (newBuyAmount: number) => {
    setBuyAmount(newBuyAmount);
    setSellAmount(newBuyAmount / rate);
  };

  const handleSellCurrencyChange = (newSellCurrency: string) => {
    setSellCurrency(newSellCurrency);
    setBuyCurrency(availableCurrencies.filter((c) => c !== newSellCurrency)[0]);
  };

  const handleBuyCurrencyChange = (newBuyCurrency: string) => {
    setBuyCurrency(newBuyCurrency);
    setSellCurrency(availableCurrencies.filter((c) => c !== newBuyCurrency)[0]);
  };
  return (
    <div className="flex flex-col gap-6 mt-16 justify-between">
      <div className="flex justify-between items-end">
        <div>
          <InputLabel inputId="sellInput" />
          <div className="flex items-center gap-4">
            <CurrencyInput inputId="sellInput" placeholder="1000" />
            <CurrencySelect
              availableCurrencies={availableCurrencies}
              selectedCurrency={sellCurrency}
              onCurrencyChange={handleSellCurrencyChange}
            />
          </div>
        </div>
        <Repeat className="mb-3" color="#707C87" />
        <div>
          <InputLabel inputId="buyInput" />
          <div className="flex items-center gap-4">
            <CurrencyInput inputId="buyInput" placeholder="38.7" />
            <CurrencySelect
              availableCurrencies={availableCurrencies}
              selectedCurrency={buyCurrency}
              onCurrencyChange={setBuyCurrency}
            />
          </div>
        </div>
      </div>
      <div className="flex justify-between items-center">
        <Datepicker />
        <ActionButton style="primary" type="action">
          Зберегти результат
        </ActionButton>
      </div>
    </div>
  );
};

export default ConverterSection;
