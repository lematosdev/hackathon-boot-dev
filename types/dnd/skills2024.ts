export const skills2024 = {
  acrobatics: {
    index: 'acrobatics',
    name: 'Acrobatics',
    description:
      'Stay on your feet in a tricky situation, or perform an acrobatic stunt.',
    ability_score: {
      index: 'dex',
      name: 'DEX',
      url: '/api/2024/ability-scores/dex',
    },
    url: '/api/2024/skills/acrobatics',
  },
  'animal-handling': {
    index: 'animal-handling',
    name: 'Animal Handling',
    description:
      'Calm or train an animal, or get an animal to behave in a certain way.',
    ability_score: {
      index: 'wis',
      name: 'WIS',
      url: '/api/2024/ability-scores/wis',
    },
    url: '/api/2024/skills/animal-handling',
  },
  arcana: {
    index: 'arcana',
    name: 'Arcana',
    description:
      'Recall lore about spells, magic items, and the planes of existence.',
    ability_score: {
      index: 'int',
      name: 'INT',
      url: '/api/2024/ability-scores/int',
    },
    url: '/api/2024/skills/arcana',
  },
  athletics: {
    index: 'athletics',
    name: 'Athletics',
    description:
      'Jump farther than normal, stay afloat in rough water, or break something.',
    ability_score: {
      index: 'str',
      name: 'STR',
      url: '/api/2024/ability-scores/str',
    },
    url: '/api/2024/skills/athletics',
  },
  deception: {
    index: 'deception',
    name: 'Deception',
    description: 'Tell a convincing lie, or wear a disguise convincingly.',
    ability_score: {
      index: 'cha',
      name: 'CHA',
      url: '/api/2024/ability-scores/cha',
    },
    url: '/api/2024/skills/deception',
  },
  history: {
    index: 'history',
    name: 'History',
    description:
      'Recall lore about historical events, people, nations, and cultures.',
    ability_score: {
      index: 'int',
      name: 'INT',
      url: '/api/2024/ability-scores/int',
    },
    url: '/api/2024/skills/history',
  },
  insight: {
    index: 'insight',
    name: 'Insight',
    description: 'Discern a person’s mood and intentions.',
    ability_score: {
      index: 'wis',
      name: 'WIS',
      url: '/api/2024/ability-scores/wis',
    },
    url: '/api/2024/skills/insight',
  },
  intimidation: {
    index: 'intimidation',
    name: 'Intimidation',
    description: 'Awe or threaten someone into doing what you want.',
    ability_score: {
      index: 'cha',
      name: 'CHA',
      url: '/api/2024/ability-scores/cha',
    },
    url: '/api/2024/skills/intimidation',
  },
  investigation: {
    index: 'investigation',
    name: 'Investigation',
    description:
      'Find obscure information in books, or deduce how something works.',
    ability_score: {
      index: 'int',
      name: 'INT',
      url: '/api/2024/ability-scores/int',
    },
    url: '/api/2024/skills/investigation',
  },
  medicine: {
    index: 'medicine',
    name: 'Medicine',
    description:
      'Diagnose an illness, or determine what killed the recently slain.',
    ability_score: {
      index: 'wis',
      name: 'WIS',
      url: '/api/2024/ability-scores/wis',
    },
    url: '/api/2024/skills/medicine',
  },
  nature: {
    index: 'nature',
    name: 'Nature',
    description: 'Recall lore about terrain, plants, animals, and weather.',
    ability_score: {
      index: 'int',
      name: 'INT',
      url: '/api/2024/ability-scores/int',
    },
    url: '/api/2024/skills/nature',
  },
  perception: {
    index: 'perception',
    name: 'Perception',
    description:
      'Using a combination of senses, notice something that’s easy to miss.',
    ability_score: {
      index: 'wis',
      name: 'WIS',
      url: '/api/2024/ability-scores/wis',
    },
    url: '/api/2024/skills/perception',
  },
  performance: {
    index: 'performance',
    name: 'Performance',
    description: 'Act, tell a story, perform music, or dance.',
    ability_score: {
      index: 'cha',
      name: 'CHA',
      url: '/api/2024/ability-scores/cha',
    },
    url: '/api/2024/skills/performance',
  },
  persuasion: {
    index: 'persuasion',
    name: 'Persuasion',
    description: 'Honestly and graciously convince someone of something.',
    ability_score: {
      index: 'cha',
      name: 'CHA',
      url: '/api/2024/ability-scores/cha',
    },
    url: '/api/2024/skills/persuasion',
  },
  religion: {
    index: 'religion',
    name: 'Religion',
    description: 'Recall lore about gods, religious rituals, and holy symbols.',
    ability_score: {
      index: 'int',
      name: 'INT',
      url: '/api/2024/ability-scores/int',
    },
    url: '/api/2024/skills/religion',
  },
  'sleight-of-hand': {
    index: 'sleight-of-hand',
    name: 'Sleight of Hand',
    description:
      'Pick a pocket, conceal a handheld object, or perform legerdemain.',
    ability_score: {
      index: 'dex',
      name: 'DEX',
      url: '/api/2024/ability-scores/dex',
    },
    url: '/api/2024/skills/sleight-of-hand',
  },
  stealth: {
    index: 'stealth',
    name: 'Stealth',
    description: 'Escape notice by moving quietly and hiding behind things.',
    ability_score: {
      index: 'dex',
      name: 'DEX',
      url: '/api/2024/ability-scores/dex',
    },
    url: '/api/2024/skills/stealth',
  },
  survival: {
    index: 'survival',
    name: 'Survival',
    description:
      'Follow tracks, forage, find a trail, or avoid natural hazards.',
    ability_score: {
      index: 'wis',
      name: 'WIS',
      url: '/api/2024/ability-scores/wis',
    },
    url: '/api/2024/skills/survival',
  },
} as const;

export type Skills2024 = keyof typeof skills2024;
