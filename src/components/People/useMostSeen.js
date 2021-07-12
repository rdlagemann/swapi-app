import { useEffect, useState } from "react";
import useFilmList from "../../hooks/useFilmList";

export default function useMostSeen() {
  const [mostSeen, setMostSeen] = useState([]);
  const { films, isLoading, error } = useFilmList();

  useEffect(() => {
    if (isLoading) {
      return;
    }

    if (!films?.results?.length) {
      return;
    }

    const allCharacters = {};

    films.results.forEach((film) => {
      film.characters.forEach((charUrl) => {
        const hasValue = typeof allCharacters[charUrl] === "number";
        if (hasValue) {
          allCharacters[charUrl]++;
        } else {
          allCharacters[charUrl] = 1;
        }
      });
    });

    const maxSeen = Math.max(...Object.values(allCharacters));
    const mostSeenTemp = [];

    Object.keys(allCharacters).forEach((key) => {
      if (allCharacters[key] === maxSeen) {
        mostSeenTemp.push(key);
      }
    });

    setMostSeen(mostSeenTemp);
  }, [films, isLoading]);

  return {
    mostSeen,
    isLoading,
    error,
  };
}
