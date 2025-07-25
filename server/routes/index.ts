import { Hono } from "jsr:@hono/hono";
import classesRoutes from './classes.ts'

const app = new Hono();

app.route("/classes", classesRoutes)

export default app