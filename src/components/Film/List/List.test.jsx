import { screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { rest } from "msw";
import films, { emptyFilms } from "../../../../mocks/fixtures/films.fixtures";
import { routes } from "../../../../mocks/handlers";
import { server } from "../../../../mocks/server";
import { render } from "../../../setupTests";
import List from "./List";

it("Renders with default props", () => {
  expect(() => render(<List />)).not.toThrow();
});

describe("On load contentful film list", () => {
  it("Should render a list containing the titles", async () => {
    render(<List />);

    await waitFor(() => screen.getByRole("list"));

    films.results.forEach((film) => {
      expect(screen.getByText(film.title)).toBeInTheDocument();
    });
  });

  it("Should open a dialog containing the film title on click list item", async () => {
    jest.spyOn(window, "alert").mockImplementation(() => {});
    render(<List />);

    await waitFor(() => screen.getByRole("list"));

    films.results.forEach((film) => {
      userEvent.click(screen.getByText(film.title));
      expect(window.alert).toBeCalledWith(film.title);
    });

    expect(window.alert).toBeCalledTimes(films.results.length);
  });
});

describe("On load empty film list", () => {
  it("Should render a empty list message", async () => {
    server.use(
      rest.get(routes.films, (req, res, ctx) =>
        res.once(ctx.status(200), ctx.json(emptyFilms))
      )
    );
    render(<List />);

    const getEmptyMessage = () => screen.getByText("Nenhum filme encontrado.");
    await waitFor(getEmptyMessage);
    expect(getEmptyMessage()).toBeInTheDocument();
  });
});

describe("On loads film list with error", () => {
  it("Should render a error message", async () => {
    server.use(
      rest.get(routes.films, (req, res, ctx) => res.once(ctx.status(500)))
    );
    render(<List />);

    const getErrorMessage = () =>
      screen.getByText("Erro ao processar solicitação.");
    await waitFor(getErrorMessage);
    expect(getErrorMessage()).toBeInTheDocument();
  });
});
