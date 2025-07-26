import { Hono } from 'jsr:@hono/hono';
import { zValidator } from '@utils';
import z from 'zod';
import { spells2014 } from '../../types/dnd/spells2014.ts';
import { VALID_CLASSES, VALID_SPELLS, VALID_SUBCLASSES } from '@types';

const spells = new Hono();

const schemaSpell = z.object({
  spellName: z.enum(VALID_SPELLS),
});

const schemaClass = z.object({
  className: z.enum(VALID_CLASSES),
});

const schemaSubClass = z.object({
  subClassName: z.enum(VALID_SUBCLASSES),
});

spells
  .get('/', (c) => c.json(spells2014, 200))
  .get(
    '/:spellName',
    zValidator('param', schemaSpell),
    (c) => {
      const { spellName } = c.req.valid('param');

      const proficiencyItem = spells2014[spellName];

      return c.json(proficiencyItem, 200);
    },
  )
  .get(
    '/by-class/:className',
    zValidator('param', schemaClass),
    (c) => {
      const { className } = c.req.valid('param');

      const spellItem = Object.values(spells2014)
        .filter((f) => {
          const indexes = f.classes.map((cls) => cls.index);
          return indexes.includes(className);
        });
      return c.json(spellItem, 200);
    },
  )
  .get(
    '/by-subclass/:subClassName',
    zValidator('param', schemaSubClass),
    (c) => {
      const { subClassName } = c.req.valid('param');

      const spellItem = Object.values(spells2014)
        .filter((f) => {
          const indexes = f.subclasses.map((cls) => cls.index);
          return indexes.includes(subClassName);
        });
      return c.json(spellItem, 200);
    },
  );

export default spells;
