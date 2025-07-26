import { Hono } from 'jsr:@hono/hono';
import { validator } from 'jsr:@hono/hono/validator';
import dnd from '@types';

const conditions = new Hono();

const conditions2014 = dnd.conditions2014;
const conditions2024 = dnd.conditions2024;

conditions.get(
  '/2014/',
  (c) => {
    return c.json(conditions2014, 200);
  },
);

conditions.get(
  '/2024/',
  (c) => {
    return c.json(conditions2024, 200);
  },
);

conditions.get(
  '/2014/:conditionName',
  validator('param', (value, c) => {
    const { conditionName } = value;

    if (
      !conditionName ||
      typeof conditionName !== 'string' ||
      !(conditionName in conditions2014)
    ) {
      return c.text(
        `Ability name invalid. Valid abilities: ${
          Object.keys(conditions2014).join(', ')
        } `,
        400,
      );
    }

    return { conditionName };
  }),
  (c) => {
    const { conditionName } = c.req.valid('param') as {
      conditionName: keyof typeof conditions2014;
    };

    const alignmentItem = conditions2014[conditionName];

    return c.json(alignmentItem, 200);
  },
);

conditions.get(
  '/2024/:alignmentName',
  validator('param', (value, c) => {
    const { alignmentName } = value;

    if (
      !alignmentName ||
      typeof alignmentName !== 'string' ||
      !(alignmentName in alignments2024)
    ) {
      return c.text(
        `Ability name invalid. Valid abilities: ${
          Object.keys(alignments2024).join(', ')
        } `,
        400,
      );
    }

    return { alignmentName };
  }),
  (c) => {
    const { alignmentName } = c.req.valid('param') as {
      alignmentName: keyof typeof alignments2024;
    };

    const alignmentItem = alignmentName[alignmentName];

    return c.json(alignmentItem, 200);
  },
);

export default alignmentsRoutes;
