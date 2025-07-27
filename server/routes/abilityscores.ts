import { Hono } from 'hono';
import z from 'zod';
import { abilityScores2014 } from '../../types/dnd/abilityscores2014.ts';
import { abilityScores2024 } from '../../types/dnd/abilityscores2024.ts';
import { VALID_ABILITIES_2014, VALID_ABILITIES_2024 } from '@types';
import { zValidator } from '@utils';

const schema2014 = z.object({
  abilityName: z.enum(VALID_ABILITIES_2014),
});

const schema2024 = z.object({
  abilityName: z.enum(VALID_ABILITIES_2024),
});

const abilityscores = new Hono()
  .get(
    '/2014/',
    (c) => c.json(abilityScores2014, 200),
  )
  .get(
    '/2014/:abilityName',
    zValidator('param', schema2014),
    (c) => {
      const { abilityName } = c.req.valid('param');

      const abilityItem = abilityScores2014[abilityName];

      return c.json(abilityItem, 200);
    },
  )
  .get('/2024/', (c) => c.json(abilityScores2024, 200))
  .get(
    '/2024/:abilityName',
    zValidator('param', schema2024),
    (c) => {
      const { abilityName } = c.req.valid('param');

      const abilityItem = abilityScores2024[abilityName];

      return c.json(abilityItem, 200);
    },
  );

export default abilityscores;
