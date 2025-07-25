export const weaponMasteryProperties2024 = {
  cleave: {
    index: 'cleave',
    name: 'Cleave',
    description:
      "If you hit a creature with a melee attack roll using this weapon, you can make a melee attack roll with the weapon against a second creature within 5 feet of the first that is also within your reach. On a hit, the second creature takes the weapon's damage, but don't add your ability modifier to that damage unless that modifier is negative. You can make this extra attack only once per turn.",
    url: '/api/2024/weapon-mastery-properties/cleave',
  },
  graze: {
    index: 'graze',
    name: 'Graze',
    description:
      'If your attack roll with this weapon misses a creature, you can deal damage to that creature equal to the ability modifier you used to make the attack roll. This damage is the same type dealt by the weapon, and the damage can be increased only by increasing the ability modifier.',
    url: '/api/2024/weapon-mastery-properties/graze',
  },
  nick: {
    index: 'nick',
    name: 'Nick',
    description:
      'When you make the extra attack of the Light property, you can make it as part of the Attack action instead of as a Bonus Action. You can make this extra attack only once per turn.',
    url: '/api/2024/weapon-mastery-properties/nick',
  },
  push: {
    index: 'push',
    name: 'Push',
    description:
      'If you hit a creature with this weapon, you can push the creature up to 10 feet straight away from yourself if it is Large or smaller.',
    url: '/api/2024/weapon-mastery-properties/push',
  },
  sap: {
    index: 'sap',
    name: 'Sap',
    description:
      'If you hit a creature with this weapon, that creature has Disadvantage on its next attack roll before the start of your next turn.',
    url: '/api/2024/weapon-mastery-properties/sap',
  },
  slow: {
    index: 'slow',
    name: 'Slow',
    description:
      "If you hit a creature with this weapon and deal damage to it, you can reduce its Speed by 10 feet until the start of your next turn. If the creature is hit more than once by weapons that have this property, the Speed reduction doesn't exceed 10 feet.",
    url: '/api/2024/weapon-mastery-properties/slow',
  },
  topple: {
    index: 'topple',
    name: 'Topple',
    description:
      'If you hit a creature with this weapon, you can force the creature to make a Constitution saving throw (DC 8 plus the ability modifier used to make the attack roll and your Proficiency Bonus). On a failed save, the creature has the Prone condition.',
    url: '/api/2024/weapon-mastery-properties/topple',
  },
  vex: {
    index: 'vex',
    name: 'Vex',
    description:
      'If you hit a creature with this weapon and deal damage to the creature, you have Advantage on your next attack roll against that creature before the end of your next turn.',
    url: '/api/2024/weapon-mastery-properties/vex',
  },
} as const;
