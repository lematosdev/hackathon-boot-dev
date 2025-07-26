import { abilityScores2014 } from './abilityscores2014.ts';
import { abilityScores2024 } from './abilityscores2024.ts';
import { alignments2014 } from './alignments2014.ts';
import { alignments2024 } from './alignments2024.ts';
import { backgrounds2014, VALID_BACKGROUNDS } from './backgrounds2014.ts';
import { classes2014, VALID_CLASSES } from './classes2014.ts';
import { conditions2014 } from './conditions2014.ts';
import { conditions2024 } from './conditions2024.ts';
import { damageTypes2014 } from './damagetypes2014.ts';
import { damageTypes2024 } from './damagetypes2024.ts';
import { equipment2014 } from './equipment2014.ts';
import { equipmentCategories2014 } from './equipmentcategories2014.ts';
import { feats2014 } from './feats2014.ts';
import { features2014 } from './features2014.ts';
import { languages2014 } from './languages2014.ts';
import { languages2024 } from './languages2024.ts';
import { levels2014 } from './levels2014.ts';
import { magicItems2014 } from './magicitems2014.ts';
import { magicSchools2014 } from './magicschools2014.ts'
import { magicSchools2024 } from './magicschools2024.ts';
import { monsters2014 } from './monsters2014.ts';
import { proficiencies2014 } from './proficiencies2014.ts';
import { races2014, VALID_RACES } from './races2014.ts';
import { rules2014 } from './rules2014.ts';
import { ruleSections2014 } from './rulesections2014.ts';
import { skills2014 } from './skills2014.ts';
import { skills2024 } from './skills2024.ts';
import { spells2014 } from './spells2014.ts'
import { subclasses2014 } from './subclasses2014.ts';
import { subraces2014, VALID_SUBRACES } from './subraces2014.ts';
import { traits2014 } from './traits2014.ts';
import { weaponMasteryProperties2024 } from './weaponmasteryproperties2024.ts';
import { weaponProperties2014 } from './weaponproperties2014.ts';
import { weaponProperties2024 } from './weaponproperties2024.ts';


function createValidator<T extends Record<string, unknown>>(dataSource: T) {
  return function validateQuery(query: unknown): query is keyof T {
    return typeof query === "string" && query in dataSource;
  };
}

export const validateRace = createValidator(races2014);
export const validateClass = createValidator(classes2014);
export const validateSubrace = createValidator(subraces2014);
export const validateBackground = createValidator(backgrounds2014);

export type SubracesType = keyof typeof subraces2014;
export type BackgroundTypes = keyof typeof backgrounds2014;
export type ClassesType = keyof typeof classes2014;
export type RacesType = keyof typeof races2014;

export default {
  abilityScores2014,
  abilityScores2024,
  alignments2014,
  alignments2024,
  backgrounds2014,
  classes2014,
  conditions2014,
  conditions2024,
  damageTypes2014,
  damageTypes2024,
  equipment2014,
  equipmentCategories2014,
  feats2014,
  features2014,
  languages2014,
  languages2024,
  levels2014,
  magicItems2014,
  magicSchools2014,
  magicSchools2024,
  monsters2014,
  proficiencies2014,
  races2014,
  rules2014,
  ruleSections2014,
  skills2014,
  skills2024,
  spells2014,
  subclasses2014,
  subraces2014,
  traits2014,
  weaponMasteryProperties2024,
  weaponProperties2014,
  weaponProperties2024,
  VALID_BACKGROUNDS,
  VALID_RACES,
  VALID_SUBRACES,
  VALID_CLASSES,
};
