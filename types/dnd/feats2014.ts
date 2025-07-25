// Data export
export const feats2014 = {
  grappler: {
    index: 'grappler',
    name: 'Grappler',
    prerequisites: [
      {
        ability_score: {
          index: 'str',
          name: 'STR',
          url: '/api/2014/ability-scores/str',
        },
        minimum_score: 13,
      },
    ],
    desc: [
      'You\u2019ve developed the Skills necessary to hold your own in close--quarters Grappling. You gain the following benefits:',
      '- You have advantage on Attack Rolls against a creature you are Grappling.',
      '- You can use your action to try to pin a creature Grappled by you. To do so, make another grapple check. If you succeed, you and the creature are both Restrained until the grapple ends.',
    ],
    url: '/api/2014/feats/grappler',
  },
} as const;
