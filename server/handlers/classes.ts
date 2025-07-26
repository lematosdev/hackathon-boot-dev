import { Context } from 'jsr:@hono/hono';
import dnd from '../../types/dnd/index.ts';

const classes = dnd.classes2014;

function getAll(c: Context): Response {
	return c.json(classes);
}

function getByClassName(c: Context): Response {
	const className = c.req.param('className');

	const classItem = classes[className];

	return c.json(classItem);
}

export default {
	getAll,
	getByClassName,
};
