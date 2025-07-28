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
      alignment: "",
      class: "" as VALID_CLASSES,
      background: "",
      experiencePoints: 0,
      age: 0,
      race: "",
      level: 1,
      skills: [],
      inventory: [],
      attributes: {
        strength: 0,
        dexterity: 0,
        intelligence: 0,
        constitution: 0,
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
      hitDice: { die: 6, count: 1 },
      savingThrows: [],
      featuresAndTraits: [],
      proficiencies: [],
      languages: [],
      personalityTraits: "",
      ideals: "",
      bonds: "",
      flaws: "",
    }) as CharacterSheet;
  },
  {} as CharacterSheet,
);

export function saveCurrent(patch: Partial<CharacterSheet>) {
  const name = get(currentName);
  if (!name) {
    console.error("No currentName set!");
    return;
  }

  characters.update((chars) => {
    const index = chars.findIndex((c) => c.characterName === name);
    if (index === -1) {
      console.error(`Character ${name} not found in store.`);
      return chars;
    }

    const existing = chars[index];

    const updated: CharacterSheet = { ...existing, ...patch };

    const newChars = [...chards];
    newChars[index] = updated;
    return newChars;
  });
}
