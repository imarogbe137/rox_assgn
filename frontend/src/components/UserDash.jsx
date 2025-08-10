import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import SearchIcon from "@mui/icons-material/Search";
const UserDash = () => {
  return (
    <div className="flex min-h-screen min-w-screen">
      <div className="flex-[1]  bg-linear-65 from-purple-500 to-green-300">
        sidebar
        <div className="mt-5 mr-5 ml-5 rounded-full p-4 items-center justify-center flex">
          <AccountCircleIcon sx={{ fontSize: 60 }} />
        </div>
      </div>

      {/*content div */}
      <div className="flex-[4]  bg-linear-65 from-purple-500 to-pink-500">
        content
        <div className="absolute top-5 right-50">
          <input
            className="bg-white pl-2 pr-2 p-2 rounded-2xl mr-2"
            placeholder="Search"
          />
          <button className=" p-2 rounded-2xl focus:cursor-pointer">
            <SearchIcon className="hover:opacity-50 " sx={{ fontSize: 40 }} />
          </button>
        </div>
        <div>grid</div>
      </div>
    </div>
  );
};

export default UserDash;
