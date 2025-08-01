export const alignments2014 = {
  'lawful-good': {
    index: 'lawful-good',
    name: 'Lawful Good',
    abbreviation: 'LG',
    desc: 'Lawful good (LG) creatures can be counted on to do the right thing as expected by society. Gold dragons, paladins, and most dwarves are lawful good.',
    url: '/api/2014/alignments/lawful-good',
  },
  'neutral-good': {
    index: 'neutral-good',
    name: 'Neutral Good',
    abbreviation: 'NG',
    desc: 'Neutral good (NG) folk do the best they can to help others according to their needs. Many celestials, some cloud giants, and most gnomes are neutral good.',
    url: '/api/2014/alignments/neutral-good',
  },
  'chaotic-good': {
    index: 'chaotic-good',
    name: 'Chaotic Good',
    abbreviation: 'CG',
    desc: 'Chaotic good (CG) creatures act as their conscience directs, with little regard for what others expect. Copper dragons, many elves, and unicorns are chaotic good.',
    url: '/api/2014/alignments/chaotic-good',
  },
  'lawful-neutral': {
    index: 'lawful-neutral',
    name: 'Lawful Neutral',
    abbreviation: 'LN',
    desc: 'Lawful neutral (LN) individuals act in accordance with law, tradition, or personal codes. Many monks and some wizards are lawful neutral.',
    url: '/api/2014/alignments/lawful-neutral',
  },
  neutral: {
    index: 'neutral',
    name: 'Neutral',
    abbreviation: 'N',
    desc: "Neutral (N) is the alignment of those who prefer to steer clear of moral questions and don't take sides, doing what seems best at the time. Lizardfolk, most druids, and many humans are neutral.",
    url: '/api/2014/alignments/neutral',
  },
  'chaotic-neutral': {
    index: 'chaotic-neutral',
    name: 'Chaotic Neutral',
    abbreviation: 'CN',
    desc: 'Chaotic neutral (CN) creatures follow their whims, holding their personal freedom above all else. Many barbarians and rogues, and some bards, are chaotic neutral.',
    url: '/api/2014/alignments/chaotic-neutral',
  },
  'lawful-evil': {
    index: 'lawful-evil',
    name: 'Lawful Evil',
    abbreviation: 'LE',
    desc: 'Lawful evil (LE) creatures methodically take what they want, within the limits of a code of tradition, loyalty, or order. Devils, blue dragons, and hobgoblins are lawful evil.',
    url: '/api/2014/alignments/lawful-evil',
  },
  'neutral-evil': {
    index: 'neutral-evil',
    name: 'Neutral Evil',
    abbreviation: 'NE',
    desc: 'Neutral evil (NE) is the alignment of those who do whatever they can get away with, without compassion or qualms. Many drow, some cloud giants, and goblins are neutral evil.',
    url: '/api/2014/alignments/neutral-evil',
  },
  'chaotic-evil': {
    index: 'chaotic-evil',
    name: 'Chaotic Evil',
    abbreviation: 'CE',
    desc: 'Chaotic evil (CE) creatures act with arbitrary violence, spurred by their greed, hatred, or bloodlust. Demons, red dragons, and orcs are chaotic evil.',
    url: '/api/2014/alignments/chaotic-evil',
  },
} as const;

export type Alignments2014 = keyof typeof alignments2014;