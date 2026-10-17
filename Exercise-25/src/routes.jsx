import { createBrowserRouter } from "react-router-dom";

import App from "./App";
import Home from "./pages/Home";
import RecipeList from "./pages/RecipeList";
import RecipeDetail from "./pages/RecipeDetail";
import Categories, { CategoryIndex, CategoryDetail } from "./pages/Categories";
import NotFound from "./pages/NotFound";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <Home /> },
      { path: "recipes", element: <RecipeList /> },
      { path: "recipes/:id", element: <RecipeDetail /> },
      {
        path: "categories",
        element: <Categories />,
        children: [
          { index: true, element: <CategoryIndex /> },
          { path: ":categoryId", element: <CategoryDetail /> },
        ],
      },
      { path: "*", element: <NotFound /> },
    ],
  },
]);

export default router;
