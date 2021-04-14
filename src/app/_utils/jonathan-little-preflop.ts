import { POSITION, ACTION } from "./poker-constants";

const UTG = {
  label: 'UTG',
  options: [
    {
      label: 'RFI',
      range: [
        {
          action: ACTION.TWO_BET,
          hands: ['66','77','88','99','AQo','AKo','AA','AKs','AQs','AJs','ATs','A9s','A5s','KK','QQ','JJ','TT','KTs','QTs','JTs','98s','T9s','QJs','KJs','KQs'],
        }
      ]
    }
  ]
};

const UTC_1 = {
  label: 'UTG+1',
  options: [
    {
      label: 'RFI',
      range: [
        {
          action: ACTION.TWO_BET,
          hands: ['66','77','88','99','AQo','AKo','AA','AKs','AQs','AJs','ATs','A9s','A5s','KK','QQ','JJ','TT','KTs','QTs','JTs','98s','T9s','QJs','KJs','KQs','K9s','Q9s','J9s','AJo','KQo','A4s','A6s','A7s','A8s','87s'],
        }
      ]
    }
  ],
};

const UTC_2 = {
  label: 'UTG+2',
  options: [
    {
      label: 'RFI',
      range: [
        {
          action: ACTION.TWO_BET,
          hands: ['55','66','77','88','99','AQo','AKo','AA','AKs','AQs','AJs','ATs','A9s','A5s','KK','QQ','JJ','TT','KTs','QTs','JTs','87s','98s','T9s','QJs','KJs','KQs','K9s','Q9s','J9s','AJo','KQo','A4s','A6s','A7s','A8s','76s','A3s','A2s'],
        }
      ]
    }
  ],
};

const LJ = {
  label: 'LJ',
  options: [
    {
      label: 'RFI',
      range: [
        {
          action: ACTION.TWO_BET,
          hands: ['44','55','66','77','88','99','AQo','AKo','AA','AKs','AQs','AJs','ATs','A9s','A5s','KK','QQ','JJ','TT','KTs','QTs','JTs','87s','98s','T9s','QJs','KJs','KQs','K9s','Q9s','J9s','AJo','KQo','A4s','A6s','A7s','A8s','76s','KJo','ATo','65s','A3s','A2s'],
        }
      ]
    }
  ],
};

const HJ = {
  label: 'HJ',
  options: [
    {
      label: 'RFI',
      range: [
        {
          action: ACTION.TWO_BET,
          hands: ['22','33','44','55','66','77','88','99','AQo','AKo','AA','AKs','AQs','AJs','ATs','A9s','A5s','KK','QQ','JJ','TT','KTs','QTs','JTs','87s','98s','T9s','QJs','KJs','KQs','K9s','Q9s','J9s','AJo','KQo','A4s','A6s','A7s','A8s','76s','KJo','ATo','65s','QJo','K8s','T8s','97s','54s','A3s','A2s'],
        }
      ]
    }
  ],
};

const CO = {
  label: 'CO',
  options: [
    {
      label: 'RFI',
      range: [
        {
          action: ACTION.TWO_BET,
          hands: ['22','33','44','55','66','77','88','99','AQo','AKo','AA','AKs','AQs','AJs','ATs','A9s','A5s','KK','QQ','JJ','TT','KTs','QTs','JTs','87s','98s','T9s','QJs','KJs','KQs','K9s','Q9s','J9s','AJo','KQo','A4s','A6s','A7s','A8s','76s','KJo','ATo','65s','QJo','K8s','T8s','97s','54s','A3s','A2s','K7s','A9o','KTo','QTo','JTo','64s','75s','86s','Q8s','J8s'],
        }
      ]
    }
  ],
};

const BTN = {
  label: 'BTN',
  options: [
    {
      label: 'RFI',
      range: [
        {
          action: ACTION.TWO_BET,
          hands: ['22','33','44','55','66','77','88','99','AQo','AKo','AA','AKs','AQs','AJs','ATs','A9s','A5s','KK','QQ','JJ','TT','KTs','QTs','JTs','87s','98s','T9s','QJs','KJs','KQs','K9s','Q9s','J9s','AJo','KQo','A4s','A6s','A7s','A8s','76s','KJo','ATo','65s','QJo','K8s','T8s','97s','54s','A3s','A2s','K7s','A9o','KTo','QTo','JTo','64s','75s','86s','Q8s','J8s','K2s','K6s','K5s','K4s','K3s','Q7s','Q6s','Q5s','Q4s','Q3s','Q2s','J6s','T6s','96s','J7s','T7s','74s','85s','53s','43s','K9o','K8o','K7o','98o','T8o','J8o','Q8o','Q9o','J9o','T9o','A8o','A7o','A6o','A5o','A4o','A3o','A2o','97o','87o','76o'],
        }
      ]
    }
  ],
};

const SB = {
  label: 'SB',
  options: [],
};

const BB = {
  label: 'BB',
  options: [],
};

export const JL_PREFLOP = [
  UTG,
  UTC_1,
  UTC_2,
  LJ,
  HJ,
  CO,
  BTN,
  SB,
  BB,
]
