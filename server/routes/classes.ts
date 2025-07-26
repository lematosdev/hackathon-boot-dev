import { Hono } from 'jsr:@hono/hono';
import { zValidator } from '@utils';
import { classes2014 } from '../../types/dnd/classes2014.ts';
import { VALID_CLASSES } from '@types';
import z from 'zod';

const classes = new Hono();

const schema = z.object({
  className: z.enum(VALID_CLASSES),
});

classes
  .get('/', (c) => c.json(classes2014))
  .get(
    '/:className',
    zValidator('param', schema),
    (c) => {
      const { className } = c.req.valid('param');

      const classItem = classes2014[className];

      return c.json(classItem, 200);
    },
  );

export default classes;
