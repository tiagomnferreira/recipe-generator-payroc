import { act, render, screen, waitFor } from "@testing-library/react";
import { renderWithRouter } from "../../../../utils/testUtils";
import Filters from "..";
import { Props } from "../types";
import userEvent from "@testing-library/user-event";
import { getMealByName } from "../../../../services";
import { meals } from "../../../../__mocks__/data";
import { filterIngredients } from "../utils";

describe("Filters", () => {
  const getInitialMeals = jest.fn();
  const setMeals = jest.fn();

  const props: Props = {
    getInitialMeals,
    setMeals,
  };

  describe("UI", () => {
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

  describe("Interactions", () => {
    it("should make the clear button visible when we click on the filter bar", async () => {
      renderWithRouter(<Filters {...props} />);

      let btn = screen.queryByRole("button", {
        name: "Filter clear button",
      });

      const bar = screen.getByRole("menubar", {
        name: "Filter header",
      });

      expect(btn).toBeNull();

      userEvent.click(bar);

      btn = await waitFor(() =>
        screen.getByRole("button", {
          name: "Filter clear button",
        })
      );

      expect(btn).toBeInTheDocument();
    });

    it("should execute getInitialMeals when clicking on clear btn", async () => {
      renderWithRouter(<Filters {...props} />);

      const bar = screen.getByRole("menubar", {
        name: "Filter header",
      });

      userEvent.click(bar);

      const btn = await waitFor(() =>
        screen.getByRole("button", {
          name: "Filter clear button",
        })
      );

      userEvent.click(btn);

      expect(getInitialMeals).toHaveBeenCalledTimes(1);
    });

    it("should type something in the input", async () => {
      jest.useFakeTimers();
      renderWithRouter(<Filters {...props} />);

      const bar = screen.getByRole("menubar", {
        name: "Filter header",
      });

      userEvent.click(bar);

      const btn = await waitFor(() =>
        screen.getByRole("button", {
          name: "Filter clear button",
        })
      );

      userEvent.click(btn);

      const input = screen.getByRole("search", {
        name: "Search input by name",
      });

      const text = "This is a test";

      userEvent.type(input, text);

      jest.runAllTimers();

      // @ts-ignore
      expect(input.value).toMatch(text);
    });
  });

  describe("Utils", () => {
    describe("filterIngredients", () => {
      const testData = [
        "ant",
        "bat",
        "cat",
        "dice",
        "easter",
        "formula1",
        "golf",
        "hotel",
        "india",
        "jungle",
        "kangaroo",
        "lemon",
        "mango",
        "ninja",
        "octopus",
        "penguin",
        "queen",
        "rabbit",
        "sunset",
        "tiger",
        "umbrella",
        "violet",
        "whale",
        "xylophone",
        "yacht",
        "zebra",
        "apple",
        "banana",
        "cherry",
        "dragon",
        "elephant",
        "flamingo",
        "giraffe",
        "honey",
        "ice cream",
        "jazz",
        "kiwi",
        "lion",
        "monkey",
      ];

      it("should return an empty array", () => {
        const result = filterIngredients("zzz", testData);

        expect(result).toHaveLength(0);
      });

      it("should return an array with 1 item", () => {
        const result = filterIngredients("1", testData);

        expect(result).toHaveLength(1);
      });

      it("should return an array with 5 items", () => {
        const result = filterIngredients("an", testData);

        expect(result).toHaveLength(5);
      });

      it("should return an array with 1 item", () => {
        const result = filterIngredients("InDiA", testData);

        expect(result).toHaveLength(1);
      });

      it("should return the same array but sliced", () => {
        const result = filterIngredients("", testData);

        expect(result).toHaveLength(28);
        expect(testData.length).not.toEqual(result.length);
      });
    });
  });
});
