import React from "react";
import useMostSeen from "./useMostSeen";

function PeopleMostSeen() {
  const { mostSeen, isLoading, error } = useMostSeen();

  if (isLoading) return <p>Buscando personagens...</p>;
  if (error) return <p>{error.message}</p>;
  if (!mostSeen?.length) <p>Nenhum resultado.</p>;

  return (
    <ul>
      {mostSeen.map((url, i) => (
        <li key={i}>{url}</li>
      ))}
    </ul>
  );
}

export default PeopleMostSeen;
