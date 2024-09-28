import { signUpAction } from "@/store/actions/authAction";
import store from "@/store/store";
import Input from "@/util/Input";
import { useRouter } from "next/router";
import { FormEvent, useEffect, useState } from "react";
import { useDispatch } from "react-redux";

export default function Signup() {
  const dispatch = useDispatch<typeof store.dispatch>();
  const router = useRouter();
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  function handleSubmit(event?: FormEvent) {
    event?.preventDefault();
    const credentials = { name, email, password };
    dispatch(signUpAction(credentials)).then(() => {
      router.push("/");
    });
  }

  // Add the feature to skip to next input bar on enter
  // const inputFields = document.querySelectorAll<HTMLInputElement>("input");
  // inputFields.forEach((input, index) => {
  //   input.addEventListener("keyup", (event: KeyboardEvent) => {
  //     if (event.key === "Enter") {
  //       if (index < inputFields.length - 1) {
  //         inputFields[index + 1].focus();
  //       } else {
  //         handleSubmit();
  //       }
  //     }
  //   });
  // });

  return (
    <>
      <form
        id="loginForm"
        onSubmit={handleSubmit}
        className="w-[90%] md:w-[85%] flex flex-col items-center justify-center gap-4"
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
        <button className="mt-2 w-1/2 p-2 rounded-md text-lg bg-gray-400 duration-300 hover:bg-gray-500">
          Register
        </button>
      </form>
    </>
  );
}
