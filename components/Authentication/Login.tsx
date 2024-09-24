import Input from "@/util/Input";
import { FormEvent, useState } from "react";
import { loginAction } from "@/store/actions/authAction";
import { useDispatch } from "react-redux";
import store from "@/store/store";

export default function Login() {
  const dispatch = useDispatch<typeof store.dispatch>();
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  function handleSubmit(event: FormEvent) {
    event.preventDefault();
    const credentials = { email, password };
    dispatch(loginAction(credentials));
  }

  return (
    <>
      <form
        onSubmit={handleSubmit}
        className="w-[90%] md:w-[80%] flex flex-col items-center justify-center gap-4"
      >
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
        <button className="mt-4 w-1/2 p-2 rounded-md text-lg text-gray-800 bg-gray-300 duration-300 hover:bg-gray-500">
          Login
        </button>
      </form>
    </>
  );
}
