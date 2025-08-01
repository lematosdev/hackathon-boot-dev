interface Features2014Class {
  index: string;
  name: string;
  url: string;
}

interface Features2014Subclass {
  index: string;
  name: string;
  url: string;
}

interface Features2014 {
  class: Features2014Class;
  desc: string[];
  feature_specific?: object;
  index: string;
  level: number;
  name: string;
  parent?: object;
  prerequisites: any[] | object[];
  reference?: string;
  subclass?: Features2014Subclass;
  url: string;
}

export const features2014 = {
  rage: {
    index: 'rage',
    class: {
      index: 'barbarian',
      name: 'Barbarian',
      url: '/api/2014/classes/barbarian',
    },
    name: 'Rage',
    level: 1,
    prerequisites: [],
    desc: [
      "In battle, you fight with primal ferocity. On your turn, you can enter a rage as a bonus action. While raging, you gain the following benefits if you aren't wearing heavy armor:",
      '- You have advantage on Strength checks and Strength saving throws.',
      '- When you make a melee weapon Attack using Strength, you gain a +2 bonus to the damage roll. This bonus increases as you level.',
      '- You have Resistance to bludgeoning, piercing, and slashing damage.',
      "If you are able to cast Spells, you can't cast them or concentrate on them while raging.",
      "Your rage lasts for 1 minute. It ends early if you are knocked Unconscious or if Your Turn ends and you haven't attacked a hostile creature since your last turn or taken damage since then. You can also end your rage on Your Turn as a Bonus Action.",
      'Once you have raged the maximum number of times for your barbarian level, you must finish a Long Rest before you can rage again. You may rage 2 times at 1st level, 3 at 3rd, 4 at 6th, 5 at 12th, and 6 at 17th.',
    ],
    url: '/api/2014/features/rage',
  },
  'barbarian-unarmored-defense': {
    index: 'barbarian-unarmored-defense',
    class: {
      index: 'barbarian',
      name: 'Barbarian',
      url: '/api/2014/classes/barbarian',
    },
    name: 'Unarmored Defense',
    level: 1,
    prerequisites: [],
    desc: [
      'While you are not wearing any armor, your Armor Class equals 10 + your Dexterity modifier + your Constitution modifier. You can use a shield and still gain this benefit.',
    ],
    url: '/api/2014/features/barbarian-unarmored-defense',
  },
  'reckless-attack': {
    index: 'reckless-attack',
    class: {
      index: 'barbarian',
      name: 'Barbarian',
      url: '/api/2014/classes/barbarian',
    },
    name: 'Reckless Attack',
    level: 2,
    prerequisites: [],
    desc: [
      'Starting at 2nd level, you can throw aside all concern for defense to attack with fierce desperation. When you make your first attack on your turn, you can decide to attack recklessly. Doing so gives you advantage on melee weapon attack rolls using Strength during this turn, but attack rolls against you have advantage until your next turn.',
    ],
    url: '/api/2014/features/reckless-attack',
  },
  'danger-sense': {
    index: 'danger-sense',
    class: {
      index: 'barbarian',
      name: 'Barbarian',
      url: '/api/2014/classes/barbarian',
    },
    name: 'Danger Sense',
    level: 2,
    prerequisites: [],
    desc: [
      "At 2nd level, you gain an uncanny sense of when things nearby aren't as they should be, giving you an edge when you dodge away from danger. You have advantage on Dexterity saving throws against effects that you can see, such as traps and spells. To gain this benefit, you can't be blinded, deafened, or incapacitated.",
    ],
    url: '/api/2014/features/danger-sense',
  },
  'primal-path': {
    index: 'primal-path',
    class: {
      index: 'barbarian',
      name: 'Barbarian',
      url: '/api/2014/classes/barbarian',
    },
    name: 'Primal Path',
    level: 3,
    prerequisites: [],
    desc: [
      'At 3rd level, you choose a path that shapes the nature of your rage. Choose the Path of the Berserker or the Path of the Totem Warrior, both detailed at the end of the class description. Your choice grants you features at 3rd level and again at 6th, 10th, and 14th levels.',
    ],
    url: '/api/2014/features/primal-path',
  },
  frenzy: {
    index: 'frenzy',
    class: {
      index: 'barbarian',
      name: 'Barbarian',
      url: '/api/2014/classes/barbarian',
    },
    subclass: {
      index: 'berserker',
      name: 'Berserker',
      url: '/api/2014/subclasses/berserker',
    },
    name: 'Frenzy',
    level: 3,
    prerequisites: [],
    desc: [
      'Starting when you choose this path at 3rd level, you can go into a frenzy when you rage. If you do so, for the duration of your rage you can make a single melee weapon attack as a bonus action on each of your turns after this one. When your rage ends, you suffer one level of exhaustion (as described in appendix A).',
    ],
    url: '/api/2014/features/frenzy',
  },
  'barbarian-ability-score-improvement-1': {
    index: 'barbarian-ability-score-improvement-1',
    class: {
      index: 'barbarian',
      name: 'Barbarian',
      url: '/api/2014/classes/barbarian',
    },
    name: 'Ability Score Improvement',
    level: 4,
    prerequisites: [],
    desc: [
      "When you reach 4th level, and again at 8th, 12th, 16th, and 19th level, you can increase one ability score of your choice by 2, or you can increase two ability scores of your choice by 1. As normal, you can't increase an ability score above 20 using this feature.",
    ],
    url: '/api/2014/features/barbarian-ability-score-improvement-1',
  },
  'barbarian-extra-attack': {
    index: 'barbarian-extra-attack',
    class: {
      index: 'barbarian',
      name: 'Barbarian',
      url: '/api/2014/classes/barbarian',
    },
    name: 'Extra Attack',
    level: 5,
    prerequisites: [],
    desc: [
      'Beginning at 5th level, you can attack twice, instead of once, whenever you take the Attack action on your turn.',
    ],
    url: '/api/2014/features/barbarian-extra-attack',
  },
  'fast-movement': {
    index: 'fast-movement',
    class: {
      index: 'barbarian',
      name: 'Barbarian',
      url: '/api/2014/classes/barbarian',
    },
    name: 'Fast Movement',
    level: 5,
    prerequisites: [],
    desc: [
      "Starting at 5th level, your speed increases by 10 feet while you aren't wearing heavy armor.",
    ],
    url: '/api/2014/features/fast-movement',
  },
  'mindless-rage': {
    index: 'mindless-rage',
    class: {
      index: 'barbarian',
      name: 'Barbarian',
      url: '/api/2014/classes/barbarian',
    },
    subclass: {
      index: 'berserker',
      name: 'Berserker',
      url: '/api/2014/subclasses/berserker',
    },
    name: 'Mindless Rage',
    level: 6,
    prerequisites: [],
    desc: [
      "Beginning at 6th level, you can't be charmed or frightened while raging. If you are charmed or frightened when you enter your rage, the effect is suspended for the duration of the rage.",
    ],
    url: '/api/2014/features/mindless-rage',
  },
  'primal-path-improvement-1': {
    index: 'primal-path-improvement-1',
    class: {
      index: 'barbarian',
      name: 'Barbarian',
      url: '/api/2014/classes/barbarian',
    },
    name: 'Path feature',
    level: 6,
    prerequisites: [],
    desc: [
      'At 3rd level, you choose a path that shapes the nature of your rage. Choose the Path of the Berserker or the Path of the Totem Warrior, both detailed at the end of the class description. Your choice grants you features at 3rd level and again at 6th, 10th, and 14th levels.',
    ],
    url: '/api/2014/features/primal-path-improvement-1',
  },
  'feral-instinct': {
    index: 'feral-instinct',
    class: {
      index: 'barbarian',
      name: 'Barbarian',
      url: '/api/2014/classes/barbarian',
    },
    name: 'Feral Instinct',
    level: 7,
    prerequisites: [],
    desc: [
      'By 7th level, your instincts are so honed that you have advantage on initiative rolls.',
      "Additionally, if you are surprised at the beginning of combat and aren't incapacitated, you can act normally on your first turn, but only if you enter your rage before doing anything else on that turn.",
    ],
    url: '/api/2014/features/feral-instinct',
  },
  'barbarian-ability-score-improvement-2': {
    index: 'barbarian-ability-score-improvement-2',
    class: {
      index: 'barbarian',
      name: 'Barbarian',
      url: '/api/2014/classes/barbarian',
    },
    name: 'Ability Score Improvement',
    level: 8,
    prerequisites: [],
    desc: [
      "When you reach 4th level, and again at 8th, 12th, 16th, and 19th level, you can increase one ability score of your choice by 2, or you can increase two ability scores of your choice by 1. As normal, you can't increase an ability score above 20 using this feature.",
    ],
    url: '/api/2014/features/barbarian-ability-score-improvement-2',
  },
  'brutal-critical-1-die': {
    index: 'brutal-critical-1-die',
    class: {
      index: 'barbarian',
      name: 'Barbarian',
      url: '/api/2014/classes/barbarian',
    },
    name: 'Brutal Critical (1 die)',
    level: 9,
    prerequisites: [],
    desc: [
      'Beginning at 9th level, you can roll one additional weapon damage die when determining the extra damage for a critical hit with a melee attack. This increases to two additional dice at 13th level and three additional dice at 17th level.',
    ],
    url: '/api/2014/features/brutal-critical-1-die',
  },
  'intimidating-presence': {
    index: 'intimidating-presence',
    class: {
      index: 'barbarian',
      name: 'Barbarian',
      url: '/api/2014/classes/barbarian',
    },
    subclass: {
      index: 'berserker',
      name: 'Berserker',
      url: '/api/2014/subclasses/berserker',
    },
    name: 'Intimidating Presence',
    level: 10,
    prerequisites: [],
    desc: [
      'Beginning at 10th level, you can use your action to frighten someone with your menacing presence. When you do so, choose one creature that you can see within 30 feet of you. If the creature can see or hear you, it must succeed on a Wisdom saving throw (DC equal to 8 + your proficiency bonus + your Charisma modifier) or be frightened of you until the end of your next turn. On subsequent turns, you can use your action to extend the duration of this effect on the frightened creature until the end of your next turn. This effect ends if the creature ends its turn out of line of sight or more than 60 feet away from you.',
      " If the creature succeeds on its saving throw, you can't use this feature on that creature again for 24 hours.",
    ],
    url: '/api/2014/features/intimidating-presence',
  },
  'primal-path-improvement-2': {
    index: 'primal-path-improvement-2',
    class: {
      index: 'barbarian',
      name: 'Barbarian',
      url: '/api/2014/classes/barbarian',
    },
    name: 'Path feature',
    level: 10,
    prerequisites: [],
    desc: [
      'At 3rd level, you choose a path that shapes the nature of your rage. Choose the Path of the Berserker or the Path of the Totem Warrior, both detailed at the end of the class description. Your choice grants you features at 3rd level and again at 6th, 10th, and 14th levels.',
    ],
    url: '/api/2014/features/primal-path-improvement-2',
  },
  'relentless-rage': {
    index: 'relentless-rage',
    class: {
      index: 'barbarian',
      name: 'Barbarian',
      url: '/api/2014/classes/barbarian',
    },
    name: 'Relentless Rage',
    level: 11,
    prerequisites: [],
    desc: [
      "Starting at 11th level, your rage can keep you fighting despite grievous wounds. If you drop to 0 hit points while you're raging and don't die outright, you can make a DC 10 Constitution saving throw. If you succeed, you drop to 1 hit point instead.",
      'Each time you use this feature after the first, the DC increases by 5. When you finish a short or long rest, the DC resets to 10.',
    ],
    url: '/api/2014/features/relentless-rage',
  },
  'barbarian-ability-score-improvement-3': {
    index: 'barbarian-ability-score-improvement-3',
    class: {
      index: 'barbarian',
      name: 'Barbarian',
      url: '/api/2014/classes/barbarian',
    },
    name: 'Ability Score Improvement',
    level: 12,
    prerequisites: [],
    desc: [
      "When you reach 4th level, and again at 8th, 12th, 16th, and 19th level, you can increase one ability score of your choice by 2, or you can increase two ability scores of your choice by 1. As normal, you can't increase an ability score above 20 using this feature.",
    ],
    url: '/api/2014/features/barbarian-ability-score-improvement-3',
  },
  'brutal-critical-2-dice': {
    index: 'brutal-critical-2-dice',
    class: {
      index: 'barbarian',
      name: 'Barbarian',
      url: '/api/2014/classes/barbarian',
    },
    name: 'Brutal Critical (2 dice)',
    level: 13,
    prerequisites: [],
    desc: [
      'Beginning at 9th level, you can roll one additional weapon damage die when determining the extra damage for a critical hit with a melee attack. This increases to two additional dice at 13th level and three additional dice at 17th level.',
    ],
    url: '/api/2014/features/brutal-critical-2-dice',
  },
  retaliation: {
    index: 'retaliation',
    class: {
      index: 'barbarian',
      name: 'Barbarian',
      url: '/api/2014/classes/barbarian',
    },
    subclass: {
      index: 'berserker',
      name: 'Berserker',
      url: '/api/2014/subclasses/berserker',
    },
    name: 'Retaliation',
    level: 14,
    prerequisites: [],
    desc: [
      'Starting at 14th level, when you take damage from a creature that is within 5 feet of you, you can use your reaction to make a melee weapon Attack against that creature.',
    ],
    url: '/api/2014/features/retaliation',
  },
  'primal-path-improvement-3': {
    index: 'primal-path-improvement-3',
    class: {
      index: 'barbarian',
      name: 'Barbarian',
      url: '/api/2014/classes/barbarian',
    },
    name: 'Path feature',
    level: 14,
    prerequisites: [],
    desc: [
      'At 3rd level, you choose a path that shapes the nature of your rage. Choose the Path of the Berserker or the Path of the Totem Warrior, both detailed at the end of the class description. Your choice grants you features at 3rd level and again at 6th, 10th, and 14th levels.',
    ],
    url: '/api/2014/features/primal-path-improvement-3',
  },
  'persistent-rage': {
    index: 'persistent-rage',
    class: {
      index: 'barbarian',
      name: 'Barbarian',
      url: '/api/2014/classes/barbarian',
    },
    name: 'Persistent Rage',
    level: 15,
    prerequisites: [],
    desc: [
      'Beginning at 15th level, your rage is so fierce that it ends early only if you fall unconscious or if you choose to end it.',
    ],
    url: '/api/2014/features/persistent-rage',
  },
  'barbarian-ability-score-improvement-4': {
    index: 'barbarian-ability-score-improvement-4',
    class: {
      index: 'barbarian',
      name: 'Barbarian',
      url: '/api/2014/classes/barbarian',
    },
    name: 'Ability Score Improvement',
    level: 16,
    prerequisites: [],
    desc: [
      "When you reach 4th level, and again at 8th, 12th, 16th, and 19th level, you can increase one ability score of your choice by 2, or you can increase two ability scores of your choice by 1. As normal, you can't increase an ability score above 20 using this feature.",
    ],
    url: '/api/2014/features/barbarian-ability-score-improvement-4',
  },
  'brutal-critical-3-dice': {
    index: 'brutal-critical-3-dice',
    class: {
      index: 'barbarian',
      name: 'Barbarian',
      url: '/api/2014/classes/barbarian',
    },
    name: 'Brutal Critical (3 dice)',
    level: 17,
    prerequisites: [],
    desc: [
      'Beginning at 9th level, you can roll one additional weapon damage die when determining the extra damage for a critical hit with a melee attack. This increases to two additional dice at 13th level and three additional dice at 17th level.',
    ],
    url: '/api/2014/features/brutal-critical-3-dice',
  },
  'indomitable-might': {
    index: 'indomitable-might',
    class: {
      index: 'barbarian',
      name: 'Barbarian',
      url: '/api/2014/classes/barbarian',
    },
    name: 'Indomitable Might',
    level: 18,
    prerequisites: [],
    desc: [
      'Beginning at 18th level, if your total for a Strength check is less than your Strength score, you can use that score in place of the total.',
    ],
    url: '/api/2014/features/indomitable-might',
  },
  'barbarian-ability-score-improvement-5': {
    index: 'barbarian-ability-score-improvement-5',
    class: {
      index: 'barbarian',
      name: 'Barbarian',
      url: '/api/2014/classes/barbarian',
    },
    name: 'Ability Score Improvement',
    level: 19,
    prerequisites: [],
    desc: [
      "When you reach 4th level, and again at 8th, 12th, 16th, and 19th level, you can increase one ability score of your choice by 2, or you can increase two ability scores of your choice by 1. As normal, you can't increase an ability score above 20 using this feature.",
    ],
    url: '/api/2014/features/barbarian-ability-score-improvement-5',
  },
  'primal-champion': {
    index: 'primal-champion',
    class: {
      index: 'barbarian',
      name: 'Barbarian',
      url: '/api/2014/classes/barbarian',
    },
    name: 'Primal Champion',
    level: 20,
    prerequisites: [],
    desc: [
      'At 20th level, you embody the power of the wilds. Your Strength and Constitution scores increase by 4. Your maximum for those scores is now 24.',
    ],
    url: '/api/2014/features/primal-champion',
  },
  'spellcasting-bard': {
    index: 'spellcasting-bard',
    class: {
      index: 'bard',
      name: 'Bard',
      url: '/api/2014/classes/bard',
    },
    name: 'Spellcasting: Bard',
    level: 1,
    prerequisites: [],
    desc: [
      'You have learned to untangle and reshape the fabric of reality in harmony with your wishes and music. Your spells are part of your vast repertoire, magic that you can tune to different situations.',
    ],
    reference: '/api/2014/classes/bard/spellcasting',
    url: '/api/2014/features/spellcasting-bard',
  },
  'bardic-inspiration-d6': {
    index: 'bardic-inspiration-d6',
    class: {
      index: 'bard',
      name: 'Bard',
      url: '/api/2014/classes/bard',
    },
    name: 'Bardic Inspiration (d6)',
    level: 1,
    prerequisites: [],
    desc: [
      'You can inspire others through stirring words or music. To do so, you use a bonus action on your turn to choose one creature other than yourself within 60 feet of you who can hear you. That creature gains one Bardic Inspiration die, a d6. Once within the next 10 minutes, the creature can roll the die and add the number rolled to one ability check, attack roll, or saving throw it makes. The creature can wait until after it rolls the d20 before deciding to use the Bardic Inspiration die, but must decide before the GM says whether the roll succeeds or fails. Once the Bardic Inspiration die is rolled, it is lost. A creature can have only one Bardic Inspiration die at a time.',
      'You can use this feature a number of times equal to your Charisma modifier (a minimum of once). You regain any expended uses when you finish a long rest. ',
      'Your Bardic Inspiration die changes when you reach certain levels in this class. The die becomes a d8 at 5th level, a d10 at 10th level, and a d12 at 15th level.',
    ],
    url: '/api/2014/features/bardic-inspiration-d6',
  },
  'jack-of-all-trades': {
    index: 'jack-of-all-trades',
    class: {
      index: 'bard',
      name: 'Bard',
      url: '/api/2014/classes/bard',
    },
    name: 'Jack of All Trades',
    level: 2,
    prerequisites: [],
    desc: [
      "Starting at 2nd level, you can add half your proficiency bonus, rounded down, to any ability check you make that doesn't already include your proficiency bonus.",
    ],
    url: '/api/2014/features/jack-of-all-trades',
  },
  'song-of-rest-d6': {
    index: 'song-of-rest-d6',
    class: {
      index: 'bard',
      name: 'Bard',
      url: '/api/2014/classes/bard',
    },
    name: 'Song of Rest (d6)',
    level: 2,
    prerequisites: [],
    desc: [
      'Beginning at 2nd level, you can use soothing music or oration to help revitalize your wounded allies during a short rest. If you or any friendly creatures who can hear your performance regain hit points at the end of the short rest by spending one or more Hit Dice, each of those creatures regains an extra 1d6 hit points. ',
      'The extra hit points increase when you reach certain levels in this class: to 1d8 at 9th level, to 1d10 at 13th level, and to 1d12 at 17th level.',
    ],
    url: '/api/2014/features/song-of-rest-d6',
  },
  'bard-college': {
    index: 'bard-college',
    class: {
      index: 'bard',
      name: 'Bard',
      url: '/api/2014/classes/bard',
    },
    name: 'Bard College',
    level: 3,
    prerequisites: [],
    desc: [
      'At 3rd level, you delve into the advanced techniques of a bard college of your choice, such as the College of Lore. Your choice grants you features at 3rd level and again at 6th and 14th level.',
    ],
    url: '/api/2014/features/bard-college',
  },
  'bonus-proficiencies': {
    index: 'bonus-proficiencies',
    class: {
      index: 'bard',
      name: 'Bard',
      url: '/api/2014/classes/bard',
    },
    subclass: {
      index: 'lore',
      name: 'Lore',
      url: '/api/2014/subclasses/lore',
    },
    name: 'Bonus Proficiencies',
    level: 3,
    prerequisites: [],
    desc: [
      'When you join the College of Lore at 3rd level, you gain proficiency with three skills of your choice.',
    ],
    url: '/api/2014/features/bonus-proficiencies',
  },
  'cutting-words': {
    index: 'cutting-words',
    class: {
      index: 'bard',
      name: 'Bard',
      url: '/api/2014/classes/bard',
    },
    subclass: {
      index: 'lore',
      name: 'Lore',
      url: '/api/2014/subclasses/lore',
    },
    name: 'Cutting Words',
    level: 3,
    prerequisites: [],
    desc: [
      'Also at 3rd level, you learn how to use your wit to distract, confuse, and otherwise sap the confidence and competence of others.',
      "When a creature that you can see within 60 feet of you makes an attack roll, an ability check, or a damage roll, you can use your reaction to expend one of your uses of Bardic Inspiration, rolling a Bardic Inspiration die and subtracting the number rolled from the creature's roll.",
      "You can choose to use this feature after the creature makes its roll, but before the GM determines whether the attack roll or ability check succeeds or fails, or before the creature deals its damage. The creature is immune if it can't hear you or if it's immune to being charmed.",
    ],
    url: '/api/2014/features/cutting-words',
  },
  'bard-expertise-1': {
    index: 'bard-expertise-1',
    class: {
      index: 'bard',
      name: 'Bard',
      url: '/api/2014/classes/bard',
    },
    name: 'Expertise',
    level: 3,
    prerequisites: [],
    desc: [
      'At 3rd level, choose two of your skill proficiencies. Your proficiency bonus is doubled for any ability check you make that uses either of the chosen proficiencies. At 10th level, you can choose another two skill proficiencies to gain this benefit.',
    ],
    feature_specific: {
      expertise_options: {
        choose: 2,
        type: 'proficiency',
        from: {
          option_set_type: 'options_array',
          options: [
            {
              option_type: 'reference',
              item: {
                index: 'skill-acrobatics',
                name: 'Skill: Acrobatics',
                url: '/api/2014/proficiencies/skill-acrobatics',
              },
            },
            {
              option_type: 'reference',
              item: {
                index: 'skill-animal-handling',
                name: 'Skill: Animal Handling',
                url: '/api/2014/proficiencies/skill-animal-handling',
              },
            },
            {
              option_type: 'reference',
              item: {
                index: 'skill-arcana',
                name: 'Skill: Arcana',
                url: '/api/2014/proficiencies/skill-arcana',
              },
            },
            {
              option_type: 'reference',
              item: {
                index: 'skill-athletics',
                name: 'Skill: Athletics',
                url: '/api/2014/proficiencies/skill-athletics',
              },
            },
            {
              option_type: 'reference',
              item: {
                index: 'skill-deception',
                name: 'Skill: Deception',
                url: '/api/2014/proficiencies/skill-deception',
              },
            },
            {
              option_type: 'reference',
              item: {
                index: 'skill-history',
                name: 'Skill: History',
                url: '/api/2014/proficiencies/skill-history',
              },
            },
            {
              option_type: 'reference',
              item: {
                index: 'skill-insight',
                name: 'Skill: Insight',
                url: '/api/2014/proficiencies/skill-insight',
              },
            },
            {
              option_type: 'reference',
              item: {
                index: 'skill-intimidation',
                name: 'Skill: Intimidation',
                url: '/api/2014/proficiencies/skill-intimidation',
              },
            },
            {
              option_type: 'reference',
              item: {
                index: 'skill-investigation',
                name: 'Skill: Investigation',
                url: '/api/2014/proficiencies/skill-investigation',
              },
            },
            {
              option_type: 'reference',
              item: {
                index: 'skill-medicine',
                name: 'Skill: Medicine',
                url: '/api/2014/proficiencies/skill-medicine',
              },
            },
            {
              option_type: 'reference',
              item: {
                index: 'skill-nature',
                name: 'Skill: Nature',
                url: '/api/2014/proficiencies/skill-nature',
              },
            },
            {
              option_type: 'reference',
              item: {
                index: 'skill-perception',
                name: 'Skill: Perception',
                url: '/api/2014/proficiencies/skill-perception',
              },
            },
            {
              option_type: 'reference',
              item: {
                index: 'skill-performance',
                name: 'Skill: Performance',
                url: '/api/2014/proficiencies/skill-performance',
              },
            },
            {
              option_type: 'reference',
              item: {
                index: 'skill-persuasion',
                name: 'Skill: Persuasion',
                url: '/api/2014/proficiencies/skill-persuasion',
              },
            },
            {
              option_type: 'reference',
              item: {
                index: 'skill-religion',
                name: 'Skill: Religion',
                url: '/api/2014/proficiencies/skill-religion',
              },
            },
            {
              option_type: 'reference',
              item: {
                index: 'skill-sleight-of-hand',
                name: 'Skill: Sleight of Hand',
                url: '/api/2014/proficiencies/skill-sleight-of-hand',
              },
            },
            {
              option_type: 'reference',
              item: {
                index: 'skill-stealth',
                name: 'Skill: Stealth',
                url: '/api/2014/proficiencies/skill-stealth',
              },
            },
            {
              option_type: 'reference',
              item: {
                index: 'skill-survival',
                name: 'Skill: Survival',
                url: '/api/2014/proficiencies/skill-survival',
              },
            },
          ],
        },
      },
    },
    url: '/api/2014/features/bard-expertise-1',
  },
  'bard-ability-score-improvement-1': {
    index: 'bard-ability-score-improvement-1',
    class: {
      index: 'bard',
      name: 'Bard',
      url: '/api/2014/classes/bard',
    },
    name: 'Ability Score Improvement',
    level: 4,
    prerequisites: [],
    desc: [
      "When you reach 4th level, and again at 8th, 12th, 16th, and 19th level, you can increase one ability score of your choice by 2, or you can increase two ability scores of your choice by 1. As normal, you can't increase an ability score above 20 using this feature.",
    ],
    url: '/api/2014/features/bard-ability-score-improvement-1',
  },
  'bardic-inspiration-d8': {
    index: 'bardic-inspiration-d8',
    class: {
      index: 'bard',
      name: 'Bard',
      url: '/api/2014/classes/bard',
    },
    name: 'Bardic Inspiration (d8)',
    level: 5,
    prerequisites: [],
    desc: [
      'You can inspire others through stirring words or music. To do so, you use a bonus action on your turn to choose one creature other than yourself within 60 feet of you who can hear you. That creature gains one Bardic Inspiration die, a d6. Once within the next 10 minutes, the creature can roll the die and add the number rolled to one ability check, attack roll, or saving throw it makes. The creature can wait until after it rolls the d20 before deciding to use the Bardic Inspiration die, but must decide before the GM says whether the roll succeeds or fails. Once the Bardic Inspiration die is rolled, it is lost. A creature can have only one Bardic Inspiration die at a time.',
      'You can use this feature a number of times equal to your Charisma modifier (a minimum of once). You regain any expended uses when you finish a long rest. ',
      'Your Bardic Inspiration die changes when you reach certain levels in this class. The die becomes a d8 at 5th level, a d10 at 10th level, and a d12 at 15th level.',
    ],
    url: '/api/2014/features/bardic-inspiration-d8',
  },
  'font-of-inspiration': {
    index: 'font-of-inspiration',
    class: {
      index: 'bard',
      name: 'Bard',
      url: '/api/2014/classes/bard',
    },
    name: 'Font of Inspiration',
    level: 5,
    prerequisites: [],
    desc: [
      'Beginning when you reach 5th level, you regain all of your expended uses of Bardic Inspiration when you finish a short or long rest.',
    ],
    url: '/api/2014/features/font-of-inspiration',
  },
  countercharm: {
    index: 'countercharm',
    class: {
      index: 'bard',
      name: 'Bard',
      url: '/api/2014/classes/bard',
    },
    name: 'Countercharm',
    level: 6,
    prerequisites: [],
    desc: [
      'At 6th level, you gain the ability to use musical notes or words of power to disrupt mind-influencing effects. As an action, you can start a performance that lasts until the end of your next turn. During that time, you and any friendly creatures within 30 feet of you have advantage on saving throws against being frightened or charmed. A creature must be able to hear you to gain this benefit. The performance ends early if you are incapacitated or silenced or if you voluntarily end it (no action required).',
    ],
    url: '/api/2014/features/countercharm',
  },
  'bard-college-improvement-1': {
    index: 'bard-college-improvement-1',
    class: {
      index: 'bard',
      name: 'Bard',
      url: '/api/2014/classes/bard',
    },
    name: 'Bard College feature',
    level: 6,
    prerequisites: [],
    desc: [
      'At 3rd level, you delve into the advanced techniques of a bard college of your choice, such as the College of Lore. Your choice grants you features at 3rd level and again at 6th and 14th level.',
    ],
    url: '/api/2014/features/bard-college-improvement-1',
  },
  'additional-magical-secrets': {
    index: 'additional-magical-secrets',
    class: {
      index: 'bard',
      name: 'Bard',
      url: '/api/2014/classes/bard',
    },
    subclass: {
      index: 'lore',
      name: 'Lore',
      url: '/api/2014/subclasses/lore',
    },
    name: 'Additional Magical Secrets',
    level: 6,
    prerequisites: [],
    desc: [
      "At 6th level, you learn two spells of your choice from any class. A spell you choose must be of a level you can cast, as shown on the Bard table, or a cantrip. The chosen spells count as bard spells for you but don't count against the number of bard spells you know.",
    ],
    url: '/api/2014/features/additional-magical-secrets',
  },
  'bard-ability-score-improvement-2': {
    index: 'bard-ability-score-improvement-2',
    class: {
      index: 'bard',
      name: 'Bard',
      url: '/api/2014/classes/bard',
    },
    name: 'Ability Score Improvement',
    level: 8,
    prerequisites: [],
    desc: [
      "When you reach 4th level, and again at 8th, 12th, 16th, and 19th level, you can increase one ability score of your choice by 2, or you can increase two ability scores of your choice by 1. As normal, you can't increase an ability score above 20 using this feature.",
    ],
    url: '/api/2014/features/bard-ability-score-improvement-2',
  },
  'song-of-rest-d8': {
    index: 'song-of-rest-d8',
    class: {
      index: 'bard',
      name: 'Bard',
      url: '/api/2014/classes/bard',
    },
    name: 'Song of Rest (d8)',
    level: 9,
    prerequisites: [],
    desc: [
      'Beginning at 2nd level, you can use soothing music or oration to help revitalize your wounded allies during a short rest. If you or any friendly creatures who can hear your performance regain hit points at the end of the short rest by spending one or more Hit Dice, each of those creatures regains an extra 1d6 hit points. ',
      'The extra hit points increase when you reach certain levels in this class: to 1d8 at 9th level, to 1d10 at 13th level, and to 1d12 at 17th level.',
    ],
    url: '/api/2014/features/song-of-rest-d8',
  },
  'bardic-inspiration-d10': {
    index: 'bardic-inspiration-d10',
    class: {
      index: 'bard',
      name: 'Bard',
      url: '/api/2014/classes/bard',
    },
    name: 'Bardic Inspiration (d10)',
    level: 10,
    prerequisites: [],
    desc: [
      'You can inspire others through stirring words or music. To do so, you use a bonus action on your turn to choose one creature other than yourself within 60 feet of you who can hear you. That creature gains one Bardic Inspiration die, a d6. Once within the next 10 minutes, the creature can roll the die and add the number rolled to one ability check, attack roll, or saving throw it makes. The creature can wait until after it rolls the d20 before deciding to use the Bardic Inspiration die, but must decide before the GM says whether the roll succeeds or fails. Once the Bardic Inspiration die is rolled, it is lost. A creature can have only one Bardic Inspiration die at a time.',
      'You can use this feature a number of times equal to your Charisma modifier (a minimum of once). You regain any expended uses when you finish a long rest. ',
      'Your Bardic Inspiration die changes when you reach certain levels in this class. The die becomes a d8 at 5th level, a d10 at 10th level, and a d12 at 15th level.',
    ],
    url: '/api/2014/features/bardic-inspiration-d10',
  },
  'bard-expertise-2': {
    index: 'bard-expertise-2',
    class: {
      index: 'bard',
      name: 'Bard',
      url: '/api/2014/classes/bard',
    },
    name: 'Expertise',
    level: 10,
    prerequisites: [],
    desc: [
      'At 3rd level, choose two of your skill proficiencies. Your proficiency bonus is doubled for any ability check you make that uses either of the chosen proficiencies. At 10th level, you can choose another two skill proficiencies to gain this benefit.',
    ],
    feature_specific: {
      expertise_options: {
        choose: 2,
        type: 'proficiency',
        from: {
          option_set_type: 'options_array',
          options: [
            {
              option_type: 'reference',
              item: {
                index: 'skill-acrobatics',
                name: 'Skill: Acrobatics',
                url: '/api/2014/proficiencies/skill-acrobatics',
              },
            },
            {
              option_type: 'reference',
              item: {
                index: 'skill-animal-handling',
                name: 'Skill: Animal Handling',
                url: '/api/2014/proficiencies/skill-animal-handling',
              },
            },
            {
              option_type: 'reference',
              item: {
                index: 'skill-arcana',
                name: 'Skill: Arcana',
                url: '/api/2014/proficiencies/skill-arcana',
              },
            },
            {
              option_type: 'reference',
              item: {
                index: 'skill-athletics',
                name: 'Skill: Athletics',
                url: '/api/2014/proficiencies/skill-athletics',
              },
            },
            {
              option_type: 'reference',
              item: {
                index: 'skill-deception',
                name: 'Skill: Deception',
                url: '/api/2014/proficiencies/skill-deception',
              },
            },
            {
              option_type: 'reference',
              item: {
                index: 'skill-history',
                name: 'Skill: History',
                url: '/api/2014/proficiencies/skill-history',
              },
            },
            {
              option_type: 'reference',
              item: {
                index: 'skill-insight',
                name: 'Skill: Insight',
                url: '/api/2014/proficiencies/skill-insight',
              },
            },
            {
              option_type: 'reference',
              item: {
                index: 'skill-intimidation',
                name: 'Skill: Intimidation',
                url: '/api/2014/proficiencies/skill-intimidation',
              },
            },
            {
              option_type: 'reference',
              item: {
                index: 'skill-investigation',
                name: 'Skill: Investigation',
                url: '/api/2014/proficiencies/skill-investigation',
              },
            },
            {
              option_type: 'reference',
              item: {
                index: 'skill-medicine',
                name: 'Skill: Medicine',
                url: '/api/2014/proficiencies/skill-medicine',
              },
            },
            {
              option_type: 'reference',
              item: {
                index: 'skill-nature',
                name: 'Skill: Nature',
                url: '/api/2014/proficiencies/skill-nature',
              },
            },
            {
              option_type: 'reference',
              item: {
                index: 'skill-perception',
                name: 'Skill: Perception',
                url: '/api/2014/proficiencies/skill-perception',
              },
            },
            {
              option_type: 'reference',
              item: {
                index: 'skill-performance',
                name: 'Skill: Performance',
                url: '/api/2014/proficiencies/skill-performance',
              },
            },
            {
              option_type: 'reference',
              item: {
                index: 'skill-persuasion',
                name: 'Skill: Persuasion',
                url: '/api/2014/proficiencies/skill-persuasion',
              },
            },
            {
              option_type: 'reference',
              item: {
                index: 'skill-religion',
                name: 'Skill: Religion',
                url: '/api/2014/proficiencies/skill-religion',
              },
            },
            {
              option_type: 'reference',
              item: {
                index: 'skill-sleight-of-hand',
                name: 'Skill: Sleight of Hand',
                url: '/api/2014/proficiencies/skill-sleight-of-hand',
              },
            },
            {
              option_type: 'reference',
              item: {
                index: 'skill-stealth',
                name: 'Skill: Stealth',
                url: '/api/2014/proficiencies/skill-stealth',
              },
            },
            {
              option_type: 'reference',
              item: {
                index: 'skill-survival',
                name: 'Skill: Survival',
                url: '/api/2014/proficiencies/skill-survival',
              },
            },
          ],
        },
      },
    },
    url: '/api/2014/features/bard-expertise-2',
  },
  'magical-secrets-1': {
    index: 'magical-secrets-1',
    class: {
      index: 'bard',
      name: 'Bard',
      url: '/api/2014/classes/bard',
    },
    name: 'Magical Secrets',
    level: 10,
    prerequisites: [],
    desc: [
      'By 10th level, you have plundered magical knowledge from a wide spectrum of disciplines. Choose two spells from any class, including this one. A spell you choose must be of a level you can cast, as shown on the Bard table, or a cantrip. ',
      'The chosen spells count as bard spells for you and are included in the number in the Spells Known column of the Bard table. ',
      'You learn two additional spells from any class at 14th level and again at 18th level.',
    ],
    url: '/api/2014/features/magical-secrets-1',
  },
  'bard-ability-score-improvement-3': {
    index: 'bard-ability-score-improvement-3',
    class: {
      index: 'bard',
      name: 'Bard',
      url: '/api/2014/classes/bard',
    },
    name: 'Ability Score Improvement',
    level: 12,
    prerequisites: [],
    desc: [
      "When you reach 4th level, and again at 8th, 12th, 16th, and 19th level, you can increase one ability score of your choice by 2, or you can increase two ability scores of your choice by 1. As normal, you can't increase an ability score above 20 using this feature.",
    ],
    url: '/api/2014/features/bard-ability-score-improvement-3',
  },
  'song-of-rest-d10': {
    index: 'song-of-rest-d10',
    class: {
      index: 'bard',
      name: 'Bard',
      url: '/api/2014/classes/bard',
    },
    name: 'Song of Rest (d10)',
    level: 13,
    prerequisites: [],
    desc: [
      'Beginning at 2nd level, you can use soothing music or oration to help revitalize your wounded allies during a short rest. If you or any friendly creatures who can hear your performance regain hit points at the end of the short rest by spending one or more Hit Dice, each of those creatures regains an extra 1d6 hit points. ',
      'The extra hit points increase when you reach certain levels in this class: to 1d8 at 9th level, to 1d10 at 13th level, and to 1d12 at 17th level.',
    ],
    url: '/api/2014/features/song-of-rest-d10',
  },
  'magical-secrets-2': {
    index: 'magical-secrets-2',
    class: {
      index: 'bard',
      name: 'Bard',
      url: '/api/2014/classes/bard',
    },
    name: 'Magical Secrets',
    level: 14,
    prerequisites: [],
    desc: [
      'By 10th level, you have plundered magical knowledge from a wide spectrum of disciplines. Choose two spells from any class, including this one. A spell you choose must be of a level you can cast, as shown on the Bard table, or a cantrip. ',
      'The chosen spells count as bard spells for you and are included in the number in the Spells Known column of the Bard table. ',
      'You learn two additional spells from any class at 14th level and again at 18th level.',
    ],
    url: '/api/2014/features/magical-secrets-2',
  },
  'bard-college-improvement-2': {
    index: 'bard-college-improvement-2',
    class: {
      index: 'bard',
      name: 'Bard',
      url: '/api/2014/classes/bard',
    },
    name: 'Bard College feature',
    level: 14,
    prerequisites: [],
    desc: [
      'At 3rd level, you delve into the advanced techniques of a bard college of your choice, such as the College of Lore. Your choice grants you features at 3rd level and again at 6th and 14th level.',
    ],
    url: '/api/2014/features/bard-college-improvement-2',
  },
  'peerless-skill': {
    index: 'peerless-skill',
    class: {
      index: 'bard',
      name: 'Bard',
      url: '/api/2014/classes/bard',
    },
    subclass: {
      index: 'lore',
      name: 'Lore',
      url: '/api/2014/subclasses/lore',
    },
    name: 'Peerless Skill',
    level: 14,
    prerequisites: [],
    desc: [
      'Starting at 14th level, when you make an ability check, you can expend one use of Bardic Inspiration. Roll a Bardic Inspiration die and add the number rolled to your ability check. You can choose to do so after you roll the die for the ability check, but before the GM tells you whether you succeed or fail.',
    ],
    url: '/api/2014/features/peerless-skill',
  },
  'bardic-inspiration-d12': {
    index: 'bardic-inspiration-d12',
    class: {
      index: 'bard',
      name: 'Bard',
      url: '/api/2014/classes/bard',
    },
    name: 'Bardic Inspiration (d12)',
    level: 15,
    prerequisites: [],
    desc: [
      'You can inspire others through stirring words or music. To do so, you use a bonus action on your turn to choose one creature other than yourself within 60 feet of you who can hear you. That creature gains one Bardic Inspiration die, a d6. Once within the next 10 minutes, the creature can roll the die and add the number rolled to one ability check, attack roll, or saving throw it makes. The creature can wait until after it rolls the d20 before deciding to use the Bardic Inspiration die, but must decide before the GM says whether the roll succeeds or fails. Once the Bardic Inspiration die is rolled, it is lost. A creature can have only one Bardic Inspiration die at a time.',
      'You can use this feature a number of times equal to your Charisma modifier (a minimum of once). You regain any expended uses when you finish a long rest. ',
      'Your Bardic Inspiration die changes when you reach certain levels in this class. The die becomes a d8 at 5th level, a d10 at 10th level, and a d12 at 15th level.',
    ],
    url: '/api/2014/features/bardic-inspiration-d12',
  },
  'bard-ability-score-improvement-4': {
    index: 'bard-ability-score-improvement-4',
    class: {
      index: 'bard',
      name: 'Bard',
      url: '/api/2014/classes/bard',
    },
    name: 'Ability Score Improvement',
    level: 16,
    prerequisites: [],
    desc: [
      "When you reach 4th level, and again at 8th, 12th, 16th, and 19th level, you can increase one ability score of your choice by 2, or you can increase two ability scores of your choice by 1. As normal, you can't increase an ability score above 20 using this feature.",
    ],
    url: '/api/2014/features/bard-ability-score-improvement-4',
  },
  'song-of-rest-d12': {
    index: 'song-of-rest-d12',
    class: {
      index: 'bard',
      name: 'Bard',
      url: '/api/2014/classes/bard',
    },
    name: 'Song of Rest (d12)',
    level: 17,
    prerequisites: [],
    desc: [
      'Beginning at 2nd level, you can use soothing music or oration to help revitalize your wounded allies during a short rest. If you or any friendly creatures who can hear your performance regain hit points at the end of the short rest by spending one or more Hit Dice, each of those creatures regains an extra 1d6 hit points. ',
      'The extra hit points increase when you reach certain levels in this class: to 1d8 at 9th level, to 1d10 at 13th level, and to 1d12 at 17th level.',
    ],
    url: '/api/2014/features/song-of-rest-d12',
  },
  'magical-secrets-3': {
    index: 'magical-secrets-3',
    class: {
      index: 'bard',
      name: 'Bard',
      url: '/api/2014/classes/bard',
    },
    name: 'Magical Secrets',
    level: 18,
    prerequisites: [],
    desc: [
      'By 10th level, you have plundered magical knowledge from a wide spectrum of disciplines. Choose two spells from any class, including this one. A spell you choose must be of a level you can cast, as shown on the Bard table, or a cantrip. ',
      'The chosen spells count as bard spells for you and are included in the number in the Spells Known column of the Bard table. ',
      'You learn two additional spells from any class at 14th level and again at 18th level.',
    ],
    url: '/api/2014/features/magical-secrets-3',
  },
  'bard-ability-score-improvement-5': {
    index: 'bard-ability-score-improvement-5',
    class: {
      index: 'bard',
      name: 'Bard',
      url: '/api/2014/classes/bard',
    },
    name: 'Ability Score Improvement',
    level: 19,
    prerequisites: [],
    desc: [
      "When you reach 4th level, and again at 8th, 12th, 16th, and 19th level, you can increase one ability score of your choice by 2, or you can increase two ability scores of your choice by 1. As normal, you can't increase an ability score above 20 using this feature.",
    ],
    url: '/api/2014/features/bard-ability-score-improvement-5',
  },
  'superior-inspiration': {
    index: 'superior-inspiration',
    class: {
      index: 'bard',
      name: 'Bard',
      url: '/api/2014/classes/bard',
    },
    name: 'Superior Inspiration',
    level: 20,
    prerequisites: [],
    desc: [
      'At 20th level, when you roll initiative and have no uses of Bardic Inspiration left, you regain one use.',
    ],
    url: '/api/2014/features/superior-inspiration',
  },
  'spellcasting-cleric': {
    index: 'spellcasting-cleric',
    class: {
      index: 'cleric',
      name: 'Cleric',
      url: '/api/2014/classes/cleric',
    },
    name: 'Spellcasting: Cleric',
    level: 1,
    prerequisites: [],
    desc: ['As a conduit for divine power, you can cast cleric spells.'],
    reference: '/api/2014/classes/cleric/spellcasting',
    url: '/api/2014/features/spellcasting-cleric',
  },
  'divine-domain': {
    index: 'divine-domain',
    class: {
      index: 'cleric',
      name: 'Cleric',
      url: '/api/2014/classes/cleric',
    },
    name: 'Divine Domain',
    level: 1,
    prerequisites: [],
    desc: [
      'Choose one domain related to your deity, such as Knowledge, Life, Light, Nature, Tempest, Trickery, or War. Only the Life domain is detailed in the Open Game Licensed SRD. Additional Domains are described in the official rulebooks or products from other publishers.',
      'Your domain grants you domain spells and other features when you choose it at 1st level. It also grants you additional ways to use Channel Divinity when you gain that feature at 2nd level, and additional benefits at 6th, 8th, and 17th levels.',
    ],
    url: '/api/2014/features/divine-domain',
  },
  'domain-spells-1': {
    index: 'domain-spells-1',
    class: {
      index: 'cleric',
      name: 'Cleric',
      url: '/api/2014/classes/cleric',
    },
    name: 'Domain Spells',
    level: 1,
    prerequisites: [],
    desc: [
      "Each domain has a list of spells--its domain spells--that you gain at the cleric levels noted in the domain description. Once you gain a domain spell, you always have it prepared, and it doesn't count against the number of spells you can prepare each day.",
      "If you have a domain spell that doesn't appear on the cleric spell list, the spell is nonetheless a cleric spell for you.",
    ],
    url: '/api/2014/features/domain-spells-1',
  },
  'bonus-proficiency': {
    index: 'bonus-proficiency',
    class: {
      index: 'cleric',
      name: 'Cleric',
      url: '/api/2014/classes/cleric',
    },
    subclass: {
      index: 'life',
      name: 'Life',
      url: '/api/2014/subclasses/life',
    },
    name: 'Bonus Proficiency',
    level: 1,
    prerequisites: [],
    desc: [
      'When you choose this domain at 1st level, you gain proficiency with heavy armor.',
    ],
    url: '/api/2014/features/bonus-proficiency',
  },
  'disciple-of-life': {
    index: 'disciple-of-life',
    class: {
      index: 'cleric',
      name: 'Cleric',
      url: '/api/2014/classes/cleric',
    },
    subclass: {
      index: 'life',
      name: 'Life',
      url: '/api/2014/subclasses/life',
    },
    name: 'Disciple of Life',
    level: 1,
    prerequisites: [],
    desc: [
      "Also starting at 1st level, your healing spells are more effective. Whenever you use a spell of 1st level or higher to restore hit points to a creature, the creature regains additional hit points equal to 2 + the spell's level.",
    ],
    url: '/api/2014/features/disciple-of-life',
  },
  'channel-divinity-1-rest': {
    index: 'channel-divinity-1-rest',
    class: {
      index: 'cleric',
      name: 'Cleric',
      url: '/api/2014/classes/cleric',
    },
    name: 'Channel Divinity (1/rest)',
    level: 2,
    prerequisites: [],
    desc: [
      'At 2nd level, you gain the ability to channel divine energy directly from your deity, using that energy to fuel magical effects. You start with two such effects: Turn Undead and an effect determined by your domain. Some domains grant you additional effects as you advance in levels, as noted in the domain description.',
      'When you use your Channel Divinity, you choose which effect to create. You must then finish a short or long rest to use your Channel Divinity again.',
      'Some Channel Divinity effects require saving throws. When you use such an effect from this class, the DC equals your cleric spell save DC.',
      'Beginning at 6th level, you can use your Channel Divinity twice between rests, and beginning at 18th level, you can use it three times between rests. When you finish a short or long rest, you regain your expended uses.',
    ],
    url: '/api/2014/features/channel-divinity-1-rest',
  },
  'channel-divinity-turn-undead': {
    index: 'channel-divinity-turn-undead',
    class: {
      index: 'cleric',
      name: 'Cleric',
      url: '/api/2014/classes/cleric',
    },
    name: 'Channel Divinity: Turn Undead',
    level: 2,
    prerequisites: [],
    desc: [
      'As an action, you present your holy symbol and speak a prayer censuring the undead. Each undead that can see or hear you within 30 feet of you must make a Wisdom saving throw. If the creature fails its saving throw, it is turned for 1 minute or until it takes any damage.',
      "A turned creature must spend its turns trying to move as far away from you as it can, and it can't willingly move to a space within 30 feet of you. It also can't take reactions. For its action, it can use only the Dash action or try to escape from an effect that prevents it from moving. If there's nowhere to move, the creature can use the Dodge action.",
    ],
    url: '/api/2014/features/channel-divinity-turn-undead',
  },
  'divine-domain-improvement-1': {
    index: 'divine-domain-improvement-1',
    class: {
      index: 'cleric',
      name: 'Cleric',
      url: '/api/2014/classes/cleric',
    },
    name: 'Divine Domain feature',
    level: 2,
    prerequisites: [],
    desc: [
      'Choose one domain related to your deity, such as Knowledge, Life, Light, Nature, Tempest, Trickery, or War. Only the Life domain is detailed in the Open Game Licensed SRD. Additional Domains are described in the official rulebooks or products from other publishers.',
      'Your domain grants you domain spells and other features when you choose it at 1st level. It also grants you additional ways to use Channel Divinity when you gain that feature at 2nd level, and additional benefits at 6th, 8th, and 17th levels.',
    ],
    url: '/api/2014/features/divine-domain-improvement-1',
  },
  'channel-divinity-preserve-life': {
    index: 'channel-divinity-preserve-life',
    class: {
      index: 'cleric',
      name: 'Cleric',
      url: '/api/2014/classes/cleric',
    },
    subclass: {
      index: 'life',
      name: 'Life',
      url: '/api/2014/subclasses/life',
    },
    name: 'Channel Divinity: Preserve Life',
    level: 2,
    prerequisites: [],
    desc: [
      'Starting at 2nd level, you can use your Channel Divinity to heal the badly injured.',
      'As an action, you present your holy symbol and evoke healing energy that can restore a number of hit points equal to five times your cleric level.',
      "Choose any creatures within 30 feet of you, and divide those hit points among them. This feature can restore a creature to no more than half of its hit point maximum. You can't use this feature on an undead or a construct.",
    ],
    url: '/api/2014/features/channel-divinity-preserve-life',
  },
  'domain-spells-2': {
    index: 'domain-spells-2',
    class: {
      index: 'cleric',
      name: 'Cleric',
      url: '/api/2014/classes/cleric',
    },
    name: 'Domain Spells',
    level: 3,
    prerequisites: [],
    desc: [
      "Each domain has a list of spells--its domain spells--that you gain at the cleric levels noted in the domain description. Once you gain a domain spell, you always have it prepared, and it doesn't count against the number of spells you can prepare each day.",
      "If you have a domain spell that doesn't appear on the cleric spell list, the spell is nonetheless a cleric spell for you.",
    ],
    url: '/api/2014/features/domain-spells-2',
  },
  'cleric-ability-score-improvement-1': {
    index: 'cleric-ability-score-improvement-1',
    class: {
      index: 'cleric',
      name: 'Cleric',
      url: '/api/2014/classes/cleric',
    },
    name: 'Ability Score Improvement',
    level: 4,
    prerequisites: [],
    desc: [
      "When you reach 4th level, and again at 8th, 12th, 16th, and 19th level, you can increase one ability score of your choice by 2, or you can increase two ability scores of your choice by 1. As normal, you can't increase an ability score above 20 using this feature.",
    ],
    url: '/api/2014/features/cleric-ability-score-improvement-1',
  },
  'domain-spells-3': {
    index: 'domain-spells-3',
    class: {
      index: 'cleric',
      name: 'Cleric',
      url: '/api/2014/classes/cleric',
    },
    name: 'Domain Spells',
    level: 5,
    prerequisites: [],
    desc: [
      "Each domain has a list of spells--its domain spells--that you gain at the cleric levels noted in the domain description. Once you gain a domain spell, you always have it prepared, and it doesn't count against the number of spells you can prepare each day.",
      "If you have a domain spell that doesn't appear on the cleric spell list, the spell is nonetheless a cleric spell for you.",
    ],
    url: '/api/2014/features/domain-spells-3',
  },
  'destroy-undead-cr-1-2-or-below': {
    index: 'destroy-undead-cr-1-2-or-below',
    class: {
      index: 'cleric',
      name: 'Cleric',
      url: '/api/2014/classes/cleric',
    },
    name: 'Destroy Undead (CR 1/2 or below)',
    level: 5,
    prerequisites: [],
    desc: [
      'Starting at 5th level, when an undead fails its saving throw against your Turn Undead feature, the creature is instantly destroyed if its challenge rating is at or below a certain threshold.',
    ],
    url: '/api/2014/features/destroy-undead-cr-1-2-or-below',
  },
  'channel-divinity-2-rest': {
    index: 'channel-divinity-2-rest',
    class: {
      index: 'cleric',
      name: 'Cleric',
      url: '/api/2014/classes/cleric',
    },
    name: 'Channel Divinity (2/rest)',
    level: 6,
    prerequisites: [],
    desc: [
      'Beginning at 6th level, you can use your Channel Divinity twice between rests, and beginning at 18th level, you can use it three times between rests. When you finish a short or long rest, you regain your expended uses.',
    ],
    url: '/api/2014/features/channel-divinity-2-rest',
  },
  'divine-domain-improvement-2': {
    index: 'divine-domain-improvement-2',
    class: {
      index: 'cleric',
      name: 'Cleric',
      url: '/api/2014/classes/cleric',
    },
    name: 'Divine Domain feature',
    level: 6,
    prerequisites: [],
    desc: [
      'Choose one domain related to your deity, such as Knowledge, Life, Light, Nature, Tempest, Trickery, or War. Only the Life domain is detailed in the Open Game Licensed SRD. Additional Domains are described in the official rulebooks or products from other publishers.',
      'Your domain grants you domain spells and other features when you choose it at 1st level. It also grants you additional ways to use Channel Divinity when you gain that feature at 2nd level, and additional benefits at 6th, 8th, and 17th levels.',
    ],
    url: '/api/2014/features/divine-domain-improvement-2',
  },
  'blessed-healer': {
    index: 'blessed-healer',
    class: {
      index: 'cleric',
      name: 'Cleric',
      url: '/api/2014/classes/cleric',
    },
    subclass: {
      index: 'life',
      name: 'Life',
      url: '/api/2014/subclasses/life',
    },
    name: 'Blessed Healer',
    level: 6,
    prerequisites: [],
    desc: [
      "Beginning at 6th level, the healing spells you cast on others heal you as well. When you cast a spell of 1st level or higher that restores hit points to a creature other than you, you regain hit points equal to 2 + the spell's level.",
    ],
    url: '/api/2014/features/blessed-healer',
  },
  'domain-spells-4': {
    index: 'domain-spells-4',
    class: {
      index: 'cleric',
      name: 'Cleric',
      url: '/api/2014/classes/cleric',
    },
    name: 'Domain Spells',
    level: 7,
    prerequisites: [],
    desc: [
      "Each domain has a list of spells--its domain spells--that you gain at the cleric levels noted in the domain description. Once you gain a domain spell, you always have it prepared, and it doesn't count against the number of spells you can prepare each day.",
      "If you have a domain spell that doesn't appear on the cleric spell list, the spell is nonetheless a cleric spell for you.",
    ],
    url: '/api/2014/features/domain-spells-4',
  },
  'cleric-ability-score-improvement-2': {
    index: 'cleric-ability-score-improvement-2',
    class: {
      index: 'cleric',
      name: 'Cleric',
      url: '/api/2014/classes/cleric',
    },
    name: 'Ability Score Improvement',
    level: 8,
    prerequisites: [],
    desc: [
      "When you reach 4th level, and again at 8th, 12th, 16th, and 19th level, you can increase one ability score of your choice by 2, or you can increase two ability scores of your choice by 1. As normal, you can't increase an ability score above 20 using this feature.",
    ],
    url: '/api/2014/features/cleric-ability-score-improvement-2',
  },
  'destroy-undead-cr-1-or-below': {
    index: 'destroy-undead-cr-1-or-below',
    class: {
      index: 'cleric',
      name: 'Cleric',
      url: '/api/2014/classes/cleric',
    },
    name: 'Destroy Undead (CR 1 or below)',
    level: 8,
    prerequisites: [],
    desc: [
      'Starting at 5th level, when an undead fails its saving throw against your Turn Undead feature, the creature is instantly destroyed if its challenge rating is at or below a certain threshold.',
    ],
    url: '/api/2014/features/destroy-undead-cr-1-or-below',
  },
  'divine-domain-improvement-3': {
    index: 'divine-domain-improvement-3',
    class: {
      index: 'cleric',
      name: 'Cleric',
      url: '/api/2014/classes/cleric',
    },
    name: 'Divine Domain feature',
    level: 8,
    prerequisites: [],
    desc: [
      'Choose one domain related to your deity, such as Knowledge, Life, Light, Nature, Tempest, Trickery, or War. Only the Life domain is detailed in the Open Game Licensed SRD. Additional Domains are described in the official rulebooks or products from other publishers.',
      'Your domain grants you domain spells and other features when you choose it at 1st level. It also grants you additional ways to use Channel Divinity when you gain that feature at 2nd level, and additional benefits at 6th, 8th, and 17th levels.',
    ],
    url: '/api/2014/features/divine-domain-improvement-3',
  },
  'divine-strike': {
    index: 'divine-strike',
    class: {
      index: 'cleric',
      name: 'Cleric',
      url: '/api/2014/classes/cleric',
    },
    subclass: {
      index: 'life',
      name: 'Life',
      url: '/api/2014/subclasses/life',
    },
    name: 'Divine Strike',
    level: 8,
    prerequisites: [],
    desc: [
      'At 8th level, you gain the ability to infuse your weapon strikes with divine energy. Once on each of your turns when you hit a creature with a weapon attack, you can cause the attack to deal an extra 1d8 radiant damage to the target. When you reach 14th level, the extra damage increases to 2d8.',
    ],
    url: '/api/2014/features/divine-strike',
  },
  'domain-spells-5': {
    index: 'domain-spells-5',
    class: {
      index: 'cleric',
      name: 'Cleric',
      url: '/api/2014/classes/cleric',
    },
    name: 'Domain Spells',
    level: 9,
    prerequisites: [],
    desc: [
      "Each domain has a list of spells--its domain spells--that you gain at the cleric levels noted in the domain description. Once you gain a domain spell, you always have it prepared, and it doesn't count against the number of spells you can prepare each day.",
      "If you have a domain spell that doesn't appear on the cleric spell list, the spell is nonetheless a cleric spell for you.",
    ],
    url: '/api/2014/features/domain-spells-5',
  },
  'divine-intervention': {
    index: 'divine-intervention',
    class: {
      index: 'cleric',
      name: 'Cleric',
      url: '/api/2014/classes/cleric',
    },
    name: 'Divine Intervention',
    level: 10,
    prerequisites: [],
    desc: [
      'Beginning at 10th level, you can call on your deity to intervene on your behalf when your need is great.',
      "Imploring your deity's aid requires you to use your action. Describe the assistance you seek, and roll percentile dice. If you roll a number equal to or lower than your cleric level, your deity intervenes. The GM chooses the nature of the intervention; the effect of any cleric spell or cleric domain spell would be appropriate.",
      "If your deity intervenes, you can't use this feature again for 7 days. Otherwise, you can use it again after you finish a long rest.",
      'At 20th level, your call for intervention succeeds automatically, no roll required.',
    ],
    url: '/api/2014/features/divine-intervention',
  },
  'destroy-undead-cr-2-or-below': {
    index: 'destroy-undead-cr-2-or-below',
    class: {
      index: 'cleric',
      name: 'Cleric',
      url: '/api/2014/classes/cleric',
    },
    name: 'Destroy Undead (CR 2 or below)',
    level: 11,
    prerequisites: [],
    desc: [
      'Starting at 5th level, when an undead fails its saving throw against your Turn Undead feature, the creature is instantly destroyed if its challenge rating is at or below a certain threshold.',
    ],
    url: '/api/2014/features/destroy-undead-cr-2-or-below',
  },
  'cleric-ability-score-improvement-3': {
    index: 'cleric-ability-score-improvement-3',
    class: {
      index: 'cleric',
      name: 'Cleric',
      url: '/api/2014/classes/cleric',
    },
    name: 'Ability Score Improvement',
    level: 12,
    prerequisites: [],
    desc: [
      "When you reach 4th level, and again at 8th, 12th, 16th, and 19th level, you can increase one ability score of your choice by 2, or you can increase two ability scores of your choice by 1. As normal, you can't increase an ability score above 20 using this feature.",
    ],
    url: '/api/2014/features/cleric-ability-score-improvement-3',
  },
  'destroy-undead-cr-3-or-below': {
    index: 'destroy-undead-cr-3-or-below',
    class: {
      index: 'cleric',
      name: 'Cleric',
      url: '/api/2014/classes/cleric',
    },
    name: 'Destroy Undead (CR 3 or below)',
    level: 14,
    prerequisites: [],
    desc: [
      'Starting at 5th level, when an undead fails its saving throw against your Turn Undead feature, the creature is instantly destroyed if its challenge rating is at or below a certain threshold.',
    ],
    url: '/api/2014/features/destroy-undead-cr-3-or-below',
  },
  'cleric-ability-score-improvement-4': {
    index: 'cleric-ability-score-improvement-4',
    class: {
      index: 'cleric',
      name: 'Cleric',
      url: '/api/2014/classes/cleric',
    },
    name: 'Ability Score Improvement',
    level: 16,
    prerequisites: [],
    desc: [
      "When you reach 4th level, and again at 8th, 12th, 16th, and 19th level, you can increase one ability score of your choice by 2, or you can increase two ability scores of your choice by 1. As normal, you can't increase an ability score above 20 using this feature.",
    ],
    url: '/api/2014/features/cleric-ability-score-improvement-4',
  },
  'destroy-undead-cr-4-or-below': {
    index: 'destroy-undead-cr-4-or-below',
    class: {
      index: 'cleric',
      name: 'Cleric',
      url: '/api/2014/classes/cleric',
    },
    name: 'Destroy Undead (CR 4 or below)',
    level: 17,
    prerequisites: [],
    desc: [
      'Starting at 5th level, when an undead fails its saving throw against your Turn Undead feature, the creature is instantly destroyed if its challenge rating is at or below a certain threshold.',
    ],
    url: '/api/2014/features/destroy-undead-cr-4-or-below',
  },
  'divine-domain-improvement-4': {
    index: 'divine-domain-improvement-4',
    class: {
      index: 'cleric',
      name: 'Cleric',
      url: '/api/2014/classes/cleric',
    },
    name: 'Divine Domain feature',
    level: 17,
    prerequisites: [],
    desc: [
      'Choose one domain related to your deity, such as Knowledge, Life, Light, Nature, Tempest, Trickery, or War. Only the Life domain is detailed in the Open Game Licensed SRD. Additional Domains are described in the official rulebooks or products from other publishers.',
      'Your domain grants you domain spells and other features when you choose it at 1st level. It also grants you additional ways to use Channel Divinity when you gain that feature at 2nd level, and additional benefits at 6th, 8th, and 17th levels.',
    ],
    url: '/api/2014/features/divine-domain-improvement-4',
  },
  'supreme-healing': {
    index: 'supreme-healing',
    class: {
      index: 'cleric',
      name: 'Cleric',
      url: '/api/2014/classes/cleric',
    },
    name: 'Supreme Healing',
    level: 17,
    prerequisites: [],
    desc: [
      'Starting at 17th level, when you would normally roll one or more dice to restore hit points with a spell, you instead use the highest number possible for each die. For example, instead of restoring 2d6 hit points to a creature, you restore 12.',
    ],
    url: '/api/2014/features/supreme-healing',
  },
  'channel-divinity-3-rest': {
    index: 'channel-divinity-3-rest',
    class: {
      index: 'cleric',
      name: 'Cleric',
      url: '/api/2014/classes/cleric',
    },
    name: 'Channel Divinity (3/rest)',
    level: 18,
    prerequisites: [],
    desc: [
      'Beginning at 6th level, you can use your Channel Divinity twice between rests, and beginning at 18th level, you can use it three times between rests. When you finish a short or long rest, you regain your expended uses.',
    ],
    url: '/api/2014/features/channel-divinity-3-rest',
  },
  'cleric-ability-score-improvement-5': {
    index: 'cleric-ability-score-improvement-5',
    class: {
      index: 'cleric',
      name: 'Cleric',
      url: '/api/2014/classes/cleric',
    },
    name: 'Ability Score Improvement',
    level: 19,
    prerequisites: [],
    desc: [
      "When you reach 4th level, and again at 8th, 12th, 16th, and 19th level, you can increase one ability score of your choice by 2, or you can increase two ability scores of your choice by 1. As normal, you can't increase an ability score above 20 using this feature.",
    ],
    url: '/api/2014/features/cleric-ability-score-improvement-5',
  },
  'divine-intervention-improvement': {
    index: 'divine-intervention-improvement',
    class: {
      index: 'cleric',
      name: 'Cleric',
      url: '/api/2014/classes/cleric',
    },
    name: 'Divine Intervention Improvement',
    level: 20,
    prerequisites: [],
    desc: [
      'At 20th level, your call for intervention succeeds automatically, no roll required.',
    ],
    url: '/api/2014/features/divine-intervention-improvement',
  },
  'spellcasting-druid': {
    index: 'spellcasting-druid',
    class: {
      index: 'druid',
      name: 'Druid',
      url: '/api/2014/classes/druid',
    },
    name: 'Spellcasting: Druid',
    level: 1,
    prerequisites: [],
    desc: [
      'Drawing on the divine essence of nature itself, you can cast spells to shape that essence to your will.',
    ],
    reference: '/api/2014/classes/druid/spellcasting',
    url: '/api/2014/features/spellcasting-druid',
  },
  druidic: {
    index: 'druidic',
    class: {
      index: 'druid',
      name: 'Druid',
      url: '/api/2014/classes/druid',
    },
    name: 'Druidic',
    level: 1,
    prerequisites: [],
    desc: [
      "You know Druidic, the secret language of druids. You can speak the language and use it to leave hidden messages. You and others who know this language automatically spot such a message. Others spot the message's presence with a successful DC 15 Wisdom (Perception) check but can't decipher it without magic.",
    ],
    url: '/api/2014/features/druidic',
  },
  'wild-shape-cr-1-4-or-below-no-flying-or-swim-speed': {
    index: 'wild-shape-cr-1-4-or-below-no-flying-or-swim-speed',
    class: {
      index: 'druid',
      name: 'Druid',
      url: '/api/2014/classes/druid',
    },
    name: 'Wild Shape (CR 1/4 or below, no flying or swim speed)',
    level: 2,
    prerequisites: [],
    desc: [
      'Starting at 2nd level, you can use your action to magically assume the shape of a beast that you have seen before. You can use this feature twice. You regain expended uses when you finish a short or long rest.',
      "Your druid level determines the beasts you can transform into, as shown in the Beast Shapes table. At 2nd level, for example, you can transform into any beast that has a challenge rating of 1/4 or lower that doesn't have a flying or swimming speed.",
      'You can stay in a beast shape for a number of hours equal to half your druid level (rounded down). You then revert to your normal form unless you expend another use of this feature. You can revert to your normal form earlier by using a bonus action on your turn. You automatically revert if you fall unconscious, drop to 0 hit points, or die.',
      'While you are transformed, the following rules apply:',
      "- Your game statistics are replaced by the statistics of the beast, but you retain your alignment, personality, and Intelligence, Wisdom, and Charisma scores. You also retain all of your skill and saving throw proficiencies, in addition to gaining those of the creature. If the creature has the same proficiency as you and the bonus in its stat block is higher than yours, use the creature's bonus instead of yours. If the creature has any legendary or lair actions, you can't use them.",
      "- When you transform, you assume the beast's hit points and Hit Dice. When you revert to your normal form, you return to the number of hit points you had before you transformed. However, if you revert as a result of dropping to 0 hit points, any excess damage carries over to your normal form. For example, if you take 10 damage in animal form and have only 1 hit point left, you revert and take 9 damage. As long as the excess damage doesn't reduce your normal form to 0 hit points, you aren't knocked unconscious.",
      "- You can't cast spells, and your ability to speak or take any action that requires hands is limited to the capabilities of your beast form. Transforming doesn't break your concentration on a spell you've already cast, however, or prevent you from taking actions that are part of a spell, such as call lightning, that you've already cast.",
      "- You retain the benefit of any features from your class, race, or other source and can use them if the new form is physically capable of doing so. However, you can't use any of your special senses, such as darkvision, unless your new form also has that sense.",
      "- You choose whether your equipment falls to the ground in your space, merges into your new form, or is worn by it. Worn equipment functions as normal, but the GM decides whether it is practical for the new form to wear a piece of equipment, based on the creature's shape and size. Your equipment doesn't change size or shape to match the new form, and any equipment that the new form can't wear must either fall to the ground or merge with it. Equipment that merges with the form has no effect until you leave the form.",
    ],
    url: '/api/2014/features/wild-shape-cr-1-4-or-below-no-flying-or-swim-speed',
  },
  'druid-circle': {
    index: 'druid-circle',
    class: {
      index: 'druid',
      name: 'Druid',
      url: '/api/2014/classes/druid',
    },
    name: 'Druid Circle',
    level: 2,
    prerequisites: [],
    desc: [
      'At 2nd level, you choose to identify with a circle of druids, such as the Circle of the Land. Your choice grants you features at 2nd level and again at 6th, 10th, and 14th level.',
    ],
    url: '/api/2014/features/druid-circle',
  },
  'circle-of-the-land': {
    index: 'circle-of-the-land',
    class: {
      index: 'druid',
      name: 'Druid',
      url: '/api/2014/classes/druid',
    },
    subclass: {
      index: 'land',
      name: 'Land',
      url: '/api/2014/subclasses/land',
    },
    name: 'Circle of the Land',
    level: 2,
    prerequisites: [],
    desc: [
      "The Circle of the Land is made up of mystics and sages who safeguard ancient knowledge and rites through a vast oral tradition. These druids meet within sacred circles of trees or standing stones to whisper primal secrets in Druidic. The circle's wisest members preside as the chief priests of communities that hold to the Old Faith and serve as advisors to the rulers of those folk. As a member of this circle, your magic is influenced by the land where you were initiated into the circle's mysterious rites.",
    ],
    feature_specific: {
      subfeature_options: {
        choose: 1,
        type: 'feature',
        from: {
          option_set_type: 'options_array',
          options: [
            {
              option_type: 'reference',
              item: {
                index: 'circle-of-the-land-arctic',
                name: 'Circle of the Land: Arctic',
                url: '/api/2014/features/circle-of-the-land-arctic',
              },
            },
            {
              option_type: 'reference',
              item: {
                index: 'circle-of-the-land-coast',
                name: 'Circle of the Land: Coast',
                url: '/api/2014/features/circle-of-the-land-coast',
              },
            },
            {
              option_type: 'reference',
              item: {
                index: 'circle-of-the-land-desert',
                name: 'Circle of the Land: Desert',
                url: '/api/2014/features/circle-of-the-land-desert',
              },
            },
            {
              option_type: 'reference',
              item: {
                index: 'circle-of-the-land-forest',
                name: 'Circle of the Land: Forest',
                url: '/api/2014/features/circle-of-the-land-forest',
              },
            },
            {
              option_type: 'reference',
              item: {
                index: 'circle-of-the-land-grassland',
                name: 'Circle of the Land: Grassland',
                url: '/api/2014/features/circle-of-the-land-grassland',
              },
            },
            {
              option_type: 'reference',
              item: {
                index: 'circle-of-the-land-mountain',
                name: 'Circle of the Land: Mountain',
                url: '/api/2014/features/circle-of-the-land-mountain',
              },
            },
            {
              option_type: 'reference',
              item: {
                index: 'circle-of-the-land-swamp',
                name: 'Circle of the Land: Swamp',
                url: '/api/2014/features/circle-of-the-land-swamp',
              },
            },
          ],
        },
      },
    },
    url: '/api/2014/features/circle-of-the-land',
  },
  'circle-of-the-land-arctic': {
    index: 'circle-of-the-land-arctic',
    class: {
      index: 'druid',
      name: 'Druid',
      url: '/api/2014/classes/druid',
    },
    subclass: {
      index: 'land',
      name: 'Land',
      url: '/api/2014/subclasses/land',
    },
    name: 'Circle of the Land: Arctic',
    level: 2,
    prerequisites: [],
    desc: [
      "The Circle of the Land is made up of mystics and sages who safeguard ancient knowledge and rites through a vast oral tradition. These druids meet within sacred circles of trees or standing stones to whisper primal secrets in Druidic. The circle's wisest members preside as the chief priests of communities that hold to the Old Faith and serve as advisors to the rulers of those folk. As a member of this circle, your magic is influenced by the land where you were initiated into the circle's mysterious rites.",
    ],
    parent: {
      index: 'circle-of-the-land',
      name: 'Circle of the Land',
      url: '/api/2014/features/circle-of-the-land',
    },
    url: '/api/2014/features/circle-of-the-land-arctic',
  },
  'circle-of-the-land-coast': {
    index: 'circle-of-the-land-coast',
    class: {
      index: 'druid',
      name: 'Druid',
      url: '/api/2014/classes/druid',
    },
    subclass: {
      index: 'land',
      name: 'Land',
      url: '/api/2014/subclasses/land',
    },
    name: 'Circle of the Land: Coast',
    level: 2,
    prerequisites: [],
    desc: [
      "The Circle of the Land is made up of mystics and sages who safeguard ancient knowledge and rites through a vast oral tradition. These druids meet within sacred circles of trees or standing stones to whisper primal secrets in Druidic. The circle's wisest members preside as the chief priests of communities that hold to the Old Faith and serve as advisors to the rulers of those folk. As a member of this circle, your magic is influenced by the land where you were initiated into the circle's mysterious rites.",
    ],
    parent: {
      index: 'circle-of-the-land',
      name: 'Circle of the Land',
      url: '/api/2014/features/circle-of-the-land',
    },
    url: '/api/2014/features/circle-of-the-land-coast',
  },
  'circle-of-the-land-desert': {
    index: 'circle-of-the-land-desert',
    class: {
      index: 'druid',
      name: 'Druid',
      url: '/api/2014/classes/druid',
    },
    subclass: {
      index: 'land',
      name: 'Land',
      url: '/api/2014/subclasses/land',
    },
    name: 'Circle of the Land: Desert',
    level: 2,
    prerequisites: [],
    desc: [
      "The Circle of the Land is made up of mystics and sages who safeguard ancient knowledge and rites through a vast oral tradition. These druids meet within sacred circles of trees or standing stones to whisper primal secrets in Druidic. The circle's wisest members preside as the chief priests of communities that hold to the Old Faith and serve as advisors to the rulers of those folk. As a member of this circle, your magic is influenced by the land where you were initiated into the circle's mysterious rites.",
    ],
    parent: {
      index: 'circle-of-the-land',
      name: 'Circle of the Land',
      url: '/api/2014/features/circle-of-the-land',
    },
    url: '/api/2014/features/circle-of-the-land-desert',
  },
  'circle-of-the-land-forest': {
    index: 'circle-of-the-land-forest',
    class: {
      index: 'druid',
      name: 'Druid',
      url: '/api/2014/classes/druid',
    },
    subclass: {
      index: 'land',
      name: 'Land',
      url: '/api/2014/subclasses/land',
    },
    name: 'Circle of the Land: Forest',
    level: 2,
    prerequisites: [],
    desc: [
      "The Circle of the Land is made up of mystics and sages who safeguard ancient knowledge and rites through a vast oral tradition. These druids meet within sacred circles of trees or standing stones to whisper primal secrets in Druidic. The circle's wisest members preside as the chief priests of communities that hold to the Old Faith and serve as advisors to the rulers of those folk. As a member of this circle, your magic is influenced by the land where you were initiated into the circle's mysterious rites.",
    ],
    parent: {
      index: 'circle-of-the-land',
      name: 'Circle of the Land',
      url: '/api/2014/features/circle-of-the-land',
    },
    url: '/api/2014/features/circle-of-the-land-forest',
  },
  'circle-of-the-land-grassland': {
    index: 'circle-of-the-land-grassland',
    class: {
      index: 'druid',
      name: 'Druid',
      url: '/api/2014/classes/druid',
    },
    subclass: {
      index: 'land',
      name: 'Land',
      url: '/api/2014/subclasses/land',
    },
    name: 'Circle of the Land: Grassland',
    level: 2,
    prerequisites: [],
    desc: [
      "The Circle of the Land is made up of mystics and sages who safeguard ancient knowledge and rites through a vast oral tradition. These druids meet within sacred circles of trees or standing stones to whisper primal secrets in Druidic. The circle's wisest members preside as the chief priests of communities that hold to the Old Faith and serve as advisors to the rulers of those folk. As a member of this circle, your magic is influenced by the land where you were initiated into the circle's mysterious rites.",
    ],
    parent: {
      index: 'circle-of-the-land',
      name: 'Circle of the Land',
      url: '/api/2014/features/circle-of-the-land',
    },
    url: '/api/2014/features/circle-of-the-land-grassland',
  },
  'circle-of-the-land-mountain': {
    index: 'circle-of-the-land-mountain',
    class: {
      index: 'druid',
      name: 'Druid',
      url: '/api/2014/classes/druid',
    },
    subclass: {
      index: 'land',
      name: 'Land',
      url: '/api/2014/subclasses/land',
    },
    name: 'Circle of the Land: Mountain',
    level: 2,
    prerequisites: [],
    desc: [
      "The Circle of the Land is made up of mystics and sages who safeguard ancient knowledge and rites through a vast oral tradition. These druids meet within sacred circles of trees or standing stones to whisper primal secrets in Druidic. The circle's wisest members preside as the chief priests of communities that hold to the Old Faith and serve as advisors to the rulers of those folk. As a member of this circle, your magic is influenced by the land where you were initiated into the circle's mysterious rites.",
    ],
    parent: {
      index: 'circle-of-the-land',
      name: 'Circle of the Land',
      url: '/api/2014/features/circle-of-the-land',
    },
    url: '/api/2014/features/circle-of-the-land-mountain',
  },
  'circle-of-the-land-swamp': {
    index: 'circle-of-the-land-swamp',
    class: {
      index: 'druid',
      name: 'Druid',
      url: '/api/2014/classes/druid',
    },
    subclass: {
      index: 'land',
      name: 'Land',
      url: '/api/2014/subclasses/land',
    },
    name: 'Circle of the Land: Swamp',
    level: 2,
    prerequisites: [],
    desc: [
      "The Circle of the Land is made up of mystics and sages who safeguard ancient knowledge and rites through a vast oral tradition. These druids meet within sacred circles of trees or standing stones to whisper primal secrets in Druidic. The circle's wisest members preside as the chief priests of communities that hold to the Old Faith and serve as advisors to the rulers of those folk. As a member of this circle, your magic is influenced by the land where you were initiated into the circle's mysterious rites.",
    ],
    parent: {
      index: 'circle-of-the-land',
      name: 'Circle of the Land',
      url: '/api/2014/features/circle-of-the-land',
    },
    url: '/api/2014/features/circle-of-the-land-swamp',
  },
  'bonus-cantrip': {
    index: 'bonus-cantrip',
    class: {
      index: 'druid',
      name: 'Druid',
      url: '/api/2014/classes/druid',
    },
    subclass: {
      index: 'land',
      name: 'Land',
      url: '/api/2014/subclasses/land',
    },
    name: 'Bonus Cantrip',
    level: 2,
    prerequisites: [],
    desc: [
      'When you choose this circle at 2nd level, you learn one additional druid cantrip of your choice.',
    ],
    url: '/api/2014/features/bonus-cantrip',
  },
  'natural-recovery': {
    index: 'natural-recovery',
    class: {
      index: 'druid',
      name: 'Druid',
      url: '/api/2014/classes/druid',
    },
    subclass: {
      index: 'land',
      name: 'Land',
      url: '/api/2014/subclasses/land',
    },
    name: 'Natural Recovery',
    level: 2,
    prerequisites: [],
    desc: [
      "Starting at 2nd level, you can regain some of your magical energy by sitting in meditation and communing with nature. During a short rest, you choose expended spell slots to recover. The spell slots can have a combined level that is equal to or less than half your druid level (rounded up), and none of the slots can be 6th level or higher. You can't use this feature again until you finish a long rest.",
      'For example, when you are a 4th-level druid, you can recover up to two levels worth of spell slots. You can recover either a 2nd-level slot or two 1st-level slots.',
    ],
    url: '/api/2014/features/natural-recovery',
  },
  'circle-spells-1': {
    index: 'circle-spells-1',
    class: {
      index: 'druid',
      name: 'Druid',
      url: '/api/2014/classes/druid',
    },
    subclass: {
      index: 'land',
      name: 'Land',
      url: '/api/2014/subclasses/land',
    },
    name: 'Circle Spells',
    level: 3,
    prerequisites: [],
    desc: [
      'Your mystical connection to the land infuses you with the ability to cast certain spells. At 3rd, 5th, 7th, and 9th level you gain access to circle spells connected to the land where you became a druid.',
      'Choose that land--arctic, coast, desert, forest, grassland, mountain, or swamp--and consult the associated list of spells.',
      "Once you gain access to a circle spell, you always have it prepared, and it doesn't count against the number of spells you can prepare each day. If you gain access to a spell that doesn't appear on the druid spell list, the spell is nonetheless a druid spell for you.",
    ],
    url: '/api/2014/features/circle-spells-1',
  },
  'wild-shape-cr-1-2-or-below-no-flying-speed': {
    index: 'wild-shape-cr-1-2-or-below-no-flying-speed',
    class: {
      index: 'druid',
      name: 'Druid',
      url: '/api/2014/classes/druid',
    },
    name: 'Wild Shape (CR 1/2 or below, no flying speed)',
    level: 4,
    prerequisites: [],
    desc: [
      'Starting at 2nd level, you can use your action to magically assume the shape of a beast that you have seen before. You can use this feature twice. You regain expended uses when you finish a short or long rest.',
      "Your druid level determines the beasts you can transform into, as shown in the Beast Shapes table. At 2nd level, for example, you can transform into any beast that has a challenge rating of 1/4 or lower that doesn't have a flying or swimming speed.",
      'You can stay in a beast shape for a number of hours equal to half your druid level (rounded down). You then revert to your normal form unless you expend another use of this feature. You can revert to your normal form earlier by using a bonus action on your turn. You automatically revert if you fall unconscious, drop to 0 hit points, or die.',
      'While you are transformed, the following rules apply:',
      "- Your game statistics are replaced by the statistics of the beast, but you retain your alignment, personality, and Intelligence, Wisdom, and Charisma scores. You also retain all of your skill and saving throw proficiencies, in addition to gaining those of the creature. If the creature has the same proficiency as you and the bonus in its stat block is higher than yours, use the creature's bonus instead of yours. If the creature has any legendary or lair actions, you can't use them.",
      "- When you transform, you assume the beast's hit points and Hit Dice. When you revert to your normal form, you return to the number of hit points you had before you transformed. However, if you revert as a result of dropping to 0 hit points, any excess damage carries over to your normal form. For example, if you take 10 damage in animal form and have only 1 hit point left, you revert and take 9 damage. As long as the excess damage doesn't reduce your normal form to 0 hit points, you aren't knocked unconscious.",
      "- You can't cast spells, and your ability to speak or take any action that requires hands is limited to the capabilities of your beast form. Transforming doesn't break your concentration on a spell you've already cast, however, or prevent you from taking actions that are part of a spell, such as call lightning, that you've already cast.",
      "- You retain the benefit of any features from your class, race, or other source and can use them if the new form is physically capable of doing so. However, you can't use any of your special senses, such as darkvision, unless your new form also has that sense.",
      "- You choose whether your equipment falls to the ground in your space, merges into your new form, or is worn by it. Worn equipment functions as normal, but the GM decides whether it is practical for the new form to wear a piece of equipment, based on the creature's shape and size. Your equipment doesn't change size or shape to match the new form, and any equipment that the new form can't wear must either fall to the ground or merge with it. Equipment that merges with the form has no effect until you leave the form.",
    ],
    url: '/api/2014/features/wild-shape-cr-1-2-or-below-no-flying-speed',
  },
  'druid-ability-score-improvement-1': {
    index: 'druid-ability-score-improvement-1',
    class: {
      index: 'druid',
      name: 'Druid',
      url: '/api/2014/classes/druid',
    },
    name: 'Ability Score Improvement',
    level: 4,
    prerequisites: [],
    desc: [
      "When you reach 4th level, and again at 8th, 12th, 16th, and 19th level, you can increase one ability score of your choice by 2, or you can increase two ability scores of your choice by 1. As normal, you can't increase an ability score above 20 using this feature.",
    ],
    url: '/api/2014/features/druid-ability-score-improvement-1',
  },
  'circle-spells-2': {
    index: 'circle-spells-2',
    class: {
      index: 'druid',
      name: 'Druid',
      url: '/api/2014/classes/druid',
    },
    subclass: {
      index: 'land',
      name: 'Land',
      url: '/api/2014/subclasses/land',
    },
    name: 'Circle Spells',
    level: 5,
    prerequisites: [],
    desc: [
      'Your mystical connection to the land infuses you with the ability to cast certain spells. At 3rd, 5th, 7th, and 9th level you gain access to circle spells connected to the land where you became a druid.',
      'Choose that land--arctic, coast, desert, forest, grassland, mountain, or swamp--and consult the associated list of spells.',
      "Once you gain access to a circle spell, you always have it prepared, and it doesn't count against the number of spells you can prepare each day. If you gain access to a spell that doesn't appear on the druid spell list, the spell is nonetheless a druid spell for you.",
    ],
    url: '/api/2014/features/circle-spells-2',
  },
  'druid-circle-improvement-1': {
    index: 'druid-circle-improvement-1',
    class: {
      index: 'druid',
      name: 'Druid',
      url: '/api/2014/classes/druid',
    },
    name: 'Druid Circle feature',
    level: 6,
    prerequisites: [],
    desc: [
      'At 2nd level, you choose to identify with a circle of druids, such as the Circle of the Land. Your choice grants you features at 2nd level and again at 6th, 10th, and 14th level.',
    ],
    url: '/api/2014/features/druid-circle-improvement-1',
  },
  'druid-lands-stride': {
    index: 'druid-lands-stride',
    class: {
      index: 'druid',
      name: 'Druid',
      url: '/api/2014/classes/druid',
    },
    subclass: {
      index: 'land',
      name: 'Land',
      url: '/api/2014/subclasses/land',
    },
    name: "Land's Stride",
    level: 6,
    prerequisites: [],
    desc: [
      'Starting at 6th level, moving through nonmagical difficult terrain costs you no extra movement. You can also pass through nonmagical plants without being slowed by them and without taking damage from them if they have thorns, spines, or a similar hazard.',
      'In addition, you have advantage on saving throws against plants that are magically created or manipulated to impede movement, such those created by the entangle spell.',
    ],
    url: '/api/2014/features/druid-lands-stride',
  },
  'circle-spells-3': {
    index: 'circle-spells-3',
    class: {
      index: 'druid',
      name: 'Druid',
      url: '/api/2014/classes/druid',
    },
    subclass: {
      index: 'land',
      name: 'Land',
      url: '/api/2014/subclasses/land',
    },
    name: 'Circle Spells',
    level: 7,
    prerequisites: [],
    desc: [
      'Your mystical connection to the land infuses you with the ability to cast certain spells. At 3rd, 5th, 7th, and 9th level you gain access to circle spells connected to the land where you became a druid.',
      'Choose that land--arctic, coast, desert, forest, grassland, mountain, or swamp--and consult the associated list of spells.',
      "Once you gain access to a circle spell, you always have it prepared, and it doesn't count against the number of spells you can prepare each day. If you gain access to a spell that doesn't appear on the druid spell list, the spell is nonetheless a druid spell for you.",
    ],
    url: '/api/2014/features/circle-spells-3',
  },
  'wild-shape-cr-1-or-below': {
    index: 'wild-shape-cr-1-or-below',
    class: {
      index: 'druid',
      name: 'Druid',
      url: '/api/2014/classes/druid',
    },
    name: 'Wild Shape (CR 1 or below)',
    level: 8,
    prerequisites: [],
    desc: [
      'Starting at 2nd level, you can use your action to magically assume the shape of a beast that you have seen before. You can use this feature twice. You regain expended uses when you finish a short or long rest.',
      "Your druid level determines the beasts you can transform into, as shown in the Beast Shapes table. At 2nd level, for example, you can transform into any beast that has a challenge rating of 1/4 or lower that doesn't have a flying or swimming speed.",
      'You can stay in a beast shape for a number of hours equal to half your druid level (rounded down). You then revert to your normal form unless you expend another use of this feature. You can revert to your normal form earlier by using a bonus action on your turn. You automatically revert if you fall unconscious, drop to 0 hit points, or die.',
      'While you are transformed, the following rules apply:',
      "- Your game statistics are replaced by the statistics of the beast, but you retain your alignment, personality, and Intelligence, Wisdom, and Charisma scores. You also retain all of your skill and saving throw proficiencies, in addition to gaining those of the creature. If the creature has the same proficiency as you and the bonus in its stat block is higher than yours, use the creature's bonus instead of yours. If the creature has any legendary or lair actions, you can't use them.",
      "- When you transform, you assume the beast's hit points and Hit Dice. When you revert to your normal form, you return to the number of hit points you had before you transformed. However, if you revert as a result of dropping to 0 hit points, any excess damage carries over to your normal form. For example, if you take 10 damage in animal form and have only 1 hit point left, you revert and take 9 damage. As long as the excess damage doesn't reduce your normal form to 0 hit points, you aren't knocked unconscious.",
      "- You can't cast spells, and your ability to speak or take any action that requires hands is limited to the capabilities of your beast form. Transforming doesn't break your concentration on a spell you've already cast, however, or prevent you from taking actions that are part of a spell, such as call lightning, that you've already cast.",
      "- You retain the benefit of any features from your class, race, or other source and can use them if the new form is physically capable of doing so. However, you can't use any of your special senses, such as darkvision, unless your new form also has that sense.",
      "- You choose whether your equipment falls to the ground in your space, merges into your new form, or is worn by it. Worn equipment functions as normal, but the GM decides whether it is practical for the new form to wear a piece of equipment, based on the creature's shape and size. Your equipment doesn't change size or shape to match the new form, and any equipment that the new form can't wear must either fall to the ground or merge with it. Equipment that merges with the form has no effect until you leave the form.",
    ],
    url: '/api/2014/features/wild-shape-cr-1-or-below',
  },
  'druid-ability-score-improvement-2': {
    index: 'druid-ability-score-improvement-2',
    class: {
      index: 'druid',
      name: 'Druid',
      url: '/api/2014/classes/druid',
    },
    name: 'Ability Score Improvement',
    level: 8,
    prerequisites: [],
    desc: [
      "When you reach 4th level, and again at 8th, 12th, 16th, and 19th level, you can increase one ability score of your choice by 2, or you can increase two ability scores of your choice by 1. As normal, you can't increase an ability score above 20 using this feature.",
    ],
    url: '/api/2014/features/druid-ability-score-improvement-2',
  },
  'circle-spells-4': {
    index: 'circle-spells-4',
    class: {
      index: 'druid',
      name: 'Druid',
      url: '/api/2014/classes/druid',
    },
    subclass: {
      index: 'land',
      name: 'Land',
      url: '/api/2014/subclasses/land',
    },
    name: 'Circle Spells',
    level: 9,
    prerequisites: [],
    desc: [
      'Your mystical connection to the land infuses you with the ability to cast certain spells. At 3rd, 5th, 7th, and 9th level you gain access to circle spells connected to the land where you became a druid.',
      'Choose that land--arctic, coast, desert, forest, grassland, mountain, or swamp--and consult the associated list of spells.',
      "Once you gain access to a circle spell, you always have it prepared, and it doesn't count against the number of spells you can prepare each day. If you gain access to a spell that doesn't appear on the druid spell list, the spell is nonetheless a druid spell for you.",
    ],
    url: '/api/2014/features/circle-spells-4',
  },
  'druid-circle-improvement-2': {
    index: 'druid-circle-improvement-2',
    class: {
      index: 'druid',
      name: 'Druid',
      url: '/api/2014/classes/druid',
    },
    name: 'Druid Circle feature',
    level: 10,
    prerequisites: [],
    desc: [
      'At 2nd level, you choose to identify with a circle of druids, such as the Circle of the Land. Your choice grants you features at 2nd level and again at 6th, 10th, and 14th level.',
    ],
    url: '/api/2014/features/druid-circle-improvement-2',
  },
  'natures-ward': {
    index: 'natures-ward',
    class: {
      index: 'druid',
      name: 'Druid',
      url: '/api/2014/classes/druid',
    },
    subclass: {
      index: 'land',
      name: 'Land',
      url: '/api/2014/subclasses/land',
    },
    name: "Nature's Ward",
    level: 10,
    prerequisites: [],
    desc: [
      "When you reach 10th level, you can't be charmed or frightened by elementals or fey, and you are immune to poison and disease.",
    ],
    url: '/api/2014/features/natures-ward',
  },
  'druid-ability-score-improvement-3': {
    index: 'druid-ability-score-improvement-3',
    class: {
      index: 'druid',
      name: 'Druid',
      url: '/api/2014/classes/druid',
    },
    name: 'Ability Score Improvement',
    level: 12,
    prerequisites: [],
    desc: [
      "When you reach 4th level, and again at 8th, 12th, 16th, and 19th level, you can increase one ability score of your choice by 2, or you can increase two ability scores of your choice by 1. As normal, you can't increase an ability score above 20 using this feature.",
    ],
    url: '/api/2014/features/druid-ability-score-improvement-3',
  },
  'druid-circle-improvement-3': {
    index: 'druid-circle-improvement-3',
    class: {
      index: 'druid',
      name: 'Druid',
      url: '/api/2014/classes/druid',
    },
    name: 'Druid Circle feature',
    level: 14,
    prerequisites: [],
    desc: [
      'At 2nd level, you choose to identify with a circle of druids, such as the Circle of the Land. Your choice grants you features at 2nd level and again at 6th, 10th, and 14th level.',
    ],
    url: '/api/2014/features/druid-circle-improvement-3',
  },
  'natures-sanctuary': {
    index: 'natures-sanctuary',
    class: {
      index: 'druid',
      name: 'Druid',
      url: '/api/2014/classes/druid',
    },
    subclass: {
      index: 'land',
      name: 'Land',
      url: '/api/2014/subclasses/land',
    },
    name: "Nature's Sanctuary",
    level: 14,
    prerequisites: [],
    desc: [
      'When you reach 14th level, creatures of the natural world sense your connection to nature and become hesitant to attack you. When a beast or plant creature attacks you, that creature must make a Wisdom saving throw against your druid spell save DC. On a failed save, the creature must choose a different target, or the attack automatically misses. On a successful save, the creature is immune to this effect for 24 hours. The creature is aware of this effect before it makes its attack against you.',
    ],
    url: '/api/2014/features/natures-sanctuary',
  },
  'druid-ability-score-improvement-4': {
    index: 'druid-ability-score-improvement-4',
    class: {
      index: 'druid',
      name: 'Druid',
      url: '/api/2014/classes/druid',
    },
    name: 'Ability Score Improvement',
    level: 16,
    prerequisites: [],
    desc: [
      "When you reach 4th level, and again at 8th, 12th, 16th, and 19th level, you can increase one ability score of your choice by 2, or you can increase two ability scores of your choice by 1. As normal, you can't increase an ability score above 20 using this feature.",
    ],
    url: '/api/2014/features/druid-ability-score-improvement-4',
  },
  'druid-timeless-body': {
    index: 'druid-timeless-body',
    class: {
      index: 'druid',
      name: 'Druid',
      url: '/api/2014/classes/druid',
    },
    name: 'Timeless Body',
    level: 18,
    prerequisites: [],
    desc: [
      'Starting at 18th level, the primal magic that you wield causes you to age more slowly. For every 10 years that pass, your body ages only 1 year.',
    ],
    url: '/api/2014/features/druid-timeless-body',
  },
  'beast-spells': {
    index: 'beast-spells',
    class: {
      index: 'druid',
      name: 'Druid',
      url: '/api/2014/classes/druid',
    },
    name: 'Beast Spells',
    level: 18,
    prerequisites: [],
    desc: [
      "Beginning at 18th level, you can cast many of your druid spells in any shape you assume using Wild Shape. You can perform the somatic and verbal components of a druid spell while in a beast shape, but you aren't able to provide material components.",
    ],
    url: '/api/2014/features/beast-spells',
  },
  'druid-ability-score-improvement-5': {
    index: 'druid-ability-score-improvement-5',
    class: {
      index: 'druid',
      name: 'Druid',
      url: '/api/2014/classes/druid',
    },
    name: 'Ability Score Improvement',
    level: 19,
    prerequisites: [],
    desc: [
      "When you reach 4th level, and again at 8th, 12th, 16th, and 19th level, you can increase one ability score of your choice by 2, or you can increase two ability scores of your choice by 1. As normal, you can't increase an ability score above 20 using this feature.",
    ],
    url: '/api/2014/features/druid-ability-score-improvement-5',
  },
  archdruid: {
    index: 'archdruid',
    class: {
      index: 'druid',
      name: 'Druid',
      url: '/api/2014/classes/druid',
    },
    name: 'Archdruid',
    level: 20,
    prerequisites: [],
    desc: [
      'At 20th level, you can use your Wild Shape an unlimited number of times.',
      "Additionally, you can ignore the verbal and somatic components of your druid spells, as well as any material components that lack a cost and aren't consumed by a spell. You gain this benefit in both your normal shape and your beast shape from Wild Shape.",
    ],
    url: '/api/2014/features/archdruid',
  },
  'fighter-fighting-style': {
    index: 'fighter-fighting-style',
    class: {
      index: 'fighter',
      name: 'Fighter',
      url: '/api/2014/classes/fighter',
    },
    name: 'Fighting Style',
    level: 1,
    prerequisites: [],
    desc: [
      "You adopt a particular style of fighting as your specialty. Choose one of the following options. You can't take a Fighting Style option more than once, even if you later get to choose again.",
    ],
    feature_specific: {
      subfeature_options: {
        choose: 1,
        type: 'feature',
        from: {
          option_set_type: 'options_array',
          options: [
            {
              option_type: 'reference',
              item: {
                index: 'fighter-fighting-style-archery',
                name: 'Fighting Style: Archery',
                url: '/api/2014/features/fighter-fighting-style-archery',
              },
            },
            {
              option_type: 'reference',
              item: {
                index: 'fighter-fighting-style-defense',
                name: 'Fighting Style: Defense',
                url: '/api/2014/features/fighter-fighting-style-defense',
              },
            },
            {
              option_type: 'reference',
              item: {
                index: 'fighter-fighting-style-dueling',
                name: 'Fighting Style: Dueling',
                url: '/api/2014/features/fighter-fighting-style-dueling',
              },
            },
            {
              option_type: 'reference',
              item: {
                index: 'fighter-fighting-style-great-weapon-fighting',
                name: 'Fighting Style: Great Weapon Fighting',
                url: '/api/2014/features/fighter-fighting-style-great-weapon-fighting',
              },
            },
            {
              option_type: 'reference',
              item: {
                index: 'fighter-fighting-style-protection',
                name: 'Fighting Style: Protection',
                url: '/api/2014/features/fighter-fighting-style-protection',
              },
            },
            {
              option_type: 'reference',
              item: {
                index: 'fighter-fighting-style-two-weapon-fighting',
                name: 'Fighting Style: Two-Weapon Fighting',
                url: '/api/2014/features/fighter-fighting-style-two-weapon-fighting',
              },
            },
          ],
        },
      },
    },
    url: '/api/2014/features/fighter-fighting-style',
  },
  'fighter-fighting-style-archery': {
    index: 'fighter-fighting-style-archery',
    class: {
      index: 'fighter',
      name: 'Fighter',
      url: '/api/2014/classes/fighter',
    },
    name: 'Fighting Style: Archery',
    level: 1,
    prerequisites: [],
    desc: ['You gain a +2 bonus to attack rolls you make with ranged weapons.'],
    parent: {
      index: 'fighter-fighting-style',
      name: 'Fighting Style',
      url: '/api/2014/features/fighter-fighting-style',
    },
    url: '/api/2014/features/fighter-fighting-style-archery',
  },
  'fighter-fighting-style-defense': {
    index: 'fighter-fighting-style-defense',
    class: {
      index: 'fighter',
      name: 'Fighter',
      url: '/api/2014/classes/fighter',
    },
    name: 'Fighting Style: Defense',
    level: 1,
    prerequisites: [],
    desc: ['While you are wearing armor, you gain a +1 bonus to AC.'],
    parent: {
      index: 'fighter-fighting-style',
      name: 'Fighting Style',
      url: '/api/2014/features/fighter-fighting-style',
    },
    url: '/api/2014/features/fighter-fighting-style-defense',
  },
  'fighter-fighting-style-dueling': {
    index: 'fighter-fighting-style-dueling',
    class: {
      index: 'fighter',
      name: 'Fighter',
      url: '/api/2014/classes/fighter',
    },
    name: 'Fighting Style: Dueling',
    level: 1,
    prerequisites: [],
    desc: [
      'When you are wielding a melee weapon in one hand and no other weapons, you gain a +2 bonus to damage rolls with that weapon.',
    ],
    parent: {
      index: 'fighter-fighting-style',
      name: 'Fighting Style',
      url: '/api/2014/features/fighter-fighting-style',
    },
    url: '/api/2014/features/fighter-fighting-style-dueling',
  },
  'fighter-fighting-style-great-weapon-fighting': {
    index: 'fighter-fighting-style-great-weapon-fighting',
    class: {
      index: 'fighter',
      name: 'Fighter',
      url: '/api/2014/classes/fighter',
    },
    name: 'Fighting Style: Great Weapon Fighting',
    level: 1,
    prerequisites: [],
    desc: [
      'When you roll a 1 or 2 on a damage die for an attack you make with a melee weapon that you are wielding with two hands, you can reroll the die and must use the new roll, even if the new roll is a 1 or a 2. The weapon must have the two-handed or versatile property for you to gain this benefit.',
    ],
    parent: {
      index: 'fighter-fighting-style',
      name: 'Fighting Style',
      url: '/api/2014/features/fighter-fighting-style',
    },
    url: '/api/2014/features/fighter-fighting-style-great-weapon-fighting',
  },
  'fighter-fighting-style-protection': {
    index: 'fighter-fighting-style-protection',
    class: {
      index: 'fighter',
      name: 'Fighter',
      url: '/api/2014/classes/fighter',
    },
    name: 'Fighting Style: Protection',
    level: 1,
    prerequisites: [],
    desc: [
      'When a creature you can see attacks a target other than you that is within 5 feet of you, you can use your reaction to impose disadvantage on the attack roll. You must be wielding a shield.',
    ],
    parent: {
      index: 'fighter-fighting-style',
      name: 'Fighting Style',
      url: '/api/2014/features/fighter-fighting-style',
    },
    url: '/api/2014/features/fighter-fighting-style-protection',
  },
  'fighter-fighting-style-two-weapon-fighting': {
    index: 'fighter-fighting-style-two-weapon-fighting',
    class: {
      index: 'fighter',
      name: 'Fighter',
      url: '/api/2014/classes/fighter',
    },
    name: 'Fighting Style: Two-Weapon Fighting',
    level: 1,
    prerequisites: [],
    desc: [
      'When you engage in two-weapon fighting, you can add your ability modifier to the damage of the second attack.',
    ],
    parent: {
      index: 'fighter-fighting-style',
      name: 'Fighting Style',
      url: '/api/2014/features/fighter-fighting-style',
    },
    url: '/api/2014/features/fighter-fighting-style-two-weapon-fighting',
  },
  'second-wind': {
    index: 'second-wind',
    class: {
      index: 'fighter',
      name: 'Fighter',
      url: '/api/2014/classes/fighter',
    },
    name: 'Second Wind',
    level: 1,
    prerequisites: [],
    desc: [
      'You have a limited well of stamina that you can draw on to protect yourself from harm. On your turn, you can use a bonus action to regain hit points equal to 1d10 + your fighter level. Once you use this feature, you must finish a short or long rest before you can use it again.',
    ],
    url: '/api/2014/features/second-wind',
  },
  'action-surge-1-use': {
    index: 'action-surge-1-use',
    class: {
      index: 'fighter',
      name: 'Fighter',
      url: '/api/2014/classes/fighter',
    },
    name: 'Action Surge (1 use)',
    level: 2,
    prerequisites: [],
    desc: [
      'Starting at 2nd level, you can push yourself beyond your normal limits for a moment. On your turn, you can take one additional action on top of your regular action and a possible bonus action.',
      'Once you use this feature, you must finish a short or long rest before you can use it again. Starting at 17th level, you can use it twice before a rest, but only once on the same turn.',
    ],
    url: '/api/2014/features/action-surge-1-use',
  },
  'martial-archetype': {
    index: 'martial-archetype',
    class: {
      index: 'fighter',
      name: 'Fighter',
      url: '/api/2014/classes/fighter',
    },
    name: 'Martial Archetype',
    level: 3,
    prerequisites: [],
    desc: [
      'At 3rd level, you choose an archetype that you strive to emulate in your combat styles and techniques, such as Champion. The archetype you choose grants you features at 3rd level and again at 7th, 10th, 15th, and 18th level.',
    ],
    url: '/api/2014/features/martial-archetype',
  },
  'improved-critical': {
    index: 'improved-critical',
    class: {
      index: 'fighter',
      name: 'Fighter',
      url: '/api/2014/classes/fighter',
    },
    subclass: {
      index: 'champion',
      name: 'Champion',
      url: '/api/2014/subclasses/champion',
    },
    name: 'Improved Critical',
    level: 3,
    prerequisites: [],
    desc: [
      'Beginning when you choose this archetype at 3rd level, your weapon attacks score a critical hit on a roll of 19 or 20.',
    ],
    url: '/api/2014/features/improved-critical',
  },
  'fighter-ability-score-improvement-1': {
    index: 'fighter-ability-score-improvement-1',
    class: {
      index: 'fighter',
      name: 'Fighter',
      url: '/api/2014/classes/fighter',
    },
    name: 'Ability Score Improvement',
    level: 4,
    prerequisites: [],
    desc: [
      "When you reach 4th level, and again at 6th, 8th, 12th, 14th, 16th, and 19th level, you can increase one ability score of your choice by 2, or you can increase two ability scores of your choice by 1. As normal, you can't increase an ability score above 20 using this feature.",
    ],
    url: '/api/2014/features/fighter-ability-score-improvement-1',
  },
  'extra-attack-1': {
    index: 'extra-attack-1',
    class: {
      index: 'fighter',
      name: 'Fighter',
      url: '/api/2014/classes/fighter',
    },
    name: 'Extra Attack',
    level: 5,
    prerequisites: [],
    desc: [
      'Beginning at 5th level, you can attack twice, instead of once, whenever you take the Attack action on your turn. The number of attacks increases to three when you reach 11th level in this class and to four when you reach 20th level in this class.',
    ],
    url: '/api/2014/features/extra-attack-1',
  },
  'fighter-ability-score-improvement-2': {
    index: 'fighter-ability-score-improvement-2',
    class: {
      index: 'fighter',
      name: 'Fighter',
      url: '/api/2014/classes/fighter',
    },
    name: 'Ability Score Improvement',
    level: 6,
    prerequisites: [],
    desc: [
      "When you reach 4th level, and again at 6th, 8th, 12th, 14th, 16th, and 19th level, you can increase one ability score of your choice by 2, or you can increase two ability scores of your choice by 1. As normal, you can't increase an ability score above 20 using this feature.",
    ],
    url: '/api/2014/features/fighter-ability-score-improvement-2',
  },
  'remarkable-athlete': {
    index: 'remarkable-athlete',
    class: {
      index: 'fighter',
      name: 'Fighter',
      url: '/api/2014/classes/fighter',
    },
    subclass: {
      index: 'champion',
      name: 'Champion',
      url: '/api/2014/subclasses/champion',
    },
    name: 'Remarkable Athlete',
    level: 7,
    prerequisites: [],
    desc: [
      "Starting at 7th level, you can add half your proficiency bonus (round up) to any Strength, Dexterity, or Constitution check you make that doesn't already use your proficiency bonus. In addition, when you make a running long jump, the distance you can cover increases by a number of feet equal to your Strength modifier.",
    ],
    url: '/api/2014/features/remarkable-athlete',
  },
  'martial-archetype-improvement-1': {
    index: 'martial-archetype-improvement-1',
    class: {
      index: 'fighter',
      name: 'Fighter',
      url: '/api/2014/classes/fighter',
    },
    name: 'Martial Archetype feature',
    level: 7,
    prerequisites: [],
    desc: [
      'At 3rd level, you choose an archetype that you strive to emulate in your combat styles and techniques, such as Champion. The archetype you choose grants you features at 3rd level and again at 7th, 10th, 15th, and 18th level.',
    ],
    url: '/api/2014/features/martial-archetype-improvement-1',
  },
  'fighter-ability-score-improvement-3': {
    index: 'fighter-ability-score-improvement-3',
    class: {
      index: 'fighter',
      name: 'Fighter',
      url: '/api/2014/classes/fighter',
    },
    name: 'Ability Score Improvement',
    level: 8,
    prerequisites: [],
    desc: [
      "When you reach 4th level, and again at 6th, 8th, 12th, 14th, 16th, and 19th level, you can increase one ability score of your choice by 2, or you can increase two ability scores of your choice by 1. As normal, you can't increase an ability score above 20 using this feature.",
    ],
    url: '/api/2014/features/fighter-ability-score-improvement-3',
  },
  'indomitable-1-use': {
    index: 'indomitable-1-use',
    class: {
      index: 'fighter',
      name: 'Fighter',
      url: '/api/2014/classes/fighter',
    },
    name: 'Indomitable (1 use)',
    level: 9,
    prerequisites: [],
    desc: [
      "Beginning at 9th level, you can reroll a saving throw that you fail. If you do so, you must use the new roll, and you can't use this feature again until you finish a long rest. You can use this feature twice between long rests starting at 13th level and three times between long rests starting at 17th level.",
    ],
    url: '/api/2014/features/indomitable-1-use',
  },
  'additional-fighting-style': {
    index: 'additional-fighting-style',
    class: {
      index: 'fighter',
      name: 'Fighter',
      url: '/api/2014/classes/fighter',
    },
    subclass: {
      index: 'champion',
      name: 'Champion',
      url: '/api/2014/subclasses/champion',
    },
    name: 'Additional Fighting Style',
    level: 10,
    prerequisites: [],
    desc: [
      'At 10th level, you can choose a second option from the Fighting Style class feature.',
    ],
    feature_specific: {
      subfeature_options: {
        choose: 1,
        type: 'feature',
        from: {
          option_set_type: 'options_array',
          options: [
            {
              option_type: 'reference',
              item: {
                index: 'fighter-fighting-style-archery',
                name: 'Fighting Style: Archery',
                url: '/api/2014/features/fighter-fighting-style-archery',
              },
            },
            {
              option_type: 'reference',
              item: {
                index: 'fighter-fighting-style-defense',
                name: 'Fighting Style: Defense',
                url: '/api/2014/features/fighter-fighting-style-defense',
              },
            },
            {
              option_type: 'reference',
              item: {
                index: 'fighter-fighting-style-dueling',
                name: 'Fighting Style: Dueling',
                url: '/api/2014/features/fighter-fighting-style-dueling',
              },
            },
            {
              option_type: 'reference',
              item: {
                index: 'fighter-fighting-style-great-weapon-fighting',
                name: 'Fighting Style: Great Weapon Fighting',
                url: '/api/2014/features/fighter-fighting-style-great-weapon-fighting',
              },
            },
            {
              option_type: 'reference',
              item: {
                index: 'fighter-fighting-style-protection',
                name: 'Fighting Style: Protection',
                url: '/api/2014/features/fighter-fighting-style-protection',
              },
            },
            {
              option_type: 'reference',
              item: {
                index: 'fighter-fighting-style-two-weapon-fighting',
                name: 'Fighting Style: Two-Weapon Fighting',
                url: '/api/2014/features/fighter-fighting-style-two-weapon-fighting',
              },
            },
          ],
        },
      },
    },
    url: '/api/2014/features/additional-fighting-style',
  },
  'martial-archetype-improvement-2': {
    index: 'martial-archetype-improvement-2',
    class: {
      index: 'fighter',
      name: 'Fighter',
      url: '/api/2014/classes/fighter',
    },
    name: 'Martial Archetype feature',
    level: 10,
    prerequisites: [],
    desc: [
      'At 3rd level, you choose an archetype that you strive to emulate in your combat styles and techniques, such as Champion. The archetype you choose grants you features at 3rd level and again at 7th, 10th, 15th, and 18th level.',
    ],
    url: '/api/2014/features/martial-archetype-improvement-2',
  },
  'extra-attack-2': {
    index: 'extra-attack-2',
    class: {
      index: 'fighter',
      name: 'Fighter',
      url: '/api/2014/classes/fighter',
    },
    name: 'Extra Attack (2)',
    level: 11,
    prerequisites: [],
    desc: [
      'Beginning at 5th level, you can attack twice, instead of once, whenever you take the Attack action on your turn. The number of attacks increases to three when you reach 11th level in this class and to four when you reach 20th level in this class.',
    ],
    url: '/api/2014/features/extra-attack-2',
  },
  'fighter-ability-score-improvement-4': {
    index: 'fighter-ability-score-improvement-4',
    class: {
      index: 'fighter',
      name: 'Fighter',
      url: '/api/2014/classes/fighter',
    },
    name: 'Ability Score Improvement',
    level: 12,
    prerequisites: [],
    desc: [
      "When you reach 4th level, and again at 6th, 8th, 12th, 14th, 16th, and 19th level, you can increase one ability score of your choice by 2, or you can increase two ability scores of your choice by 1. As normal, you can't increase an ability score above 20 using this feature.",
    ],
    url: '/api/2014/features/fighter-ability-score-improvement-4',
  },
  'indomitable-2-uses': {
    index: 'indomitable-2-uses',
    class: {
      index: 'fighter',
      name: 'Fighter',
      url: '/api/2014/classes/fighter',
    },
    name: 'Indomitable (2 uses)',
    level: 13,
    prerequisites: [],
    desc: [
      "Beginning at 9th level, you can reroll a saving throw that you fail. If you do so, you must use the new roll, and you can't use this feature again until you finish a long rest. You can use this feature twice between long rests starting at 13th level and three times between long rests starting at 17th level.",
    ],
    url: '/api/2014/features/indomitable-2-uses',
  },
  'fighter-ability-score-improvement-5': {
    index: 'fighter-ability-score-improvement-5',
    class: {
      index: 'fighter',
      name: 'Fighter',
      url: '/api/2014/classes/fighter',
    },
    name: 'Ability Score Improvement',
    level: 14,
    prerequisites: [],
    desc: [
      "When you reach 4th level, and again at 6th, 8th, 12th, 14th, 16th, and 19th level, you can increase one ability score of your choice by 2, or you can increase two ability scores of your choice by 1. As normal, you can't increase an ability score above 20 using this feature.",
    ],
    url: '/api/2014/features/fighter-ability-score-improvement-5',
  },
  'superior-critical': {
    index: 'superior-critical',
    class: {
      index: 'fighter',
      name: 'Fighter',
      url: '/api/2014/classes/fighter',
    },
    subclass: {
      index: 'champion',
      name: 'Champion',
      url: '/api/2014/subclasses/champion',
    },
    name: 'Superior Critical',
    level: 15,
    prerequisites: [],
    desc: [
      'Starting at 15th level, your weapon attacks score a critical hit on a roll of 18-20.',
    ],
    url: '/api/2014/features/superior-critical',
  },
  'martial-archetype-improvement-3': {
    index: 'martial-archetype-improvement-3',
    class: {
      index: 'fighter',
      name: 'Fighter',
      url: '/api/2014/classes/fighter',
    },
    name: 'Martial Archetype feature',
    level: 15,
    prerequisites: [],
    desc: [
      'At 3rd level, you choose an archetype that you strive to emulate in your combat styles and techniques, such as Champion. The archetype you choose grants you features at 3rd level and again at 7th, 10th, 15th, and 18th level.',
    ],
    url: '/api/2014/features/martial-archetype-improvement-3',
  },
  'fighter-ability-score-improvement-6': {
    index: 'fighter-ability-score-improvement-6',
    class: {
      index: 'fighter',
      name: 'Fighter',
      url: '/api/2014/classes/fighter',
    },
    name: 'Ability Score Improvement',
    level: 16,
    prerequisites: [],
    desc: [
      "When you reach 4th level, and again at 6th, 8th, 12th, 14th, 16th, and 19th level, you can increase one ability score of your choice by 2, or you can increase two ability scores of your choice by 1. As normal, you can't increase an ability score above 20 using this feature.",
    ],
    url: '/api/2014/features/fighter-ability-score-improvement-6',
  },
  'action-surge-2-uses': {
    index: 'action-surge-2-uses',
    class: {
      index: 'fighter',
      name: 'Fighter',
      url: '/api/2014/classes/fighter',
    },
    name: 'Action Surge (2 uses)',
    level: 17,
    prerequisites: [],
    desc: [
      'Starting at 2nd level, you can push yourself beyond your normal limits for a moment. On your turn, you can take one additional action on top of your regular action and a possible bonus action.',
      'Once you use this feature, you must finish a short or long rest before you can use it again. Starting at 17th level, you can use it twice before a rest, but only once on the same turn.',
    ],
    url: '/api/2014/features/action-surge-2-uses',
  },
  'indomitable-3-uses': {
    index: 'indomitable-3-uses',
    class: {
      index: 'fighter',
      name: 'Fighter',
      url: '/api/2014/classes/fighter',
    },
    name: 'Indomitable (3 uses)',
    level: 17,
    prerequisites: [],
    desc: [
      "Beginning at 9th level, you can reroll a saving throw that you fail. If you do so, you must use the new roll, and you can't use this feature again until you finish a long rest. You can use this feature twice between long rests starting at 13th level and three times between long rests starting at 17th level.",
    ],
    url: '/api/2014/features/indomitable-3-uses',
  },
  'martial-archetype-improvement-4': {
    index: 'martial-archetype-improvement-4',
    class: {
      index: 'fighter',
      name: 'Fighter',
      url: '/api/2014/classes/fighter',
    },
    name: 'Martial Archetype feature',
    level: 18,
    prerequisites: [],
    desc: [
      'At 3rd level, you choose an archetype that you strive to emulate in your combat styles and techniques, such as Champion. The archetype you choose grants you features at 3rd level and again at 7th, 10th, 15th, and 18th level.',
    ],
    url: '/api/2014/features/martial-archetype-improvement-4',
  },
  survivor: {
    index: 'survivor',
    class: {
      index: 'fighter',
      name: 'Fighter',
      url: '/api/2014/classes/fighter',
    },
    subclass: {
      index: 'champion',
      name: 'Champion',
      url: '/api/2014/subclasses/champion',
    },
    name: 'Survivor',
    level: 18,
    prerequisites: [],
    desc: [
      "At 18th level, you attain the pinnacle of resilience in battle. At the start of each of your turns, you regain hit points equal to 5 + your Constitution modifier if you have no more than half of your hit points left. You don't gain this benefit if you have 0 hit points.",
    ],
    url: '/api/2014/features/survivor',
  },
  'fighter-ability-score-improvement-7': {
    index: 'fighter-ability-score-improvement-7',
    class: {
      index: 'fighter',
      name: 'Fighter',
      url: '/api/2014/classes/fighter',
    },
    name: 'Ability Score Improvement',
    level: 19,
    prerequisites: [],
    desc: [
      "When you reach 4th level, and again at 6th, 8th, 12th, 14th, 16th, and 19th level, you can increase one ability score of your choice by 2, or you can increase two ability scores of your choice by 1. As normal, you can't increase an ability score above 20 using this feature.",
    ],
    url: '/api/2014/features/fighter-ability-score-improvement-7',
  },
  'extra-attack-3': {
    index: 'extra-attack-3',
    class: {
      index: 'fighter',
      name: 'Fighter',
      url: '/api/2014/classes/fighter',
    },
    name: 'Extra Attack (3)',
    level: 20,
    prerequisites: [],
    desc: [
      'Beginning at 5th level, you can attack twice, instead of once, whenever you take the Attack action on your turn. The number of attacks increases to three when you reach 11th level in this class and to four when you reach 20th level in this class.',
    ],
    url: '/api/2014/features/extra-attack-3',
  },
  'monk-unarmored-defense': {
    index: 'monk-unarmored-defense',
    class: {
      index: 'monk',
      name: 'Monk',
      url: '/api/2014/classes/monk',
    },
    name: 'Unarmored Defense',
    level: 1,
    prerequisites: [],
    desc: [
      'Beginning at 1st level, while you are wearing no armor and not wielding a shield, your AC equals 10 + your Dexterity modifier + your Wisdom modifier.',
    ],
    url: '/api/2014/features/monk-unarmored-defense',
  },
  'martial-arts': {
    index: 'martial-arts',
    class: {
      index: 'monk',
      name: 'Monk',
      url: '/api/2014/classes/monk',
    },
    name: 'Martial Arts',
    level: 1,
    prerequisites: [],
    desc: [
      "At 1st level, your practice of martial arts gives you mastery of combat styles that use unarmed strikes and monk weapons, which are shortswords and any simple melee weapons that don't have the two- handed or heavy property.",
      "You gain the following benefits while you are unarmed or wielding only monk weapons and you aren't wearing armor or wielding a shield:",
      '- You can use Dexterity instead of Strength for the attack and damage rolls of your unarmed strikes and monk weapons.',
      '- You can roll a d4 in place of the normal damage of your unarmed strike or monk weapon. This die changes as you gain monk levels, as shown in the Martial Arts column of Table: The Monk.',
      "- When you use the Attack action with an unarmed strike or a monk weapon on your turn, you can make one unarmed strike as a bonus action. For example, if you take the Attack action and attack with a quarterstaff, you can also make an unarmed strike as a bonus action, assuming you haven't already taken a bonus action this turn.",
      'Certain monasteries use specialized forms of the monk weapons. For example, you might use a club that is two lengths of wood connected by a short chain (called a nunchaku) or a sickle with a shorter, straighter blade (called a kama). Whatever name you use for a monk weapon, you can use the game statistics provided for the weapon.',
    ],
    url: '/api/2014/features/martial-arts',
  },
  ki: {
    index: 'ki',
    class: {
      index: 'monk',
      name: 'Monk',
      url: '/api/2014/classes/monk',
    },
    name: 'Ki',
    level: 2,
    prerequisites: [],
    desc: [
      'Starting at 2nd level, your training allows you to harness the mystic energy of ki. Your access to this energy is represented by a number of ki points. Your monk level determines the number of points you have, as shown in the Ki Points column of Table: The Monk.',
      'You can spend these points to fuel various ki features. You start knowing three such features: Flurry of Blows, Patient Defense, and Step of the Wind. You learn more ki features as you gain levels in this class.',
      'When you spend a ki point, it is unavailable until you finish a short or long rest, at the end of which you draw all of your expended ki back into yourself. You must spend at least 30 minutes of the rest meditating to regain your ki points.',
      "Some of your ki features require your target to make a saving throw to resist the feature's effects. The saving throw DC is calculated as follows:",
      'Ki save DC = 8 + your proficiency bonus + your Wisdom modifier',
    ],
    url: '/api/2014/features/ki',
  },
  'flurry-of-blows': {
    index: 'flurry-of-blows',
    class: {
      index: 'monk',
      name: 'Monk',
      url: '/api/2014/classes/monk',
    },
    name: 'Flurry of Blows',
    level: 2,
    prerequisites: [],
    desc: [
      'Immediately after you take the Attack action on your turn, you can spend 1 ki point to make two unarmed strikes as a bonus action.',
    ],
    url: '/api/2014/features/flurry-of-blows',
  },
  'patient-defense': {
    index: 'patient-defense',
    class: {
      index: 'monk',
      name: 'Monk',
      url: '/api/2014/classes/monk',
    },
    name: 'Patient Defense',
    level: 2,
    prerequisites: [],
    desc: [
      'You can spend 1 ki point to take the Dodge action as a bonus action on your turn.',
    ],
    url: '/api/2014/features/patient-defense',
  },
  'step-of-the-wind': {
    index: 'step-of-the-wind',
    class: {
      index: 'monk',
      name: 'Monk',
      url: '/api/2014/classes/monk',
    },
    name: 'Step of the Wind',
    level: 2,
    prerequisites: [],
    desc: [
      'You can spend 1 ki point to take the Disengage or Dash action as a bonus action on your turn, and your jump distance is doubled for the turn.',
    ],
    url: '/api/2014/features/step-of-the-wind',
  },
  'unarmored-movement-1': {
    index: 'unarmored-movement-1',
    class: {
      index: 'monk',
      name: 'Monk',
      url: '/api/2014/classes/monk',
    },
    name: 'Unarmored Movement',
    level: 2,
    prerequisites: [],
    desc: [
      'Starting at 2nd level, your speed increases by 10 feet while you are not wearing armor or wielding a shield. This bonus increases when you reach certain monk levels, as shown in Table: The Monk.',
      'At 9th level, you gain the ability to move along vertical surfaces and across liquids on your turn without falling during the move.',
    ],
    url: '/api/2014/features/unarmored-movement-1',
  },
  'monastic-tradition': {
    index: 'monastic-tradition',
    class: {
      index: 'monk',
      name: 'Monk',
      url: '/api/2014/classes/monk',
    },
    name: 'Monastic Tradition',
    level: 3,
    prerequisites: [],
    desc: [
      'When you reach 3rd level, you commit yourself to a monastic tradition, such as the Way of the Open Hand. Your tradition grants you features at 3rd level and again at 6th, 11th, and 17th level.',
    ],
    url: '/api/2014/features/monastic-tradition',
  },
  'deflect-missiles': {
    index: 'deflect-missiles',
    class: {
      index: 'monk',
      name: 'Monk',
      url: '/api/2014/classes/monk',
    },
    name: 'Deflect Missiles',
    level: 3,
    prerequisites: [],
    desc: [
      'Starting at 3rd level, you can use your reaction to deflect or catch the missile when you are hit by a ranged weapon attack. When you do so, the damage you take from the attack is reduced by 1d10 + your Dexterity modifier + your monk level.',
      'If you reduce the damage to 0, you can catch the missile if it is small enough for you to hold in one hand and you have at least one hand free. If you catch a missile in this way, you can spend 1 ki point to make a ranged attack with the weapon or piece of ammunition you just caught, as part of the same reaction. You make this attack with proficiency, regardless of your weapon proficiencies, and the missile counts as a monk weapon for the attack, which has a normal range of 20 feet and a long range of 60 feet.',
    ],
    url: '/api/2014/features/deflect-missiles',
  },
  'open-hand-technique': {
    index: 'open-hand-technique',
    class: {
      index: 'monk',
      name: 'Monk',
      url: '/api/2014/classes/monk',
    },
    subclass: {
      index: 'open-hand',
      name: 'Open Hand',
      url: '/api/2014/subclasses/open-hand',
    },
    name: 'Open Hand Technique',
    level: 3,
    prerequisites: [],
    desc: [
      "Starting when you choose this tradition at 3rd level, you can manipulate your enemy's ki when you harness your own. Whenever you hit a creature with one of the attacks granted by your Flurry of Blows, you can impose one of the following effects on that target:",
      '- It must succeed on a Dexterity saving throw or be knocked prone.',
      '- It must make a Strength saving throw. If it fails, you can push it up to 15 feet away from you.',
      "- It can't take reactions until the end of your next turn.",
    ],
    url: '/api/2014/features/open-hand-technique',
  },
  'monk-ability-score-improvement-1': {
    index: 'monk-ability-score-improvement-1',
    class: {
      index: 'monk',
      name: 'Monk',
      url: '/api/2014/classes/monk',
    },
    name: 'Ability Score Improvement',
    level: 4,
    prerequisites: [],
    desc: [
      "When you reach 4th level, and again at 8th, 12th, 16th, and 19th level, you can increase one ability score of your choice by 2, or you can increase two ability scores of your choice by 1. As normal, you can't increase an ability score above 20 using this feature.",
    ],
    url: '/api/2014/features/monk-ability-score-improvement-1',
  },
  'slow-fall': {
    index: 'slow-fall',
    class: {
      index: 'monk',
      name: 'Monk',
      url: '/api/2014/classes/monk',
    },
    name: 'Slow Fall',
    level: 4,
    prerequisites: [],
    desc: [
      'Beginning at 4th level, you can use your reaction when you fall to reduce any falling damage you take by an amount equal to five times your monk level.',
    ],
    url: '/api/2014/features/slow-fall',
  },
  'monk-extra-attack': {
    index: 'monk-extra-attack',
    class: {
      index: 'monk',
      name: 'Monk',
      url: '/api/2014/classes/monk',
    },
    name: 'Extra Attack',
    level: 5,
    prerequisites: [],
    desc: [
      'Beginning at 5th level, you can attack twice, instead of once, whenever you take the Attack action on your turn.',
    ],
    url: '/api/2014/features/monk-extra-attack',
  },
  'stunning-strike': {
    index: 'stunning-strike',
    class: {
      index: 'monk',
      name: 'Monk',
      url: '/api/2014/classes/monk',
    },
    name: 'Stunning Strike',
    level: 5,
    prerequisites: [],
    desc: [
      "Starting at 5th level, you can interfere with the flow of ki in an opponent's body. When you hit another creature with a melee weapon attack, you can spend 1 ki point to attempt a stunning strike. The target must succeed on a Constitution saving throw or be stunned until the end of your next turn.",
    ],
    url: '/api/2014/features/stunning-strike',
  },
  'ki-empowered-strikes': {
    index: 'ki-empowered-strikes',
    class: {
      index: 'monk',
      name: 'Monk',
      url: '/api/2014/classes/monk',
    },
    name: 'Ki Empowered Strikes',
    level: 6,
    prerequisites: [],
    desc: [
      'Starting at 6th level, your unarmed strikes count as magical for the purpose of overcoming resistance and immunity to nonmagical attacks and damage.',
    ],
    url: '/api/2014/features/ki-empowered-strikes',
  },
  'monastic-tradition-improvement-1': {
    index: 'monastic-tradition-improvement-1',
    class: {
      index: 'monk',
      name: 'Monk',
      url: '/api/2014/classes/monk',
    },
    name: 'Monastic Tradition feature',
    level: 6,
    prerequisites: [],
    desc: [
      'When you reach 3rd level, you commit yourself to a monastic tradition, such as the Way of the Open Hand. Your tradition grants you features at 3rd level and again at 6th, 11th, and 17th level.',
    ],
    url: '/api/2014/features/monastic-tradition-improvement-1',
  },
  'wholeness-of-body': {
    index: 'wholeness-of-body',
    class: {
      index: 'monk',
      name: 'Monk',
      url: '/api/2014/classes/monk',
    },
    subclass: {
      index: 'open-hand',
      name: 'Open Hand',
      url: '/api/2014/subclasses/open-hand',
    },
    name: 'Wholeness of Body',
    level: 6,
    prerequisites: [],
    desc: [
      'At 6th level, you gain the ability to heal yourself. As an action, you can regain hit points equal to three times your monk level. You must finish a long rest before you can use this feature again.',
    ],
    url: '/api/2014/features/wholeness-of-body',
  },
  'monk-evasion': {
    index: 'monk-evasion',
    class: {
      index: 'monk',
      name: 'Monk',
      url: '/api/2014/classes/monk',
    },
    name: 'Evasion',
    level: 7,
    prerequisites: [],
    desc: [
      "At 7th level, your instinctive agility lets you dodge out of the way of certain area effects, such as a blue dragon's lightning breath or a fireball spell. When you are subjected to an effect that allows you to make a Dexterity saving throw to take only half damage, you instead take no damage if you succeed on the saving throw, and only half damage if you fail.",
    ],
    url: '/api/2014/features/monk-evasion',
  },
  'stillness-of-mind': {
    index: 'stillness-of-mind',
    class: {
      index: 'monk',
      name: 'Monk',
      url: '/api/2014/classes/monk',
    },
    name: 'Stillness of Mind',
    level: 7,
    prerequisites: [],
    desc: [
      'Starting at 7th level, you can use your action to end one effect on yourself that is causing you to be charmed or frightened.',
    ],
    url: '/api/2014/features/stillness-of-mind',
  },
  'monk-ability-score-improvement-2': {
    index: 'monk-ability-score-improvement-2',
    class: {
      index: 'monk',
      name: 'Monk',
      url: '/api/2014/classes/monk',
    },
    name: 'Ability Score Improvement',
    level: 8,
    prerequisites: [],
    desc: [
      "When you reach 4th level, and again at 8th, 12th, 16th, and 19th level, you can increase one ability score of your choice by 2, or you can increase two ability scores of your choice by 1. As normal, you can't increase an ability score above 20 using this feature.",
    ],
    url: '/api/2014/features/monk-ability-score-improvement-2',
  },
  'unarmored-movement-2': {
    index: 'unarmored-movement-2',
    class: {
      index: 'monk',
      name: 'Monk',
      url: '/api/2014/classes/monk',
    },
    name: 'Unarmored Movement',
    level: 9,
    prerequisites: [],
    desc: [
      'Starting at 2nd level, your speed increases by 10 feet while you are not wearing armor or wielding a shield. This bonus increases when you reach certain monk levels, as shown in Table: The Monk.',
      'At 9th level, you gain the ability to move along vertical surfaces and across liquids on your turn without falling during the move.',
    ],
    url: '/api/2014/features/unarmored-movement-2',
  },
  'purity-of-body': {
    index: 'purity-of-body',
    class: {
      index: 'monk',
      name: 'Monk',
      url: '/api/2014/classes/monk',
    },
    name: 'Purity of Body',
    level: 10,
    prerequisites: [],
    desc: [
      'At 10th level, your mastery of the ki flowing through you makes you immune to disease and poison.',
    ],
    url: '/api/2014/features/purity-of-body',
  },
  'monastic-tradition-improvement-2': {
    index: 'monastic-tradition-improvement-2',
    class: {
      index: 'monk',
      name: 'Monk',
      url: '/api/2014/classes/monk',
    },
    name: 'Monastic Tradition feature',
    level: 11,
    prerequisites: [],
    desc: [
      'When you reach 3rd level, you commit yourself to a monastic tradition, such as the Way of the Open Hand. Your tradition grants you features at 3rd level and again at 6th, 11th, and 17th level.',
    ],
    url: '/api/2014/features/monastic-tradition-improvement-2',
  },
  tranquility: {
    index: 'tranquility',
    class: {
      index: 'monk',
      name: 'Monk',
      url: '/api/2014/classes/monk',
    },
    subclass: {
      index: 'open-hand',
      name: 'Open Hand',
      url: '/api/2014/subclasses/open-hand',
    },
    name: 'Tranquility',
    level: 11,
    prerequisites: [],
    desc: [
      'Beginning at 11th level, you can enter a special meditation that surrounds you with an aura of peace. At the end of a long rest, you gain the effect of a sanctuary spell that lasts until the start of your next long rest (the spell can end early as normal). The saving throw DC for the spell equals 8 + your Wisdom modifier + your proficiency bonus.',
    ],
    url: '/api/2014/features/tranquility',
  },
  'monk-ability-score-improvement-3': {
    index: 'monk-ability-score-improvement-3',
    class: {
      index: 'monk',
      name: 'Monk',
      url: '/api/2014/classes/monk',
    },
    name: 'Ability Score Improvement',
    level: 12,
    prerequisites: [],
    desc: [
      "When you reach 4th level, and again at 8th, 12th, 16th, and 19th level, you can increase one ability score of your choice by 2, or you can increase two ability scores of your choice by 1. As normal, you can't increase an ability score above 20 using this feature.",
    ],
    url: '/api/2014/features/monk-ability-score-improvement-3',
  },
  'tongue-of-the-sun-and-moon': {
    index: 'tongue-of-the-sun-and-moon',
    class: {
      index: 'monk',
      name: 'Monk',
      url: '/api/2014/classes/monk',
    },
    name: 'Tongue of the Sun and Moon',
    level: 13,
    prerequisites: [],
    desc: [
      'Starting at 13th level, you learn to touch the ki of other minds so that you understand all spoken languages. Moreover, any creature that can understand a language can understand what you say.',
    ],
    url: '/api/2014/features/tongue-of-the-sun-and-moon',
  },
  'diamond-soul': {
    index: 'diamond-soul',
    class: {
      index: 'monk',
      name: 'Monk',
      url: '/api/2014/classes/monk',
    },
    name: 'Diamond Soul',
    level: 14,
    prerequisites: [],
    desc: [
      'Beginning at 14th level, your mastery of ki grants you proficiency in all saving throws.',
      'Additionally, whenever you make a saving throw and fail, you can spend 1 ki point to reroll it and take the second result.',
    ],
    url: '/api/2014/features/diamond-soul',
  },
  'monk-timeless-body': {
    index: 'monk-timeless-body',
    class: {
      index: 'monk',
      name: 'Monk',
      url: '/api/2014/classes/monk',
    },
    name: 'Timeless Body',
    level: 15,
    prerequisites: [],
    desc: [
      "At 15th level, your ki sustains you so that you suffer none of the frailty of old age, and you can't be aged magically. You can still die of old age, however. In addition, you no longer need food or water.",
    ],
    url: '/api/2014/features/monk-timeless-body',
  },
  'monk-ability-score-improvement-4': {
    index: 'monk-ability-score-improvement-4',
    class: {
      index: 'monk',
      name: 'Monk',
      url: '/api/2014/classes/monk',
    },
    name: 'Ability Score Improvement',
    level: 16,
    prerequisites: [],
    desc: [
      "When you reach 4th level, and again at 8th, 12th, 16th, and 19th level, you can increase one ability score of your choice by 2, or you can increase two ability scores of your choice by 1. As normal, you can't increase an ability score above 20 using this feature.",
    ],
    url: '/api/2014/features/monk-ability-score-improvement-4',
  },
  'monastic-tradition-improvement-3': {
    index: 'monastic-tradition-improvement-3',
    class: {
      index: 'monk',
      name: 'Monk',
      url: '/api/2014/classes/monk',
    },
    name: 'Monastic Tradition feature',
    level: 17,
    prerequisites: [],
    desc: [
      'When you reach 3rd level, you commit yourself to a monastic tradition, such as the Way of the Open Hand. Your tradition grants you features at 3rd level and again at 6th, 11th, and 17th level.',
    ],
    url: '/api/2014/features/monastic-tradition-improvement-3',
  },
  'quivering-palm': {
    index: 'quivering-palm',
    class: {
      index: 'monk',
      name: 'Monk',
      url: '/api/2014/classes/monk',
    },
    subclass: {
      index: 'open-hand',
      name: 'Open Hand',
      url: '/api/2014/subclasses/open-hand',
    },
    name: 'Quivering Palm',
    level: 17,
    prerequisites: [],
    desc: [
      "At 17th level, you gain the ability to set up lethal vibrations in someone's body. When you hit a creature with an unarmed strike, you can spend 3 ki points to start these imperceptible vibrations, which last for a number of days equal to your monk level. The vibrations are harmless unless you use your action to end them. To do so, you and the target must be on the same plane of existence. When you use this action, the creature must make a Constitution saving throw. If it fails, it is reduced to 0 hit points. If it succeeds, it takes 10d10 necrotic damage.",
      'You can have only one creature under the effect of this feature at a time. You can choose to end the vibrations harmlessly without using an action.',
    ],
    url: '/api/2014/features/quivering-palm',
  },
  'empty-body': {
    index: 'empty-body',
    class: {
      index: 'monk',
      name: 'Monk',
      url: '/api/2014/classes/monk',
    },
    name: 'Empty Body',
    level: 18,
    prerequisites: [],
    desc: [
      'Beginning at 18th level, you can use your action to spend 4 ki points to become invisible for 1 minute. During that time, you also have resistance to all damage but force damage.',
      "Additionally, you can spend 8 ki points to cast the astral projection spell, without needing material components. When you do so, you can't take any other creatures with you.",
    ],
    url: '/api/2014/features/empty-body',
  },
  'monk-ability-score-improvement-5': {
    index: 'monk-ability-score-improvement-5',
    class: {
      index: 'monk',
      name: 'Monk',
      url: '/api/2014/classes/monk',
    },
    name: 'Ability Score Improvement',
    level: 19,
    prerequisites: [],
    desc: [
      "When you reach 4th level, and again at 8th, 12th, 16th, and 19th level, you can increase one ability score of your choice by 2, or you can increase two ability scores of your choice by 1. As normal, you can't increase an ability score above 20 using this feature.",
    ],
    url: '/api/2014/features/monk-ability-score-improvement-5',
  },
  'perfect-self': {
    index: 'perfect-self',
    class: {
      index: 'monk',
      name: 'Monk',
      url: '/api/2014/classes/monk',
    },
    name: 'Perfect Self',
    level: 20,
    prerequisites: [],
    desc: [
      'At 20th level, when you roll for initiative and have no ki points remaining, you regain 4 ki points.',
    ],
    url: '/api/2014/features/perfect-self',
  },
  'divine-sense': {
    index: 'divine-sense',
    class: {
      index: 'paladin',
      name: 'Paladin',
      url: '/api/2014/classes/paladin',
    },
    name: 'Divine Sense',
    level: 1,
    prerequisites: [],
    desc: [
      'The presence of strong evil registers on your senses like a noxious odor, and powerful good rings like heavenly music in your ears. As an action, you can open your awareness to detect such forces. Until the end of your next turn, you know the location of any celestial, fiend, or undead within 60 feet of you that is not behind total cover. You know the type (celestial, fiend, or undead) of any being whose presence you sense, but not its identity. Within the same radius, you also detect the presence of any place or object that has been consecrated or desecrated, as with the hallow spell.',
      'You can use this feature a number of times equal to 1 + your Charisma modifier. When you finish a long rest, you regain all expended uses.',
    ],
    url: '/api/2014/features/divine-sense',
  },
  'lay-on-hands': {
    index: 'lay-on-hands',
    class: {
      index: 'paladin',
      name: 'Paladin',
      url: '/api/2014/classes/paladin',
    },
    name: 'Lay on Hands',
    level: 1,
    prerequisites: [],
    desc: [
      'Your blessed touch can heal wounds. You have a pool of healing power that replenishes when you take a long rest. With that pool, you can restore a total number of hit points equal to your paladin level x 5.',
      'As an action, you can touch a creature and draw power from the pool to restore a number of hit points to that creature, up to the maximum amount remaining in your pool.',
      'Alternatively, you can expend 5 hit points from your pool of healing to cure the target of one disease or neutralize one poison affecting it. You can cure multiple diseases and neutralize multiple poisons with a single use of Lay on Hands, expending hit points separately for each one.',
      'This feature has no effect on undead and constructs.',
    ],
    url: '/api/2014/features/lay-on-hands',
  },
  'paladin-fighting-style': {
    index: 'paladin-fighting-style',
    class: {
      index: 'paladin',
      name: 'Paladin',
      url: '/api/2014/classes/paladin',
    },
    name: 'Fighting Style',
    level: 2,
    prerequisites: [],
    desc: [
      "At 2nd level, you adopt a style of fighting as your specialty. Choose one of the following options. You can't take a Fighting Style option more than once, even if you later get to choose again.",
    ],
    feature_specific: {
      subfeature_options: {
        choose: 1,
        type: 'feature',
        from: {
          option_set_type: 'options_array',
          options: [
            {
              option_type: 'reference',
              item: {
                index: 'fighting-style-defense',
                name: 'Fighting Style: Defense',
                url: '/api/2014/features/fighting-style-defense',
              },
            },
            {
              option_type: 'reference',
              item: {
                index: 'fighting-style-dueling',
                name: 'Fighting Style: Dueling',
                url: '/api/2014/features/fighting-style-dueling',
              },
            },
            {
              option_type: 'reference',
              item: {
                index: 'fighting-style-great-weapon-fighting',
                name: 'Fighting Style: Great Weapon Fighting',
                url: '/api/2014/features/fighting-style-great-weapon-fighting',
              },
            },
            {
              option_type: 'reference',
              item: {
                index: 'fighting-style-protection',
                name: 'Fighting Style: Protection',
                url: '/api/2014/features/fighting-style-protection',
              },
            },
          ],
        },
      },
    },
    url: '/api/2014/features/paladin-fighting-style',
  },
  'fighting-style-defense': {
    index: 'fighting-style-defense',
    class: {
      index: 'paladin',
      name: 'Paladin',
      url: '/api/2014/classes/paladin',
    },
    name: 'Fighting Style: Defense',
    level: 2,
    prerequisites: [],
    desc: ['While you are wearing armor, you gain a +1 bonus to AC.'],
    parent: {
      index: 'paladin-fighting-style',
      name: 'Fighting Style',
      url: '/api/2014/features/paladin-fighting-style',
    },
    url: '/api/2014/features/fighting-style-defense',
  },
  'fighting-style-dueling': {
    index: 'fighting-style-dueling',
    class: {
      index: 'paladin',
      name: 'Paladin',
      url: '/api/2014/classes/paladin',
    },
    name: 'Fighting Style: Dueling',
    level: 2,
    prerequisites: [],
    desc: [
      'When you are wielding a melee weapon in one hand and no other weapons, you gain a +2 bonus to damage rolls with that weapon.',
    ],
    parent: {
      index: 'paladin-fighting-style',
      name: 'Fighting Style',
      url: '/api/2014/features/paladin-fighting-style',
    },
    url: '/api/2014/features/fighting-style-dueling',
  },
  'fighting-style-great-weapon-fighting': {
    index: 'fighting-style-great-weapon-fighting',
    class: {
      index: 'paladin',
      name: 'Paladin',
      url: '/api/2014/classes/paladin',
    },
    name: 'Fighting Style: Great Weapon Fighting',
    level: 2,
    prerequisites: [],
    desc: [
      'When you roll a 1 or 2 on a damage die for an attack you make with a melee weapon that you are wielding with two hands, you can reroll the die and must use the new roll. The weapon must have the two-handed or versatile property for you to gain this benefit.',
    ],
    parent: {
      index: 'paladin-fighting-style',
      name: 'Fighting Style',
      url: '/api/2014/features/paladin-fighting-style',
    },
    url: '/api/2014/features/fighting-style-great-weapon-fighting',
  },
  'fighting-style-protection': {
    index: 'fighting-style-protection',
    class: {
      index: 'paladin',
      name: 'Paladin',
      url: '/api/2014/classes/paladin',
    },
    name: 'Fighting Style: Protection',
    level: 2,
    prerequisites: [],
    desc: [
      'When a creature you can see attacks a target other than you that is within 5 feet of you, you can use your reaction to impose disadvantage on the attack roll. You must be wielding a shield.',
    ],
    parent: {
      index: 'paladin-fighting-style',
      name: 'Fighting Style',
      url: '/api/2014/features/paladin-fighting-style',
    },
    url: '/api/2014/features/fighting-style-protection',
  },
  'spellcasting-paladin': {
    index: 'spellcasting-paladin',
    class: {
      index: 'paladin',
      name: 'Paladin',
      url: '/api/2014/classes/paladin',
    },
    name: 'Spellcasting: Paladin',
    level: 2,
    prerequisites: [],
    desc: [
      'By 2nd level, you have learned to draw on divine magic through meditation and prayer to cast spells as a cleric does.',
    ],
    reference: '/api/2014/classes/paladin/spellcasting',
    url: '/api/2014/features/spellcasting-paladin',
  },
  'divine-smite': {
    index: 'divine-smite',
    class: {
      index: 'paladin',
      name: 'Paladin',
      url: '/api/2014/classes/paladin',
    },
    name: 'Divine Smite',
    level: 2,
    prerequisites: [],
    desc: [
      "Starting at 2nd level, when you hit a creature with a melee weapon attack, you can expend one spell slot to deal radiant damage to the target, in addition to the weapon's damage. The extra damage is 2d8 for a 1st-level spell slot, plus 1d8 for each spell level higher than 1st, to a maximum of 5d8. The damage increases by 1d8 if the target is an undead or a fiend.",
    ],
    url: '/api/2014/features/divine-smite',
  },
  'divine-health': {
    index: 'divine-health',
    class: {
      index: 'paladin',
      name: 'Paladin',
      url: '/api/2014/classes/paladin',
    },
    name: 'Divine Health',
    level: 3,
    prerequisites: [],
    desc: [
      'By 3rd level, the divine magic flowing through you makes you immune to disease.',
    ],
    url: '/api/2014/features/divine-health',
  },
  'sacred-oath': {
    index: 'sacred-oath',
    class: {
      index: 'paladin',
      name: 'Paladin',
      url: '/api/2014/classes/paladin',
    },
    name: 'Sacred Oath',
    level: 3,
    prerequisites: [],
    desc: [
      'When you reach 3rd level, you swear the oath that binds you as a paladin forever. Up to this time you have been in a preparatory stage, committed to the path but not yet sworn to it. Now you choose an oath, such as the Oath of Devotion.',
      'Your choice grants you features at 3rd level and again at 7th, 15th, and 20th level. Those features include oath spells and the Channel Divinity feature.',
    ],
    url: '/api/2014/features/sacred-oath',
  },
  'oath-spells': {
    index: 'oath-spells',
    class: {
      index: 'paladin',
      name: 'Paladin',
      url: '/api/2014/classes/paladin',
    },
    name: 'Oath Spells',
    level: 3,
    prerequisites: [],
    desc: [
      "Each oath has a list of associated spells. You gain access to these spells at the levels specified in the oath description. Once you gain access to an oath spell, you always have it prepared. Oath spells don't count against the number of spells you can prepare each day.",
      "If you gain an oath spell that doesn't appear on the paladin spell list, the spell is nonetheless a paladin spell for you.",
    ],
    url: '/api/2014/features/oath-spells',
  },
  'channel-divinity': {
    index: 'channel-divinity',
    class: {
      index: 'paladin',
      name: 'Paladin',
      url: '/api/2014/classes/paladin',
    },
    name: 'Channel Divinity',
    level: 3,
    prerequisites: [],
    desc: [
      'Your oath allows you to channel divine energy to fuel magical effects. Each Channel Divinity option provided by your oath explains how to use it.',
      'When you use your Channel Divinity, you choose which option to use. You must then finish a short or long rest to use your Channel Divinity again.',
      'Some Channel Divinity effects require saving throws. When you use such an effect from this class, the DC equals your paladin spell save DC.',
    ],
    url: '/api/2014/features/channel-divinity',
  },
  'channel-divinity-sacred-weapon': {
    index: 'channel-divinity-sacred-weapon',
    class: {
      index: 'paladin',
      name: 'Paladin',
      url: '/api/2014/classes/paladin',
    },
    subclass: {
      index: 'devotion',
      name: 'Devotion',
      url: '/api/2014/subclasses/devotion',
    },
    name: 'Channel Divinity: Sacred Weapon',
    level: 3,
    prerequisites: [],
    desc: [
      'As an action, you can imbue one weapon that you are holding with positive energy, using your Channel Divinity. For 1 minute, you add your Charisma modifier to attack rolls made with that weapon (with a minimum bonus of +1). The weapon also emits bright light in a 20-foot radius and dim light 20 feet beyond that. If the weapon is not already magical, it becomes magical for the duration.',
      'You can end this effect on your turn as part of any other action. If you are no longer holding or carrying this weapon, or if you fall unconscious, this effect ends.',
    ],
    url: '/api/2014/features/channel-divinity-sacred-weapon',
  },
  'channel-divinity-turn-the-unholy': {
    index: 'channel-divinity-turn-the-unholy',
    class: {
      index: 'paladin',
      name: 'Paladin',
      url: '/api/2014/classes/paladin',
    },
    subclass: {
      index: 'devotion',
      name: 'Devotion',
      url: '/api/2014/subclasses/devotion',
    },
    name: 'Channel Divinity: Turn the Unholy',
    level: 3,
    prerequisites: [],
    desc: [
      'As an action, you present your holy symbol and speak a prayer censuring fiends and undead, using your Channel Divinity. Each fiend or undead that can see or hear you within 30 feet of you must make a Wisdom saving throw. If the creature fails its saving throw, it is turned for 1 minute or until it takes damage.',
      "A turned creature must spend its turns trying to move as far away from you as it can, and it can't willingly move to a space within 30 feet of you. It also can't take reactions. For its action, it can use only the Dash action or try to escape from an effect that prevents it from moving. If there's nowhere to move, the creature can use the Dodge action.",
    ],
    url: '/api/2014/features/channel-divinity-turn-the-unholy',
  },
  'paladin-ability-score-improvement-1': {
    index: 'paladin-ability-score-improvement-1',
    class: {
      index: 'paladin',
      name: 'Paladin',
      url: '/api/2014/classes/paladin',
    },
    name: 'Ability Score Improvement',
    level: 4,
    prerequisites: [],
    desc: [
      "When you reach 4th level, and again at 8th, 12th, 16th, and 19th level, you can increase one ability score of your choice by 2, or you can increase two ability scores of your choice by 1. As normal, you can't increase an ability score above 20 using this feature.",
    ],
    url: '/api/2014/features/paladin-ability-score-improvement-1',
  },
  'paladin-extra-attack': {
    index: 'paladin-extra-attack',
    class: {
      index: 'paladin',
      name: 'Paladin',
      url: '/api/2014/classes/paladin',
    },
    name: 'Extra Attack',
    level: 5,
    prerequisites: [],
    desc: [
      'Beginning at 5th level, you can attack twice, instead of once, whenever you take the Attack action on your turn.',
    ],
    url: '/api/2014/features/paladin-extra-attack',
  },
  'aura-of-protection': {
    index: 'aura-of-protection',
    class: {
      index: 'paladin',
      name: 'Paladin',
      url: '/api/2014/classes/paladin',
    },
    name: 'Aura of Protection',
    level: 6,
    prerequisites: [],
    desc: [
      'Starting at 6th level, whenever you or a friendly creature within 10 feet of you must make a saving throw, the creature gains a bonus to the saving throw equal to your Charisma modifier (with a minimum bonus of +1). You must be conscious to grant this bonus.',
      'At 18th level, the range of this aura increases to 30 feet.',
    ],
    url: '/api/2014/features/aura-of-protection',
  },
  'sacred-oath-improvement-1': {
    index: 'sacred-oath-improvement-1',
    class: {
      index: 'paladin',
      name: 'Paladin',
      url: '/api/2014/classes/paladin',
    },
    name: 'Sacred Oath feature',
    level: 7,
    prerequisites: [],
    desc: [
      'When you reach 3rd level, you swear the oath that binds you as a paladin forever. Up to this time you have been in a preparatory stage, committed to the path but not yet sworn to it. Now you choose an oath, such as the Oath of Devotion.',
      'Your choice grants you features at 3rd level and again at 7th, 15th, and 20th level. Those features include oath spells and the Channel Divinity feature.',
    ],
    url: '/api/2014/features/sacred-oath-improvement-1',
  },
  'aura-of-devotion': {
    index: 'aura-of-devotion',
    class: {
      index: 'paladin',
      name: 'Paladin',
      url: '/api/2014/classes/paladin',
    },
    subclass: {
      index: 'devotion',
      name: 'Devotion',
      url: '/api/2014/subclasses/devotion',
    },
    name: 'Aura of Devotion',
    level: 7,
    prerequisites: [],
    desc: [
      "Starting at 7th level, you and friendly creatures within 10 feet of you can't be charmed while you are conscious.",
      'At 18th level, the range of this aura increases to 30 feet.',
    ],
    url: '/api/2014/features/aura-of-devotion',
  },
  'paladin-ability-score-improvement-2': {
    index: 'paladin-ability-score-improvement-2',
    class: {
      index: 'paladin',
      name: 'Paladin',
      url: '/api/2014/classes/paladin',
    },
    name: 'Ability Score Improvement',
    level: 8,
    prerequisites: [],
    desc: [
      "When you reach 4th level, and again at 8th, 12th, 16th, and 19th level, you can increase one ability score of your choice by 2, or you can increase two ability scores of your choice by 1. As normal, you can't increase an ability score above 20 using this feature.",
    ],
    url: '/api/2014/features/paladin-ability-score-improvement-2',
  },
  'aura-of-courage': {
    index: 'aura-of-courage',
    class: {
      index: 'paladin',
      name: 'Paladin',
      url: '/api/2014/classes/paladin',
    },
    name: 'Aura of Courage',
    level: 10,
    prerequisites: [],
    desc: [
      "Starting at 10th level, you and friendly creatures within 10 feet of you can't be frightened while you are conscious.",
      'At 18th level, the range of this aura increases to 30 feet.',
    ],
    url: '/api/2014/features/aura-of-courage',
  },
  'improved-divine-smite': {
    index: 'improved-divine-smite',
    class: {
      index: 'paladin',
      name: 'Paladin',
      url: '/api/2014/classes/paladin',
    },
    name: 'Improved Divine Smite',
    level: 11,
    prerequisites: [],
    desc: [
      'By 11th level, you are so suffused with righteous might that all your melee weapon strikes carry divine power with them. Whenever you hit a creature with a melee weapon, the creature takes an extra 1d8 radiant damage. If you also use your Divine Smite with an attack, you add this damage to the extra damage of your Divine Smite.',
    ],
    url: '/api/2014/features/improved-divine-smite',
  },
  'paladin-ability-score-improvement-3': {
    index: 'paladin-ability-score-improvement-3',
    class: {
      index: 'paladin',
      name: 'Paladin',
      url: '/api/2014/classes/paladin',
    },
    name: 'Ability Score Improvement',
    level: 12,
    prerequisites: [],
    desc: [
      "When you reach 4th level, and again at 8th, 12th, 16th, and 19th level, you can increase one ability score of your choice by 2, or you can increase two ability scores of your choice by 1. As normal, you can't increase an ability score above 20 using this feature.",
    ],
    url: '/api/2014/features/paladin-ability-score-improvement-3',
  },
  'cleansing-touch': {
    index: 'cleansing-touch',
    class: {
      index: 'paladin',
      name: 'Paladin',
      url: '/api/2014/classes/paladin',
    },
    name: 'Cleansing Touch',
    level: 14,
    prerequisites: [],
    desc: [
      'Beginning at 14th level, you can use your action to end one spell on yourself or on one willing creature that you touch.',
      'You can use this feature a number of times equal to your Charisma modifier (a minimum of once). You regain expended uses when you finish a long rest.',
    ],
    url: '/api/2014/features/cleansing-touch',
  },
  'sacred-oath-improvement-2': {
    index: 'sacred-oath-improvement-2',
    class: {
      index: 'paladin',
      name: 'Paladin',
      url: '/api/2014/classes/paladin',
    },
    name: 'Sacred Oath feature',
    level: 15,
    prerequisites: [],
    desc: [
      'When you reach 3rd level, you swear the oath that binds you as a paladin forever. Up to this time you have been in a preparatory stage, committed to the path but not yet sworn to it. Now you choose an oath, such as the Oath of Devotion.',
      'Your choice grants you features at 3rd level and again at 7th, 15th, and 20th level. Those features include oath spells and the Channel Divinity feature.',
    ],
    url: '/api/2014/features/sacred-oath-improvement-2',
  },
  'purity-of-spirit': {
    index: 'purity-of-spirit',
    class: {
      index: 'paladin',
      name: 'Paladin',
      url: '/api/2014/classes/paladin',
    },
    subclass: {
      index: 'devotion',
      name: 'Devotion',
      url: '/api/2014/subclasses/devotion',
    },
    name: 'Purity of Spirit',
    level: 15,
    prerequisites: [],
    desc: [
      'Beginning at 15th level, you are always under the effects of a protection from evil and good spell.',
    ],
    url: '/api/2014/features/purity-of-spirit',
  },
  'paladin-ability-score-improvement-4': {
    index: 'paladin-ability-score-improvement-4',
    class: {
      index: 'paladin',
      name: 'Paladin',
      url: '/api/2014/classes/paladin',
    },
    name: 'Ability Score Improvement',
    level: 16,
    prerequisites: [],
    desc: [
      "When you reach 4th level, and again at 8th, 12th, 16th, and 19th level, you can increase one ability score of your choice by 2, or you can increase two ability scores of your choice by 1. As normal, you can't increase an ability score above 20 using this feature.",
    ],
    url: '/api/2014/features/paladin-ability-score-improvement-4',
  },
  'aura-improvements': {
    index: 'aura-improvements',
    class: {
      index: 'paladin',
      name: 'Paladin',
      url: '/api/2014/classes/paladin',
    },
    name: 'Aura improvements',
    level: 18,
    prerequisites: [],
    desc: ['At 18th level, the range of your auras increase to 30 feet.'],
    url: '/api/2014/features/aura-improvements',
  },
  'paladin-ability-score-improvement-5': {
    index: 'paladin-ability-score-improvement-5',
    class: {
      index: 'paladin',
      name: 'Paladin',
      url: '/api/2014/classes/paladin',
    },
    name: 'Ability Score Improvement',
    level: 19,
    prerequisites: [],
    desc: [
      "When you reach 4th level, and again at 8th, 12th, 16th, and 19th level, you can increase one ability score of your choice by 2, or you can increase two ability scores of your choice by 1. As normal, you can't increase an ability score above 20 using this feature.",
    ],
    url: '/api/2014/features/paladin-ability-score-improvement-5',
  },
  'sacred-oath-improvement-3': {
    index: 'sacred-oath-improvement-3',
    class: {
      index: 'paladin',
      name: 'Paladin',
      url: '/api/2014/classes/paladin',
    },
    name: 'Sacred Oath feature',
    level: 20,
    prerequisites: [],
    desc: [
      'When you reach 3rd level, you swear the oath that binds you as a paladin forever. Up to this time you have been in a preparatory stage, committed to the path but not yet sworn to it. Now you choose an oath, such as the Oath of Devotion.',
      'Your choice grants you features at 3rd level and again at 7th, 15th, and 20th level. Those features include oath spells and the Channel Divinity feature.',
    ],
    url: '/api/2014/features/sacred-oath-improvement-3',
  },
  'holy-nimbus': {
    index: 'holy-nimbus',
    class: {
      index: 'paladin',
      name: 'Paladin',
      url: '/api/2014/classes/paladin',
    },
    subclass: {
      index: 'devotion',
      name: 'Devotion',
      url: '/api/2014/subclasses/devotion',
    },
    name: 'Holy Nimbus',
    level: 20,
    prerequisites: [],
    desc: [
      'At 20th level, as an action, you can emanate an aura of sunlight. For 1 minute, bright light shines from you in a 30-foot radius, and dim light shines 30 feet beyond that.',
      'Whenever an enemy creature starts its turn in the bright light, the creature takes 10 radiant damage.',
      'In addition, for the duration, you have advantage on saving throws against spells cast by fiends or undead.',
    ],
    url: '/api/2014/features/holy-nimbus',
  },
  'favored-enemy-1-type': {
    index: 'favored-enemy-1-type',
    class: {
      index: 'ranger',
      name: 'Ranger',
      url: '/api/2014/classes/ranger',
    },
    name: 'Favored Enemy (1 type)',
    level: 1,
    prerequisites: [],
    desc: [
      'Beginning at 1st level, you have significant experience studying, tracking, hunting, and even talking to a certain type of enemy.',
      'Choose a type of favored enemy: aberrations, beasts, celestials, constructs, dragons, elementals, fey, fiends, giants, monstrosities, oozes, plants, or undead. Alternatively, you can select two races of humanoid (such as gnolls and orcs) as favored enemies.',
      'You have advantage on Wisdom (Survival) checks to track your favored enemies, as well as on Intelligence checks to recall information about them.',
      'When you gain this feature, you also learn one language of your choice that is spoken by your favored enemies, if they speak one at all.',
      'You choose one additional favored enemy, as well as an associated language, at 6th and 14th level. As you gain levels, your choices should reflect the types of monsters you have encountered on your adventures.',
    ],
    feature_specific: {
      enemy_type_options: {
        desc: 'one enemy type',
        choose: 1,
        type: 'string',
        from: {
          option_set_type: 'options_array',
          options: [
            'aberrations',
            'beasts',
            'celestials',
            'constructs',
            'dragons',
            'elementals',
            'fey',
            'fiends',
            'giants',
            'monstrosities',
            'oozes',
            'plants',
            'undead',
            'humanoids',
          ],
        },
      },
    },
    url: '/api/2014/features/favored-enemy-1-type',
  },
  'natural-explorer-1-terrain-type': {
    index: 'natural-explorer-1-terrain-type',
    class: {
      index: 'ranger',
      name: 'Ranger',
      url: '/api/2014/classes/ranger',
    },
    name: 'Natural Explorer (1 terrain type)',
    level: 1,
    prerequisites: [],
    desc: [
      "You are particularly familiar with one type of natural environment and are adept at traveling and surviving in such regions. Choose one type of favored terrain: arctic, coast, desert, forest, grassland, mountain, or swamp. When you make an Intelligence or Wisdom check related to your favored terrain, your proficiency bonus is doubled if you are using a skill that you're proficient in.",
      'While traveling for an hour or more in your favored terrain, you gain the following benefits:',
      "- Difficult terrain doesn't slow your group's travel.",
      "- Your group can't become lost except by magical means.",
      '- Even when you are engaged in another activity while traveling (such as foraging, navigating, or tracking), you remain alert to danger.',
      '- If you are traveling alone, you can move stealthily at a normal pace.',
      '- When you forage, you find twice as much food as you normally would.',
      '- While tracking other creatures, you also learn their exact number, their sizes, and how long ago they passed through the area.',
      'You choose additional favored terrain types at 6th and 10th level.',
    ],
    feature_specific: {
      terrain_type_options: {
        desc: 'one terrain type',
        choose: 1,
        type: 'string',
        from: {
          option_set_type: 'options_array',
          options: [
            'arctic',
            'coast',
            'desert',
            'forest',
            'grassland',
            'mountain',
            'swamp',
          ],
        },
      },
    },
    url: '/api/2014/features/natural-explorer-1-terrain-type',
  },
  'ranger-fighting-style': {
    index: 'ranger-fighting-style',
    class: {
      index: 'ranger',
      name: 'Ranger',
      url: '/api/2014/classes/ranger',
    },
    name: 'Fighting Style',
    level: 2,
    prerequisites: [],
    desc: [
      "At 2nd level, you adopt a particular style of fighting as your specialty. Choose one of the following options. You can't take a Fighting Style option more than once, even if you later get to choose again.",
    ],
    feature_specific: {
      subfeature_options: {
        choose: 1,
        type: 'feature',
        from: {
          option_set_type: 'options_array',
          options: [
            {
              option_type: 'reference',
              item: {
                index: 'ranger-fighting-style-archery',
                name: 'Fighting Style: Archery',
                url: '/api/2014/features/ranger-fighting-style-archery',
              },
            },
            {
              option_type: 'reference',
              item: {
                index: 'ranger-fighting-style-defense',
                name: 'Fighting Style: Defense',
                url: '/api/2014/features/ranger-fighting-style-defense',
              },
            },
            {
              option_type: 'reference',
              item: {
                index: 'ranger-fighting-style-dueling',
                name: 'Fighting Style: Dueling',
                url: '/api/2014/features/ranger-fighting-style-dueling',
              },
            },
            {
              option_type: 'reference',
              item: {
                index: 'ranger-fighting-style-two-weapon-fighting',
                name: 'Fighting Style: Two-Weapon Fighting',
                url: '/api/2014/features/ranger-fighting-style-two-weapon-fighting',
              },
            },
          ],
        },
      },
    },
    url: '/api/2014/features/ranger-fighting-style',
  },
  'ranger-fighting-style-archery': {
    index: 'ranger-fighting-style-archery',
    class: {
      index: 'ranger',
      name: 'Ranger',
      url: '/api/2014/classes/ranger',
    },
    name: 'Fighting Style: Archery',
    level: 2,
    prerequisites: [],
    desc: ['You gain a +2 bonus to attack rolls you make with ranged weapons.'],
    parent: {
      index: 'ranger-fighting-style',
      name: 'Fighting Style',
      url: '/api/2014/features/ranger-fighting-style',
    },
    url: '/api/2014/features/ranger-fighting-style-archery',
  },
  'ranger-fighting-style-defense': {
    index: 'ranger-fighting-style-defense',
    class: {
      index: 'ranger',
      name: 'Ranger',
      url: '/api/2014/classes/ranger',
    },
    name: 'Fighting Style: Defense',
    level: 2,
    prerequisites: [],
    desc: ['While you are wearing armor, you gain a +1 bonus to AC.'],
    parent: {
      index: 'ranger-fighting-style',
      name: 'Fighting Style',
      url: '/api/2014/features/ranger-fighting-style',
    },
    url: '/api/2014/features/ranger-fighting-style-defense',
  },
  'ranger-fighting-style-dueling': {
    index: 'ranger-fighting-style-dueling',
    class: {
      index: 'ranger',
      name: 'Ranger',
      url: '/api/2014/classes/ranger',
    },
    name: 'Fighting Style: Dueling',
    level: 2,
    prerequisites: [],
    desc: [
      'When you are wielding a melee weapon in one hand and no other weapons, you gain a +2 bonus to damage rolls with that weapon.',
    ],
    parent: {
      index: 'ranger-fighting-style',
      name: 'Fighting Style',
      url: '/api/2014/features/ranger-fighting-style',
    },
    url: '/api/2014/features/ranger-fighting-style-dueling',
  },
  'ranger-fighting-style-two-weapon-fighting': {
    index: 'ranger-fighting-style-two-weapon-fighting',
    class: {
      index: 'ranger',
      name: 'Ranger',
      url: '/api/2014/classes/ranger',
    },
    name: 'Fighting Style: Two-Weapon Fighting',
    level: 2,
    prerequisites: [],
    desc: [
      'When you engage in two-weapon fighting, you can add your ability modifier to the damage of the second attack.',
    ],
    parent: {
      index: 'ranger-fighting-style',
      name: 'Fighting Style',
      url: '/api/2014/features/ranger-fighting-style',
    },
    url: '/api/2014/features/ranger-fighting-style-two-weapon-fighting',
  },
  'spellcasting-ranger': {
    index: 'spellcasting-ranger',
    class: {
      index: 'ranger',
      name: 'Ranger',
      url: '/api/2014/classes/ranger',
    },
    name: 'Spellcasting: Ranger',
    level: 2,
    prerequisites: [],
    desc: [
      'By the time you reach 2nd level, you have learned to use the magical essence of nature to cast spells, much as a druid does.',
    ],
    reference: '/api/2014/classes/ranger/spellcasting',
    url: '/api/2014/features/spellcasting-ranger',
  },
  'ranger-archetype': {
    index: 'ranger-archetype',
    class: {
      index: 'ranger',
      name: 'Ranger',
      url: '/api/2014/classes/ranger',
    },
    name: 'Ranger Archetype',
    level: 3,
    prerequisites: [],
    desc: [
      'At 3rd level, you choose an archetype that you strive to emulate, such as the Hunter. Your choice grants you features at 3rd level and again at 7th, 11th, and 15th level.',
    ],
    url: '/api/2014/features/ranger-archetype',
  },
  'hunters-prey': {
    index: 'hunters-prey',
    class: {
      index: 'ranger',
      name: 'Ranger',
      url: '/api/2014/classes/ranger',
    },
    subclass: {
      index: 'hunter',
      name: 'Hunter',
      url: '/api/2014/subclasses/hunter',
    },
    name: "Hunter's Prey",
    level: 3,
    prerequisites: [],
    desc: [
      'At 3rd level, you gain one of the following features of your choice.',
      'Colossus Slayer',
      'Giant Killer',
      'Horde Breaker',
    ],
    feature_specific: {
      subfeature_options: {
        choose: 1,
        type: 'feature',
        from: {
          option_set_type: 'options_array',
          options: [
            {
              option_type: 'reference',
              item: {
                index: 'hunters-prey-colossus-slayer',
                name: "Hunter's Prey: Colossus Slayer",
                url: '/api/2014/features/hunters-prey-colossus-slayer',
              },
            },
            {
              option_type: 'reference',
              item: {
                index: 'hunters-prey-giant-killer',
                name: "Hunter's Prey: Giant Killer",
                url: '/api/2014/features/hunters-prey-giant-killer',
              },
            },
            {
              option_type: 'reference',
              item: {
                index: 'hunters-prey-horde-breaker',
                name: "Hunter's Prey: Horde Breaker",
                url: '/api/2014/features/hunters-prey-horde-breaker',
              },
            },
          ],
        },
      },
    },
    url: '/api/2014/features/hunters-prey',
  },
  'hunters-prey-colossus-slayer': {
    index: 'hunters-prey-colossus-slayer',
    class: {
      index: 'ranger',
      name: 'Ranger',
      url: '/api/2014/classes/ranger',
    },
    subclass: {
      index: 'hunter',
      name: 'Hunter',
      url: '/api/2014/subclasses/hunter',
    },
    name: "Hunter's Prey: Colossus Slayer",
    level: 3,
    prerequisites: [],
    desc: [
      "Your tenacity can wear down the most potent foes. When you hit a creature with a weapon attack, the creature takes an extra 1d8 damage if it's below its hit point maximum. You can deal this extra damage only once per turn.",
    ],
    parent: {
      index: 'hunters-prey',
      name: "Hunter's Prey",
      url: '/api/2014/features/hunters-prey',
    },
    url: '/api/2014/features/hunters-prey-colossus-slayer',
  },
  'hunters-prey-giant-killer': {
    index: 'hunters-prey-giant-killer',
    class: {
      index: 'ranger',
      name: 'Ranger',
      url: '/api/2014/classes/ranger',
    },
    subclass: {
      index: 'hunter',
      name: 'Hunter',
      url: '/api/2014/subclasses/hunter',
    },
    name: "Hunter's Prey: Giant Killer",
    level: 3,
    prerequisites: [],
    desc: [
      'When a Large or larger creature within 5 feet of you hits or misses you with an attack, you can use your reaction to attack that creature immediately after its attack, provided that you can see the creature.',
    ],
    parent: {
      index: 'hunters-prey',
      name: "Hunter's Prey",
      url: '/api/2014/features/hunters-prey',
    },
    url: '/api/2014/features/hunters-prey-giant-killer',
  },
  'hunters-prey-horde-breaker': {
    index: 'hunters-prey-horde-breaker',
    class: {
      index: 'ranger',
      name: 'Ranger',
      url: '/api/2014/classes/ranger',
    },
    subclass: {
      index: 'hunter',
      name: 'Hunter',
      url: '/api/2014/subclasses/hunter',
    },
    name: "Hunter's Prey: Horde Breaker",
    level: 3,
    prerequisites: [],
    desc: [
      'Once on each of your turns when you make a weapon attack, you can make another attack with the same weapon against a different creature that is within 5 feet of the original target and within range of your weapon.',
    ],
    parent: {
      index: 'hunters-prey',
      name: "Hunter's Prey",
      url: '/api/2014/features/hunters-prey',
    },
    url: '/api/2014/features/hunters-prey-horde-breaker',
  },
  'primeval-awareness': {
    index: 'primeval-awareness',
    class: {
      index: 'ranger',
      name: 'Ranger',
      url: '/api/2014/classes/ranger',
    },
    name: 'Primeval Awareness',
    level: 3,
    prerequisites: [],
    desc: [
      "Beginning at 3rd level, you can use your action and expend one ranger spell slot to focus your awareness on the region around you. For 1 minute per level of the spell slot you expend, you can sense whether the following types of creatures are present within 1 mile of you (or within up to 6 miles if you are in your favored terrain): aberrations, celestials, dragons, elementals, fey, fiends, and undead. This feature doesn't reveal the creatures' location or number.",
    ],
    url: '/api/2014/features/primeval-awareness',
  },
  'ranger-ability-score-improvement-1': {
    index: 'ranger-ability-score-improvement-1',
    class: {
      index: 'ranger',
      name: 'Ranger',
      url: '/api/2014/classes/ranger',
    },
    name: 'Ability Score Improvement',
    level: 4,
    prerequisites: [],
    desc: [
      "When you reach 4th level, and again at 8th, 12th, 16th, and 19th level, you can increase one ability score of your choice by 2, or you can increase two ability scores of your choice by 1. As normal, you can't increase an ability score above 20 using this feature.",
    ],
    url: '/api/2014/features/ranger-ability-score-improvement-1',
  },
  'ranger-extra-attack': {
    index: 'ranger-extra-attack',
    class: {
      index: 'ranger',
      name: 'Ranger',
      url: '/api/2014/classes/ranger',
    },
    name: 'Extra Attack',
    level: 5,
    prerequisites: [],
    desc: [
      'Beginning at 5th level, you can attack twice, instead of once, whenever you take the Attack action on your turn.',
    ],
    url: '/api/2014/features/ranger-extra-attack',
  },
  'favored-enemy-2-types': {
    index: 'favored-enemy-2-types',
    class: {
      index: 'ranger',
      name: 'Ranger',
      url: '/api/2014/classes/ranger',
    },
    name: 'Favored Enemy (2 types)',
    level: 6,
    prerequisites: [],
    desc: [
      'Beginning at 1st level, you have significant experience studying, tracking, hunting, and even talking to a certain type of enemy.',
      'Choose a type of favored enemy: aberrations, beasts, celestials, constructs, dragons, elementals, fey, fiends, giants, monstrosities, oozes, plants, or undead. Alternatively, you can select two races of humanoid (such as gnolls and orcs) as favored enemies.',
      'You have advantage on Wisdom (Survival) checks to track your favored enemies, as well as on Intelligence checks to recall information about them.',
      'When you gain this feature, you also learn one language of your choice that is spoken by your favored enemies, if they speak one at all.',
      'You choose one additional favored enemy, as well as an associated language, at 6th and 14th level. As you gain levels, your choices should reflect the types of monsters you have encountered on your adventures.',
    ],
    feature_specific: {
      enemy_type_options: {
        desc: 'one enemy type',
        choose: 1,
        type: 'string',
        from: {
          option_set_type: 'options_array',
          options: [
            'aberrations',
            'beasts',
            'celestials',
            'constructs',
            'dragons',
            'elementals',
            'fey',
            'fiends',
            'giants',
            'monstrosities',
            'oozes',
            'plants',
            'undead',
            'humanoids',
          ],
        },
      },
    },
    url: '/api/2014/features/favored-enemy-2-types',
  },
  'natural-explorer-2-terrain-types': {
    index: 'natural-explorer-2-terrain-types',
    class: {
      index: 'ranger',
      name: 'Ranger',
      url: '/api/2014/classes/ranger',
    },
    name: 'Natural Explorer (2 terrain types)',
    level: 6,
    prerequisites: [],
    desc: [
      "You are particularly familiar with one type of natural environment and are adept at traveling and surviving in such regions. Choose one type of favored terrain: arctic, coast, desert, forest, grassland, mountain, or swamp. When you make an Intelligence or Wisdom check related to your favored terrain, your proficiency bonus is doubled if you are using a skill that you're proficient in.",
      'While traveling for an hour or more in your favored terrain, you gain the following benefits:',
      "- Difficult terrain doesn't slow your group's travel.",
      "- Your group can't become lost except by magical means.",
      '- Even when you are engaged in another activity while traveling (such as foraging, navigating, or tracking), you remain alert to danger.',
      '- If you are traveling alone, you can move stealthily at a normal pace.',
      '- When you forage, you find twice as much food as you normally would.',
      '- While tracking other creatures, you also learn their exact number, their sizes, and how long ago they passed through the area.',
      'You choose additional favored terrain types at 6th and 10th level.',
    ],
    feature_specific: {
      terrain_type_options: {
        desc: 'one terrain type',
        choose: 1,
        type: 'string',
        from: {
          option_set_type: 'options_array',
          options: [
            'arctic',
            'coast',
            'desert',
            'forest',
            'grassland',
            'mountain',
            'swamp',
          ],
        },
      },
    },
    url: '/api/2014/features/natural-explorer-2-terrain-types',
  },
  'ranger-archetype-improvement-1': {
    index: 'ranger-archetype-improvement-1',
    class: {
      index: 'ranger',
      name: 'Ranger',
      url: '/api/2014/classes/ranger',
    },
    name: 'Ranger Archetype feature',
    level: 7,
    prerequisites: [],
    desc: [
      'At 3rd level, you choose an archetype that you strive to emulate, such as the Hunter. Your choice grants you features at 3rd level and again at 7th, 11th, and 15th level.',
    ],
    url: '/api/2014/features/ranger-archetype-improvement-1',
  },
  'defensive-tactics': {
    index: 'defensive-tactics',
    class: {
      index: 'ranger',
      name: 'Ranger',
      url: '/api/2014/classes/ranger',
    },
    subclass: {
      index: 'hunter',
      name: 'Hunter',
      url: '/api/2014/subclasses/hunter',
    },
    name: 'Defensive Tactics',
    level: 7,
    prerequisites: [],
    desc: [
      'At 7th level, you gain one of the following features of your choice.',
      'Escape the Horde',
      'Multiattack Defense',
      'Steel Will',
    ],
    feature_specific: {
      subfeature_options: {
        choose: 1,
        type: 'feature',
        from: {
          option_set_type: 'options_array',
          options: [
            {
              option_type: 'reference',
              item: {
                index: 'defensive-tactics-escape-the-horde',
                name: 'Defensive Tactics: Escape the Horde',
                url: '/api/2014/features/defensive-tactics-escape-the-horde',
              },
            },
            {
              option_type: 'reference',
              item: {
                index: 'defensive-tactics-multiattack-defense',
                name: 'Defensive Tactics: Multiattack Defense',
                url: '/api/2014/features/defensive-tactics-multiattack-defense',
              },
            },
            {
              option_type: 'reference',
              item: {
                index: 'defensive-tactics-steel-will',
                name: 'Defensive Tactics: Steel Will',
                url: '/api/2014/features/defensive-tactics-steel-will',
              },
            },
          ],
        },
      },
    },
    url: '/api/2014/features/defensive-tactics',
  },
  'defensive-tactics-escape-the-horde': {
    index: 'defensive-tactics-escape-the-horde',
    class: {
      index: 'ranger',
      name: 'Ranger',
      url: '/api/2014/classes/ranger',
    },
    subclass: {
      index: 'hunter',
      name: 'Hunter',
      url: '/api/2014/subclasses/hunter',
    },
    name: 'Defensive Tactics: Escape the Horde',
    level: 7,
    prerequisites: [],
    desc: ['Opportunity attacks against you are made with disadvantage.'],
    parent: {
      index: 'defensive-tactics',
      name: 'Defensive Tactics',
      url: '/api/2014/features/defensive-tactics',
    },
    url: '/api/2014/features/defensive-tactics-escape-the-horde',
  },
  'defensive-tactics-multiattack-defense': {
    index: 'defensive-tactics-multiattack-defense',
    class: {
      index: 'ranger',
      name: 'Ranger',
      url: '/api/2014/classes/ranger',
    },
    subclass: {
      index: 'hunter',
      name: 'Hunter',
      url: '/api/2014/subclasses/hunter',
    },
    name: 'Defensive Tactics: Multiattack Defense',
    level: 7,
    prerequisites: [],
    desc: [
      'When a creature hits you with an attack, you gain a +4 bonus to AC against all subsequent attacks made by that creature for the rest of the turn.',
    ],
    parent: {
      index: 'defensive-tactics',
      name: 'Defensive Tactics',
      url: '/api/2014/features/defensive-tactics',
    },
    url: '/api/2014/features/defensive-tactics-multiattack-defense',
  },
  'defensive-tactics-steel-will': {
    index: 'defensive-tactics-steel-will',
    class: {
      index: 'ranger',
      name: 'Ranger',
      url: '/api/2014/classes/ranger',
    },
    subclass: {
      index: 'hunter',
      name: 'Hunter',
      url: '/api/2014/subclasses/hunter',
    },
    name: 'Defensive Tactics: Steel Will',
    level: 7,
    prerequisites: [],
    desc: ['You have advantage on saving throws against being frightened.'],
    parent: {
      index: 'defensive-tactics',
      name: 'Defensive Tactics',
      url: '/api/2014/features/defensive-tactics',
    },
    url: '/api/2014/features/defensive-tactics-steel-will',
  },
  'ranger-ability-score-improvement-2': {
    index: 'ranger-ability-score-improvement-2',
    class: {
      index: 'ranger',
      name: 'Ranger',
      url: '/api/2014/classes/ranger',
    },
    name: 'Ability Score Improvement',
    level: 8,
    prerequisites: [],
    desc: [
      "When you reach 4th level, and again at 8th, 12th, 16th, and 19th level, you can increase one ability score of your choice by 2, or you can increase two ability scores of your choice by 1. As normal, you can't increase an ability score above 20 using this feature.",
    ],
    url: '/api/2014/features/ranger-ability-score-improvement-2',
  },
  'ranger-lands-stride': {
    index: 'ranger-lands-stride',
    class: {
      index: 'ranger',
      name: 'Ranger',
      url: '/api/2014/classes/ranger',
    },
    name: "Land's Stride",
    level: 8,
    prerequisites: [],
    desc: [
      'Starting at 8th level, moving through nonmagical difficult terrain costs you no extra movement. You can also pass through nonmagical plants without being slowed by them and without taking damage from them if they have thorns, spines, or a similar hazard.',
      'In addition, you have advantage on saving throws against plants that are magically created or manipulated to impede movement, such those created by the entangle spell.',
    ],
    url: '/api/2014/features/ranger-lands-stride',
  },
  'natural-explorer-3-terrain-types': {
    index: 'natural-explorer-3-terrain-types',
    class: {
      index: 'ranger',
      name: 'Ranger',
      url: '/api/2014/classes/ranger',
    },
    name: 'Natural Explorer (3 terrain types)',
    level: 10,
    prerequisites: [],
    desc: [
      "You are particularly familiar with one type of natural environment and are adept at traveling and surviving in such regions. Choose one type of favored terrain: arctic, coast, desert, forest, grassland, mountain, or swamp. When you make an Intelligence or Wisdom check related to your favored terrain, your proficiency bonus is doubled if you are using a skill that you're proficient in.",
      'While traveling for an hour or more in your favored terrain, you gain the following benefits:',
      "- Difficult terrain doesn't slow your group's travel.",
      "- Your group can't become lost except by magical means.",
      '- Even when you are engaged in another activity while traveling (such as foraging, navigating, or tracking), you remain alert to danger.',
      '- If you are traveling alone, you can move stealthily at a normal pace.',
      '- When you forage, you find twice as much food as you normally would.',
      '- While tracking other creatures, you also learn their exact number, their sizes, and how long ago they passed through the area.',
      'You choose additional favored terrain types at 6th and 10th level.',
    ],
    feature_specific: {
      terrain_type_options: {
        desc: 'one terrain type',
        choose: 1,
        type: 'string',
        from: {
          option_set_type: 'options_array',
          options: [
            'arctic',
            'coast',
            'desert',
            'forest',
            'grassland',
            'mountain',
            'swamp',
          ],
        },
      },
    },
    url: '/api/2014/features/natural-explorer-3-terrain-types',
  },
  'hide-in-plain-sight': {
    index: 'hide-in-plain-sight',
    class: {
      index: 'ranger',
      name: 'Ranger',
      url: '/api/2014/classes/ranger',
    },
    name: 'Hide in Plain Sight',
    level: 10,
    prerequisites: [],
    desc: [
      'Starting at 10th level, you can spend 1 minute creating camouflage for yourself. You must have access to fresh mud, dirt, plants, soot, and other naturally occurring materials with which to create your camouflage.',
      'Once you are camouflaged in this way, you can try to hide by pressing yourself up against a solid surface, such as a tree or wall, that is at least as tall and wide as you are. You gain a +10 bonus to Dexterity (Stealth) checks as long as you remain there without moving or taking actions. Once you move or take an action or a reaction, you must camouflage yourself again to gain this benefit.',
    ],
    url: '/api/2014/features/hide-in-plain-sight',
  },
  'ranger-archetype-improvement-2': {
    index: 'ranger-archetype-improvement-2',
    class: {
      index: 'ranger',
      name: 'Ranger',
      url: '/api/2014/classes/ranger',
    },
    name: 'Ranger Archetype feature',
    level: 11,
    prerequisites: [],
    desc: [
      'At 3rd level, you choose an archetype that you strive to emulate, such as the Hunter. Your choice grants you features at 3rd level and again at 7th, 11th, and 15th level.',
    ],
    url: '/api/2014/features/ranger-archetype-improvement-2',
  },
  multiattack: {
    index: 'multiattack',
    class: {
      index: 'ranger',
      name: 'Ranger',
      url: '/api/2014/classes/ranger',
    },
    subclass: {
      index: 'hunter',
      name: 'Hunter',
      url: '/api/2014/subclasses/hunter',
    },
    name: 'Multiattack',
    level: 11,
    prerequisites: [],
    desc: [
      'At 11th level, you gain one of the following features of your choice.',
      'Volley',
      'Whirlwind Attack',
    ],
    feature_specific: {
      subfeature_options: {
        choose: 1,
        type: 'feature',
        from: {
          option_set_type: 'options_array',
          options: [
            {
              option_type: 'reference',
              item: {
                index: 'multiattack-volley',
                name: 'Multiattack: Volley',
                url: '/api/2014/features/multiattack-volley',
              },
            },
            {
              option_type: 'reference',
              item: {
                index: 'multiattack-whirlwind-attack',
                name: 'Multiattack: Whirlwind Attack',
                url: '/api/2014/features/multiattack-whirlwind-attack',
              },
            },
          ],
        },
      },
    },
    url: '/api/2014/features/multiattack',
  },
  'multiattack-volley': {
    index: 'multiattack-volley',
    class: {
      index: 'ranger',
      name: 'Ranger',
      url: '/api/2014/classes/ranger',
    },
    subclass: {
      index: 'hunter',
      name: 'Hunter',
      url: '/api/2014/subclasses/hunter',
    },
    name: 'Multiattack: Volley',
    level: 11,
    prerequisites: [],
    desc: [
      "You can use your action to make a ranged attack against any number of creatures within 10 feet of a point you can see within your weapon's range. You must have ammunition for each target, as normal, and you make a separate attack roll for each target.",
    ],
    parent: {
      index: 'multiattack',
      name: 'Multiattack',
      url: '/api/2014/features/multiattack',
    },
    url: '/api/2014/features/multiattack-volley',
  },
  'multiattack-whirlwind-attack': {
    index: 'multiattack-whirlwind-attack',
    class: {
      index: 'ranger',
      name: 'Ranger',
      url: '/api/2014/classes/ranger',
    },
    subclass: {
      index: 'hunter',
      name: 'Hunter',
      url: '/api/2014/subclasses/hunter',
    },
    name: 'Multiattack: Whirlwind Attack',
    level: 11,
    prerequisites: [],
    desc: [
      'You can use your action to make a melee attack against any number of creatures within 5 feet of you, with a separate attack roll for each target.',
    ],
    parent: {
      index: 'multiattack',
      name: 'Multiattack',
      url: '/api/2014/features/multiattack',
    },
    url: '/api/2014/features/multiattack-whirlwind-attack',
  },
  'ranger-ability-score-improvement-3': {
    index: 'ranger-ability-score-improvement-3',
    class: {
      index: 'ranger',
      name: 'Ranger',
      url: '/api/2014/classes/ranger',
    },
    name: 'Ability Score Improvement',
    level: 12,
    prerequisites: [],
    desc: [
      "When you reach 4th level, and again at 8th, 12th, 16th, and 19th level, you can increase one ability score of your choice by 2, or you can increase two ability scores of your choice by 1. As normal, you can't increase an ability score above 20 using this feature.",
    ],
    url: '/api/2014/features/ranger-ability-score-improvement-3',
  },
  'favored-enemy-3-enemies': {
    index: 'favored-enemy-3-enemies',
    class: {
      index: 'ranger',
      name: 'Ranger',
      url: '/api/2014/classes/ranger',
    },
    name: 'Favored Enemy (3 enemies)',
    level: 14,
    prerequisites: [],
    desc: [
      'Beginning at 1st level, you have significant experience studying, tracking, hunting, and even talking to a certain type of enemy.',
      'Choose a type of favored enemy: aberrations, beasts, celestials, constructs, dragons, elementals, fey, fiends, giants, monstrosities, oozes, plants, or undead. Alternatively, you can select two races of humanoid (such as gnolls and orcs) as favored enemies.',
      'You have advantage on Wisdom (Survival) checks to track your favored enemies, as well as on Intelligence checks to recall information about them.',
      'When you gain this feature, you also learn one language of your choice that is spoken by your favored enemies, if they speak one at all.',
      'You choose one additional favored enemy, as well as an associated language, at 6th and 14th level. As you gain levels, your choices should reflect the types of monsters you have encountered on your adventures.',
    ],
    feature_specific: {
      enemy_type_options: {
        desc: 'one enemy type',
        choose: 1,
        type: 'string',
        from: {
          option_set_type: 'options_array',
          options: [
            'aberrations',
            'beasts',
            'celestials',
            'constructs',
            'dragons',
            'elementals',
            'fey',
            'fiends',
            'giants',
            'monstrosities',
            'oozes',
            'plants',
            'undead',
            'humanoids',
          ],
        },
      },
    },
    url: '/api/2014/features/favored-enemy-3-enemies',
  },
  vanish: {
    index: 'vanish',
    class: {
      index: 'ranger',
      name: 'Ranger',
      url: '/api/2014/classes/ranger',
    },
    name: 'Vanish',
    level: 14,
    prerequisites: [],
    desc: [
      "Starting at 14th level, you can use the Hide action as a bonus action on your turn. Also, you can't be tracked by nonmagical means, unless you choose to leave a trail.",
    ],
    url: '/api/2014/features/vanish',
  },
  'ranger-archetype-improvement-3': {
    index: 'ranger-archetype-improvement-3',
    class: {
      index: 'ranger',
      name: 'Ranger',
      url: '/api/2014/classes/ranger',
    },
    name: 'Ranger Archetype feature',
    level: 15,
    prerequisites: [],
    desc: [
      'At 3rd level, you choose an archetype that you strive to emulate, such as the Hunter. Your choice grants you features at 3rd level and again at 7th, 11th, and 15th level.',
    ],
    url: '/api/2014/features/ranger-archetype-improvement-3',
  },
  'superior-hunters-defense': {
    index: 'superior-hunters-defense',
    class: {
      index: 'ranger',
      name: 'Ranger',
      url: '/api/2014/classes/ranger',
    },
    subclass: {
      index: 'hunter',
      name: 'Hunter',
      url: '/api/2014/subclasses/hunter',
    },
    name: "Superior Hunter's Defense",
    level: 15,
    prerequisites: [],
    desc: [
      'At 15th level, you gain one of the following features of your choice.',
      'Evasion',
      'Stand Against the Tide',
      'Uncanny Dodge',
    ],
    feature_specific: {
      subfeature_options: {
        choose: 1,
        type: 'feature',
        from: {
          option_set_type: 'options_array',
          options: [
            {
              option_type: 'reference',
              item: {
                index: 'superior-hunters-defense-evasion',
                name: "Superior Hunter's Defense: Evasion",
                url: '/api/2014/features/superior-hunters-defense-evasion',
              },
            },
            {
              option_type: 'reference',
              item: {
                index: 'superior-hunters-defense-stand-against-the-tide',
                name: "Superior Hunter's Defense: Stand Against the Tide",
                url: '/api/2014/features/superior-hunters-defense-stand-against-the-tide',
              },
            },
            {
              option_type: 'reference',
              item: {
                index: 'superior-hunters-defense-uncanny-dodge',
                name: "Superior Hunter's Defense: Uncanny Dodge",
                url: '/api/2014/features/superior-hunters-defense-uncanny-dodge',
              },
            },
          ],
        },
      },
    },
    url: '/api/2014/features/superior-hunters-defense',
  },
  'superior-hunters-defense-evasion': {
    index: 'superior-hunters-defense-evasion',
    class: {
      index: 'ranger',
      name: 'Ranger',
      url: '/api/2014/classes/ranger',
    },
    subclass: {
      index: 'hunter',
      name: 'Hunter',
      url: '/api/2014/subclasses/hunter',
    },
    name: "Superior Hunter's Defense: Evasion",
    level: 15,
    prerequisites: [],
    desc: [
      "When you are subjected to an effect, such as a red dragon's fiery breath or a lightning bolt spell, that allows you to make a Dexterity saving throw to take only half damage, you instead take no damage if you succeed on the saving throw, and only half damage if you fail.",
    ],
    parent: {
      index: 'superior-hunters-defense',
      name: "Superior Hunter's Defense",
      url: '/api/2014/features/superior-hunters-defense',
    },
    url: '/api/2014/features/superior-hunters-defense-evasion',
  },
  'superior-hunters-defense-stand-against-the-tide': {
    index: 'superior-hunters-defense-stand-against-the-tide',
    class: {
      index: 'ranger',
      name: 'Ranger',
      url: '/api/2014/classes/ranger',
    },
    subclass: {
      index: 'hunter',
      name: 'Hunter',
      url: '/api/2014/subclasses/hunter',
    },
    name: "Superior Hunter's Defense: Stand Against the Tide",
    level: 15,
    prerequisites: [],
    desc: [
      'When a hostile creature misses you with a melee attack, you can use your reaction to force that creature to repeat the same attack against another creature (other than itself) of your choice.',
    ],
    parent: {
      index: 'superior-hunters-defense',
      name: "Superior Hunter's Defense",
      url: '/api/2014/features/superior-hunters-defense',
    },
    url: '/api/2014/features/superior-hunters-defense-stand-against-the-tide',
  },
  'superior-hunters-defense-uncanny-dodge': {
    index: 'superior-hunters-defense-uncanny-dodge',
    class: {
      index: 'ranger',
      name: 'Ranger',
      url: '/api/2014/classes/ranger',
    },
    subclass: {
      index: 'hunter',
      name: 'Hunter',
      url: '/api/2014/subclasses/hunter',
    },
    name: "Superior Hunter's Defense: Uncanny Dodge",
    level: 15,
    prerequisites: [],
    desc: [
      "When an attacker that you can see hits you with an attack, you can use your reaction to halve the attack's damage against you.",
    ],
    parent: {
      index: 'superior-hunters-defense',
      name: "Superior Hunter's Defense",
      url: '/api/2014/features/superior-hunters-defense',
    },
    url: '/api/2014/features/superior-hunters-defense-uncanny-dodge',
  },
  'ranger-ability-score-improvement-4': {
    index: 'ranger-ability-score-improvement-4',
    class: {
      index: 'ranger',
      name: 'Ranger',
      url: '/api/2014/classes/ranger',
    },
    name: 'Ability Score Improvement',
    level: 16,
    prerequisites: [],
    desc: [
      "When you reach 4th level, and again at 8th, 12th, 16th, and 19th level, you can increase one ability score of your choice by 2, or you can increase two ability scores of your choice by 1. As normal, you can't increase an ability score above 20 using this feature.",
    ],
    url: '/api/2014/features/ranger-ability-score-improvement-4',
  },
  'feral-senses': {
    index: 'feral-senses',
    class: {
      index: 'ranger',
      name: 'Ranger',
      url: '/api/2014/classes/ranger',
    },
    name: 'Feral Senses',
    level: 18,
    prerequisites: [],
    desc: [
      "At 18th level, you gain preternatural senses that help you fight creatures you can't see. When you attack a creature you can't see, your inability to see it doesn't impose disadvantage on your attack rolls against it.",
      "You are also aware of the location of any invisible creature within 30 feet of you, provided that the creature isn't hidden from you and you aren't blinded or deafened.",
    ],
    url: '/api/2014/features/feral-senses',
  },
  'ranger-ability-score-improvement-5': {
    index: 'ranger-ability-score-improvement-5',
    class: {
      index: 'ranger',
      name: 'Ranger',
      url: '/api/2014/classes/ranger',
    },
    name: 'Ability Score Improvement',
    level: 19,
    prerequisites: [],
    desc: [
      "When you reach 4th level, and again at 8th, 12th, 16th, and 19th level, you can increase one ability score of your choice by 2, or you can increase two ability scores of your choice by 1. As normal, you can't increase an ability score above 20 using this feature.",
    ],
    url: '/api/2014/features/ranger-ability-score-improvement-5',
  },
  'foe-slayer': {
    index: 'foe-slayer',
    class: {
      index: 'ranger',
      name: 'Ranger',
      url: '/api/2014/classes/ranger',
    },
    name: 'Foe Slayer',
    level: 20,
    prerequisites: [],
    desc: [
      'At 20th level, you become an unparalleled hunter of your enemies. Once on each of your turns, you can add your Wisdom modifier to the attack roll or the damage roll of an attack you make against one of your favored enemies. You can choose to use this feature before or after the roll, but before any effects of the roll are applied.',
    ],
    url: '/api/2014/features/foe-slayer',
  },
  'rogue-expertise-1': {
    index: 'rogue-expertise-1',
    class: {
      index: 'rogue',
      name: 'Rogue',
      url: '/api/2014/classes/rogue',
    },
    name: 'Expertise',
    level: 1,
    prerequisites: [],
    desc: [
      "At 1st level, choose two of your skill proficiencies, or one of your skill proficiencies and your proficiency with thieves' tools. Your proficiency bonus is doubled for any ability check you make that uses either of the chosen proficiencies.",
      "At 6th level, you can choose two more of your proficiencies (in skills or with thieves' tools) to gain this benefit",
    ],
    feature_specific: {
      expertise_options: {
        choose: 1,
        type: 'proficiency',
        from: {
          option_set_type: 'options_array',
          options: [
            {
              option_type: 'choice',
              choice: {
                choose: 2,
                type: 'proficiency',
                from: {
                  option_set_type: 'options_array',
                  options: [
                    {
                      option_type: 'reference',
                      item: {
                        index: 'skill-acrobatics',
                        name: 'Skill: Acrobatics',
                        url: '/api/2014/proficiencies/skill-acrobatics',
                      },
                    },
                    {
                      option_type: 'reference',
                      item: {
                        index: 'skill-animal-handling',
                        name: 'Skill: Animal Handling',
                        url: '/api/2014/proficiencies/skill-animal-handling',
                      },
                    },
                    {
                      option_type: 'reference',
                      item: {
                        index: 'skill-arcana',
                        name: 'Skill: Arcana',
                        url: '/api/2014/proficiencies/skill-arcana',
                      },
                    },
                    {
                      option_type: 'reference',
                      item: {
                        index: 'skill-athletics',
                        name: 'Skill: Athletics',
                        url: '/api/2014/proficiencies/skill-athletics',
                      },
                    },
                    {
                      option_type: 'reference',
                      item: {
                        index: 'skill-deception',
                        name: 'Skill: Deception',
                        url: '/api/2014/proficiencies/skill-deception',
                      },
                    },
                    {
                      option_type: 'reference',
                      item: {
                        index: 'skill-history',
                        name: 'Skill: History',
                        url: '/api/2014/proficiencies/skill-history',
                      },
                    },
                    {
                      option_type: 'reference',
                      item: {
                        index: 'skill-insight',
                        name: 'Skill: Insight',
                        url: '/api/2014/proficiencies/skill-insight',
                      },
                    },
                    {
                      option_type: 'reference',
                      item: {
                        index: 'skill-intimidation',
                        name: 'Skill: Intimidation',
                        url: '/api/2014/proficiencies/skill-intimidation',
                      },
                    },
                    {
                      option_type: 'reference',
                      item: {
                        index: 'skill-investigation',
                        name: 'Skill: Investigation',
                        url: '/api/2014/proficiencies/skill-investigation',
                      },
                    },
                    {
                      option_type: 'reference',
                      item: {
                        index: 'skill-medicine',
                        name: 'Skill: Medicine',
                        url: '/api/2014/proficiencies/skill-medicine',
                      },
                    },
                    {
                      option_type: 'reference',
                      item: {
                        index: 'skill-nature',
                        name: 'Skill: Nature',
                        url: '/api/2014/proficiencies/skill-nature',
                      },
                    },
                    {
                      option_type: 'reference',
                      item: {
                        index: 'skill-perception',
                        name: 'Skill: Perception',
                        url: '/api/2014/proficiencies/skill-perception',
                      },
                    },
                    {
                      option_type: 'reference',
                      item: {
                        index: 'skill-performance',
                        name: 'Skill: Performance',
                        url: '/api/2014/proficiencies/skill-performance',
                      },
                    },
                    {
                      option_type: 'reference',
                      item: {
                        index: 'skill-persuasion',
                        name: 'Skill: Persuasion',
                        url: '/api/2014/proficiencies/skill-persuasion',
                      },
                    },
                    {
                      option_type: 'reference',
                      item: {
                        index: 'skill-religion',
                        name: 'Skill: Religion',
                        url: '/api/2014/proficiencies/skill-religion',
                      },
                    },
                    {
                      option_type: 'reference',
                      item: {
                        index: 'skill-sleight-of-hand',
                        name: 'Skill: Sleight of Hand',
                        url: '/api/2014/proficiencies/skill-sleight-of-hand',
                      },
                    },
                    {
                      option_type: 'reference',
                      item: {
                        index: 'skill-stealth',
                        name: 'Skill: Stealth',
                        url: '/api/2014/proficiencies/skill-stealth',
                      },
                    },
                    {
                      option_type: 'reference',
                      item: {
                        index: 'skill-survival',
                        name: 'Skill: Survival',
                        url: '/api/2014/proficiencies/skill-survival',
                      },
                    },
                  ],
                },
              },
            },
            {
              option_type: 'multiple',
              items: [
                {
                  option_type: 'choice',
                  choice: {
                    choose: 1,
                    type: 'proficiency',
                    from: {
                      option_set_type: 'options_array',
                      options: [
                        {
                          option_type: 'reference',
                          item: {
                            index: 'skill-acrobatics',
                            name: 'Skill: Acrobatics',
                            url: '/api/2014/proficiencies/skill-acrobatics',
                          },
                        },
                        {
                          option_type: 'reference',
                          item: {
                            index: 'skill-animal-handling',
                            name: 'Skill: Animal Handling',
                            url: '/api/2014/proficiencies/skill-animal-handling',
                          },
                        },
                        {
                          option_type: 'reference',
                          item: {
                            index: 'skill-arcana',
                            name: 'Skill: Arcana',
                            url: '/api/2014/proficiencies/skill-arcana',
                          },
                        },
                        {
                          option_type: 'reference',
                          item: {
                            index: 'skill-athletics',
                            name: 'Skill: Athletics',
                            url: '/api/2014/proficiencies/skill-athletics',
                          },
                        },
                        {
                          option_type: 'reference',
                          item: {
                            index: 'skill-deception',
                            name: 'Skill: Deception',
                            url: '/api/2014/proficiencies/skill-deception',
                          },
                        },
                        {
                          option_type: 'reference',
                          item: {
                            index: 'skill-history',
                            name: 'Skill: History',
                            url: '/api/2014/proficiencies/skill-history',
                          },
                        },
                        {
                          option_type: 'reference',
                          item: {
                            index: 'skill-insight',
                            name: 'Skill: Insight',
                            url: '/api/2014/proficiencies/skill-insight',
                          },
                        },
                        {
                          option_type: 'reference',
                          item: {
                            index: 'skill-intimidation',
                            name: 'Skill: Intimidation',
                            url: '/api/2014/proficiencies/skill-intimidation',
                          },
                        },
                        {
                          option_type: 'reference',
                          item: {
                            index: 'skill-investigation',
                            name: 'Skill: Investigation',
                            url: '/api/2014/proficiencies/skill-investigation',
                          },
                        },
                        {
                          option_type: 'reference',
                          item: {
                            index: 'skill-medicine',
                            name: 'Skill: Medicine',
                            url: '/api/2014/proficiencies/skill-medicine',
                          },
                        },
                        {
                          option_type: 'reference',
                          item: {
                            index: 'skill-nature',
                            name: 'Skill: Nature',
                            url: '/api/2014/proficiencies/skill-nature',
                          },
                        },
                        {
                          option_type: 'reference',
                          item: {
                            index: 'skill-perception',
                            name: 'Skill: Perception',
                            url: '/api/2014/proficiencies/skill-perception',
                          },
                        },
                        {
                          option_type: 'reference',
                          item: {
                            index: 'skill-performance',
                            name: 'Skill: Performance',
                            url: '/api/2014/proficiencies/skill-performance',
                          },
                        },
                        {
                          option_type: 'reference',
                          item: {
                            index: 'skill-persuasion',
                            name: 'Skill: Persuasion',
                            url: '/api/2014/proficiencies/skill-persuasion',
                          },
                        },
                        {
                          option_type: 'reference',
                          item: {
                            index: 'skill-religion',
                            name: 'Skill: Religion',
                            url: '/api/2014/proficiencies/skill-religion',
                          },
                        },
                        {
                          option_type: 'reference',
                          item: {
                            index: 'skill-sleight-of-hand',
                            name: 'Skill: Sleight of Hand',
                            url: '/api/2014/proficiencies/skill-sleight-of-hand',
                          },
                        },
                        {
                          option_type: 'reference',
                          item: {
                            index: 'skill-stealth',
                            name: 'Skill: Stealth',
                            url: '/api/2014/proficiencies/skill-stealth',
                          },
                        },
                        {
                          option_type: 'reference',
                          item: {
                            index: 'skill-survival',
                            name: 'Skill: Survival',
                            url: '/api/2014/proficiencies/skill-survival',
                          },
                        },
                      ],
                    },
                  },
                },
                {
                  option_type: 'reference',
                  item: {
                    index: 'thieves-tools',
                    name: "Thieves' Tools",
                    url: '/api/2014/proficiencies/thieves-tools',
                  },
                },
              ],
            },
          ],
        },
      },
    },
    url: '/api/2014/features/rogue-expertise-1',
  },
  'sneak-attack': {
    index: 'sneak-attack',
    class: {
      index: 'rogue',
      name: 'Rogue',
      url: '/api/2014/classes/rogue',
    },
    name: 'Sneak Attack',
    level: 1,
    prerequisites: [],
    desc: [
      "Beginning at 1st level, you know how to strike subtly and exploit a foe's distraction. Once per turn, you can deal an extra 1d6 damage to one creature you hit with an attack if you have advantage on the attack roll. The attack must use a finesse or a ranged weapon.",
      "You don't need advantage on the attack roll if another enemy of the target is within 5 feet of it, that enemy isn't incapacitated, and you don't have disadvantage on the attack roll.",
      'The amount of the extra damage increases as you gain levels in this class, as shown in the Sneak Attack column of the Rogue table.',
    ],
    url: '/api/2014/features/sneak-attack',
  },
  'thieves-cant': {
    index: 'thieves-cant',
    class: {
      index: 'rogue',
      name: 'Rogue',
      url: '/api/2014/classes/rogue',
    },
    name: "Thieves' Cant",
    level: 1,
    prerequisites: [],
    desc: [
      "During your rogue training you learned thieves' cant, a secret mix of dialect, jargon, and code that allows you to hide messages in seemingly normal conversation. Only another creature that knows thieves' cant understands such messages. It takes four times longer to convey such a message than it does to speak the same idea plainly.",
      "In addition, you understand a set of secret signs and symbols used to convey short, simple messages, such as whether an area is dangerous or the territory of a thieves' guild, whether loot is nearby, or whether the people in an area are easy marks or will provide a safe house for thieves on the run.",
    ],
    url: '/api/2014/features/thieves-cant',
  },
  'cunning-action': {
    index: 'cunning-action',
    class: {
      index: 'rogue',
      name: 'Rogue',
      url: '/api/2014/classes/rogue',
    },
    name: 'Cunning Action',
    level: 2,
    prerequisites: [],
    desc: [
      'Starting at 2nd level, your quick thinking and agility allow you to move and act quickly. You can take a bonus action on each of your turns in combat. This action can be used only to take the Dash, Disengage, or Hide action.',
    ],
    url: '/api/2014/features/cunning-action',
  },
  'roguish-archetype': {
    index: 'roguish-archetype',
    class: {
      index: 'rogue',
      name: 'Rogue',
      url: '/api/2014/classes/rogue',
    },
    name: 'Roguish Archetype',
    level: 3,
    prerequisites: [],
    desc: [
      'At 3rd level, you choose an archetype that you emulate in the exercise of your rogue abilities, such as Thief. Additional archetypes are available in the original source material. Your archetype choice grants you features at 3rd level and then again at 9th, 13th, and 17th level.',
    ],
    url: '/api/2014/features/roguish-archetype',
  },
  'fast-hands': {
    index: 'fast-hands',
    class: {
      index: 'rogue',
      name: 'Rogue',
      url: '/api/2014/classes/rogue',
    },
    subclass: {
      index: 'thief',
      name: 'Thief',
      url: '/api/2014/subclasses/thief',
    },
    name: 'Fast Hands',
    level: 3,
    prerequisites: [],
    desc: [
      "Starting at 3rd level, you can use the bonus action granted by your Cunning Action to make a Dexterity (Sleight of Hand) check, use your thieves' tools to disarm a trap or open a lock, or take the Use an Object action.",
    ],
    url: '/api/2014/features/fast-hands',
  },
  'second-story-work': {
    index: 'second-story-work',
    class: {
      index: 'rogue',
      name: 'Rogue',
      url: '/api/2014/classes/rogue',
    },
    subclass: {
      index: 'thief',
      name: 'Thief',
      url: '/api/2014/subclasses/thief',
    },
    name: 'Second-Story Work',
    level: 3,
    prerequisites: [],
    desc: [
      'When you choose this archetype at 3rd level, you gain the ability to climb faster than normal; climbing no longer costs you extra movement.',
      'In addition, when you make a running jump, the distance you cover increases by a number of feet equal to your Dexterity modifier.',
    ],
    url: '/api/2014/features/second-story-work',
  },
  'rogue-ability-score-improvement-1': {
    index: 'rogue-ability-score-improvement-1',
    class: {
      index: 'rogue',
      name: 'Rogue',
      url: '/api/2014/classes/rogue',
    },
    name: 'Ability Score Improvement',
    level: 4,
    prerequisites: [],
    desc: [
      "When you reach 4th level, and again at 8th, 10th, 12th, 16th, and 19th level, you can increase one ability score of your choice by 2, or you can increase two ability scores of your choice by 1. As normal, you can't increase an ability score above 20 using this feature.",
    ],
    url: '/api/2014/features/rogue-ability-score-improvement-1',
  },
  'uncanny-dodge': {
    index: 'uncanny-dodge',
    class: {
      index: 'rogue',
      name: 'Rogue',
      url: '/api/2014/classes/rogue',
    },
    name: 'Uncanny Dodge',
    level: 5,
    prerequisites: [],
    desc: [
      "Starting at 5th level, when an attacker that you can see hits you with an attack, you can use your reaction to halve the attack's damage against you.",
    ],
    url: '/api/2014/features/uncanny-dodge',
  },
  'rogue-expertise-2': {
    index: 'rogue-expertise-2',
    class: {
      index: 'rogue',
      name: 'Rogue',
      url: '/api/2014/classes/rogue',
    },
    name: 'Expertise',
    level: 6,
    prerequisites: [],
    desc: [
      "At 1st level, choose two of your skill proficiencies, or one of your skill proficiencies and your proficiency with thieves' tools. Your proficiency bonus is doubled for any ability check you make that uses either of the chosen proficiencies.",
      "At 6th level, you can choose two more of your proficiencies (in skills or with thieves' tools) to gain this benefit",
    ],
    feature_specific: {
      expertise_options: {
        choose: 2,
        type: 'proficiency',
        from: {
          option_set_type: 'options_array',
          options: [
            {
              option_type: 'reference',
              item: {
                index: 'skill-acrobatics',
                name: 'Skill: Acrobatics',
                url: '/api/2014/proficiencies/skill-acrobatics',
              },
            },
            {
              option_type: 'reference',
              item: {
                index: 'skill-animal-handling',
                name: 'Skill: Animal Handling',
                url: '/api/2014/proficiencies/skill-animal-handling',
              },
            },
            {
              option_type: 'reference',
              item: {
                index: 'skill-arcana',
                name: 'Skill: Arcana',
                url: '/api/2014/proficiencies/skill-arcana',
              },
            },
            {
              option_type: 'reference',
              item: {
                index: 'skill-athletics',
                name: 'Skill: Athletics',
                url: '/api/2014/proficiencies/skill-athletics',
              },
            },
            {
              option_type: 'reference',
              item: {
                index: 'skill-deception',
                name: 'Skill: Deception',
                url: '/api/2014/proficiencies/skill-deception',
              },
            },
            {
              option_type: 'reference',
              item: {
                index: 'skill-history',
                name: 'Skill: History',
                url: '/api/2014/proficiencies/skill-history',
              },
            },
            {
              option_type: 'reference',
              item: {
                index: 'skill-insight',
                name: 'Skill: Insight',
                url: '/api/2014/proficiencies/skill-insight',
              },
            },
            {
              option_type: 'reference',
              item: {
                index: 'skill-intimidation',
                name: 'Skill: Intimidation',
                url: '/api/2014/proficiencies/skill-intimidation',
              },
            },
            {
              option_type: 'reference',
              item: {
                index: 'skill-investigation',
                name: 'Skill: Investigation',
                url: '/api/2014/proficiencies/skill-investigation',
              },
            },
            {
              option_type: 'reference',
              item: {
                index: 'skill-medicine',
                name: 'Skill: Medicine',
                url: '/api/2014/proficiencies/skill-medicine',
              },
            },
            {
              option_type: 'reference',
              item: {
                index: 'skill-nature',
                name: 'Skill: Nature',
                url: '/api/2014/proficiencies/skill-nature',
              },
            },
            {
              option_type: 'reference',
              item: {
                index: 'skill-perception',
                name: 'Skill: Perception',
                url: '/api/2014/proficiencies/skill-perception',
              },
            },
            {
              option_type: 'reference',
              item: {
                index: 'skill-performance',
                name: 'Skill: Performance',
                url: '/api/2014/proficiencies/skill-performance',
              },
            },
            {
              option_type: 'reference',
              item: {
                index: 'skill-persuasion',
                name: 'Skill: Persuasion',
                url: '/api/2014/proficiencies/skill-persuasion',
              },
            },
            {
              option_type: 'reference',
              item: {
                index: 'skill-religion',
                name: 'Skill: Religion',
                url: '/api/2014/proficiencies/skill-religion',
              },
            },
            {
              option_type: 'reference',
              item: {
                index: 'skill-sleight-of-hand',
                name: 'Skill: Sleight of Hand',
                url: '/api/2014/proficiencies/skill-sleight-of-hand',
              },
            },
            {
              option_type: 'reference',
              item: {
                index: 'skill-stealth',
                name: 'Skill: Stealth',
                url: '/api/2014/proficiencies/skill-stealth',
              },
            },
            {
              option_type: 'reference',
              item: {
                index: 'skill-survival',
                name: 'Skill: Survival',
                url: '/api/2014/proficiencies/skill-survival',
              },
            },
            {
              option_type: 'reference',
              item: {
                index: 'thieves-tools',
                name: "Thieves' Tools",
                url: '/api/2014/proficiencies/thieves-tools',
              },
            },
          ],
        },
      },
    },
    url: '/api/2014/features/rogue-expertise-2',
  },
  'rogue-evasion': {
    index: 'rogue-evasion',
    class: {
      index: 'rogue',
      name: 'Rogue',
      url: '/api/2014/classes/rogue',
    },
    name: 'Evasion',
    level: 7,
    prerequisites: [],
    desc: [
      "Beginning at 7th level, you can nimbly dodge out of the way of certain area effects, such as a red dragon's fiery breath or an ice storm spell. When you are subjected to an effect that allows you to make a Dexterity saving throw to take only half damage, you instead take no damage if you succeed on the saving throw, and only half damage if you fail.",
    ],
    url: '/api/2014/features/rogue-evasion',
  },
  'rogue-ability-score-improvement-2': {
    index: 'rogue-ability-score-improvement-2',
    class: {
      index: 'rogue',
      name: 'Rogue',
      url: '/api/2014/classes/rogue',
    },
    name: 'Ability Score Improvement',
    level: 8,
    prerequisites: [],
    desc: [
      "When you reach 4th level, and again at 8th, 10th, 12th, 16th, and 19th level, you can increase one ability score of your choice by 2, or you can increase two ability scores of your choice by 1. As normal, you can't increase an ability score above 20 using this feature.",
    ],
    url: '/api/2014/features/rogue-ability-score-improvement-2',
  },
  'roguish-archetype-improvement-1': {
    index: 'roguish-archetype-improvement-1',
    class: {
      index: 'rogue',
      name: 'Rogue',
      url: '/api/2014/classes/rogue',
    },
    name: 'Roguish Archetype feature',
    level: 9,
    prerequisites: [],
    desc: [
      'At 3rd level, you choose an archetype that you emulate in the exercise of your rogue abilities, such as Thief. Additional archetypes are available in the original source material. Your archetype choice grants you features at 3rd level and then again at 9th, 13th, and 17th level.',
    ],
    url: '/api/2014/features/roguish-archetype-improvement-1',
  },
  'supreme-sneak': {
    index: 'supreme-sneak',
    class: {
      index: 'rogue',
      name: 'Rogue',
      url: '/api/2014/classes/rogue',
    },
    subclass: {
      index: 'thief',
      name: 'Thief',
      url: '/api/2014/subclasses/thief',
    },
    name: 'Supreme Sneak',
    level: 9,
    prerequisites: [],
    desc: [
      'Starting at 9th level, you have advantage on a Dexterity (Stealth) check if you move no more than half your speed on the same turn.',
    ],
    url: '/api/2014/features/supreme-sneak',
  },
  'rogue-ability-score-improvement-3': {
    index: 'rogue-ability-score-improvement-3',
    class: {
      index: 'rogue',
      name: 'Rogue',
      url: '/api/2014/classes/rogue',
    },
    name: 'Ability Score Improvement',
    level: 10,
    prerequisites: [],
    desc: [
      "When you reach 4th level, and again at 8th, 10th, 12th, 16th, and 19th level, you can increase one ability score of your choice by 2, or you can increase two ability scores of your choice by 1. As normal, you can't increase an ability score above 20 using this feature.",
    ],
    url: '/api/2014/features/rogue-ability-score-improvement-3',
  },
  'reliable-talent': {
    index: 'reliable-talent',
    class: {
      index: 'rogue',
      name: 'Rogue',
      url: '/api/2014/classes/rogue',
    },
    name: 'Reliable Talent',
    level: 11,
    prerequisites: [],
    desc: [
      'By 11th level, you have refined your chosen skills until they approach perfection. Whenever you make an ability check that lets you add your proficiency bonus, you can treat a d20 roll of 9 or lower as a 10.',
    ],
    url: '/api/2014/features/reliable-talent',
  },
  'rogue-ability-score-improvement-4': {
    index: 'rogue-ability-score-improvement-4',
    class: {
      index: 'rogue',
      name: 'Rogue',
      url: '/api/2014/classes/rogue',
    },
    name: 'Ability Score Improvement',
    level: 12,
    prerequisites: [],
    desc: [
      "When you reach 4th level, and again at 8th, 10th, 12th, 16th, and 19th level, you can increase one ability score of your choice by 2, or you can increase two ability scores of your choice by 1. As normal, you can't increase an ability score above 20 using this feature.",
    ],
    url: '/api/2014/features/rogue-ability-score-improvement-4',
  },
  'roguish-archetype-improvement-2': {
    index: 'roguish-archetype-improvement-2',
    class: {
      index: 'rogue',
      name: 'Rogue',
      url: '/api/2014/classes/rogue',
    },
    name: 'Roguish Archetype feature',
    level: 13,
    prerequisites: [],
    desc: [
      'At 3rd level, you choose an archetype that you emulate in the exercise of your rogue abilities, such as Thief. Additional archetypes are available in the original source material. Your archetype choice grants you features at 3rd level and then again at 9th, 13th, and 17th level.',
    ],
    url: '/api/2014/features/roguish-archetype-improvement-2',
  },
  'use-magic-device': {
    index: 'use-magic-device',
    class: {
      index: 'rogue',
      name: 'Rogue',
      url: '/api/2014/classes/rogue',
    },
    subclass: {
      index: 'thief',
      name: 'Thief',
      url: '/api/2014/subclasses/thief',
    },
    name: 'Use Magic Device',
    level: 13,
    prerequisites: [],
    desc: [
      'By 13th level, you have learned enough about the workings of magic that you can improvise the use of items even when they are not intended for you. You ignore all class, race, and level requirements on the use of magic items.',
    ],
    url: '/api/2014/features/use-magic-device',
  },
  blindsense: {
    index: 'blindsense',
    class: {
      index: 'rogue',
      name: 'Rogue',
      url: '/api/2014/classes/rogue',
    },
    name: 'Blindsense',
    level: 14,
    prerequisites: [],
    desc: [
      'Starting at 14th level, if you are able to hear, you are aware of the location of any hidden or invisible creature within 10 feet of you.',
    ],
    url: '/api/2014/features/blindsense',
  },
  'slippery-mind': {
    index: 'slippery-mind',
    class: {
      index: 'rogue',
      name: 'Rogue',
      url: '/api/2014/classes/rogue',
    },
    name: 'Slippery Mind',
    level: 15,
    prerequisites: [],
    desc: [
      'By 15th level, you have acquired greater mental strength. You gain proficiency in Wisdom saving throws.',
    ],
    url: '/api/2014/features/slippery-mind',
  },
  'rogue-ability-score-improvement-5': {
    index: 'rogue-ability-score-improvement-5',
    class: {
      index: 'rogue',
      name: 'Rogue',
      url: '/api/2014/classes/rogue',
    },
    name: 'Ability Score Improvement',
    level: 16,
    prerequisites: [],
    desc: [
      "When you reach 4th level, and again at 8th, 10th, 12th, 16th, and 19th level, you can increase one ability score of your choice by 2, or you can increase two ability scores of your choice by 1. As normal, you can't increase an ability score above 20 using this feature.",
    ],
    url: '/api/2014/features/rogue-ability-score-improvement-5',
  },
  'roguish-archetype-improvement-3': {
    index: 'roguish-archetype-improvement-3',
    class: {
      index: 'rogue',
      name: 'Rogue',
      url: '/api/2014/classes/rogue',
    },
    name: 'Roguish Archetype feature',
    level: 17,
    prerequisites: [],
    desc: [
      'At 3rd level, you choose an archetype that you emulate in the exercise of your rogue abilities, such as Thief. Additional archetypes are available in the original source material. Your archetype choice grants you features at 3rd level and then again at 9th, 13th, and 17th level.',
    ],
    url: '/api/2014/features/roguish-archetype-improvement-3',
  },
  'thiefs-reflexes': {
    index: 'thiefs-reflexes',
    class: {
      index: 'rogue',
      name: 'Rogue',
      url: '/api/2014/classes/rogue',
    },
    subclass: {
      index: 'thief',
      name: 'Thief',
      url: '/api/2014/subclasses/thief',
    },
    name: "Thief's Reflexes",
    level: 17,
    prerequisites: [],
    desc: [
      "When you reach 17th level, you have become adept at laying ambushes and quickly escaping danger. You can take two turns during the first round of any combat. You take your first turn at your normal initiative and your second turn at your initiative minus 10. You can't use this feature when you are surprised.",
    ],
    url: '/api/2014/features/thiefs-reflexes',
  },
  elusive: {
    index: 'elusive',
    class: {
      index: 'rogue',
      name: 'Rogue',
      url: '/api/2014/classes/rogue',
    },
    name: 'Elusive',
    level: 18,
    prerequisites: [],
    desc: [
      "Beginning at 18th level, you are so evasive that attackers rarely gain the upper hand against you. No attack roll has advantage against you while you aren't incapacitated.",
    ],
    url: '/api/2014/features/elusive',
  },
  'rogue-ability-score-improvement-6': {
    index: 'rogue-ability-score-improvement-6',
    class: {
      index: 'rogue',
      name: 'Rogue',
      url: '/api/2014/classes/rogue',
    },
    name: 'Ability Score Improvement',
    level: 19,
    prerequisites: [],
    desc: [
      "When you reach 4th level, and again at 8th, 10th, 12th, 16th, and 19th level, you can increase one ability score of your choice by 2, or you can increase two ability scores of your choice by 1. As normal, you can't increase an ability score above 20 using this feature.",
    ],
    url: '/api/2014/features/rogue-ability-score-improvement-6',
  },
  'stroke-of-luck': {
    index: 'stroke-of-luck',
    class: {
      index: 'rogue',
      name: 'Rogue',
      url: '/api/2014/classes/rogue',
    },
    name: 'Stroke of Luck',
    level: 20,
    prerequisites: [],
    desc: [
      'At 20th level, you have an uncanny knack for succeeding when you need to. If your attack misses a target within range, you can turn the miss into a hit. Alternatively, if you fail an ability check, you can treat the d20 roll as a 20.',
      "Once you use this feature, you can't use it again until you finish a short or long rest.",
    ],
    url: '/api/2014/features/stroke-of-luck',
  },
  'spellcasting-sorcerer': {
    index: 'spellcasting-sorcerer',
    class: {
      index: 'sorcerer',
      name: 'Sorcerer',
      url: '/api/2014/classes/sorcerer',
    },
    name: 'Spellcasting: Sorcerer',
    level: 1,
    prerequisites: [],
    desc: [
      'An event in your past, or in the life of a parent or ancestor, left an indelible mark on you, infusing you with arcane magic. This font of magic, whatever its origin, fuels your spells.',
    ],
    reference: '/api/2014/classes/sorcerer/spellcasting',
    url: '/api/2014/features/spellcasting-sorcerer',
  },
  'sorcerous-origin': {
    index: 'sorcerous-origin',
    class: {
      index: 'sorcerer',
      name: 'Sorcerer',
      url: '/api/2014/classes/sorcerer',
    },
    name: 'Sorcerous Origin',
    level: 1,
    prerequisites: [],
    desc: [
      'Choose a sorcerous origin, which describes the source of your innate magical power, such as Draconic Bloodline.',
      'Your choice grants you features when you choose it at 1st level and again at 6th, 14th, and 18th level.',
    ],
    url: '/api/2014/features/sorcerous-origin',
  },
  'dragon-ancestor': {
    index: 'dragon-ancestor',
    class: {
      index: 'sorcerer',
      name: 'Sorcerer',
      url: '/api/2014/classes/sorcerer',
    },
    subclass: {
      index: 'draconic',
      name: 'Draconic',
      url: '/api/2014/subclasses/draconic',
    },
    name: 'Dragon Ancestor',
    level: 1,
    prerequisites: [],
    desc: [
      'At 1st level, you choose one type of dragon as your ancestor. The damage type associated with each dragon is used by features you gain later.',
      'You can speak, read, and write Draconic. Additionally, whenever you make a Charisma check when interacting with dragons, your proficiency bonus is doubled if it applies to the check.',
    ],
    feature_specific: {
      subfeature_options: {
        choose: 1,
        type: 'feature',
        from: {
          option_set_type: 'options_array',
          options: [
            {
              option_type: 'reference',
              item: {
                index: 'dragon-ancestor-black---acid-damage',
                name: 'Dragon Ancestor: Black - Acid Damage',
                url: '/api/2014/features/dragon-ancestor-black---acid-damage',
              },
            },
            {
              option_type: 'reference',
              item: {
                index: 'dragon-ancestor-blue---lightning-damage',
                name: 'Dragon Ancestor: Blue - Lightning Damage',
                url: '/api/2014/features/dragon-ancestor-blue---lightning-damage',
              },
            },
            {
              option_type: 'reference',
              item: {
                index: 'dragon-ancestor-brass---fire-damage',
                name: 'Dragon Ancestor: Brass - Fire Damage',
                url: '/api/2014/features/dragon-ancestor-brass---fire-damage',
              },
            },
            {
              option_type: 'reference',
              item: {
                index: 'dragon-ancestor-bronze---lightning-damage',
                name: 'Dragon Ancestor: Bronze - Lightning Damage',
                url: '/api/2014/features/dragon-ancestor-bronze---lightning-damage',
              },
            },
            {
              option_type: 'reference',
              item: {
                index: 'dragon-ancestor-copper---acid-damage',
                name: 'Dragon Ancestor: Copper - Acid Damage',
                url: '/api/2014/features/dragon-ancestor-copper---acid-damage',
              },
            },
            {
              option_type: 'reference',
              item: {
                index: 'dragon-ancestor-gold---fire-damage',
                name: 'Dragon Ancestor: Gold - Fire Damage',
                url: '/api/2014/features/dragon-ancestor-gold---fire-damage',
              },
            },
            {
              option_type: 'reference',
              item: {
                index: 'dragon-ancestor-green---poison-damage',
                name: 'Dragon Ancestor: Green - Poison Damage',
                url: '/api/2014/features/dragon-ancestor-green---poison-damage',
              },
            },
            {
              option_type: 'reference',
              item: {
                index: 'dragon-ancestor-red---fire-damage',
                name: 'Dragon Ancestor: Red - Fire Damage',
                url: '/api/2014/features/dragon-ancestor-red---fire-damage',
              },
            },
            {
              option_type: 'reference',
              item: {
                index: 'dragon-ancestor-silver---cold-damage',
                name: 'Dragon Ancestor: Silver - Cold Damage',
                url: '/api/2014/features/dragon-ancestor-silver---cold-damage',
              },
            },
            {
              option_type: 'reference',
              item: {
                index: 'dragon-ancestor-white---cold-damage',
                name: 'Dragon Ancestor: White - Cold Damage',
                url: '/api/2014/features/dragon-ancestor-white---cold-damage',
              },
            },
          ],
        },
      },
    },
    url: '/api/2014/features/dragon-ancestor',
  },
  'dragon-ancestor-black---acid-damage': {
    index: 'dragon-ancestor-black---acid-damage',
    class: {
      index: 'sorcerer',
      name: 'Sorcerer',
      url: '/api/2014/classes/sorcerer',
    },
    subclass: {
      index: 'draconic',
      name: 'Draconic',
      url: '/api/2014/subclasses/draconic',
    },
    name: 'Dragon Ancestor: Black - Acid Damage',
    level: 1,
    prerequisites: [],
    desc: [
      'At 1st level, you choose one type of dragon as your ancestor. The damage type associated with each dragon is used by features you gain later.',
      'You can speak, read, and write Draconic. Additionally, whenever you make a Charisma check when interacting with dragons, your proficiency bonus is doubled if it applies to the check.',
    ],
    parent: {
      index: 'dragon-ancestor',
      name: 'Dragon Ancestor',
      url: '/api/2014/features/dragon-ancestor',
    },
    url: '/api/2014/features/dragon-ancestor-black---acid-damage',
  },
  'dragon-ancestor-blue---lightning-damage': {
    index: 'dragon-ancestor-blue---lightning-damage',
    class: {
      index: 'sorcerer',
      name: 'Sorcerer',
      url: '/api/2014/classes/sorcerer',
    },
    subclass: {
      index: 'draconic',
      name: 'Draconic',
      url: '/api/2014/subclasses/draconic',
    },
    name: 'Dragon Ancestor: Blue - Lightning Damage',
    level: 1,
    prerequisites: [],
    desc: [
      'At 1st level, you choose one type of dragon as your ancestor. The damage type associated with each dragon is used by features you gain later.',
      'You can speak, read, and write Draconic. Additionally, whenever you make a Charisma check when interacting with dragons, your proficiency bonus is doubled if it applies to the check.',
    ],
    parent: {
      index: 'dragon-ancestor',
      name: 'Dragon Ancestor',
      url: '/api/2014/features/dragon-ancestor',
    },
    url: '/api/2014/features/dragon-ancestor-blue---lightning-damage',
  },
  'dragon-ancestor-brass---fire-damage': {
    index: 'dragon-ancestor-brass---fire-damage',
    class: {
      index: 'sorcerer',
      name: 'Sorcerer',
      url: '/api/2014/classes/sorcerer',
    },
    subclass: {
      index: 'draconic',
      name: 'Draconic',
      url: '/api/2014/subclasses/draconic',
    },
    name: 'Dragon Ancestor: Brass - Fire Damage',
    level: 1,
    prerequisites: [],
    desc: [
      'At 1st level, you choose one type of dragon as your ancestor. The damage type associated with each dragon is used by features you gain later.',
      'You can speak, read, and write Draconic. Additionally, whenever you make a Charisma check when interacting with dragons, your proficiency bonus is doubled if it applies to the check.',
    ],
    parent: {
      index: 'dragon-ancestor',
      name: 'Dragon Ancestor',
      url: '/api/2014/features/dragon-ancestor',
    },
    url: '/api/2014/features/dragon-ancestor-brass---fire-damage',
  },
  'dragon-ancestor-bronze---lightning-damage': {
    index: 'dragon-ancestor-bronze---lightning-damage',
    class: {
      index: 'sorcerer',
      name: 'Sorcerer',
      url: '/api/2014/classes/sorcerer',
    },
    subclass: {
      index: 'draconic',
      name: 'Draconic',
      url: '/api/2014/subclasses/draconic',
    },
    name: 'Dragon Ancestor: Bronze - Lightning Damage',
    level: 1,
    prerequisites: [],
    desc: [
      'At 1st level, you choose one type of dragon as your ancestor. The damage type associated with each dragon is used by features you gain later.',
      'You can speak, read, and write Draconic. Additionally, whenever you make a Charisma check when interacting with dragons, your proficiency bonus is doubled if it applies to the check.',
    ],
    parent: {
      index: 'dragon-ancestor',
      name: 'Dragon Ancestor',
      url: '/api/2014/features/dragon-ancestor',
    },
    url: '/api/2014/features/dragon-ancestor-bronze---lightning-damage',
  },
  'dragon-ancestor-copper---acid-damage': {
    index: 'dragon-ancestor-copper---acid-damage',
    class: {
      index: 'sorcerer',
      name: 'Sorcerer',
      url: '/api/2014/classes/sorcerer',
    },
    subclass: {
      index: 'draconic',
      name: 'Draconic',
      url: '/api/2014/subclasses/draconic',
    },
    name: 'Dragon Ancestor: Copper - Acid Damage',
    level: 1,
    prerequisites: [],
    desc: [
      'At 1st level, you choose one type of dragon as your ancestor. The damage type associated with each dragon is used by features you gain later.',
      'You can speak, read, and write Draconic. Additionally, whenever you make a Charisma check when interacting with dragons, your proficiency bonus is doubled if it applies to the check.',
    ],
    parent: {
      index: 'dragon-ancestor',
      name: 'Dragon Ancestor',
      url: '/api/2014/features/dragon-ancestor',
    },
    url: '/api/2014/features/dragon-ancestor-copper---acid-damage',
  },
  'dragon-ancestor-gold---fire-damage': {
    index: 'dragon-ancestor-gold---fire-damage',
    class: {
      index: 'sorcerer',
      name: 'Sorcerer',
      url: '/api/2014/classes/sorcerer',
    },
    subclass: {
      index: 'draconic',
      name: 'Draconic',
      url: '/api/2014/subclasses/draconic',
    },
    name: 'Dragon Ancestor: Gold - Fire Damage',
    level: 1,
    prerequisites: [],
    desc: [
      'At 1st level, you choose one type of dragon as your ancestor. The damage type associated with each dragon is used by features you gain later.',
      'You can speak, read, and write Draconic. Additionally, whenever you make a Charisma check when interacting with dragons, your proficiency bonus is doubled if it applies to the check.',
    ],
    parent: {
      index: 'dragon-ancestor',
      name: 'Dragon Ancestor',
      url: '/api/2014/features/dragon-ancestor',
    },
    url: '/api/2014/features/dragon-ancestor-gold---fire-damage',
  },
  'dragon-ancestor-green---poison-damage': {
    index: 'dragon-ancestor-green---poison-damage',
    class: {
      index: 'sorcerer',
      name: 'Sorcerer',
      url: '/api/2014/classes/sorcerer',
    },
    subclass: {
      index: 'draconic',
      name: 'Draconic',
      url: '/api/2014/subclasses/draconic',
    },
    name: 'Dragon Ancestor: Green - Poison Damage',
    level: 1,
    prerequisites: [],
    desc: [
      'At 1st level, you choose one type of dragon as your ancestor. The damage type associated with each dragon is used by features you gain later.',
      'You can speak, read, and write Draconic. Additionally, whenever you make a Charisma check when interacting with dragons, your proficiency bonus is doubled if it applies to the check.',
    ],
    parent: {
      index: 'dragon-ancestor',
      name: 'Dragon Ancestor',
      url: '/api/2014/features/dragon-ancestor',
    },
    url: '/api/2014/features/dragon-ancestor-green---poison-damage',
  },
  'dragon-ancestor-red---fire-damage': {
    index: 'dragon-ancestor-red---fire-damage',
    class: {
      index: 'sorcerer',
      name: 'Sorcerer',
      url: '/api/2014/classes/sorcerer',
    },
    subclass: {
      index: 'draconic',
      name: 'Draconic',
      url: '/api/2014/subclasses/draconic',
    },
    name: 'Dragon Ancestor: Red - Fire Damage',
    level: 1,
    prerequisites: [],
    desc: [
      'At 1st level, you choose one type of dragon as your ancestor. The damage type associated with each dragon is used by features you gain later.',
      'You can speak, read, and write Draconic. Additionally, whenever you make a Charisma check when interacting with dragons, your proficiency bonus is doubled if it applies to the check.',
    ],
    parent: {
      index: 'dragon-ancestor',
      name: 'Dragon Ancestor',
      url: '/api/2014/features/dragon-ancestor',
    },
    url: '/api/2014/features/dragon-ancestor-red---fire-damage',
  },
  'dragon-ancestor-silver---cold-damage': {
    index: 'dragon-ancestor-silver---cold-damage',
    class: {
      index: 'sorcerer',
      name: 'Sorcerer',
      url: '/api/2014/classes/sorcerer',
    },
    subclass: {
      index: 'draconic',
      name: 'Draconic',
      url: '/api/2014/subclasses/draconic',
    },
    name: 'Dragon Ancestor: Silver - Cold Damage',
    level: 1,
    prerequisites: [],
    desc: [
      'At 1st level, you choose one type of dragon as your ancestor. The damage type associated with each dragon is used by features you gain later.',
      'You can speak, read, and write Draconic. Additionally, whenever you make a Charisma check when interacting with dragons, your proficiency bonus is doubled if it applies to the check.',
    ],
    parent: {
      index: 'dragon-ancestor',
      name: 'Dragon Ancestor',
      url: '/api/2014/features/dragon-ancestor',
    },
    url: '/api/2014/features/dragon-ancestor-silver---cold-damage',
  },
  'dragon-ancestor-white---cold-damage': {
    index: 'dragon-ancestor-white---cold-damage',
    class: {
      index: 'sorcerer',
      name: 'Sorcerer',
      url: '/api/2014/classes/sorcerer',
    },
    subclass: {
      index: 'draconic',
      name: 'Draconic',
      url: '/api/2014/subclasses/draconic',
    },
    name: 'Dragon Ancestor: White - Cold Damage',
    level: 1,
    prerequisites: [],
    desc: [
      'At 1st level, you choose one type of dragon as your ancestor. The damage type associated with each dragon is used by features you gain later.',
      'You can speak, read, and write Draconic. Additionally, whenever you make a Charisma check when interacting with dragons, your proficiency bonus is doubled if it applies to the check.',
    ],
    parent: {
      index: 'dragon-ancestor',
      name: 'Dragon Ancestor',
      url: '/api/2014/features/dragon-ancestor',
    },
    url: '/api/2014/features/dragon-ancestor-white---cold-damage',
  },
  'draconic-resilience': {
    index: 'draconic-resilience',
    class: {
      index: 'sorcerer',
      name: 'Sorcerer',
      url: '/api/2014/classes/sorcerer',
    },
    subclass: {
      index: 'draconic',
      name: 'Draconic',
      url: '/api/2014/subclasses/draconic',
    },
    name: 'Draconic Resilience',
    level: 1,
    prerequisites: [],
    desc: [
      'As magic flows through your body, it causes physical traits of your dragon ancestors to emerge. At 1st level, your hit point maximum increases by 1 and increases by 1 again whenever you gain a level in this class.',
      "Additionally, parts of your skin are covered by a thin sheen of dragon-like scales. When you aren't wearing armor, your AC equals 13 + your Dexterity modifier.",
    ],
    url: '/api/2014/features/draconic-resilience',
  },
  'font-of-magic': {
    index: 'font-of-magic',
    class: {
      index: 'sorcerer',
      name: 'Sorcerer',
      url: '/api/2014/classes/sorcerer',
    },
    name: 'Font of Magic',
    level: 2,
    prerequisites: [],
    desc: [
      'At 2nd level, you tap into a deep wellspring of magic within yourself. This wellspring is represented by sorcery points, which allow you to create a variety of magical effects.',
      'Sorcery Points',
      'You have 2 sorcery points, and you gain more as you reach higher levels, as shown in the Sorcery Points column of the Sorcerer table. You can never have more sorcery points than shown on the table for your level. You regain all spent sorcery points when you finish a long rest.',
    ],
    url: '/api/2014/features/font-of-magic',
  },
  'flexible-casting-creating-spell-slots': {
    index: 'flexible-casting-creating-spell-slots',
    class: {
      index: 'sorcerer',
      name: 'Sorcerer',
      url: '/api/2014/classes/sorcerer',
    },
    name: 'Flexible Casting: Creating Spell Slots',
    level: 2,
    prerequisites: [],
    desc: [
      'You can transform unexpended sorcery points into one spell slot as a bonus action on your turn. The Creating Spell Slots table shows the cost of creating a spell slot of a given level. You can create spell slots no higher in level than 5th. ',
      'Any spell slot you create with this feature vanishes when you finish a long rest.',
    ],
    url: '/api/2014/features/flexible-casting-creating-spell-slots',
  },
  'flexible-casting-converting-spell-slot': {
    index: 'flexible-casting-converting-spell-slot',
    class: {
      index: 'sorcerer',
      name: 'Sorcerer',
      url: '/api/2014/classes/sorcerer',
    },
    name: 'Flexible Casting: Converting Spell Slot',
    level: 2,
    prerequisites: [],
    desc: [
      "As a bonus action on your turn, you can expend one spell slot and gain a number of sorcery points equal to the slot's level..",
    ],
    url: '/api/2014/features/flexible-casting-converting-spell-slot',
  },
  'metamagic-1': {
    index: 'metamagic-1',
    class: {
      index: 'sorcerer',
      name: 'Sorcerer',
      url: '/api/2014/classes/sorcerer',
    },
    name: 'Metamagic',
    level: 3,
    prerequisites: [],
    desc: [
      'At 3rd level, you gain the ability to twist your spells to suit your needs. You gain two of the following Metamagic options of your choice. You gain another one at 10th and 17th level.',
      'You can use only one Metamagic option on a spell when you cast it, unless otherwise noted.',
    ],
    feature_specific: {
      subfeature_options: {
        choose: 2,
        type: 'feature',
        from: {
          option_set_type: 'options_array',
          options: [
            {
              option_type: 'reference',
              item: {
                index: 'metamagic-careful-spell',
                name: 'Metamagic: Careful Spell',
                url: '/api/2014/features/metamagic-careful-spell',
              },
            },
            {
              option_type: 'reference',
              item: {
                index: 'metamagic-distant-spell',
                name: 'Metamagic: Distant Spell',
                url: '/api/2014/features/metamagic-distant-spell',
              },
            },
            {
              option_type: 'reference',
              item: {
                index: 'metamagic-empowered-spell',
                name: 'Metamagic: Empowered Spell',
                url: '/api/2014/features/metamagic-empowered-spell',
              },
            },
            {
              option_type: 'reference',
              item: {
                index: 'metamagic-extended-spell',
                name: 'Metamagic: Extended Spell',
                url: '/api/2014/features/metamagic-extended-spell',
              },
            },
            {
              option_type: 'reference',
              item: {
                index: 'metamagic-heightened-spell',
                name: 'Metamagic: Heightened Spell',
                url: '/api/2014/features/metamagic-heightened-spell',
              },
            },
            {
              option_type: 'reference',
              item: {
                index: 'metamagic-quickened-spell',
                name: 'Metamagic: Quickened Spell',
                url: '/api/2014/features/metamagic-quickened-spell',
              },
            },
            {
              option_type: 'reference',
              item: {
                index: 'metamagic-subtle-spell',
                name: 'Metamagic: Subtle Spell',
                url: '/api/2014/features/metamagic-subtle-spell',
              },
            },
            {
              option_type: 'reference',
              item: {
                index: 'metamagic-twinned-spell',
                name: 'Metamagic: Twinned Spell',
                url: '/api/2014/features/metamagic-twinned-spell',
              },
            },
          ],
        },
      },
    },
    url: '/api/2014/features/metamagic-1',
  },
  'metamagic-careful-spell': {
    index: 'metamagic-careful-spell',
    class: {
      index: 'sorcerer',
      name: 'Sorcerer',
      url: '/api/2014/classes/sorcerer',
    },
    name: 'Metamagic: Careful Spell',
    level: 3,
    prerequisites: [],
    desc: [
      "When you cast a spell that forces other creatures to make a saving throw, you can protect some of those creatures from the spell's full force. To do so, you spend 1 sorcery point and choose a number of those creatures up to your Charisma modifier (minimum of one creature). A chosen creature automatically succeeds on its saving throw against the spell.",
    ],
    parent: {
      index: 'metamagic-1',
      name: 'Metamagic',
      url: '/api/2014/features/metamagic-1',
    },
    url: '/api/2014/features/metamagic-careful-spell',
  },
  'metamagic-distant-spell': {
    index: 'metamagic-distant-spell',
    class: {
      index: 'sorcerer',
      name: 'Sorcerer',
      url: '/api/2014/classes/sorcerer',
    },
    name: 'Metamagic: Distant Spell',
    level: 3,
    prerequisites: [],
    desc: [
      'When you cast a spell that has a range of 5 feet or greater, you can spend 1 sorcery point to double the range of the spell.',
      'When you cast a spell that has a range of touch, you can spend 1 sorcery point to make the range of the spell 30 feet.',
    ],
    parent: {
      index: 'metamagic-1',
      name: 'Metamagic',
      url: '/api/2014/features/metamagic-1',
    },
    url: '/api/2014/features/metamagic-distant-spell',
  },
  'metamagic-empowered-spell': {
    index: 'metamagic-empowered-spell',
    class: {
      index: 'sorcerer',
      name: 'Sorcerer',
      url: '/api/2014/classes/sorcerer',
    },
    name: 'Metamagic: Empowered Spell',
    level: 3,
    prerequisites: [],
    desc: [
      'When you roll damage for a spell, you can spend 1 sorcery point to reroll a number of the damage dice up to your Charisma modifier (minimum of one). You must use the new rolls.',
      'You can use Empowered Spell even if you have already used a different Metamagic option during the casting of the spell.',
    ],
    parent: {
      index: 'metamagic-1',
      name: 'Metamagic',
      url: '/api/2014/features/metamagic-1',
    },
    url: '/api/2014/features/metamagic-empowered-spell',
  },
  'metamagic-extended-spell': {
    index: 'metamagic-extended-spell',
    class: {
      index: 'sorcerer',
      name: 'Sorcerer',
      url: '/api/2014/classes/sorcerer',
    },
    name: 'Metamagic: Extended Spell',
    level: 3,
    prerequisites: [],
    desc: [
      'When you cast a spell that has a duration of 1 minute or longer, you can spend 1 sorcery point to double its duration, to a maximum duration of 24 hours.',
    ],
    parent: {
      index: 'metamagic-1',
      name: 'Metamagic',
      url: '/api/2014/features/metamagic-1',
    },
    url: '/api/2014/features/metamagic-extended-spell',
  },
  'metamagic-heightened-spell': {
    index: 'metamagic-heightened-spell',
    class: {
      index: 'sorcerer',
      name: 'Sorcerer',
      url: '/api/2014/classes/sorcerer',
    },
    name: 'Metamagic: Heightened Spell',
    level: 3,
    prerequisites: [],
    desc: [
      'When you cast a spell that forces a creature to make a saving throw to resist its effects, you can spend 3 sorcery points to give one target of the spell disadvantage on its first saving throw made against the spell.',
    ],
    parent: {
      index: 'metamagic-1',
      name: 'Metamagic',
      url: '/api/2014/features/metamagic-1',
    },
    url: '/api/2014/features/metamagic-heightened-spell',
  },
  'metamagic-quickened-spell': {
    index: 'metamagic-quickened-spell',
    class: {
      index: 'sorcerer',
      name: 'Sorcerer',
      url: '/api/2014/classes/sorcerer',
    },
    name: 'Metamagic: Quickened Spell',
    level: 3,
    prerequisites: [],
    desc: [
      'When you cast a spell that has a casting time of 1 action, you can spend 2 sorcery points to change the casting time to 1 bonus action for this casting.',
    ],
    parent: {
      index: 'metamagic-1',
      name: 'Metamagic',
      url: '/api/2014/features/metamagic-1',
    },
    url: '/api/2014/features/metamagic-quickened-spell',
  },
  'metamagic-subtle-spell': {
    index: 'metamagic-subtle-spell',
    class: {
      index: 'sorcerer',
      name: 'Sorcerer',
      url: '/api/2014/classes/sorcerer',
    },
    name: 'Metamagic: Subtle Spell',
    level: 3,
    prerequisites: [],
    desc: [
      'When you cast a spell, you can spend 1 sorcery point to cast it without any somatic or verbal components.',
    ],
    parent: {
      index: 'metamagic-1',
      name: 'Metamagic',
      url: '/api/2014/features/metamagic-1',
    },
    url: '/api/2014/features/metamagic-subtle-spell',
  },
  'metamagic-twinned-spell': {
    index: 'metamagic-twinned-spell',
    class: {
      index: 'sorcerer',
      name: 'Sorcerer',
      url: '/api/2014/classes/sorcerer',
    },
    name: 'Metamagic: Twinned Spell',
    level: 3,
    prerequisites: [],
    desc: [
      "When you cast a spell that targets only one creature and doesn't have a range of self, you can spend a number of sorcery points equal to the spell's level to target a second creature in range with the same spell (1 sorcery point if the spell is a cantrip).",
      "To be eligible, a spell must be incapable of targeting more than one creature at the spell's current level. For example, magic missile and scorching ray aren't eligible, but ray of frost is.",
    ],
    url: '/api/2014/features/metamagic-twinned-spell',
  },
  'sorcerer-ability-score-improvement-1': {
    index: 'sorcerer-ability-score-improvement-1',
    class: {
      index: 'sorcerer',
      name: 'Sorcerer',
      url: '/api/2014/classes/sorcerer',
    },
    name: 'Ability Score Improvement',
    level: 4,
    prerequisites: [],
    desc: [
      "When you reach 4th level, and again at 8th, 12th, 16th, and 19th level, you can increase one ability score of your choice by 2, or you can increase two ability scores of your choice by 1. As normal, you can't increase an ability score above 20 using this feature.",
    ],
    url: '/api/2014/features/sorcerer-ability-score-improvement-1',
  },
  'sorcerous-origin-improvement-1': {
    index: 'sorcerous-origin-improvement-1',
    class: {
      index: 'sorcerer',
      name: 'Sorcerer',
      url: '/api/2014/classes/sorcerer',
    },
    name: 'Sorcerous Origin feature',
    level: 6,
    prerequisites: [],
    desc: [
      'Choose a sorcerous origin, which describes the source of your innate magical power, such as Draconic Bloodline.',
      'Your choice grants you features when you choose it at 1st level and again at 6th, 14th, and 18th level.',
    ],
    url: '/api/2014/features/sorcerous-origin-improvement-1',
  },
  'elemental-affinity': {
    index: 'elemental-affinity',
    class: {
      index: 'sorcerer',
      name: 'Sorcerer',
      url: '/api/2014/classes/sorcerer',
    },
    subclass: {
      index: 'draconic',
      name: 'Draconic',
      url: '/api/2014/subclasses/draconic',
    },
    name: 'Elemental Affinity',
    level: 6,
    prerequisites: [],
    desc: [
      'Starting at 6th level, when you cast a spell that deals damage of the type associated with your draconic ancestry, you can add your Charisma modifier to one damage roll of that spell. At the same time, you can spend 1 sorcery point to gain resistance to that damage type for 1 hour.',
    ],
    reference: '/api/2014/subclasses/draconic',
    url: '/api/2014/features/elemental-affinity',
  },
  'sorcerer-ability-score-improvement-2': {
    index: 'sorcerer-ability-score-improvement-2',
    class: {
      index: 'sorcerer',
      name: 'Sorcerer',
      url: '/api/2014/classes/sorcerer',
    },
    name: 'Ability Score Improvement',
    level: 8,
    prerequisites: [],
    desc: [
      "When you reach 4th level, and again at 8th, 12th, 16th, and 19th level, you can increase one ability score of your choice by 2, or you can increase two ability scores of your choice by 1. As normal, you can't increase an ability score above 20 using this feature.",
    ],
    url: '/api/2014/features/sorcerer-ability-score-improvement-2',
  },
  'metamagic-2': {
    index: 'metamagic-2',
    class: {
      index: 'sorcerer',
      name: 'Sorcerer',
      url: '/api/2014/classes/sorcerer',
    },
    name: 'Metamagic',
    level: 10,
    prerequisites: [],
    desc: [
      'At 3rd level, you gain the ability to twist your spells to suit your needs. You gain two of the following Metamagic options of your choice. You gain another one at 10th and 17th level.',
      'You can use only one Metamagic option on a spell when you cast it, unless otherwise noted.',
    ],
    feature_specific: {
      subfeature_options: {
        choose: 1,
        type: 'feature',
        from: {
          option_set_type: 'options_array',
          options: [
            {
              option_type: 'reference',
              item: {
                index: 'metamagic-careful-spell',
                name: 'Metamagic: Careful Spell',
                url: '/api/2014/features/metamagic-careful-spell',
              },
            },
            {
              option_type: 'reference',
              item: {
                index: 'metamagic-distant-spell',
                name: 'Metamagic: Distant Spell',
                url: '/api/2014/features/metamagic-distant-spell',
              },
            },
            {
              option_type: 'reference',
              item: {
                index: 'metamagic-empowered-spell',
                name: 'Metamagic: Empowered Spell',
                url: '/api/2014/features/metamagic-empowered-spell',
              },
            },
            {
              option_type: 'reference',
              item: {
                index: 'metamagic-extended-spell',
                name: 'Metamagic: Extended Spell',
                url: '/api/2014/features/metamagic-extended-spell',
              },
            },
            {
              option_type: 'reference',
              item: {
                index: 'metamagic-heightened-spell',
                name: 'Metamagic: Heightened Spell',
                url: '/api/2014/features/metamagic-heightened-spell',
              },
            },
            {
              option_type: 'reference',
              item: {
                index: 'metamagic-quickened-spell',
                name: 'Metamagic: Quickened Spell',
                url: '/api/2014/features/metamagic-quickened-spell',
              },
            },
            {
              option_type: 'reference',
              item: {
                index: 'metamagic-subtle-spell',
                name: 'Metamagic: Subtle Spell',
                url: '/api/2014/features/metamagic-subtle-spell',
              },
            },
            {
              option_type: 'reference',
              item: {
                index: 'metamagic-twinned-spell',
                name: 'Metamagic: Twinned Spell',
                url: '/api/2014/features/metamagic-twinned-spell',
              },
            },
          ],
        },
      },
    },
    url: '/api/2014/features/metamagic-2',
  },
  'sorcerer-ability-score-improvement-3': {
    index: 'sorcerer-ability-score-improvement-3',
    class: {
      index: 'sorcerer',
      name: 'Sorcerer',
      url: '/api/2014/classes/sorcerer',
    },
    name: 'Ability Score Improvement',
    level: 12,
    prerequisites: [],
    desc: [
      "When you reach 4th level, and again at 8th, 12th, 16th, and 19th level, you can increase one ability score of your choice by 2, or you can increase two ability scores of your choice by 1. As normal, you can't increase an ability score above 20 using this feature.",
    ],
    url: '/api/2014/features/sorcerer-ability-score-improvement-3',
  },
  'sorcerous-origin-improvement-2': {
    index: 'sorcerous-origin-improvement-2',
    class: {
      index: 'sorcerer',
      name: 'Sorcerer',
      url: '/api/2014/classes/sorcerer',
    },
    name: 'Sorcerous Origin feature',
    level: 14,
    prerequisites: [],
    desc: [
      'Choose a sorcerous origin, which describes the source of your innate magical power, such as Draconic Bloodline.',
      'Your choice grants you features when you choose it at 1st level and again at 6th, 14th, and 18th level.',
    ],
    url: '/api/2014/features/sorcerous-origin-improvement-2',
  },
  'dragon-wings': {
    index: 'dragon-wings',
    class: {
      index: 'sorcerer',
      name: 'Sorcerer',
      url: '/api/2014/classes/sorcerer',
    },
    subclass: {
      index: 'draconic',
      name: 'Draconic',
      url: '/api/2014/subclasses/draconic',
    },
    name: 'Dragon Wings',
    level: 14,
    prerequisites: [],
    desc: [
      'At 14th level, you gain the ability to sprout a pair of dragon wings from your back, gaining a flying speed equal to your current speed. You can create these wings as a bonus action on your turn. They last until you dismiss them as a bonus action on your turn.',
      "You can't manifest your wings while wearing armor unless the armor is made to accommodate them, and clothing not made to accommodate your wings might be destroyed when you manifest them.",
    ],
    url: '/api/2014/features/dragon-wings',
  },
  'sorcerer-ability-score-improvement-4': {
    index: 'sorcerer-ability-score-improvement-4',
    class: {
      index: 'sorcerer',
      name: 'Sorcerer',
      url: '/api/2014/classes/sorcerer',
    },
    name: 'Ability Score Improvement',
    level: 16,
    prerequisites: [],
    desc: [
      "When you reach 4th level, and again at 8th, 12th, 16th, and 19th level, you can increase one ability score of your choice by 2, or you can increase two ability scores of your choice by 1. As normal, you can't increase an ability score above 20 using this feature.",
    ],
    url: '/api/2014/features/sorcerer-ability-score-improvement-4',
  },
  'metamagic-3': {
    index: 'metamagic-3',
    class: {
      index: 'sorcerer',
      name: 'Sorcerer',
      url: '/api/2014/classes/sorcerer',
    },
    name: 'Metamagic',
    level: 17,
    prerequisites: [],
    desc: [
      'At 3rd level, you gain the ability to twist your spells to suit your needs. You gain two of the following Metamagic options of your choice. You gain another one at 10th and 17th level.',
      'You can use only one Metamagic option on a spell when you cast it, unless otherwise noted.',
    ],
    feature_specific: {
      subfeature_options: {
        choose: 1,
        type: 'feature',
        from: {
          option_set_type: 'options_array',
          options: [
            {
              option_type: 'reference',
              item: {
                index: 'metamagic-careful-spell',
                name: 'Metamagic: Careful Spell',
                url: '/api/2014/features/metamagic-careful-spell',
              },
            },
            {
              option_type: 'reference',
              item: {
                index: 'metamagic-distant-spell',
                name: 'Metamagic: Distant Spell',
                url: '/api/2014/features/metamagic-distant-spell',
              },
            },
            {
              option_type: 'reference',
              item: {
                index: 'metamagic-empowered-spell',
                name: 'Metamagic: Empowered Spell',
                url: '/api/2014/features/metamagic-empowered-spell',
              },
            },
            {
              option_type: 'reference',
              item: {
                index: 'metamagic-extended-spell',
                name: 'Metamagic: Extended Spell',
                url: '/api/2014/features/metamagic-extended-spell',
              },
            },
            {
              option_type: 'reference',
              item: {
                index: 'metamagic-heightened-spell',
                name: 'Metamagic: Heightened Spell',
                url: '/api/2014/features/metamagic-heightened-spell',
              },
            },
            {
              option_type: 'reference',
              item: {
                index: 'metamagic-quickened-spell',
                name: 'Metamagic: Quickened Spell',
                url: '/api/2014/features/metamagic-quickened-spell',
              },
            },
            {
              option_type: 'reference',
              item: {
                index: 'metamagic-subtle-spell',
                name: 'Metamagic: Subtle Spell',
                url: '/api/2014/features/metamagic-subtle-spell',
              },
            },
            {
              option_type: 'reference',
              item: {
                index: 'metamagic-twinned-spell',
                name: 'Metamagic: Twinned Spell',
                url: '/api/2014/features/metamagic-twinned-spell',
              },
            },
          ],
        },
      },
    },
    url: '/api/2014/features/metamagic-3',
  },
  'sorcerous-origin-improvement-3': {
    index: 'sorcerous-origin-improvement-3',
    class: {
      index: 'sorcerer',
      name: 'Sorcerer',
      url: '/api/2014/classes/sorcerer',
    },
    name: 'Sorcerous Origin feature',
    level: 18,
    prerequisites: [],
    desc: [
      'Choose a sorcerous origin, which describes the source of your innate magical power, such as Draconic Bloodline.',
      'Your choice grants you features when you choose it at 1st level and again at 6th, 14th, and 18th level.',
    ],
    url: '/api/2014/features/sorcerous-origin-improvement-3',
  },
  'draconic-presence': {
    index: 'draconic-presence',
    class: {
      index: 'sorcerer',
      name: 'Sorcerer',
      url: '/api/2014/classes/sorcerer',
    },
    subclass: {
      index: 'draconic',
      name: 'Draconic',
      url: '/api/2014/subclasses/draconic',
    },
    name: 'Draconic Presence',
    level: 18,
    prerequisites: [],
    desc: [
      'Beginning at 18th level, you can channel the dread presence of your dragon ancestor, causing those around you to become awestruck or frightened. As an action, you can spend 5 sorcery points to draw on this power and exude an aura of awe or fear (your choice) to a distance of 60 feet. For 1 minute or until you lose your concentration (as if you were casting a concentration spell), each hostile creature that starts its turn in this aura must succeed on a Wisdom saving throw or be charmed (if you chose awe) or frightened (if you chose fear) until the aura ends. A creature that succeeds on this saving throw is immune to your aura for 24 hours.',
    ],
    url: '/api/2014/features/draconic-presence',
  },
  'sorcerer-ability-score-improvement-5': {
    index: 'sorcerer-ability-score-improvement-5',
    class: {
      index: 'sorcerer',
      name: 'Sorcerer',
      url: '/api/2014/classes/sorcerer',
    },
    name: 'Ability Score Improvement',
    level: 19,
    prerequisites: [],
    desc: [
      "When you reach 4th level, and again at 8th, 12th, 16th, and 19th level, you can increase one ability score of your choice by 2, or you can increase two ability scores of your choice by 1. As normal, you can't increase an ability score above 20 using this feature.",
    ],
    url: '/api/2014/features/sorcerer-ability-score-improvement-5',
  },
  'sorcerous-restoration': {
    index: 'sorcerous-restoration',
    class: {
      index: 'sorcerer',
      name: 'Sorcerer',
      url: '/api/2014/classes/sorcerer',
    },
    name: 'Sorcerous Restoration',
    level: 20,
    prerequisites: [],
    desc: [
      'At 20th level, you regain 4 expended sorcery points whenever you finish a short rest.',
    ],
    url: '/api/2014/features/sorcerous-restoration',
  },
  'otherworldly-patron': {
    index: 'otherworldly-patron',
    class: {
      index: 'warlock',
      name: 'Warlock',
      url: '/api/2014/classes/warlock',
    },
    name: 'Otherworldly Patron',
    level: 1,
    prerequisites: [],
    desc: [
      'At 1st level, you have struck a bargain with an otherworldly being of your choice, such as the Fiend. Your choice grants you features at 1st level and again at 6th, 10th, and 14th level.',
    ],
    url: '/api/2014/features/otherworldly-patron',
  },
  'dark-ones-blessing': {
    index: 'dark-ones-blessing',
    class: {
      index: 'warlock',
      name: 'Warlock',
      url: '/api/2014/classes/warlock',
    },
    subclass: {
      index: 'fiend',
      name: 'Fiend',
      url: '/api/2014/subclasses/fiend',
    },
    name: "Dark One's Blessing",
    level: 1,
    prerequisites: [],
    desc: [
      'Starting at 1st level, when you reduce a hostile creature to 0 hit points, you gain temporary hit points equal to your Charisma modifier + your warlock level (minimum of 1).',
    ],
    url: '/api/2014/features/dark-ones-blessing',
  },
  'pact-magic': {
    index: 'pact-magic',
    class: {
      index: 'warlock',
      name: 'Warlock',
      url: '/api/2014/classes/warlock',
    },
    name: 'Pact Magic',
    level: 1,
    prerequisites: [],
    desc: [
      'Your arcane research and the magic bestowed on you by your patron have given you facility with spells.',
    ],
    reference: '/api/2014/classes/warlock/spellcasting',
    url: '/api/2014/features/pact-magic',
  },
  'eldritch-invocations': {
    index: 'eldritch-invocations',
    class: {
      index: 'warlock',
      name: 'Warlock',
      url: '/api/2014/classes/warlock',
    },
    name: 'Eldritch Invocations',
    level: 2,
    prerequisites: [],
    desc: [
      'In your study of occult lore, you have unearthed eldritch invocations, fragments of forbidden knowledge that imbue you with an abiding magical ability.',
      'At 2nd level, you gain two eldritch invocations of your choice. Your invocation options are detailed at the end of the class description. When you gain certain warlock levels, you gain additional invocations of your choice, as shown in the Invocations Known column of the Warlock table.',
      'Additionally, when you gain a level in this class, you can choose one of the invocations you know and replace it with another invocation that you could learn at that level.',
    ],
    feature_specific: {
      invocations: [
        {
          index: 'eldritch-invocation-agonizing-blast',
          name: 'Eldritch Invocation: Agonizing Blast',
          url: '/api/2014/features/eldritch-invocation-agonizing-blast',
        },
        {
          index: 'eldritch-invocation-armor-of-shadows',
          name: 'Eldritch Invocation: Armor of Shadows',
          url: '/api/2014/features/eldritch-invocation-armor-of-shadows',
        },
        {
          index: 'eldritch-invocation-beast-speech',
          name: 'Eldritch Invocation: Beast Speech',
          url: '/api/2014/features/eldritch-invocation-beast-speech',
        },
        {
          index: 'eldritch-invocation-beguiling-influence',
          name: 'Eldritch Invocation: Beguiling Influence',
          url: '/api/2014/features/eldritch-invocation-beguiling-influence',
        },
        {
          index: 'eldritch-invocation-book-of-ancient-secrets',
          name: 'Eldritch Invocation: Book of Ancient Secrets',
          url: '/api/2014/features/eldritch-invocation-book-of-ancient-secrets',
        },
        {
          index: 'eldritch-invocation-devils-sight',
          name: "Eldritch Invocation: Devil's Sight",
          url: '/api/2014/features/eldritch-invocation-devils-sight',
        },
        {
          index: 'eldritch-invocation-eldritch-sight',
          name: 'Eldritch Invocation: Eldritch Sight',
          url: '/api/2014/features/eldritch-invocation-eldritch-sight',
        },
        {
          index: 'eldritch-invocation-eldritch-spear',
          name: 'Eldritch Invocation: Eldritch Spear',
          url: '/api/2014/features/eldritch-invocation-eldritch-spear',
        },
        {
          index: 'eldritch-invocation-eyes-of-the-rune-keeper',
          name: 'Eldritch Invocation: Eyes of the Rune Keeper',
          url: '/api/2014/features/eldritch-invocation-eyes-of-the-rune-keeper',
        },
        {
          index: 'eldritch-invocation-fiendish-vigor',
          name: 'Eldritch Invocation: Fiendish Vigor',
          url: '/api/2014/features/eldritch-invocation-fiendish-vigor',
        },
        {
          index: 'eldritch-invocation-gaze-of-two-minds',
          name: 'Eldritch Invocation: Gaze of Two Minds',
          url: '/api/2014/features/eldritch-invocation-gaze-of-two-minds',
        },
        {
          index: 'eldritch-invocation-mask-of-many-faces',
          name: 'Eldritch Invocation: Mask of Many Faces',
          url: '/api/2014/features/eldritch-invocation-mask-of-many-faces',
        },
        {
          index: 'eldritch-invocation-misty-visions',
          name: 'Eldritch Invocation: Misty Visions',
          url: '/api/2014/features/eldritch-invocation-misty-visions',
        },
        {
          index: 'eldritch-invocation-repelling-blast',
          name: 'Eldritch Invocation: Repelling Blast',
          url: '/api/2014/features/eldritch-invocation-repelling-blast',
        },
        {
          index: 'eldritch-invocation-thief-of-five-fates',
          name: 'Eldritch Invocation: Thief of Five Fates',
          url: '/api/2014/features/eldritch-invocation-thief-of-five-fates',
        },
        {
          index: 'eldritch-invocation-voice-of-the-chain-master',
          name: 'Eldritch Invocation: Voice of the Chain Master',
          url: '/api/2014/features/eldritch-invocation-voice-of-the-chain-master',
        },
        {
          index: 'eldritch-invocation-mire-the-mind',
          name: 'Eldritch Invocation: Mire the Mind',
          url: '/api/2014/features/eldritch-invocation-mire-the-mind',
        },
        {
          index: 'eldritch-invocation-one-with-shadows',
          name: 'Eldritch Invocation: One with Shadows',
          url: '/api/2014/features/eldritch-invocation-one-with-shadows',
        },
        {
          index: 'eldritch-invocation-sign-of-ill-omen',
          name: 'Eldritch Invocation: Sign of Ill Omen',
          url: '/api/2014/features/eldritch-invocation-sign-of-ill-omen',
        },
        {
          index: 'eldritch-invocation-thirsting-blade',
          name: 'Eldritch Invocation: Thirsting Blade',
          url: '/api/2014/features/eldritch-invocation-thirsting-blade',
        },
        {
          index: 'eldritch-invocation-bewitching-whispers',
          name: 'Eldritch Invocation: Bewitching Whispers',
          url: '/api/2014/features/eldritch-invocation-bewitching-whispers',
        },
        {
          index: 'eldritch-invocation-dreadful-word',
          name: 'Eldritch Invocation: Dreadful Word',
          url: '/api/2014/features/eldritch-invocation-dreadful-word',
        },
        {
          index: 'eldritch-invocation-sculptor-of-flesh',
          name: 'Eldritch Invocation: Sculptor of Flesh',
          url: '/api/2014/features/eldritch-invocation-sculptor-of-flesh',
        },
        {
          index: 'eldritch-invocation-ascendant-step',
          name: 'Eldritch Invocation: Ascendant Step',
          url: '/api/2014/features/eldritch-invocation-ascendant-step',
        },
        {
          index: 'eldritch-invocation-minions-of-chaos',
          name: 'Eldritch Invocation: Minions of Chaos',
          url: '/api/2014/features/eldritch-invocation-minions-of-chaos',
        },
        {
          index: 'eldritch-invocation-otherworldly-leap',
          name: 'Eldritch Invocation: Otherworldly Leap',
          url: '/api/2014/features/eldritch-invocation-otherworldly-leap',
        },
        {
          index: 'eldritch-invocation-whispers-of-the-grave',
          name: 'Eldritch Invocation: Whispers of the Grave',
          url: '/api/2014/features/eldritch-invocation-whispers-of-the-grave',
        },
        {
          index: 'eldritch-invocation-lifedrinker',
          name: 'Eldritch Invocation: Lifedrinker',
          url: '/api/2014/features/eldritch-invocation-lifedrinker',
        },
        {
          index: 'eldritch-invocation-chains-of-carceri',
          name: 'Eldritch Invocation: Chains of Carceri',
          url: '/api/2014/features/eldritch-invocation-chains-of-carceri',
        },
        {
          index: 'eldritch-invocation-master-of-myriad-forms',
          name: 'Eldritch Invocation: Master of Myriad Forms',
          url: '/api/2014/features/eldritch-invocation-master-of-myriad-forms',
        },
        {
          index: 'eldritch-invocation-visions-of-distant-realms',
          name: 'Eldritch Invocation: Visions of Distant Realms',
          url: '/api/2014/features/eldritch-invocation-visions-of-distant-realms',
        },
        {
          index: 'eldritch-invocation-witch-sight',
          name: 'Eldritch Invocation: Witch Sight',
          url: '/api/2014/features/eldritch-invocation-witch-sight',
        },
      ],
    },
    url: '/api/2014/features/eldritch-invocations',
  },
  'eldritch-invocation-agonizing-blast': {
    index: 'eldritch-invocation-agonizing-blast',
    class: {
      index: 'warlock',
      name: 'Warlock',
      url: '/api/2014/classes/warlock',
    },
    name: 'Eldritch Invocation: Agonizing Blast',
    level: 2,
    prerequisites: [
      {
        type: 'spell',
        spell: '/api/2014/spells/eldritch-blast',
      },
    ],
    desc: [
      'When you cast eldritch blast, add your Charisma modifier to the damage it deals on a hit.',
    ],
    parent: {
      index: 'eldritch-invocations',
      name: 'Eldritch Invocations',
      url: '/api/2014/features/eldritch-invocations',
    },
    url: '/api/2014/features/eldritch-invocation-agonizing-blast',
  },
  'eldritch-invocation-armor-of-shadows': {
    index: 'eldritch-invocation-armor-of-shadows',
    class: {
      index: 'warlock',
      name: 'Warlock',
      url: '/api/2014/classes/warlock',
    },
    name: 'Eldritch Invocation: Armor of Shadows',
    level: 2,
    prerequisites: [],
    desc: [
      'You can cast mage armor on yourself at will, without expending a spell slot or material components.',
    ],
    parent: {
      index: 'eldritch-invocations',
      name: 'Eldritch Invocations',
      url: '/api/2014/features/eldritch-invocations',
    },
    url: '/api/2014/features/eldritch-invocation-armor-of-shadows',
  },
  'eldritch-invocation-beast-speech': {
    index: 'eldritch-invocation-beast-speech',
    class: {
      index: 'warlock',
      name: 'Warlock',
      url: '/api/2014/classes/warlock',
    },
    name: 'Eldritch Invocation: Beast Speech',
    level: 2,
    prerequisites: [],
    desc: [
      'You can cast speak with animals at will, without expending a spell slot.',
    ],
    parent: {
      index: 'eldritch-invocations',
      name: 'Eldritch Invocations',
      url: '/api/2014/features/eldritch-invocations',
    },
    url: '/api/2014/features/eldritch-invocation-beast-speech',
  },
  'eldritch-invocation-beguiling-influence': {
    index: 'eldritch-invocation-beguiling-influence',
    class: {
      index: 'warlock',
      name: 'Warlock',
      url: '/api/2014/classes/warlock',
    },
    name: 'Eldritch Invocation: Beguiling Influence',
    level: 2,
    prerequisites: [],
    desc: ['You gain proficiency in the Deception and Persuasion skills.'],
    parent: {
      index: 'eldritch-invocations',
      name: 'Eldritch Invocations',
      url: '/api/2014/features/eldritch-invocations',
    },
    url: '/api/2014/features/eldritch-invocation-beguiling-influence',
  },
  'eldritch-invocation-book-of-ancient-secrets': {
    index: 'eldritch-invocation-book-of-ancient-secrets',
    class: {
      index: 'warlock',
      name: 'Warlock',
      url: '/api/2014/classes/warlock',
    },
    name: 'Eldritch Invocation: Book of Ancient Secrets',
    level: 2,
    prerequisites: [
      {
        type: 'feature',
        feature: '/api/2014/features/pact-of-the-tome',
      },
    ],
    desc: [
      "You can now inscribe magical rituals in your Book of Shadows. Choose two 1st-level spells that have the ritual tag from any class's spell list (the two needn't be from the same list). The spells appear in the book and don't count against the number of spells you know. With your Book of Shadows in hand, you can cast the chosen spells as rituals. You can't cast the spells except as rituals, unless you've learned them by some other means. You can also cast a warlock spell you know as a ritual if it has the ritual tag.",
      "On your adventures, you can add other ritual spells to your Book of Shadows. When you find such a spell, you can add it to the book if the spell's level is equal to or less than half your warlock level (rounded up) and if you can spare the time to transcribe the spell. For each level of the spell, the transcription process takes 2 hours and costs 50 gp for the rare inks needed to inscribe it.",
    ],
    parent: {
      index: 'eldritch-invocations',
      name: 'Eldritch Invocations',
      url: '/api/2014/features/eldritch-invocations',
    },
    url: '/api/2014/features/eldritch-invocation-book-of-ancient-secrets',
  },
  'eldritch-invocation-devils-sight': {
    index: 'eldritch-invocation-devils-sight',
    class: {
      index: 'warlock',
      name: 'Warlock',
      url: '/api/2014/classes/warlock',
    },
    name: "Eldritch Invocation: Devil's Sight",
    level: 2,
    prerequisites: [],
    desc: [
      'You can see normally in darkness, both magical and nonmagical, to a distance of 120 feet.',
    ],
    parent: {
      index: 'eldritch-invocations',
      name: 'Eldritch Invocations',
      url: '/api/2014/features/eldritch-invocations',
    },
    url: '/api/2014/features/eldritch-invocation-devils-sight',
  },
  'eldritch-invocation-eldritch-sight': {
    index: 'eldritch-invocation-eldritch-sight',
    class: {
      index: 'warlock',
      name: 'Warlock',
      url: '/api/2014/classes/warlock',
    },
    name: 'Eldritch Invocation: Eldritch Sight',
    level: 2,
    prerequisites: [],
    desc: [
      'You can cast detect magic at will, without expending a spell slot.',
    ],
    parent: {
      index: 'eldritch-invocations',
      name: 'Eldritch Invocations',
      url: '/api/2014/features/eldritch-invocations',
    },
    url: '/api/2014/features/eldritch-invocation-eldritch-sight',
  },
  'eldritch-invocation-eldritch-spear': {
    index: 'eldritch-invocation-eldritch-spear',
    class: {
      index: 'warlock',
      name: 'Warlock',
      url: '/api/2014/classes/warlock',
    },
    name: 'Eldritch Invocation: Eldritch Spear',
    level: 2,
    prerequisites: [
      {
        type: 'spell',
        spell: '/api/2014/spells/eldritch-blast',
      },
    ],
    desc: ['When you cast eldritch blast, its range is 300 feet.'],
    parent: {
      index: 'eldritch-invocations',
      name: 'Eldritch Invocations',
      url: '/api/2014/features/eldritch-invocations',
    },
    url: '/api/2014/features/eldritch-invocation-eldritch-spear',
  },
  'eldritch-invocation-eyes-of-the-rune-keeper': {
    index: 'eldritch-invocation-eyes-of-the-rune-keeper',
    class: {
      index: 'warlock',
      name: 'Warlock',
      url: '/api/2014/classes/warlock',
    },
    name: 'Eldritch Invocation: Eyes of the Rune Keeper',
    level: 2,
    prerequisites: [],
    desc: ['You can read all writing.'],
    parent: {
      index: 'eldritch-invocations',
      name: 'Eldritch Invocations',
      url: '/api/2014/features/eldritch-invocations',
    },
    url: '/api/2014/features/eldritch-invocation-eyes-of-the-rune-keeper',
  },
  'eldritch-invocation-fiendish-vigor': {
    index: 'eldritch-invocation-fiendish-vigor',
    class: {
      index: 'warlock',
      name: 'Warlock',
      url: '/api/2014/classes/warlock',
    },
    name: 'Eldritch Invocation: Fiendish Vigor',
    level: 2,
    prerequisites: [],
    desc: [
      'You can cast false life on yourself at will as a 1st-level spell, without expending a spell slot or material components.',
    ],
    parent: {
      index: 'eldritch-invocations',
      name: 'Eldritch Invocations',
      url: '/api/2014/features/eldritch-invocations',
    },
    url: '/api/2014/features/eldritch-invocation-fiendish-vigor',
  },
  'eldritch-invocation-gaze-of-two-minds': {
    index: 'eldritch-invocation-gaze-of-two-minds',
    class: {
      index: 'warlock',
      name: 'Warlock',
      url: '/api/2014/classes/warlock',
    },
    name: 'Eldritch Invocation: Gaze of Two Minds',
    level: 2,
    prerequisites: [],
    desc: [
      "You can use your action to touch a willing humanoid and perceive through its senses until the end of your next turn. As long as the creature is on the same plane of existence as you, you can use your action on subsequent turns to maintain this connection, extending the duration until the end of your next turn. While perceiving through the other creature's senses, you benefit from any special senses possessed by that creature, and you are blinded and deafened to your own surroundings.",
    ],
    parent: {
      index: 'eldritch-invocations',
      name: 'Eldritch Invocations',
      url: '/api/2014/features/eldritch-invocations',
    },
    url: '/api/2014/features/eldritch-invocation-gaze-of-two-minds',
  },
  'eldritch-invocation-mask-of-many-faces': {
    index: 'eldritch-invocation-mask-of-many-faces',
    class: {
      index: 'warlock',
      name: 'Warlock',
      url: '/api/2014/classes/warlock',
    },
    name: 'Eldritch Invocation: Mask of Many Faces',
    level: 2,
    prerequisites: [],
    desc: [
      'You can cast disguise self at will, without expending a spell slot.',
    ],
    parent: {
      index: 'eldritch-invocations',
      name: 'Eldritch Invocations',
      url: '/api/2014/features/eldritch-invocations',
    },
    url: '/api/2014/features/eldritch-invocation-mask-of-many-faces',
  },
  'eldritch-invocation-misty-visions': {
    index: 'eldritch-invocation-misty-visions',
    class: {
      index: 'warlock',
      name: 'Warlock',
      url: '/api/2014/classes/warlock',
    },
    name: 'Eldritch Invocation: Misty Visions',
    level: 2,
    prerequisites: [],
    desc: [
      'You can cast silent image at will, without expending a spell slot or material components.',
    ],
    parent: {
      index: 'eldritch-invocations',
      name: 'Eldritch Invocations',
      url: '/api/2014/features/eldritch-invocations',
    },
    url: '/api/2014/features/eldritch-invocation-misty-visions',
  },
  'eldritch-invocation-repelling-blast': {
    index: 'eldritch-invocation-repelling-blast',
    class: {
      index: 'warlock',
      name: 'Warlock',
      url: '/api/2014/classes/warlock',
    },
    name: 'Eldritch Invocation: Repelling Blast',
    level: 2,
    prerequisites: [
      {
        type: 'spell',
        spell: '/api/2014/spells/eldritch-blast',
      },
    ],
    desc: [
      'When you hit a creature with eldritch blast, you can push the creature up to 10 feet away from you in a straight line.',
    ],
    parent: {
      index: 'eldritch-invocations',
      name: 'Eldritch Invocations',
      url: '/api/2014/features/eldritch-invocations',
    },
    url: '/api/2014/features/eldritch-invocation-repelling-blast',
  },
  'eldritch-invocation-thief-of-five-fates': {
    index: 'eldritch-invocation-thief-of-five-fates',
    class: {
      index: 'warlock',
      name: 'Warlock',
      url: '/api/2014/classes/warlock',
    },
    name: 'Eldritch Invocation: Thief of Five Fates',
    level: 2,
    prerequisites: [],
    desc: [
      "You can cast bane once using a warlock spell slot. You can't do so again until you finish a long rest.",
    ],
    parent: {
      index: 'eldritch-invocations',
      name: 'Eldritch Invocations',
      url: '/api/2014/features/eldritch-invocations',
    },
    url: '/api/2014/features/eldritch-invocation-thief-of-five-fates',
  },
  'eldritch-invocation-voice-of-the-chain-master': {
    index: 'eldritch-invocation-voice-of-the-chain-master',
    class: {
      index: 'warlock',
      name: 'Warlock',
      url: '/api/2014/classes/warlock',
    },
    name: 'Eldritch Invocation: Voice of the Chain Master',
    level: 2,
    prerequisites: [
      {
        type: 'feature',
        feature: '/api/2014/features/pact-of-the-chain',
      },
    ],
    desc: [
      "You can communicate telepathically with your familiar and perceive through your familiar's senses as long as you are on the same plane of existence.",
      "Additionally, while perceiving through your familiar's senses, you can also speak through your familiar in your own voice, even if your familiar is normally incapable of speech.",
    ],
    parent: {
      index: 'eldritch-invocations',
      name: 'Eldritch Invocations',
      url: '/api/2014/features/eldritch-invocations',
    },
    url: '/api/2014/features/eldritch-invocation-voice-of-the-chain-master',
  },
  'eldritch-invocation-mire-the-mind': {
    index: 'eldritch-invocation-mire-the-mind',
    class: {
      index: 'warlock',
      name: 'Warlock',
      url: '/api/2014/classes/warlock',
    },
    name: 'Eldritch Invocation: Mire the Mind',
    level: 5,
    prerequisites: [
      {
        type: 'level',
        level: 5,
      },
    ],
    desc: [
      "You can cast slow once using a warlock spell slot. You can't do so again until you finish a long rest.",
    ],
    parent: {
      index: 'eldritch-invocations',
      name: 'Eldritch Invocations',
      url: '/api/2014/features/eldritch-invocations',
    },
    url: '/api/2014/features/eldritch-invocation-mire-the-mind',
  },
  'eldritch-invocation-one-with-shadows': {
    index: 'eldritch-invocation-one-with-shadows',
    class: {
      index: 'warlock',
      name: 'Warlock',
      url: '/api/2014/classes/warlock',
    },
    name: 'Eldritch Invocation: One with Shadows',
    level: 5,
    prerequisites: [
      {
        type: 'level',
        level: 5,
      },
    ],
    desc: [
      'When you are in an area of dim light or darkness, you can use your action to become invisible until you move or take an action or a reaction.',
    ],
    parent: {
      index: 'eldritch-invocations',
      name: 'Eldritch Invocations',
      url: '/api/2014/features/eldritch-invocations',
    },
    url: '/api/2014/features/eldritch-invocation-one-with-shadows',
  },
  'eldritch-invocation-sign-of-ill-omen': {
    index: 'eldritch-invocation-sign-of-ill-omen',
    class: {
      index: 'warlock',
      name: 'Warlock',
      url: '/api/2014/classes/warlock',
    },
    name: 'Eldritch Invocation: Sign of Ill Omen',
    level: 5,
    prerequisites: [
      {
        type: 'level',
        level: 5,
      },
    ],
    desc: [
      "You can cast bestow curse once using a warlock spell slot. You can't do so again until you finish a long rest.",
    ],
    parent: {
      index: 'eldritch-invocations',
      name: 'Eldritch Invocations',
      url: '/api/2014/features/eldritch-invocations',
    },
    url: '/api/2014/features/eldritch-invocation-sign-of-ill-omen',
  },
  'eldritch-invocation-thirsting-blade': {
    index: 'eldritch-invocation-thirsting-blade',
    class: {
      index: 'warlock',
      name: 'Warlock',
      url: '/api/2014/classes/warlock',
    },
    name: 'Eldritch Invocation: Thirsting Blade',
    level: 5,
    prerequisites: [
      {
        type: 'level',
        level: 5,
      },
      {
        type: 'feature',
        feature: '/api/2014/features/pact-of-the-blade',
      },
    ],
    desc: [
      'You can attack with your pact weapon twice, instead of once, whenever you take the Attack action on your turn.',
    ],
    parent: {
      index: 'eldritch-invocations',
      name: 'Eldritch Invocations',
      url: '/api/2014/features/eldritch-invocations',
    },
    url: '/api/2014/features/eldritch-invocation-thirsting-blade',
  },
  'otherworldly-patron-improvement-1': {
    index: 'otherworldly-patron-improvement-1',
    class: {
      index: 'warlock',
      name: 'Warlock',
      url: '/api/2014/classes/warlock',
    },
    name: 'Otherworldly Patron feature',
    level: 6,
    prerequisites: [],
    desc: [
      'At 1st level, you have struck a bargain with an otherworldly being of your choice, such as the Fiend. Your choice grants you features at 1st level and again at 6th, 10th, and 14th level.',
    ],
    url: '/api/2014/features/otherworldly-patron-improvement-1',
  },
  'eldritch-invocation-bewitching-whispers': {
    index: 'eldritch-invocation-bewitching-whispers',
    class: {
      index: 'warlock',
      name: 'Warlock',
      url: '/api/2014/classes/warlock',
    },
    name: 'Eldritch Invocation: Bewitching Whispers',
    level: 7,
    prerequisites: [
      {
        type: 'level',
        level: 7,
      },
    ],
    desc: [
      "You can cast compulsion once using a warlock spell slot. You can't do so again until you finish a long rest.",
    ],
    parent: {
      index: 'eldritch-invocations',
      name: 'Eldritch Invocations',
      url: '/api/2014/features/eldritch-invocations',
    },
    url: '/api/2014/features/eldritch-invocation-bewitching-whispers',
  },
  'eldritch-invocation-dreadful-word': {
    index: 'eldritch-invocation-dreadful-word',
    class: {
      index: 'warlock',
      name: 'Warlock',
      url: '/api/2014/classes/warlock',
    },
    name: 'Eldritch Invocation: Dreadful Word',
    level: 7,
    prerequisites: [
      {
        type: 'level',
        level: 7,
      },
    ],
    desc: [
      "You can cast confusion once using a warlock spell slot. You can't do so again until you finish a long rest.",
    ],
    parent: {
      index: 'eldritch-invocations',
      name: 'Eldritch Invocations',
      url: '/api/2014/features/eldritch-invocations',
    },
    url: '/api/2014/features/eldritch-invocation-dreadful-word',
  },
  'eldritch-invocation-sculptor-of-flesh': {
    index: 'eldritch-invocation-sculptor-of-flesh',
    class: {
      index: 'warlock',
      name: 'Warlock',
      url: '/api/2014/classes/warlock',
    },
    name: 'Eldritch Invocation: Sculptor of Flesh',
    level: 7,
    prerequisites: [
      {
        type: 'level',
        level: 7,
      },
    ],
    desc: [
      "You can cast polymorph once using a warlock spell slot. You can't do so again until you finish a long rest.",
    ],
    parent: {
      index: 'eldritch-invocations',
      name: 'Eldritch Invocations',
      url: '/api/2014/features/eldritch-invocations',
    },
    url: '/api/2014/features/eldritch-invocation-sculptor-of-flesh',
  },
  'eldritch-invocation-ascendant-step': {
    index: 'eldritch-invocation-ascendant-step',
    class: {
      index: 'warlock',
      name: 'Warlock',
      url: '/api/2014/classes/warlock',
    },
    name: 'Eldritch Invocation: Ascendant Step',
    level: 9,
    prerequisites: [
      {
        type: 'level',
        level: 9,
      },
    ],
    desc: [
      'You can cast levitate on yourself at will, without expending a spell slot or material components.',
    ],
    parent: {
      index: 'eldritch-invocations',
      name: 'Eldritch Invocations',
      url: '/api/2014/features/eldritch-invocations',
    },
    url: '/api/2014/features/eldritch-invocation-ascendant-step',
  },
  'eldritch-invocation-minions-of-chaos': {
    index: 'eldritch-invocation-minions-of-chaos',
    class: {
      index: 'warlock',
      name: 'Warlock',
      url: '/api/2014/classes/warlock',
    },
    name: 'Eldritch Invocation: Minions of Chaos',
    level: 9,
    prerequisites: [
      {
        type: 'level',
        level: 9,
      },
    ],
    desc: [
      "You can cast conjure elemental once using a warlock spell slot. You can't do so again until you finish a long rest.",
    ],
    parent: {
      index: 'eldritch-invocations',
      name: 'Eldritch Invocations',
      url: '/api/2014/features/eldritch-invocations',
    },
    url: '/api/2014/features/eldritch-invocation-minions-of-chaos',
  },
  'eldritch-invocation-otherworldly-leap': {
    index: 'eldritch-invocation-otherworldly-leap',
    class: {
      index: 'warlock',
      name: 'Warlock',
      url: '/api/2014/classes/warlock',
    },
    name: 'Eldritch Invocation: Otherworldly Leap',
    level: 9,
    prerequisites: [
      {
        type: 'level',
        level: 9,
      },
    ],
    desc: [
      'You can cast jump on yourself at will, without expending a spell slot or material components.',
    ],
    parent: {
      index: 'eldritch-invocations',
      name: 'Eldritch Invocations',
      url: '/api/2014/features/eldritch-invocations',
    },
    url: '/api/2014/features/eldritch-invocation-otherworldly-leap',
  },
  'eldritch-invocation-whispers-of-the-grave': {
    index: 'eldritch-invocation-whispers-of-the-grave',
    class: {
      index: 'warlock',
      name: 'Warlock',
      url: '/api/2014/classes/warlock',
    },
    name: 'Eldritch Invocation: Whispers of the Grave',
    level: 9,
    prerequisites: [
      {
        type: 'level',
        level: 9,
      },
    ],
    desc: [
      'You can cast speak with dead at will, without expending a spell slot.',
    ],
    parent: {
      index: 'eldritch-invocations',
      name: 'Eldritch Invocations',
      url: '/api/2014/features/eldritch-invocations',
    },
    url: '/api/2014/features/eldritch-invocation-whispers-of-the-grave',
  },
  'otherworldly-patron-improvement-2': {
    index: 'otherworldly-patron-improvement-2',
    class: {
      index: 'warlock',
      name: 'Warlock',
      url: '/api/2014/classes/warlock',
    },
    name: 'Otherworldly Patron feature',
    level: 10,
    prerequisites: [],
    desc: [
      'At 1st level, you have struck a bargain with an otherworldly being of your choice, such as the Fiend. Your choice grants you features at 1st level and again at 6th, 10th, and 14th level.',
    ],
    url: '/api/2014/features/otherworldly-patron-improvement-2',
  },
  'eldritch-invocation-lifedrinker': {
    index: 'eldritch-invocation-lifedrinker',
    class: {
      index: 'warlock',
      name: 'Warlock',
      url: '/api/2014/classes/warlock',
    },
    name: 'Eldritch Invocation: Lifedrinker',
    level: 12,
    prerequisites: [
      {
        type: 'level',
        level: 12,
      },
      {
        type: 'feature',
        feature: '/api/2014/features/pact-of-the-blade',
      },
    ],
    desc: [
      'When you hit a creature with your pact weapon, the creature takes extra necrotic damage equal to your Charisma modifier (minimum 1).',
    ],
    parent: {
      index: 'eldritch-invocations',
      name: 'Eldritch Invocations',
      url: '/api/2014/features/eldritch-invocations',
    },
    url: '/api/2014/features/eldritch-invocation-lifedrinker',
  },
  'otherworldly-patron-improvement-3': {
    index: 'otherworldly-patron-improvement-3',
    class: {
      index: 'warlock',
      name: 'Warlock',
      url: '/api/2014/classes/warlock',
    },
    name: 'Otherworldly Patron feature',
    level: 14,
    prerequisites: [],
    desc: [
      'At 1st level, you have struck a bargain with an otherworldly being of your choice, such as the Fiend. Your choice grants you features at 1st level and again at 6th, 10th, and 14th level.',
    ],
    url: '/api/2014/features/otherworldly-patron-improvement-3',
  },
  'eldritch-invocation-chains-of-carceri': {
    index: 'eldritch-invocation-chains-of-carceri',
    class: {
      index: 'warlock',
      name: 'Warlock',
      url: '/api/2014/classes/warlock',
    },
    name: 'Eldritch Invocation: Chains of Carceri',
    level: 15,
    prerequisites: [
      {
        type: 'level',
        level: 15,
      },
      {
        type: 'feature',
        feature: '/api/2014/features/pact-of-the-chain',
      },
    ],
    desc: [
      'You can cast hold monster at will--targeting a celestial, fiend, or elemental--without expending a spell slot or material components. You must finish a long rest before you can use this invocation on the same creature again.',
    ],
    parent: {
      index: 'eldritch-invocations',
      name: 'Eldritch Invocations',
      url: '/api/2014/features/eldritch-invocations',
    },
    url: '/api/2014/features/eldritch-invocation-chains-of-carceri',
  },
  'eldritch-invocation-master-of-myriad-forms': {
    index: 'eldritch-invocation-master-of-myriad-forms',
    class: {
      index: 'warlock',
      name: 'Warlock',
      url: '/api/2014/classes/warlock',
    },
    name: 'Eldritch Invocation: Master of Myriad Forms',
    level: 15,
    prerequisites: [
      {
        type: 'level',
        level: 15,
      },
    ],
    desc: ['You can cast alter self at will, without expending a spell slot.'],
    parent: {
      index: 'eldritch-invocations',
      name: 'Eldritch Invocations',
      url: '/api/2014/features/eldritch-invocations',
    },
    url: '/api/2014/features/eldritch-invocation-master-of-myriad-forms',
  },
  'eldritch-invocation-visions-of-distant-realms': {
    index: 'eldritch-invocation-visions-of-distant-realms',
    class: {
      index: 'warlock',
      name: 'Warlock',
      url: '/api/2014/classes/warlock',
    },
    name: 'Eldritch Invocation: Visions of Distant Realms',
    level: 15,
    prerequisites: [
      {
        type: 'level',
        level: 15,
      },
    ],
    desc: ['You can cast arcane eye at will, without expending a spell slot.'],
    parent: {
      index: 'eldritch-invocations',
      name: 'Eldritch Invocations',
      url: '/api/2014/features/eldritch-invocations',
    },
    url: '/api/2014/features/eldritch-invocation-visions-of-distant-realms',
  },
  'eldritch-invocation-witch-sight': {
    index: 'eldritch-invocation-witch-sight',
    class: {
      index: 'warlock',
      name: 'Warlock',
      url: '/api/2014/classes/warlock',
    },
    name: 'Eldritch Invocation: Witch Sight',
    level: 15,
    prerequisites: [
      {
        type: 'level',
        level: 15,
      },
    ],
    desc: [
      'You can see the true form of any shapechanger or creature concealed by illusion or transmutation magic while the creature is within 30 feet of you and within line of sight.',
    ],
    parent: {
      index: 'eldritch-invocations',
      name: 'Eldritch Invocations',
      url: '/api/2014/features/eldritch-invocations',
    },
    url: '/api/2014/features/eldritch-invocation-witch-sight',
  },
  'pact-boon': {
    index: 'pact-boon',
    class: {
      index: 'warlock',
      name: 'Warlock',
      url: '/api/2014/classes/warlock',
    },
    name: 'Pact Boon',
    level: 3,
    prerequisites: [],
    desc: [
      'At 3rd level, your otherworldly patron bestows a gift upon you for your loyal service. You gain one of the following features of your choice.',
    ],
    feature_specific: {
      subfeature_options: {
        choose: 1,
        type: 'feature',
        from: {
          option_set_type: 'options_array',
          options: [
            {
              option_type: 'reference',
              item: {
                index: 'pact-of-the-chain',
                name: 'Pact of the Chain',
                url: '/api/2014/features/pact-of-the-chain',
              },
            },
            {
              option_type: 'reference',
              item: {
                index: 'pact-of-the-blade',
                name: 'Pact of the Blade',
                url: '/api/2014/features/pact-of-the-blade',
              },
            },
            {
              option_type: 'reference',
              item: {
                index: 'pact-of-the-tome',
                name: 'Pact of the Tome',
                url: '/api/2014/features/pact-of-the-tome',
              },
            },
          ],
        },
      },
    },
    url: '/api/2014/features/pact-boon',
  },
  'pact-of-the-chain': {
    index: 'pact-of-the-chain',
    class: {
      index: 'warlock',
      name: 'Warlock',
      url: '/api/2014/classes/warlock',
    },
    name: 'Pact of the Chain',
    level: 3,
    prerequisites: [],
    desc: [
      "You learn the find familiar spell and can cast it as a ritual. The spell doesn't count against your number of spells known.",
      'When you cast the spell, you can choose one of the normal forms for your familiar or one of the following special forms: imp, pseudodragon, quasit, or sprite.',
      'Additionally, when you take the Attack action, you can forgo one of your own attacks to allow your familiar to make one attack of its own with its reaction.',
      'Your familiar is more cunning than a typical familiar. Its default form can be a reflection of your patron, with imps and quasits tied to the Fiend.',
    ],
    parent: {
      index: 'pact-boon',
      name: 'Pact Boon',
      url: '/api/2014/features/pact-boon',
    },
    url: '/api/2014/features/pact-of-the-chain',
  },
  'pact-of-the-blade': {
    index: 'pact-of-the-blade',
    class: {
      index: 'warlock',
      name: 'Warlock',
      url: '/api/2014/classes/warlock',
    },
    name: 'Pact of the Blade',
    level: 3,
    prerequisites: [],
    desc: [
      'You can use your action to create a pact weapon in your empty hand. You can choose the form that this melee weapon takes each time you create it. You are proficient with it while you wield it. This weapon counts as magical for the purpose of overcoming resistance and immunity to nonmagical attacks and damage.',
      'Your pact weapon disappears if it is more than 5 feet away from you for 1 minute or more. It also disappears if you use this feature again, if you dismiss the weapon (no action required), or if you die.',
      "You can transform one magic weapon into your pact weapon by performing a special ritual while you hold the weapon. You perform the ritual over the course of 1 hour, which can be done during a short rest. You can then dismiss the weapon, shunting it into an extradimensional space, and it appears whenever you create your pact weapon thereafter. You can't affect an artifact or a sentient weapon in this way. The weapon ceases being your pact weapon if you die, if you perform the 1-hour ritual on a different weapon, or if you use a 1-hour ritual to break your bond to it. The weapon appears at your feet if it is in the extradimensional space when the bond breaks.",
      'If you serve the Fiend, your weapon could be an axe made of black metal and adorned with decorative flames.',
    ],
    parent: {
      index: 'pact-boon',
      name: 'Pact Boon',
      url: '/api/2014/features/pact-boon',
    },
    url: '/api/2014/features/pact-of-the-blade',
  },
  'pact-of-the-tome': {
    index: 'pact-of-the-tome',
    class: {
      index: 'warlock',
      name: 'Warlock',
      url: '/api/2014/classes/warlock',
    },
    name: 'Pact of the Tome',
    level: 3,
    prerequisites: [],
    desc: [
      "Your patron gives you a grimoire called a Book of Shadows. When you gain this feature, choose three cantrips from any class's spell list (the three needn't be from the same list). While the book is on your person, you can cast those cantrips at will. They don't count against your number of cantrips known. If they don't appear on the warlock spell list, they are nonetheless warlock spells for you.",
      'If you lose your Book of Shadows, you can perform a 1-hour ceremony to receive a replacement from your patron. This ceremony can be performed during a short or long rest, and it destroys the previous book. The book turns to ash when you die.',
      'Your Book of Shadows could be a weighty tome bound in demon hide studded with iron, holding spells of conjuration and a wealth of forbidden lore about the sinister regions of the cosmos, a gift of the Fiend.',
    ],
    parent: {
      index: 'pact-boon',
      name: 'Pact Boon',
      url: '/api/2014/features/pact-boon',
    },
    url: '/api/2014/features/pact-of-the-tome',
  },
  'warlock-ability-score-improvement-1': {
    index: 'warlock-ability-score-improvement-1',
    class: {
      index: 'warlock',
      name: 'Warlock',
      url: '/api/2014/classes/warlock',
    },
    name: 'Ability Score Improvement',
    level: 4,
    prerequisites: [],
    desc: [
      "When you reach 4th level, and again at 8th, 12th, 16th, and 19th level, you can increase one ability score of your choice by 2, or you can increase two ability scores of your choice by 1. As normal, you can't increase an ability score above 20 using this feature.",
    ],
    url: '/api/2014/features/warlock-ability-score-improvement-1',
  },
  'dark-ones-own-luck': {
    index: 'dark-ones-own-luck',
    class: {
      index: 'warlock',
      name: 'Warlock',
      url: '/api/2014/classes/warlock',
    },
    subclass: {
      index: 'fiend',
      name: 'Fiend',
      url: '/api/2014/subclasses/fiend',
    },
    name: "Dark One's Own Luck",
    level: 6,
    prerequisites: [],
    desc: [
      "Starting at 6th level, you can call on your patron to alter fate in your favor. When you make an ability check or a saving throw, you can use this feature to add a d10 to your roll. You can do so after seeing the initial roll but before any of the roll's effects occur.",
      "Once you use this feature, you can't use it again until you finish a short or long rest.",
    ],
    url: '/api/2014/features/dark-ones-own-luck',
  },
  'warlock-ability-score-improvement-2': {
    index: 'warlock-ability-score-improvement-2',
    class: {
      index: 'warlock',
      name: 'Warlock',
      url: '/api/2014/classes/warlock',
    },
    name: 'Ability Score Improvement',
    level: 8,
    prerequisites: [],
    desc: [
      "When you reach 4th level, and again at 8th, 12th, 16th, and 19th level, you can increase one ability score of your choice by 2, or you can increase two ability scores of your choice by 1. As normal, you can't increase an ability score above 20 using this feature.",
    ],
    url: '/api/2014/features/warlock-ability-score-improvement-2',
  },
  'fiendish-resilience': {
    index: 'fiendish-resilience',
    class: {
      index: 'warlock',
      name: 'Warlock',
      url: '/api/2014/classes/warlock',
    },
    subclass: {
      index: 'fiend',
      name: 'Fiend',
      url: '/api/2014/subclasses/fiend',
    },
    name: 'Fiendish Resilience',
    level: 10,
    prerequisites: [],
    desc: [
      'Starting at 10th level, you can choose one damage type when you finish a short or long rest. You gain resistance to that damage type until you choose a different one with this feature. Damage from magical weapons or silver weapons ignores this resistance.',
    ],
    url: '/api/2014/features/fiendish-resilience',
  },
  'mystic-arcanum-6th-level': {
    index: 'mystic-arcanum-6th-level',
    class: {
      index: 'warlock',
      name: 'Warlock',
      url: '/api/2014/classes/warlock',
    },
    name: 'Mystic Arcanum (6th level)',
    level: 11,
    prerequisites: [],
    desc: [
      'At 11th level, your patron bestows upon you a magical secret called an arcanum. Choose one 6th- level spell from the warlock spell list as this arcanum.',
      'You can cast your arcanum spell once without expending a spell slot. You must finish a long rest before you can do so again.',
      'At higher levels, you gain more warlock spells of your choice that can be cast in this way: one 7th- level spell at 13th level, one 8th-level spell at 15th level, and one 9th-level spell at 17th level. You regain all uses of your Mystic Arcanum when you finish a long rest.',
    ],
    url: '/api/2014/features/mystic-arcanum-6th-level',
  },
  'warlock-ability-score-improvement-3': {
    index: 'warlock-ability-score-improvement-3',
    class: {
      index: 'warlock',
      name: 'Warlock',
      url: '/api/2014/classes/warlock',
    },
    name: 'Ability Score Improvement',
    level: 12,
    prerequisites: [],
    desc: [
      "When you reach 4th level, and again at 8th, 12th, 16th, and 19th level, you can increase one ability score of your choice by 2, or you can increase two ability scores of your choice by 1. As normal, you can't increase an ability score above 20 using this feature.",
    ],
    url: '/api/2014/features/warlock-ability-score-improvement-3',
  },
  'mystic-arcanum-7th-level': {
    index: 'mystic-arcanum-7th-level',
    class: {
      index: 'warlock',
      name: 'Warlock',
      url: '/api/2014/classes/warlock',
    },
    name: 'Mystic Arcanum (7th level)',
    level: 13,
    prerequisites: [],
    desc: [
      'At 11th level, your patron bestows upon you a magical secret called an arcanum. Choose one 6th- level spell from the warlock spell list as this arcanum.',
      'You can cast your arcanum spell once without expending a spell slot. You must finish a long rest before you can do so again.',
      'At higher levels, you gain more warlock spells of your choice that can be cast in this way: one 7th- level spell at 13th level, one 8th-level spell at 15th level, and one 9th-level spell at 17th level. You regain all uses of your Mystic Arcanum when you finish a long rest.',
    ],
    url: '/api/2014/features/mystic-arcanum-7th-level',
  },
  'hurl-through-hell': {
    index: 'hurl-through-hell',
    class: {
      index: 'warlock',
      name: 'Warlock',
      url: '/api/2014/classes/warlock',
    },
    subclass: {
      index: 'fiend',
      name: 'Fiend',
      url: '/api/2014/subclasses/fiend',
    },
    name: 'Hurl Through Hell',
    level: 14,
    prerequisites: [],
    desc: [
      'Starting at 14th level, when you hit a creature with an attack, you can use this feature to instantly transport the target through the lower planes. The creature disappears and hurtles through a nightmare landscape.',
      'At the end of your next turn, the target returns to the space it previously occupied, or the nearest unoccupied space. If the target is not a fiend, it takes 10d10 psychic damage as it reels from its horrific experience.',
      "Once you use this feature, you can't use it again until you finish a long rest.",
    ],
    url: '/api/2014/features/hurl-through-hell',
  },
  'mystic-arcanum-8th-level': {
    index: 'mystic-arcanum-8th-level',
    class: {
      index: 'warlock',
      name: 'Warlock',
      url: '/api/2014/classes/warlock',
    },
    name: 'Mystic Arcanum (8th level)',
    level: 15,
    prerequisites: [],
    desc: [
      'At 11th level, your patron bestows upon you a magical secret called an arcanum. Choose one 6th- level spell from the warlock spell list as this arcanum.',
      'You can cast your arcanum spell once without expending a spell slot. You must finish a long rest before you can do so again.',
      'At higher levels, you gain more warlock spells of your choice that can be cast in this way: one 7th- level spell at 13th level, one 8th-level spell at 15th level, and one 9th-level spell at 17th level. You regain all uses of your Mystic Arcanum when you finish a long rest.',
    ],
    url: '/api/2014/features/mystic-arcanum-8th-level',
  },
  'warlock-ability-score-improvement-4': {
    index: 'warlock-ability-score-improvement-4',
    class: {
      index: 'warlock',
      name: 'Warlock',
      url: '/api/2014/classes/warlock',
    },
    name: 'Ability Score Improvement',
    level: 16,
    prerequisites: [],
    desc: [
      "When you reach 4th level, and again at 8th, 12th, 16th, and 19th level, you can increase one ability score of your choice by 2, or you can increase two ability scores of your choice by 1. As normal, you can't increase an ability score above 20 using this feature.",
    ],
    url: '/api/2014/features/warlock-ability-score-improvement-4',
  },
  'mystic-arcanum-9th-level': {
    index: 'mystic-arcanum-9th-level',
    class: {
      index: 'warlock',
      name: 'Warlock',
      url: '/api/2014/classes/warlock',
    },
    name: 'Mystic Arcanum (9th level)',
    level: 17,
    prerequisites: [],
    desc: [
      'At 11th level, your patron bestows upon you a magical secret called an arcanum. Choose one 6th- level spell from the warlock spell list as this arcanum.',
      'You can cast your arcanum spell once without expending a spell slot. You must finish a long rest before you can do so again.',
      'At higher levels, you gain more warlock spells of your choice that can be cast in this way: one 7th- level spell at 13th level, one 8th-level spell at 15th level, and one 9th-level spell at 17th level. You regain all uses of your Mystic Arcanum when you finish a long rest.',
    ],
    url: '/api/2014/features/mystic-arcanum-9th-level',
  },
  'warlock-ability-score-improvement-5': {
    index: 'warlock-ability-score-improvement-5',
    class: {
      index: 'warlock',
      name: 'Warlock',
      url: '/api/2014/classes/warlock',
    },
    name: 'Ability Score Improvement',
    level: 19,
    prerequisites: [],
    desc: [
      "When you reach 4th level, and again at 8th, 12th, 16th, and 19th level, you can increase one ability score of your choice by 2, or you can increase two ability scores of your choice by 1. As normal, you can't increase an ability score above 20 using this feature.",
    ],
    url: '/api/2014/features/warlock-ability-score-improvement-5',
  },
  'eldritch-master': {
    index: 'eldritch-master',
    class: {
      index: 'warlock',
      name: 'Warlock',
      url: '/api/2014/classes/warlock',
    },
    name: 'Eldritch Master',
    level: 20,
    prerequisites: [],
    desc: [
      'At 20th level, you can draw on your inner reserve of mystical power while entreating your patron to regain expended spell slots. You can spend 1 minute entreating your patron for aid to regain all your expended spell slots from your Pact Magic feature.',
      'Once you regain spell slots with this feature, you must finish a long rest before you can do so again.',
    ],
    url: '/api/2014/features/eldritch-master',
  },
  'spellcasting-wizard': {
    index: 'spellcasting-wizard',
    class: {
      index: 'wizard',
      name: 'Wizard',
      url: '/api/2014/classes/wizard',
    },
    name: 'Spellcasting: Wizard',
    level: 1,
    prerequisites: [],
    desc: [
      'As a student of arcane magic, you have a spellbook containing spells that show the first glimmerings of your true power.',
    ],
    reference: '/api/2014/classes/wizard/spellcasting',
    url: '/api/2014/features/spellcasting-wizard',
  },
  'arcane-recovery': {
    index: 'arcane-recovery',
    class: {
      index: 'wizard',
      name: 'Wizard',
      url: '/api/2014/classes/wizard',
    },
    name: 'Arcane Recovery',
    level: 1,
    prerequisites: [],
    desc: [
      'You have learned to regain some of your magical energy by studying your spellbook. Once per day when you finish a short rest, you can choose expended spell slots to recover. The spell slots can have a combined level that is equal to or less than half your wizard level (rounded up), and none of the slots can be 6th level or higher.',
      "For example, if you're a 4th-level wizard, you can recover up to two levels worth of spell slots. You can recover either a 2nd-level spell slot or two 1st-level spell slots.",
    ],
    url: '/api/2014/features/arcane-recovery',
  },
  'arcane-tradition': {
    index: 'arcane-tradition',
    class: {
      index: 'wizard',
      name: 'Wizard',
      url: '/api/2014/classes/wizard',
    },
    name: 'Arcane Tradition',
    level: 2,
    prerequisites: [],
    desc: [
      'When you reach 2nd level, you choose an arcane tradition, shaping your practice of magic through one of eight schools, such as Evocation.',
      'Your choice grants you features at 2nd level and again at 6th, 10th, and 14th level.',
    ],
    url: '/api/2014/features/arcane-tradition',
  },
  'evocation-savant': {
    index: 'evocation-savant',
    class: {
      index: 'wizard',
      name: 'Wizard',
      url: '/api/2014/classes/wizard',
    },
    subclass: {
      index: 'evocation',
      name: 'Evocation',
      url: '/api/2014/subclasses/evocation',
    },
    name: 'Evocation Savant',
    level: 2,
    prerequisites: [],
    desc: [
      'Beginning when you select this school at 2nd level, the gold and time you must spend to copy an evocation spell into your spellbook is halved.',
    ],
    url: '/api/2014/features/evocation-savant',
  },
  'sculpt-spells': {
    index: 'sculpt-spells',
    class: {
      index: 'wizard',
      name: 'Wizard',
      url: '/api/2014/classes/wizard',
    },
    subclass: {
      index: 'evocation',
      name: 'Evocation',
      url: '/api/2014/subclasses/evocation',
    },
    name: 'Sculpt Spells',
    level: 2,
    prerequisites: [],
    desc: [
      "Beginning at 2nd level, you can create pockets of relative safety within the effects of your evocation spells. When you cast an evocation spell that affects other creatures that you can see, you can choose a number of them equal to 1 + the spell's level. The chosen creatures automatically succeed on their saving throws against the spell, and they take no damage if they would normally take half damage on a successful save.",
    ],
    url: '/api/2014/features/sculpt-spells',
  },
  'wizard-ability-score-improvement-1': {
    index: 'wizard-ability-score-improvement-1',
    class: {
      index: 'wizard',
      name: 'Wizard',
      url: '/api/2014/classes/wizard',
    },
    name: 'Ability Score Improvement',
    level: 4,
    prerequisites: [],
    desc: [
      "When you reach 4th level, and again at 8th, 12th, 16th, and 19th level, you can increase one ability score of your choice by 2, or you can increase two ability scores of your choice by 1. As normal, you can't increase an ability score above 20 using this feature.",
    ],
    url: '/api/2014/features/wizard-ability-score-improvement-1',
  },
  'arcane-tradition-improvement-1': {
    index: 'arcane-tradition-improvement-1',
    class: {
      index: 'wizard',
      name: 'Wizard',
      url: '/api/2014/classes/wizard',
    },
    name: 'Arcane Tradition feature',
    level: 6,
    prerequisites: [],
    desc: [
      'When you reach 2nd level, you choose an arcane tradition, shaping your practice of magic through one of eight schools, such as Evocation.',
      'Your choice grants you features at 2nd level and again at 6th, 10th, and 14th level.',
    ],
    url: '/api/2014/features/arcane-tradition-improvement-1',
  },
  'potent-cantrip': {
    index: 'potent-cantrip',
    class: {
      index: 'wizard',
      name: 'Wizard',
      url: '/api/2014/classes/wizard',
    },
    subclass: {
      index: 'evocation',
      name: 'Evocation',
      url: '/api/2014/subclasses/evocation',
    },
    name: 'Potent Cantrip',
    level: 6,
    prerequisites: [],
    desc: [
      "Starting at 6th level, your damaging cantrips affect even creatures that avoid the brunt of the effect. When a creature succeeds on a saving throw against your cantrip, the creature takes half the cantrip's damage (if any) but suffers no additional effect from the cantrip.",
    ],
    url: '/api/2014/features/potent-cantrip',
  },
  'wizard-ability-score-improvement-2': {
    index: 'wizard-ability-score-improvement-2',
    class: {
      index: 'wizard',
      name: 'Wizard',
      url: '/api/2014/classes/wizard',
    },
    name: 'Ability Score Improvement',
    level: 8,
    prerequisites: [],
    desc: [
      "When you reach 4th level, and again at 8th, 12th, 16th, and 19th level, you can increase one ability score of your choice by 2, or you can increase two ability scores of your choice by 1. As normal, you can't increase an ability score above 20 using this feature.",
    ],
    url: '/api/2014/features/wizard-ability-score-improvement-2',
  },
  'arcane-tradition-improvement-2': {
    index: 'arcane-tradition-improvement-2',
    class: {
      index: 'wizard',
      name: 'Wizard',
      url: '/api/2014/classes/wizard',
    },
    name: 'Arcane Tradition feature',
    level: 10,
    prerequisites: [],
    desc: [
      'When you reach 2nd level, you choose an arcane tradition, shaping your practice of magic through one of eight schools, such as Evocation.',
      'Your choice grants you features at 2nd level and again at 6th, 10th, and 14th level.',
    ],
    url: '/api/2014/features/arcane-tradition-improvement-2',
  },
  'empowered-evocation': {
    index: 'empowered-evocation',
    class: {
      index: 'wizard',
      name: 'Wizard',
      url: '/api/2014/classes/wizard',
    },
    subclass: {
      index: 'evocation',
      name: 'Evocation',
      url: '/api/2014/subclasses/evocation',
    },
    name: 'Empowered Evocation',
    level: 10,
    prerequisites: [],
    desc: [
      'Beginning at 10th level, you can add your Intelligence modifier to one damage roll of any wizard evocation spell you cast.',
    ],
    url: '/api/2014/features/empowered-evocation',
  },
  'wizard-ability-score-improvement-3': {
    index: 'wizard-ability-score-improvement-3',
    class: {
      index: 'wizard',
      name: 'Wizard',
      url: '/api/2014/classes/wizard',
    },
    name: 'Ability Score Improvement',
    level: 12,
    prerequisites: [],
    desc: [
      "When you reach 4th level, and again at 8th, 12th, 16th, and 19th level, you can increase one ability score of your choice by 2, or you can increase two ability scores of your choice by 1. As normal, you can't increase an ability score above 20 using this feature.",
    ],
    url: '/api/2014/features/wizard-ability-score-improvement-3',
  },
  'arcane-tradition-improvement-3': {
    index: 'arcane-tradition-improvement-3',
    class: {
      index: 'wizard',
      name: 'Wizard',
      url: '/api/2014/classes/wizard',
    },
    name: 'Arcane Tradition feature',
    level: 14,
    prerequisites: [],
    desc: [
      'When you reach 2nd level, you choose an arcane tradition, shaping your practice of magic through one of eight schools, such as Evocation.',
      'Your choice grants you features at 2nd level and again at 6th, 10th, and 14th level.',
    ],
    url: '/api/2014/features/arcane-tradition-improvement-3',
  },
  overchannel: {
    index: 'overchannel',
    class: {
      index: 'wizard',
      name: 'Wizard',
      url: '/api/2014/classes/wizard',
    },
    subclass: {
      index: 'evocation',
      name: 'Evocation',
      url: '/api/2014/subclasses/evocation',
    },
    name: 'Overchannel',
    level: 14,
    prerequisites: [],
    desc: [
      'Starting at 14th level, you can increase the power of your simpler spells. When you cast a wizard spell of 1st through 5th level that deals damage, you can deal maximum damage with that spell.',
      'The first time you do so, you suffer no adverse effect. If you use this feature again before you finish a long rest, you take 2d12 necrotic damage for each level of the spell, immediately after you cast it. Each time you use this feature again before finishing a long rest, the necrotic damage per spell level increases by 1d12. This damage ignores resistance and immunity.',
    ],
    url: '/api/2014/features/overchannel',
  },
  'wizard-ability-score-improvement-4': {
    index: 'wizard-ability-score-improvement-4',
    class: {
      index: 'wizard',
      name: 'Wizard',
      url: '/api/2014/classes/wizard',
    },
    name: 'Ability Score Improvement',
    level: 16,
    prerequisites: [],
    desc: [
      "When you reach 4th level, and again at 8th, 12th, 16th, and 19th level, you can increase one ability score of your choice by 2, or you can increase two ability scores of your choice by 1. As normal, you can't increase an ability score above 20 using this feature.",
    ],
    url: '/api/2014/features/wizard-ability-score-improvement-4',
  },
  'spell-mastery': {
    index: 'spell-mastery',
    class: {
      index: 'wizard',
      name: 'Wizard',
      url: '/api/2014/classes/wizard',
    },
    name: 'Spell Mastery',
    level: 18,
    prerequisites: [],
    desc: [
      'At 18th level, you have achieved such mastery over certain spells that you can cast them at will. Choose a 1st-level wizard spell and a 2nd-level wizard spell that are in your spellbook. You can cast those spells at their lowest level without expending a spell slot when you have them prepared. If you want to cast either spell at a higher level, you must expend a spell slot as normal.',
      'By spending 8 hours in study, you can exchange one or both of the spells you chose for different spells of the same levels.',
    ],
    url: '/api/2014/features/spell-mastery',
  },
  'wizard-ability-score-improvement-5': {
    index: 'wizard-ability-score-improvement-5',
    class: {
      index: 'wizard',
      name: 'Wizard',
      url: '/api/2014/classes/wizard',
    },
    name: 'Ability Score Improvement',
    level: 19,
    prerequisites: [],
    desc: [
      "When you reach 4th level, and again at 8th, 12th, 16th, and 19th level, you can increase one ability score of your choice by 2, or you can increase two ability scores of your choice by 1. As normal, you can't increase an ability score above 20 using this feature.",
    ],
    url: '/api/2014/features/wizard-ability-score-improvement-5',
  },
  'signature-spell': {
    index: 'signature-spell',
    class: {
      index: 'wizard',
      name: 'Wizard',
      url: '/api/2014/classes/wizard',
    },
    name: 'Signature Spell',
    level: 20,
    prerequisites: [],
    desc: [
      "When you reach 20th level, you gain mastery over two powerful spells and can cast them with little effort. Choose two 3rd-level wizard spells in your spellbook as your signature spells. You always have these spells prepared, they don't count against the number of spells you have prepared, and you can cast each of them once at 3rd level without expending a spell slot. When you do so, you can't do so again until you finish a short or long rest.",
      'If you want to cast either spell at a higher level, you must expend a spell slot as normal.',
    ],
    url: '/api/2014/features/signature-spell',
  },
} as const;

export type { Features2014 };
