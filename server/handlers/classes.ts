import { Context } from "jsr:@hono/hono";
import dnd from '../../types/dnd/index.ts';

const classes2014 = dnd.classes2014;

function getAll(c: Context): Response {

    return c.json(classes2014)
}

function getByClassName(c: Context): Response {
    
    const className = c.req.param("className");

    const classItem = classes2014[className]

    return c.json(classItem);
}

export default {
    getAll,
    getByClassName
}