import React from "react";
import useFilmList from "../../../hooks/useFilmList";
import { Ul, Li } from "../../_ui/List";

const onClickFilm = (film) => window.alert(film.title);

/**
 * Loads a list of film titles from SWApi and implements `window.alert` on click
 */
function FilmList() {
  const { films, isLoading, error } = useFilmList();
  const isEmpty = !error && films && !films?.results?.length;

  if (isLoading) return <p>Buscando...</p>;
  if (error) return <p>Erro ao processar solicitação.</p>;
  if (isEmpty) return <p>Nenhum filme encontrado.</p>;

  return (
    <Ul>
      {films.results.map((film) => (
        <Li onClick={() => onClickFilm(film)} hover key={film.episode_id}>
          {film.title}
        </Li>
      ))}
    </Ul>
  );
}

export default FilmList;
