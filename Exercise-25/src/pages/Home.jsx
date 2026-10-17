
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <main className="mx-auto max-w-6xl px-6 py-12">
      <div className="mb-12 py-12 text-center">
        <h1 className="mb-4 text-3xl font-bold md:text-4xl">
          Welcome to Recipe Book
        </h1>
        <p className="text-gray-500">
          Discover delicious recipes and explore your favorite meals.
        </p>
      </div>

      <div className="mx-auto grid max-w-4xl gap-6 md:grid-cols-2">
        <Link
          to="/recipes"
          className="rounded-xl bg-white p-8 shadow-sm transition hover:shadow-md"
        >
          <h2 className="mb-3 text-xl font-bold">All Recipes</h2>
          <p className="mb-5 text-sm text-gray-500">
            Browse our delicious collection of recipes.
          </p>
          <span className="font-semibold text-rose-600">
            Explore Recipes →
          </span>
        </Link>

        <Link
          to="/categories"
          className="rounded-xl bg-white p-8 shadow-sm transition hover:shadow-md"
        >
          <h2 className="mb-3 text-xl font-bold">Categories</h2>
          <p className="mb-5 text-sm text-gray-500">
            Find recipes by your favorite category.
          </p>
          <span className="font-semibold text-rose-600">
            View Categories →
          </span>
        </Link>
      </div>
    </main>
  );
};

export default Home;
