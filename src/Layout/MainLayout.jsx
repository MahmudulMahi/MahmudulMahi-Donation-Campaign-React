import { Outlet } from "react-router-dom";
import Navber from "../Components/Header/Navbar/Navber";


const MainLayout = () => {
  return (
    <div className="max-w-[1400px] mx-auto">
      <Navber></Navber>
      <Outlet></Outlet>
    </div>
  );
};

export default MainLayout;