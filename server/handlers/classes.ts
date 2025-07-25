import { Context } from "jsr:@hono/hono";

function getAll(c: Context) {
    return c.json([{ culo: "tetas" }])
}

function getById(c: Context) {
    const id = c.req.param("id");

    return c.json({ id });
}

export default {
    getAll,
    getById
}