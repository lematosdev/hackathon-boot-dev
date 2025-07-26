import { Hono } from 'jsr:@hono/hono';
import { zValidator } from '@utils';
import z from 'zod';
import { alignments2014 } from '../../types/dnd/alignments2014.ts';
import { alignments2024 } from '../../types/dnd/alignments2024.ts';
import { VALID_ALIGNMENTS_2014, VALID_ALIGNMENTS_2024 } from '@types';

const alignments = new Hono();

const schema2014 = z.object({
  alignmentName: z.enum(VALID_ALIGNMENTS_2014),
});

const schema2024 = z.object({
  alignmentName: z.enum(VALID_ALIGNMENTS_2024),
});

alignments
  .get('/2014/', (c) => c.json(alignments2014, 200))
  .get(
    '/2014/:alignmentName',
    zValidator('param', schema2014),
    (c) => {
      const { alignmentName } = c.req.valid('param');

      const alignmentItem = alignments2014[alignmentName];

      return c.json(alignmentItem, 200);
    },
  );

alignments
  .get('/2024/', (c) => c.json(alignments2024, 200))
  .get(
    '/2024/:alignmentName',
    zValidator('param', schema2024),
    (c) => {
      const { alignmentName } = c.req.valid('param');

      const alignmentItem = alignments2024[alignmentName];

      return c.json(alignmentItem, 200);
    },
  );

export default alignments;
