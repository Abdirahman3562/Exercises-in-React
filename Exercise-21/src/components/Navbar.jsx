import { Bell } from "lucide-react";

const Navbar = () => {
  return (
    <div className="flex items-center justify-between rounded-xl border border-gray-200 bg-white px-5 py-4 shadow-sm">
      <div>
        <h1 className="text-lg font-bold text-gray-900">
          Welcome back, Student!
        </h1>

        <p className="mt-0.5 text-xs text-gray-500">
          Here's what's happening with your courses today.
        </p>
      </div>

      <div className="flex items-center gap-4">
        <div className="relative cursor-pointer">
          <Bell size={18} className="text-gray-700" />

          <span className="absolute -right-0.5 -top-0.5 h-2 w-2 rounded-full bg-red-500" />
        </div>

        <div className="flex h-9 w-9 items-center justify-center rounded-full bg-pink-500 text-sm font-semibold text-white">
          S
        </div>
      </div>
    </div>
  );
};

export default Navbar;