import "./AppLayout.css";
import { Outlet } from "react-router-dom";
import { Navbar } from "../Navbar/Navbar";

export const AppLayout = () => {
  return (
    <div className="applayout">
      <Navbar />
      <div className="outlet-content">
        <Outlet />
      </div>
    </div>
  );
};
