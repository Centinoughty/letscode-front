import Input from "@/util/Input";
import { FormEvent, useState } from "react";

export default function Signup() {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  function handleSubmit(event: FormEvent) {
    event.preventDefault();
  }

  return (
    <>
      <form
        onSubmit={handleSubmit}
        className="w-[90%] md:w-[80%] flex flex-col items-center justify-center gap-4"
      >
        <Input placeholder="Name" type="text" value={name} setValue={setName} />
        <Input
          placeholder="Email"
          type="email"
          value={email}
          setValue={setEmail}
        />
        <Input
          placeholder="Password"
          type="password"
          value={password}
          setValue={setPassword}
        />
        <button className="w-1/2 p-2 rounded-md text-lg text-gray-800 bg-gray-300 duration-300 hover:bg-gray-500">
          Register
        </button>
      </form>
    </>
  );
}
