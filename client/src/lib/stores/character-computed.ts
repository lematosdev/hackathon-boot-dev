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

export const battleSkills = derived(
  abilityScores,
  (scores) => {
    const list = Array.isArray(scores) ? scores : [];
    const init = getAbilityModifier(
      list.find((a) => a.code === 'dex')?.value || 0,
    );
    return [
      { label: 'Armor class', value: 17 },
      { label: 'Initiative', value: init },
      { label: 'Speed', value: 30, unit: 'feet' },
    ];
  },
);
