
import { Link, useParams } from "react-router-dom";
import { recipes } from "../data/recipes";

const RecipeDetail = () => {
  const { id } = useParams();

  const recipe = recipes.find(
    (item) => item.id === Number(id)
  );

  if (!recipe) {
    return (
      <main className="mx-auto max-w-4xl px-6 py-12">
        <h1 className="mb-4 text-2xl font-bold">
          Recipe Not Found
        </h1>
        <Link to="/recipes" className="text-rose-600">
          ← Back to Recipes
        </Link>
      </main>
    );
  }

  return (
    <main className="mx-auto max-w-4xl px-6 py-10">
      <div className="rounded-xl bg-white p-6 shadow-sm sm:p-8">
        <Link
          to="/recipes"
          className="text-sm font-medium text-rose-600 hover:underline"
        >
          ← Back to Recipes
        </Link>

        <h1 className="mt-5 text-2xl font-bold">
          {recipe.title}
        </h1>

        <p className="mt-3 text-sm text-gray-500">
          {recipe.description}
        </p>

        <span className="mt-4 inline-block rounded bg-rose-100 px-3 py-1 text-xs font-medium capitalize text-rose-600">
          {recipe.category}
        </span>

        <div className="mt-8 grid gap-8 md:grid-cols-2">
          <section>
            <h2 className="mb-4 text-lg font-bold">
              Ingredients
            </h2>

            <ul className="list-disc space-y-3 pl-5 text-sm text-gray-700">
              {recipe.ingredients.map((ingredient, index) => (
                <li key={index}>{ingredient}</li>
              ))}
            </ul>
          </section>

          <section>
            <h2 className="mb-4 text-lg font-bold">
              Instructions
            </h2>

            <ol className="list-decimal space-y-3 pl-5 text-sm text-gray-700">
              {recipe.instructions.map((step, index) => (
                <li key={index}>{step}</li>
              ))}
            </ol>
          </section>
        </div>
      </div>
    </main>
  );
};

export default RecipeDetail;
