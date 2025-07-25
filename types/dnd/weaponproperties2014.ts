export const weaponProperties2014 = {
  ammunition: {
    index: 'ammunition',
    name: 'Ammunition',
    desc: [
      'You can use a weapon that has the ammunition property to make a ranged attack only if you have ammunition to fire from the weapon. Each time you attack with the weapon, you expend one piece of ammunition. Drawing the ammunition from a quiver, case, or other container is part of the attack (you need a free hand to load a one-handed weapon).',
      'At the end of the battle, you can recover half your expended ammunition by taking a minute to search the battlefield. If you use a weapon that has the ammunition property to make a melee attack, you treat the weapon as an improvised weapon (see "Improvised Weapons" later in the section). A sling must be loaded to deal any damage when used in this way.',
    ],
    url: '/api/2014/weapon-properties/ammunition',
  },
  finesse: {
    index: 'finesse',
    name: 'Finesse',
    desc: [
      'When making an attack with a finesse weapon, you use your choice of your Strength or Dexterity modifier for the attack and damage rolls. You must use the same modifier for both rolls.',
    ],
    url: '/api/2014/weapon-properties/finesse',
  },
  heavy: {
    index: 'heavy',
    name: 'Heavy',
    desc: [
      "Small creatures have disadvantage on attack rolls with heavy weapons. A heavy weapon's size and bulk make it too large for a Small creature to use effectively.",
    ],
    url: '/api/2014/weapon-properties/heavy',
  },
  light: {
    index: 'light',
    name: 'Light',
    desc: [
      'A light weapon is small and easy to handle, making it ideal for use when fighting with two weapons.',
    ],
    url: '/api/2014/weapon-properties/light',
  },
  loading: {
    index: 'loading',
    name: 'Loading',
    desc: [
      'Because of the time required to load this weapon, you can fire only one piece of ammunition from it when you use an action, bonus action, or reaction to fire it, regardless of the number of attacks you can normally make.',
    ],
    url: '/api/2014/weapon-properties/loading',
  },
  reach: {
    index: 'reach',
    name: 'Reach',
    desc: [
      'This weapon adds 5 feet to your reach when you attack with it, as well as when determining your reach for opportunity attacks with it.',
    ],
    url: '/api/2014/weapon-properties/reach',
  },
  special: {
    index: 'special',
    name: 'Special',
    desc: [
      'A weapon with the special property has unusual rules governing its use, explained in the weapon\'s description (see "Special Weapons" later in this section).',
    ],
    url: '/api/2014/weapon-properties/special',
  },
  thrown: {
    index: 'thrown',
    name: 'Thrown',
    desc: [
      'If a weapon has the thrown property, you can throw the weapon to make a ranged attack. If the weapon is a melee weapon, you use the same ability modifier for that attack roll and damage roll that you would use for a melee attack with the weapon. For example, if you throw a handaxe, you use your Strength, but if you throw a dagger, you can use either your Strength or your Dexterity, since the dagger has the finesse property.',
    ],
    url: '/api/2014/weapon-properties/thrown',
  },
  'two-handed': {
    index: 'two-handed',
    name: 'Two-Handed',
    desc: ['This weapon requires two hands when you attack with it.'],
    url: '/api/2014/weapon-properties/two-handed',
  },
  versatile: {
    index: 'versatile',
    name: 'Versatile',
    desc: [
      'This weapon can be used with one or two hands. A damage value in parentheses appears with the property--the damage when the weapon is used with two hands to make a melee attack.',
    ],
    url: '/api/2014/weapon-properties/versatile',
  },
  monk: {
    index: 'monk',
    name: 'Monk',
    desc: [
      "Monks gain several benefits while unarmed or wielding only monk weapons while they aren't wearing armor or wielding shields.",
    ],
    url: '/api/2014/weapon-properties/monk',
  },
} as const;
