import Login from "@/components/Authentication/Login";
import Signup from "@/components/Authentication/Signup";
import { useState } from "react";
import {
  FaGithub,
  FaGoogle,
  FaLinkedin,
  FaSquareFacebook,
} from "react-icons/fa6";

export default function Authenticatoin() {
  const [isLogin, setIsLogin] = useState<boolean>(false);

  return (
    <>
      <main className="h-screen bg-slate-100 flex justify-center items-center">
        <div className="p-1 w-full md:w-[40%] lg:w-[25%] h-full md:h-[90%] flex flex-col items-center gap-6">
          <div className="flex justify-center">
            <img
              className="w-[80%] max-w-[400px] opacity-80 duration-300 hover:opacity-100 hover:scale-[1.01]"
              src="./logo.png"
              alt="Letscode"
            />
          </div>
          {isLogin ? <Login /> : <Signup />}
          {isLogin ? (
            <div className="flex justify-center gap-2 text-[16px] text-slate-600">
              <button>Forgot password?</button>
              <p>•</p>
              <button className="duration-300 hover:text-slate-800" onClick={() => setIsLogin(false)}>Sign Up</button>
            </div>
          ) : (
            <div className="flex justify-center gap-2 text-[16px] text-slate-600">
              <p>Have an account?</p>
              <p>•</p>
              <button className="duration-300 hover:text-slate-800" onClick={() => setIsLogin(true)}>Login</button>
            </div>
          )}
          <div>
            <p className="text-lg text-slate-600">or You can sign in with</p>
          </div>
          <div className="flex justify-center items-center gap-6">
            <button>
              <FaGoogle
                size={25}
                className="text-slate-500 duration-200 hover:text-black hover:rotate-[360deg]"
              />
            </button>
            <button>
              <FaSquareFacebook
                size={25}
                className="text-slate-500 duration-200 hover:text-black hover:rotate-[360deg]"
              />
            </button>
            <button>
              <FaGithub
                size={25}
                className="text-slate-500 duration-200 hover:text-black hover:rotate-[360deg]"
              />
            </button>
            <button>
              <FaLinkedin
                size={25}
                className="text-slate-500 duration-200 hover:text-black hover:rotate-[360deg]"
              />
            </button>
          </div>
        </div>
      </main>
    </>
  );
}
