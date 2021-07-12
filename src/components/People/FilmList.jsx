import PropTypes from "prop-types";
import usePeople from "../../hooks/usePeople";
import PeopleFilmListItem from "./FilmListItem";

PeopleFilmList.propTypes = {
  people: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
  }),
};

PeopleFilmList.defaultProps = {
  people: null,
};

function PeopleFilmList({ people }) {
  const { people: peopleRemote, fetch, error } = usePeople();

  if (!people) return null;
  if (error) return <p>{error?.message || "Ocorreu um erro."}</p>;

  return (
    <>
      <button onClick={() => fetch(people.id)}>{people?.name}</button>
      <ul data-testid="filmList">
        {peopleRemote &&
          peopleRemote.films.map((filmUrl, i) => (
            <PeopleFilmListItem url={filmUrl} key={i} />
          ))}
      </ul>
    </>
  );
}

export default PeopleFilmList;
