import { Hono } from 'jsr:@hono/hono';
import { zValidator } from '@utils';
import z from 'zod';
import { subraces2014 } from '../../types/dnd/subraces2014.ts';
import { VALID_RACES, VALID_SUBRACES } from '@types';

const subRaces = new Hono();

const schemaRaces = z.object({
  raceName: z.enum(VALID_RACES),
});

const schemaSubRaces = z.object({
  subRaceName: z.enum(VALID_SUBRACES),
});

subRaces.get('/', (c) => c.json(subraces2014))
  .get(
    '/:subRaceName',
    zValidator('param', schemaSubRaces),
    (c) => {
      const { subRaceName } = c.req.valid('param');

      const subRaceItem = subraces2014[subRaceName];

      return c.json(subRaceItem, 200);
    },
  )
  .get(
    '/by-race/:raceName',
    zValidator('param', schemaRaces),
    (c) => {
      const { raceName } = c.req.valid('param');

      const subRaceItem = Object.values(subraces2014).filter(
        (sub) => sub.race.index === raceName,
      );

      return c.json(subRaceItem, 200);
    },
  );

export default subRaces;
