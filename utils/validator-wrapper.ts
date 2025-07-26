import { ZodType } from 'zod'
import type { ValidationTargets } from 'hono'
import { zValidator as zv } from '@hono/zod-validator'

export const zValidator = <T extends ZodType, Target extends keyof ValidationTargets>(
  target: Target,
  schema: T
) =>
  zv(target, schema, (result, c) => {
    if (result.success === false) {
      return c.json({ ...JSON.parse(result.error.message)[0] }, 400)
    }
  })
