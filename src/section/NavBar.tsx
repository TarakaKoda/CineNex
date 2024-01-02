import { useState } from "react";
import { DarkModeToggle, MovieSearchBar } from "../components";
import SideBarMenu from "../components/SideBarMenu";
import UserLogin from "../components/UserLogin";

const NavBar = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  return (
    <div className="dark:text-white">
      <nav className="fixed flex w-full justify-between gap-8 p-2 max-sm:flex-col-reverse max-sm:items-center max-sm:justify-center max-sm:gap-2">
        <MovieSearchBar />

        <div className="flex items-center gap-4 max-sm:justify-between max-sm:self-end max-sm:w-full">
         
          <div className="hidden max-sm:self-start items-center justify-center max-sm:flex max-sm:justify-self-start">
            <SideBarMenu />
          </div>
          <p className="font-pacifico max-sm:block hidden font-semibold ml-14">CineNex</p>
          <div className="flex max-sm:-ml-3  gap-1">
            <UserLogin />
            <DarkModeToggle />
          </div>
        </div>
        
      </nav>
    </div>
  );
};

export default NavBar;
