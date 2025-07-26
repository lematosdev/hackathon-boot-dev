import { Hono } from 'jsr:@hono/hono';
import { validator } from 'jsr:@hono/hono/validator';
import {
	validateBackground,
	validateClass,
	validateRace,
	validateSubrace,
} from '@types';
import { generateBackstory } from '../services/ai.ts';

const ai = new Hono();

ai.get(
	'/backstory',
	validator('query', (value, c) => {
		const race = value['race'];
		const characterClass = value['class'];
		const subrace = value['subrace'];
		const background = value['background'];
		const level = value['level'];

		if (
			validateRace(race) && validateClass(characterClass) &&
			validateSubrace(subrace) && validateBackground(background) &&
			Number(level)
		) {
			return {
				race,
				class: characterClass,
				subrace,
				background,
				level: +level,
			};
		} else {
			return c.json({
				message: 'Invalid query params',
			});
		}
	}),
	async (c) => {
		const { race, class: characterClass, subrace, background, level } = c
			.req.valid('query');

		const result = await generateBackstory({
			race,
			subrace,
			class: characterClass,
			background,
			level: +level,
			stats: {},
		});

		return c.json(JSON.parse(result));
	},
);

export default ai;
