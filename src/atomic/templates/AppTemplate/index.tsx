import { PropsWithChildren, memo } from "react";
import Header from "../../molecules/Header";
import Footer from "../../atoms/Footer";
import { Container, Content } from "./styled-components";

const Main = ({ children }: PropsWithChildren) => (
  <Container>
    <Header />
    <Content>{children}</Content>
    <Footer />
  </Container>
);

export default memo(Main);
