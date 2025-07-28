import { derived } from 'svelte/store';
import { currentCharacter } from './characters';
import { getAbilityModifier } from '$lib/utils';

export const abilityScores = derived(currentCharacter, (c) => [
  {
    label: 'Strength',
    code: 'str',
    value: c.attributes.strength,
  },
  {
    label: 'Dexterity',
    code: 'dex',
    value: c.attributes.dexterity,
  },
  {
    label: 'Constitution',
    code: 'con',
    value: c.attributes.constitution,
  },
  {
    label: 'Intelligence',
    code: 'int',
    value: c.attributes.intelligence,
  },
  {
    label: 'Wisdom',
    code: 'wis',
    value: c.attributes.wisdom,
  },
  {
    label: 'Charisma',
    code: 'cha',
    value: c.attributes.charisma,
  },
]);

export const wisdomModifier = derived(
  abilityScores,
  (scores) => {
    const list = Array.isArray(scores) ? scores : [];
    return getAbilityModifier(
      list.find((a) => a.code === 'wis')?.value ?? 0,
    );
  },
);

export const armorClass = derived(currentCharacter, (c) => c.armorClass || 0);
export const initiative = derived(currentCharacter, (c) =>
  getAbilityModifier(
    c.attributes.dexterity,
  ));
export const speed = derived(currentCharacter, (c) => c.speed);

export const proficiencies = derived(
  currentCharacter,
  (c): string[] => c.proficiencies.map((p) => p.name),
);

export const languages = derived(
  currentCharacter,
  (c): string[] => c.languages.map((l) => l.name),
);
