import { Hono } from 'jsr:@hono/hono';
import { zValidator } from '@utils';
import z from 'zod';
import { subclasses2014 } from '../../types/dnd/subclasses2014.ts';
import { VALID_CLASSES, VALID_SUBCLASSES } from '@types';

const subclasses = new Hono();

const schemaSubclasses = z.object({
  subClassName: z.enum(VALID_SUBCLASSES),
});

const schemaClasses = z.object({
  className: z.enum(VALID_CLASSES),
});

subclasses.get('/', (c) => c.json(subclasses2014, 200))
  .get(
    '/:subClassName',
    zValidator('param', schemaSubclasses),
    (c) => {
      const { subClassName } = c.req.valid('param');

      const weaponPropertyItem = subclasses2014[subClassName];

      return c.json(weaponPropertyItem, 200);
    },
  ).get(
    '/by-class/:className',
    zValidator('param', schemaClasses),
    (c) => {
      const { className } = c.req.valid('param');

      const subClassItem = Object.values(subclasses2014).filter(
        (sub) => sub.class.index === className,
      );

      return c.json(subClassItem, 200);
    },
  );

export default subclasses;
