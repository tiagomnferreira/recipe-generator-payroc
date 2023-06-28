import Button from "../../atoms/Button";
import { Container, Footer, List, Header } from "./styled-components";
import { Props } from "./types";

const Filters = ({ ingredients }: Props) => (
  <Container>
    <Header />
    <List></List>
    <Footer>
      <Button>Apply Filter</Button>
    </Footer>
  </Container>
);

export default Filters;
