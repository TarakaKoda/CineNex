import { FaUserCheck, FaUserTimes } from "react-icons/fa";
import { Link } from "react-router-dom";

interface Props {
  isAuthenticated: boolean;
}

const UserLogin = ({ isAuthenticated }: Props) => {
  return (
    <div className="flex items-center gap-2 rounded-full p-2 dark:border-white dark:text-white">
      {!isAuthenticated ? (
        <>
          <Link to={"/login"}>
            <p className=" font-pacifico text-sm font-semibold">login</p>
          </Link>

          <FaUserCheck />
        </>
      ) : (
        <>
          <Link to={"/home"}>
            <p className=" font-pacifico text-sm font-semibold">logout</p>
          </Link>

          <FaUserTimes />
        </>
      )}
    </div>
  );
};

export default UserLogin;
