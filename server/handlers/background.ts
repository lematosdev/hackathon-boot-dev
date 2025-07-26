import { Context } from "jsr:@hono/hono";
import dnd from "../../types/dnd/index.ts";

const backgrounds = dnd.backgrounds2014;

function getAll(c: Context): Response {
  return c.json(backgrounds, 200);
}

function getByBackgroundName(c: Context): Response {
  const backgroundName = c.req.param("backgroundName");

  const backgroundItem = backgrounds[backgroundName];

  return c.json(backgroundItem, 200);
}

export default {
  getAll,
  getByBackgroundName,
};
