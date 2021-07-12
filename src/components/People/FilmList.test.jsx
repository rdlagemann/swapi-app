import { act, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { rest } from "msw";
import { LUKE } from "../../mocks/fixtures/people.fixture";
import { routes } from "../../mocks/handlers";
import { server } from "../../mocks/server";
import { render } from "../../setupTests";
import PeopleFilmList from "./FilmList";

it("Deve renderizar com props default", () => {
  expect(() => render(<PeopleFilmList />)).not.toThrow();
});

it("Deve renderizar botão com nome do personagem", () => {
  render(<PeopleFilmList people={LUKE} />);

  const button = screen.getByText(LUKE.name);

  expect(button).toBeInTheDocument();
});

it("Ao clicar deve apresentar lista", async () => {
  server.use(
    rest.get(`${routes.people}/${LUKE.id}`, (req, res, ctx) =>
      res.once(ctx.status(200), ctx.json(LUKE))
    )
  );

  render(<PeopleFilmList people={LUKE} />);
  const button = screen.getByText(LUKE.name);
    
  await waitFor(() =>userEvent.click(button))

  expect(await screen.findByTestId("filmList")).toBeInTheDocument();
});
