import { Hono } from 'jsr:@hono/hono';
import { zValidator } from '@utils';
import z from 'zod';
import { traits2014 } from '../../types/dnd/traits2014.ts';
import { VALID_RACES, VALID_TRAITS } from '@types';

const traits = new Hono();

const schemaTraits = z.object({
  traitName: z.enum(VALID_TRAITS),
});

const schemaRaces = z.object({
  raceName: z.enum(VALID_RACES),
});

traits
  .get('/', (c) => c.json(traits2014, 200))
  .get(
    '/:traitName',
    zValidator('param', schemaTraits),
    (c) => {
      const { traitName } = c.req.valid('param');

      const traitItem = traits2014[traitName];

      return c.json(traitItem, 200);
    },
  )
  .get(
    '/by-race/:raceName',
    zValidator('param', schemaRaces),
    (c) => {
      const { raceName } = c.req.valid('param');

      const traitItem = Object.values(traits2014)
        .filter((r) => {
          const indexes = r.races.map((rcs) => rcs.index);
          return indexes.includes(raceName);
        });
      return c.json(traitItem, 200);
    },
  );

export default traits;
