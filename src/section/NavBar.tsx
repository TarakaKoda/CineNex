import { DarkModeToggle, MovieSearchBar } from "../components";
import UserLogin from "../components/UserLogin";

const NavBar = () => {
  return (
    <>
      <nav className="fixed flex justify-between w-full p-2">
        <MovieSearchBar />
        <div className="flex gap-4 items-center">

        <UserLogin/>
        <DarkModeToggle />
        </div>
      </nav>
    </>
  );
};

export default NavBar;
