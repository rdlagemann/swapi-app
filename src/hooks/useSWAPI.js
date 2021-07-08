import useSWR from "swr";
import swApi from "../utils/apis/sw.api";

const fetcher = (...args) => swApi.get(...args).then(({ data }) => data);

/**
 * Hook wrapper para realizar data-fetching na SWAPI
 *
 * @param {string} uri Identificador do recurso na API
 * @param  {options} options Parâmetros de configuração passados para a lib de data fetching
 * @returns Hook de data-fetching
 */
export default function useSWAPI(uri, options) {
  return useSWR(uri, fetcher, options);
}
