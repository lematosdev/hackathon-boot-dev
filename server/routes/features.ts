import { Hono } from 'jsr:@hono/hono';
import { zValidator } from '@utils';
import z from 'zod';
import { features2014 } from '../../types/dnd/features2014.ts';
import { VALID_CLASSES, VALID_FEATURES } from '@types';

const features = new Hono();

const schemaFeature = z.object({
  featureName: z.enum(VALID_FEATURES),
});

const schemaClass = z.object({
  className: z.enum(VALID_CLASSES),
});

features
  .get('/', (c) => c.json(features2014, 200))
  .get(
    '/:featureName',
    zValidator('param', schemaFeature),
    (c) => {
      const { featureName } = c.req.valid('param');

      const featureItem = features2014[featureName];

      return c.json(featureItem, 200);
    },
  )
  .get(
    '/by-class/:className',
    zValidator('param', schemaClass),
    (c) => {
      const { className } = c.req.valid('param');

      const featureItem = Object.values(features2014).filter(
        (f) => f.class.index === className,
      );
      return c.json(featureItem, 200);
    },
  );

export default features;
