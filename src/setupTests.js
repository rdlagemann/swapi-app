// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import "@testing-library/jest-dom";
import { render, waitFor } from "@testing-library/react";
import { Provider } from "react-redux";
import { cache } from "swr";
import { server } from "./mocks/server";
import DataFetchingConfig from "./components/DataFetchingConfig/DataFetchingConfig";
import store from "./store";

beforeAll(() => server.listen());

beforeEach(async () => {
  server.resetHandlers();
  await waitFor(() => cache.clear());
});

afterAll(() => server.close());

const Providers = ({ children }) => (
  <DataFetchingConfig value={{ dedupingInterval: 0 }}>
    <Provider store={store}>{children}</Provider>
  </DataFetchingConfig>
);

const customRender = (ui, options) =>
  render(ui, { wrapper: Providers, ...options });

export * from "@testing-library/react";

export { customRender as render };
