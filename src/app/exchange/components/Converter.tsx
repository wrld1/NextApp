"use client";
import { Repeat } from "react-feather";

import CurrencySelect from "./CurrencySelect";
import InputLabel from "./InputLabel";
import ActionButton from "@/components/ActionButton";
import Datepicker from "./Datepicker";
import { useEffect, useState } from "react";
import Input from "@/components/Input";
import { fetchRate } from "@/app/api/fetchRate";
import { useConverter } from "@/app/_stores/converter.store";

const INITIAL_CURRENCIES = ["USD", "GBP", "UAH", "CNY"];

const Converter = () => {
  const [availableCurrencies, setAvailableCurrencies] =
    useState(INITIAL_CURRENCIES);
  const [sellCurrency, setSellCurrency] = useState("UAH");
  const [buyCurrency, setBuyCurrency] = useState("USD");
  const [sellAmount, setSellAmount] = useState("");
  const [buyAmount, setBuyAmount] = useState("");

  const { date } = useConverter();

  // const getRates = async () => {
  //   const rates = await fetchRate(
  //     sellCurrency,
  //     date.year,
  //     date.month,
  //     date.day,
  //     sellAmount
  //   );
  //   console.log(rates);
  // };

  // const result = getRates();

  const filteredCurrencies = (selectedCurrency: string): string[] => {
    return availableCurrencies.filter((curr) => curr !== selectedCurrency);
  };

  const handleSellCurrencyChange = (newCurrency: string) => {
    setSellCurrency(newCurrency);
  };

  const handleBuyCurrencyChange = (newCurrency: string) => {
    setBuyCurrency(newCurrency);
  };

  const handleSellAmountChange = (amount: string) => {
    setSellAmount(amount);
  };

  const handleBuyAmountChange = (amount: string) => {
    setBuyAmount(amount);
  };

  return (
    <>
      <h2 className="font-bold text-[#1F1E25] text-4xl">Конвертер валют</h2>
      <div className="flex flex-col gap-6 mt-16 justify-between">
        <div className="flex justify-between items-end">
          <div>
            <InputLabel inputId="sellInput">В мене є</InputLabel>
            <div className="flex items-center gap-4">
              <Input
                inputId="sellInput"
                placeholder="1000"
                value={sellAmount}
                onChange={handleBuyAmountChange}
              />
              <CurrencySelect
                availableCurrencies={filteredCurrencies(buyCurrency)}
                selectedCurrency={sellCurrency}
                onCurrencyChange={handleSellCurrencyChange}
              />
            </div>
          </div>
          <Repeat className="mb-4" color="#707C87" />
          <div>
            <InputLabel inputId="buyInput">Хочу придбати</InputLabel>
            <div className="flex items-center gap-4">
              <Input
                inputId="buyInput"
                placeholder="38.7"
                value={buyAmount}
                onChange={handleSellAmountChange}
              />
              <CurrencySelect
                availableCurrencies={filteredCurrencies(sellCurrency)}
                selectedCurrency={buyCurrency}
                onCurrencyChange={handleBuyCurrencyChange}
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
    </>
  );
};

export default Converter;
