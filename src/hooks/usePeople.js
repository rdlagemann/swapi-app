import axios from "axios";
import { useState } from "react";
import { routes } from "../mocks/handlers";

export default function usePeople() {
  const [people, setPeople] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  async function fetch(peopleId) {
    try {
      setIsLoading(true);
      const { data } = await axios.get(`${routes.people}/${peopleId}`);
      setPeople(data);
      setError(null);
    } catch (err) {
      console.error(err);
      setError(error);
    } finally {
      setIsLoading(false);
    }
  }

  return {
    people,
    isLoading,
    fetch,
    error,
  };
}
