import { CiSearch } from "react-icons/ci";

const MovieSearchBar = () => {
  return (
    <div className="font-Helvetica ring-dark-primary dark:ring-white w-80 rounded-full px-6 py-2 dark:text-white ring-1">
      <form className="flex h-8 justify-between">
        <input
          className="bg-transparent text-[#092635] placeholder-[#092635] outline-none dark:placeholder-white"
          type="text"
          placeholder="Search Movie..."
        />
        <button type="submit">
          <CiSearch className="w-6 h-6"/>
        </button>
      </form>
    </div>
  );
};

export default MovieSearchBar;
