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

		const levelNum = parseInt(level, 10);
		if (
			validateRace(race) && validateClass(characterClass) &&
			validateSubrace(subrace) && validateBackground(background) &&
			!isNaN(levelNum) && levelNum > 0 && levelNum <= 20
		) {
			return {
				race,
				class: characterClass,
				subrace,
				background,
				level: levelNum,
			};
		} else {
			return c.json({
				message: 'Invalid query params',
			}, 400);
		}
	}),
	async (c) => {
		const { race, class: characterClass, subrace, background, level } = c
			.req.valid('query');

		try {
			const result = await generateBackstory({
				race,
				subrace,
				class: characterClass,
				background,
				level,
				stats: {},
			});

			const parsedResult = JSON.parse(result);
			return c.json(parsedResult);
		} catch (error) {
			return c.json(
				{
					message: 'Failed to generate backstory',
					error: error.message,
				},
				500,
			);
		}
	},
);

export default ai;
