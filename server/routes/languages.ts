import { Hono } from 'jsr:@hono/hono';
import { zValidator } from '@utils';
import z from 'zod';
import { languages2014 } from '../../types/dnd/languages2014.ts';
import { languages2024 } from '../../types/dnd/languages2024.ts';
import { VALID_LANGUAGES_2014, VALID_LANGUAGES_2024 } from '@types';

const languages = new Hono();

const schema2014 = z.object({
  language: z.enum(VALID_LANGUAGES_2014),
});

const schema2024 = z.object({
  language: z.enum(VALID_LANGUAGES_2024),
});

languages
  .get('/2014/', (c) => c.json(languages2014, 200))
  .get(
    '/2014/:language',
    zValidator('param', schema2014),
    (c) => {
      const { language } = c.req.valid('param');

      const languageItem = languages2014[language];

      return c.json(languageItem, 200);
    },
  );

languages
  .get('/2024/', (c) => c.json(languages2024, 200))
  .get(
    '/2024/:language',
    zValidator('param', schema2024),
    (c) => {
      const { language } = c.req.valid('param');

      const languageItem = languages2024[language];

      return c.json(languageItem, 200);
    },
  );

export default languages;
