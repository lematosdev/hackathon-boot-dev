import { ZodType } from 'zod'
import type { ValidationTargets } from 'hono'
import { zValidator as zv } from '@hono/zod-validator'

export const zValidator = <T extends ZodType, Target extends keyof ValidationTargets>(
  target: Target,
  schema: T
) =>
  zv(target, schema, (result, c) => {
    if (result.success === false) {
      try {
        const errors = JSON.parse(result.error.message)
        return c.json(Array.isArray(errors) ? errors[0] : errors, 400)
      } catch {
        return c.json({ error: 'Validation failed', details: result.error.message }, 400)
      }
    }
  })
