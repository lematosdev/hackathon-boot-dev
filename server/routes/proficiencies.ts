import { Hono } from 'jsr:@hono/hono';
import { zValidator } from '@utils';
import z from 'zod';
import { proficiencies2014 } from '../../types/dnd/proficiencies2014.ts';
import { VALID_CLASSES, VALID_PROFICIENCIES } from '@types';

const proficiencies = new Hono();

const schemaProficiency = z.object({
  proficiency: z.enum(VALID_PROFICIENCIES),
});

const schemaClass = z.object({
  className: z.enum(VALID_CLASSES),
});

proficiencies
  .get('/', (c) => c.json(proficiencies2014, 200))
  .get(
    '/:proficiency',
    zValidator('param', schemaProficiency),
    (c) => {
      const { proficiency } = c.req.valid('param');

      const proficiencyItem = proficiencies2014[proficiency];

      return c.json(proficiencyItem, 200);
    },
  )
  .get(
    '/by-class/:className',
    zValidator('param', schemaClass),
    (c) => {
      const { className } = c.req.valid('param');

      const featureItem = Object.values(proficiencies2014)
        .filter((f) => {
          const indexes = f.classes.map((cls) => cls.index);
          return indexes.includes(className);
        });
      return c.json(featureItem, 200);
    },
  );

export default proficiencies;
