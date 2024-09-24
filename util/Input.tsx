import React, { SetStateAction } from "react";

interface InputProps {
  placeholder: string;
  type: string;
  value: string;
  setValue: React.Dispatch<SetStateAction<string>>;
}

export default function Input({
  placeholder,
  type,
  value,
  setValue,
}: InputProps) {
  return (
    <>
      <input
        className="py-2 px-4 rounded-md outline-none w-full text-lg tracking-wider placeholder:text-lg placeholder:tracking-wider"
        placeholder={placeholder}
        type={type}
        value={value}
        onChange={(event) => setValue(event.target.value)}
      />
    </>
  );
}
