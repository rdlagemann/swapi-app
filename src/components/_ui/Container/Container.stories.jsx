import Container from "./Container.styled";

export default {
  title: "ui/Container",
  component: Container,
};

export const defaultView = () => (
  <Container>
    <p>Inner content</p>
  </Container>
);
