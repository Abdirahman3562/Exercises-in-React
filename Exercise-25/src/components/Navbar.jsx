
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const navClass = ({ isActive }) =>
    `text-sm font-medium transition-colors hover:text-rose-600 ${
      isActive ? "text-rose-600" : "text-gray-600"
    }`;

  return (
    <header className="border-b border-gray-200 bg-white">
      <nav className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4 px-6 py-5">
        <NavLink to="/" className="text-2xl font-extrabold text-rose-600">
          Recipe Book
        </NavLink>

        <div className="flex items-center gap-6">
          <NavLink to="/" end className={navClass}>
            Home
          </NavLink>
          <NavLink to="/recipes" className={navClass}>
            Recipes
          </NavLink>
          <NavLink to="/categories" className={navClass}>
            Categories
          </NavLink>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
