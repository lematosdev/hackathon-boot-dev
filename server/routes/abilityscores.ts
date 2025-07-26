import { Hono } from 'jsr:@hono/hono';
import { validator } from 'jsr:@hono/hono/validator';
import dnd from '@types';

const abilityscores = new Hono();

const abilityScores2014 = dnd.abilityScores2014;
const abilityScores2024 = dnd.abilityScores2024;

abilityscores.get(
  '/2014/',
  (c) => {
    return c.json(abilityScores2014, 200);
  },
);

abilityscores.get(
  '/2024/',
  (c) => {
    return c.json(abilityScores2024, 200);
  },
);

abilityscores.get(
  '/2014/:abilityName',
  validator('param', (value, c) => {
    const { abilityName } = value;

    if (
      !abilityName ||
      typeof abilityName !== 'string' ||
      !(abilityName in abilityScores2014)
    ) {
      return c.text(
        `Ability name invalid. Valid abilities: ${
          Object.keys(abilityScores2014).join(', ')
        } `,
        400,
      );
    }

    return { abilityName };
  }),
  (c) => {
    const { abilityName } = c.req.valid('param') as {
      abilityName: keyof typeof abilityScores2014;
    };

    const abilityItem = abilityScores2014[abilityName];

    return c.json(abilityItem, 200);
  },
);

abilityscores.get(
  '/2024/:abilityName',
  validator('param', (value, c) => {
    const { abilityName } = value;

    if (
      !abilityName ||
      typeof abilityName !== 'string' ||
      !(abilityName in abilityScores2024)
    ) {
      return c.text(
        `Ability name invalid. Valid abilities: ${
          Object.keys(abilityScores2024).join(', ')
        } `,
        400,
      );
    }

    return { abilityName };
  }),
  (c) => {
    const { abilityName } = c.req.valid('param');

    const abilityItem = abilityScores2024[abilityName];

    return c.json(abilityItem, 200);
  },
);

export default abilityscores;
