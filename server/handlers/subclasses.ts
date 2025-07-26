import { Context } from 'jsr:@hono/hono';
import dnd from '../../types/dnd/index.ts';

const subClasses = dnd.subclasses2014;

function getAll(c: Context): Response {
  return c.json(subClasses, 200);
}

function getBySubClassName(c: Context): Response {
  const subClassName = c.req.param('subClassName');

  const subClassItem = subClasses[subClassName];

  return c.json(subClassItem, 200);
}

function getBySubClassByClassName(c: Context): Response {
  const className = c.req.param('className');

  const matches = Object.values(subClasses).filter(
    (sub) => sub.class.index === className,
  );

  return c.json(matches, 200);
}

export default {
  getAll,
  getBySubClassName,
  getBySubClassByClassName,
};
