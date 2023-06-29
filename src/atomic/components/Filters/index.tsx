import { useEffect, useState } from "react";
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
      setIngredients(parseIngredientsToLabels(data.meals));
    });
    getAllAreas().then(({ data }) => {
      setAreas(parseToLabels(data.meals));
    });
    getAllCategories().then(({ data }) => {
      setCategories(parseToLabels(data.meals));
    });
  }, []);

  return (
    <Container>
      <Bar onClick={toggle}>Filter</Bar>
      <Lock name={isOpen ? "locketOpen" : "locketClosed"} />
      <FiltersList isOpen={isOpen}>
        <Group>
          <Text>By meal name:</Text>
          <Input
            placeholder="Type your meal name"
            onChange={debounce(onChange(setMeals), 1000)}
          />
        </Group>

        <Divider>
          <DividerText>OR</DividerText>
        </Divider>

        <Group>
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

        <Group>
          <Text>By Area:</Text>
          <TagsListing
            activeTag={activeTag}
            labels={areas}
            onTagClick={(area) => filterBy(setMeals, setActiveTag)("a", area)}
          />
        </Group>

        <Divider>
          <DividerText>OR</DividerText>
        </Divider>

        <Group>
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
      </FiltersList>
      {isOpen && <ClearBtn onClick={getInitialMeals}>Clear</ClearBtn>}
      <Bar onClick={toggle} />
    </Container>
  );
};

export default Filters;
