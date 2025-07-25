interface Languages2024 {
  index: string;
  is_rare: boolean;
  name: string;
  note: string;
  url: string;
}

export const languages2024 = {
  common: {
    index: 'common',
    name: 'Common',
    is_rare: false,
    note: '',
    url: '/api/2024/languages/common',
  },
  'common-sign-language': {
    index: 'common-sign-language',
    name: 'Common Sign Language',
    is_rare: false,
    note: '',
    url: '/api/2024/languages/common-sign-language',
  },
  draconic: {
    index: 'draconic',
    name: 'Draconic',
    is_rare: false,
    note: '',
    url: '/api/2024/languages/draconic',
  },
  dwarvish: {
    index: 'dwarvish',
    name: 'Dwarvish',
    is_rare: false,
    note: '',
    url: '/api/2024/languages/dwarvish',
  },
  elvish: {
    index: 'elvish',
    name: 'Elvish',
    is_rare: false,
    note: '',
    url: '/api/2024/languages/elvish',
  },
  giant: {
    index: 'giant',
    name: 'Giant',
    is_rare: false,
    note: '',
    url: '/api/2024/languages/giant',
  },
  gnomish: {
    index: 'gnomish',
    name: 'Gnomish',
    is_rare: false,
    note: '',
    url: '/api/2024/languages/gnomish',
  },
  goblin: {
    index: 'goblin',
    name: 'Goblin',
    is_rare: false,
    note: '',
    url: '/api/2024/languages/goblin',
  },
  halfling: {
    index: 'halfling',
    name: 'Halfling',
    is_rare: false,
    note: '',
    url: '/api/2024/languages/halfling',
  },
  orc: {
    index: 'orc',
    name: 'Orc',
    is_rare: false,
    note: '',
    url: '/api/2024/languages/orc',
  },
  abyssal: {
    index: 'abyssal',
    name: 'Abyssal',
    is_rare: true,
    note: '',
    url: '/api/2024/languages/abyssal',
  },
  celestial: {
    index: 'celestial',
    name: 'Celestial',
    is_rare: true,
    note: '',
    url: '/api/2024/languages/celestial',
  },
  'deep-speech': {
    index: 'deep-speech',
    name: 'Deep Speech',
    is_rare: true,
    note: '',
    url: '/api/2024/languages/deep-speech',
  },
  druidic: {
    index: 'druidic',
    name: 'Druidic',
    is_rare: false,
    note: '',
    url: '/api/2024/languages/druidic',
  },
  infernal: {
    index: 'infernal',
    name: 'Infernal',
    is_rare: true,
    note: '',
    url: '/api/2024/languages/infernal',
  },
  primordial: {
    index: 'primordial',
    name: 'Primordial',
    is_rare: true,
    note: 'Primordial includes the Aquan, Auran, Ignan, and Terran dialects. Creatures that know one of these dialects can communicate with those that know a different one.',
    url: '/api/2024/languages/primordial',
  },
  sylvan: {
    index: 'sylvan',
    name: 'Sylvan',
    is_rare: true,
    note: '',
    url: '/api/2024/languages/sylvan',
  },
  'thieves-cant': {
    index: 'thieves-cant',
    name: "Thieves' Cant",
    is_rare: true,
    note: '',
    url: '/api/2024/languages/thieves-cant',
  },
  undercommon: {
    index: 'undercommon',
    name: 'Undercommon',
    is_rare: true,
    note: '',
    url: '/api/2024/languages/undercommon',
  },
} as const;

export type { Languages2024 };
