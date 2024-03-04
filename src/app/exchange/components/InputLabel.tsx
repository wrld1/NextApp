"use client";

interface InputLabelProps {
  inputId: string;
  children: React.ReactNode;
}

function InputLabel({ inputId, children }: InputLabelProps) {
  return (
    <label
      htmlFor={inputId}
      className="mb-7 block text-xl font-medium text-[#707C87]"
    >
      {children}
    </label>
  );
}

export default InputLabel;
