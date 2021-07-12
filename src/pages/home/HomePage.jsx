import { FilmList } from "../../components/Film";
import PeopleFilmList from "../../components/People/FilmList";
import PeopleMostSeen from "../../components/People/MostSeen";
import { Container } from "../../components/_ui";

HomePage.propTypes = {};

function HomePage() {
  return (
    <Container>
      <h1>Swapi App</h1>
      <FilmList />
      <PeopleFilmList people={{ id: 1, name: "Luke" }} />
      <PeopleMostSeen />
    </Container>
  );
}

export default HomePage;
