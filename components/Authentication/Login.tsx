import Input from "@/util/Input";
import { FormEvent, useState } from "react";
import { loginAction } from "@/store/actions/authAction";
import { useDispatch } from "react-redux";
import store from "@/store/store";
import { useRouter } from "next/router";

export default function Login() {
  const dispatch = useDispatch<typeof store.dispatch>();
  const router = useRouter();
  const [email, setEmail] = useState<string>("test@example.com");
  const [password, setPassword] = useState<string>("test@123");

  function handleSubmit(event: FormEvent) {
    event.preventDefault();
    const credentials = { email, password };
    dispatch(loginAction(credentials)).then(() => {
      router.push("/");
    });
  }

  return (
    <>
      <form
        onSubmit={handleSubmit}
        className="w-[90%] md:w-[85%] flex flex-col items-center justify-center gap-4"
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
        <button className="mt-4 w-1/2 p-2 rounded-md text-lg bg-gray-400 duration-300 hover:bg-gray-500">
          Login
        </button>
      </form>
    </>
  );
}
