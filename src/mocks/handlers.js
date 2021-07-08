import { rest } from "msw";
import { SWAPI_BASE_URL } from "../utils/apis/sw.api";
import films from "./fixtures/films.fixtures";

export const routes = {
  films: `${SWAPI_BASE_URL}/films`,
};

export const handlers = [
  rest.get(routes.films, (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(films));
  }),
];
