
import { NavLink, Outlet, useParams } from "react-router-dom";
import { categories, recipes } from "../data/recipes";
import RecipeCard from "../components/RecipeCard";

const Categories = () => {
  const sidebarClass = ({ isActive }) =>
    `block rounded-md px-4 py-3 text-sm transition ${
      isActive
        ? "bg-rose-100 font-semibold text-rose-600"
        : "text-gray-600 hover:bg-gray-100"
    }`;

  return (
    <main className="mx-auto max-w-6xl px-6 py-10">
      <h1 className="mb-6 text-2xl font-bold">
        Categories
      </h1>

      <div className="grid gap-6 md:grid-cols-[240px_minmax(0,1fr)]">
        <aside className="h-fit rounded-xl bg-white p-5 shadow-sm">
          <h2 className="mb-4 font-bold">
            Browse Categories
          </h2>

          <NavLink to="/categories" end className={sidebarClass}>
            All Categories
          </NavLink>

          {categories.map((category) => (
            <NavLink
              key={category.id}
              to={`/categories/${category.id}`}
              className={sidebarClass}
            >
              {category.name}
            </NavLink>
          ))}
        </aside>

        <section className="min-w-0">
          <Outlet />
        </section>
      </div>
    </main>
  );
};

export const CategoryIndex = () => {
  return (
    <>
      <h2 className="mb-3 text-xl font-bold">
        Explore Categories
      </h2>

      <p className="mb-6 text-sm text-gray-500">
        Select a category to explore recipes.
      </p>

      <div className="grid gap-4 sm:grid-cols-2">
        {categories.map((category) => (
          <NavLink
            key={category.id}
            to={`/categories/${category.id}`}
            className="rounded-xl bg-white p-6 shadow-sm transition hover:shadow-md"
          >
            <h3 className="mb-2 font-bold">
              {category.name}
            </h3>
            <p className="text-sm text-gray-500">
              {category.description}
            </p>
          </NavLink>
        ))}
      </div>
    </>
  );
};

export const CategoryDetail = () => {
  const { categoryId } = useParams();

  const category = categories.find(
    (item) => item.id === categoryId
  );

  if (!category) {
    return (
      <div className="rounded-xl bg-white p-6">
        <h2 className="font-bold">Category Not Found</h2>
      </div>
    );
  }

  const filteredRecipes = recipes.filter(
    (recipe) => recipe.category === categoryId
  );

  return (
    <>
      <h2 className="mb-2 text-xl font-bold">
        {category.name} Recipes
      </h2>

      <p className="mb-6 text-sm text-gray-500">
        {category.description}
      </p>

      {filteredRecipes.length === 0 ? (
        <div className="rounded-xl bg-white p-8 text-sm text-gray-500">
          No recipes found in this category.
        </div>
      ) : (
        <div className="grid gap-5 sm:grid-cols-2">
          {filteredRecipes.map((recipe) => (
            <RecipeCard key={recipe.id} recipe={recipe} />
          ))}
        </div>
      )}
    </>
  );
};

export default Categories;
