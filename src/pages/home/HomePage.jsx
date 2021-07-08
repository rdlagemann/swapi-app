import { FilmList } from "../../components/Film";
import { Container } from "../../components/_ui";

HomePage.propTypes = {};

function HomePage() {
  return (
    <Container>
      <h1>Swapi App</h1>
      <FilmList />
    </Container>
  );
}

export default HomePage;
