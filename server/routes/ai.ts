import { Hono } from 'hono';
import { zValidator } from '@utils';
import {
  AbilitiesType,
  VALID_ABILITIES,
  VALID_BACKGROUNDS,
  VALID_CLASSES,
  VALID_RACES,
  VALID_SUBRACES,
} from '@types';
import { generateBackstory } from '../services/ai.ts';
import z from 'zod';

const schema = z.object({
  race: z.enum(VALID_RACES),
  class: z.enum(VALID_CLASSES),
  subrace: z.enum(VALID_SUBRACES),
  background: z.enum(VALID_BACKGROUNDS),
  level: z.number().min(1).max(20),
  stats: z.object(
    Object.fromEntries(
      VALID_ABILITIES.map((ability) => [ability, z.number()]),
    ) as Record<AbilitiesType, z.ZodNumber>,
  ),
});

const ai = new Hono()
  .post(
    '/backstory',
    zValidator(
      'json',
      schema,
    ),
    async (c) => {
      const json = c.req.valid('json');

      try {
        const result = await generateBackstory(json);
        const parsedResult = JSON.parse(result);
        return c.json(parsedResult, 200);
      } catch (error) {
        return c.json(
          {
            message: 'Failed to generate backstory',
            error: error.message,
          },
          500,
        );
      }
    },
  );

export default ai;
