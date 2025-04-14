import "./AppLayout.css";
import { Outlet, useNavigation } from "react-router-dom";
import { Navbar } from "./Navbar";
import { Loading } from "./Loading";

export const AppLayout = () => {
  const navigation = useNavigation();
  if (navigation.state === "loading") return <Loading />;
  return (
    <div className="applayout">
      <Navbar />
      <div className="outlet-content">
        <Outlet />
      </div>
    </div>
  );
};
