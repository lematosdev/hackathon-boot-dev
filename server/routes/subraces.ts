import { Hono } from 'jsr:@hono/hono';
import { validator } from 'jsr:@hono/hono/validator';
import subracesHandler from '../handlers/subraces.ts';
import dnd from '@types';

const subRaces = new Hono();

const subRacesKeys = Object.keys(dnd.subraces2014);

const racesKeys = Object.keys(dnd.races2014);

subRaces.get('/', subracesHandler.getAll);

subRaces.get(
  '/:subRaceName',
  validator('param', (value, c) => {
    const { subRaceName } = value;

    if (
      !subRaceName ||
      typeof subRaceName !== 'string' ||
      !subRacesKeys.includes(subRaceName)
    ) {
      return c.text(
        `Subclass name invalid. Valid subclasses: ${subRacesKeys.join(', ')}`,
        400,
      );
    }

    return {
      subRaceName: subRaceName,
    };
  }),
  subracesHandler.getBySubRaceName,
);

subRaces.get(
  '/by-race/:raceName',
  validator('param', (value, c) => {
    const { raceName } = value;

    if (
      !raceName ||
      typeof raceName !== 'string' ||
      !racesKeys.includes(raceName)
    ) {
      return c.text(
        `Subrace name invalid. Valid subraces: ${racesKeys}`,
        400,
      );
    }

    return {
      raceName: raceName,
    };
  }),
  subracesHandler.getBySubRaceByRaceName,
);

export default subRaces;
