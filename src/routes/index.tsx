import { RouteObject } from "react-router-dom";
import { PATHS } from "./paths";
import App from "../App";
import HomePage from "../atomic/pages/HomePage";
import MealPage from "../atomic/pages/MealPage";
import { getMealById } from "../services";

const routes: RouteObject[] = [
  {
    path: PATHS.BASE,
    element: <App />,
    children: [
      { index: true, element: <HomePage /> },
      {
        path: PATHS.MEAL + PATHS.ID,
        element: <MealPage />,
        loader: async ({ params }) => {
          const response = await getMealById(params.id || "");
          return response.data.meals.pop();
        },
      },
    ],
  },
];

export default routes;
