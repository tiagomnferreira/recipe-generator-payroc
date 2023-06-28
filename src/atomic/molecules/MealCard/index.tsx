import Thumbnail from "../../atoms/Thumbnail";
import { Container } from "./styled-components";
import { Props } from "./types";

const MealCard = ({ meal, onClick }: Props) => (
  <Container onClick={onClick}>
    <Thumbnail src={meal.strMealThumb} />
  </Container>
);

export default MealCard;
