import { Hono } from 'jsr:@hono/hono';
import { validator } from 'jsr:@hono/hono/validator';
import dnd from '@types';

const alignmentsRoutes = new Hono();

const alignments2014 = dnd.alignments2014;
const alignments2024 = dnd.alignments2024;

alignmentsRoutes.get(
  '/2014/',
  (c) => {
    return c.json(alignments2014, 200);
  },
);

alignmentsRoutes.get(
  '/2024/',
  (c) => {
    return c.json(alignments2024, 200);
  },
);

alignmentsRoutes.get(
  '/2014/:alignmentName',
  validator('param', (value, c) => {
    const { alignmentName } = value;

    if (
      !alignmentName ||
      typeof alignmentName !== 'string' ||
      !(alignmentName in alignments2014)
    ) {
      return c.text(
        `Ability name invalid. Valid abilities: ${
          Object.keys(alignments2014).join(', ')
        } `,
        400,
      );
    }

    return { alignmentName };
  }),
  (c) => {
    const { alignmentName } = c.req.valid('param') as {
      alignmentName: keyof typeof alignments2014;
    };

    const alignmentItem = alignmentName[alignmentName];

    return c.json(alignmentItem, 200);
  },
);

alignmentsRoutes.get(
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
