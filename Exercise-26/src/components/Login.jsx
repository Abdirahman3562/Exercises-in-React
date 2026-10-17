
import React, { useContext } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

const Login = () => {
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();

  const handleLogin = () => {
    login();

    // Return to the requested page, or Home
    const from = location.state?.from?.pathname || "/";
    navigate(from, { replace: true });
  };

  return (
    <div className="flex min-h-[70vh] items-center justify-center px-4 py-10">
      <div className="w-full max-w-md rounded-2xl border border-gray-100 bg-white p-8 shadow-lg sm:p-10">
        {/* Icon */}
        <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-indigo-50">
          <svg
            className="h-8 w-8 text-indigo-600"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            viewBox="0 0 24 24"
          >
            <rect x="5" y="10" width="14" height="11" rx="2" />
            <path d="M8 10V7a4 4 0 0 1 8 0v3" />
          </svg>
        </div>

        {/* Heading */}
        <div className="mb-8 text-center">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900">
            Welcome Back
          </h2>

          <p className="mt-3 text-sm leading-relaxed text-gray-500">
            Please log in to access the Create Post page and start
            sharing your ideas.
          </p>
        </div>

        {/* Login Button */}
        <button
          type="button"
          onClick={handleLogin}
          className="w-full cursor-pointer rounded-xl bg-indigo-600 px-6 py-3.5 text-sm font-semibold text-white shadow-sm transition-all duration-200 hover:bg-indigo-700 hover:shadow-md focus:outline-none focus:ring-4 focus:ring-indigo-100"
        >
          Log In
        </button>

        {/* Footer */}
        <p className="mt-6 text-center text-xs text-gray-400">
          Secure access to MyBlog
        </p>
      </div>
    </div>
  );
};

export default Login;
