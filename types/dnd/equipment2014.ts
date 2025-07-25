interface Equipment2014Equipment_category {
  index: string;
  name: string;
  url: string;
}

interface Equipment2014Cost {
  quantity: number;
  unit: string;
}

interface Equipment2014Damage {
  damage_dice: string;
  damage_type: object;
}

interface Equipment2014Range {
  normal: number;
}

interface Equipment2014Properties {
  index: string;
  name: string;
  url: string;
}

interface Equipment2014Throw_range {
  long: number;
  normal: number;
}

interface Equipment2014Two_handed_damage {
  damage_dice: string;
  damage_type: object;
}

interface Equipment2014 {
  armor_category?: string;
  armor_class?: object;
  capacity?: string;
  category_range?: string;
  contents?: object[];
  cost: Equipment2014Cost;
  damage?: Equipment2014Damage;
  desc?: string[];
  equipment_category: Equipment2014Equipment_category;
  gear_category?: object;
  image?: string;
  index: string;
  name: string;
  properties?: Equipment2014Properties[];
  quantity?: number;
  range?: Equipment2014Range;
  special?: string[];
  speed?: object;
  stealth_disadvantage?: boolean;
  str_minimum?: number;
  throw_range?: Equipment2014Throw_range;
  tool_category?: string;
  two_handed_damage?: Equipment2014Two_handed_damage;
  url: string;
  vehicle_category?: string;
  weapon_category?: string;
  weapon_range?: string;
  weight?: number;
}

