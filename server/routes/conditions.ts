import { Hono } from 'jsr:@hono/hono';
import { zValidator } from '@utils';
import z from 'zod';
import { conditions2014 } from '../../types/dnd/conditions2014.ts';
import { conditions2024 } from '../../types/dnd/conditions2024.ts';
import { VALID_CONDITIONS_2014, VALID_CONDITIONS_2024 } from '@types';

const conditions = new Hono();

const schema2014 = z.object({
  conditionName: z.enum(VALID_CONDITIONS_2014),
});

const schema2024 = z.object({
  conditionName: z.enum(VALID_CONDITIONS_2024),
});

conditions
  .get('/2014/', (c) => c.json(conditions2014, 200))
  .get(
    '/2014/:conditionName',
    zValidator('param', schema2014),
    (c) => {
      const { conditionName } = c.req.valid('param');

      const conditionItem = conditions2014[conditionName];

      return c.json(conditionItem, 200);
    },
  );

conditions
  .get('/2024/', (c) => c.json(conditions2024, 200))
  .get(
    '/2024/:conditionName',
    zValidator('param', schema2024),
    (c) => {
      const { conditionName } = c.req.valid('param');

      const conditionItem = conditions2024[conditionName];

      return c.json(conditionItem, 200);
    },
  );

export default conditions;
