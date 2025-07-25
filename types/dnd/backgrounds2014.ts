export const backgrounds2014 = {
  acolyte: {
    index: 'acolyte',
    name: 'Acolyte',
    starting_proficiencies: [
      {
        index: 'skill-insight',
        name: 'Skill: Insight',
        url: '/api/2014/proficiencies/skill-insight',
      },
      {
        index: 'skill-religion',
        name: 'Skill: Religion',
        url: '/api/2014/proficiencies/skill-religion',
      },
    ],
    language_options: {
      choose: 2,
      type: 'languages',
      from: {
        option_set_type: 'resource_list',
        resource_list_url: '/api/2014/languages',
      },
    },
    starting_equipment: [
      {
        equipment: {
          index: 'clothes-common',
          name: 'Clothes, common',
          url: '/api/2014/equipment/clothes-common',
        },
        quantity: 1,
      },
      {
        equipment: {
          index: 'pouch',
          name: 'Pouch',
          url: '/api/2014/equipment/pouch',
        },
        quantity: 1,
      },
    ],
    starting_equipment_options: [
      {
        choose: 1,
        type: 'equipment',
        from: {
          option_set_type: 'equipment_category',
          equipment_category: {
            index: 'holy-symbols',
            name: 'Holy Symbols',
            url: '/api/2014/equipment-categories/holy-symbols',
          },
        },
      },
    ],
    feature: {
      name: 'Shelter of the Faithful',
      desc: [
        'As an acolyte, you command the respect of those who share your faith, and you can perform the religious ceremonies of your deity. You and your adventuring companions can expect to receive free healing and care at a temple, shrine, or other established presence of your faith, though you must provide any material components needed for spells. Those who share your religion will support you (but only you) at a modest lifestyle.',
        'You might also have ties to a specific temple dedicated to your chosen deity or pantheon, and you have a residence there. This could be the temple where you used to serve, if you remain on good terms with it, or a temple where you have found a new home. While near your temple, you can call upon the priests for assistance, provided the assistance you ask for is not hazardous and you remain in good standing with your temple.',
      ],
    },
    personality_traits: {
      choose: 2,
      type: 'personality_traits',
      from: {
        option_set_type: 'options_array',
        options: [
          {
            option_type: 'string',
            string:
              "I idolize a particular hero of my faith, and constantly refer to that person's deeds and example.",
          },
          {
            option_type: 'string',
            string:
              'I can find common ground between the fiercest enemies, empathizing with them and always working toward peace.',
          },
          {
            option_type: 'string',
            string:
              'I see omens in every event and action. The gods try to speak to us, we just need to listen.',
          },
          {
            option_type: 'string',
            string: 'Nothing can shake my optimistic attitude.',
          },
          {
            option_type: 'string',
            string:
              'I quote (or misquote) sacred texts and proverbs in almost every situation.',
          },
          {
            option_type: 'string',
            string:
              'I am tolerant (or intolerant) of other faiths and respect (or condemn) the worship of other gods.',
          },
          {
            option_type: 'string',
            string:
              "I've enjoyed fine food, drink, and high society among my temple's elite. Rough living grates on me.",
          },
          {
            option_type: 'string',
            string:
              "I've spent so long in the temple that I have little practical experience dealing with people in the outside world.",
          },
        ],
      },
    },
    ideals: {
      choose: 1,
      type: 'ideals',
      from: {
        option_set_type: 'options_array',
        options: [
          {
            option_type: 'ideal',
            desc: 'Tradition. The ancient traditions of worship and sacrifice must be preserved and upheld.',
            alignments: [
              {
                index: 'lawful-good',
                name: 'Lawful Good',
                url: '/api/2014/alignments/lawful-good',
              },
              {
                index: 'lawful-neutral',
                name: 'Lawful Neutral',
                url: '/api/2014/alignments/lawful-neutral',
              },
              {
                index: 'lawful-evil',
                name: 'Lawful Evil',
                url: '/api/2014/alignments/lawful-evil',
              },
            ],
          },
          {
            option_type: 'ideal',
            desc: 'Charity. I always try to help those in need, no matter what the personal cost.',
            alignments: [
              {
                index: 'lawful-good',
                name: 'Lawful Good',
                url: '/api/2014/alignments/lawful-good',
              },
              {
                index: 'neutral-good',
                name: 'Neutral Good',
                url: '/api/2014/alignments/neutral-good',
              },
              {
                index: 'chaotic-good',
                name: 'Chaotic Good',
                url: '/api/2014/alignments/chaotic-good',
              },
            ],
          },
          {
            option_type: 'ideal',
            desc: 'Change. We must help bring about the changes the gods are constantly working in the world.',
            alignments: [
              {
                index: 'chaotic-good',
                name: 'Chaotic Good',
                url: '/api/2014/alignments/chaotic-good',
              },
              {
                index: 'chaotic-neutral',
                name: 'Chaotic Neutral',
                url: '/api/2014/alignments/chaotic-neutral',
              },
              {
                index: 'chaotic-evil',
                name: 'Chaotic Evil',
                url: '/api/2014/alignments/chaotic-evil',
              },
            ],
          },
          {
            option_type: 'ideal',
            desc: "Power. I hope to one day rise to the top of my faith's religious hierarchy.",
            alignments: [
              {
                index: 'lawful-good',
                name: 'Lawful Good',
                url: '/api/2014/alignments/lawful-good',
              },
              {
                index: 'lawful-neutral',
                name: 'Lawful Neutral',
                url: '/api/2014/alignments/lawful-neutral',
              },
              {
                index: 'lawful-evil',
                name: 'Lawful Evil',
                url: '/api/2014/alignments/lawful-evil',
              },
            ],
          },
          {
            option_type: 'ideal',
            desc: 'Faith. I trust that my deity will guide my actions. I have faith that if I work hard, things will go well.',
            alignments: [
              {
                index: 'lawful-good',
                name: 'Lawful Good',
                url: '/api/2014/alignments/lawful-good',
              },
              {
                index: 'lawful-neutral',
                name: 'Lawful Neutral',
                url: '/api/2014/alignments/lawful-neutral',
              },
              {
                index: 'lawful-evil',
                name: 'Lawful Evil',
                url: '/api/2014/alignments/lawful-evil',
              },
            ],
          },
          {
            option_type: 'ideal',
            desc: "Aspiration. I seek to prove myself worthy of my god's favor by matching my actions against his or her teachings.",
            alignments: [
              {
                index: 'lawful-good',
                name: 'Lawful Good',
                url: '/api/2014/alignments/lawful-good',
              },
              {
                index: 'neutral-good',
                name: 'Neutral Good',
                url: '/api/2014/alignments/neutral-good',
              },
              {
                index: 'chaotic-good',
                name: 'Chaotic Good',
                url: '/api/2014/alignments/chaotic-good',
              },
              {
                index: 'lawful-neutral',
                name: 'Lawful Neutral',
                url: '/api/2014/alignments/lawful-neutral',
              },
              {
                index: 'neutral',
                name: 'Neutral',
                url: '/api/2014/alignments/neutral',
              },
              {
                index: 'chaotic-neutral',
                name: 'Chaotic Neutral',
                url: '/api/2014/alignments/chaotic-neutral',
              },
              {
                index: 'lawful-evil',
                name: 'Lawful Evil',
                url: '/api/2014/alignments/lawful-evil',
              },
              {
                index: 'neutral-evil',
                name: 'Neutral Evil',
                url: '/api/2014/alignments/neutral-evil',
              },
              {
                index: 'chaotic-evil',
                name: 'Chaotic Evil',
                url: '/api/2014/alignments/chaotic-evil',
              },
            ],
          },
        ],
      },
    },
    bonds: {
      choose: 1,
      type: 'bonds',
      from: {
        option_set_type: 'options_array',
        options: [
          {
            option_type: 'string',
            string:
              'I would die to recover an ancient relic of my faith that was lost long ago.',
          },
          {
            option_type: 'string',
            string:
              'I will someday get revenge on the corrupt temple hierarchy who branded me a heretic.',
          },
          {
            option_type: 'string',
            string:
              'I owe my life to the priest who took me in when my parents died.',
          },
          {
            option_type: 'string',
            string: 'Everything I do is for the common people.',
          },
          {
            option_type: 'string',
            string: 'I will do anything to protect the temple where I served.',
          },
          {
            option_type: 'string',
            string:
              'I seek to preserve a sacred text that my enemies consider heretical and seek to destroy.',
          },
        ],
      },
    },
    flaws: {
      choose: 1,
      type: 'flaws',
      from: {
        option_set_type: 'options_array',
        options: [
          {
            option_type: 'string',
            string: 'I judge others harshly, and myself even more severely.',
          },
          {
            option_type: 'string',
            string:
              "I put too much trust in those who wield power within my temple's hierarchy.",
          },
          {
            option_type: 'string',
            string:
              'My piety sometimes leads me to blindly trust those that profess faith in my god.',
          },
          {
            option_type: 'string',
            string: 'I am inflexible in my thinking.',
          },
          {
            option_type: 'string',
            string:
              'I am suspicious of strangers and expect the worst of them.',
          },
          {
            option_type: 'string',
            string:
              'Once I pick a goal, I become obsessed with it to the detriment of everything else in my life.',
          },
        ],
      },
    },
    url: '/api/2014/backgrounds/acolyte',
  },
} as const;


export const VALID_BACKGROUNDS = Object.keys(backgrounds2014) as (keyof typeof backgrounds2014)[]

