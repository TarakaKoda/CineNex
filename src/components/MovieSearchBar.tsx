import { CiSearch } from "react-icons/ci";

const MovieSearchBar = () => {
  return (
    <div className="min-small-screen w-80 grow  rounded-full  px-6 py-2 font-Helvetica shadow-md ring-1 ring-dark-primary max-[330px]:w-60 dark:text-white dark:ring-white">
      <form className="flex h-8 justify-between">
        <input
          className="grow bg-transparent text-[#092635] placeholder-[#092635] outline-none dark:placeholder-white"
          type="text"
          placeholder="Search Movie..."
        />
        <button type="submit">
          <CiSearch className="h-6 w-6" />
        </button>
      </form>
    </div>
  );
};

export default MovieSearchBar;
