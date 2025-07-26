import { Context } from "jsr:@hono/hono";
import dnd from "../../types/dnd/index.ts";

const subclasses2014 = dnd.subclasses2014;

function getAll(c: Context): Response {
  return c.json(subclasses2014, 200);
}

function getBySubClassName(c: Context): Response {
  const subClassName = c.req.param("subClassName");

  const subClassItem = subclasses2014[subClassName];

  return c.json(subClassItem, 200);
}

function getBySubClassByClassName(c: Context): Response {
  const className = c.req.param("className");

  const matches = Object.values(subclasses2014).filter(
    (sub) => sub.class.index === className
  );

  return c.json(matches, 200);
}

export default {
  getAll,
  getBySubClassName,
  getBySubClassByClassName,
};
