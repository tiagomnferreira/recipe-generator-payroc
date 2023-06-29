import React from "react";
import ReactDOM from "react-dom/client";
import isPropValid from "@emotion/is-prop-valid";
import reportWebVitals from "./reportWebVitals";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import routes from "./routes";
import "./index.css";
import { StyleSheetManager } from "styled-components";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
const router = createBrowserRouter(routes);

root.render(
  <React.StrictMode>
    {/* other providers or your application's JSX */}
    <StyleSheetManager shouldForwardProp={isPropValid}>
      <RouterProvider router={router} />
    </StyleSheetManager>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
