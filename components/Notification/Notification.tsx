import { empty } from "@/store/reducers/notificationReducer";
import store from "@/store/store";
import { useEffect } from "react";
import { CgClose } from "react-icons/cg";
import { useDispatch, useSelector } from "react-redux";

export default function Notification() {
  const dispatch = useDispatch<typeof store.dispatch>();
  const message = useSelector((state: any) => state.notification.message);

  useEffect(() => {
    if (!message) {
      return;
    }

    const timer = setTimeout(() => {
      dispatch(empty());
    }, 3000);

    return () => clearTimeout(timer);
  }, [message, dispatch]);

  if (!message) return null;

  return (
    <>
      <div className="fixed w-full z-50 top-4 flex justify-center">
        <div className="z-50 px-4 py-2 bg-green-500 rounded-lg shadow-lg animate-fade-in flex justify-center items-center gap-2">
          <p>{message}</p>
          <button onClick={() => dispatch(empty())}>
            <CgClose />
          </button>
        </div>
      </div>
    </>
  );
}
