import { Hono } from 'jsr:@hono/hono';
import { zValidator } from '@utils';
import z from 'zod';
import { weaponProperties2014 } from '../../types/dnd/weaponproperties2014.ts';
import { weaponProperties2024 } from '../../types/dnd/weaponproperties2024.ts';
import {
  VALID_WEAPON_PROPERTIES_2014,
  VALID_WEAPON_PROPERTIES_2024,
} from '@types';

const weaponProperties = new Hono();

const schemaWeaponProperties2014 = z.object({
  property: z.enum(VALID_WEAPON_PROPERTIES_2014),
});

const schemaWeaponProperties2024 = z.object({
  property: z.enum(VALID_WEAPON_PROPERTIES_2024),
});

weaponProperties
  .get('/2014/', (c) => c.json(weaponProperties2014, 200))
  .get(
    '/2014/:property',
    zValidator('param', schemaWeaponProperties2014),
    (c) => {
      const { property } = c.req.valid('param');

      const weaponPropertyItem = weaponProperties2014[property];

      return c.json(weaponPropertyItem, 200);
    },
  );

weaponProperties
  .get('/2024/', (c) => c.json(weaponProperties2024, 200))
  .get(
    '/2024/:property',
    zValidator('param', schemaWeaponProperties2024),
    (c) => {
      const { property } = c.req.valid('param');

      const weaponPropertyItem = weaponProperties2024[property];

      return c.json(weaponPropertyItem, 200);
    },
  );

export default weaponProperties;
