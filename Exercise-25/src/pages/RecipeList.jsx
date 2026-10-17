
import RecipeCard from "../components/RecipeCard";
import { recipes } from "../data/recipes";

const RecipeList = () => {
  return (
    <main className="mx-auto max-w-6xl px-6 py-10">
      <h1 className="mb-6 text-2xl font-bold">
        All Recipes
      </h1>

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {recipes.map((recipe) => (
          <RecipeCard key={recipe.id} recipe={recipe} />
        ))}
      </div>
    </main>
  );
};

export default RecipeList;
