import { goto } from '$app/navigation';
import { derived, get, writable } from 'svelte/store';
import type { CharacterSheet, VALID_CLASSES } from '@types';
import { blankCharacter } from '$lib/constants/blankcharacter';

export interface CharacterListItem {
  characterName: string;
  class: VALID_CLASSES;
  level: number;
}

function createCharacters() {
  let initial: CharacterSheet[] = [];
  try {
    const raw = localStorage.getItem('characters');
    if (raw) initial = JSON.parse(raw);
  } catch (error) {
    console.log(error);
  }

  const { subscribe, set, update } = writable<CharacterSheet[]>(initial);

  const unsubscribe = subscribe((current) => {
    localStorage.setItem('characters', JSON.stringify(current));
  });

  function saveToLocalStorage() {
    const all = get(characters);
    localStorage.setItem('characters', JSON.stringify(all));
  }

  return { subscribe, set, update, unsubscribe, saveToLocalStorage };
}

export const characters = createCharacters();

export const characterList = derived(
  characters,
  ($characters): CharacterListItem[] =>
    $characters.map((c): CharacterListItem => ({
      characterName: c.characterName,
      class: c.class, // assuming your sheet has a `class` field
      level: c.level,
    })),
);

export const currentName = writable<string | null>(null);

export const currentCharacter = derived(
  [characters, currentName],
  ([$characters, $currentName], set) => {
    if ($currentName) {
      const found = $characters.find((c) => c.characterName === $currentName);
      if (found) {
        set(found);
        return;
      }
    }
  },
  {} as CharacterSheet,
);

export function saveCurrent(patch: Partial<CharacterSheet>) {
  const name = get(currentName);
  if (!name) {
    console.error('No character selected!');
    return;
  }

  characters.update((chars) => {
    const index = chars.findIndex((c) => c.characterName === name);
    if (index === -1) {
      console.error(`Character ${name} not found in store.`);
      return chars;
    }

    if (patch.characterName && patch.characterName !== name) {
      currentName.set(patch.characterName);
    }

    const existing = chars[index];

    const updated: CharacterSheet = { ...existing, ...patch };

    const newChars = [...chars];
    newChars[index] = updated;
    return newChars;
  });
}

export function createNewCharacter() {
  const placeholder = `new_character_${Date.now()}`;

  const fresh = { ...blankCharacter, characterName: placeholder };

  characters.update((arr) => [...arr, fresh]);

  currentName.set(placeholder);

  goto('/character-creator');
}

export function saveCharacters() {
  characters.saveToLocalStorage();
}
