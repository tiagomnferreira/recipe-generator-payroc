import { memo, useEffect, useState } from "react";
import {
  Container,
  Bar,
  FiltersList,
  Lock,
  Group,
  ClearBtn,
  Divider,
  DividerText,
} from "./styled-components";
import { Props } from "./types";
import Text from "../../atoms/Text";
import Input from "../../atoms/Input";
import { debounce } from "lodash";
import {
  filterBy,
  filterIngredients,
  onChange,
  onSearchIngredient,
  parseIngredientsToLabels,
  parseToLabels,
} from "./utils";
import {
  getAllAreas,
  getAllCategories,
  getAllIngredients,
} from "../../../services";
import TagsListing from "../../molecules/TagsListing";

const Filters = ({ setMeals, getInitialMeals }: Props) => {
  const [isOpen, setIsOpen] = useState(false);
  const [categories, setCategories] = useState<string[]>([]);
  const [ingredients, setIngredients] = useState<string[]>([]);
  const [areas, setAreas] = useState<string[]>([]);
  const [activeTag, setActiveTag] = useState<string | undefined>(undefined);
  const [ingredientFilter, setIngredientFilter] = useState("");

  const toggle = () => setIsOpen((prevState) => !prevState);

  useEffect(() => {
    getAllIngredients().then(({ data }) => {
      setIngredients(parseIngredientsToLabels(data?.meals || []));
    });
    getAllAreas().then(({ data }) => {
      setAreas(parseToLabels(data?.meals || []));
    });
    getAllCategories().then(({ data }) => {
      setCategories(parseToLabels(data?.meals || []));
    });
  }, []);

  return (
    <Container aria-label="Filters container" role="listbox">
      <Bar onClick={toggle} aria-label="Filter header" role="menubar">
        Filter
      </Bar>
      <Lock onClick={toggle} name={isOpen ? "locketOpen" : "locketClosed"} />
      <FiltersList isOpen={isOpen}>
        <Group aria-label="Filter by name group" role="group">
          <Text>By meal name:</Text>
          <Input
            placeholder="Type your meal name"
            onChange={debounce(onChange(setMeals, getInitialMeals), 1000)}
            aria-label="Search input by name"
            role="search"
          />
        </Group>

        <Divider>
          <DividerText>OR</DividerText>
        </Divider>

        <Group aria-label="Filter by ingredient group" role="group">
          <Text>By Ingredient:</Text>
          <Input
            placeholder="Type the ingredient's name"
            onChange={debounce(onSearchIngredient(setIngredientFilter), 1000)}
          />
          <TagsListing
            activeTag={activeTag}
            labels={filterIngredients(ingredientFilter, ingredients)}
            onTagClick={(ingredient) =>
              filterBy(setMeals, setActiveTag)("i", ingredient)
            }
          />
        </Group>

        <Divider>
          <DividerText>OR</DividerText>
        </Divider>

        <Group aria-label="Filter by category group" role="group">
          <Text>By Category:</Text>
          <TagsListing
            activeTag={activeTag}
            labels={categories}
            onTagClick={(category) =>
              filterBy(setMeals, setActiveTag)("c", category)
            }
          />
        </Group>

        <Divider>
          <DividerText>OR</DividerText>
        </Divider>

        <Group aria-label="Filter by area group" role="group">
          <Text>By Area:</Text>
          <TagsListing
            activeTag={activeTag}
            labels={areas}
            onTagClick={(area) => filterBy(setMeals, setActiveTag)("a", area)}
          />
        </Group>
      </FiltersList>
      {isOpen && (
        <ClearBtn
          onClick={getInitialMeals}
          aria-label="Filter clear button"
          role="button"
        >
          Clear
        </ClearBtn>
      )}
      <Bar onClick={toggle} aria-label="Filter footer" role="menubar" />
    </Container>
  );
};

export default memo(Filters);
