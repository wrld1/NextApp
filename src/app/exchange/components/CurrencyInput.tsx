"use client";

interface CurrencyInputProps {
  inputId: string;
  placeholder: string;
}

function CurrencyInput({ inputId, placeholder }: CurrencyInputProps) {
  return (
    <input
      type="text"
      id={inputId}
      className="block w-3/4 py-3 px-2 rounded-md border border-[#C1C2CA] shadow-sm focus:border-[#3a3a3b] focus:ring focus:ring-primary-200 focus:ring-opacity-50 disabled:cursor-not-allowed disabled:bg-gray-50 disabled:text-gray-500"
      placeholder={placeholder}
    />
  );
}

export default CurrencyInput;
