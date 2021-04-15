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
  options: [
    {
      label: 'RFI',
      range: [
        {
          action: ACTION.TWO_BET,
          hands: ['22','33','44','55','66','77','88','99','AQo','AKo','AA','AKs','AQs','AJs','ATs','A9s','A5s','KK','QQ','JJ','TT','KTs','QTs','JTs','87s','98s','T9s','QJs','KJs','KQs','K9s','Q9s','J9s','AJo','KQo','A4s','A6s','A7s','A8s','76s','KJo','ATo','65s','QJo','K8s','T8s','97s','54s','A3s','A2s','K7s','A9o','KTo','QTo','JTo','64s','75s','86s','Q8s','J8s','K2s','K6s','K5s','K4s','K3s','Q7s','Q6s','Q5s','Q4s','Q3s','Q2s','J6s','T6s','96s','J7s','T7s','74s','85s','53s','43s','K9o','K8o','K7o','98o','T8o','J8o','Q8o','Q9o','J9o','T9o','A8o','A7o','A6o','A5o','A4o','A3o','A2o','97o','87o','76o'],
        },
        {
          action: ACTION.BLUFF,
          hands: ['J6o','T6o','96o','86o','Q5o','Q4o','Q3o','Q2o','K3o','K2o','J2s','J3s','J4s','T4s','94s','84s','74s','85s','95s','T5s','63s','53s','43s'],
        },
        {
          action: ACTION.LIMP,
          hands: ['22','33','44','55','66','77','AA','AKo','KK','A9s','A8s','A7s','A6s','A5s','A4s','A3s','A2s','K2s','Q2s','Q3s','K3s','K4s','K5s','K6s','K7s','K8s','K9s','KTs','QTs','Q9s','Q8s','Q7s','Q6s','Q5s','Q4s','J5s','J6s','J7s','J8s','J9s','JTs','T9s','98s','87s','76s','65s','54s','64s','75s','86s','96s','T6s','T7s','T8s','97s','32s','65o','76o','87o','97o','T7o','J7o','Q7o','K7o','A8o','A9o','KTo','QJo','JTo','T9o','98o','T8o','J8o','Q8o','K8o','K9o','Q9o','J9o','QTo','A7o','A6o','A5o','A4o','A3o','A2o','K4o','K5o','K6o','Q6o'],
        }
      ]
    }
  ],
};

const BB = {
  label: 'BB',
  options: [
    {
      label: 'Facing RFI',
      range: [
        {
          action: ACTION.CALL,
          hands: ['22','33','44','55','66','77','88','99','AJs','ATs','A9s','A8s','A7s','A6s','A5s','A4s','A3s','A2s','K5s','K6s','K7s','K8s','K9s','KTs','KJs','KQs','QJs','QTs','Q9s','Q8s','Q7s','J7s','T7s','97s','87s','TT','JTo','QTo','KTo','AJo','AQo','AKo','ATo','KQo','KJo','QJo','JJ','JTs','J9s','J8s','T8s','98s','T9s','96s']
        },
        {
          action: ACTION.THREE_BET,
          hands: ['AA','AKs','AQs','KK','QQ']
        },
        {
          action: ACTION.BLUFF,
          hands: ['86s','76s','75s','65s','64s','54s','43s']
        }
      ]
    }
  ],
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
