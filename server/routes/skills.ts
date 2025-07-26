import { Hono } from 'jsr:@hono/hono';
import { zValidator } from '@utils';
import z from 'zod';
import { skills2014 } from '../../types/dnd/skills2014.ts';
import { skills2024 } from '../../types/dnd/skills2024.ts';
import { VALID_SKILLS_2014, VALID_SKILLS_2024 } from '@types';

const skills = new Hono();

const schemaSkills2014 = z.object({
  skillName: z.enum(VALID_SKILLS_2014),
});

const schemaSkills2024 = z.object({
  skillName: z.enum(VALID_SKILLS_2024),
});

skills
  .get('/2014/', (c) => c.json(skills2014, 200))
  .get(
    '/2014/:skillName',
    zValidator('param', schemaSkills2014),
    (c) => {
      const { skillName } = c.req.valid('param');

      const skillItem = skills2014[skillName];

      return c.json(skillItem, 200);
    },
  );

skills
  .get('/2024/', (c) => c.json(skills2024, 200))
  .get(
    '/2024/:skillName',
    zValidator('param', schemaSkills2024),
    (c) => {
      const { skillName } = c.req.valid('param');

      const skillItem = skills2024[skillName];

      return c.json(skillItem, 200);
    },
  );

export default skills;
