import { abilityScores2014 } from './abilityscores2014.ts';
import { abilityScores2024 } from './abilityscores2024.ts';
import { alignments2014 } from './alignments2014.ts';
import { alignments2024 } from './alignments2024.ts';
import { backgrounds2014 } from './backgrounds2014.ts';
import { classes2014 } from './classes2014.ts';
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
import { races2014 } from './races2014.ts';
import { rules2014 } from './rules2014.ts';
import { ruleSections2014 } from './rulesections2014.ts';
import { skills2014 } from './skills2014.ts';
import { skills2024 } from './skills2024.ts';
import { spells2014 } from './spells2014.ts'
import { subclasses2014 } from './subclasses2014.ts';
import { subraces2014 } from './subraces2014.ts';
import { traits2014 } from './traits2014.ts';
import { weaponMasteryProperties2024 } from './weaponmasteryproperties2024.ts';
import { weaponProperties2014 } from './weaponproperties2014.ts';
import { weaponProperties2024 } from './weaponproperties2024.ts';


export type SubracesType = keyof typeof subraces2014;
export type BackgroundTypes = keyof typeof backgrounds2014;
export type ClassesType = keyof typeof classes2014;
export type RacesType = keyof typeof races2014;
export type AbilitiesType = keyof typeof abilityScores2024;

export const VALID_RACES = Object.keys(races2014) as (keyof typeof races2014)[];
export const VALID_SUBRACES = Object.keys(subraces2014) as (keyof typeof subraces2014)[];
export const VALID_BACKGROUNDS = Object.keys(backgrounds2014) as (keyof typeof backgrounds2014)[];
export const VALID_CLASSES = Object.keys(classes2014) as (keyof typeof classes2014)[];
export const VALID_SUBCLASSES = Object.keys(subclasses2014) as (keyof typeof subclasses2014)[];
export const VALID_ABILITIES_2024 = Object.keys(abilityScores2024) as (keyof typeof abilityScores2024)[];
export const VALID_ABILITIES_2014 = Object.keys(abilityScores2014) as (keyof typeof abilityScores2014)[];
export const VALID_ALIGNMENTS_2014 = Object.keys(alignments2014) as (keyof typeof alignments2014)[];
export const VALID_ALIGNMENTS_2024 = Object.keys(alignments2024) as (keyof typeof alignments2024)[];
export const VALID_CONDITIONS_2014 = Object.keys(conditions2014) as (keyof typeof conditions2014)[];
export const VALID_CONDITIONS_2024 = Object.keys(conditions2024) as (keyof typeof conditions2024)[];
export const VALID_DAMAGE_TYPES_2014 = Object.keys(damageTypes2014) as (keyof typeof damageTypes2014)[];
export const VALID_DAMAGE_TYPES_2024 = Object.keys(damageTypes2024) as (keyof typeof damageTypes2024)[];
export const VALID_EQUIPMENT = Object.keys(equipment2014) as (keyof typeof equipment2014)[];
export const VALID_EQUIPMENT_CATEGORIES = Object.keys(equipmentCategories2014) as (keyof typeof equipmentCategories2014)[];
export const VALID_FEATS = Object.keys(feats2014) as (keyof typeof feats2014)[];
export const VALID_FEATURES = Object.keys(features2014) as (keyof typeof features2014)[];
export const VALID_LANGUAGES_2014 = Object.keys(languages2014) as (keyof typeof languages2014)[];
export const VALID_LANGUAGES_2024 = Object.keys(languages2024) as (keyof typeof languages2024)[];
export const VALID_MAGIC_ITEMS = Object.keys(magicItems2014) as (keyof typeof magicItems2014)[];
export const VALID_PROFICIENCIES = Object.keys(proficiencies2014) as (keyof typeof proficiencies2014)[];
export const VALID_SKILLS_2014 = Object.keys(skills2014) as (keyof typeof skills2014)[];
export const VALID_SKILLS_2024 = Object.keys(skills2024) as (keyof typeof skills2024)[];
export const VALID_SPELLS = Object.keys(spells2014) as (keyof typeof spells2014)[];
export const VALID_TRAITS = Object.keys(traits2014) as (keyof typeof traits2014)[];
export const VALID_WEAPON_MASTERY_PROPERTIES = Object.keys(weaponMasteryProperties2024) as (keyof typeof weaponMasteryProperties2024)[];
export const VALID_WEAPON_PROPERTIES_2014 = Object.keys(weaponProperties2014) as (keyof typeof weaponProperties2014)[];
export const VALID_WEAPON_PROPERTIES_2024 = Object.keys(weaponProperties2024) as (keyof typeof weaponProperties2024)[];

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
