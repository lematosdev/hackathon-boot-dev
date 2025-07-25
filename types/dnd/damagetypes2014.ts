export const damageTypes2014 = {
  acid: {
    index: 'acid',
    name: 'Acid',
    desc: [
      "The corrosive spray of a black dragon's breath and the dissolving enzymes secreted by a black pudding deal acid damage.",
    ],
    url: '/api/2014/damage-types/acid',
  },
  bludgeoning: {
    index: 'bludgeoning',
    name: 'Bludgeoning',
    desc: [
      'Blunt force attacks, falling, constriction, and the like deal bludgeoning damage.',
    ],
    url: '/api/2014/damage-types/bludgeoning',
  },
  cold: {
    index: 'cold',
    name: 'Cold',
    desc: [
      "The infernal chill radiating from an ice devil's spear and the frigid blast of a white dragon's breath deal cold damage.",
    ],
    url: '/api/2014/damage-types/cold',
  },
  fire: {
    index: 'fire',
    name: 'Fire',
    desc: [
      'Red dragons breathe fire, and many spells conjure flames to deal fire damage.',
    ],
    url: '/api/2014/damage-types/fire',
  },
  force: {
    index: 'force',
    name: 'Force',
    desc: [
      'Force is pure magical energy focused into a damaging form. Most effects that deal force damage are spells, including magic missile and spiritual weapon.',
    ],
    url: '/api/2014/damage-types/force',
  },
  lightning: {
    index: 'lightning',
    name: 'Lightning',
    desc: [
      "A lightning bolt spell and a blue dragon's breath deal lightning damage.",
    ],
    url: '/api/2014/damage-types/lightning',
  },
  necrotic: {
    index: 'necrotic',
    name: 'Necrotic',
    desc: [
      'Necrotic damage, dealt by certain undead and a spell such as chill touch, withers matter and even the soul.',
    ],
    url: '/api/2014/damage-types/necrotic',
  },
  piercing: {
    index: 'piercing',
    name: 'Piercing',
    desc: [
      "Puncturing and impaling attacks, including spears and monsters' bites, deal piercing damage.",
    ],
    url: '/api/2014/damage-types/piercing',
  },
  poison: {
    index: 'poison',
    name: 'Poison',
    desc: [
      "Venomous stings and the toxic gas of a green dragon's breath deal poison damage.",
    ],
    url: '/api/2014/damage-types/poison',
  },
  psychic: {
    index: 'psychic',
    name: 'Psychic',
    desc: ['Mental abilities such as a psionic blast deal psychic damage.'],
    url: '/api/2014/damage-types/psychic',
  },
  radiant: {
    index: 'radiant',
    name: 'Radiant',
    desc: [
      "Radiant damage, dealt by a cleric's flame strike spell or an angel's smiting weapon, sears the flesh like fire and overloads the spirit with power.",
    ],
    url: '/api/2014/damage-types/radiant',
  },
  slashing: {
    index: 'slashing',
    name: 'Slashing',
    desc: ["Swords, axes, and monsters' claws deal slashing damage."],
    url: '/api/2014/damage-types/slashing',
  },
  thunder: {
    index: 'thunder',
    name: 'Thunder',
    desc: [
      'A concussive burst of sound, such as the effect of the thunderwave spell, deals thunder damage.',
    ],
    url: '/api/2014/damage-types/thunder',
  },
} as const;
