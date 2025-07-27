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
