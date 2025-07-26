import { Hono } from 'jsr:@hono/hono';
import { validator } from 'jsr:@hono/hono/validator';
import subclassHandler from '../handlers/subclasses.ts';
import dnd from '../../types/dnd/index.ts';

const subclasses = new Hono();

const subClassesKeys = Object.keys(dnd.subclasses2014);

const classesKeys = Object.keys(dnd.classes2014);

subclasses.get('/', subclassHandler.getAll);

subclasses.get(
  '/:subClassName',
  validator('param', (value, c) => {
    const { subClassName } = value;

    if (
      !subClassName ||
      typeof subClassName !== 'string' ||
      !subClassesKeys.includes(subClassName)
    ) {
      return c.text(
        `Class name invalid. Valid subclasses: ${subClassesKeys.join(', ')}`,
        400,
      );
    }

    return {
      subClassName: subClassName,
    };
  }),
  subclassHandler.getBySubClassName,
);

subclasses.get(
  '/by-class/:className',
  validator('param', (value, c) => {
    const { className } = value;

    if (
      !className ||
      typeof className !== 'string' ||
      !classesKeys.includes(className)
    ) {
      return c.text(`Class name invalid. Valid classes`, 400);
    }

    return {
      className: className,
    };
  }),
  subclassHandler.getBySubClassByClassName,
);

export default subclasses;
