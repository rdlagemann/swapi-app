import React from "react";
import PropTypes from "prop-types";
import useSWR from "swr";

PeopleFilmListItem.propTypes = {
  url: PropTypes.string,
};

function PeopleFilmListItem({ url = "" }) {
  const { data: film, error } = useSWR(url);
  const isLoading = !film && !error;

  if (isLoading) return <li> Buscando...</li>;
  if (error) return <li> Erro ao buscar filme</li>;

  return <li key={film.episode_id}>{film?.title || "Título desconhecido."}</li>;
}

export default PeopleFilmListItem;