export const equipment2014 = {
  club: {
    index: 'club',
    name: 'Club',
    equipment_category: {
      index: 'weapon',
      name: 'Weapon',
      url: '/api/2014/equipment-categories/weapon',
    },
    weapon_category: 'Simple',
    weapon_range: 'Melee',
    category_range: 'Simple Melee',
    cost: {
      quantity: 1,
      unit: 'sp',
    },
    damage: {
      damage_dice: '1d4',
      damage_type: {
        index: 'bludgeoning',
        name: 'Bludgeoning',
        url: '/api/2014/damage-types/bludgeoning',
      },
    },
    range: {
      normal: 5,
    },
    weight: 2,
    properties: [
      {
        index: 'light',
        name: 'Light',
        url: '/api/2014/weapon-properties/light',
      },
      {
        index: 'monk',
        name: 'Monk',
        url: '/api/2014/weapon-properties/monk',
      },
    ],
    url: '/api/2014/equipment/club',
  },
  dagger: {
    index: 'dagger',
    name: 'Dagger',
    equipment_category: {
      index: 'weapon',
      name: 'Weapon',
      url: '/api/2014/equipment-categories/weapon',
    },
    weapon_category: 'Simple',
    weapon_range: 'Melee',
    category_range: 'Simple Melee',
    cost: {
      quantity: 2,
      unit: 'gp',
    },
    damage: {
      damage_dice: '1d4',
      damage_type: {
        index: 'piercing',
        name: 'Piercing',
        url: '/api/2014/damage-types/piercing',
      },
    },
    range: {
      normal: 5,
    },
    weight: 1,
    properties: [
      {
        index: 'finesse',
        name: 'Finesse',
        url: '/api/2014/weapon-properties/finesse',
      },
      {
        index: 'light',
        name: 'Light',
        url: '/api/2014/weapon-properties/light',
      },
      {
        index: 'thrown',
        name: 'Thrown',
        url: '/api/2014/weapon-properties/thrown',
      },
      {
        index: 'monk',
        name: 'Monk',
        url: '/api/2014/weapon-properties/monk',
      },
    ],
    throw_range: {
      normal: 20,
      long: 60,
    },
    url: '/api/2014/equipment/dagger',
  },
  greatclub: {
    index: 'greatclub',
    name: 'Greatclub',
    equipment_category: {
      index: 'weapon',
      name: 'Weapon',
      url: '/api/2014/equipment-categories/weapon',
    },
    weapon_category: 'Simple',
    weapon_range: 'Melee',
    category_range: 'Simple Melee',
    cost: {
      quantity: 2,
      unit: 'sp',
    },
    damage: {
      damage_dice: '1d8',
      damage_type: {
        index: 'bludgeoning',
        name: 'Bludgeoning',
        url: '/api/2014/damage-types/bludgeoning',
      },
    },
    range: {
      normal: 5,
    },
    weight: 10,
    properties: [
      {
        index: 'two-handed',
        name: 'Two-Handed',
        url: '/api/2014/weapon-properties/two-handed',
      },
    ],
    url: '/api/2014/equipment/greatclub',
  },
  handaxe: {
    index: 'handaxe',
    name: 'Handaxe',
    equipment_category: {
      index: 'weapon',
      name: 'Weapon',
      url: '/api/2014/equipment-categories/weapon',
    },
    weapon_category: 'Simple',
    weapon_range: 'Melee',
    category_range: 'Simple Melee',
    cost: {
      quantity: 5,
      unit: 'gp',
    },
    damage: {
      damage_dice: '1d6',
      damage_type: {
        index: 'slashing',
        name: 'Slashing',
        url: '/api/2014/damage-types/slashing',
      },
    },
    range: {
      normal: 5,
    },
    weight: 2,
    properties: [
      {
        index: 'light',
        name: 'Light',
        url: '/api/2014/weapon-properties/light',
      },
      {
        index: 'thrown',
        name: 'Thrown',
        url: '/api/2014/weapon-properties/thrown',
      },
      {
        index: 'monk',
        name: 'Monk',
        url: '/api/2014/weapon-properties/monk',
      },
    ],
    throw_range: {
      normal: 20,
      long: 60,
    },
    url: '/api/2014/equipment/handaxe',
  },
  javelin: {
    index: 'javelin',
    name: 'Javelin',
    equipment_category: {
      index: 'weapon',
      name: 'Weapon',
      url: '/api/2014/equipment-categories/weapon',
    },
    weapon_category: 'Simple',
    weapon_range: 'Melee',
    category_range: 'Simple Melee',
    cost: {
      quantity: 5,
      unit: 'sp',
    },
    damage: {
      damage_dice: '1d6',
      damage_type: {
        index: 'piercing',
        name: 'Piercing',
        url: '/api/2014/damage-types/piercing',
      },
    },
    range: {
      normal: 5,
    },
    weight: 2,
    properties: [
      {
        index: 'thrown',
        name: 'Thrown',
        url: '/api/2014/weapon-properties/thrown',
      },
      {
        index: 'monk',
        name: 'Monk',
        url: '/api/2014/weapon-properties/monk',
      },
    ],
    throw_range: {
      normal: 30,
      long: 120,
    },
    url: '/api/2014/equipment/javelin',
  },
  'light-hammer': {
    index: 'light-hammer',
    name: 'Light hammer',
    equipment_category: {
      index: 'weapon',
      name: 'Weapon',
      url: '/api/2014/equipment-categories/weapon',
    },
    weapon_category: 'Simple',
    weapon_range: 'Melee',
    category_range: 'Simple Melee',
    cost: {
      quantity: 2,
      unit: 'gp',
    },
    damage: {
      damage_dice: '1d4',
      damage_type: {
        index: 'bludgeoning',
        name: 'Bludgeoning',
        url: '/api/2014/damage-types/bludgeoning',
      },
    },
    range: {
      normal: 5,
    },
    weight: 2,
    properties: [
      {
        index: 'light',
        name: 'Light',
        url: '/api/2014/weapon-properties/light',
      },
      {
        index: 'thrown',
        name: 'Thrown',
        url: '/api/2014/weapon-properties/thrown',
      },
      {
        index: 'monk',
        name: 'Monk',
        url: '/api/2014/weapon-properties/monk',
      },
    ],
    throw_range: {
      normal: 20,
      long: 60,
    },
    url: '/api/2014/equipment/light-hammer',
  },
  mace: {
    index: 'mace',
    name: 'Mace',
    equipment_category: {
      index: 'weapon',
      name: 'Weapon',
      url: '/api/2014/equipment-categories/weapon',
    },
    weapon_category: 'Simple',
    weapon_range: 'Melee',
    category_range: 'Simple Melee',
    cost: {
      quantity: 5,
      unit: 'gp',
    },
    damage: {
      damage_dice: '1d6',
      damage_type: {
        index: 'bludgeoning',
        name: 'Bludgeoning',
        url: '/api/2014/damage-types/bludgeoning',
      },
    },
    range: {
      normal: 5,
    },
    weight: 4,
    properties: [
      {
        index: 'monk',
        name: 'Monk',
        url: '/api/2014/weapon-properties/monk',
      },
    ],
    url: '/api/2014/equipment/mace',
  },
  quarterstaff: {
    index: 'quarterstaff',
    name: 'Quarterstaff',
    equipment_category: {
      index: 'weapon',
      name: 'Weapon',
      url: '/api/2014/equipment-categories/weapon',
    },
    weapon_category: 'Simple',
    weapon_range: 'Melee',
    category_range: 'Simple Melee',
    cost: {
      quantity: 2,
      unit: 'sp',
    },
    damage: {
      damage_dice: '1d6',
      damage_type: {
        index: 'bludgeoning',
        name: 'Bludgeoning',
        url: '/api/2014/damage-types/bludgeoning',
      },
    },
    range: {
      normal: 5,
    },
    weight: 4,
    properties: [
      {
        index: 'versatile',
        name: 'Versatile',
        url: '/api/2014/weapon-properties/versatile',
      },
      {
        index: 'monk',
        name: 'Monk',
        url: '/api/2014/weapon-properties/monk',
      },
    ],
    two_handed_damage: {
      damage_dice: '1d8',
      damage_type: {
        index: 'bludgeoning',
        name: 'Bludgeoning',
        url: '/api/2014/damage-types/bludgeoning',
      },
    },
    url: '/api/2014/equipment/quarterstaff',
  },
  sickle: {
    index: 'sickle',
    name: 'Sickle',
    equipment_category: {
      index: 'weapon',
      name: 'Weapon',
      url: '/api/2014/equipment-categories/weapon',
    },
    weapon_category: 'Simple',
    weapon_range: 'Melee',
    category_range: 'Simple Melee',
    cost: {
      quantity: 1,
      unit: 'gp',
    },
    damage: {
      damage_dice: '1d4',
      damage_type: {
        index: 'slashing',
        name: 'Slashing',
        url: '/api/2014/damage-types/slashing',
      },
    },
    range: {
      normal: 5,
    },
    weight: 2,
    properties: [
      {
        index: 'light',
        name: 'Light',
        url: '/api/2014/weapon-properties/light',
      },
      {
        index: 'monk',
        name: 'Monk',
        url: '/api/2014/weapon-properties/monk',
      },
    ],
    url: '/api/2014/equipment/sickle',
  },
  spear: {
    index: 'spear',
    name: 'Spear',
    equipment_category: {
      index: 'weapon',
      name: 'Weapon',
      url: '/api/2014/equipment-categories/weapon',
    },
    weapon_category: 'Simple',
    weapon_range: 'Melee',
    category_range: 'Simple Melee',
    cost: {
      quantity: 1,
      unit: 'gp',
    },
    damage: {
      damage_dice: '1d6',
      damage_type: {
        index: 'piercing',
        name: 'Piercing',
        url: '/api/2014/damage-types/piercing',
      },
    },
    range: {
      normal: 5,
    },
    weight: 3,
    properties: [
      {
        index: 'thrown',
        name: 'Thrown',
        url: '/api/2014/weapon-properties/thrown',
      },
      {
        index: 'versatile',
        name: 'Versatile',
        url: '/api/2014/weapon-properties/versatile',
      },
      {
        index: 'monk',
        name: 'Monk',
        url: '/api/2014/weapon-properties/monk',
      },
    ],
    throw_range: {
      normal: 20,
      long: 60,
    },
    two_handed_damage: {
      damage_dice: '1d8',
      damage_type: {
        index: 'piercing',
        name: 'Piercing',
        url: '/api/2014/damage-types/piercing',
      },
    },
    url: '/api/2014/equipment/spear',
  },
  'crossbow-light': {
    index: 'crossbow-light',
    name: 'Crossbow, light',
    equipment_category: {
      index: 'weapon',
      name: 'Weapon',
      url: '/api/2014/equipment-categories/weapon',
    },
    weapon_category: 'Simple',
    weapon_range: 'Ranged',
    category_range: 'Simple Ranged',
    cost: {
      quantity: 25,
      unit: 'gp',
    },
    damage: {
      damage_dice: '1d8',
      damage_type: {
        index: 'piercing',
        name: 'Piercing',
        url: '/api/2014/damage-types/piercing',
      },
    },
    range: {
      normal: 80,
      long: 320,
    },
    weight: 5,
    properties: [
      {
        index: 'ammunition',
        name: 'Ammunition',
        url: '/api/2014/weapon-properties/ammunition',
      },
      {
        index: 'loading',
        name: 'Loading',
        url: '/api/2014/weapon-properties/loading',
      },
      {
        index: 'two-handed',
        name: 'Two-Handed',
        url: '/api/2014/weapon-properties/two-handed',
      },
    ],
    url: '/api/2014/equipment/crossbow-light',
  },
  dart: {
    index: 'dart',
    name: 'Dart',
    equipment_category: {
      index: 'weapon',
      name: 'Weapon',
      url: '/api/2014/equipment-categories/weapon',
    },
    weapon_category: 'Simple',
    weapon_range: 'Ranged',
    category_range: 'Simple Ranged',
    cost: {
      quantity: 5,
      unit: 'cp',
    },
    damage: {
      damage_dice: '1d4',
      damage_type: {
        index: 'piercing',
        name: 'Piercing',
        url: '/api/2014/damage-types/piercing',
      },
    },
    range: {
      normal: 20,
      long: 60,
    },
    weight: 0.25,
    properties: [
      {
        index: 'finesse',
        name: 'Finesse',
        url: '/api/2014/weapon-properties/finesse',
      },
      {
        index: 'thrown',
        name: 'Thrown',
        url: '/api/2014/weapon-properties/thrown',
      },
    ],
    throw_range: {
      normal: 20,
      long: 60,
    },
    url: '/api/2014/equipment/dart',
  },
  shortbow: {
    index: 'shortbow',
    name: 'Shortbow',
    equipment_category: {
      index: 'weapon',
      name: 'Weapon',
      url: '/api/2014/equipment-categories/weapon',
    },
    weapon_category: 'Simple',
    weapon_range: 'Ranged',
    category_range: 'Simple Ranged',
    cost: {
      quantity: 25,
      unit: 'gp',
    },
    damage: {
      damage_dice: '1d6',
      damage_type: {
        index: 'piercing',
        name: 'Piercing',
        url: '/api/2014/damage-types/piercing',
      },
    },
    range: {
      normal: 80,
      long: 320,
    },
    weight: 2,
    properties: [
      {
        index: 'ammunition',
        name: 'Ammunition',
        url: '/api/2014/weapon-properties/ammunition',
      },
      {
        index: 'two-handed',
        name: 'Two-Handed',
        url: '/api/2014/weapon-properties/two-handed',
      },
    ],
    url: '/api/2014/equipment/shortbow',
  },
  sling: {
    index: 'sling',
    name: 'Sling',
    equipment_category: {
      index: 'weapon',
      name: 'Weapon',
      url: '/api/2014/equipment-categories/weapon',
    },
    weapon_category: 'Simple',
    weapon_range: 'Ranged',
    category_range: 'Simple Ranged',
    cost: {
      quantity: 1,
      unit: 'sp',
    },
    damage: {
      damage_dice: '1d4',
      damage_type: {
        index: 'bludgeoning',
        name: 'Bludgeoning',
        url: '/api/2014/damage-types/bludgeoning',
      },
    },
    range: {
      normal: 30,
      long: 120,
    },
    weight: 0,
    properties: [
      {
        index: 'ammunition',
        name: 'Ammunition',
        url: '/api/2014/weapon-properties/ammunition',
      },
    ],
    url: '/api/2014/equipment/sling',
  },
  battleaxe: {
    index: 'battleaxe',
    name: 'Battleaxe',
    equipment_category: {
      index: 'weapon',
      name: 'Weapon',
      url: '/api/2014/equipment-categories/weapon',
    },
    weapon_category: 'Martial',
    weapon_range: 'Melee',
    category_range: 'Martial Melee',
    cost: {
      quantity: 10,
      unit: 'gp',
    },
    damage: {
      damage_dice: '1d8',
      damage_type: {
        index: 'slashing',
        name: 'Slashing',
        url: '/api/2014/damage-types/slashing',
      },
    },
    range: {
      normal: 5,
    },
    weight: 4,
    properties: [
      {
        index: 'versatile',
        name: 'Versatile',
        url: '/api/2014/weapon-properties/versatile',
      },
    ],
    two_handed_damage: {
      damage_dice: '1d10',
      damage_type: {
        index: 'slashing',
        name: 'Slashing',
        url: '/api/2014/damage-types/slashing',
      },
    },
    url: '/api/2014/equipment/battleaxe',
  },
  flail: {
    index: 'flail',
    name: 'Flail',
    equipment_category: {
      index: 'weapon',
      name: 'Weapon',
      url: '/api/2014/equipment-categories/weapon',
    },
    weapon_category: 'Martial',
    weapon_range: 'Melee',
    category_range: 'Martial Melee',
    cost: {
      quantity: 10,
      unit: 'gp',
    },
    damage: {
      damage_dice: '1d8',
      damage_type: {
        index: 'bludgeoning',
        name: 'Bludgeoning',
        url: '/api/2014/damage-types/bludgeoning',
      },
    },
    range: {
      normal: 5,
    },
    weight: 2,
    properties: [],
    url: '/api/2014/equipment/flail',
  },
  glaive: {
    index: 'glaive',
    name: 'Glaive',
    equipment_category: {
      index: 'weapon',
      name: 'Weapon',
      url: '/api/2014/equipment-categories/weapon',
    },
    weapon_category: 'Martial',
    weapon_range: 'Melee',
    category_range: 'Martial Melee',
    cost: {
      quantity: 20,
      unit: 'gp',
    },
    damage: {
      damage_dice: '1d10',
      damage_type: {
        index: 'slashing',
        name: 'Slashing',
        url: '/api/2014/damage-types/slashing',
      },
    },
    range: {
      normal: 5,
    },
    weight: 6,
    properties: [
      {
        index: 'heavy',
        name: 'Heavy',
        url: '/api/2014/weapon-properties/heavy',
      },
      {
        index: 'reach',
        name: 'Reach',
        url: '/api/2014/weapon-properties/reach',
      },
      {
        index: 'two-handed',
        name: 'Two-Handed',
        url: '/api/2014/weapon-properties/two-handed',
      },
    ],
    url: '/api/2014/equipment/glaive',
  },
  greataxe: {
    index: 'greataxe',
    name: 'Greataxe',
    equipment_category: {
      index: 'weapon',
      name: 'Weapon',
      url: '/api/2014/equipment-categories/weapon',
    },
    weapon_category: 'Martial',
    weapon_range: 'Melee',
    category_range: 'Martial Melee',
    cost: {
      quantity: 30,
      unit: 'gp',
    },
    damage: {
      damage_dice: '1d12',
      damage_type: {
        index: 'slashing',
        name: 'Slashing',
        url: '/api/2014/damage-types/slashing',
      },
    },
    range: {
      normal: 5,
    },
    weight: 7,
    properties: [
      {
        index: 'heavy',
        name: 'Heavy',
        url: '/api/2014/weapon-properties/heavy',
      },
      {
        index: 'two-handed',
        name: 'Two-Handed',
        url: '/api/2014/weapon-properties/two-handed',
      },
    ],
    url: '/api/2014/equipment/greataxe',
  },
  greatsword: {
    index: 'greatsword',
    name: 'Greatsword',
    equipment_category: {
      index: 'weapon',
      name: 'Weapon',
      url: '/api/2014/equipment-categories/weapon',
    },
    weapon_category: 'Martial',
    weapon_range: 'Melee',
    category_range: 'Martial Melee',
    cost: {
      quantity: 50,
      unit: 'gp',
    },
    damage: {
      damage_dice: '2d6',
      damage_type: {
        index: 'slashing',
        name: 'Slashing',
        url: '/api/2014/damage-types/slashing',
      },
    },
    range: {
      normal: 5,
    },
    weight: 6,
    properties: [
      {
        index: 'heavy',
        name: 'Heavy',
        url: '/api/2014/weapon-properties/heavy',
      },
      {
        index: 'two-handed',
        name: 'Two-Handed',
        url: '/api/2014/weapon-properties/two-handed',
      },
    ],
    url: '/api/2014/equipment/greatsword',
  },
  halberd: {
    index: 'halberd',
    name: 'Halberd',
    equipment_category: {
      index: 'weapon',
      name: 'Weapon',
      url: '/api/2014/equipment-categories/weapon',
    },
    weapon_category: 'Martial',
    weapon_range: 'Melee',
    category_range: 'Martial Melee',
    cost: {
      quantity: 20,
      unit: 'gp',
    },
    damage: {
      damage_dice: '1d10',
      damage_type: {
        index: 'slashing',
        name: 'Slashing',
        url: '/api/2014/damage-types/slashing',
      },
    },
    range: {
      normal: 5,
    },
    weight: 6,
    properties: [
      {
        index: 'heavy',
        name: 'Heavy',
        url: '/api/2014/weapon-properties/heavy',
      },
      {
        index: 'reach',
        name: 'Reach',
        url: '/api/2014/weapon-properties/reach',
      },
      {
        index: 'two-handed',
        name: 'Two-Handed',
        url: '/api/2014/weapon-properties/two-handed',
      },
    ],
    url: '/api/2014/equipment/halberd',
  },
  lance: {
    index: 'lance',
    name: 'Lance',
    equipment_category: {
      index: 'weapon',
      name: 'Weapon',
      url: '/api/2014/equipment-categories/weapon',
    },
    weapon_category: 'Martial',
    weapon_range: 'Melee',
    category_range: 'Martial Melee',
    cost: {
      quantity: 10,
      unit: 'gp',
    },
    damage: {
      damage_dice: '1d12',
      damage_type: {
        index: 'piercing',
        name: 'Piercing',
        url: '/api/2014/damage-types/piercing',
      },
    },
    range: {
      normal: 5,
    },
    weight: 6,
    properties: [
      {
        index: 'reach',
        name: 'Reach',
        url: '/api/2014/weapon-properties/reach',
      },
      {
        index: 'special',
        name: 'Special',
        url: '/api/2014/weapon-properties/special',
      },
    ],
    special: [
      "You have disadvantage when you use a lance to attack a target within 5 feet of you. Also, a lance requires two hands to wield when you aren't mounted.",
    ],
    url: '/api/2014/equipment/lance',
  },
  longsword: {
    index: 'longsword',
    name: 'Longsword',
    equipment_category: {
      index: 'weapon',
      name: 'Weapon',
      url: '/api/2014/equipment-categories/weapon',
    },
    weapon_category: 'Martial',
    weapon_range: 'Melee',
    category_range: 'Martial Melee',
    cost: {
      quantity: 15,
      unit: 'gp',
    },
    damage: {
      damage_dice: '1d8',
      damage_type: {
        index: 'slashing',
        name: 'Slashing',
        url: '/api/2014/damage-types/slashing',
      },
    },
    range: {
      normal: 5,
    },
    weight: 3,
    properties: [
      {
        index: 'versatile',
        name: 'Versatile',
        url: '/api/2014/weapon-properties/versatile',
      },
    ],
    two_handed_damage: {
      damage_dice: '1d10',
      damage_type: {
        index: 'slashing',
        name: 'Slashing',
        url: '/api/2014/damage-types/slashing',
      },
    },
    url: '/api/2014/equipment/longsword',
  },
  maul: {
    index: 'maul',
    name: 'Maul',
    equipment_category: {
      index: 'weapon',
      name: 'Weapon',
      url: '/api/2014/equipment-categories/weapon',
    },
    weapon_category: 'Martial',
    weapon_range: 'Melee',
    category_range: 'Martial Melee',
    cost: {
      quantity: 10,
      unit: 'gp',
    },
    damage: {
      damage_dice: '2d6',
      damage_type: {
        index: 'bludgeoning',
        name: 'Bludgeoning',
        url: '/api/2014/damage-types/bludgeoning',
      },
    },
    range: {
      normal: 5,
    },
    weight: 10,
    properties: [
      {
        index: 'heavy',
        name: 'Heavy',
        url: '/api/2014/weapon-properties/heavy',
      },
      {
        index: 'two-handed',
        name: 'Two-Handed',
        url: '/api/2014/weapon-properties/two-handed',
      },
    ],
    url: '/api/2014/equipment/maul',
  },
  morningstar: {
    index: 'morningstar',
    name: 'Morningstar',
    equipment_category: {
      index: 'weapon',
      name: 'Weapon',
      url: '/api/2014/equipment-categories/weapon',
    },
    weapon_category: 'Martial',
    weapon_range: 'Melee',
    category_range: 'Martial Melee',
    cost: {
      quantity: 15,
      unit: 'gp',
    },
    damage: {
      damage_dice: '1d8',
      damage_type: {
        index: 'piercing',
        name: 'Piercing',
        url: '/api/2014/damage-types/piercing',
      },
    },
    range: {
      normal: 5,
    },
    weight: 4,
    properties: [],
    url: '/api/2014/equipment/morningstar',
  },
  pike: {
    index: 'pike',
    name: 'Pike',
    equipment_category: {
      index: 'weapon',
      name: 'Weapon',
      url: '/api/2014/equipment-categories/weapon',
    },
    weapon_category: 'Martial',
    weapon_range: 'Melee',
    category_range: 'Martial Melee',
    cost: {
      quantity: 5,
      unit: 'gp',
    },
    damage: {
      damage_dice: '1d10',
      damage_type: {
        index: 'piercing',
        name: 'Piercing',
        url: '/api/2014/damage-types/piercing',
      },
    },
    range: {
      normal: 5,
    },
    weight: 18,
    properties: [
      {
        index: 'heavy',
        name: 'Heavy',
        url: '/api/2014/weapon-properties/heavy',
      },
      {
        index: 'reach',
        name: 'Reach',
        url: '/api/2014/weapon-properties/reach',
      },
      {
        index: 'two-handed',
        name: 'Two-Handed',
        url: '/api/2014/weapon-properties/two-handed',
      },
    ],
    url: '/api/2014/equipment/pike',
  },
  rapier: {
    index: 'rapier',
    name: 'Rapier',
    equipment_category: {
      index: 'weapon',
      name: 'Weapon',
      url: '/api/2014/equipment-categories/weapon',
    },
    weapon_category: 'Martial',
    weapon_range: 'Melee',
    category_range: 'Martial Melee',
    cost: {
      quantity: 25,
      unit: 'gp',
    },
    damage: {
      damage_dice: '1d8',
      damage_type: {
        index: 'piercing',
        name: 'Piercing',
        url: '/api/2014/damage-types/piercing',
      },
    },
    range: {
      normal: 5,
    },
    weight: 2,
    properties: [
      {
        index: 'finesse',
        name: 'Finesse',
        url: '/api/2014/weapon-properties/finesse',
      },
    ],
    url: '/api/2014/equipment/rapier',
  },
  scimitar: {
    index: 'scimitar',
    name: 'Scimitar',
    equipment_category: {
      index: 'weapon',
      name: 'Weapon',
      url: '/api/2014/equipment-categories/weapon',
    },
    weapon_category: 'Martial',
    weapon_range: 'Melee',
    category_range: 'Martial Melee',
    cost: {
      quantity: 25,
      unit: 'gp',
    },
    damage: {
      damage_dice: '1d6',
      damage_type: {
        index: 'slashing',
        name: 'Slashing',
        url: '/api/2014/damage-types/slashing',
      },
    },
    range: {
      normal: 5,
    },
    weight: 3,
    properties: [
      {
        index: 'finesse',
        name: 'Finesse',
        url: '/api/2014/weapon-properties/finesse',
      },
      {
        index: 'light',
        name: 'Light',
        url: '/api/2014/weapon-properties/light',
      },
    ],
    url: '/api/2014/equipment/scimitar',
  },
  shortsword: {
    index: 'shortsword',
    name: 'Shortsword',
    equipment_category: {
      index: 'weapon',
      name: 'Weapon',
      url: '/api/2014/equipment-categories/weapon',
    },
    weapon_category: 'Martial',
    weapon_range: 'Melee',
    category_range: 'Martial Melee',
    cost: {
      quantity: 10,
      unit: 'gp',
    },
    damage: {
      damage_dice: '1d6',
      damage_type: {
        index: 'piercing',
        name: 'Piercing',
        url: '/api/2014/damage-types/piercing',
      },
    },
    range: {
      normal: 5,
    },
    weight: 2,
    properties: [
      {
        index: 'finesse',
        name: 'Finesse',
        url: '/api/2014/weapon-properties/finesse',
      },
      {
        index: 'light',
        name: 'Light',
        url: '/api/2014/weapon-properties/light',
      },
      {
        index: 'monk',
        name: 'Monk',
        url: '/api/2014/weapon-properties/monk',
      },
    ],
    url: '/api/2014/equipment/shortsword',
  },
  trident: {
    index: 'trident',
    name: 'Trident',
    equipment_category: {
      index: 'weapon',
      name: 'Weapon',
      url: '/api/2014/equipment-categories/weapon',
    },
    weapon_category: 'Martial',
    weapon_range: 'Melee',
    category_range: 'Martial Melee',
    cost: {
      quantity: 5,
      unit: 'gp',
    },
    damage: {
      damage_dice: '1d6',
      damage_type: {
        index: 'piercing',
        name: 'Piercing',
        url: '/api/2014/damage-types/piercing',
      },
    },
    range: {
      normal: 5,
    },
    weight: 4,
    properties: [
      {
        index: 'thrown',
        name: 'Thrown',
        url: '/api/2014/weapon-properties/thrown',
      },
      {
        index: 'versatile',
        name: 'Versatile',
        url: '/api/2014/weapon-properties/versatile',
      },
    ],
    throw_range: {
      normal: 20,
      long: 60,
    },
    two_handed_damage: {
      damage_dice: '1d8',
      damage_type: {
        index: 'piercing',
        name: 'Piercing',
        url: '/api/2014/damage-types/piercing',
      },
    },
    url: '/api/2014/equipment/trident',
  },
  'war-pick': {
    index: 'war-pick',
    name: 'War pick',
    equipment_category: {
      index: 'weapon',
      name: 'Weapon',
      url: '/api/2014/equipment-categories/weapon',
    },
    weapon_category: 'Martial',
    weapon_range: 'Melee',
    category_range: 'Martial Melee',
    cost: {
      quantity: 5,
      unit: 'gp',
    },
    damage: {
      damage_dice: '1d8',
      damage_type: {
        index: 'piercing',
        name: 'Piercing',
        url: '/api/2014/damage-types/piercing',
      },
    },
    range: {
      normal: 5,
    },
    weight: 2,
    properties: [],
    url: '/api/2014/equipment/war-pick',
  },
  warhammer: {
    index: 'warhammer',
    name: 'Warhammer',
    equipment_category: {
      index: 'weapon',
      name: 'Weapon',
      url: '/api/2014/equipment-categories/weapon',
    },
    weapon_category: 'Martial',
    weapon_range: 'Melee',
    category_range: 'Martial Melee',
    cost: {
      quantity: 15,
      unit: 'gp',
    },
    damage: {
      damage_dice: '1d8',
      damage_type: {
        index: 'bludgeoning',
        name: 'Bludgeoning',
        url: '/api/2014/damage-types/bludgeoning',
      },
    },
    range: {
      normal: 5,
    },
    weight: 2,
    properties: [
      {
        index: 'versatile',
        name: 'Versatile',
        url: '/api/2014/weapon-properties/versatile',
      },
    ],
    two_handed_damage: {
      damage_dice: '1d10',
      damage_type: {
        index: 'bludgeoning',
        name: 'Bludgeoning',
        url: '/api/2014/damage-types/bludgeoning',
      },
    },
    url: '/api/2014/equipment/warhammer',
  },
  whip: {
    index: 'whip',
    name: 'Whip',
    equipment_category: {
      index: 'weapon',
      name: 'Weapon',
      url: '/api/2014/equipment-categories/weapon',
    },
    weapon_category: 'Martial',
    weapon_range: 'Melee',
    category_range: 'Martial Melee',
    cost: {
      quantity: 2,
      unit: 'gp',
    },
    damage: {
      damage_dice: '1d4',
      damage_type: {
        index: 'slashing',
        name: 'Slashing',
        url: '/api/2014/damage-types/slashing',
      },
    },
    range: {
      normal: 5,
    },
    weight: 3,
    properties: [
      {
        index: 'finesse',
        name: 'Finesse',
        url: '/api/2014/weapon-properties/finesse',
      },
      {
        index: 'reach',
        name: 'Reach',
        url: '/api/2014/weapon-properties/reach',
      },
    ],
    url: '/api/2014/equipment/whip',
  },
  blowgun: {
    index: 'blowgun',
    name: 'Blowgun',
    equipment_category: {
      index: 'weapon',
      name: 'Weapon',
      url: '/api/2014/equipment-categories/weapon',
    },
    weapon_category: 'Martial',
    weapon_range: 'Ranged',
    category_range: 'Martial Ranged',
    cost: {
      quantity: 10,
      unit: 'gp',
    },
    damage: {
      damage_dice: '1',
      damage_type: {
        index: 'piercing',
        name: 'Piercing',
        url: '/api/2014/damage-types/piercing',
      },
    },
    range: {
      normal: 25,
      long: 100,
    },
    weight: 1,
    properties: [
      {
        index: 'ammunition',
        name: 'Ammunition',
        url: '/api/2014/weapon-properties/ammunition',
      },
      {
        index: 'loading',
        name: 'Loading',
        url: '/api/2014/weapon-properties/loading',
      },
    ],
    url: '/api/2014/equipment/blowgun',
  },
  'crossbow-hand': {
    index: 'crossbow-hand',
    name: 'Crossbow, hand',
    equipment_category: {
      index: 'weapon',
      name: 'Weapon',
      url: '/api/2014/equipment-categories/weapon',
    },
    weapon_category: 'Martial',
    weapon_range: 'Ranged',
    category_range: 'Martial Ranged',
    cost: {
      quantity: 75,
      unit: 'gp',
    },
    damage: {
      damage_dice: '1d6',
      damage_type: {
        index: 'piercing',
        name: 'Piercing',
        url: '/api/2014/damage-types/piercing',
      },
    },
    range: {
      normal: 30,
      long: 120,
    },
    weight: 3,
    properties: [
      {
        index: 'ammunition',
        name: 'Ammunition',
        url: '/api/2014/weapon-properties/ammunition',
      },
      {
        index: 'light',
        name: 'Light',
        url: '/api/2014/weapon-properties/light',
      },
      {
        index: 'loading',
        name: 'Loading',
        url: '/api/2014/weapon-properties/loading',
      },
    ],
    url: '/api/2014/equipment/crossbow-hand',
  },
  'crossbow-heavy': {
    index: 'crossbow-heavy',
    name: 'Crossbow, heavy',
    equipment_category: {
      index: 'weapon',
      name: 'Weapon',
      url: '/api/2014/equipment-categories/weapon',
    },
    weapon_category: 'Martial',
    weapon_range: 'Ranged',
    category_range: 'Martial Ranged',
    cost: {
      quantity: 50,
      unit: 'gp',
    },
    damage: {
      damage_dice: '1d10',
      damage_type: {
        index: 'piercing',
        name: 'Piercing',
        url: '/api/2014/damage-types/piercing',
      },
    },
    range: {
      normal: 100,
      long: 400,
    },
    weight: 18,
    properties: [
      {
        index: 'ammunition',
        name: 'Ammunition',
        url: '/api/2014/weapon-properties/ammunition',
      },
      {
        index: 'heavy',
        name: 'Heavy',
        url: '/api/2014/weapon-properties/heavy',
      },
      {
        index: 'loading',
        name: 'Loading',
        url: '/api/2014/weapon-properties/loading',
      },
      {
        index: 'two-handed',
        name: 'Two-Handed',
        url: '/api/2014/weapon-properties/two-handed',
      },
    ],
    image: '/api/images/equipment/crossbow-heavy.png',
    url: '/api/2014/equipment/crossbow-heavy',
  },
  longbow: {
    index: 'longbow',
    name: 'Longbow',
    equipment_category: {
      index: 'weapon',
      name: 'Weapon',
      url: '/api/2014/equipment-categories/weapon',
    },
    weapon_category: 'Martial',
    weapon_range: 'Ranged',
    category_range: 'Martial Ranged',
    cost: {
      quantity: 50,
      unit: 'gp',
    },
    damage: {
      damage_dice: '1d8',
      damage_type: {
        index: 'piercing',
        name: 'Piercing',
        url: '/api/2014/damage-types/piercing',
      },
    },
    range: {
      normal: 150,
      long: 600,
    },
    weight: 2,
    properties: [
      {
        index: 'ammunition',
        name: 'Ammunition',
        url: '/api/2014/weapon-properties/ammunition',
      },
      {
        index: 'heavy',
        name: 'Heavy',
        url: '/api/2014/weapon-properties/heavy',
      },
      {
        index: 'two-handed',
        name: 'Two-Handed',
        url: '/api/2014/weapon-properties/two-handed',
      },
    ],
    url: '/api/2014/equipment/longbow',
  },
  net: {
    index: 'net',
    name: 'Net',
    equipment_category: {
      index: 'weapon',
      name: 'Weapon',
      url: '/api/2014/equipment-categories/weapon',
    },
    weapon_category: 'Martial',
    weapon_range: 'Ranged',
    category_range: 'Martial Ranged',
    cost: {
      quantity: 1,
      unit: 'gp',
    },
    range: {
      normal: 5,
      long: 15,
    },
    weight: 3,
    properties: [
      {
        index: 'thrown',
        name: 'Thrown',
        url: '/api/2014/weapon-properties/thrown',
      },
      {
        index: 'special',
        name: 'Special',
        url: '/api/2014/weapon-properties/special',
      },
    ],
    special: [
      'A Large or smaller creature hit by a net is restrained until it is freed. A net has no effect on creatures that are formless, or creatures that are Huge or larger. A creature can use its action to make a DC 10 Strength check, freeing itself or another creature within its reach on a success. Dealing 5 slashing damage to the net (AC 10) also frees the creature without harming it, ending the effect and destroying the net. When you use an action, bonus action, or reaction to attack with a net, you can make only one attack regardless of the number of attacks you can normally make.',
    ],
    throw_range: {
      normal: 5,
      long: 15,
    },
    url: '/api/2014/equipment/net',
  },
  'padded-armor': {
    index: 'padded-armor',
    name: 'Padded Armor',
    equipment_category: {
      index: 'armor',
      name: 'Armor',
      url: '/api/2014/equipment-categories/armor',
    },
    armor_category: 'Light',
    armor_class: {
      base: 11,
      dex_bonus: true,
    },
    str_minimum: 0,
    stealth_disadvantage: true,
    weight: 8,
    cost: {
      quantity: 5,
      unit: 'gp',
    },
    url: '/api/2014/equipment/padded-armor',
  },
  'leather-armor': {
    index: 'leather-armor',
    name: 'Leather Armor',
    equipment_category: {
      index: 'armor',
      name: 'Armor',
      url: '/api/2014/equipment-categories/armor',
    },
    armor_category: 'Light',
    armor_class: {
      base: 11,
      dex_bonus: true,
    },
    str_minimum: 0,
    stealth_disadvantage: false,
    weight: 10,
    cost: {
      quantity: 10,
      unit: 'gp',
    },
    url: '/api/2014/equipment/leather-armor',
  },
  'studded-leather-armor': {
    index: 'studded-leather-armor',
    name: 'Studded Leather Armor',
    equipment_category: {
      index: 'armor',
      name: 'Armor',
      url: '/api/2014/equipment-categories/armor',
    },
    armor_category: 'Light',
    armor_class: {
      base: 12,
      dex_bonus: true,
    },
    str_minimum: 0,
    stealth_disadvantage: false,
    weight: 13,
    cost: {
      quantity: 45,
      unit: 'gp',
    },
    url: '/api/2014/equipment/studded-leather-armor',
  },
  'hide-armor': {
    index: 'hide-armor',
    name: 'Hide Armor',
    equipment_category: {
      index: 'armor',
      name: 'Armor',
      url: '/api/2014/equipment-categories/armor',
    },
    armor_category: 'Medium',
    armor_class: {
      base: 12,
      dex_bonus: true,
      max_bonus: 2,
    },
    str_minimum: 0,
    stealth_disadvantage: false,
    weight: 12,
    cost: {
      quantity: 10,
      unit: 'gp',
    },
    url: '/api/2014/equipment/hide-armor',
  },
  'chain-shirt': {
    index: 'chain-shirt',
    name: 'Chain Shirt',
    equipment_category: {
      index: 'armor',
      name: 'Armor',
      url: '/api/2014/equipment-categories/armor',
    },
    armor_category: 'Medium',
    armor_class: {
      base: 13,
      dex_bonus: true,
      max_bonus: 2,
    },
    str_minimum: 0,
    stealth_disadvantage: false,
    weight: 20,
    cost: {
      quantity: 50,
      unit: 'gp',
    },
    url: '/api/2014/equipment/chain-shirt',
  },
  'scale-mail': {
    index: 'scale-mail',
    name: 'Scale Mail',
    equipment_category: {
      index: 'armor',
      name: 'Armor',
      url: '/api/2014/equipment-categories/armor',
    },
    armor_category: 'Medium',
    armor_class: {
      base: 14,
      dex_bonus: true,
      max_bonus: 2,
    },
    str_minimum: 0,
    stealth_disadvantage: true,
    weight: 45,
    cost: {
      quantity: 50,
      unit: 'gp',
    },
    url: '/api/2014/equipment/scale-mail',
  },
  breastplate: {
    index: 'breastplate',
    name: 'Breastplate',
    equipment_category: {
      index: 'armor',
      name: 'Armor',
      url: '/api/2014/equipment-categories/armor',
    },
    armor_category: 'Medium',
    armor_class: {
      base: 14,
      dex_bonus: true,
      max_bonus: 2,
    },
    str_minimum: 0,
    stealth_disadvantage: false,
    weight: 20,
    cost: {
      quantity: 400,
      unit: 'gp',
    },
    url: '/api/2014/equipment/breastplate',
  },
  'half-plate-armor': {
    index: 'half-plate-armor',
    name: 'Half Plate Armor',
    equipment_category: {
      index: 'armor',
      name: 'Armor',
      url: '/api/2014/equipment-categories/armor',
    },
    armor_category: 'Medium',
    armor_class: {
      base: 15,
      dex_bonus: true,
      max_bonus: 2,
    },
    str_minimum: 0,
    stealth_disadvantage: true,
    weight: 40,
    cost: {
      quantity: 750,
      unit: 'gp',
    },
    url: '/api/2014/equipment/half-plate-armor',
  },
  'ring-mail': {
    index: 'ring-mail',
    name: 'Ring Mail',
    equipment_category: {
      index: 'armor',
      name: 'Armor',
      url: '/api/2014/equipment-categories/armor',
    },
    armor_category: 'Heavy',
    armor_class: {
      base: 14,
      dex_bonus: false,
    },
    str_minimum: 0,
    stealth_disadvantage: true,
    weight: 40,
    cost: {
      quantity: 30,
      unit: 'gp',
    },
    url: '/api/2014/equipment/ring-mail',
  },
  'chain-mail': {
    index: 'chain-mail',
    name: 'Chain Mail',
    equipment_category: {
      index: 'armor',
      name: 'Armor',
      url: '/api/2014/equipment-categories/armor',
    },
    armor_category: 'Heavy',
    armor_class: {
      base: 16,
      dex_bonus: false,
    },
    str_minimum: 13,
    stealth_disadvantage: true,
    weight: 55,
    cost: {
      quantity: 75,
      unit: 'gp',
    },
    url: '/api/2014/equipment/chain-mail',
  },
  'splint-armor': {
    index: 'splint-armor',
    name: 'Splint Armor',
    equipment_category: {
      index: 'armor',
      name: 'Armor',
      url: '/api/2014/equipment-categories/armor',
    },
    armor_category: 'Heavy',
    armor_class: {
      base: 17,
      dex_bonus: false,
    },
    str_minimum: 15,
    stealth_disadvantage: true,
    weight: 60,
    cost: {
      quantity: 200,
      unit: 'gp',
    },
    url: '/api/2014/equipment/splint-armor',
  },
  'plate-armor': {
    index: 'plate-armor',
    name: 'Plate Armor',
    equipment_category: {
      index: 'armor',
      name: 'Armor',
      url: '/api/2014/equipment-categories/armor',
    },
    armor_category: 'Heavy',
    armor_class: {
      base: 18,
      dex_bonus: false,
    },
    str_minimum: 15,
    stealth_disadvantage: true,
    weight: 65,
    cost: {
      quantity: 1500,
      unit: 'gp',
    },
    url: '/api/2014/equipment/plate-armor',
  },
  shield: {
    index: 'shield',
    name: 'Shield',
    equipment_category: {
      index: 'armor',
      name: 'Armor',
      url: '/api/2014/equipment-categories/armor',
    },
    armor_category: 'Shield',
    armor_class: {
      base: 2,
      dex_bonus: false,
    },
    str_minimum: 0,
    stealth_disadvantage: false,
    weight: 6,
    cost: {
      quantity: 10,
      unit: 'gp',
    },
    url: '/api/2014/equipment/shield',
  },
  abacus: {
    index: 'abacus',
    name: 'Abacus',
    equipment_category: {
      index: 'adventuring-gear',
      name: 'Adventuring Gear',
      url: '/api/2014/equipment-categories/adventuring-gear',
    },
    gear_category: {
      index: 'standard-gear',
      name: 'Standard Gear',
      url: '/api/2014/equipment-categories/standard-gear',
    },
    cost: {
      quantity: 2,
      unit: 'gp',
    },
    weight: 2,
    url: '/api/2014/equipment/abacus',
  },
  'acid-vial': {
    index: 'acid-vial',
    name: 'Acid (vial)',
    equipment_category: {
      index: 'adventuring-gear',
      name: 'Adventuring Gear',
      url: '/api/2014/equipment-categories/adventuring-gear',
    },
    gear_category: {
      index: 'standard-gear',
      name: 'Standard Gear',
      url: '/api/2014/equipment-categories/standard-gear',
    },
    cost: {
      quantity: 25,
      unit: 'gp',
    },
    weight: 1,
    desc: [
      'As an action, you can splash the contents of this vial onto a creature within 5 feet of you or throw the vial up to 20 feet, shattering it on impact. In either case, make a ranged attack against a creature or object, treating the acid as an improvised weapon.',
      'On a hit, the target takes 2d6 acid damage.',
    ],
    url: '/api/2014/equipment/acid-vial',
  },
  'alchemists-fire-flask': {
    index: 'alchemists-fire-flask',
    name: "Alchemist's fire (flask)",
    equipment_category: {
      index: 'adventuring-gear',
      name: 'Adventuring Gear',
      url: '/api/2014/equipment-categories/adventuring-gear',
    },
    gear_category: {
      index: 'standard-gear',
      name: 'Standard Gear',
      url: '/api/2014/equipment-categories/standard-gear',
    },
    cost: {
      quantity: 50,
      unit: 'gp',
    },
    desc: [
      'This sticky, adhesive fluid ignites when exposed to air.',
      "As an action, you can throw this flask up to 20 feet, shattering it on impact. Make a ranged attack against a creature or object, treating the alchemist's fire as an improvised weapon.",
      'On a hit, the target takes 1d4 fire damage at the start of each of its turns. A creature can end this damage by using its action to make a DC 10 Dexterity check to extinguish the flames.',
    ],
    weight: 1,
    url: '/api/2014/equipment/alchemists-fire-flask',
  },
  'alms-box': {
    index: 'alms-box',
    name: 'Alms box',
    equipment_category: {
      index: 'adventuring-gear',
      name: 'Adventuring Gear',
      url: '/api/2014/equipment-categories/adventuring-gear',
    },
    gear_category: {
      index: 'standard-gear',
      name: 'Standard Gear',
      url: '/api/2014/equipment-categories/standard-gear',
    },
    cost: {
      quantity: 0,
      unit: 'cp',
    },
    weight: 0,
    desc: ["A small box for alms, typically found in a priest's pack."],
    url: '/api/2014/equipment/alms-box',
  },
  arrow: {
    index: 'arrow',
    name: 'Arrow',
    equipment_category: {
      index: 'adventuring-gear',
      name: 'Adventuring Gear',
      url: '/api/2014/equipment-categories/adventuring-gear',
    },
    gear_category: {
      index: 'ammunition',
      name: 'Ammunition',
      url: '/api/2014/equipment-categories/ammunition',
    },
    quantity: 20,
    cost: {
      quantity: 1,
      unit: 'gp',
    },
    weight: 1,
    url: '/api/2014/equipment/arrow',
  },
  'block-of-incense': {
    index: 'block-of-incense',
    name: 'Block of incense',
    equipment_category: {
      index: 'adventuring-gear',
      name: 'Adventuring Gear',
      url: '/api/2014/equipment-categories/adventuring-gear',
    },
    gear_category: {
      index: 'standard-gear',
      name: 'Standard Gear',
      url: '/api/2014/equipment-categories/standard-gear',
    },
    cost: {
      quantity: 0,
      unit: 'cp',
    },
    weight: 0,
    desc: ["A block of incense, typically found in a priest's pack."],
    url: '/api/2014/equipment/block-of-incense',
  },
  'blowgun-needle': {
    index: 'blowgun-needle',
    name: 'Blowgun needle',
    equipment_category: {
      index: 'adventuring-gear',
      name: 'Adventuring Gear',
      url: '/api/2014/equipment-categories/adventuring-gear',
    },
    gear_category: {
      index: 'ammunition',
      name: 'Ammunition',
      url: '/api/2014/equipment-categories/ammunition',
    },
    quantity: 50,
    cost: {
      quantity: 1,
      unit: 'gp',
    },
    weight: 1,
    url: '/api/2014/equipment/blowgun-needle',
  },
  censer: {
    index: 'censer',
    name: 'Censer',
    equipment_category: {
      index: 'adventuring-gear',
      name: 'Adventuring Gear',
      url: '/api/2014/equipment-categories/adventuring-gear',
    },
    gear_category: {
      index: 'standard-gear',
      name: 'Standard Gear',
      url: '/api/2014/equipment-categories/standard-gear',
    },
    cost: {
      quantity: 0,
      unit: 'cp',
    },
    weight: 0,
    desc: ["A censer, typically found in a priest's pack."],
    url: '/api/2014/equipment/censer',
  },
  'crossbow-bolt': {
    index: 'crossbow-bolt',
    name: 'Crossbow bolt',
    equipment_category: {
      index: 'adventuring-gear',
      name: 'Adventuring Gear',
      url: '/api/2014/equipment-categories/adventuring-gear',
    },
    gear_category: {
      index: 'ammunition',
      name: 'Ammunition',
      url: '/api/2014/equipment-categories/ammunition',
    },
    quantity: 20,
    cost: {
      quantity: 1,
      unit: 'gp',
    },
    weight: 1.5,
    url: '/api/2014/equipment/crossbow-bolt',
  },
  'sling-bullet': {
    index: 'sling-bullet',
    name: 'Sling bullet',
    equipment_category: {
      index: 'adventuring-gear',
      name: 'Adventuring Gear',
      url: '/api/2014/equipment-categories/adventuring-gear',
    },
    gear_category: {
      index: 'ammunition',
      name: 'Ammunition',
      url: '/api/2014/equipment-categories/ammunition',
    },
    quantity: 20,
    cost: {
      quantity: 4,
      unit: 'cp',
    },
    weight: 1.5,
    url: '/api/2014/equipment/sling-bullet',
  },
  amulet: {
    index: 'amulet',
    name: 'Amulet',
    equipment_category: {
      index: 'adventuring-gear',
      name: 'Adventuring Gear',
      url: '/api/2014/equipment-categories/adventuring-gear',
    },
    gear_category: {
      index: 'holy-symbols',
      name: 'Holy Symbols',
      url: '/api/2014/equipment-categories/holy-symbols',
    },
    cost: {
      quantity: 5,
      unit: 'gp',
    },
    weight: 1,
    desc: [
      'A holy symbol is a representation of a god or pantheon. It might be an amulet depicting a symbol representing a deity, the same symbol carefully engraved or inlaid as an emblem on a shield, or a tiny box holding a fragment of a sacred relic.',
      'Appendix B lists the symbols commonly associated with many gods in the multiverse. A cleric or paladin can use a holy symbol as a spellcasting focus. To use the symbol in this way, the caster must hold it in hand, wear it visibly, or bear it on a shield.',
    ],
    url: '/api/2014/equipment/amulet',
  },
  'antitoxin-vial': {
    index: 'antitoxin-vial',
    name: 'Antitoxin (vial)',
    equipment_category: {
      index: 'adventuring-gear',
      name: 'Adventuring Gear',
      url: '/api/2014/equipment-categories/adventuring-gear',
    },
    gear_category: {
      index: 'standard-gear',
      name: 'Standard Gear',
      url: '/api/2014/equipment-categories/standard-gear',
    },
    cost: {
      quantity: 50,
      unit: 'gp',
    },
    weight: 0,
    desc: [
      'A creature that drinks this vial of liquid gains advantage on saving throws against poison for 1 hour. It confers no benefit to undead or constructs.',
    ],
    url: '/api/2014/equipment/antitoxin-vial',
  },
  crystal: {
    index: 'crystal',
    name: 'Crystal',
    equipment_category: {
      index: 'adventuring-gear',
      name: 'Adventuring Gear',
      url: '/api/2014/equipment-categories/adventuring-gear',
    },
    gear_category: {
      index: 'arcane-foci',
      name: 'Arcane Foci',
      url: '/api/2014/equipment-categories/arcane-foci',
    },
    cost: {
      quantity: 10,
      unit: 'gp',
    },
    weight: 1,
    desc: [
      'An arcane focus is a special item--an orb, a crystal, a rod, a specially constructed staff, a wand-like length of wood, or some similar item--designed to channel the power of arcane spells. A sorcerer, warlock, or wizard can use such an item as a spellcasting focus.',
    ],
    url: '/api/2014/equipment/crystal',
  },
  orb: {
    index: 'orb',
    name: 'Orb',
    equipment_category: {
      index: 'adventuring-gear',
      name: 'Adventuring Gear',
      url: '/api/2014/equipment-categories/adventuring-gear',
    },
    gear_category: {
      index: 'arcane-foci',
      name: 'Arcane Foci',
      url: '/api/2014/equipment-categories/arcane-foci',
    },
    cost: {
      quantity: 20,
      unit: 'gp',
    },
    weight: 3,
    desc: [
      'An arcane focus is a special item--an orb, a crystal, a rod, a specially constructed staff, a wand-like length of wood, or some similar item--designed to channel the power of arcane spells. A sorcerer, warlock, or wizard can use such an item as a spellcasting focus.',
    ],
    url: '/api/2014/equipment/orb',
  },
  rod: {
    index: 'rod',
    name: 'Rod',
    equipment_category: {
      index: 'adventuring-gear',
      name: 'Adventuring Gear',
      url: '/api/2014/equipment-categories/adventuring-gear',
    },
    gear_category: {
      index: 'arcane-foci',
      name: 'Arcane Foci',
      url: '/api/2014/equipment-categories/arcane-foci',
    },
    cost: {
      quantity: 10,
      unit: 'gp',
    },
    weight: 2,
    desc: [
      'An arcane focus is a special item--an orb, a crystal, a rod, a specially constructed staff, a wand-like length of wood, or some similar item--designed to channel the power of arcane spells. A sorcerer, warlock, or wizard can use such an item as a spellcasting focus.',
    ],
    url: '/api/2014/equipment/rod',
  },
  staff: {
    index: 'staff',
    name: 'Staff',
    equipment_category: {
      index: 'adventuring-gear',
      name: 'Adventuring Gear',
      url: '/api/2014/equipment-categories/adventuring-gear',
    },
    gear_category: {
      index: 'arcane-foci',
      name: 'Arcane Foci',
      url: '/api/2014/equipment-categories/arcane-foci',
    },
    cost: {
      quantity: 5,
      unit: 'gp',
    },
    weight: 4,
    desc: [
      'An arcane focus is a special item--an orb, a crystal, a rod, a specially constructed staff, a wand-like length of wood, or some similar item--designed to channel the power of arcane spells. A sorcerer, warlock, or wizard can use such an item as a spellcasting focus.',
    ],
    url: '/api/2014/equipment/staff',
  },
  wand: {
    index: 'wand',
    name: 'Wand',
    equipment_category: {
      index: 'adventuring-gear',
      name: 'Adventuring Gear',
      url: '/api/2014/equipment-categories/adventuring-gear',
    },
    gear_category: {
      index: 'arcane-foci',
      name: 'Arcane Foci',
      url: '/api/2014/equipment-categories/arcane-foci',
    },
    cost: {
      quantity: 10,
      unit: 'gp',
    },
    weight: 1,
    desc: [
      'An arcane focus is a special item--an orb, a crystal, a rod, a specially constructed staff, a wand-like length of wood, or some similar item--designed to channel the power of arcane spells. A sorcerer, warlock, or wizard can use such an item as a spellcasting focus.',
    ],
    url: '/api/2014/equipment/wand',
  },
  backpack: {
    index: 'backpack',
    name: 'Backpack',
    equipment_category: {
      index: 'adventuring-gear',
      name: 'Adventuring Gear',
      url: '/api/2014/equipment-categories/adventuring-gear',
    },
    gear_category: {
      index: 'standard-gear',
      name: 'Standard Gear',
      url: '/api/2014/equipment-categories/standard-gear',
    },
    cost: {
      quantity: 2,
      unit: 'gp',
    },
    weight: 5,
    url: '/api/2014/equipment/backpack',
  },
  'ball-bearings-bag-of-1000': {
    index: 'ball-bearings-bag-of-1000',
    name: 'Ball bearings (bag of 1,000)',
    equipment_category: {
      index: 'adventuring-gear',
      name: 'Adventuring Gear',
      url: '/api/2014/equipment-categories/adventuring-gear',
    },
    gear_category: {
      index: 'standard-gear',
      name: 'Standard Gear',
      url: '/api/2014/equipment-categories/standard-gear',
    },
    cost: {
      quantity: 1,
      unit: 'gp',
    },
    weight: 2,
    desc: [
      'As an action, you can spill these tiny metal balls from their pouch to cover a level, square area that is 10 feet on a side.',
      'A creature moving across the covered area must succeed on a DC 10 Dexterity saving throw or fall prone.',
      "A creature moving through the area at half speed doesn't need to make the save.",
    ],
    image: '/api/images/equipment/ball-bearings-bag-of-1000.png',
    url: '/api/2014/equipment/ball-bearings-bag-of-1000',
  },
  barrel: {
    index: 'barrel',
    name: 'Barrel',
    equipment_category: {
      index: 'adventuring-gear',
      name: 'Adventuring Gear',
      url: '/api/2014/equipment-categories/adventuring-gear',
    },
    gear_category: {
      index: 'standard-gear',
      name: 'Standard Gear',
      url: '/api/2014/equipment-categories/standard-gear',
    },
    cost: {
      quantity: 2,
      unit: 'gp',
    },
    weight: 70,
    url: '/api/2014/equipment/barrel',
  },
  basket: {
    index: 'basket',
    name: 'Basket',
    equipment_category: {
      index: 'adventuring-gear',
      name: 'Adventuring Gear',
      url: '/api/2014/equipment-categories/adventuring-gear',
    },
    gear_category: {
      index: 'standard-gear',
      name: 'Standard Gear',
      url: '/api/2014/equipment-categories/standard-gear',
    },
    cost: {
      quantity: 4,
      unit: 'sp',
    },
    weight: 2,
    url: '/api/2014/equipment/basket',
  },
  bedroll: {
    index: 'bedroll',
    name: 'Bedroll',
    equipment_category: {
      index: 'adventuring-gear',
      name: 'Adventuring Gear',
      url: '/api/2014/equipment-categories/adventuring-gear',
    },
    gear_category: {
      index: 'standard-gear',
      name: 'Standard Gear',
      url: '/api/2014/equipment-categories/standard-gear',
    },
    cost: {
      quantity: 1,
      unit: 'gp',
    },
    weight: 7,
    url: '/api/2014/equipment/bedroll',
  },
  bell: {
    index: 'bell',
    name: 'Bell',
    equipment_category: {
      index: 'adventuring-gear',
      name: 'Adventuring Gear',
      url: '/api/2014/equipment-categories/adventuring-gear',
    },
    gear_category: {
      index: 'standard-gear',
      name: 'Standard Gear',
      url: '/api/2014/equipment-categories/standard-gear',
    },
    cost: {
      quantity: 1,
      unit: 'gp',
    },
    weight: 0,
    url: '/api/2014/equipment/bell',
  },
  blanket: {
    index: 'blanket',
    name: 'Blanket',
    equipment_category: {
      index: 'adventuring-gear',
      name: 'Adventuring Gear',
      url: '/api/2014/equipment-categories/adventuring-gear',
    },
    gear_category: {
      index: 'standard-gear',
      name: 'Standard Gear',
      url: '/api/2014/equipment-categories/standard-gear',
    },
    cost: {
      quantity: 5,
      unit: 'sp',
    },
    weight: 3,
    url: '/api/2014/equipment/blanket',
  },
  'block-and-tackle': {
    index: 'block-and-tackle',
    name: 'Block and tackle',
    equipment_category: {
      index: 'adventuring-gear',
      name: 'Adventuring Gear',
      url: '/api/2014/equipment-categories/adventuring-gear',
    },
    gear_category: {
      index: 'standard-gear',
      name: 'Standard Gear',
      url: '/api/2014/equipment-categories/standard-gear',
    },
    cost: {
      quantity: 1,
      unit: 'gp',
    },
    weight: 5,
    desc: [
      'A set of pulleys with a cable threaded through them and a hook to attach to objects, a block and tackle allows you to hoist up to four times the weight you can normally lift.',
    ],
    url: '/api/2014/equipment/block-and-tackle',
  },
  book: {
    index: 'book',
    name: 'Book',
    equipment_category: {
      index: 'adventuring-gear',
      name: 'Adventuring Gear',
      url: '/api/2014/equipment-categories/adventuring-gear',
    },
    gear_category: {
      index: 'standard-gear',
      name: 'Standard Gear',
      url: '/api/2014/equipment-categories/standard-gear',
    },
    cost: {
      quantity: 25,
      unit: 'gp',
    },
    weight: 5,
    desc: [
      'A book might contain poetry, historical accounts, information pertaining to a particular field of lore, diagrams and notes on gnomish contraptions, or just about anything else that can be represented using text or pictures. A book of spells is a spellbook (described later in this section).',
    ],
    url: '/api/2014/equipment/book',
  },
  'bottle-glass': {
    index: 'bottle-glass',
    name: 'Bottle, glass',
    equipment_category: {
      index: 'adventuring-gear',
      name: 'Adventuring Gear',
      url: '/api/2014/equipment-categories/adventuring-gear',
    },
    gear_category: {
      index: 'standard-gear',
      name: 'Standard Gear',
      url: '/api/2014/equipment-categories/standard-gear',
    },
    cost: {
      quantity: 2,
      unit: 'gp',
    },
    weight: 2,
    url: '/api/2014/equipment/bottle-glass',
  },
  bucket: {
    index: 'bucket',
    name: 'Bucket',
    equipment_category: {
      index: 'adventuring-gear',
      name: 'Adventuring Gear',
      url: '/api/2014/equipment-categories/adventuring-gear',
    },
    gear_category: {
      index: 'standard-gear',
      name: 'Standard Gear',
      url: '/api/2014/equipment-categories/standard-gear',
    },
    cost: {
      quantity: 5,
      unit: 'cp',
    },
    weight: 2,
    url: '/api/2014/equipment/bucket',
  },
  caltrops: {
    index: 'caltrops',
    name: 'Caltrops',
    equipment_category: {
      index: 'adventuring-gear',
      name: 'Adventuring Gear',
      url: '/api/2014/equipment-categories/adventuring-gear',
    },
    gear_category: {
      index: 'standard-gear',
      name: 'Standard Gear',
      url: '/api/2014/equipment-categories/standard-gear',
    },
    cost: {
      quantity: 5,
      unit: 'cp',
    },
    weight: 2,
    desc: [
      'As an action, you can spread a bag of caltrops to cover a square area that is 5 feet on a side.',
      'Any creature that enters the area must succeed on a DC 15 Dexterity saving throw or stop moving this turn and take 1 piercing damage.',
      "Taking this damage reduces the creature's walking speed by 10 feet until the creature regains at least 1 hit point.",
      "A creature moving through the area at half speed doesn't need to make the save.",
    ],
    url: '/api/2014/equipment/caltrops',
  },
  candle: {
    index: 'candle',
    name: 'Candle',
    equipment_category: {
      index: 'adventuring-gear',
      name: 'Adventuring Gear',
      url: '/api/2014/equipment-categories/adventuring-gear',
    },
    gear_category: {
      index: 'standard-gear',
      name: 'Standard Gear',
      url: '/api/2014/equipment-categories/standard-gear',
    },
    cost: {
      quantity: 1,
      unit: 'cp',
    },
    weight: 0,
    desc: [
      'For 1 hour, a candle sheds bright light in a 5-foot radius and dim light for an additional 5 feet.',
    ],
    url: '/api/2014/equipment/candle',
  },
  'case-crossbow-bolt': {
    index: 'case-crossbow-bolt',
    name: 'Case, crossbow bolt',
    equipment_category: {
      index: 'adventuring-gear',
      name: 'Adventuring Gear',
      url: '/api/2014/equipment-categories/adventuring-gear',
    },
    gear_category: {
      index: 'standard-gear',
      name: 'Standard Gear',
      url: '/api/2014/equipment-categories/standard-gear',
    },
    cost: {
      quantity: 1,
      unit: 'gp',
    },
    weight: 1,
    desc: ['This wooden case can hold up to twenty crossbow bolts.'],
    url: '/api/2014/equipment/case-crossbow-bolt',
  },
  'case-map-or-scroll': {
    index: 'case-map-or-scroll',
    name: 'Case, map or scroll',
    equipment_category: {
      index: 'adventuring-gear',
      name: 'Adventuring Gear',
      url: '/api/2014/equipment-categories/adventuring-gear',
    },
    gear_category: {
      index: 'standard-gear',
      name: 'Standard Gear',
      url: '/api/2014/equipment-categories/standard-gear',
    },
    cost: {
      quantity: 1,
      unit: 'gp',
    },
    weight: 1,
    desc: [
      'This cylindrical leather case can hold up to ten rolled-up sheets of paper or five rolled-up sheets of parchment.',
    ],
    url: '/api/2014/equipment/case-map-or-scroll',
  },
  'chain-10-feet': {
    index: 'chain-10-feet',
    name: 'Chain (10 feet)',
    equipment_category: {
      index: 'adventuring-gear',
      name: 'Adventuring Gear',
      url: '/api/2014/equipment-categories/adventuring-gear',
    },
    gear_category: {
      index: 'standard-gear',
      name: 'Standard Gear',
      url: '/api/2014/equipment-categories/standard-gear',
    },
    cost: {
      quantity: 5,
      unit: 'gp',
    },
    weight: 10,
    desc: [
      'A chain has 10 hit points. It can be burst with a successful DC 20 Strength check.',
    ],
    url: '/api/2014/equipment/chain-10-feet',
  },
  'chalk-1-piece': {
    index: 'chalk-1-piece',
    name: 'Chalk (1 piece)',
    equipment_category: {
      index: 'adventuring-gear',
      name: 'Adventuring Gear',
      url: '/api/2014/equipment-categories/adventuring-gear',
    },
    gear_category: {
      index: 'standard-gear',
      name: 'Standard Gear',
      url: '/api/2014/equipment-categories/standard-gear',
    },
    cost: {
      quantity: 1,
      unit: 'cp',
    },
    weight: 0,
    url: '/api/2014/equipment/chalk-1-piece',
  },
  chest: {
    index: 'chest',
    name: 'Chest',
    equipment_category: {
      index: 'adventuring-gear',
      name: 'Adventuring Gear',
      url: '/api/2014/equipment-categories/adventuring-gear',
    },
    gear_category: {
      index: 'standard-gear',
      name: 'Standard Gear',
      url: '/api/2014/equipment-categories/standard-gear',
    },
    cost: {
      quantity: 5,
      unit: 'gp',
    },
    weight: 25,
    url: '/api/2014/equipment/chest',
  },
  'clothes-common': {
    index: 'clothes-common',
    name: 'Clothes, common',
    equipment_category: {
      index: 'adventuring-gear',
      name: 'Adventuring Gear',
      url: '/api/2014/equipment-categories/adventuring-gear',
    },
    gear_category: {
      index: 'standard-gear',
      name: 'Standard Gear',
      url: '/api/2014/equipment-categories/standard-gear',
    },
    cost: {
      quantity: 5,
      unit: 'sp',
    },
    weight: 3,
    url: '/api/2014/equipment/clothes-common',
  },
  'clothes-costume': {
    index: 'clothes-costume',
    name: 'Clothes, costume',
    equipment_category: {
      index: 'adventuring-gear',
      name: 'Adventuring Gear',
      url: '/api/2014/equipment-categories/adventuring-gear',
    },
    gear_category: {
      index: 'standard-gear',
      name: 'Standard Gear',
      url: '/api/2014/equipment-categories/standard-gear',
    },
    cost: {
      quantity: 5,
      unit: 'gp',
    },
    weight: 4,
    url: '/api/2014/equipment/clothes-costume',
  },
  'clothes-fine': {
    index: 'clothes-fine',
    name: 'Clothes, fine',
    equipment_category: {
      index: 'adventuring-gear',
      name: 'Adventuring Gear',
      url: '/api/2014/equipment-categories/adventuring-gear',
    },
    gear_category: {
      index: 'standard-gear',
      name: 'Standard Gear',
      url: '/api/2014/equipment-categories/standard-gear',
    },
    cost: {
      quantity: 15,
      unit: 'gp',
    },
    weight: 6,
    url: '/api/2014/equipment/clothes-fine',
  },
  'clothes-travelers': {
    index: 'clothes-travelers',
    name: "Clothes, traveler's",
    equipment_category: {
      index: 'adventuring-gear',
      name: 'Adventuring Gear',
      url: '/api/2014/equipment-categories/adventuring-gear',
    },
    gear_category: {
      index: 'standard-gear',
      name: 'Standard Gear',
      url: '/api/2014/equipment-categories/standard-gear',
    },
    cost: {
      quantity: 2,
      unit: 'gp',
    },
    weight: 4,
    url: '/api/2014/equipment/clothes-travelers',
  },
  'component-pouch': {
    index: 'component-pouch',
    name: 'Component pouch',
    equipment_category: {
      index: 'adventuring-gear',
      name: 'Adventuring Gear',
      url: '/api/2014/equipment-categories/adventuring-gear',
    },
    gear_category: {
      index: 'standard-gear',
      name: 'Standard Gear',
      url: '/api/2014/equipment-categories/standard-gear',
    },
    cost: {
      quantity: 25,
      unit: 'gp',
    },
    weight: 2,
    desc: [
      "A component pouch is a small, watertight leather belt pouch that has compartments to hold all the material components and other special items you need to cast your spells, except for those components that have a specific cost (as indicated in a spell's description).",
    ],
    url: '/api/2014/equipment/component-pouch',
  },
  crowbar: {
    index: 'crowbar',
    name: 'Crowbar',
    equipment_category: {
      index: 'adventuring-gear',
      name: 'Adventuring Gear',
      url: '/api/2014/equipment-categories/adventuring-gear',
    },
    gear_category: {
      index: 'standard-gear',
      name: 'Standard Gear',
      url: '/api/2014/equipment-categories/standard-gear',
    },
    cost: {
      quantity: 2,
      unit: 'gp',
    },
    weight: 5,
    desc: [
      "Using a crowbar grants advantage to Strength checks where the crowbar's leverage can be applied.",
    ],
    url: '/api/2014/equipment/crowbar',
  },
  'sprig-of-mistletoe': {
    index: 'sprig-of-mistletoe',
    name: 'Sprig of mistletoe',
    equipment_category: {
      index: 'adventuring-gear',
      name: 'Adventuring Gear',
      url: '/api/2014/equipment-categories/adventuring-gear',
    },
    gear_category: {
      index: 'druidic-foci',
      name: 'Druidic Foci',
      url: '/api/2014/equipment-categories/druidic-foci',
    },
    cost: {
      quantity: 1,
      unit: 'gp',
    },
    weight: 0,
    desc: [
      'A druidic focus might be a sprig of mistletoe or holly, a wand or scepter made of yew or another special wood, a staff drawn whole out of a living tree, or a totem object incorporating feathers, fur, bones, and teeth from sacred animals. A druid can use such an object as a spellcasting focus.',
    ],
    url: '/api/2014/equipment/sprig-of-mistletoe',
  },
  totem: {
    index: 'totem',
    name: 'Totem',
    equipment_category: {
      index: 'adventuring-gear',
      name: 'Adventuring Gear',
      url: '/api/2014/equipment-categories/adventuring-gear',
    },
    gear_category: {
      index: 'druidic-foci',
      name: 'Druidic Foci',
      url: '/api/2014/equipment-categories/druidic-foci',
    },
    cost: {
      quantity: 1,
      unit: 'gp',
    },
    weight: 0,
    desc: [
      'A druidic focus might be a sprig of mistletoe or holly, a wand or scepter made of yew or another special wood, a staff drawn whole out of a living tree, or a totem object incorporating feathers, fur, bones, and teeth from sacred animals. A druid can use such an object as a spellcasting focus.',
    ],
    url: '/api/2014/equipment/totem',
  },
  'wooden-staff': {
    index: 'wooden-staff',
    name: 'Wooden staff',
    equipment_category: {
      index: 'adventuring-gear',
      name: 'Adventuring Gear',
      url: '/api/2014/equipment-categories/adventuring-gear',
    },
    gear_category: {
      index: 'druidic-foci',
      name: 'Druidic Foci',
      url: '/api/2014/equipment-categories/druidic-foci',
    },
    cost: {
      quantity: 5,
      unit: 'gp',
    },
    weight: 4,
    desc: [
      'A druidic focus might be a sprig of mistletoe or holly, a wand or scepter made of yew or another special wood, a staff drawn whole out of a living tree, or a totem object incorporating feathers, fur, bones, and teeth from sacred animals. A druid can use such an object as a spellcasting focus.',
    ],
    url: '/api/2014/equipment/wooden-staff',
  },
  'yew-wand': {
    index: 'yew-wand',
    name: 'Yew wand',
    equipment_category: {
      index: 'adventuring-gear',
      name: 'Adventuring Gear',
      url: '/api/2014/equipment-categories/adventuring-gear',
    },
    gear_category: {
      index: 'druidic-foci',
      name: 'Druidic Foci',
      url: '/api/2014/equipment-categories/druidic-foci',
    },
    cost: {
      quantity: 10,
      unit: 'gp',
    },
    weight: 1,
    desc: [
      'A druidic focus might be a sprig of mistletoe or holly, a wand or scepter made of yew or another special wood, a staff drawn whole out of a living tree, or a totem object incorporating feathers, fur, bones, and teeth from sacred animals. A druid can use such an object as a spellcasting focus.',
    ],
    url: '/api/2014/equipment/yew-wand',
  },
  emblem: {
    index: 'emblem',
    name: 'Emblem',
    equipment_category: {
      index: 'adventuring-gear',
      name: 'Adventuring Gear',
      url: '/api/2014/equipment-categories/adventuring-gear',
    },
    gear_category: {
      index: 'holy-symbols',
      name: 'Holy Symbols',
      url: '/api/2014/equipment-categories/holy-symbols',
    },
    cost: {
      quantity: 5,
      unit: 'gp',
    },
    weight: 0,
    desc: [
      'A holy symbol is a representation of a god or pantheon. It might be an amulet depicting a symbol representing a deity, the same symbol carefully engraved or inlaid as an emblem on a shield, or a tiny box holding a fragment of a sacred relic.',
      'Appendix B lists the symbols commonly associated with many gods in the multiverse. A cleric or paladin can use a holy symbol as a spellcasting focus. To use the symbol in this way, the caster must hold it in hand, wear it visibly, or bear it on a shield.',
    ],
    url: '/api/2014/equipment/emblem',
  },
  'fishing-tackle': {
    index: 'fishing-tackle',
    name: 'Fishing tackle',
    equipment_category: {
      index: 'adventuring-gear',
      name: 'Adventuring Gear',
      url: '/api/2014/equipment-categories/adventuring-gear',
    },
    gear_category: {
      index: 'standard-gear',
      name: 'Standard Gear',
      url: '/api/2014/equipment-categories/standard-gear',
    },
    cost: {
      quantity: 1,
      unit: 'gp',
    },
    weight: 4,
    desc: [
      'This kit includes a wooden rod, silken line, corkwood bobbers, steel hooks, lead sinkers, velvet lures, and narrow netting.',
    ],
    url: '/api/2014/equipment/fishing-tackle',
  },
  'flask-or-tankard': {
    index: 'flask-or-tankard',
    name: 'Flask or tankard',
    equipment_category: {
      index: 'adventuring-gear',
      name: 'Adventuring Gear',
      url: '/api/2014/equipment-categories/adventuring-gear',
    },
    gear_category: {
      index: 'standard-gear',
      name: 'Standard Gear',
      url: '/api/2014/equipment-categories/standard-gear',
    },
    cost: {
      quantity: 2,
      unit: 'cp',
    },
    weight: 1,
    url: '/api/2014/equipment/flask-or-tankard',
  },
  'grappling-hook': {
    index: 'grappling-hook',
    name: 'Grappling hook',
    equipment_category: {
      index: 'adventuring-gear',
      name: 'Adventuring Gear',
      url: '/api/2014/equipment-categories/adventuring-gear',
    },
    gear_category: {
      index: 'standard-gear',
      name: 'Standard Gear',
      url: '/api/2014/equipment-categories/standard-gear',
    },
    cost: {
      quantity: 2,
      unit: 'gp',
    },
    weight: 4,
    url: '/api/2014/equipment/grappling-hook',
  },
  hammer: {
    index: 'hammer',
    name: 'Hammer',
    equipment_category: {
      index: 'adventuring-gear',
      name: 'Adventuring Gear',
      url: '/api/2014/equipment-categories/adventuring-gear',
    },
    gear_category: {
      index: 'standard-gear',
      name: 'Standard Gear',
      url: '/api/2014/equipment-categories/standard-gear',
    },
    cost: {
      quantity: 1,
      unit: 'gp',
    },
    weight: 3,
    url: '/api/2014/equipment/hammer',
  },
  'hammer-sledge': {
    index: 'hammer-sledge',
    name: 'Hammer, sledge',
    equipment_category: {
      index: 'adventuring-gear',
      name: 'Adventuring Gear',
      url: '/api/2014/equipment-categories/adventuring-gear',
    },
    gear_category: {
      index: 'standard-gear',
      name: 'Standard Gear',
      url: '/api/2014/equipment-categories/standard-gear',
    },
    cost: {
      quantity: 2,
      unit: 'gp',
    },
    weight: 10,
    url: '/api/2014/equipment/hammer-sledge',
  },
  'holy-water-flask': {
    index: 'holy-water-flask',
    name: 'Holy water (flask)',
    equipment_category: {
      index: 'adventuring-gear',
      name: 'Adventuring Gear',
      url: '/api/2014/equipment-categories/adventuring-gear',
    },
    gear_category: {
      index: 'standard-gear',
      name: 'Standard Gear',
      url: '/api/2014/equipment-categories/standard-gear',
    },
    cost: {
      quantity: 25,
      unit: 'gp',
    },
    weight: 1,
    desc: [
      'As an action, you can splash the contents of this flask onto a creature within 5 feet of you or throw it up to 20 feet, shattering it on impact. In either case, make a ranged attack against a target creature, treating the holy water as an improvised weapon.',
      'If the target is a fiend or undead, it takes 2d6 radiant damage.',
      'A cleric or paladin may create holy water by performing a special ritual.',
      'The ritual takes 1 hour to perform, uses 25 gp worth of powdered silver, and requires the caster to expend a 1st-level spell slot.',
    ],
    url: '/api/2014/equipment/holy-water-flask',
  },
  hourglass: {
    index: 'hourglass',
    name: 'Hourglass',
    equipment_category: {
      index: 'adventuring-gear',
      name: 'Adventuring Gear',
      url: '/api/2014/equipment-categories/adventuring-gear',
    },
    gear_category: {
      index: 'standard-gear',
      name: 'Standard Gear',
      url: '/api/2014/equipment-categories/standard-gear',
    },
    cost: {
      quantity: 25,
      unit: 'gp',
    },
    weight: 1,
    url: '/api/2014/equipment/hourglass',
  },
  'hunting-trap': {
    index: 'hunting-trap',
    name: 'Hunting trap',
    equipment_category: {
      index: 'adventuring-gear',
      name: 'Adventuring Gear',
      url: '/api/2014/equipment-categories/adventuring-gear',
    },
    gear_category: {
      index: 'standard-gear',
      name: 'Standard Gear',
      url: '/api/2014/equipment-categories/standard-gear',
    },
    cost: {
      quantity: 5,
      unit: 'gp',
    },
    desc: [
      'When you use your action to set it, this trap forms a saw-toothed steel ring that snaps shut when a creature steps on a pressure plate in the center. The trap is affixed by a heavy chain to an immobile object, such as a tree or a spike driven into the ground.',
      'A creature that steps on the plate must succeed on a DC 13 Dexterity saving throw or take 1d4 piercing damage and stop moving. Thereafter, until the creature breaks free of the trap, its movement is limited by the length of the chain (typically 3 feet long).',
      'A creature can use its action to make a DC 13 Strength check, freeing itself or another creature within its reach on a success. Each failed check deals 1 piercing damage to the trapped creature.',
    ],
    weight: 25,
    url: '/api/2014/equipment/hunting-trap',
  },
  'ink-1-ounce-bottle': {
    index: 'ink-1-ounce-bottle',
    name: 'Ink (1 ounce bottle)',
    equipment_category: {
      index: 'adventuring-gear',
      name: 'Adventuring Gear',
      url: '/api/2014/equipment-categories/adventuring-gear',
    },
    gear_category: {
      index: 'standard-gear',
      name: 'Standard Gear',
      url: '/api/2014/equipment-categories/standard-gear',
    },
    cost: {
      quantity: 10,
      unit: 'gp',
    },
    weight: 0,
    url: '/api/2014/equipment/ink-1-ounce-bottle',
  },
  'ink-pen': {
    index: 'ink-pen',
    name: 'Ink pen',
    equipment_category: {
      index: 'adventuring-gear',
      name: 'Adventuring Gear',
      url: '/api/2014/equipment-categories/adventuring-gear',
    },
    gear_category: {
      index: 'standard-gear',
      name: 'Standard Gear',
      url: '/api/2014/equipment-categories/standard-gear',
    },
    cost: {
      quantity: 2,
      unit: 'cp',
    },
    weight: 0,
    url: '/api/2014/equipment/ink-pen',
  },
  'jug-or-pitcher': {
    index: 'jug-or-pitcher',
    name: 'Jug or pitcher',
    equipment_category: {
      index: 'adventuring-gear',
      name: 'Adventuring Gear',
      url: '/api/2014/equipment-categories/adventuring-gear',
    },
    gear_category: {
      index: 'standard-gear',
      name: 'Standard Gear',
      url: '/api/2014/equipment-categories/standard-gear',
    },
    cost: {
      quantity: 2,
      unit: 'cp',
    },
    weight: 4,
    url: '/api/2014/equipment/jug-or-pitcher',
  },
  'climbers-kit': {
    index: 'climbers-kit',
    name: "Climber's Kit",
    equipment_category: {
      index: 'adventuring-gear',
      name: 'Adventuring Gear',
      url: '/api/2014/equipment-categories/adventuring-gear',
    },
    gear_category: {
      index: 'kits',
      name: 'Kits',
      url: '/api/2014/equipment-categories/kits',
    },
    cost: {
      quantity: 25,
      unit: 'gp',
    },
    weight: 12,
    desc: [
      "A climber's kit includes special pitons, boot tips, gloves, and a harness. You can use the climber's kit as an action to anchor yourself; when you do, you can't fall more than 25 feet from the point where you anchored yourself, and you can't climb more than 25 feet away from that point without undoing the anchor.",
    ],
    url: '/api/2014/equipment/climbers-kit',
  },
  'disguise-kit': {
    index: 'disguise-kit',
    name: 'Disguise Kit',
    equipment_category: {
      index: 'adventuring-gear',
      name: 'Adventuring Gear',
      url: '/api/2014/equipment-categories/adventuring-gear',
    },
    gear_category: {
      index: 'kits',
      name: 'Kits',
      url: '/api/2014/equipment-categories/kits',
    },
    cost: {
      quantity: 25,
      unit: 'gp',
    },
    weight: 3,
    desc: [
      'This pouch of cosmetics, hair dye, and small props lets you create disguises that change your physical appearance. Proficiency with this kit lets you add your proficiency bonus to any ability checks you make to create a visual disguise.',
    ],
    url: '/api/2014/equipment/disguise-kit',
  },
  'forgery-kit': {
    index: 'forgery-kit',
    name: 'Forgery Kit',
    equipment_category: {
      index: 'adventuring-gear',
      name: 'Adventuring Gear',
      url: '/api/2014/equipment-categories/adventuring-gear',
    },
    gear_category: {
      index: 'kits',
      name: 'Kits',
      url: '/api/2014/equipment-categories/kits',
    },
    cost: {
      quantity: 15,
      unit: 'gp',
    },
    weight: 5,
    desc: [
      'This small box contains a variety of papers and parchments, pens and inks, seals and sealing wax, gold and silver leaf, and other supplies necessary to create convincing forgeries of physical documents. Proficiency with this kit lets you add your proficiency bonus to any ability checks you make to create a physical forgery of a document.',
    ],
    url: '/api/2014/equipment/forgery-kit',
  },
  'herbalism-kit': {
    index: 'herbalism-kit',
    name: 'Herbalism Kit',
    equipment_category: {
      index: 'adventuring-gear',
      name: 'Adventuring Gear',
      url: '/api/2014/equipment-categories/adventuring-gear',
    },
    gear_category: {
      index: 'kits',
      name: 'Kits',
      url: '/api/2014/equipment-categories/kits',
    },
    cost: {
      quantity: 5,
      unit: 'gp',
    },
    weight: 3,
    desc: [
      'This kit contains a variety of instruments such as clippers, mortar and pestle, and pouches and vials used by herbalists to create remedies and potions. Proficiency with this kit lets you add your proficiency bonus to any ability checks you make to identify or apply herbs. Also, proficiency with this kit is required to create antitoxin and potions of healing.',
    ],
    url: '/api/2014/equipment/herbalism-kit',
  },
  'healers-kit': {
    index: 'healers-kit',
    name: "Healer's Kit",
    equipment_category: {
      index: 'adventuring-gear',
      name: 'Adventuring Gear',
      url: '/api/2014/equipment-categories/adventuring-gear',
    },
    gear_category: {
      index: 'kits',
      name: 'Kits',
      url: '/api/2014/equipment-categories/kits',
    },
    cost: {
      quantity: 5,
      unit: 'gp',
    },
    weight: 3,
    desc: [
      'This kit is a leather pouch containing bandages, salves, and splints. The kit has ten uses. As an action, you can expend one use of the kit to stabilize a creature that has 0 hit points, without needing to make a Wisdom (Medicine) check.',
    ],
    url: '/api/2014/equipment/healers-kit',
  },
  'mess-kit': {
    index: 'mess-kit',
    name: 'Mess Kit',
    equipment_category: {
      index: 'adventuring-gear',
      name: 'Adventuring Gear',
      url: '/api/2014/equipment-categories/adventuring-gear',
    },
    gear_category: {
      index: 'kits',
      name: 'Kits',
      url: '/api/2014/equipment-categories/kits',
    },
    cost: {
      quantity: 2,
      unit: 'sp',
    },
    weight: 1,
    desc: [
      'This tin box contains a cup and simple cutlery. The box clamps together, and one side can be used as a cooking pan and the other as a plate or shallow bowl.',
    ],
    url: '/api/2014/equipment/mess-kit',
  },
  'poisoners-kit': {
    index: 'poisoners-kit',
    name: "Poisoner's Kit",
    equipment_category: {
      index: 'adventuring-gear',
      name: 'Adventuring Gear',
      url: '/api/2014/equipment-categories/adventuring-gear',
    },
    gear_category: {
      index: 'kits',
      name: 'Kits',
      url: '/api/2014/equipment-categories/kits',
    },
    cost: {
      quantity: 50,
      unit: 'gp',
    },
    weight: 2,
    desc: [
      "A poisoner's kit includes the vials, chemicals, and other equipment necessary for the creation of poisons. Proficiency with this kit lets you add your proficiency bonus to any ability checks you make to craft or use poisons.",
    ],
    url: '/api/2014/equipment/poisoners-kit',
  },
  'ladder-10-foot': {
    index: 'ladder-10-foot',
    name: 'Ladder (10-foot)',
    equipment_category: {
      index: 'adventuring-gear',
      name: 'Adventuring Gear',
      url: '/api/2014/equipment-categories/adventuring-gear',
    },
    gear_category: {
      index: 'standard-gear',
      name: 'Standard Gear',
      url: '/api/2014/equipment-categories/standard-gear',
    },
    cost: {
      quantity: 1,
      unit: 'sp',
    },
    weight: 25,
    url: '/api/2014/equipment/ladder-10-foot',
  },
  lamp: {
    index: 'lamp',
    name: 'Lamp',
    equipment_category: {
      index: 'adventuring-gear',
      name: 'Adventuring Gear',
      url: '/api/2014/equipment-categories/adventuring-gear',
    },
    gear_category: {
      index: 'standard-gear',
      name: 'Standard Gear',
      url: '/api/2014/equipment-categories/standard-gear',
    },
    cost: {
      quantity: 5,
      unit: 'sp',
    },
    weight: 1,
    desc: [
      'A lamp casts bright light in a 15-foot radius and dim light for an additional 30 feet. Once lit, it burns for 6 hours on a flask (1 pint) of oil.',
    ],
    url: '/api/2014/equipment/lamp',
  },
  'lantern-bullseye': {
    index: 'lantern-bullseye',
    name: 'Lantern, bullseye',
    equipment_category: {
      index: 'adventuring-gear',
      name: 'Adventuring Gear',
      url: '/api/2014/equipment-categories/adventuring-gear',
    },
    gear_category: {
      index: 'standard-gear',
      name: 'Standard Gear',
      url: '/api/2014/equipment-categories/standard-gear',
    },
    cost: {
      quantity: 10,
      unit: 'gp',
    },
    weight: 2,
    desc: [
      'A bullseye lantern casts bright light in a 60-foot cone and dim light for an additional 60 feet. Once lit, it burns for 6 hours on a flask (1 pint) of oil.',
    ],
    url: '/api/2014/equipment/lantern-bullseye',
  },
  'lantern-hooded': {
    index: 'lantern-hooded',
    name: 'Lantern, hooded',
    equipment_category: {
      index: 'adventuring-gear',
      name: 'Adventuring Gear',
      url: '/api/2014/equipment-categories/adventuring-gear',
    },
    gear_category: {
      index: 'standard-gear',
      name: 'Standard Gear',
      url: '/api/2014/equipment-categories/standard-gear',
    },
    cost: {
      quantity: 5,
      unit: 'gp',
    },
    weight: 2,
    desc: [
      'A hooded lantern casts bright light in a 30-foot radius and dim light for an additional 30 feet. Once lit, it burns for 6 hours on a flask (1 pint) of oil. As an action, you can lower the hood, reducing the light to dim light in a 5-foot radius.',
    ],
    url: '/api/2014/equipment/lantern-hooded',
  },
  'little-bag-of-sand': {
    index: 'little-bag-of-sand',
    name: 'Little bag of sand',
    equipment_category: {
      index: 'adventuring-gear',
      name: 'Adventuring Gear',
      url: '/api/2014/equipment-categories/adventuring-gear',
    },
    gear_category: {
      index: 'standard-gear',
      name: 'Standard Gear',
      url: '/api/2014/equipment-categories/standard-gear',
    },
    cost: {
      quantity: 0,
      unit: 'cp',
    },
    weight: 0,
    desc: ["A small bag of sand, typically found in a scholar's pack."],
    url: '/api/2014/equipment/little-bag-of-sand',
  },
  lock: {
    index: 'lock',
    name: 'Lock',
    equipment_category: {
      index: 'adventuring-gear',
      name: 'Adventuring Gear',
      url: '/api/2014/equipment-categories/adventuring-gear',
    },
    gear_category: {
      index: 'standard-gear',
      name: 'Standard Gear',
      url: '/api/2014/equipment-categories/standard-gear',
    },
    cost: {
      quantity: 10,
      unit: 'gp',
    },
    weight: 1,
    desc: [
      "A key is provided with the lock. Without the key, a creature proficient with thieves' tools can pick this lock with a successful DC 15 Dexterity check. Your GM may decide that better locks are available for higher prices.",
    ],
    url: '/api/2014/equipment/lock',
  },
  'magnifying-glass': {
    index: 'magnifying-glass',
    name: 'Magnifying glass',
    equipment_category: {
      index: 'adventuring-gear',
      name: 'Adventuring Gear',
      url: '/api/2014/equipment-categories/adventuring-gear',
    },
    gear_category: {
      index: 'standard-gear',
      name: 'Standard Gear',
      url: '/api/2014/equipment-categories/standard-gear',
    },
    cost: {
      quantity: 100,
      unit: 'gp',
    },
    weight: 0,
    desc: [
      'This lens allows a closer look at small objects. It is also useful as a substitute for flint and steel when starting fires. Lighting a fire with a magnifying glass requires light as bright as sunlight to focus, tinder to ignite, and about 5 minutes for the fire to ignite.',
      'A magnifying glass grants advantage on any ability check made to appraise or inspect an item that is small or highly detailed.',
    ],
    url: '/api/2014/equipment/magnifying-glass',
  },
  manacles: {
    index: 'manacles',
    name: 'Manacles',
    equipment_category: {
      index: 'adventuring-gear',
      name: 'Adventuring Gear',
      url: '/api/2014/equipment-categories/adventuring-gear',
    },
    gear_category: {
      index: 'standard-gear',
      name: 'Standard Gear',
      url: '/api/2014/equipment-categories/standard-gear',
    },
    cost: {
      quantity: 2,
      unit: 'gp',
    },
    weight: 6,
    desc: [
      'These metal restraints can bind a Small or Medium creature. Escaping the manacles requires a successful DC 20 Dexterity check. Breaking them requires a successful DC 20 Strength check.',
      "Each set of manacles comes with one key. Without the key, a creature proficient with thieves' tools can pick the manacles' lock with a successful DC 15 Dexterity check. Manacles have 15 hit points.",
    ],
    url: '/api/2014/equipment/manacles',
  },
  'mirror-steel': {
    index: 'mirror-steel',
    name: 'Mirror, steel',
    equipment_category: {
      index: 'adventuring-gear',
      name: 'Adventuring Gear',
      url: '/api/2014/equipment-categories/adventuring-gear',
    },
    gear_category: {
      index: 'standard-gear',
      name: 'Standard Gear',
      url: '/api/2014/equipment-categories/standard-gear',
    },
    cost: {
      quantity: 5,
      unit: 'gp',
    },
    weight: 0.5,
    url: '/api/2014/equipment/mirror-steel',
  },
  'oil-flask': {
    index: 'oil-flask',
    name: 'Oil (flask)',
    equipment_category: {
      index: 'adventuring-gear',
      name: 'Adventuring Gear',
      url: '/api/2014/equipment-categories/adventuring-gear',
    },
    gear_category: {
      index: 'standard-gear',
      name: 'Standard Gear',
      url: '/api/2014/equipment-categories/standard-gear',
    },
    cost: {
      quantity: 1,
      unit: 'sp',
    },
    weight: 1,
    desc: [
      'Oil usually comes in a clay flask that holds 1 pint.',
      'As an action, you can splash the oil in this flask onto a creature within 5 feet of you or throw it up to 20 feet, shattering it on impact. Make a ranged attack against a target creature or object, treating the oil as an improvised weapon.',
      'On a hit, the target is covered in oil. If the target takes any fire damage before the oil dries (after 1 minute), the target takes an additional 5 fire damage from the burning oil.',
      'You can also pour a flask of oil on the ground to cover a 5-foot-square area, provided that the surface is level.',
      'If lit, the oil burns for 2 rounds and deals 5 fire damage to any creature that enters the area or ends its turn in the area. A creature can take this damage only once per turn.',
    ],
    url: '/api/2014/equipment/oil-flask',
  },
  'paper-one-sheet': {
    index: 'paper-one-sheet',
    name: 'Paper (one sheet)',
    equipment_category: {
      index: 'adventuring-gear',
      name: 'Adventuring Gear',
      url: '/api/2014/equipment-categories/adventuring-gear',
    },
    gear_category: {
      index: 'standard-gear',
      name: 'Standard Gear',
      url: '/api/2014/equipment-categories/standard-gear',
    },
    cost: {
      quantity: 2,
      unit: 'sp',
    },
    weight: 0,
    url: '/api/2014/equipment/paper-one-sheet',
  },
  'parchment-one-sheet': {
    index: 'parchment-one-sheet',
    name: 'Parchment (one sheet)',
    equipment_category: {
      index: 'adventuring-gear',
      name: 'Adventuring Gear',
      url: '/api/2014/equipment-categories/adventuring-gear',
    },
    gear_category: {
      index: 'standard-gear',
      name: 'Standard Gear',
      url: '/api/2014/equipment-categories/standard-gear',
    },
    cost: {
      quantity: 1,
      unit: 'sp',
    },
    weight: 0,
    url: '/api/2014/equipment/parchment-one-sheet',
  },
  'perfume-vial': {
    index: 'perfume-vial',
    name: 'Perfume (vial)',
    equipment_category: {
      index: 'adventuring-gear',
      name: 'Adventuring Gear',
      url: '/api/2014/equipment-categories/adventuring-gear',
    },
    gear_category: {
      index: 'standard-gear',
      name: 'Standard Gear',
      url: '/api/2014/equipment-categories/standard-gear',
    },
    cost: {
      quantity: 5,
      unit: 'gp',
    },
    weight: 0,
    url: '/api/2014/equipment/perfume-vial',
  },
  'pick-miners': {
    index: 'pick-miners',
    name: "Pick, miner's",
    equipment_category: {
      index: 'adventuring-gear',
      name: 'Adventuring Gear',
      url: '/api/2014/equipment-categories/adventuring-gear',
    },
    gear_category: {
      index: 'standard-gear',
      name: 'Standard Gear',
      url: '/api/2014/equipment-categories/standard-gear',
    },
    cost: {
      quantity: 2,
      unit: 'gp',
    },
    weight: 10,
    url: '/api/2014/equipment/pick-miners',
  },
  piton: {
    index: 'piton',
    name: 'Piton',
    equipment_category: {
      index: 'adventuring-gear',
      name: 'Adventuring Gear',
      url: '/api/2014/equipment-categories/adventuring-gear',
    },
    gear_category: {
      index: 'standard-gear',
      name: 'Standard Gear',
      url: '/api/2014/equipment-categories/standard-gear',
    },
    cost: {
      quantity: 5,
      unit: 'cp',
    },
    weight: 0.25,
    url: '/api/2014/equipment/piton',
  },
  'poison-basic-vial': {
    index: 'poison-basic-vial',
    name: 'Poison, basic (vial)',
    equipment_category: {
      index: 'adventuring-gear',
      name: 'Adventuring Gear',
      url: '/api/2014/equipment-categories/adventuring-gear',
    },
    gear_category: {
      index: 'standard-gear',
      name: 'Standard Gear',
      url: '/api/2014/equipment-categories/standard-gear',
    },
    cost: {
      quantity: 100,
      unit: 'gp',
    },
    weight: 0,
    desc: [
      'You can use the poison in this vial to coat one slashing or piercing weapon or up to three pieces of ammunition. Applying the poison takes an action. A creature hit by the poisoned weapon or ammunition must make a DC 10 Constitution saving throw or take 1d4 poison damage. Once applied, the poison retains potency for 1 minute before drying.',
    ],
    url: '/api/2014/equipment/poison-basic-vial',
  },
  'pole-10-foot': {
    index: 'pole-10-foot',
    name: 'Pole (10-foot)',
    equipment_category: {
      index: 'adventuring-gear',
      name: 'Adventuring Gear',
      url: '/api/2014/equipment-categories/adventuring-gear',
    },
    gear_category: {
      index: 'standard-gear',
      name: 'Standard Gear',
      url: '/api/2014/equipment-categories/standard-gear',
    },
    cost: {
      quantity: 5,
      unit: 'cp',
    },
    weight: 7,
    url: '/api/2014/equipment/pole-10-foot',
  },
  'pot-iron': {
    index: 'pot-iron',
    name: 'Pot, iron',
    equipment_category: {
      index: 'adventuring-gear',
      name: 'Adventuring Gear',
      url: '/api/2014/equipment-categories/adventuring-gear',
    },
    gear_category: {
      index: 'standard-gear',
      name: 'Standard Gear',
      url: '/api/2014/equipment-categories/standard-gear',
    },
    cost: {
      quantity: 2,
      unit: 'gp',
    },
    weight: 10,
    url: '/api/2014/equipment/pot-iron',
  },
  pouch: {
    index: 'pouch',
    name: 'Pouch',
    equipment_category: {
      index: 'adventuring-gear',
      name: 'Adventuring Gear',
      url: '/api/2014/equipment-categories/adventuring-gear',
    },
    gear_category: {
      index: 'standard-gear',
      name: 'Standard Gear',
      url: '/api/2014/equipment-categories/standard-gear',
    },
    cost: {
      quantity: 5,
      unit: 'sp',
    },
    weight: 1,
    desc: [
      'A cloth or leather pouch can hold up to 20 sling bullets or 50 blowgun needles, among other things. A compartmentalized pouch for holding spell components is called a component pouch (described earlier in this section).',
    ],
    url: '/api/2014/equipment/pouch',
  },
  quiver: {
    index: 'quiver',
    name: 'Quiver',
    equipment_category: {
      index: 'adventuring-gear',
      name: 'Adventuring Gear',
      url: '/api/2014/equipment-categories/adventuring-gear',
    },
    gear_category: {
      index: 'standard-gear',
      name: 'Standard Gear',
      url: '/api/2014/equipment-categories/standard-gear',
    },
    cost: {
      quantity: 1,
      unit: 'gp',
    },
    weight: 1,
    desc: ['A quiver can hold up to 20 arrows.'],
    url: '/api/2014/equipment/quiver',
  },
  'ram-portable': {
    index: 'ram-portable',
    name: 'Ram, portable',
    equipment_category: {
      index: 'adventuring-gear',
      name: 'Adventuring Gear',
      url: '/api/2014/equipment-categories/adventuring-gear',
    },
    gear_category: {
      index: 'standard-gear',
      name: 'Standard Gear',
      url: '/api/2014/equipment-categories/standard-gear',
    },
    cost: {
      quantity: 4,
      unit: 'gp',
    },
    weight: 35,
    desc: [
      'You can use a portable ram to break down doors. When doing so, you gain a +4 bonus on the Strength check. One other character can help you use the ram, giving you advantage on this check.',
    ],
    url: '/api/2014/equipment/ram-portable',
  },
  'rations-1-day': {
    index: 'rations-1-day',
    name: 'Rations (1 day)',
    equipment_category: {
      index: 'adventuring-gear',
      name: 'Adventuring Gear',
      url: '/api/2014/equipment-categories/adventuring-gear',
    },
    gear_category: {
      index: 'standard-gear',
      name: 'Standard Gear',
      url: '/api/2014/equipment-categories/standard-gear',
    },
    cost: {
      quantity: 5,
      unit: 'sp',
    },
    weight: 2,
    desc: [
      'Rations consist of dry foods suitable for extended travel, including jerky, dried fruit, hardtack, and nuts.',
    ],
    url: '/api/2014/equipment/rations-1-day',
  },
  reliquary: {
    index: 'reliquary',
    name: 'Reliquary',
    equipment_category: {
      index: 'adventuring-gear',
      name: 'Adventuring Gear',
      url: '/api/2014/equipment-categories/adventuring-gear',
    },
    gear_category: {
      index: 'holy-symbols',
      name: 'Holy Symbols',
      url: '/api/2014/equipment-categories/holy-symbols',
    },
    cost: {
      quantity: 5,
      unit: 'gp',
    },
    weight: 2,
    desc: [
      'A holy symbol is a representation of a god or pantheon. It might be an amulet depicting a symbol representing a deity, the same symbol carefully engraved or inlaid as an emblem on a shield, or a tiny box holding a fragment of a sacred relic.',
      'Appendix B lists the symbols commonly associated with many gods in the multiverse. A cleric or paladin can use a holy symbol as a spellcasting focus. To use the symbol in this way, the caster must hold it in hand, wear it visibly, or bear it on a shield.',
    ],
    url: '/api/2014/equipment/reliquary',
  },
  robes: {
    index: 'robes',
    name: 'Robes',
    equipment_category: {
      index: 'adventuring-gear',
      name: 'Adventuring Gear',
      url: '/api/2014/equipment-categories/adventuring-gear',
    },
    gear_category: {
      index: 'standard-gear',
      name: 'Standard Gear',
      url: '/api/2014/equipment-categories/standard-gear',
    },
    cost: {
      quantity: 1,
      unit: 'gp',
    },
    weight: 4,
    url: '/api/2014/equipment/robes',
  },
  'rope-hempen-50-feet': {
    index: 'rope-hempen-50-feet',
    name: 'Rope, hempen (50 feet)',
    equipment_category: {
      index: 'adventuring-gear',
      name: 'Adventuring Gear',
      url: '/api/2014/equipment-categories/adventuring-gear',
    },
    gear_category: {
      index: 'standard-gear',
      name: 'Standard Gear',
      url: '/api/2014/equipment-categories/standard-gear',
    },
    cost: {
      quantity: 1,
      unit: 'gp',
    },
    weight: 10,
    desc: [
      'Rope, whether made of hemp or silk, has 2 hit points and can be burst with a DC 17 Strength check.',
    ],
    url: '/api/2014/equipment/rope-hempen-50-feet',
  },
  'rope-silk-50-feet': {
    index: 'rope-silk-50-feet',
    name: 'Rope, silk (50 feet)',
    equipment_category: {
      index: 'adventuring-gear',
      name: 'Adventuring Gear',
      url: '/api/2014/equipment-categories/adventuring-gear',
    },
    gear_category: {
      index: 'standard-gear',
      name: 'Standard Gear',
      url: '/api/2014/equipment-categories/standard-gear',
    },
    cost: {
      quantity: 10,
      unit: 'gp',
    },
    weight: 5,
    desc: [
      'Rope, whether made of hemp or silk, has 2 hit points and can be burst with a DC 17 Strength check.',
    ],
    url: '/api/2014/equipment/rope-silk-50-feet',
  },
  sack: {
    index: 'sack',
    name: 'Sack',
    equipment_category: {
      index: 'adventuring-gear',
      name: 'Adventuring Gear',
      url: '/api/2014/equipment-categories/adventuring-gear',
    },
    gear_category: {
      index: 'standard-gear',
      name: 'Standard Gear',
      url: '/api/2014/equipment-categories/standard-gear',
    },
    cost: {
      quantity: 1,
      unit: 'cp',
    },
    weight: 0.5,
    url: '/api/2014/equipment/sack',
  },
  'scale-merchants': {
    index: 'scale-merchants',
    name: "Scale, merchant's",
    equipment_category: {
      index: 'adventuring-gear',
      name: 'Adventuring Gear',
      url: '/api/2014/equipment-categories/adventuring-gear',
    },
    gear_category: {
      index: 'standard-gear',
      name: 'Standard Gear',
      url: '/api/2014/equipment-categories/standard-gear',
    },
    cost: {
      quantity: 5,
      unit: 'gp',
    },
    weight: 3,
    desc: [
      'A scale includes a small balance, pans, and a suitable assortment of weights up to 2 pounds. With it, you can measure the exact weight of small objects, such as raw precious metals or trade goods, to help determine their worth.',
    ],
    url: '/api/2014/equipment/scale-merchants',
  },
  'sealing-wax': {
    index: 'sealing-wax',
    name: 'Sealing wax',
    equipment_category: {
      index: 'adventuring-gear',
      name: 'Adventuring Gear',
      url: '/api/2014/equipment-categories/adventuring-gear',
    },
    gear_category: {
      index: 'standard-gear',
      name: 'Standard Gear',
      url: '/api/2014/equipment-categories/standard-gear',
    },
    cost: {
      quantity: 5,
      unit: 'sp',
    },
    weight: 0,
    url: '/api/2014/equipment/sealing-wax',
  },
  shovel: {
    index: 'shovel',
    name: 'Shovel',
    equipment_category: {
      index: 'adventuring-gear',
      name: 'Adventuring Gear',
      url: '/api/2014/equipment-categories/adventuring-gear',
    },
    gear_category: {
      index: 'standard-gear',
      name: 'Standard Gear',
      url: '/api/2014/equipment-categories/standard-gear',
    },
    cost: {
      quantity: 2,
      unit: 'gp',
    },
    weight: 5,
    url: '/api/2014/equipment/shovel',
  },
  'signal-whistle': {
    index: 'signal-whistle',
    name: 'Signal whistle',
    equipment_category: {
      index: 'adventuring-gear',
      name: 'Adventuring Gear',
      url: '/api/2014/equipment-categories/adventuring-gear',
    },
    gear_category: {
      index: 'standard-gear',
      name: 'Standard Gear',
      url: '/api/2014/equipment-categories/standard-gear',
    },
    cost: {
      quantity: 5,
      unit: 'cp',
    },
    weight: 0,
    url: '/api/2014/equipment/signal-whistle',
  },
  'signet-ring': {
    index: 'signet-ring',
    name: 'Signet ring',
    equipment_category: {
      index: 'adventuring-gear',
      name: 'Adventuring Gear',
      url: '/api/2014/equipment-categories/adventuring-gear',
    },
    gear_category: {
      index: 'standard-gear',
      name: 'Standard Gear',
      url: '/api/2014/equipment-categories/standard-gear',
    },
    cost: {
      quantity: 5,
      unit: 'gp',
    },
    weight: 0,
    url: '/api/2014/equipment/signet-ring',
  },
  'small-knife': {
    index: 'small-knife',
    name: 'Small knife',
    equipment_category: {
      index: 'adventuring-gear',
      name: 'Adventuring Gear',
      url: '/api/2014/equipment-categories/adventuring-gear',
    },
    gear_category: {
      index: 'standard-gear',
      name: 'Standard Gear',
      url: '/api/2014/equipment-categories/standard-gear',
    },
    cost: {
      quantity: 0,
      unit: 'cp',
    },
    weight: 0,
    desc: ["A small knife, typically found in a scholar's pack."],
    url: '/api/2014/equipment/small-knife',
  },
  soap: {
    index: 'soap',
    name: 'Soap',
    equipment_category: {
      index: 'adventuring-gear',
      name: 'Adventuring Gear',
      url: '/api/2014/equipment-categories/adventuring-gear',
    },
    gear_category: {
      index: 'standard-gear',
      name: 'Standard Gear',
      url: '/api/2014/equipment-categories/standard-gear',
    },
    cost: {
      quantity: 2,
      unit: 'cp',
    },
    weight: 0,
    url: '/api/2014/equipment/soap',
  },
  spellbook: {
    index: 'spellbook',
    name: 'Spellbook',
    equipment_category: {
      index: 'adventuring-gear',
      name: 'Adventuring Gear',
      url: '/api/2014/equipment-categories/adventuring-gear',
    },
    gear_category: {
      index: 'standard-gear',
      name: 'Standard Gear',
      url: '/api/2014/equipment-categories/standard-gear',
    },
    cost: {
      quantity: 50,
      unit: 'gp',
    },
    weight: 3,
    desc: [
      'Essential for wizards, a spellbook is a leather-bound tome with 100 blank vellum pages suitable for recording spells.',
    ],
    url: '/api/2014/equipment/spellbook',
  },
  'spike-iron': {
    index: 'spike-iron',
    name: 'Spike, iron',
    equipment_category: {
      index: 'adventuring-gear',
      name: 'Adventuring Gear',
      url: '/api/2014/equipment-categories/adventuring-gear',
    },
    gear_category: {
      index: 'standard-gear',
      name: 'Standard Gear',
      url: '/api/2014/equipment-categories/standard-gear',
    },
    cost: {
      quantity: 1,
      unit: 'sp',
    },
    weight: 5,
    url: '/api/2014/equipment/spike-iron',
  },
  spyglass: {
    index: 'spyglass',
    name: 'Spyglass',
    equipment_category: {
      index: 'adventuring-gear',
      name: 'Adventuring Gear',
      url: '/api/2014/equipment-categories/adventuring-gear',
    },
    gear_category: {
      index: 'standard-gear',
      name: 'Standard Gear',
      url: '/api/2014/equipment-categories/standard-gear',
    },
    cost: {
      quantity: 1000,
      unit: 'gp',
    },
    weight: 1,
    desc: [
      'Objects viewed through a spyglass are magnified to twice their size.',
    ],
    url: '/api/2014/equipment/spyglass',
  },
  'string-10-feet': {
    index: 'string-10-feet',
    name: 'String (10 feet)',
    equipment_category: {
      index: 'adventuring-gear',
      name: 'Adventuring Gear',
      url: '/api/2014/equipment-categories/adventuring-gear',
    },
    gear_category: {
      index: 'standard-gear',
      name: 'Standard Gear',
      url: '/api/2014/equipment-categories/standard-gear',
    },
    cost: {
      quantity: 0,
      unit: 'cp',
    },
    weight: 0,
    desc: ["A 10-foot length of string, typically found in a burglar's pack."],
    url: '/api/2014/equipment/string-10-feet',
  },
  'tent-two-person': {
    index: 'tent-two-person',
    name: 'Tent, two-person',
    equipment_category: {
      index: 'adventuring-gear',
      name: 'Adventuring Gear',
      url: '/api/2014/equipment-categories/adventuring-gear',
    },
    gear_category: {
      index: 'standard-gear',
      name: 'Standard Gear',
      url: '/api/2014/equipment-categories/standard-gear',
    },
    cost: {
      quantity: 2,
      unit: 'gp',
    },
    weight: 20,
    desc: ['A simple and portable canvas shelter, a tent sleeps two.'],
    url: '/api/2014/equipment/tent-two-person',
  },
  tinderbox: {
    index: 'tinderbox',
    name: 'Tinderbox',
    equipment_category: {
      index: 'adventuring-gear',
      name: 'Adventuring Gear',
      url: '/api/2014/equipment-categories/adventuring-gear',
    },
    gear_category: {
      index: 'standard-gear',
      name: 'Standard Gear',
      url: '/api/2014/equipment-categories/standard-gear',
    },
    cost: {
      quantity: 5,
      unit: 'sp',
    },
    weight: 1,
    desc: [
      'This small container holds flint, fire steel, and tinder (usually dry cloth soaked in light oil) used to kindle a fire. Using it to light a torch--or anything else with abundant, exposed fuel--takes an action.',
      'Lighting any other fire takes 1 minute.',
    ],
    url: '/api/2014/equipment/tinderbox',
  },
  torch: {
    index: 'torch',
    name: 'Torch',
    equipment_category: {
      index: 'adventuring-gear',
      name: 'Adventuring Gear',
      url: '/api/2014/equipment-categories/adventuring-gear',
    },
    gear_category: {
      index: 'standard-gear',
      name: 'Standard Gear',
      url: '/api/2014/equipment-categories/standard-gear',
    },
    cost: {
      quantity: 1,
      unit: 'cp',
    },
    weight: 1,
    desc: [
      'A torch burns for 1 hour, providing bright light in a 20-foot radius and dim light for an additional 20 feet. If you make a melee attack with a burning torch and hit, it deals 1 fire damage.',
    ],
    url: '/api/2014/equipment/torch',
  },
  vestments: {
    index: 'vestments',
    name: 'Vestments',
    equipment_category: {
      index: 'adventuring-gear',
      name: 'Adventuring Gear',
      url: '/api/2014/equipment-categories/adventuring-gear',
    },
    gear_category: {
      index: 'standard-gear',
      name: 'Standard Gear',
      url: '/api/2014/equipment-categories/standard-gear',
    },
    cost: {
      quantity: 0,
      unit: 'cp',
    },
    weight: 0,
    desc: ["Religious clothing, typically found in a priest's pack."],
    url: '/api/2014/equipment/vestments',
  },
  vial: {
    index: 'vial',
    name: 'Vial',
    equipment_category: {
      index: 'adventuring-gear',
      name: 'Adventuring Gear',
      url: '/api/2014/equipment-categories/adventuring-gear',
    },
    gear_category: {
      index: 'standard-gear',
      name: 'Standard Gear',
      url: '/api/2014/equipment-categories/standard-gear',
    },
    cost: {
      quantity: 1,
      unit: 'gp',
    },
    weight: 0,
    url: '/api/2014/equipment/vial',
  },
  waterskin: {
    index: 'waterskin',
    name: 'Waterskin',
    equipment_category: {
      index: 'adventuring-gear',
      name: 'Adventuring Gear',
      url: '/api/2014/equipment-categories/adventuring-gear',
    },
    gear_category: {
      index: 'standard-gear',
      name: 'Standard Gear',
      url: '/api/2014/equipment-categories/standard-gear',
    },
    cost: {
      quantity: 2,
      unit: 'sp',
    },
    weight: 5,
    url: '/api/2014/equipment/waterskin',
  },
  whetstone: {
    index: 'whetstone',
    name: 'Whetstone',
    equipment_category: {
      index: 'adventuring-gear',
      name: 'Adventuring Gear',
      url: '/api/2014/equipment-categories/adventuring-gear',
    },
    gear_category: {
      index: 'standard-gear',
      name: 'Standard Gear',
      url: '/api/2014/equipment-categories/standard-gear',
    },
    cost: {
      quantity: 1,
      unit: 'cp',
    },
    weight: 1,
    url: '/api/2014/equipment/whetstone',
  },
  'burglars-pack': {
    index: 'burglars-pack',
    name: "Burglar's Pack",
    equipment_category: {
      index: 'adventuring-gear',
      name: 'Adventuring Gear',
      url: '/api/2014/equipment-categories/adventuring-gear',
    },
    gear_category: {
      index: 'equipment-packs',
      name: 'Equipment Packs',
      url: '/api/2014/equipment-categories/equipment-packs',
    },
    cost: {
      quantity: 16,
      unit: 'gp',
    },
    contents: [
      {
        item: {
          index: 'backpack',
          name: 'Backpack',
          url: '/api/2014/equipment/backpack',
        },
        quantity: 1,
      },
      {
        item: {
          index: 'ball-bearings-bag-of-1000',
          name: 'Ball bearings (bag of 1,000)',
          url: '/api/2014/equipment/ball-bearings-bag-of-1000',
        },
        quantity: 1,
      },
      {
        item: {
          index: 'string-10-feet',
          name: 'String (10 feet)',
          url: '/api/2014/equipment/string-10-feet',
        },
        quantity: 1,
      },
      {
        item: {
          index: 'bell',
          name: 'Bell',
          url: '/api/2014/equipment/bell',
        },
        quantity: 1,
      },
      {
        item: {
          index: 'candle',
          name: 'Candle',
          url: '/api/2014/equipment/candle',
        },
        quantity: 5,
      },
      {
        item: {
          index: 'crowbar',
          name: 'Crowbar',
          url: '/api/2014/equipment/crowbar',
        },
        quantity: 1,
      },
      {
        item: {
          index: 'hammer',
          name: 'Hammer',
          url: '/api/2014/equipment/hammer',
        },
        quantity: 1,
      },
      {
        item: {
          index: 'piton',
          name: 'Piton',
          url: '/api/2014/equipment/piton',
        },
        quantity: 10,
      },
      {
        item: {
          index: 'lantern-hooded',
          name: 'Lantern, hooded',
          url: '/api/2014/equipment/lantern-hooded',
        },
        quantity: 1,
      },
      {
        item: {
          index: 'oil-flask',
          name: 'Oil (flask)',
          url: '/api/2014/equipment/oil-flask',
        },
        quantity: 2,
      },
      {
        item: {
          index: 'rations-1-day',
          name: 'Rations (1 day)',
          url: '/api/2014/equipment/rations-1-day',
        },
        quantity: 5,
      },
      {
        item: {
          index: 'tinderbox',
          name: 'Tinderbox',
          url: '/api/2014/equipment/tinderbox',
        },
        quantity: 1,
      },
      {
        item: {
          index: 'waterskin',
          name: 'Waterskin',
          url: '/api/2014/equipment/waterskin',
        },
        quantity: 1,
      },
      {
        item: {
          index: 'rope-hempen-50-feet',
          name: 'Rope, hempen (50 feet)',
          url: '/api/2014/equipment/rope-hempen-50-feet',
        },
        quantity: 1,
      },
    ],
    url: '/api/2014/equipment/burglars-pack',
  },
  'diplomats-pack': {
    index: 'diplomats-pack',
    name: "Diplomat's Pack",
    equipment_category: {
      index: 'adventuring-gear',
      name: 'Adventuring Gear',
      url: '/api/2014/equipment-categories/adventuring-gear',
    },
    gear_category: {
      index: 'equipment-packs',
      name: 'Equipment Packs',
      url: '/api/2014/equipment-categories/equipment-packs',
    },
    cost: {
      quantity: 39,
      unit: 'gp',
    },
    contents: [
      {
        item: {
          index: 'chest',
          name: 'Chest',
          url: '/api/2014/equipment/chest',
        },
        quantity: 1,
      },
      {
        item: {
          index: 'case-map-or-scroll',
          name: 'Case, map or scroll',
          url: '/api/2014/equipment/case-map-or-scroll',
        },
        quantity: 2,
      },
      {
        item: {
          index: 'clothes-fine',
          name: 'Clothes, fine',
          url: '/api/2014/equipment/clothes-fine',
        },
        quantity: 1,
      },
      {
        item: {
          index: 'ink-1-ounce-bottle',
          name: 'Ink (1 ounce bottle)',
          url: '/api/2014/equipment/ink-1-ounce-bottle',
        },
        quantity: 1,
      },
      {
        item: {
          index: 'ink-pen',
          name: 'Ink pen',
          url: '/api/2014/equipment/ink-pen',
        },
        quantity: 1,
      },
      {
        item: {
          index: 'lamp',
          name: 'Lamp',
          url: '/api/2014/equipment/lamp',
        },
        quantity: 1,
      },
      {
        item: {
          index: 'oil-flask',
          name: 'Oil (flask)',
          url: '/api/2014/equipment/oil-flask',
        },
        quantity: 2,
      },
      {
        item: {
          index: 'paper-one-sheet',
          name: 'Paper (one sheet)',
          url: '/api/2014/equipment/paper-one-sheet',
        },
        quantity: 5,
      },
      {
        item: {
          index: 'perfume-vial',
          name: 'Perfume (vial)',
          url: '/api/2014/equipment/perfume-vial',
        },
        quantity: 1,
      },
      {
        item: {
          index: 'sealing-wax',
          name: 'Sealing wax',
          url: '/api/2014/equipment/sealing-wax',
        },
        quantity: 1,
      },
      {
        item: {
          index: 'soap',
          name: 'Soap',
          url: '/api/2014/equipment/soap',
        },
        quantity: 1,
      },
    ],
    url: '/api/2014/equipment/diplomats-pack',
  },
  'dungeoneers-pack': {
    index: 'dungeoneers-pack',
    name: "Dungeoneer's Pack",
    equipment_category: {
      index: 'adventuring-gear',
      name: 'Adventuring Gear',
      url: '/api/2014/equipment-categories/adventuring-gear',
    },
    gear_category: {
      index: 'equipment-packs',
      name: 'Equipment Packs',
      url: '/api/2014/equipment-categories/equipment-packs',
    },
    cost: {
      quantity: 12,
      unit: 'gp',
    },
    contents: [
      {
        item: {
          index: 'backpack',
          name: 'Backpack',
          url: '/api/2014/equipment/backpack',
        },
        quantity: 1,
      },
      {
        item: {
          index: 'crowbar',
          name: 'Crowbar',
          url: '/api/2014/equipment/crowbar',
        },
        quantity: 1,
      },
      {
        item: {
          index: 'hammer',
          name: 'Hammer',
          url: '/api/2014/equipment/hammer',
        },
        quantity: 1,
      },
      {
        item: {
          index: 'piton',
          name: 'Piton',
          url: '/api/2014/equipment/piton',
        },
        quantity: 10,
      },
      {
        item: {
          index: 'torch',
          name: 'Torch',
          url: '/api/2014/equipment/torch',
        },
        quantity: 10,
      },
      {
        item: {
          index: 'tinderbox',
          name: 'Tinderbox',
          url: '/api/2014/equipment/tinderbox',
        },
        quantity: 1,
      },
      {
        item: {
          index: 'rations-1-day',
          name: 'Rations (1 day)',
          url: '/api/2014/equipment/rations-1-day',
        },
        quantity: 10,
      },
      {
        item: {
          index: 'waterskin',
          name: 'Waterskin',
          url: '/api/2014/equipment/waterskin',
        },
        quantity: 1,
      },
      {
        item: {
          index: 'rope-hempen-50-feet',
          name: 'Rope, hempen (50 feet)',
          url: '/api/2014/equipment/rope-hempen-50-feet',
        },
        quantity: 1,
      },
    ],
    url: '/api/2014/equipment/dungeoneers-pack',
  },
  'entertainers-pack': {
    index: 'entertainers-pack',
    name: "Entertainer's Pack",
    equipment_category: {
      index: 'adventuring-gear',
      name: 'Adventuring Gear',
      url: '/api/2014/equipment-categories/adventuring-gear',
    },
    gear_category: {
      index: 'equipment-packs',
      name: 'Equipment Packs',
      url: '/api/2014/equipment-categories/equipment-packs',
    },
    cost: {
      quantity: 40,
      unit: 'gp',
    },
    contents: [
      {
        item: {
          index: 'backpack',
          name: 'Backpack',
          url: '/api/2014/equipment/backpack',
        },
        quantity: 1,
      },
      {
        item: {
          index: 'bedroll',
          name: 'Bedroll',
          url: '/api/2014/equipment/bedroll',
        },
        quantity: 1,
      },
      {
        item: {
          index: 'clothes-costume',
          name: 'Clothes, costume',
          url: '/api/2014/equipment/clothes-costume',
        },
        quantity: 2,
      },
      {
        item: {
          index: 'candle',
          name: 'Candle',
          url: '/api/2014/equipment/candle',
        },
        quantity: 5,
      },
      {
        item: {
          index: 'rations-1-day',
          name: 'Rations (1 day)',
          url: '/api/2014/equipment/rations-1-day',
        },
        quantity: 5,
      },
      {
        item: {
          index: 'waterskin',
          name: 'Waterskin',
          url: '/api/2014/equipment/waterskin',
        },
        quantity: 1,
      },
      {
        item: {
          index: 'disguise-kit',
          name: 'Disguise Kit',
          url: '/api/2014/equipment/disguise-kit',
        },
        quantity: 1,
      },
    ],
    url: '/api/2014/equipment/entertainers-pack',
  },
  'explorers-pack': {
    index: 'explorers-pack',
    name: "Explorer's Pack",
    equipment_category: {
      index: 'adventuring-gear',
      name: 'Adventuring Gear',
      url: '/api/2014/equipment-categories/adventuring-gear',
    },
    gear_category: {
      index: 'equipment-packs',
      name: 'Equipment Packs',
      url: '/api/2014/equipment-categories/equipment-packs',
    },
    cost: {
      quantity: 10,
      unit: 'gp',
    },
    contents: [
      {
        item: {
          index: 'backpack',
          name: 'Backpack',
          url: '/api/2014/equipment/backpack',
        },
        quantity: 1,
      },
      {
        item: {
          index: 'bedroll',
          name: 'Bedroll',
          url: '/api/2014/equipment/bedroll',
        },
        quantity: 1,
      },
      {
        item: {
          index: 'mess-kit',
          name: 'Mess Kit',
          url: '/api/2014/equipment/mess-kit',
        },
        quantity: 1,
      },
      {
        item: {
          index: 'tinderbox',
          name: 'Tinderbox',
          url: '/api/2014/equipment/tinderbox',
        },
        quantity: 1,
      },
      {
        item: {
          index: 'torch',
          name: 'Torch',
          url: '/api/2014/equipment/torch',
        },
        quantity: 10,
      },
      {
        item: {
          index: 'rations-1-day',
          name: 'Rations (1 day)',
          url: '/api/2014/equipment/rations-1-day',
        },
        quantity: 10,
      },
      {
        item: {
          index: 'waterskin',
          name: 'Waterskin',
          url: '/api/2014/equipment/waterskin',
        },
        quantity: 1,
      },
      {
        item: {
          index: 'rope-hempen-50-feet',
          name: 'Rope, hempen (50 feet)',
          url: '/api/2014/equipment/rope-hempen-50-feet',
        },
        quantity: 1,
      },
    ],
    url: '/api/2014/equipment/explorers-pack',
  },
  'priests-pack': {
    index: 'priests-pack',
    name: "Priest's Pack",
    equipment_category: {
      index: 'adventuring-gear',
      name: 'Adventuring Gear',
      url: '/api/2014/equipment-categories/adventuring-gear',
    },
    gear_category: {
      index: 'equipment-packs',
      name: 'Equipment Packs',
      url: '/api/2014/equipment-categories/equipment-packs',
    },
    cost: {
      quantity: 19,
      unit: 'gp',
    },
    contents: [
      {
        item: {
          index: 'backpack',
          name: 'Backpack',
          url: '/api/2014/equipment/backpack',
        },
        quantity: 1,
      },
      {
        item: {
          index: 'blanket',
          name: 'Blanket',
          url: '/api/2014/equipment/blanket',
        },
        quantity: 1,
      },
      {
        item: {
          index: 'candle',
          name: 'Candle',
          url: '/api/2014/equipment/candle',
        },
        quantity: 10,
      },
      {
        item: {
          index: 'tinderbox',
          name: 'Tinderbox',
          url: '/api/2014/equipment/tinderbox',
        },
        quantity: 1,
      },
      {
        item: {
          index: 'rations-1-day',
          name: 'Rations (1 day)',
          url: '/api/2014/equipment/rations-1-day',
        },
        quantity: 2,
      },
      {
        item: {
          index: 'waterskin',
          name: 'Waterskin',
          url: '/api/2014/equipment/waterskin',
        },
        quantity: 1,
      },
      {
        item: {
          index: 'alms-box',
          name: 'Alms box',
          url: '/api/2014/equipment/alms-box',
        },
        quantity: 1,
      },
      {
        item: {
          index: 'block-of-incense',
          name: 'Block of incense',
          url: '/api/2014/equipment/block-of-incense',
        },
        quantity: 2,
      },
      {
        item: {
          index: 'censer',
          name: 'Censer',
          url: '/api/2014/equipment/censer',
        },
        quantity: 1,
      },
      {
        item: {
          index: 'vestments',
          name: 'Vestments',
          url: '/api/2014/equipment/vestments',
        },
        quantity: 1,
      },
    ],
    url: '/api/2014/equipment/priests-pack',
  },
  'scholars-pack': {
    index: 'scholars-pack',
    name: "Scholar's Pack",
    equipment_category: {
      index: 'adventuring-gear',
      name: 'Adventuring Gear',
      url: '/api/2014/equipment-categories/adventuring-gear',
    },
    gear_category: {
      index: 'equipment-packs',
      name: 'Equipment Packs',
      url: '/api/2014/equipment-categories/equipment-packs',
    },
    cost: {
      quantity: 40,
      unit: 'gp',
    },
    contents: [
      {
        item: {
          index: 'backpack',
          name: 'Backpack',
          url: '/api/2014/equipment/backpack',
        },
        quantity: 1,
      },
      {
        item: {
          index: 'book',
          name: 'Book',
          url: '/api/2014/equipment/book',
        },
        quantity: 1,
      },
      {
        item: {
          index: 'ink-1-ounce-bottle',
          name: 'Ink (1 ounce bottle)',
          url: '/api/2014/equipment/ink-1-ounce-bottle',
        },
        quantity: 1,
      },
      {
        item: {
          index: 'ink-pen',
          name: 'Ink pen',
          url: '/api/2014/equipment/ink-pen',
        },
        quantity: 1,
      },
      {
        item: {
          index: 'parchment-one-sheet',
          name: 'Parchment (one sheet)',
          url: '/api/2014/equipment/parchment-one-sheet',
        },
        quantity: 10,
      },
      {
        item: {
          index: 'little-bag-of-sand',
          name: 'Little bag of sand',
          url: '/api/2014/equipment/little-bag-of-sand',
        },
        quantity: 1,
      },
      {
        item: {
          index: 'small-knife',
          name: 'Small knife',
          url: '/api/2014/equipment/small-knife',
        },
        quantity: 1,
      },
    ],
    url: '/api/2014/equipment/scholars-pack',
  },
  'alchemists-supplies': {
    index: 'alchemists-supplies',
    name: "Alchemist's Supplies",
    equipment_category: {
      index: 'tools',
      name: 'Tools',
      url: '/api/2014/equipment-categories/tools',
    },
    tool_category: "Artisan's Tools",
    cost: {
      quantity: 50,
      unit: 'gp',
    },
    weight: 8,
    desc: [
      "These special tools include the items needed to pursue a craft or trade. The table shows examples of the most common types of tools, each providing items related to a single craft. Proficiency with a set of artisan's tools lets you add your proficiency bonus to any ability checks you make using the tools in your craft. Each type of artisan's tools requires a separate proficiency.",
    ],
    url: '/api/2014/equipment/alchemists-supplies',
  },
  'brewers-supplies': {
    index: 'brewers-supplies',
    name: "Brewer's Supplies",
    equipment_category: {
      index: 'tools',
      name: 'Tools',
      url: '/api/2014/equipment-categories/tools',
    },
    tool_category: "Artisan's Tools",
    cost: {
      quantity: 20,
      unit: 'gp',
    },
    weight: 9,
    desc: [
      "These special tools include the items needed to pursue a craft or trade. The table shows examples of the most common types of tools, each providing items related to a single craft. Proficiency with a set of artisan's tools lets you add your proficiency bonus to any ability checks you make using the tools in your craft. Each type of artisan's tools requires a separate proficiency.",
    ],
    url: '/api/2014/equipment/brewers-supplies',
  },
  'calligraphers-supplies': {
    index: 'calligraphers-supplies',
    name: "Calligrapher's Supplies",
    equipment_category: {
      index: 'tools',
      name: 'Tools',
      url: '/api/2014/equipment-categories/tools',
    },
    tool_category: "Artisan's Tools",
    cost: {
      quantity: 10,
      unit: 'gp',
    },
    weight: 5,
    desc: [
      "These special tools include the items needed to pursue a craft or trade. The table shows examples of the most common types of tools, each providing items related to a single craft. Proficiency with a set of artisan's tools lets you add your proficiency bonus to any ability checks you make using the tools in your craft. Each type of artisan's tools requires a separate proficiency.",
    ],
    url: '/api/2014/equipment/calligraphers-supplies',
  },
  'carpenters-tools': {
    index: 'carpenters-tools',
    name: "Carpenter's Tools",
    equipment_category: {
      index: 'tools',
      name: 'Tools',
      url: '/api/2014/equipment-categories/tools',
    },
    tool_category: "Artisan's Tools",
    cost: {
      quantity: 8,
      unit: 'gp',
    },
    weight: 6,
    desc: [
      "These special tools include the items needed to pursue a craft or trade. The table shows examples of the most common types of tools, each providing items related to a single craft. Proficiency with a set of artisan's tools lets you add your proficiency bonus to any ability checks you make using the tools in your craft. Each type of artisan's tools requires a separate proficiency.",
    ],
    url: '/api/2014/equipment/carpenters-tools',
  },
  'cartographers-tools': {
    index: 'cartographers-tools',
    name: "Cartographer's Tools",
    equipment_category: {
      index: 'tools',
      name: 'Tools',
      url: '/api/2014/equipment-categories/tools',
    },
    tool_category: "Artisan's Tools",
    cost: {
      quantity: 15,
      unit: 'gp',
    },
    weight: 6,
    desc: [
      "These special tools include the items needed to pursue a craft or trade. The table shows examples of the most common types of tools, each providing items related to a single craft. Proficiency with a set of artisan's tools lets you add your proficiency bonus to any ability checks you make using the tools in your craft. Each type of artisan's tools requires a separate proficiency.",
    ],
    url: '/api/2014/equipment/cartographers-tools',
  },
  'cobblers-tools': {
    index: 'cobblers-tools',
    name: "Cobbler's Tools",
    equipment_category: {
      index: 'tools',
      name: 'Tools',
      url: '/api/2014/equipment-categories/tools',
    },
    tool_category: "Artisan's Tools",
    cost: {
      quantity: 5,
      unit: 'gp',
    },
    weight: 5,
    desc: [
      "These special tools include the items needed to pursue a craft or trade. The table shows examples of the most common types of tools, each providing items related to a single craft. Proficiency with a set of artisan's tools lets you add your proficiency bonus to any ability checks you make using the tools in your craft. Each type of artisan's tools requires a separate proficiency.",
    ],
    url: '/api/2014/equipment/cobblers-tools',
  },
  'cooks-utensils': {
    index: 'cooks-utensils',
    name: "Cook's utensils",
    equipment_category: {
      index: 'tools',
      name: 'Tools',
      url: '/api/2014/equipment-categories/tools',
    },
    tool_category: "Artisan's Tools",
    cost: {
      quantity: 1,
      unit: 'gp',
    },
    weight: 8,
    desc: [
      "These special tools include the items needed to pursue a craft or trade. The table shows examples of the most common types of tools, each providing items related to a single craft. Proficiency with a set of artisan's tools lets you add your proficiency bonus to any ability checks you make using the tools in your craft. Each type of artisan's tools requires a separate proficiency.",
    ],
    url: '/api/2014/equipment/cooks-utensils',
  },
  'glassblowers-tools': {
    index: 'glassblowers-tools',
    name: "Glassblower's Tools",
    equipment_category: {
      index: 'tools',
      name: 'Tools',
      url: '/api/2014/equipment-categories/tools',
    },
    tool_category: "Artisan's Tools",
    cost: {
      quantity: 30,
      unit: 'gp',
    },
    weight: 5,
    desc: [
      "These special tools include the items needed to pursue a craft or trade. The table shows examples of the most common types of tools, each providing items related to a single craft. Proficiency with a set of artisan's tools lets you add your proficiency bonus to any ability checks you make using the tools in your craft. Each type of artisan's tools requires a separate proficiency.",
    ],
    url: '/api/2014/equipment/glassblowers-tools',
  },
  'jewelers-tools': {
    index: 'jewelers-tools',
    name: "Jeweler's Tools",
    equipment_category: {
      index: 'tools',
      name: 'Tools',
      url: '/api/2014/equipment-categories/tools',
    },
    tool_category: "Artisan's Tools",
    cost: {
      quantity: 25,
      unit: 'gp',
    },
    weight: 2,
    desc: [
      "These special tools include the items needed to pursue a craft or trade. The table shows examples of the most common types of tools, each providing items related to a single craft. Proficiency with a set of artisan's tools lets you add your proficiency bonus to any ability checks you make using the tools in your craft. Each type of artisan's tools requires a separate proficiency.",
    ],
    url: '/api/2014/equipment/jewelers-tools',
  },
  'leatherworkers-tools': {
    index: 'leatherworkers-tools',
    name: "Leatherworker's Tools",
    equipment_category: {
      index: 'tools',
      name: 'Tools',
      url: '/api/2014/equipment-categories/tools',
    },
    tool_category: "Artisan's Tools",
    cost: {
      quantity: 5,
      unit: 'gp',
    },
    weight: 5,
    desc: [
      "These special tools include the items needed to pursue a craft or trade. The table shows examples of the most common types of tools, each providing items related to a single craft. Proficiency with a set of artisan's tools lets you add your proficiency bonus to any ability checks you make using the tools in your craft. Each type of artisan's tools requires a separate proficiency.",
    ],
    url: '/api/2014/equipment/leatherworkers-tools',
  },
  'masons-tools': {
    index: 'masons-tools',
    name: "Mason's Tools",
    equipment_category: {
      index: 'tools',
      name: 'Tools',
      url: '/api/2014/equipment-categories/tools',
    },
    tool_category: "Artisan's Tools",
    cost: {
      quantity: 10,
      unit: 'gp',
    },
    weight: 8,
    desc: [
      "These special tools include the items needed to pursue a craft or trade. The table shows examples of the most common types of tools, each providing items related to a single craft. Proficiency with a set of artisan's tools lets you add your proficiency bonus to any ability checks you make using the tools in your craft. Each type of artisan's tools requires a separate proficiency.",
    ],
    url: '/api/2014/equipment/masons-tools',
  },
  'painters-supplies': {
    index: 'painters-supplies',
    name: "Painter's Supplies",
    equipment_category: {
      index: 'tools',
      name: 'Tools',
      url: '/api/2014/equipment-categories/tools',
    },
    tool_category: "Artisan's Tools",
    cost: {
      quantity: 10,
      unit: 'gp',
    },
    weight: 5,
    desc: [
      "These special tools include the items needed to pursue a craft or trade. The table shows examples of the most common types of tools, each providing items related to a single craft. Proficiency with a set of artisan's tools lets you add your proficiency bonus to any ability checks you make using the tools in your craft. Each type of artisan's tools requires a separate proficiency.",
    ],
    url: '/api/2014/equipment/painters-supplies',
  },
  'potters-tools': {
    index: 'potters-tools',
    name: "Potter's Tools",
    equipment_category: {
      index: 'tools',
      name: 'Tools',
      url: '/api/2014/equipment-categories/tools',
    },
    tool_category: "Artisan's Tools",
    cost: {
      quantity: 10,
      unit: 'gp',
    },
    weight: 3,
    desc: [
      "These special tools include the items needed to pursue a craft or trade. The table shows examples of the most common types of tools, each providing items related to a single craft. Proficiency with a set of artisan's tools lets you add your proficiency bonus to any ability checks you make using the tools in your craft. Each type of artisan's tools requires a separate proficiency.",
    ],
    url: '/api/2014/equipment/potters-tools',
  },
  'smiths-tools': {
    index: 'smiths-tools',
    name: "Smith's Tools",
    equipment_category: {
      index: 'tools',
      name: 'Tools',
      url: '/api/2014/equipment-categories/tools',
    },
    tool_category: "Artisan's Tools",
    cost: {
      quantity: 20,
      unit: 'gp',
    },
    weight: 8,
    desc: [
      "These special tools include the items needed to pursue a craft or trade. The table shows examples of the most common types of tools, each providing items related to a single craft. Proficiency with a set of artisan's tools lets you add your proficiency bonus to any ability checks you make using the tools in your craft. Each type of artisan's tools requires a separate proficiency.",
    ],
    url: '/api/2014/equipment/smiths-tools',
  },
  'tinkers-tools': {
    index: 'tinkers-tools',
    name: "Tinker's Tools",
    equipment_category: {
      index: 'tools',
      name: 'Tools',
      url: '/api/2014/equipment-categories/tools',
    },
    tool_category: "Artisan's Tools",
    cost: {
      quantity: 50,
      unit: 'gp',
    },
    weight: 10,
    desc: [
      "These special tools include the items needed to pursue a craft or trade. The table shows examples of the most common types of tools, each providing items related to a single craft. Proficiency with a set of artisan's tools lets you add your proficiency bonus to any ability checks you make using the tools in your craft. Each type of artisan's tools requires a separate proficiency.",
    ],
    url: '/api/2014/equipment/tinkers-tools',
  },
  'weavers-tools': {
    index: 'weavers-tools',
    name: "Weaver's Tools",
    equipment_category: {
      index: 'tools',
      name: 'Tools',
      url: '/api/2014/equipment-categories/tools',
    },
    tool_category: "Artisan's Tools",
    cost: {
      quantity: 1,
      unit: 'gp',
    },
    weight: 5,
    desc: [
      "These special tools include the items needed to pursue a craft or trade. The table shows examples of the most common types of tools, each providing items related to a single craft. Proficiency with a set of artisan's tools lets you add your proficiency bonus to any ability checks you make using the tools in your craft. Each type of artisan's tools requires a separate proficiency.",
    ],
    url: '/api/2014/equipment/weavers-tools',
  },
  'woodcarvers-tools': {
    index: 'woodcarvers-tools',
    name: "Woodcarver's Tools",
    equipment_category: {
      index: 'tools',
      name: 'Tools',
      url: '/api/2014/equipment-categories/tools',
    },
    tool_category: "Artisan's Tools",
    cost: {
      quantity: 1,
      unit: 'gp',
    },
    weight: 5,
    desc: [
      "These special tools include the items needed to pursue a craft or trade. The table shows examples of the most common types of tools, each providing items related to a single craft. Proficiency with a set of artisan's tools lets you add your proficiency bonus to any ability checks you make using the tools in your craft. Each type of artisan's tools requires a separate proficiency.",
    ],
    url: '/api/2014/equipment/woodcarvers-tools',
  },
  'dice-set': {
    index: 'dice-set',
    name: 'Dice Set',
    equipment_category: {
      index: 'tools',
      name: 'Tools',
      url: '/api/2014/equipment-categories/tools',
    },
    tool_category: 'Gaming Sets',
    cost: {
      quantity: 1,
      unit: 'sp',
    },
    weight: 0,
    desc: [
      'This item encompasses a wide range of game pieces, including dice and decks of cards (for games such as Three-Dragon Ante). A few common examples appear on the Tools table, but other kinds of gaming sets exist. If you are proficient with a gaming set, you can add your proficiency bonus to ability checks you make to play a game with that set. Each type of gaming set requires a separate proficiency.',
    ],
    url: '/api/2014/equipment/dice-set',
  },
  'playing-card-set': {
    index: 'playing-card-set',
    name: 'Playing Card Set',
    equipment_category: {
      index: 'tools',
      name: 'Tools',
      url: '/api/2014/equipment-categories/tools',
    },
    tool_category: 'Gaming Sets',
    cost: {
      quantity: 5,
      unit: 'sp',
    },
    weight: 0,
    desc: [
      'This item encompasses a wide range of game pieces, including dice and decks of cards (for games such as Three-Dragon Ante). A few common examples appear on the Tools table, but other kinds of gaming sets exist. If you are proficient with a gaming set, you can add your proficiency bonus to ability checks you make to play a game with that set. Each type of gaming set requires a separate proficiency.',
    ],
    image: '/api/images/equipment/playing-card-set.png',
    url: '/api/2014/equipment/playing-card-set',
  },
  bagpipes: {
    index: 'bagpipes',
    name: 'Bagpipes',
    equipment_category: {
      index: 'tools',
      name: 'Tools',
      url: '/api/2014/equipment-categories/tools',
    },
    tool_category: 'Musical Instrument',
    cost: {
      quantity: 30,
      unit: 'gp',
    },
    weight: 6,
    desc: [
      'Several of the most common types of musical instruments are shown on the table as examples. If you have proficiency with a given musical instrument, you can add your proficiency bonus to any ability checks you make to play music with the instrument. A bard can use a musical instrument as a spellcasting focus. Each type of musical instrument requires a separate proficiency.',
    ],
    url: '/api/2014/equipment/bagpipes',
  },
  drum: {
    index: 'drum',
    name: 'Drum',
    equipment_category: {
      index: 'tools',
      name: 'Tools',
      url: '/api/2014/equipment-categories/tools',
    },
    tool_category: 'Musical Instrument',
    cost: {
      quantity: 6,
      unit: 'gp',
    },
    weight: 3,
    desc: [
      'Several of the most common types of musical instruments are shown on the table as examples. If you have proficiency with a given musical instrument, you can add your proficiency bonus to any ability checks you make to play music with the instrument. A bard can use a musical instrument as a spellcasting focus. Each type of musical instrument requires a separate proficiency.',
    ],
    url: '/api/2014/equipment/drum',
  },
  dulcimer: {
    index: 'dulcimer',
    name: 'Dulcimer',
    equipment_category: {
      index: 'tools',
      name: 'Tools',
      url: '/api/2014/equipment-categories/tools',
    },
    tool_category: 'Musical Instrument',
    cost: {
      quantity: 25,
      unit: 'gp',
    },
    weight: 10,
    desc: [
      'Several of the most common types of musical instruments are shown on the table as examples. If you have proficiency with a given musical instrument, you can add your proficiency bonus to any ability checks you make to play music with the instrument. A bard can use a musical instrument as a spellcasting focus. Each type of musical instrument requires a separate proficiency.',
    ],
    image: '/api/images/equipment/dulcimer.png',
    url: '/api/2014/equipment/dulcimer',
  },
  flute: {
    index: 'flute',
    name: 'Flute',
    equipment_category: {
      index: 'tools',
      name: 'Tools',
      url: '/api/2014/equipment-categories/tools',
    },
    tool_category: 'Musical Instrument',
    cost: {
      quantity: 2,
      unit: 'gp',
    },
    weight: 1,
    desc: [
      'Several of the most common types of musical instruments are shown on the table as examples. If you have proficiency with a given musical instrument, you can add your proficiency bonus to any ability checks you make to play music with the instrument. A bard can use a musical instrument as a spellcasting focus. Each type of musical instrument requires a separate proficiency.',
    ],
    url: '/api/2014/equipment/flute',
  },
  lute: {
    index: 'lute',
    name: 'Lute',
    equipment_category: {
      index: 'tools',
      name: 'Tools',
      url: '/api/2014/equipment-categories/tools',
    },
    tool_category: 'Musical Instrument',
    cost: {
      quantity: 35,
      unit: 'gp',
    },
    weight: 2,
    desc: [
      'Several of the most common types of musical instruments are shown on the table as examples. If you have proficiency with a given musical instrument, you can add your proficiency bonus to any ability checks you make to play music with the instrument. A bard can use a musical instrument as a spellcasting focus. Each type of musical instrument requires a separate proficiency.',
    ],
    url: '/api/2014/equipment/lute',
  },
  lyre: {
    index: 'lyre',
    name: 'Lyre',
    equipment_category: {
      index: 'tools',
      name: 'Tools',
      url: '/api/2014/equipment-categories/tools',
    },
    tool_category: 'Musical Instrument',
    cost: {
      quantity: 30,
      unit: 'gp',
    },
    weight: 2,
    desc: [
      'Several of the most common types of musical instruments are shown on the table as examples. If you have proficiency with a given musical instrument, you can add your proficiency bonus to any ability checks you make to play music with the instrument. A bard can use a musical instrument as a spellcasting focus. Each type of musical instrument requires a separate proficiency.',
    ],
    url: '/api/2014/equipment/lyre',
  },
  horn: {
    index: 'horn',
    name: 'Horn',
    equipment_category: {
      index: 'tools',
      name: 'Tools',
      url: '/api/2014/equipment-categories/tools',
    },
    tool_category: 'Musical Instrument',
    cost: {
      quantity: 3,
      unit: 'gp',
    },
    weight: 2,
    desc: [
      'Several of the most common types of musical instruments are shown on the table as examples. If you have proficiency with a given musical instrument, you can add your proficiency bonus to any ability checks you make to play music with the instrument. A bard can use a musical instrument as a spellcasting focus. Each type of musical instrument requires a separate proficiency.',
    ],
    url: '/api/2014/equipment/horn',
  },
  'pan-flute': {
    index: 'pan-flute',
    name: 'Pan flute',
    equipment_category: {
      index: 'tools',
      name: 'Tools',
      url: '/api/2014/equipment-categories/tools',
    },
    tool_category: 'Musical Instrument',
    cost: {
      quantity: 12,
      unit: 'gp',
    },
    weight: 2,
    desc: [
      'Several of the most common types of musical instruments are shown on the table as examples. If you have proficiency with a given musical instrument, you can add your proficiency bonus to any ability checks you make to play music with the instrument. A bard can use a musical instrument as a spellcasting focus. Each type of musical instrument requires a separate proficiency.',
    ],
    url: '/api/2014/equipment/pan-flute',
  },
  shawm: {
    index: 'shawm',
    name: 'Shawm',
    equipment_category: {
      index: 'tools',
      name: 'Tools',
      url: '/api/2014/equipment-categories/tools',
    },
    tool_category: 'Musical Instrument',
    cost: {
      quantity: 2,
      unit: 'gp',
    },
    weight: 1,
    desc: [
      'Several of the most common types of musical instruments are shown on the table as examples. If you have proficiency with a given musical instrument, you can add your proficiency bonus to any ability checks you make to play music with the instrument. A bard can use a musical instrument as a spellcasting focus. Each type of musical instrument requires a separate proficiency.',
    ],
    url: '/api/2014/equipment/shawm',
  },
  viol: {
    index: 'viol',
    name: 'Viol',
    equipment_category: {
      index: 'tools',
      name: 'Tools',
      url: '/api/2014/equipment-categories/tools',
    },
    tool_category: 'Musical Instrument',
    cost: {
      quantity: 30,
      unit: 'gp',
    },
    weight: 1,
    desc: [
      'Several of the most common types of musical instruments are shown on the table as examples. If you have proficiency with a given musical instrument, you can add your proficiency bonus to any ability checks you make to play music with the instrument. A bard can use a musical instrument as a spellcasting focus. Each type of musical instrument requires a separate proficiency.',
    ],
    url: '/api/2014/equipment/viol',
  },
  'navigators-tools': {
    index: 'navigators-tools',
    name: "Navigator's Tools",
    equipment_category: {
      index: 'tools',
      name: 'Tools',
      url: '/api/2014/equipment-categories/tools',
    },
    tool_category: 'Other Tools',
    cost: {
      quantity: 25,
      unit: 'gp',
    },
    weight: 2,
    desc: [
      "This set of instruments is used for navigation at sea. Proficiency with navigator's tools lets you chart a ship's course and follow navigation charts. In addition, these tools allow you to add your proficiency bonus to any ability check you make to avoid getting lost at sea.",
    ],
    url: '/api/2014/equipment/navigators-tools',
  },
  'thieves-tools': {
    index: 'thieves-tools',
    name: "Thieves' Tools",
    equipment_category: {
      index: 'tools',
      name: 'Tools',
      url: '/api/2014/equipment-categories/tools',
    },
    tool_category: 'Other Tools',
    cost: {
      quantity: 25,
      unit: 'gp',
    },
    weight: 1,
    desc: [
      'This set of tools includes a small file, a set of lock picks, a small mirror mounted on a metal handle, a set of narrow-bladed scissors, and a pair of pliers. Proficiency with these tools lets you add your proficiency bonus to any ability checks you make to disarm traps or open locks.',
    ],
    url: '/api/2014/equipment/thieves-tools',
  },
  camel: {
    index: 'camel',
    name: 'Camel',
    equipment_category: {
      index: 'mounts-and-vehicles',
      name: 'Mounts and Vehicles',
      url: '/api/2014/equipment-categories/mounts-and-vehicles',
    },
    vehicle_category: 'Mounts and Other Animals',
    cost: {
      quantity: 50,
      unit: 'gp',
    },
    speed: {
      quantity: 50,
      unit: 'ft/round',
    },
    capacity: '480 lb.',
    url: '/api/2014/equipment/camel',
  },
  donkey: {
    index: 'donkey',
    name: 'Donkey',
    equipment_category: {
      index: 'mounts-and-vehicles',
      name: 'Mounts and Vehicles',
      url: '/api/2014/equipment-categories/mounts-and-vehicles',
    },
    vehicle_category: 'Mounts and Other Animals',
    cost: {
      quantity: 8,
      unit: 'gp',
    },
    speed: {
      quantity: 40,
      unit: 'ft/round',
    },
    capacity: '420 lb.',
    url: '/api/2014/equipment/donkey',
  },
  mule: {
    index: 'mule',
    name: 'Mule',
    equipment_category: {
      index: 'mounts-and-vehicles',
      name: 'Mounts and Vehicles',
      url: '/api/2014/equipment-categories/mounts-and-vehicles',
    },
    vehicle_category: 'Mounts and Other Animals',
    cost: {
      quantity: 8,
      unit: 'gp',
    },
    speed: {
      quantity: 40,
      unit: 'ft/round',
    },
    capacity: '420 lb.',
    url: '/api/2014/equipment/mule',
  },
  elephant: {
    index: 'elephant',
    name: 'Elephant',
    equipment_category: {
      index: 'mounts-and-vehicles',
      name: 'Mounts and Vehicles',
      url: '/api/2014/equipment-categories/mounts-and-vehicles',
    },
    vehicle_category: 'Mounts and Other Animals',
    cost: {
      quantity: 200,
      unit: 'gp',
    },
    speed: {
      quantity: 40,
      unit: 'ft/round',
    },
    capacity: '1,320 lb.',
    url: '/api/2014/equipment/elephant',
  },
  'horse-draft': {
    index: 'horse-draft',
    name: 'Horse, draft',
    equipment_category: {
      index: 'mounts-and-vehicles',
      name: 'Mounts and Vehicles',
      url: '/api/2014/equipment-categories/mounts-and-vehicles',
    },
    vehicle_category: 'Mounts and Other Animals',
    cost: {
      quantity: 50,
      unit: 'gp',
    },
    speed: {
      quantity: 40,
      unit: 'ft/round',
    },
    capacity: '540 lb.',
    url: '/api/2014/equipment/horse-draft',
  },
  'horse-riding': {
    index: 'horse-riding',
    name: 'Horse, riding',
    equipment_category: {
      index: 'mounts-and-vehicles',
      name: 'Mounts and Vehicles',
      url: '/api/2014/equipment-categories/mounts-and-vehicles',
    },
    vehicle_category: 'Mounts and Other Animals',
    cost: {
      quantity: 75,
      unit: 'gp',
    },
    speed: {
      quantity: 60,
      unit: 'ft/round',
    },
    capacity: '480 lb.',
    url: '/api/2014/equipment/horse-riding',
  },
  mastiff: {
    index: 'mastiff',
    name: 'Mastiff',
    equipment_category: {
      index: 'mounts-and-vehicles',
      name: 'Mounts and Vehicles',
      url: '/api/2014/equipment-categories/mounts-and-vehicles',
    },
    vehicle_category: 'Mounts and Other Animals',
    cost: {
      quantity: 25,
      unit: 'gp',
    },
    speed: {
      quantity: 40,
      unit: 'ft/round',
    },
    capacity: '195 lb.',
    url: '/api/2014/equipment/mastiff',
  },
  pony: {
    index: 'pony',
    name: 'Pony',
    equipment_category: {
      index: 'mounts-and-vehicles',
      name: 'Mounts and Vehicles',
      url: '/api/2014/equipment-categories/mounts-and-vehicles',
    },
    vehicle_category: 'Mounts and Other Animals',
    cost: {
      quantity: 30,
      unit: 'gp',
    },
    speed: {
      quantity: 40,
      unit: 'ft/round',
    },
    capacity: '225 lb.',
    url: '/api/2014/equipment/pony',
  },
  warhorse: {
    index: 'warhorse',
    name: 'Warhorse',
    equipment_category: {
      index: 'mounts-and-vehicles',
      name: 'Mounts and Vehicles',
      url: '/api/2014/equipment-categories/mounts-and-vehicles',
    },
    vehicle_category: 'Mounts and Other Animals',
    cost: {
      quantity: 400,
      unit: 'gp',
    },
    speed: {
      quantity: 60,
      unit: 'ft/round',
    },
    capacity: '540 lb.',
    url: '/api/2014/equipment/warhorse',
  },
  'barding-padded': {
    index: 'barding-padded',
    name: 'Barding: Padded',
    equipment_category: {
      index: 'mounts-and-vehicles',
      name: 'Mounts and Vehicles',
      url: '/api/2014/equipment-categories/mounts-and-vehicles',
    },
    vehicle_category: 'Tack, Harness, and Drawn Vehicles',
    cost: {
      quantity: 20,
      unit: 'gp',
    },
    weight: 16,
    desc: [
      "Barding is armor designed to protect an animal's head, neck, chest, and body. Any type of armor shown on the Armor table can be purchased as barding. The cost is four times the equivalent armor made for humanoids, and it weighs twice as much.",
    ],
    url: '/api/2014/equipment/barding-padded',
  },
  'barding-leather': {
    index: 'barding-leather',
    name: 'Barding: Leather',
    equipment_category: {
      index: 'mounts-and-vehicles',
      name: 'Mounts and Vehicles',
      url: '/api/2014/equipment-categories/mounts-and-vehicles',
    },
    vehicle_category: 'Tack, Harness, and Drawn Vehicles',
    cost: {
      quantity: 40,
      unit: 'gp',
    },
    weight: 20,
    desc: [
      "Barding is armor designed to protect an animal's head, neck, chest, and body. Any type of armor shown on the Armor table can be purchased as barding. The cost is four times the equivalent armor made for humanoids, and it weighs twice as much.",
    ],
    url: '/api/2014/equipment/barding-leather',
  },
  'barding-studded-leather': {
    index: 'barding-studded-leather',
    name: 'Barding: Studded Leather',
    equipment_category: {
      index: 'mounts-and-vehicles',
      name: 'Mounts and Vehicles',
      url: '/api/2014/equipment-categories/mounts-and-vehicles',
    },
    vehicle_category: 'Tack, Harness, and Drawn Vehicles',
    cost: {
      quantity: 180,
      unit: 'gp',
    },
    weight: 26,
    desc: [
      "Barding is armor designed to protect an animal's head, neck, chest, and body. Any type of armor shown on the Armor table can be purchased as barding. The cost is four times the equivalent armor made for humanoids, and it weighs twice as much.",
    ],
    url: '/api/2014/equipment/barding-studded-leather',
  },
  'barding-hide': {
    index: 'barding-hide',
    name: 'Barding: Hide',
    equipment_category: {
      index: 'mounts-and-vehicles',
      name: 'Mounts and Vehicles',
      url: '/api/2014/equipment-categories/mounts-and-vehicles',
    },
    vehicle_category: 'Tack, Harness, and Drawn Vehicles',
    cost: {
      quantity: 40,
      unit: 'gp',
    },
    weight: 24,
    desc: [
      "Barding is armor designed to protect an animal's head, neck, chest, and body. Any type of armor shown on the Armor table can be purchased as barding. The cost is four times the equivalent armor made for humanoids, and it weighs twice as much.",
    ],
    url: '/api/2014/equipment/barding-hide',
  },
  'barding-chain-shirt': {
    index: 'barding-chain-shirt',
    name: 'Barding: Chain shirt',
    equipment_category: {
      index: 'mounts-and-vehicles',
      name: 'Mounts and Vehicles',
      url: '/api/2014/equipment-categories/mounts-and-vehicles',
    },
    vehicle_category: 'Tack, Harness, and Drawn Vehicles',
    cost: {
      quantity: 200,
      unit: 'gp',
    },
    weight: 40,
    desc: [
      "Barding is armor designed to protect an animal's head, neck, chest, and body. Any type of armor shown on the Armor table can be purchased as barding. The cost is four times the equivalent armor made for humanoids, and it weighs twice as much.",
    ],
    url: '/api/2014/equipment/barding-chain-shirt',
  },
  'barding-scale-mail': {
    index: 'barding-scale-mail',
    name: 'Barding: Scale mail',
    equipment_category: {
      index: 'mounts-and-vehicles',
      name: 'Mounts and Vehicles',
      url: '/api/2014/equipment-categories/mounts-and-vehicles',
    },
    vehicle_category: 'Tack, Harness, and Drawn Vehicles',
    cost: {
      quantity: 200,
      unit: 'gp',
    },
    weight: 90,
    desc: [
      "Barding is armor designed to protect an animal's head, neck, chest, and body. Any type of armor shown on the Armor table can be purchased as barding. The cost is four times the equivalent armor made for humanoids, and it weighs twice as much.",
    ],
    url: '/api/2014/equipment/barding-scale-mail',
  },
  'barding-breastplate': {
    index: 'barding-breastplate',
    name: 'Barding: Breastplate',
    equipment_category: {
      index: 'mounts-and-vehicles',
      name: 'Mounts and Vehicles',
      url: '/api/2014/equipment-categories/mounts-and-vehicles',
    },
    vehicle_category: 'Tack, Harness, and Drawn Vehicles',
    cost: {
      quantity: 1600,
      unit: 'gp',
    },
    weight: 40,
    desc: [
      "Barding is armor designed to protect an animal's head, neck, chest, and body. Any type of armor shown on the Armor table can be purchased as barding. The cost is four times the equivalent armor made for humanoids, and it weighs twice as much.",
    ],
    url: '/api/2014/equipment/barding-breastplate',
  },
  'barding-half-plate': {
    index: 'barding-half-plate',
    name: 'Barding: Half plate',
    equipment_category: {
      index: 'mounts-and-vehicles',
      name: 'Mounts and Vehicles',
      url: '/api/2014/equipment-categories/mounts-and-vehicles',
    },
    vehicle_category: 'Tack, Harness, and Drawn Vehicles',
    cost: {
      quantity: 3000,
      unit: 'gp',
    },
    weight: 80,
    desc: [
      "Barding is armor designed to protect an animal's head, neck, chest, and body. Any type of armor shown on the Armor table can be purchased as barding. The cost is four times the equivalent armor made for humanoids, and it weighs twice as much.",
    ],
    url: '/api/2014/equipment/barding-half-plate',
  },
  'barding-ring-mail': {
    index: 'barding-ring-mail',
    name: 'Barding: Ring mail',
    equipment_category: {
      index: 'mounts-and-vehicles',
      name: 'Mounts and Vehicles',
      url: '/api/2014/equipment-categories/mounts-and-vehicles',
    },
    vehicle_category: 'Tack, Harness, and Drawn Vehicles',
    cost: {
      quantity: 12,
      unit: 'gp',
    },
    weight: 80,
    desc: [
      "Barding is armor designed to protect an animal's head, neck, chest, and body. Any type of armor shown on the Armor table can be purchased as barding. The cost is four times the equivalent armor made for humanoids, and it weighs twice as much.",
    ],
    url: '/api/2014/equipment/barding-ring-mail',
  },
  'barding-chain-mail': {
    index: 'barding-chain-mail',
    name: 'Barding: Chain mail',
    equipment_category: {
      index: 'mounts-and-vehicles',
      name: 'Mounts and Vehicles',
      url: '/api/2014/equipment-categories/mounts-and-vehicles',
    },
    vehicle_category: 'Tack, Harness, and Drawn Vehicles',
    cost: {
      quantity: 300,
      unit: 'gp',
    },
    weight: 110,
    desc: [
      "Barding is armor designed to protect an animal's head, neck, chest, and body. Any type of armor shown on the Armor table can be purchased as barding. The cost is four times the equivalent armor made for humanoids, and it weighs twice as much.",
    ],
    url: '/api/2014/equipment/barding-chain-mail',
  },
  'barding-splint': {
    index: 'barding-splint',
    name: 'Barding: Splint',
    equipment_category: {
      index: 'mounts-and-vehicles',
      name: 'Mounts and Vehicles',
      url: '/api/2014/equipment-categories/mounts-and-vehicles',
    },
    vehicle_category: 'Tack, Harness, and Drawn Vehicles',
    cost: {
      quantity: 800,
      unit: 'gp',
    },
    weight: 120,
    desc: [
      "Barding is armor designed to protect an animal's head, neck, chest, and body. Any type of armor shown on the Armor table can be purchased as barding. The cost is four times the equivalent armor made for humanoids, and it weighs twice as much.",
    ],
    url: '/api/2014/equipment/barding-splint',
  },
  'barding-plate': {
    index: 'barding-plate',
    name: 'Barding: Plate',
    equipment_category: {
      index: 'mounts-and-vehicles',
      name: 'Mounts and Vehicles',
      url: '/api/2014/equipment-categories/mounts-and-vehicles',
    },
    vehicle_category: 'Tack, Harness, and Drawn Vehicles',
    cost: {
      quantity: 6000,
      unit: 'gp',
    },
    weight: 130,
    desc: [
      "Barding is armor designed to protect an animal's head, neck, chest, and body. Any type of armor shown on the Armor table can be purchased as barding. The cost is four times the equivalent armor made for humanoids, and it weighs twice as much.",
    ],
    url: '/api/2014/equipment/barding-plate',
  },
  'bit-and-bridle': {
    index: 'bit-and-bridle',
    name: 'Bit and bridle',
    equipment_category: {
      index: 'mounts-and-vehicles',
      name: 'Mounts and Vehicles',
      url: '/api/2014/equipment-categories/mounts-and-vehicles',
    },
    vehicle_category: 'Tack, Harness, and Drawn Vehicles',
    cost: {
      quantity: 2,
      unit: 'gp',
    },
    weight: 1,
    url: '/api/2014/equipment/bit-and-bridle',
  },
  carriage: {
    index: 'carriage',
    name: 'Carriage',
    equipment_category: {
      index: 'mounts-and-vehicles',
      name: 'Mounts and Vehicles',
      url: '/api/2014/equipment-categories/mounts-and-vehicles',
    },
    vehicle_category: 'Tack, Harness, and Drawn Vehicles',
    cost: {
      quantity: 100,
      unit: 'gp',
    },
    weight: 600,
    url: '/api/2014/equipment/carriage',
  },
  cart: {
    index: 'cart',
    name: 'Cart',
    equipment_category: {
      index: 'mounts-and-vehicles',
      name: 'Mounts and Vehicles',
      url: '/api/2014/equipment-categories/mounts-and-vehicles',
    },
    vehicle_category: 'Tack, Harness, and Drawn Vehicles',
    cost: {
      quantity: 15,
      unit: 'gp',
    },
    weight: 200,
    url: '/api/2014/equipment/cart',
  },
  chariot: {
    index: 'chariot',
    name: 'Chariot',
    equipment_category: {
      index: 'mounts-and-vehicles',
      name: 'Mounts and Vehicles',
      url: '/api/2014/equipment-categories/mounts-and-vehicles',
    },
    vehicle_category: 'Tack, Harness, and Drawn Vehicles',
    cost: {
      quantity: 250,
      unit: 'gp',
    },
    weight: 100,
    url: '/api/2014/equipment/chariot',
  },
  'animal-feed-1-day': {
    index: 'animal-feed-1-day',
    name: 'Animal Feed (1 day)',
    equipment_category: {
      index: 'mounts-and-vehicles',
      name: 'Mounts and Vehicles',
      url: '/api/2014/equipment-categories/mounts-and-vehicles',
    },
    vehicle_category: 'Tack, Harness, and Drawn Vehicles',
    cost: {
      quantity: 5,
      unit: 'cp',
    },
    weight: 10,
    url: '/api/2014/equipment/animal-feed-1-day',
  },
  'saddle-exotic': {
    index: 'saddle-exotic',
    name: 'Saddle, Exotic',
    equipment_category: {
      index: 'mounts-and-vehicles',
      name: 'Mounts and Vehicles',
      url: '/api/2014/equipment-categories/mounts-and-vehicles',
    },
    vehicle_category: 'Tack, Harness, and Drawn Vehicles',
    cost: {
      quantity: 60,
      unit: 'gp',
    },
    weight: 50,
    desc: [
      'An exotic saddle is required for riding any aquatic or flying mount.',
    ],
    url: '/api/2014/equipment/saddle-exotic',
  },
  'saddle-military': {
    index: 'saddle-military',
    name: 'Saddle, Military',
    equipment_category: {
      index: 'mounts-and-vehicles',
      name: 'Mounts and Vehicles',
      url: '/api/2014/equipment-categories/mounts-and-vehicles',
    },
    vehicle_category: 'Tack, Harness, and Drawn Vehicles',
    cost: {
      quantity: 20,
      unit: 'gp',
    },
    weight: 30,
    desc: [
      'A military saddle braces the rider, helping you keep your seat on an active mount in battle. It gives you advantage on any check you make to remain mounted.',
    ],
    url: '/api/2014/equipment/saddle-military',
  },
  'saddle-pack': {
    index: 'saddle-pack',
    name: 'Saddle, Pack',
    equipment_category: {
      index: 'mounts-and-vehicles',
      name: 'Mounts and Vehicles',
      url: '/api/2014/equipment-categories/mounts-and-vehicles',
    },
    vehicle_category: 'Tack, Harness, and Drawn Vehicles',
    cost: {
      quantity: 5,
      unit: 'gp',
    },
    weight: 15,
    url: '/api/2014/equipment/saddle-pack',
  },
  'saddle-riding': {
    index: 'saddle-riding',
    name: 'Saddle, Riding',
    equipment_category: {
      index: 'mounts-and-vehicles',
      name: 'Mounts and Vehicles',
      url: '/api/2014/equipment-categories/mounts-and-vehicles',
    },
    vehicle_category: 'Tack, Harness, and Drawn Vehicles',
    cost: {
      quantity: 10,
      unit: 'gp',
    },
    weight: 25,
    url: '/api/2014/equipment/saddle-riding',
  },
  saddlebags: {
    index: 'saddlebags',
    name: 'Saddlebags',
    equipment_category: {
      index: 'mounts-and-vehicles',
      name: 'Mounts and Vehicles',
      url: '/api/2014/equipment-categories/mounts-and-vehicles',
    },
    vehicle_category: 'Tack, Harness, and Drawn Vehicles',
    cost: {
      quantity: 4,
      unit: 'gp',
    },
    weight: 8,
    url: '/api/2014/equipment/saddlebags',
  },
  sled: {
    index: 'sled',
    name: 'Sled',
    equipment_category: {
      index: 'mounts-and-vehicles',
      name: 'Mounts and Vehicles',
      url: '/api/2014/equipment-categories/mounts-and-vehicles',
    },
    vehicle_category: 'Tack, Harness, and Drawn Vehicles',
    cost: {
      quantity: 20,
      unit: 'gp',
    },
    weight: 300,
    url: '/api/2014/equipment/sled',
  },
  'stabling-1-day': {
    index: 'stabling-1-day',
    name: 'Stabling (1 day)',
    equipment_category: {
      index: 'mounts-and-vehicles',
      name: 'Mounts and Vehicles',
      url: '/api/2014/equipment-categories/mounts-and-vehicles',
    },
    vehicle_category: 'Tack, Harness, and Drawn Vehicles',
    cost: {
      quantity: 5,
      unit: 'sp',
    },
    weight: 0,
    url: '/api/2014/equipment/stabling-1-day',
  },
  wagon: {
    index: 'wagon',
    name: 'Wagon',
    equipment_category: {
      index: 'mounts-and-vehicles',
      name: 'Mounts and Vehicles',
      url: '/api/2014/equipment-categories/mounts-and-vehicles',
    },
    vehicle_category: 'Tack, Harness, and Drawn Vehicles',
    cost: {
      quantity: 35,
      unit: 'gp',
    },
    weight: 400,
    url: '/api/2014/equipment/wagon',
  },
  galley: {
    index: 'galley',
    name: 'Galley',
    equipment_category: {
      index: 'mounts-and-vehicles',
      name: 'Mounts and Vehicles',
      url: '/api/2014/equipment-categories/mounts-and-vehicles',
    },
    vehicle_category: 'Waterborne Vehicles',
    cost: {
      quantity: 30000,
      unit: 'gp',
    },
    speed: {
      quantity: 4,
      unit: 'mph',
    },
    url: '/api/2014/equipment/galley',
  },
  keelboat: {
    index: 'keelboat',
    name: 'Keelboat',
    equipment_category: {
      index: 'mounts-and-vehicles',
      name: 'Mounts and Vehicles',
      url: '/api/2014/equipment-categories/mounts-and-vehicles',
    },
    vehicle_category: 'Waterborne Vehicles',
    cost: {
      quantity: 3000,
      unit: 'gp',
    },
    speed: {
      quantity: 1,
      unit: 'mph',
    },
    desc: [
      "Keelboats and rowboats are used on lakes and rivers. If going downstream, add the speed of the current (typically 3 miles per hour) to the speed of the vehicle. These vehicles can't be rowed against any significant current, but they can be pulled upstream by draft animals on the shores. A rowboat weighs 100 pounds, in case adventurers carry it over land.",
    ],
    url: '/api/2014/equipment/keelboat',
  },
  longship: {
    index: 'longship',
    name: 'Longship',
    equipment_category: {
      index: 'mounts-and-vehicles',
      name: 'Mounts and Vehicles',
      url: '/api/2014/equipment-categories/mounts-and-vehicles',
    },
    vehicle_category: 'Waterborne Vehicles',
    cost: {
      quantity: 10000,
      unit: 'gp',
    },
    speed: {
      quantity: 3,
      unit: 'mph',
    },
    url: '/api/2014/equipment/longship',
  },
  rowboat: {
    index: 'rowboat',
    name: 'Rowboat',
    equipment_category: {
      index: 'mounts-and-vehicles',
      name: 'Mounts and Vehicles',
      url: '/api/2014/equipment-categories/mounts-and-vehicles',
    },
    vehicle_category: 'Waterborne Vehicles',
    cost: {
      quantity: 50,
      unit: 'gp',
    },
    speed: {
      quantity: 1.5,
      unit: 'mph',
    },
    desc: [
      "Keelboats and rowboats are used on lakes and rivers. If going downstream, add the speed of the current (typically 3 miles per hour) to the speed of the vehicle. These vehicles can't be rowed against any significant current, but they can be pulled upstream by draft animals on the shores. A rowboat weighs 100 pounds, in case adventurers carry it over land.",
    ],
    url: '/api/2014/equipment/rowboat',
  },
  'sailing-ship': {
    index: 'sailing-ship',
    name: 'Sailing ship',
    equipment_category: {
      index: 'mounts-and-vehicles',
      name: 'Mounts and Vehicles',
      url: '/api/2014/equipment-categories/mounts-and-vehicles',
    },
    vehicle_category: 'Waterborne Vehicles',
    cost: {
      quantity: 10000,
      unit: 'gp',
    },
    speed: {
      quantity: 2,
      unit: 'mph',
    },
    url: '/api/2014/equipment/sailing-ship',
  },
  warship: {
    index: 'warship',
    name: 'Warship',
    equipment_category: {
      index: 'mounts-and-vehicles',
      name: 'Mounts and Vehicles',
      url: '/api/2014/equipment-categories/mounts-and-vehicles',
    },
    vehicle_category: 'Waterborne Vehicles',
    cost: {
      quantity: 25000,
      unit: 'gp',
    },
    speed: {
      quantity: 2.5,
      unit: 'mph',
    },
    url: '/api/2014/equipment/warship',
  },
} as const;

export type { Equipment2014 };
