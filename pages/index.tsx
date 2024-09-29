import Dashboard from "@/components/Dashboard/Dashboard";
import NavBar from "@/components/NavBar/NavBar";
import { useSelector } from "react-redux";

export default function Home() {
  const isAuth = useSelector((state: any) => state.auth.isAuth);

  return (
    <>
      <NavBar />
      {isAuth ? (
        <Dashboard />
      ) : (
        <p className="flex justify-center text-4xl">
          Sorry. Login to see your files
        </p>
      )}
    </>
  );
}
