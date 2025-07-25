import { Context } from "jsr:@hono/hono";

function getAll(c: Context) {
    return c.json([{ culo: "tetas" }])
}

function getById(c: Context, id: string) {
    return c.json({})
}

export default {
    getAll,
    getById
}