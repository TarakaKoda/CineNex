import { userIcon } from "../assets";

const UserLogin = () => {
  return <div className="flex items-center gap-2 p-2 rounded-full  dark:text-white dark:bg-[#161616]">
    <p className="capitalize">LOGIN</p>
    <img className="w-6 h-6" src={userIcon} alt="userIcon" />
  </div>;
};

export default UserLogin;
