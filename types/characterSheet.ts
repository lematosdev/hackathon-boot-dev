import { AbilityScores2014 } from './dnd/abilityscores2014.ts';
import { Alignments2014 } from './dnd/alignments2014.ts';
import { Classes2014 } from './dnd/classes2014.ts';
import { Languages2014 } from './dnd/languages2014.ts';
import { Proficiencies2014 } from './dnd/proficiencies2014.ts';
import { Races2014 } from './dnd/races2014.ts';
import { Skills2014 } from './dnd/skills2014.ts';

export interface CharacterSheet {
  characterName: string;
  playerName: string;
  alignment: Alignments2014;
  age: number;
  race: Races2014;
  class: Classes2014;
  level: number;
  skills: {
    name: Skills2014;
    proficiency: boolean;
    abilityScore: AbilityScores2014;
    score: number;
  }[];
  inventory: {
    itemName: string;
    quantity: number;
  }[];
  attributes: {
    strength: number;
    dexterity: number;
    intelligence: number;
    charisma: number;
    constitution: number;
    wisdom: number;
  };
  inspiration?: number;
  passivePerception?: number;
  armorClass: number;
  initiative: number;
  speed: number;
  hitPoints: {
    current: number;
    maximum: number;
    temporary: number;
  };
  hitDice: {
    die: number;
    total: number;
    used: number;
  };
  savingThrows: {
    abilityScore: AbilityScores2014;
    proficiency: boolean;
    score: number;
  }[];
  personalityTraits?: string;
  ideals?: string;
  bonds?: string;
  flaws?: string;
  backstory?: string;
  featuresAndTraits: {
    name: string;
    description: string;
  }[];
  proficiencies: {
    name: Proficiencies2014;
  }[];
  languages: {
    name: Languages2014;
  }[];
  spells?: {
    name: string;
    level: number;
    school: string;
    castingTime: string;
    concentration: boolean;
    ritual: boolean;
    range: string;
    components: string;
    duration: string;
    damage: {
      type: string;
      atSlotLevel: {
        [key: number]: string;
      };
    };
    description: string;
  }[];
}