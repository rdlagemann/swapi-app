import useSWAPI from "./useSWAPI";

export default function useFilmList() {
  const { data, error } = useSWAPI("/films");
  return {
    films: data,
    isLoading: !data && !error,
    error,
  };
}
