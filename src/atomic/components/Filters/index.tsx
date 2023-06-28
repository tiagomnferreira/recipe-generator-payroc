import { useState } from "react";
import { Container, Bar, List, Lock } from "./styled-components";
import { Props } from "./types";

const Filters = ({ ingredients }: Props) => {
  const [isOpen, setIsOpen] = useState(true);

  const toggle = () => setIsOpen((prevState) => !prevState);

  return (
    <Container>
      <Bar onClick={toggle}>Filters</Bar>
      <List isOpen={isOpen}>
        <Lock name={isOpen ? "locketOpen" : "locketClosed"} />
      </List>
      <Bar onClick={toggle} />
    </Container>
  );
};

export default Filters;
