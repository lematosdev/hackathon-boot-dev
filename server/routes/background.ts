import { VALID_BACKGROUNDS } from '@types';
import { Hono } from 'hono';
import z from 'zod';
import { backgrounds2014 } from '../../types/dnd/backgrounds2014.ts';
import { zValidator } from '@utils';

const schema = z.object({
  id: z.enum(VALID_BACKGROUNDS),
});

const backgrounds = new Hono()
  .get('/', (c) => c.json(backgrounds2014, 200))
  .get(
    '/:id',
    zValidator(
      'param',
      schema,
    ),
    (c) => {
      const { id } = c.req.valid('param');
      return c.json(backgrounds2014[id], 200);
    },
  );

export default backgrounds;
