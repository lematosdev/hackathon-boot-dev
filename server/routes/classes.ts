import { Hono } from 'jsr:@hono/hono';
import { validator } from 'jsr:@hono/hono/validator';
import classesHandler from '../handlers/classes.ts';
import dnd from '@types';

const classes = new Hono();

const classesKeys = Object.keys(dnd.classes2014);

classes.get('/', classesHandler.getAll);

classes.get(
  '/:className',
  validator('param', (value, c) => {
    const { className } = value;

    if (
      !className ||
      typeof className !== 'string' ||
      !classesKeys.includes(className)
    ) {
      return c.text(
        `Class name invalid. Valid classes: ${classesKeys.join(', ')} `,
        400,
      );
    }

    return {
      className: className,
    };
  }),
  classesHandler.getByClassName,
);

export default classes;
