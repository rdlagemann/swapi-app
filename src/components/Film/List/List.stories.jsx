import { rest } from "msw";
import { emptyFilms } from "../../../mocks/fixtures/films.fixtures";
import FilmList from "./List";
import { worker } from "../../../mocks/browser";
import { routes } from "../../../mocks/handlers";

export default {
  title: "Film/FilmList",
  component: FilmList,
  decorators: [
    (Story) => {
      worker.resetHandlers();
      return <Story />;
    },
  ],
};

export const SuccessMock = () => <FilmList />;

export const EmptyMock = () => <FilmList />;
EmptyMock.decorators = [
  (Story) => {
    worker.use(
      rest.get(routes.films, (req, res, ctx) => {
        return res.once(ctx.status(200), ctx.json(emptyFilms));
      })
    );
    return <Story />;
  },
];

export const ErrorMock = () => <FilmList />;
ErrorMock.decorators = [
  (Story) => {
    worker.use(
      rest.get(routes.films, (req, res, ctx) => {
        return res.once(ctx.status(500));
      })
    );
    return <Story />;
  },
];
