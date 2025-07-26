import { Hono } from 'jsr:@hono/hono';
import { zValidator } from '@utils';
import z from 'zod';
import { races2014 } from '../../types/dnd/races2014.ts';
import { VALID_RACES } from '../../types/dnd/races2014.ts';

const races = new Hono();

const schema = z.object({
  raceName: z.enum(VALID_RACES),
});

races.get('/', (c) => c.json(races2014))
  .get(
    '/:raceName',
    zValidator('param', schema),
    (c) => {
      const { raceName } = c.req.valid('param');

      const raceItem = races2014[raceName];

      return c.json(raceItem, 200);
    },
  );

export default races;
