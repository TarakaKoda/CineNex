import { Outlet } from "react-router-dom";
import { NavBar } from "../section";

const Layout = () => {
  return (
    <div className="flex h-full">
      <NavBar />
      <main className="grow p-8">
        <div className="h-[70px]"></div>
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
