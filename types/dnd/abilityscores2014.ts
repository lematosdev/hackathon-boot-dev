export const abilityScores2014 = {
  str: {
    index: 'str',
    name: 'STR',
    full_name: 'Strength',
    desc: [
      'Strength measures bodily power, athletic training, and the extent to which you can exert raw physical force.',
      'A Strength check can model any attempt to lift, push, pull, or break something, to force your body through a space, or to otherwise apply brute force to a situation. The Athletics skill reflects aptitude in certain kinds of Strength checks.',
    ],
    skills: [
      {
        name: 'Athletics',
        index: 'athletics',
        url: '/api/2014/skills/athletics',
      },
    ],
    url: '/api/2014/ability-scores/str',
  },
  dex: {
    index: 'dex',
    name: 'DEX',
    full_name: 'Dexterity',
    desc: [
      'Dexterity measures agility, reflexes, and balance.',
      'A Dexterity check can model any attempt to move nimbly, quickly, or quietly, or to keep from falling on tricky footing. The Acrobatics, Sleight of Hand, and Stealth skills reflect aptitude in certain kinds of Dexterity checks.',
    ],
    skills: [
      {
        name: 'Acrobatics',
        index: 'acrobatics',
        url: '/api/2014/skills/acrobatics',
      },
      {
        name: 'Sleight of Hand',
        index: 'sleight-of-hand',
        url: '/api/2014/skills/sleight-of-hand',
      },
      {
        name: 'Stealth',
        index: 'stealth',
        url: '/api/2014/skills/stealth',
      },
    ],
    url: '/api/2014/ability-scores/dex',
  },
  con: {
    index: 'con',
    name: 'CON',
    full_name: 'Constitution',
    desc: [
      'Constitution measures health, stamina, and vital force.',
      'Constitution checks are uncommon, and no skills apply to Constitution checks, because the endurance this ability represents is largely passive rather than involving a specific effort on the part of a character or monster.',
    ],
    skills: [],
    url: '/api/2014/ability-scores/con',
  },
  int: {
    index: 'int',
    name: 'INT',
    full_name: 'Intelligence',
    desc: [
      'Intelligence measures mental acuity, accuracy of recall, and the ability to reason.',
      'An Intelligence check comes into play when you need to draw on logic, education, memory, or deductive reasoning. The Arcana, History, Investigation, Nature, and Religion skills reflect aptitude in certain kinds of Intelligence checks.',
    ],
    skills: [
      {
        name: 'Arcana',
        index: 'arcana',
        url: '/api/2014/skills/arcana',
      },
      {
        name: 'History',
        index: 'history',
        url: '/api/2014/skills/history',
      },
      {
        name: 'Investigation',
        index: 'investigation',
        url: '/api/2014/skills/investigation',
      },
      {
        name: 'Nature',
        index: 'nature',
        url: '/api/2014/skills/nature',
      },
      {
        name: 'Religion',
        index: 'religion',
        url: '/api/2014/skills/religion',
      },
    ],
    url: '/api/2014/ability-scores/int',
  },
  wis: {
    index: 'wis',
    name: 'WIS',
    full_name: 'Wisdom',
    desc: [
      'Wisdom reflects how attuned you are to the world around you and represents perceptiveness and intuition.',
      "A Wisdom check might reflect an effort to read body language, understand someone's feelings, notice things about the environment, or care for an injured person. The Animal Handling, Insight, Medicine, Perception, and Survival skills reflect aptitude in certain kinds of Wisdom checks.",
    ],
    skills: [
      {
        name: 'Animal Handling',
        index: 'animal-handling',
        url: '/api/2014/skills/animal-handling',
      },
      {
        name: 'Insight',
        index: 'insight',
        url: '/api/2014/skills/insight',
      },
      {
        name: 'Medicine',
        index: 'medicine',
        url: '/api/2014/skills/medicine',
      },
      {
        name: 'Perception',
        index: 'perception',
        url: '/api/2014/skills/perception',
      },
      {
        name: 'Survival',
        index: 'survival',
        url: '/api/2014/skills/survival',
      },
    ],
    url: '/api/2014/ability-scores/wis',
  },
  cha: {
    index: 'cha',
    name: 'CHA',
    full_name: 'Charisma',
    desc: [
      'Charisma measures your ability to interact effectively with others. It includes such factors as confidence and eloquence, and it can represent a charming or commanding personality.',
      'A Charisma check might arise when you try to influence or entertain others, when you try to make an impression or tell a convincing lie, or when you are navigating a tricky social situation. The Deception, Intimidation, Performance, and Persuasion skills reflect aptitude in certain kinds of Charisma checks.',
    ],
    skills: [
      {
        name: 'Deception',
        index: 'deception',
        url: '/api/2014/skills/deception',
      },
      {
        name: 'Intimidation',
        index: 'intimidation',
        url: '/api/2014/skills/intimidation',
      },
      {
        name: 'Performance',
        index: 'performance',
        url: '/api/2014/skills/performance',
      },
      {
        name: 'Persuasion',
        index: 'persuasion',
        url: '/api/2014/skills/persuasion',
      },
    ],
    url: '/api/2014/ability-scores/cha',
  },
} as const;

export type AbilityScores2014 = keyof typeof abilityScores2014;