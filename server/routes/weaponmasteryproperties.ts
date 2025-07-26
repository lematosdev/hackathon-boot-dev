import { Hono } from 'jsr:@hono/hono';
import { zValidator } from '@utils';
import z from 'zod';
import { weaponMasteryProperties2024 } from '../../types/dnd/weaponmasteryproperties2024.ts';
import { VALID_WEAPON_MASTERY_PROPERTIES } from '@types';

const weaponMasteryProperties = new Hono();

const schema = z.object({
  masteryProperty: z.enum(VALID_WEAPON_MASTERY_PROPERTIES),
});

weaponMasteryProperties
  .get('/', (c) => c.json(weaponMasteryProperties2024, 200))
  .get(
    '/:masteryProperty',
    zValidator('param', schema),
    (c) => {
      const { masteryProperty } = c.req.valid('param');

      const masteryPropertyItem = weaponMasteryProperties2024[masteryProperty];

      return c.json(masteryPropertyItem, 200);
    },
  );

export default weaponMasteryProperties;
