
export const abilityScores2024 = {
  str: {
    index: 'str',
    name: 'STR',
    full_name: 'Strength',
    description: 'Physical might',
    skills: [
      {
        name: 'Athletics',
        index: 'athletics',
        url: '/api/2024/skills/athletics',
      },
    ],
    url: '/api/2024/ability-scores/str',
  },
  dex: {
    index: 'dex',
    name: 'DEX',
    full_name: 'Dexterity',
    description: 'Agility, reflexes, and balance',
    skills: [
      {
        name: 'Acrobatics',
        index: 'acrobatics',
        url: '/api/2024/skills/acrobatics',
      },
      {
        name: 'Sleight of Hand',
        index: 'sleight-of-hand',
        url: '/api/2024/skills/sleight-of-hand',
      },
      {
        name: 'Stealth',
        index: 'stealth',
        url: '/api/2024/skills/stealth',
      },
    ],
    url: '/api/2024/ability-scores/dex',
  },
  con: {
    index: 'con',
    name: 'CON',
    full_name: 'Constitution',
    description: 'Health and stamina',
    skills: [],
    url: '/api/2024/ability-scores/con',
  },
  int: {
    index: 'int',
    name: 'INT',
    full_name: 'Intelligence',
    description: 'Reasoning and memory',
    skills: [
      {
        name: 'Arcana',
        index: 'arcana',
        url: '/api/2024/skills/arcana',
      },
      {
        name: 'History',
        index: 'history',
        url: '/api/2024/skills/history',
      },
      {
        name: 'Investigation',
        index: 'investigation',
        url: '/api/2024/skills/investigation',
      },
      {
        name: 'Nature',
        index: 'nature',
        url: '/api/2024/skills/nature',
      },
      {
        name: 'Religion',
        index: 'religion',
        url: '/api/2024/skills/religion',
      },
    ],
    url: '/api/2024/ability-scores/int',
  },
  wis: {
    index: 'wis',
    name: 'WIS',
    full_name: 'Wisdom',
    description: 'Perceptiveness and mental fortitude',
    skills: [
      {
        name: 'Animal Handling',
        index: 'animal-handling',
        url: '/api/2024/skills/animal-handling',
      },
      {
        name: 'Insight',
        index: 'insight',
        url: '/api/2024/skills/insight',
      },
      {
        name: 'Medicine',
        index: 'medicine',
        url: '/api/2024/skills/medicine',
      },
      {
        name: 'Perception',
        index: 'perception',
        url: '/api/2024/skills/perception',
      },
      {
        name: 'Survival',
        index: 'survival',
        url: '/api/2024/skills/survival',
      },
    ],
    url: '/api/2024/ability-scores/wis',
  },
  cha: {
    index: 'cha',
    name: 'CHA',
    full_name: 'Charisma',
    description: 'Confidence, poise, and charm',
    skills: [
      {
        name: 'Deception',
        index: 'deception',
        url: '/api/2024/skills/deception',
      },
      {
        name: 'Intimidation',
        index: 'intimidation',
        url: '/api/2024/skills/intimidation',
      },
      {
        name: 'Performance',
        index: 'performance',
        url: '/api/2024/skills/performance',
      },
      {
        name: 'Persuasion',
        index: 'persuasion',
        url: '/api/2024/skills/persuasion',
      },
    ],
    url: '/api/2024/ability-scores/cha',
  },
} as const;

