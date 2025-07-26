export function getAbilityModifier(score: number): number {
  return Math.floor((score - 10) / 2);
}
