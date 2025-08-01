interface Races2014Ability_bonuses {
  ability_score: object;
  bonus: number;
}

interface Races2014Starting_proficiencies {
  index: string;
  name: string;
  url: string;
}

interface Races2014Starting_proficiency_options {
  choose: number;
  desc?: string;
  from: object;
  type: string;
}

interface Races2014Languages {
  index: string;
  name: string;
  url: string;
}

interface Races2014Traits {
  index: string;
  name: string;
  url: string;
}

interface Races2014Subraces {
  index: string;
  name: string;
  url: string;
}

interface Races2014Language_options {
  choose: number;
  from: object;
  type: string;
}

interface Races2014Ability_bonus_options {
  choose: number;
  from: object;
  type: string;
}

export const races2014 = {
  dwarf: {
    index: 'dwarf',
    name: 'Dwarf',
    speed: 25,
    ability_bonuses: [
      {
        ability_score: {
          index: 'con',
          name: 'CON',
          url: '/api/2014/ability-scores/con',
        },
        bonus: 2,
      },
    ],
    alignment:
      'Most dwarves are lawful, believing firmly in the benefits of a well-ordered society. They tend toward good as well, with a strong sense of fair play and a belief that everyone deserves to share in the benefits of a just order.',
    age: "Dwarves mature at the same rate as humans, but they're considered young until they reach the age of 50. On average, they live about 350 years.",
    size: 'Medium',
    size_description:
      'Dwarves stand between 4 and 5 feet tall and average about 150 pounds. Your size is Medium.',
    starting_proficiencies: [
      {
        index: 'battleaxes',
        name: 'Battleaxes',
        url: '/api/2014/proficiencies/battleaxes',
      },
      {
        index: 'handaxes',
        name: 'Handaxes',
        url: '/api/2014/proficiencies/handaxes',
      },
      {
        index: 'light-hammers',
        name: 'Light hammers',
        url: '/api/2014/proficiencies/light-hammers',
      },
      {
        index: 'warhammers',
        name: 'Warhammers',
        url: '/api/2014/proficiencies/warhammers',
      },
    ],
    starting_proficiency_options: {
      desc: 'You gain proficiency with the artisan’s tools of your choice: smith’s tools, brewer’s supplies, or mason’s tools.',
      choose: 1,
      type: 'proficiencies',
      from: {
        option_set_type: 'options_array',
        options: [
          {
            option_type: 'reference',
            item: {
              index: 'smiths-tools',
              name: "Smith's Tools",
              url: '/api/2014/proficiencies/smiths-tools',
            },
          },
          {
            option_type: 'reference',
            item: {
              index: 'brewers-supplies',
              name: "Brewer's Supplies",
              url: '/api/2014/proficiencies/brewers-supplies',
            },
          },
          {
            option_type: 'reference',
            item: {
              index: 'masons-tools',
              name: "Mason's Tools",
              url: '/api/2014/proficiencies/masons-tools',
            },
          },
        ],
      },
    },
    languages: [
      {
        index: 'common',
        name: 'Common',
        url: '/api/2014/languages/common',
      },
      {
        index: 'dwarvish',
        name: 'Dwarvish',
        url: '/api/2014/languages/dwarvish',
      },
    ],
    language_desc:
      'You can speak, read, and write Common and Dwarvish. Dwarvish is full of hard consonants and guttural sounds, and those characteristics spill over into whatever other language a dwarf might speak.',
    traits: [
      {
        index: 'darkvision',
        name: 'Darkvision',
        url: '/api/2014/traits/darkvision',
      },
      {
        index: 'dwarven-resilience',
        name: 'Dwarven Resilience',
        url: '/api/2014/traits/dwarven-resilience',
      },
      {
        index: 'stonecunning',
        name: 'Stonecunning',
        url: '/api/2014/traits/stonecunning',
      },
      {
        index: 'dwarven-combat-training',
        name: 'Dwarven Combat Training',
        url: '/api/2014/traits/dwarven-combat-training',
      },
      {
        index: 'tool-proficiency',
        name: 'Tool Proficiency',
        url: '/api/2014/traits/tool-proficiency',
      },
    ],
    subraces: [
      {
        index: 'hill-dwarf',
        name: 'Hill Dwarf',
        url: '/api/2014/subraces/hill-dwarf',
      },
    ],
    url: '/api/2014/races/dwarf',
  },
  elf: {
    index: 'elf',
    name: 'Elf',
    speed: 30,
    ability_bonuses: [
      {
        ability_score: {
          index: 'dex',
          name: 'DEX',
          url: '/api/2014/ability-scores/dex',
        },
        bonus: 2,
      },
    ],
    age: 'Although elves reach physical maturity at about the same age as humans, the elven understanding of adulthood goes beyond physical growth to encompass worldly experience. An elf typically claims adulthood and an adult name around the age of 100 and can live to be 750 years old.',
    alignment:
      "Elves love freedom, variety, and self-expression, so they lean strongly toward the gentler aspects of chaos. They value and protect others' freedom as well as their own, and they are more often good than not.",
    size: 'Medium',
    size_description:
      'Elves range from under 5 to over 6 feet tall and have slender builds. Your size is Medium.',
    starting_proficiencies: [
      {
        index: 'skill-perception',
        name: 'Skill: Perception',
        url: '/api/2014/proficiencies/skill-perception',
      },
    ],
    languages: [
      {
        index: 'common',
        name: 'Common',
        url: '/api/2014/languages/common',
      },
      {
        index: 'elvish',
        name: 'Elvish',
        url: '/api/2014/languages/elvish',
      },
    ],
    language_desc:
      'You can speak, read, and write Common and Elvish. Elvish is fluid, with subtle intonations and intricate grammar. Elven literature is rich and varied, and their songs and poems are famous among other races. Many bards learn their language so they can add Elvish ballads to their repertoires.',
    traits: [
      {
        index: 'darkvision',
        name: 'Darkvision',
        url: '/api/2014/traits/darkvision',
      },
      {
        index: 'fey-ancestry',
        name: 'Fey Ancestry',
        url: '/api/2014/traits/fey-ancestry',
      },
      {
        index: 'trance',
        name: 'Trance',
        url: '/api/2014/traits/trance',
      },
      {
        index: 'keen-senses',
        name: 'Keen Senses',
        url: '/api/2014/traits/keen-senses',
      },
    ],
    subraces: [
      {
        index: 'high-elf',
        name: 'High Elf',
        url: '/api/2014/subraces/high-elf',
      },
    ],
    url: '/api/2014/races/elf',
  },
  halfling: {
    index: 'halfling',
    name: 'Halfling',
    speed: 25,
    ability_bonuses: [
      {
        ability_score: {
          index: 'dex',
          name: 'DEX',
          url: '/api/2014/ability-scores/dex',
        },
        bonus: 2,
      },
    ],
    age: 'A halfling reaches adulthood at the age of 20 and generally lives into the middle of his or her second century.',
    alignment:
      'Most halflings are lawful good. As a rule, they are good-hearted and kind, hate to see others in pain, and have no tolerance for oppression. They are also very orderly and traditional, leaning heavily on the support of their community and the comfort of their old ways.',
    size: 'Small',
    size_description:
      'Halflings average about 3 feet tall and weigh about 40 pounds. Your size is Small.',
    starting_proficiencies: [],
    languages: [
      {
        index: 'common',
        name: 'Common',
        url: '/api/2014/languages/common',
      },
      {
        index: 'halfling',
        name: 'Halfling',
        url: '/api/2014/languages/halfling',
      },
    ],
    language_desc:
      "You can speak, read, and write Common and Halfling. The Halfling language isn't secret, but halflings are loath to share it with others. They write very little, so they don't have a rich body of literature. Their oral tradition, however, is very strong. Almost all halflings speak Common to converse with the people in whose lands they dwell or through which they are traveling.",
    traits: [
      {
        index: 'brave',
        name: 'Brave',
        url: '/api/2014/traits/brave',
      },
      {
        index: 'halfling-nimbleness',
        name: 'Halfling Nimbleness',
        url: '/api/2014/traits/halfling-nimbleness',
      },
      {
        index: 'lucky',
        name: 'Lucky',
        url: '/api/2014/traits/lucky',
      },
    ],
    subraces: [
      {
        index: 'lightfoot-halfling',
        name: 'Lightfoot Halfling',
        url: '/api/2014/subraces/lightfoot-halfling',
      },
    ],
    url: '/api/2014/races/halfling',
  },
  human: {
    index: 'human',
    name: 'Human',
    speed: 30,
    ability_bonuses: [
      {
        ability_score: {
          index: 'str',
          name: 'STR',
          url: '/api/2014/ability-scores/str',
        },
        bonus: 1,
      },
      {
        ability_score: {
          index: 'dex',
          name: 'DEX',
          url: '/api/2014/ability-scores/dex',
        },
        bonus: 1,
      },
      {
        ability_score: {
          index: 'con',
          name: 'CON',
          url: '/api/2014/ability-scores/con',
        },
        bonus: 1,
      },
      {
        ability_score: {
          index: 'int',
          name: 'INT',
          url: '/api/2014/ability-scores/int',
        },
        bonus: 1,
      },
      {
        ability_score: {
          index: 'wis',
          name: 'WIS',
          url: '/api/2014/ability-scores/wis',
        },
        bonus: 1,
      },
      {
        ability_score: {
          index: 'cha',
          name: 'CHA',
          url: '/api/2014/ability-scores/cha',
        },
        bonus: 1,
      },
    ],
    age: 'Humans reach adulthood in their late teens and live less than a century.',
    alignment:
      'Humans tend toward no particular alignment. The best and the worst are found among them.',
    size: 'Medium',
    size_description:
      'Humans vary widely in height and build, from barely 5 feet to well over 6 feet tall. Regardless of your position in that range, your size is Medium.',
    starting_proficiencies: [],
    languages: [
      {
        index: 'common',
        name: 'Common',
        url: '/api/2014/languages/common',
      },
    ],
    language_options: {
      choose: 1,
      type: 'languages',
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
              index: 'elvish',
              name: 'Elvish',
              url: '/api/2014/languages/elvish',
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
    },
    language_desc:
      'You can speak, read, and write Common and one extra language of your choice. Humans typically learn the languages of other peoples they deal with, including obscure dialects. They are fond of sprinkling their speech with words borrowed from other tongues: Orc curses, Elvish musical expressions, Dwarvish military phrases, and so on.',
    traits: [],
    subraces: [],
    url: '/api/2014/races/human',
  },
  dragonborn: {
    index: 'dragonborn',
    name: 'Dragonborn',
    speed: 30,
    ability_bonuses: [
      {
        ability_score: {
          index: 'str',
          name: 'STR',
          url: '/api/2014/ability-scores/str',
        },
        bonus: 2,
      },
      {
        ability_score: {
          index: 'cha',
          name: 'CHA',
          url: '/api/2014/ability-scores/cha',
        },
        bonus: 1,
      },
    ],
    alignment:
      'Dragonborn tend to extremes, making a conscious choice for one side or the other in the cosmic war between good and evil. Most dragonborn are good, but those who side with evil can be terrible villains.',
    age: 'Young dragonborn grow quickly. They walk hours after hatching, attain the size and development of a 10-year-old human child by the age of 3, and reach adulthood by 15. They live to be around 80.',
    size: 'Medium',
    size_description:
      'Dragonborn are taller and heavier than humans, standing well over 6 feet tall and averaging almost 250 pounds. Your size is Medium.',
    starting_proficiencies: [],
    languages: [
      {
        index: 'common',
        name: 'Common',
        url: '/api/2014/languages/common',
      },
      {
        index: 'draconic',
        name: 'Draconic',
        url: '/api/2014/languages/draconic',
      },
    ],
    language_desc:
      'You can speak, read, and write Common and Draconic. Draconic is thought to be one of the oldest languages and is often used in the study of magic. The language sounds harsh to most other creatures and includes numerous hard consonants and sibilants.',
    traits: [
      {
        index: 'draconic-ancestry',
        name: 'Draconic Ancestry',
        url: '/api/2014/traits/draconic-ancestry',
      },
      {
        index: 'breath-weapon',
        name: 'Breath Weapon',
        url: '/api/2014/traits/breath-weapon',
      },
      {
        index: 'damage-resistance',
        name: 'Damage Resistance',
        url: '/api/2014/traits/damage-resistance',
      },
    ],
    subraces: [],
    url: '/api/2014/races/dragonborn',
  },
  gnome: {
    index: 'gnome',
    name: 'Gnome',
    speed: 25,
    ability_bonuses: [
      {
        ability_score: {
          index: 'int',
          name: 'INT',
          url: '/api/2014/ability-scores/int',
        },
        bonus: 2,
      },
    ],
    alignment:
      'Gnomes are most often good. Those who tend toward law are sages, engineers, researchers, scholars, investigators, or inventors. Those who tend toward chaos are minstrels, tricksters, wanderers, or fanciful jewelers. Gnomes are good-hearted, and even the tricksters among them are more playful than vicious.',
    age: 'Gnomes mature at the same rate humans do, and most are expected to settle down into an adult life by around age 40. They can live 350 to almost 500 years.',
    size: 'Small',
    size_description:
      'Gnomes are between 3 and 4 feet tall and average about 40 pounds. Your size is Small.',
    starting_proficiencies: [],
    languages: [
      {
        index: 'common',
        name: 'Common',
        url: '/api/2014/languages/common',
      },
      {
        index: 'gnomish',
        name: 'Gnomish',
        url: '/api/2014/languages/gnomish',
      },
    ],
    language_desc:
      'You can speak, read, and write Common and Gnomish. The Gnomish language, which uses the Dwarvish script, is renowned for its technical treatises and its catalogs of knowledge about the natural world.',
    traits: [
      {
        index: 'darkvision',
        name: 'Darkvision',
        url: '/api/2014/traits/darkvision',
      },
      {
        index: 'gnome-cunning',
        name: 'Gnome Cunning',
        url: '/api/2014/traits/gnome-cunning',
      },
    ],
    subraces: [
      {
        index: 'rock-gnome',
        name: 'Rock Gnome',
        url: '/api/2014/subraces/rock-gnome',
      },
    ],
    url: '/api/2014/races/gnome',
  },
  'half-elf': {
    index: 'half-elf',
    name: 'Half-Elf',
    speed: 30,
    ability_bonuses: [
      {
        ability_score: {
          index: 'cha',
          name: 'CHA',
          url: '/api/2014/ability-scores/cha',
        },
        bonus: 2,
      },
    ],
    ability_bonus_options: {
      choose: 2,
      type: 'ability_bonuses',
      from: {
        option_set_type: 'options_array',
        options: [
          {
            option_type: 'ability_bonus',
            ability_score: {
              index: 'str',
              name: 'STR',
              url: '/api/2014/ability-scores/str',
            },
            bonus: 1,
          },
          {
            option_type: 'ability_bonus',
            ability_score: {
              index: 'dex',
              name: 'DEX',
              url: '/api/2014/ability-scores/dex',
            },
            bonus: 1,
          },
          {
            option_type: 'ability_bonus',
            ability_score: {
              index: 'con',
              name: 'CON',
              url: '/api/2014/ability-scores/con',
            },
            bonus: 1,
          },
          {
            option_type: 'ability_bonus',
            ability_score: {
              index: 'int',
              name: 'INT',
              url: '/api/2014/ability-scores/int',
            },
            bonus: 1,
          },
          {
            option_type: 'ability_bonus',
            ability_score: {
              index: 'wis',
              name: 'WIS',
              url: '/api/2014/ability-scores/wis',
            },
            bonus: 1,
          },
        ],
      },
    },
    alignment:
      "Half-elves share the chaotic bent of their elven heritage. They value both personal freedom and creative expression, demonstrating neither love of leaders nor desire for followers. They chafe at rules, resent others' demands, and sometimes prove unreliable, or at least unpredictable.",
    age: 'Half-elves mature at the same rate humans do and reach adulthood around the age of 20. They live much longer than humans, however, often exceeding 180 years.',
    size: 'Medium',
    size_description:
      'Half-elves are about the same size as humans, ranging from 5 to 6 feet tall. Your size is Medium.',
    starting_proficiencies: [],
    starting_proficiency_options: {
      choose: 2,
      type: 'proficiencies',
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
    languages: [
      {
        index: 'common',
        name: 'Common',
        url: '/api/2014/languages/common',
      },
      {
        index: 'elvish',
        name: 'Elvish',
        url: '/api/2014/languages/elvish',
      },
    ],
    language_options: {
      choose: 1,
      type: 'languages',
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
    },
    language_desc:
      'You can speak, read, and write Common, Elvish, and one extra language of your choice.',
    traits: [
      {
        index: 'darkvision',
        name: 'Darkvision',
        url: '/api/2014/traits/darkvision',
      },
      {
        index: 'fey-ancestry',
        name: 'Fey Ancestry',
        url: '/api/2014/traits/fey-ancestry',
      },
      {
        index: 'skill-versatility',
        name: 'Skill Versatility',
        url: '/api/2014/traits/skill-versatility',
      },
    ],
    subraces: [],
    url: '/api/2014/races/half-elf',
  },
  'half-orc': {
    index: 'half-orc',
    name: 'Half-Orc',
    speed: 30,
    ability_bonuses: [
      {
        ability_score: {
          index: 'str',
          name: 'STR',
          url: '/api/2014/ability-scores/str',
        },
        bonus: 2,
      },
      {
        ability_score: {
          index: 'con',
          name: 'CON',
          url: '/api/2014/ability-scores/con',
        },
        bonus: 1,
      },
    ],
    alignment:
      'Half-orcs inherit a tendency toward chaos from their orc parents and are not strongly inclined toward good. Half-orcs raised among orcs and willing to live out their lives among them are usually evil.',
    age: 'Half-orcs mature a little faster than humans, reaching adulthood around age 14. They age noticeably faster and rarely live longer than 75 years.',
    size: 'Medium',
    size_description:
      'Half-orcs are somewhat larger and bulkier than humans, and they range from 5 to well over 6 feet tall. Your size is Medium.',
    starting_proficiencies: [
      {
        index: 'skill-intimidation',
        name: 'Skill: Intimidation',
        url: '/api/2014/proficiencies/skill-intimidation',
      },
    ],
    languages: [
      {
        index: 'common',
        name: 'Common',
        url: '/api/2014/languages/common',
      },
      {
        index: 'orc',
        name: 'Orc',
        url: '/api/2014/languages/orc',
      },
    ],
    language_desc:
      'You can speak, read, and write Common and Orc. Orc is a harsh, grating language with hard consonants. It has no script of its own but is written in the Dwarvish script.',
    traits: [
      {
        index: 'darkvision',
        name: 'Darkvision',
        url: '/api/2014/traits/darkvision',
      },
      {
        index: 'savage-attacks',
        name: 'Savage Attacks',
        url: '/api/2014/traits/savage-attacks',
      },
      {
        index: 'relentless-endurance',
        name: 'Relentless Endurance',
        url: '/api/2014/traits/relentless-endurance',
      },
      {
        index: 'menacing',
        name: 'Menacing',
        url: '/api/2014/traits/menacing',
      },
    ],
    subraces: [],
    url: '/api/2014/races/half-orc',
  },
  tiefling: {
    index: 'tiefling',
    name: 'Tiefling',
    speed: 30,
    ability_bonuses: [
      {
        ability_score: {
          index: 'int',
          name: 'INT',
          url: '/api/2014/ability-scores/int',
        },
        bonus: 1,
      },
      {
        ability_score: {
          index: 'cha',
          name: 'CHA',
          url: '/api/2014/ability-scores/cha',
        },
        bonus: 2,
      },
    ],
    alignment:
      'Tieflings might not have an innate tendency toward evil, but many of them end up there. Evil or not, an independent nature inclines many tieflings toward a chaotic alignment.',
    age: 'Tieflings mature at the same rate as humans but live a few years longer.',
    size: 'Medium',
    size_description:
      'Tieflings are about the same size and build as humans. Your size is Medium.',
    starting_proficiencies: [],
    languages: [
      {
        index: 'common',
        name: 'Common',
        url: '/api/2014/languages/common',
      },
      {
        index: 'infernal',
        name: 'Infernal',
        url: '/api/2014/languages/infernal',
      },
    ],
    language_desc: 'You can speak, read, and write Common and Infernal.',
    traits: [
      {
        index: 'darkvision',
        name: 'Darkvision',
        url: '/api/2014/traits/darkvision',
      },
      {
        index: 'hellish-resistance',
        name: 'Hellish Resistance',
        url: '/api/2014/traits/hellish-resistance',
      },
      {
        index: 'infernal-legacy',
        name: 'Infernal Legacy',
        url: '/api/2014/traits/infernal-legacy',
      },
    ],
    subraces: [],
    url: '/api/2014/races/tiefling',
  },
} as const;

export type Races2014 = keyof typeof races2014;
export const VALID_RACES = Object.keys(races2014) as (keyof typeof races2014)[]
