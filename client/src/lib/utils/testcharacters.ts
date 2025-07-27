// src/characters.ts
import type { CharacterSheet } from '@types';

export const elenorSwiftleaf: CharacterSheet = {
  characterName: 'Elenor Swiftleaf',
  playerName: 'Alice',
  alignment: 'Neutral Good',
  age: 120,
  race: 'Elf',
  class: 'Ranger',
  level: 5,
  skills: [
    {
      name: 'Stealth',
      proficiency: true,
      abilityScore: 'dexterity',
      score: 8,
    },
    {
      name: 'Survival',
      proficiency: true,
      abilityScore: 'wisdom',
      score: 6,
    },
    {
      name: 'Perception',
      proficiency: false,
      abilityScore: 'wisdom',
      score: 4,
    },
  ],
  inventory: [
    { itemName: 'longbow', quantity: 1 },
    { itemName: 'quiver of arrows', quantity: 20 },
    { itemName: "explorer's pack", quantity: 1 },
  ],
  attributes: {
    strength: 10,
    dexterity: 18,
    intelligence: 14,
    charisma: 12,
    constitution: 12,
    wisdom: 16,
  },
  inspiration: 1,
  passivePerception: 14,
  armorClass: 15,
  initiative: 4,
  speed: 35,
  hitPoints: { current: 38, maximum: 38, temporary: 0 },
  hitDice: { die: 10, total: 5, used: 0 },
  savingThrows: [
    { abilityScore: 'dexterity', proficiency: true, score: 8 },
    { abilityScore: 'wisdom', proficiency: true, score: 6 },
    { abilityScore: 'strength', proficiency: false, score: 0 },
  ],
  personalityTraits: "I'm always calm, no matter what the situation.",
  ideals: 'Balance—everything in nature must be in harmony.',
  bonds: 'I will do anything to protect the natural world.',
  flaws:
    'I have little respect for those who make no effort to safeguard the environment.',
  backstory:
    'Elenor was raised in the high forests, trained by the wardens to guard against unnatural threats.',
  featuresAndTraits: [
    {
      name: 'Favored Enemy',
      description: 'Advantage on Survival checks to track beasts.',
    },
    {
      name: 'Natural Explorer',
      description: 'Double proficiency bonus for chosen terrain.',
    },
  ],
  proficiencies: [
    { name: 'Light Armor' },
    { name: 'Medium Armor' },
    { name: 'Simple Weapons' },
    { name: 'Martial Weapons' },
  ],
  languages: [
    { name: 'Common' },
    { name: 'Elvish' },
  ],
};

export const thorgarIronfist: CharacterSheet = {
  characterName: 'Thorgar Ironfist',
  playerName: 'Bob',
  alignment: 'Lawful Neutral',
  age: 80,
  race: 'Dwarf',
  class: 'Fighter',
  level: 5,
  skills: [
    {
      name: 'Athletics',
      proficiency: true,
      abilityScore: 'Strength',
      score: 7,
    },
    {
      name: 'Intimidation',
      proficiency: false,
      abilityScore: 'Charisma',
      score: 2,
    },
    {
      name: 'Perception',
      proficiency: true,
      abilityScore: 'Wisdom',
      score: 5,
    },
  ],
  inventory: [
    { itemName: 'Battleaxe', quantity: 1 },
    { itemName: 'Shield', quantity: 1 },
    { itemName: 'Chain Mail', quantity: 1 },
  ],
  attributes: {
    strength: 18,
    dexterity: 12,
    intelligence: 10,
    charisma: 8,
    constitution: 16,
    wisdom: 14,
  },
  armorClass: 18,
  initiative: 1,
  speed: 25,
  hitPoints: { current: 50, maximum: 50, temporary: 0 },
  hitDice: { die: 10, total: 5, used: 1 },
  savingThrows: [
    { abilityScore: 'Strength', proficiency: true, score: 7 },
    { abilityScore: 'Constitution', proficiency: true, score: 5 },
    { abilityScore: 'Dexterity', proficiency: false, score: 1 },
  ],
  featuresAndTraits: [
    {
      name: 'Second Wind',
      description: 'Regain 1d10 + fighter level HP once per short rest.',
    },
    {
      name: 'Action Surge',
      description: 'Take one additional action on top of your regular one.',
    },
  ],
  proficiencies: [
    { name: 'All Armor' },
    { name: 'Shields' },
    { name: 'Simple Weapons' },
    { name: 'Martial Weapons' },
  ],
  languages: [
    { name: 'Common' },
    { name: 'Dwarvish' },
  ],
};
