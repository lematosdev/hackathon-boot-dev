import { Hono } from 'jsr:@hono/hono';
import { validator } from 'jsr:@hono/hono/validator';
import dnd from '@types';
import { conditions2024 } from '../../types/dnd/conditions2024.ts';

const alignments = new Hono();

const alignments2014 = dnd.alignments2014;
const alignments2024 = dnd.alignments2024;

alignments.get(
  '/2014/',
  (c) => {
    return c.json(alignments2014, 200);
  },
);

alignments.get(
  '/2024/',
  (c) => {
    return c.json(alignments2024, 200);
  },
);

alignments.get(
  '/2014/:alignmentName',
  validator('param', (value, c) => {
    const { alignmentName } = value;

    if (
      !alignmentName ||
      typeof alignmentName !== 'string' ||
      !(alignmentName in alignments2014)
    ) {
      return c.text(
        `Alignment name invalid. Alignment abilities: ${
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

    const alignmentItem = conditions2024[alignmentName];

    return c.json(alignmentItem, 200);
  },
);

alignments.get(
  '/2024/:alignmentName',
  validator('param', (value, c) => {
    const { alignmentName } = value;

    if (
      !alignmentName ||
      typeof alignmentName !== 'string' ||
      !(alignmentName in alignments2024)
    ) {
      return c.text(
        `Alignment name invalid. Alignment abilities: ${
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

    const alignmentItem = conditions2024[alignmentName];

    return c.json(alignmentItem, 200);
  },
);

export default alignments;
