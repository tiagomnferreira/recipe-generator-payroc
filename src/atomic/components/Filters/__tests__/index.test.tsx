import { render, screen } from "@testing-library/react";
import { renderWithRouter } from "../../../../utils/testUtils";
import Filters from "..";
import { Props } from "../types";

describe("Filters", () => {
  describe("UI", () => {
    const getInitialMeals = jest.fn();
    const setMeals = jest.fn();

    const props: Props = {
      getInitialMeals,
      setMeals,
    };

    it("should match the generated snapshot", () => {
      const { container } = renderWithRouter(<Filters {...props} />);

      expect(container).toMatchSnapshot();
    });

    it("shoulder render the filters container", () => {
      renderWithRouter(<Filters {...props} />);

      const container = screen.getByRole("listbox", {
        name: "Filters container",
      });

      expect(container).toBeInTheDocument();
    });
  });
});
