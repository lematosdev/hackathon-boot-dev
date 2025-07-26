import { Hono } from 'jsr:@hono/hono';
import { zValidator } from '@utils';
import z from 'zod';
import { equipment2014 } from '../../types/dnd/equipment2014.ts';
import { equipmentCategories2014 } from '../../types/dnd/equipmentcategories2014.ts';
import { VALID_EQUIPMENT, VALID_EQUIPMENT_CATEGORIES } from '@types';

const equipment = new Hono();

const schemaEquipment = z.object({
  equipmentName: z.enum(VALID_EQUIPMENT),
});

const schemaCategories = z.object({
  equipmentCategory: z.enum(VALID_EQUIPMENT_CATEGORIES),
});

equipment
  .get('/', (c) => c.json(equipment2014, 200))
  .get(
    '/:equipmentName',
    zValidator('param', schemaEquipment),
    (c) => {
      const { equipmentName } = c.req.valid('param');

      const equipmentItem = equipment2014[equipmentName];

      return c.json(equipmentItem, 200);
    },
  )
  .get(
    '/category/:equipmentCategory',
    zValidator('param', schemaCategories),
    (c) => {
      const { equipmentCategory } = c.req.valid('param');

      const equipmentItem = equipmentCategories2014[equipmentCategory];

      return c.json(equipmentItem, 200);
    },
  );

export default equipment;
