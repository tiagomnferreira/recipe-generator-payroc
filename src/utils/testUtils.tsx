import React from "react";
import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";

export const renderWithRouter = (
  ui: React.ReactElement<any, string | React.JSXElementConstructor<any>>
) =>
  render(ui, {
    wrapper: (props) => <MemoryRouter {...props} />,
  });
