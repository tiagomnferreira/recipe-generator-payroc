import { useState } from "react";
import { Container, Bar, List, Lock } from "./styled-components";
import { Props } from "./types";

const Filters = () => {
  const [isOpen, setIsOpen] = useState(false);

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
