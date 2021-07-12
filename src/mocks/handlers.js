import { rest } from "msw";
import { SWAPI_BASE_URL } from "../utils/apis/sw.api";
import films from "./fixtures/films.fixtures";

export const routes = {
  films: `${SWAPI_BASE_URL}/films`,
  people: `${SWAPI_BASE_URL}/people`,
};

export const handlers = [
  rest.get(routes.films, (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(films));
  }),
  rest.get(`${routes.films}/:id`, (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(films.results[req.params.id - 1]));
  }),
];
