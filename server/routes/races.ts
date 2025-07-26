import { Hono } from 'jsr:@hono/hono';
import { validator } from 'jsr:@hono/hono/validator';
import racesHandler from '../handlers/races.ts';
import dnd from '../../types/dnd/index.ts';

const races = new Hono();

const racesKeys = Object.keys(dnd.races2014);

races.get('/', racesHandler.getAll);

races.get(
	'/:raceName',
	validator('param', (value, c) => {
		const { raceName } = value;

		if (
			!raceName ||
			typeof raceName !== 'string' ||
			!racesKeys.includes(raceName)
		) {
			return c.text(
				`Race name invalid. Valid races: ${racesKeys.join(', ')} `,
				400,
			);
		}

		return {
			raceName: raceName,
		};
	}),
	racesHandler.getByRaceName,
);

export default races;
