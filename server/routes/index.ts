import { Hono } from "jsr:@hono/hono";
import classesRoutes from './classes.ts'
import subclassesRoutes from './subclasses.ts'
import backgroundsRoutes from "./background.ts";
import racesRoutes from "./races.ts"
import subracesRoutes from "./subraces.ts";

const app = new Hono();

app.route("/classes", classesRoutes);
app.route("/subclasses", subclassesRoutes);
app.route("/backgrounds", backgroundsRoutes);
app.route("/races", racesRoutes)
app.route("/subraces", subracesRoutes)

export default app;