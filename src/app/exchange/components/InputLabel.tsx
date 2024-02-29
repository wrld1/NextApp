"use client";

interface InputLabelProps {
  inputId: string;
}

function InputLabel({ inputId }: InputLabelProps) {
  return (
    <label
      htmlFor={inputId}
      className="mb-7 block text-xl  font-medium text-[#707C87]"
    >
      В мене є:
    </label>
  );
}

export default InputLabel;
