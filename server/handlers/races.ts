import { Context } from 'jsr:@hono/hono';
import dnd from '../../types/dnd/index.ts';

const races = dnd.races2014;

function getAll(c: Context): Response {
  return c.json(races, 200);
}

function getByRaceName(c: Context): Response {
  const raceName = c.req.param('raceName');
  c;

  const raceItem = races[raceName];

  return c.json(raceItem, 200);
}

export default {
  getAll,
  getByRaceName,
};
