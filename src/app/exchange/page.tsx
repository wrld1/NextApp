import { Repeat } from "react-feather";
import ActionButton from "@/components/ActionButton";
import Hero from "@/components/Hero";
import DatePicker from "./components/Datepicker";
import CurrencySelect from "./components/CurrencySelect";
import CurrencyInput from "./components/CurrencyInput";
import InputLabel from "./components/InputLabel";

export default function ExchangePage() {
  return (
    <>
      <Hero />
      <section className="bg-[#F6F7FF] py-20">
        <div className="container bg-[#FFFFFF] flex flex-col mx-auto py-14 px-60">
          <h2 className="font-bold text-[#1F1E25] text-4xl">Конвертер валют</h2>
          <div className="flex flex-col gap-6 mt-16 justify-between">
            <div className="flex justify-between items-end">
              <div>
                <InputLabel inputId="sellInput" />
                <div className="flex items-center gap-4">
                  <CurrencyInput inputId="sellInput" placeholder="1000" />
                  <CurrencySelect />
                </div>
              </div>
              <Repeat className="mb-3" color="#707C87" />
              <div>
                <InputLabel inputId="buyInput" />
                <div className="flex items-center gap-4">
                  <CurrencyInput inputId="buyInput" placeholder="38.7" />
                  <CurrencySelect />
                </div>
              </div>
            </div>
            <div className="flex justify-between">
              <DatePicker />
              <ActionButton style="primary" type="action">
                Зберегти результат
              </ActionButton>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-[#FFFFFF] py-20">
        <div className="container bg-[#F6F7FF] flex flex-col mx-auto py-14 px-60"></div>
      </section>
    </>
  );
}
