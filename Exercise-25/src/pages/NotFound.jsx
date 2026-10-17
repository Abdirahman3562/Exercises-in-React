
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <main className="flex min-h-[70vh] flex-col items-center justify-center px-6 text-center">
      <h1 className="text-8xl font-extrabold text-rose-600">
        404
      </h1>

      <h2 className="mt-4 text-2xl font-bold">
        Page Not Found
      </h2>

      <p className="mt-3 text-gray-500">
        Sorry, the page you are looking for does not exist.
      </p>

      <Link
        to="/"
        className="mt-7 rounded-lg bg-rose-600 px-6 py-3 font-semibold text-white hover:bg-rose-700"
      >
        Back to Home
      </Link>
    </main>
  );
};

export default NotFound;
