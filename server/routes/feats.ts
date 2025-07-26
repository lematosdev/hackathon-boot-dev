import { Hono } from 'jsr:@hono/hono';
import { zValidator } from '@utils';
import { feats2014 } from '../../types/dnd/feats2014.ts';
import { VALID_FEATS } from '@types';
import z from 'zod';

const feats = new Hono();

const schema = z.object({
  featName: z.enum(VALID_FEATS),
});

feats
  .get('/', (c) => c.json(feats2014, 200))
  .get(
    '/:featName',
    zValidator('param', schema),
    (c) => {
      const { featName } = c.req.valid('param');

      const featItem = feats2014[featName];

      return c.json(featItem, 200);
    },
  );

export default feats;
