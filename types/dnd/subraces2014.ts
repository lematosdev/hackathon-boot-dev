export const subraces2014 = {
  'hill-dwarf': {
    index: 'hill-dwarf',
    name: 'Hill Dwarf',
    race: {
      index: 'dwarf',
      name: 'Dwarf',
      url: '/api/2014/races/dwarf',
    },
    desc: 'As a hill dwarf, you have keen senses, deep intuition, and remarkable resilience.',
    ability_bonuses: [
      {
        ability_score: {
          index: 'wis',
          name: 'WIS',
          url: '/api/2014/ability-scores/wis',
        },
        bonus: 1,
      },
    ],
    starting_proficiencies: [],
    languages: [],
    racial_traits: [
      {
        index: 'dwarven-toughness',
        name: 'Dwarven Toughness',
        url: '/api/2014/traits/dwarven-toughness',
      },
    ],
    url: '/api/2014/subraces/hill-dwarf',
  },
  'high-elf': {
    index: 'high-elf',
    name: 'High Elf',
    race: {
      index: 'elf',
      name: 'Elf',
      url: '/api/2014/races/elf',
    },
    desc: 'As a high elf, you have a keen mind and a mastery of at least the basics of magic. In many fantasy gaming worlds, there are two kinds of high elves. One type is haughty and reclusive, believing themselves to be superior to non-elves and even other elves. The other type is more common and more friendly, and often encountered among humans and other races.',
    ability_bonuses: [
      {
        ability_score: {
          index: 'int',
          name: 'INT',
          url: '/api/2014/ability-scores/int',
        },
        bonus: 1,
      },
    ],
    starting_proficiencies: [
      {
        index: 'longswords',
        name: 'Longswords',
        url: '/api/2014/proficiencies/longswords',
      },
      {
        index: 'shortswords',
        name: 'Shortswords',
        url: '/api/2014/proficiencies/shortswords',
      },
      {
        index: 'shortbows',
        name: 'Shortbows',
        url: '/api/2014/proficiencies/shortbows',
      },
      {
        index: 'longbows',
        name: 'Longbows',
        url: '/api/2014/proficiencies/longbows',
      },
    ],
    languages: [],
    language_options: {
      choose: 1,
      from: {
        option_set_type: 'options_array',
        options: [
          {
            option_type: 'reference',
            item: {
              index: 'dwarvish',
              name: 'Dwarvish',
              url: '/api/2014/languages/dwarvish',
            },
          },
          {
            option_type: 'reference',
            item: {
              index: 'giant',
              name: 'Giant',
              url: '/api/2014/languages/giant',
            },
          },
          {
            option_type: 'reference',
            item: {
              index: 'gnomish',
              name: 'Gnomish',
              url: '/api/2014/languages/gnomish',
            },
          },
          {
            option_type: 'reference',
            item: {
              index: 'goblin',
              name: 'Goblin',
              url: '/api/2014/languages/goblin',
            },
          },
          {
            option_type: 'reference',
            item: {
              index: 'halfling',
              name: 'Halfling',
              url: '/api/2014/languages/halfling',
            },
          },
          {
            option_type: 'reference',
            item: {
              index: 'orc',
              name: 'Orc',
              url: '/api/2014/languages/orc',
            },
          },
          {
            option_type: 'reference',
            item: {
              index: 'abyssal',
              name: 'Abyssal',
              url: '/api/2014/languages/abyssal',
            },
          },
          {
            option_type: 'reference',
            item: {
              index: 'celestial',
              name: 'Celestial',
              url: '/api/2014/languages/celestial',
            },
          },
          {
            option_type: 'reference',
            item: {
              index: 'draconic',
              name: 'Draconic',
              url: '/api/2014/languages/draconic',
            },
          },
          {
            option_type: 'reference',
            item: {
              index: 'deep-speech',
              name: 'Deep Speech',
              url: '/api/2014/languages/deep-speech',
            },
          },
          {
            option_type: 'reference',
            item: {
              index: 'infernal',
              name: 'Infernal',
              url: '/api/2014/languages/infernal',
            },
          },
          {
            option_type: 'reference',
            item: {
              index: 'primordial',
              name: 'Primordial',
              url: '/api/2014/languages/primordial',
            },
          },
          {
            option_type: 'reference',
            item: {
              index: 'sylvan',
              name: 'Sylvan',
              url: '/api/2014/languages/sylvan',
            },
          },
          {
            option_type: 'reference',
            item: {
              index: 'undercommon',
              name: 'Undercommon',
              url: '/api/2014/languages/undercommon',
            },
          },
        ],
      },
      type: 'language',
    },
    racial_traits: [
      {
        index: 'elf-weapon-training',
        name: 'Elf Weapon Training',
        url: '/api/2014/traits/elf-weapon-training',
      },
      {
        index: 'high-elf-cantrip',
        name: 'High Elf Cantrip',
        url: '/api/2014/traits/high-elf-cantrip',
      },
      {
        index: 'extra-language',
        name: 'Extra Language',
        url: '/api/2014/traits/extra-language',
      },
    ],
    url: '/api/2014/subraces/high-elf',
  },
  'lightfoot-halfling': {
    index: 'lightfoot-halfling',
    name: 'Lightfoot Halfling',
    race: {
      index: 'halfling',
      name: 'Halfling',
      url: '/api/2014/races/halfling',
    },
    desc: "As a lightfoot halfling, you can easily hide from notice, even using other people as cover. You're inclined to be affable and get along well with others. Lightfoots are more prone to wanderlust than other halflings, and often dwell alongside other races or take up a nomadic life.",
    ability_bonuses: [
      {
        ability_score: {
          index: 'cha',
          name: 'CHA',
          url: '/api/2014/ability-scores/cha',
        },
        bonus: 1,
      },
    ],
    starting_proficiencies: [],
    languages: [],
    racial_traits: [
      {
        index: 'naturally-stealthy',
        name: 'Naturally Stealthy',
        url: '/api/2014/traits/naturally-stealthy',
      },
    ],
    url: '/api/2014/subraces/lightfoot-halfling',
  },
  'rock-gnome': {
    index: 'rock-gnome',
    name: 'Rock Gnome',
    race: {
      index: 'gnome',
      name: 'Gnome',
      url: '/api/2014/races/gnome',
    },
    desc: 'As a rock gnome, you have a natural inventiveness and hardiness beyond that of other gnomes.',
    ability_bonuses: [
      {
        ability_score: {
          index: 'con',
          name: 'CON',
          url: '/api/2014/ability-scores/con',
        },
        bonus: 1,
      },
    ],
    starting_proficiencies: [
      {
        index: 'tinkers-tools',
        name: "Tinker's Tools",
        url: '/api/2014/proficiencies/tinkers-tools',
      },
    ],
    languages: [],
    racial_traits: [
      {
        index: 'artificers-lore',
        name: "Artificer's Lore",
        url: '/api/2014/traits/artificers-lore',
      },
      {
        index: 'tinker',
        name: 'Tinker',
        url: '/api/2014/traits/tinker',
      },
    ],
    url: '/api/2014/subraces/rock-gnome',
  },
} as const;


export const VALID_SUBRACES = Object.keys(subraces2014) as (keyof typeof subraces2014)[]