export const weaponProperties2024 = {
  ammunition: {
    index: 'ammunition',
    name: 'Ammunition',
    description:
      "You can use a weapon that has the Ammunition property to make a ranged attack only if you have ammunition to fire from it. The type of ammunition required is specified with the weapon's range. Each attack expends one piece of ammunition. Drawing the ammunition is part of the attack (you need a free hand to load a one-handed weapon). After a fight, you can spend 1 minute to recover half the ammunition (round down) you used in the fight; the rest is lost.",
    url: '/api/2024/weapon-properties/ammunition',
  },
  finesse: {
    index: 'finesse',
    name: 'Finesse',
    description:
      'When making an attack with a Finesse weapon, use your choice of your Strength or Dexterity modifier for the attack and damage rolls. You must use the same modifier for both rolls.',
    url: '/api/2024/weapon-properties/finesse',
  },
  heavy: {
    index: 'heavy',
    name: 'Heavy',
    description:
      "You have Disadvantage on attack rolls with a Heavy weapon if it's a Melee weapon and your Strength score isn't at least 13 or if it's a Ranged weapon and your Dexterity score isn't at least 13.",
    url: '/api/2024/weapon-properties/heavy',
  },
  light: {
    index: 'light',
    name: 'Light',
    description:
      "When you take the Attack action on your turn and attack with a Light weapon, you can make one extra attack as a Bonus Action later on the same turn. That extra attack must be made with a different Light weapon, and you don't add your ability modifier to the extra attack's damage unless that modifier is negative. For example, you can attack with a Shortsword in one hand and a Dagger in the other using the Attack action and a Bonus Action, but you don't add your Strength or Dexterity modifier to the damage roll of the Bonus Action unless that modifier is negative.",
    url: '/api/2024/weapon-properties/light',
  },
  loading: {
    index: 'loading',
    name: 'Loading',
    description:
      'You can fire only one piece of ammunition from a Loading weapon when you use an action, a Bonus Action, or a Reaction to fire it, regardless of the number of attacks you can normally make.',
    url: '/api/2024/weapon-properties/loading',
  },
  range: {
    index: 'range',
    name: 'Range',
    description:
      "A Range weapon has a range in parentheses after the Ammunition or Thrown property. The range lists two numbers. The first is the weapon's normal range in feet, and the second is the weapon's long range. When attacking a target beyond normal range, you have Disadvantage on the attack roll. You can't attack a target beyond the long range.",
    url: '/api/2024/weapon-properties/range',
  },
  reach: {
    index: 'reach',
    name: 'Reach',
    description:
      'A Reach weapon adds 5 feet to your reach when you attack with it, as well as when determining your reach for Opportunity Attacks with it.',
    url: '/api/2024/weapon-properties/reach',
  },
  thrown: {
    index: 'thrown',
    name: 'Thrown',
    description:
      'If a weapon has the Thrown property, you can throw the weapon to make a ranged attack, and you can draw that weapon as part of the attack. If the weapon is a Melee weapon, use the same ability modifier for the attack and damage rolls that you use for a melee attack with that weapon.',
    url: '/api/2024/weapon-properties/thrown',
  },
  'two-handed': {
    index: 'two-handed',
    name: 'Two-Handed',
    description:
      'A Two-Handed weapon requires two hands when you attack with it.',
    url: '/api/2024/weapon-properties/two-handed',
  },
  versatile: {
    index: 'versatile',
    name: 'Versatile',
    description:
      'A Versatile weapon can be used with one or two hands. A damage value in parentheses appears with the property. The weapon deals that damage when used with two hands to make a melee attack.',
    url: '/api/2024/weapon-properties/versatile',
  },
} as const;
