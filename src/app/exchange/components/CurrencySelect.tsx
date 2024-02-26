function CurrencySelect() {
  return (
    <select
      id="SellCurrency"
      className="block w-1/4  py-3 px-3 rounded-md border border-[#C1C2CA] shadow-sm focus:border-[#3a3a3b] focus:ring focus:ring-primary-200 focus:ring-opacity-50 disabled:cursor-not-allowed disabled:bg-gray-50"
    >
      <option value="USD">USD</option>
      <option value="EUR">EUR</option>
      <option value="GBP">GBP</option>
      <option value="CNY">CNY</option>
    </select>
  );
}

export default CurrencySelect;
