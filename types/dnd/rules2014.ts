interface Rules2014Subsections {
  index: string;
  name: string;
  url: string;
}

interface Rules2014 {
  desc: string;
  index: string;
  name: string;
  subsections: Rules2014Subsections[];
  url: string;
}

export const rules2014 = {
  combat: {
    name: 'Combat',
    index: 'combat',
    desc: '# Combat\n',
    subsections: [
      {
        name: 'The Order of Combat',
        index: 'the-order-of-combat',
        url: '/api/2014/rule-sections/the-order-of-combat',
      },
      {
        name: 'Movement and Position',
        index: 'movement-and-position',
        url: '/api/2014/rule-sections/movement-and-position',
      },
      {
        name: 'Actions in Combat',
        index: 'actions-in-combat',
        url: '/api/2014/rule-sections/actions-in-combat',
      },
      {
        name: 'Making an Attack',
        index: 'making-an-attack',
        url: '/api/2014/rule-sections/making-an-attack',
      },
      {
        name: 'Cover',
        index: 'cover',
        url: '/api/2014/rule-sections/cover',
      },
      {
        name: 'Damage and Healing',
        index: 'damage-and-healing',
        url: '/api/2014/rule-sections/damage-and-healing',
      },
      {
        name: 'Mounted Combat',
        index: 'mounted-combat',
        url: '/api/2014/rule-sections/mounted-combat',
      },
      {
        name: 'Underwater Combat',
        index: 'underwater-combat',
        url: '/api/2014/rule-sections/underwater-combat',
      },
    ],
    url: '/api/2014/rules/combat',
  },
  'using-ability-scores': {
    name: 'Using Ability Scores',
    index: 'using-ability-scores',
    desc: "# Using Ability Scores\n\nSix abilities provide a quick description of every creature's physical and mental characteristics:\n- **Strength**, measuring physical power\n- **Dexterity**, measuring agility\n- **Constitution**, measuring endurance\n- **Intelligence**, measuring reasoning and memory\n- **Wisdom**, measuring perception and insight\n- **Charisma**, measuring force of personality\n\nIs a character muscle-bound and insightful? Brilliant and charming? Nimble and hardy? Ability scores define these qualities-a creature's assets as well as weaknesses.\n\nThe three main rolls of the game-the ability check, the saving throw, and the attack roll-rely on the six ability scores. The book's introduction describes the basic rule behind these rolls: roll a d20, add an ability modifier derived from one of the six ability scores, and compare the total to a target number.\n\n**Ability Scores and Modifiers** Each of a creature's abilities has a score, a number that defines the magnitude of that ability. An ability score is not just a measure of innate capabilities, but also encompasses a creature's training and competence in activities related to that ability.\n\nA score of 10 or 11 is the normal human average, but adventurers and many monsters are a cut above average in most abilities. A score of 18 is the highest that a person usually reaches. Adventurers can have scores as high as 20, and monsters and divine beings can have scores as high as 30.\n\nEach ability also has a modifier, derived from the score and ranging from -5 (for an ability score of 1) to +10 (for a score of 30). The Ability Scores and Modifiers table notes the ability modifiers for the range of possible ability scores, from 1 to 30.\n",
    subsections: [
      {
        name: 'Ability Scores and Modifiers',
        index: 'ability-scores-and-modifiers',
        url: '/api/2014/rule-sections/ability-scores-and-modifiers',
      },
      {
        name: 'Advantage and Disadvantage',
        index: 'advantage-and-disadvantage',
        url: '/api/2014/rule-sections/advantage-and-disadvantage',
      },
      {
        name: 'Proficiency Bonus',
        index: 'proficiency-bonus',
        url: '/api/2014/rule-sections/proficiency-bonus',
      },
      {
        name: 'Ability Checks',
        index: 'ability-checks',
        url: '/api/2014/rule-sections/ability-checks',
      },
      {
        name: 'Using Each Ability',
        index: 'using-each-ability',
        url: '/api/2014/rule-sections/using-each-ability',
      },
      {
        name: 'Saving Throws',
        index: 'saving-throws',
        url: '/api/2014/rule-sections/saving-throws',
      },
    ],
    url: '/api/2014/rules/using-ability-scores',
  },
  adventuring: {
    name: 'Adventuring',
    index: 'adventuring',
    desc: '# Adventuring\n',
    subsections: [
      {
        name: 'Time',
        index: 'time',
        url: '/api/2014/rule-sections/time',
      },
      {
        name: 'Movement',
        index: 'movement',
        url: '/api/2014/rule-sections/movement',
      },
      {
        name: 'The Environment',
        index: 'the-environment',
        url: '/api/2014/rule-sections/the-environment',
      },
      {
        name: 'Traps',
        index: 'traps',
        url: '/api/2014/rule-sections/traps',
      },
      {
        name: 'Diseases',
        index: 'diseases',
        url: '/api/2014/rule-sections/diseases',
      },
      {
        name: 'Madness',
        index: 'madness',
        url: '/api/2014/rule-sections/madness',
      },
      {
        name: 'Resting',
        index: 'resting',
        url: '/api/2014/rule-sections/resting',
      },
      {
        name: 'Between Adventures',
        index: 'between-adventures',
        url: '/api/2014/rule-sections/between-adventures',
      },
    ],
    url: '/api/2014/rules/adventuring',
  },
  spellcasting: {
    name: 'Spellcasting',
    index: 'spellcasting',
    desc: '# Spellcasting\n\nMagic permeates fantasy gaming worlds and often appears in the form of a spell.\n\nThis chapter provides the rules for casting spells. Different character classes have distinctive ways of learning and preparing their spells, and monsters use spells in unique ways. Regardless of its source, a spell follows the rules here.\n',
    subsections: [
      {
        name: 'What Is a Spell?',
        index: 'what-is-a-spell',
        url: '/api/2014/rule-sections/what-is-a-spell',
      },
      {
        name: 'Casting a Spell',
        index: 'casting-a-spell',
        url: '/api/2014/rule-sections/casting-a-spell',
      },
    ],
    url: '/api/2014/rules/spellcasting',
  },
  equipment: {
    name: 'Equipment',
    index: 'equipment',
    desc: "# Equipment\n\nCommon coins come in several different denominations based on the relative worth of the metal from which they are made. The three most common coins are the gold piece (gp), the silver piece (sp), and the copper piece (cp).\n\nWith one gold piece, a character can buy a bedroll, 50 feet of good rope, or a goat. A skilled (but not exceptional) artisan can earn one gold piece a day. The old piece is the standard unit of measure for wealth, even if the coin itself is not commonly used. When merchants discuss deals that involve goods or services worth hundreds or thousands of gold pieces, the transactions don't usually involve the exchange of individual coins. Rather, the gold piece is a standard measure of value, and the actual exchange is in gold bars, letters of credit, or valuable goods.\n\nOne gold piece is worth ten silver pieces, the most prevalent coin among commoners. A silver piece buys a laborer's work for half a day, a flask of lamp oil, or a night's rest in a poor inn.\n\nOne silver piece is worth ten copper pieces, which are common among laborers and beggars. A single copper piece buys a candle, a torch, or a piece of chalk.\n\nIn addition, unusual coins made of other precious metals sometimes appear in treasure hoards. The electrum piece (ep) and the platinum piece (pp) originate from fallen empires and lost kingdoms, and they sometimes arouse suspicion and skepticism when used in transactions. An electrum piece is worth five silver pieces, and a platinum piece is worth ten gold pieces.\n\nA standard coin weighs about a third of an ounce, so fifty coins weigh a pound.\n",
    subsections: [
      {
        name: 'Standard Exchange Rates',
        index: 'standard-exchange-rates',
        url: '/api/2014/rule-sections/standard-exchange-rates',
      },
      {
        name: 'Objects',
        index: 'objects',
        url: '/api/2014/rule-sections/objects',
      },
      {
        name: 'Poisons',
        index: 'poisons',
        url: '/api/2014/rule-sections/poisons',
      },
      {
        name: 'Attunement',
        index: 'attunement',
        url: '/api/2014/rule-sections/attunement',
      },
      {
        name: 'Wearing and Wielding Items',
        index: 'wearing-and-wielding-items',
        url: '/api/2014/rule-sections/wearing-and-wielding-items',
      },
      {
        name: 'Activating an Item',
        index: 'activating-an-item',
        url: '/api/2014/rule-sections/activating-an-item',
      },
      {
        name: 'Sentient Magic Items',
        index: 'sentient-magic-items',
        url: '/api/2014/rule-sections/sentient-magic-items',
      },
    ],
    url: '/api/2014/rules/equipment',
  },
  appendix: {
    name: 'Appendix',
    index: 'appendix',
    desc: '# Appendix\n',
    subsections: [
      {
        name: 'Fantasy-Historical Pantheons',
        index: 'fantasy-historical-pantheons',
        url: '/api/2014/rule-sections/fantasy-historical-pantheons',
      },
      {
        name: 'The Planes of Existence',
        index: 'the-planes-of-existence',
        url: '/api/2014/rule-sections/the-planes-of-existence',
      },
    ],
    url: '/api/2014/rules/appendix',
  },
} as const;

export type { Rules2014 };
