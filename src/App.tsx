import AppTemplate from "./atomic/templates/AppTemplate";
import { Outlet, RouterProvider } from "react-router-dom";

function App() {
  return (
    <AppTemplate>
      <Outlet />
    </AppTemplate>
  );
}

export default App;
