import { Hono } from 'hono';
import { zValidator } from '@utils';
import {
  AbilitiesType,
  VALID_ABILITIES_2014,
  VALID_ALIGNMENTS_2024,
  VALID_BACKGROUNDS,
  VALID_CLASSES,
  VALID_RACES,
  VALID_SUBRACES,
} from '@types';
import { generateBackstory, generateCharacterName } from '../services/ai.ts';
import z from 'zod';

const backStorySchema = z.object({
  race: z.enum(VALID_RACES),
  class: z.enum(VALID_CLASSES),
  subrace: z.enum(VALID_SUBRACES),
  background: z.enum(VALID_BACKGROUNDS),
  level: z.number().min(1).max(20),
  stats: z.object(
    Object.fromEntries(
      VALID_ABILITIES_2014.map((ability) => [ability, z.number()]),
    ) as Record<AbilitiesType, z.ZodNumber>,
  ),
});

const characterNameGeneratorSchema = z.object({
  race: z.enum(VALID_RACES),
  background: z.enum(VALID_BACKGROUNDS),
  alignment: z.enum(VALID_ALIGNMENTS_2024),
  class: z.enum(VALID_CLASSES),
  gender: z.enum(['male', 'female', 'neutral']).optional(),
});

const ai = new Hono()
  .get(
    '/name-generator',
    zValidator(
      'query',
      characterNameGeneratorSchema,
    ),
    async (c) => {
      const { race, gender, class: charClass, alignment, background } = c.req
        .valid('query');
      try {
        const result = await generateCharacterName({
          race,
          gender,
          class: charClass,
          alignment,
          background,
        });
        const parsedResult = JSON.parse(result);
        return c.json(parsedResult, 200);
      } catch (error) {
        return c.json({
          message: 'Failed to generate character name',
          error: error.message,
        }, 500);
      }
    },
  )
  .post(
    '/backstory',
    zValidator(
      'json',
      backStorySchema,
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
