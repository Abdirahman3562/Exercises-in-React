
import { useRouteError, Link } from "react-router-dom";

const NotFound = () => {
  const error = useRouteError();

  const errorMessage =
    error?.statusText ||
    error?.message ||
    "The page you are looking for does not exist.";

  return (
    <div className="flex min-h-[70vh] items-center justify-center px-4 py-12">
      <div className="w-full max-w-lg rounded-2xl border border-gray-100 bg-white p-8 text-center shadow-sm sm:p-12">

        {/* Error Icon */}
        <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-indigo-50">
          <span className="text-4xl">🔍</span>
        </div>

        {/* Error Code */}
        <h1 className="text-7xl font-extrabold tracking-tight text-indigo-600">
          {error?.status || 404}
        </h1>

        {/* Heading */}
        <h2 className="mt-4 text-2xl font-bold text-gray-900">
          Page Not Found
        </h2>

        {/* Description */}
        <p className="mt-3 text-sm leading-relaxed text-gray-500">
          Sorry, this page does not exist or may have been moved.
        </p>

        {/* Error Message */}
        <div className="mt-6 rounded-lg border border-gray-100 bg-gray-50 px-4 py-3">
          <p className="break-words text-sm text-gray-500">
            {errorMessage}
          </p>
        </div>

        {/* Home Button */}
        <Link
          to="/"
          className="mt-8 inline-flex items-center justify-center rounded-xl bg-indigo-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-indigo-700"
        >
          ← Back to Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
