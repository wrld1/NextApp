"use client";
import { Repeat } from "react-feather";
import CurrencySelect from "./CurrencySelect";
import InputLabel from "./InputLabel";
import ActionButton from "@/components/ActionButton";
import Datepicker from "./Datepicker";
import { useEffect, useState } from "react";
import Input from "@/components/Input";
import { fetchRate } from "@/api/actions/fetchRate";
import { useConverter } from "@/app/_stores/converter.store";

const Converter = () => {
  const availableCurrencies = ["USD", "GBP", "UAH", "CNY"];
  const [initialLoad, setInitialLoad] = useState(true);
  const [sellCurrency, setSellCurrency] = useState("UAH");
  const [buyCurrency, setBuyCurrency] = useState("USD");
  const [sellValue, setSellValue] = useState<string>("");
  const [buyValue, setBuyValue] = useState<string>("");

  const { date, rates, updateRates, addExchangeHistory } = useConverter();

  useEffect(() => {
    if (initialLoad) {
      setInitialLoad(false);
      return;
    }

    const fetchData = async () => {
      try {
        const data = await fetchRate(
          sellCurrency,
          date.year,
          date.month,
          date.day
        );
        const { conversion_rates } = data;
        updateRates(conversion_rates);
      } catch (error: any) {
        throw new Error(error);
      }
    };

    fetchData();
  }, [sellCurrency, date, updateRates, initialLoad]);

  const filteredCurrencies = (selectedCurrency: string): string[] => {
    return availableCurrencies.filter((curr) => curr !== selectedCurrency);
  };

  const handleSellAmountChange = (amount: string) => {
    setSellValue(amount);
    const newBuyAmount = +amount * rates[buyCurrency];
    setBuyValue(isNaN(newBuyAmount) ? "" : newBuyAmount.toFixed(2));
  };

  const handleBuyAmountChange = (amount: string) => {
    setBuyValue(amount);
    const newSellAmount = +amount / rates[buyCurrency];
    setSellValue(isNaN(newSellAmount) ? "" : newSellAmount.toFixed(2));
  };

  const handleSellCurrencyChange = (newCurrency: string) => {
    setSellCurrency(newCurrency);
    const newBuyAmount = (+sellValue * rates[buyCurrency]) / rates[newCurrency];
    setBuyValue(isNaN(newBuyAmount) ? "" : newBuyAmount.toFixed(2));
  };

  const handleBuyCurrencyChange = (newCurrency: string) => {
    setBuyCurrency(newCurrency);
    const newSellAmount =
      (+buyValue * rates[sellCurrency]) / rates[newCurrency];
    setSellValue(isNaN(newSellAmount) ? "" : newSellAmount.toFixed(2));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const sellAmountNumber = parseFloat(sellValue);
    const buyAmountNumber = parseFloat(buyValue);

    if (isNaN(sellAmountNumber) || isNaN(buyAmountNumber)) {
      return console.error("Invalid input amounts");
    }

    addExchangeHistory(
      sellAmountNumber,
      buyAmountNumber,
      sellCurrency,
      buyCurrency
    );

    setSellValue("");
    setBuyValue("");
    console.log("handleSubmit worked");
  };

  return (
    <>
      <h2 className="font-bold text-[#1F1E25] text-4xl">Конвертер валют</h2>
      <form
        className="flex flex-col gap-6 mt-16 justify-between"
        onSubmit={handleSubmit}
      >
        <div className="flex justify-between items-end">
          <div>
            <InputLabel inputId="sellInput">В мене є</InputLabel>
            <div className="flex items-center gap-4">
              <Input
                inputId="sellInput"
                placeholder="1000"
                value={sellValue}
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
                value={buyValue}
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
          <ActionButton style="primary" variant="action">
            Зберегти результат
          </ActionButton>
        </div>
      </form>
    </>
  );
};

export default Converter;
