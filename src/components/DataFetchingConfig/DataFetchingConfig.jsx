import { SWRConfig } from "swr";
import axios from "axios";

const DEFAULT_VALUE = {
  fetcher: (...args) => axios.get(...args).then((res) => res.data),
  revalidateOnFocus: false,
  revalidateOnReconnect: false,
};

export default function DataFetchingConfig({ children, value = {} }) {
  return (
    <SWRConfig value={{ ...DEFAULT_VALUE, ...value }}>{children}</SWRConfig>
  );
}
