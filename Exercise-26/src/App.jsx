
import React from "react";
import { Outlet, NavLink } from "react-router-dom";
import { AuthContext } from "./context/AuthContext";

const App = () => {
  const { isAuthenticated, logout } = React.useContext(AuthContext);

  const navStyle = ({ isActive }) =>
    `rounded-lg px-4 py-2 text-sm font-medium transition-all duration-200 ${
      isActive
        ? "bg-indigo-50 text-indigo-600"
        : "text-gray-600 hover:bg-gray-100 hover:text-indigo-600"
    }`;

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      {/* Navbar */}
      <header className="border-b border-gray-200 bg-white shadow-sm">
        <nav className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4 px-5 py-4">
          {/* Logo */}
          <NavLink
            to="/"
            className="text-2xl font-extrabold tracking-tight text-indigo-600"
          >
            My<span className="text-gray-900">Blog.</span>
          </NavLink>

          {/* Navigation Links */}
          <div className="flex flex-wrap items-center gap-2">
            <NavLink to="/" end className={navStyle}>
              Home
            </NavLink>

            {isAuthenticated ? (
              <>
                <NavLink to="/create" className={navStyle}>
                  Create Post
                </NavLink>

                <button
                  onClick={logout}
                  className="ml-2 cursor-pointer rounded-lg bg-red-500 px-4 py-2 text-sm font-semibold text-white transition hover:bg-red-600"
                >
                  Logout
                </button>
              </>
            ) : (
              <NavLink to="/login" className={navStyle}>
                Login
              </NavLink>
            )}
          </div>
        </nav>
      </header>

      {/* Page Content */}
      <main className="mx-auto w-full max-w-6xl px-5 py-8">
        <Outlet />
      </main>
    </div>
  );
};

export default App;
