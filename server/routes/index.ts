import { Hono } from "jsr:@hono/hono";
import classesRoutes from './classes.ts'
import subclassesRoutes from './subclasses.ts'

const app = new Hono();

app.route("/classes", classesRoutes);
app.route("/subclasses", subclassesRoutes);

export default app