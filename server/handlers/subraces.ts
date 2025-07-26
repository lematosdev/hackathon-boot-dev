import { Context } from "jsr:@hono/hono";
import dnd from "../../types/dnd/index.ts";

const subRaces = dnd.subraces2014;

function getAll(c: Context): Response {
  return c.json(subRaces, 200);
}

function getBySubRaceName(c: Context): Response {
  const subRaceName = c.req.param("subRaceName");

  const subRaceItem = subRaces[subRaceName];

  return c.json(subRaceItem, 200);
}

function getBySubRaceByRaceName(c: Context): Response {
  const raceName = c.req.param("raceName");

  const matches = Object.values(subRaces).filter(
    (sub) => sub.race.index === raceName
  );

  return c.json(matches, 200);
}

export default {
  getAll,
  getBySubRaceName,
  getBySubRaceByRaceName,
};
