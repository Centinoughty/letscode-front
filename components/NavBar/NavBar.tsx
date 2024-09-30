import Modal from "@/util/Modal";
import { useRouter } from "next/router";
import { useState } from "react";
import { FaPlus, FaRegBell } from "react-icons/fa6";
import { useSelector } from "react-redux";
import CreateFile from "../Forms/CreateFile";

export default function NavBar() {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const isAuth = useSelector((state: any) => state.auth.isAuth);
  const router = useRouter();

  function handleCreateFileClick() {
    setIsModalOpen(true);
  }

  function handleCloseModal() {
    setIsModalOpen(false);
  }

  return (
    <>
      <nav className="px-3 py-1 flex justify-around items-center gap-3">
        <button
          onClick={() => {
            router.push("/");
          }}
        >
          <img className="h-[55px]" src="./logo.png" alt="" />
        </button>
        {isAuth && (
          <div className="hidden sm:block">
            <input className="px-4 py-2 w-auto tracking-wider bg-slate-200 rounded-full" />
          </div>
        )}
        {isAuth ? (
          <div className="p-1 flex justify-center items-center gap-3">
            <button
              onClick={handleCreateFileClick}
              className="p-2 rounded-full duration-200 hover:bg-gray-300"
            >
              <FaPlus size={20} />
            </button>
            <button className="p-2 rounded-full duration-200 hover:bg-gray-300">
              <FaRegBell size={20} />
            </button>
            <p className="aspect-square w-[40px] text-center text-2xl rounded-full bg-yellow-200 flex justify-center items-center">
              A
            </p>
          </div>
        ) : (
          <>
            <div className="flex justify-center items-center text-slate-500">
              <button
                onClick={() => {
                  router.push("/auth?mode=login");
                }}
                className="py-1 px-2 rounded-sm"
              >
                Login
              </button>
              <p>|</p>
              <button
                onClick={() => {
                  router.push("/auth?mode=register");
                }}
                className="py-1 px-2 roudned-sm"
              >
                Register
              </button>
            </div>
          </>
        )}
      </nav>

      {/*complete the code*/}
      <Modal isOpen={isModalOpen} onClose={handleCloseModal}>
        <CreateFile onClose={handleCloseModal} />
      </Modal>
    </>
  );
}
