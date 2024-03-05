"use client";
import { Repeat } from "react-feather";
import CurrencySelect from "./CurrencySelect";
import InputLabel from "./InputLabel";
import ActionButton from "@/components/ActionButton";
import Datepicker from "./Datepicker";
import { useEffect, useState } from "react";
import Input from "@/components/Input";
import { fetchRate } from "@/app/api/actions/fetchRate";
import { useConverter } from "@/app/_stores/converter.store";

const Converter = () => {
  const availableCurrencies = ["USD", "GBP", "UAH", "CNY"];
  const [sellCurrency, setSellCurrency] = useState("UAH");
  const [buyCurrency, setBuyCurrency] = useState("USD");
  const [sellAmount, setSellAmount] = useState<string | number>("");
  const [buyAmount, setBuyAmount] = useState<string | number>("");

  const { date, rates, updateRates } = useConverter();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchRate(
          sellCurrency,
          date.year,
          date.month,
          date.day
        );
        const { conversion_rates } = data;
        console.log(conversion_rates);
        updateRates(conversion_rates);
      } catch (error: any) {
        throw new Error(error.message);
      }
    };

    fetchData();
  }, [sellCurrency, date, updateRates]);

  const filteredCurrencies = (selectedCurrency: string): string[] => {
    return availableCurrencies.filter((curr) => curr !== selectedCurrency);
  };

  const handleSellCurrencyChange = (newCurrency: string) => {
    setSellCurrency(newCurrency);
    const newBuyAmount =
      (+sellAmount * rates[buyCurrency]) / rates[newCurrency];
    setBuyAmount(isNaN(newBuyAmount) ? "" : newBuyAmount.toFixed(2));
  };

  const handleBuyCurrencyChange = (newCurrency: string) => {
    setBuyCurrency(newCurrency);
    const newBuyAmount =
      (+sellAmount * rates[sellCurrency]) / rates[newCurrency];
    setBuyAmount(isNaN(newBuyAmount) ? "" : newBuyAmount.toFixed(2));
  };

  const handleSellAmountChange = (amount: string) => {
    setSellAmount(amount);
    const newBuyAmount = (+amount * rates[buyCurrency]) / rates[sellCurrency];
    setBuyAmount(isNaN(newBuyAmount) ? "" : newBuyAmount.toFixed(2));
  };

  const handleBuyAmountChange = (amount: string) => {
    setBuyAmount(amount);
    const newSellAmount = (+amount * rates[sellCurrency]) / rates[buyCurrency];
    setSellAmount(isNaN(newSellAmount) ? "" : newSellAmount.toFixed(2));
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
                onChange={handleSellAmountChange}
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
                onChange={handleBuyAmountChange}
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
