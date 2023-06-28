import { RouteObject } from "react-router-dom";
import { PATHS } from "./paths";
import App from "../App";
import HomePage from "../atomic/pages/HomePage";

const routes: RouteObject[] = [
  {
    path: PATHS.BASE,
    element: <App />,
    children: [{ index: true, element: <HomePage /> }],
  },
];

export default routes;
