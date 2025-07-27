export function getAbilityModifier(score: number) {
  return Math.floor((score - 10) / 2);
}

export function getPlusSign(value: number) {
  return value >= 10 ? '+' : '';
}

export function getProficiencyBonus(level: number) {
  if (level < 5) return 2;
  if (level < 9) return 3;
  if (level < 13) return 4;
  if (level < 17) return 5;
  return 6;
}

export function getPerception(wisdomModifier: number, level: number) {
  return wisdomModifier + 10 + getProficiencyBonus(level);
}

export function saveTestCharacters(testCharacters: CharacterSheet[]) {
  const characters: CharacterSheet[] = testCharacters;
  localStorage.setItem('characters', JSON.stringify(characters));
}

export function loadCharacters(): CharacterSheet[] {
  const json = localStorage.getItem('characters');
  if (!json) return [];
  try {
    return JSON.parse(json) as CharacterSheet[];
  } catch {
    console.warn('Corrupted characters in localStorage, resetting');
    localStorage.removeItem('characters');
    return [];
  }
}

export function camelCaseToNormalText(input: string): string {
  return input.replace(/([a-z])([A-Z])/g, '$1 $2');
}
