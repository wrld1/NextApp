"use client";

interface InputProps {
  inputId: string;
  placeholder: string;
  value: number;
  onChange: (newValue: string) => void;
}

function Input({ inputId, placeholder, value, onChange }: InputProps) {
  return (
    <input
      type="text"
      id={inputId}
      className="block w-[220px] h-[60px] p-4 rounded-md border border-[#C1C2CA] shadow-sm focus:border-[#3a3a3b] focus:ring focus:ring-primary-200 focus:ring-opacity-50 disabled:cursor-not-allowed disabled:bg-gray-50 disabled:text-gray-500"
      placeholder={placeholder}
      value={value}
      onChange={(e) => onChange(e.target.value)}
    />
  );
}

export default Input;
