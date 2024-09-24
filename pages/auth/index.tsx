import Login from "@/components/Authentication/Login";
import Signup from "@/components/Authentication/Signup";
import { useState } from "react";
import { FaGithub, FaGoogle, FaLinkedin } from "react-icons/fa6";

export default function Authenticatoin() {
  const [isLogin, setIsLogin] = useState<boolean>(false);

  return (
    <>
      <main className="bg-black h-screen flex justify-center items-center">
        <div className="w-full md:w-[75%] md:h-[80%] flex">
          <div className="hidden md:block min-w-[60%] relative">
            <img src="" alt="" />
          </div>
          <div className="w-full flex flex-col gap-6 items-center">
            <div className="w-[260px]">
              <img src="./logo.png" className="opacity-90 duration-300 hover:opacity-100" />
            </div>
            {isLogin ? <Login /> : <Signup />}
            {isLogin ? (
              <div className="flex justify-center gap-2 text-gray-400">
                <p>Forgot password?</p>
                <p>•</p>
                <button onClick={() => setIsLogin(false)}>Signup</button>
              </div>
            ) : (
              <div className="flex justify-center gap-2 text-gray-400">
                <p>Have an account?</p>
                <p>•</p>
                <button onClick={() => setIsLogin(true)}>Login</button>
              </div>
            )}
            <p className="text-gray-400">or You can sign in with</p>
            <div className="text-gray-500 flex justify-center items-center gap-4">
              <button>
                <FaGithub className="duration-300 hover:text-white" size={24} />
              </button>
              <button>
                <FaGoogle className="duration-300 hover:text-white" size={24} />
              </button>
              <button>
                <FaLinkedin
                  className="duration-300 hover:text-white"
                  size={24}
                />
              </button>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
