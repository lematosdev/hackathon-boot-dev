import { derived, get, writable } from "svelte/store";
import type { CharacterSheet, VALID_CLASSES } from "@types";

export interface CharacterListItem {
  characterName: string;
  class: VALID_CLASSES;
  level: number;
}

function createCharacters() {
  let initial: CharacterSheet[] = [];
  try {
    const raw = localStorage.getItem("characters");
    if (raw) initial = JSON.parse(raw);
  } catch (error) {
    console.log(error);
  }

  const { subscribe, set, update } = writable<CharacterSheet[]>(initial);

  subscribe((current) => {
    localStorage.setItem("characters", JSON.stringify(current));
  });

  return { subscribe, set, update };
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

    set({
      characterName: "",
      playerName: "",
      aligntment: "",
      age: 0,
      race: "",
      level: 1,
      skills: [],
      inventory: [],
      attributes: {
        strength: 0,
        dexterity: 0,
        intelligence: 0,
        charisma: 0,
        wisdom: 0,
      },
      armorClass: 0,
      initiative: 0,
      speed: 0,
      hitPoints: {
        current: 0,
        maximum: 0,
        temporary: 0,
      },
      hitDice: {},
      savingThrows: [],
      featuresAndTraits: [],
      proficiencies: [],
      languages: [],
    }) as CharacterSheet;
  },
);

export function saveCurrent(patch: Partial<CharacterSheet>) {
  const name = get(currentName);
  if (!name) {
    console.error("No currentName set!");
    return;
  }

  characters.update((map) => {
    const existing = map[name];
    if (!existing) {
      console.error(`Character "${name}" not found in store.`);
      return map;
    }

    // Merge top-level fields
    const updated: CharacterSheet = { ...existing, ...patch };

    return { ...map, [name]: updated };
  });
}
