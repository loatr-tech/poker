export const POKER_SIZE = ['A','K','Q','J','T','9','8','7','6','5','4','3','2'];
export const POKER_ORDER: any = {
  'A': 0,
  'K': 1,
  'Q': 2,
  'J': 3,
  'T': 4,
  '9': 5,
  '8': 6,
  '7': 7,
  '6': 8,
  '5': 9,
  '4': 10,
  '3': 11,
  '2': 12,
};

export const POKER_SUITS = [
  {
    symbol: '♦',
    color: 'red'
  },
  {
    symbol: '♥',
    color: 'red'
  },
  {
    symbol: '♣',
    color: 'black'
  },
  {
    symbol: '♠',
    color: 'black'
  },
];

export enum ACTION {
  LIMP = 'LIMP',
  CALL = 'CALL',
  FOLD = 'FOLD',
  BLUFF = 'BLUFF',
  TWO_BET = 'TWO_BET',
  THREE_BET = 'THREE_BET',
  FOUR_BET = 'FOUR_BET',
  NULL = 'NULL'
};

export const actionText = {
  [ACTION.LIMP]: 'Limp',
  [ACTION.CALL]: 'Call',
  [ACTION.FOLD]: 'Fold',
  [ACTION.BLUFF]: 'Bluff',
  [ACTION.TWO_BET]: 'Two bet',
  [ACTION.THREE_BET]: 'Three bet',
  [ACTION.FOUR_BET]: 'Four bet',
  [ACTION.NULL]: 'Fold',
}

export enum POSITION {
  'UTG',
  'UTG1',
  'UTG2',
  'LJ',
  'HJ',
  'CO',
  'BTN',
  'SB',
  'BB'
}
