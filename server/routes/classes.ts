import { Hono } from "jsr:@hono/hono";
import classesHandler from '../handlers/classes.ts'


const classes = new Hono();

classes.get("/", classesHandler.getAll)

classes.get("/:id", classesHandler.getById)

export default classes