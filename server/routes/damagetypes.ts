import { Hono } from 'jsr:@hono/hono';
import { zValidator } from '@utils';
import z from 'zod';
import { damageTypes2014 } from '../../types/dnd/damagetypes2014.ts';
import { damageTypes2024 } from '../../types/dnd/damagetypes2024.ts';
import { VALID_DAMAGE_TYPES_2014, VALID_DAMAGE_TYPES_2024 } from '@types';

const damageTypes = new Hono();

const schema2014 = z.object({
  damageTypeName: z.enum(VALID_DAMAGE_TYPES_2014),
});

const schema2024 = z.object({
  damageTypeName: z.enum(VALID_DAMAGE_TYPES_2024),
});

damageTypes
  .get('/2014/', (c) => c.json(damageTypes2014, 200))
  .get(
    '/2014/:damageTypeName',
    zValidator('param', schema2014),
    (c) => {
      const { damageTypeName } = c.req.valid('param');

      const damageTypeItem = damageTypes2014[damageTypeName];

      return c.json(damageTypeItem, 200);
    },
  );

damageTypes
  .get('/2024/', (c) => c.json(damageTypes2024, 200))
  .get(
    '/2024/:damageTypeName',
    zValidator('param', schema2024),
    (c) => {
      const { damageTypeName } = c.req.valid('param');

      const conditionItem = damageTypes2024[damageTypeName];

      return c.json(conditionItem, 200);
    },
  );

export default damageTypes;
