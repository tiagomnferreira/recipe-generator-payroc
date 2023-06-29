import Thumbnail from "../../atoms/Thumbnail";
import { Container, MealName } from "./styled-components";
import { Props } from "./types";

const MealCard = ({ meal, onClick }: Props) => (
  <Container onClick={() => onClick(meal.idMeal)}>
    <Thumbnail src={meal.strMealThumb || ""} />
    <MealName>{meal.strMeal}</MealName>
  </Container>
);

export default MealCard;
