import { memo } from "react";
import Filters from "../../molecules/Filters";
import { Container } from "./styled-components";

const Sidebar = () => (
  <Container>
    <Filters ingredients={[]} />
  </Container>
);

export default memo(Sidebar);
