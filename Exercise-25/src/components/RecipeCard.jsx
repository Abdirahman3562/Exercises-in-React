
import { Link } from "react-router-dom";

const RecipeCard = ({ recipe }) => {
  return (
    <Link
      to={`/recipes/${recipe.id}`}
      className="block rounded-lg border border-gray-100 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
    >
      <h3 className="mb-2 text-base font-bold text-gray-900">
        {recipe.title}
      </h3>

      <p className="mb-4 text-sm leading-relaxed text-gray-600">
        {recipe.description}
      </p>

      <span className="inline-block rounded bg-rose-100 px-2.5 py-1 text-xs font-medium capitalize text-rose-600">
        {recipe.category}
      </span>
    </Link>
  );
};

export default RecipeCard;
