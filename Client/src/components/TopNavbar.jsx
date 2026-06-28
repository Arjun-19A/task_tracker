import { FaSearch, FaUserCircle } from "react-icons/fa";

const TopNavbar = ({ search, setSearch }) => {
  return (
    <header className="bg-[#f2efff81] md:px-6 py-3 pb-1 flex flex-col md:flex-row md:items-center md:justify-between gap-4 ">
      <div className="text-center md:text-left">
        <h2 className="text-4xl font-bold text-gray-800">Task Tracker</h2>
        <p className="text-md text-gray-500 mt-1">
          Manage your daily tasks efficiently
        </p>
      </div>
      <div className="flex flex-row justify-center items-center gap-4 px-4">
        <div className="relative w-full sm:w-72">
          <FaSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />

          <input
            type="text"
            placeholder="Search tasks..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full rounded-xl border border-gray-300 pl-10 pr-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div className="border border-gray-200 rounded-xl px-4 py-2">
          <FaUserCircle className="text-3xl text-gray-500" />
        </div>
      </div>
    </header>
  );
};

export default TopNavbar;
