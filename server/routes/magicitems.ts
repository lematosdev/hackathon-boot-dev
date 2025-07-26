import { Hono } from 'jsr:@hono/hono';
import { zValidator } from '@utils';
import z from 'zod';
import { magicItems2014 } from '../../types/dnd/magicitems2014.ts';
import { VALID_EQUIPMENT_CATEGORIES, VALID_MAGIC_ITEMS } from '@types';

const magicitems = new Hono();

const schemaMagicItems = z.object({
  magicItemName: z.enum(VALID_MAGIC_ITEMS),
});

const schemaCategory = z.object({
  equipmentCategory: z.enum(VALID_EQUIPMENT_CATEGORIES),
});

magicitems
  .get('/', (c) => c.json(magicItems2014, 200))
  .get(
    '/:magicItemName',
    zValidator('param', schemaMagicItems),
    (c) => {
      const { magicItemName } = c.req.valid('param');

      const magicItem = magicItems2014[magicItemName];

      return c.json(magicItem, 200);
    },
  )
  .get(
    '/by-category/:equipmentCategory',
    zValidator('param', schemaCategory),
    (c) => {
      const { equipmentCategory } = c.req.valid('param');

      const magicItem = Object.values(magicItems2014).filter(
        (f) => f.equipment_category.index === equipmentCategory,
      );
      return c.json(magicItem, 200);
    },
  );

export default magicitems;
