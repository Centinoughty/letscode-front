import React, { SetStateAction, useState } from "react";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";

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
  const [isVisible, setIsVisible] = useState<boolean>(false);

  const inputType = type === "password" && isVisible ? "text" : type;

  return (
    <>
      <div className="relative w-full">
        <input
          className="py-2 px-4 rounded-sm outline-none bg-slate-200 border ring-2 ring-slate-400 ring-offset-1 w-full text-lg tracking-wider placeholder:text-lg placeholder:tracking-wider"
          placeholder={placeholder}
          type={inputType}
          value={value}
          required
          onChange={(event) => setValue(event.target.value)}
        />
        {type === "password" && (
          <button
            type="button"
            onClick={() => setIsVisible(!isVisible)}
            className="p-1 absolute right-2 top-1/2 transform -translate-y-1/2"
          >
            {isVisible ? (
              <AiFillEye size={20} />
            ) : (
              <AiFillEyeInvisible size={20} />
            )}
          </button>
        )}
      </div>
    </>
  );
}
