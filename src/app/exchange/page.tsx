import ActionButton from "@/components/ActionButton";
import Hero from "@/components/Hero";

export default function ExchangePage() {
  return (
    <>
      <Hero />
      <section className="bg-[#F6F7FF] py-20">
        <div className="container bg-[#FFFFFF] flex flex-col mx-auto py-14 px-60">
          <h2 className="font-bold text-[#1F1E25] text-4xl">Конвертер валют</h2>
          <div className="flex flex-col gap-6 mt-16 justify-between">
            <div className="flex justify-between">
              <div>
                <label
                  htmlFor="sellInput"
                  className="mb-7 block text-xl  font-medium text-[#707C87]"
                >
                  В мене є:
                </label>
                <div className="flex items-center gap-4">
                  <input
                    type="text"
                    id="sellInput"
                    className="block w-3/4 py-3 px-2 rounded-md border border-[#C1C2CA] shadow-sm focus:border-[#3a3a3b] focus:ring focus:ring-primary-200 focus:ring-opacity-50 disabled:cursor-not-allowed disabled:bg-gray-50 disabled:text-gray-500"
                    placeholder="1000"
                  />
                  <select
                    id="SellCurrency"
                    className="block w-1/4  py-3 px-3 rounded-md border border-[#C1C2CA] shadow-sm focus:border-[#3a3a3b] focus:ring focus:ring-primary-200 focus:ring-opacity-50 disabled:cursor-not-allowed disabled:bg-gray-50"
                  >
                    <option value="USD">USD</option>
                    <option value="EUR">EUR</option>
                    <option value="GBP">GBP</option>
                    <option value="CNY">CNY</option>
                  </select>
                </div>
              </div>
              <div>
                <label
                  htmlFor="buyInput"
                  className="mb-7 block text-xl  font-medium text-[#707C87]"
                >
                  Хочу придбати:
                </label>
                <div className="flex items-center gap-4">
                  <input
                    type="text"
                    id="buyInput"
                    className="block w-3/4 py-3 px-2 rounded-md border border-[#C1C2CA] shadow-sm focus:border-[#3a3a3b] focus:ring focus:ring-primary-200 focus:ring-opacity-50 disabled:cursor-not-allowed disabled:bg-gray-50 disabled:text-gray-500"
                    placeholder="38.7"
                  />
                  <select
                    id="BuyCurrency"
                    className="block w-1/4  py-3 px-3 rounded-md border border-[#C1C2CA] shadow-sm focus:border-[#3a3a3b] focus:ring focus:ring-primary-200 focus:ring-opacity-50 disabled:cursor-not-allowed disabled:bg-gray-50"
                  >
                    <option value="EUR">EUR</option>
                    <option value="USD">USD</option>
                    <option value="GBP">GBP</option>
                    <option value="CNY">CNY</option>
                  </select>
                </div>
              </div>
            </div>
            <div className="flex justify-between">
              <div>DATEPICKER</div>
              <ActionButton style="primary" type="action">
                Зберегти результат
              </ActionButton>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
