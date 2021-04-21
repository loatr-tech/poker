import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { PokerHands } from '../_models/poker-hands';
import { ACTION, POKER_SIZE, actionText, POKER_SUITS, POKER_ORDER } from '../_utils/poker-constants';

@Component({
  selector: 'pk-poker-training-modal',
  templateUrl: './poker-training-modal.component.html',
  styleUrls: ['./poker-training-modal.component.scss']
})
export class PokerTrainingModalComponent implements OnInit {
  ACTION = ACTION;
  chartMatrix: PokerHands[][] = [];
  randomHands: string[] = [];
  actions: any[] = [];
  currentHands: any;
  trainingIndex = 0;

  constructor(
    @Inject(MAT_DIALOG_DATA) private _data: any
  ) {
    this.chartMatrix = this._data.hands;
    this.actions = [
      ...this._data.labels,
      {
        action: ACTION.NULL,
        text: this._data.isRFI ? actionText[ACTION.NULL] : 'Fold ealier'
      }
    ];
  }

  ngOnInit(): void {
    this._randomHandsGenerator();
    this._getCurrentHand();
  }

  chooseAction(action: any) {
    const accurateAction = this.chartMatrix[this.currentHands.firstCard.index][this.currentHands.secondCard.index];
    console.log(action, accurateAction);
    if (action.action !== accurateAction.action) {
      alert(`You're so fish! You should ${actionText[accurateAction.action]}`);
    }

    // Go to next hand
    if (this.trainingIndex < this.randomHands.length - 1) {
      this.trainingIndex++;
      this._getCurrentHand();
    }
  }

  private _randomHandsGenerator() {
    const randomHands: string[] = [];

    for (let i = 0; i < POKER_SIZE.length; i++) {
      const row = [];
      const firstCard = POKER_SIZE[i];
      for (let j = 0; j < POKER_SIZE.length; j++) {
        const secondCard = POKER_SIZE[j];
        const suit = j > i ? 's' : (j < i ? 'o' : '');
        const pair = j > i ? `${firstCard}${secondCard}` : `${secondCard}${firstCard}`;
        randomHands.push(`${pair}${suit}`);
      }
    }

    // Shuffle
    for (let i = randomHands.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [randomHands[i], randomHands[j]] = [randomHands[j], randomHands[i]];
    }

    this.randomHands = randomHands;
  }

  private _getCurrentHand() {
    if (this.randomHands.length) {
      const [firstSize, secondSize, suit] = this.randomHands[this.trainingIndex].split('');
      const pokerSuits = [...POKER_SUITS];
      // Shuffle
      for (let i = pokerSuits.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [pokerSuits[i], pokerSuits[j]] = [pokerSuits[j], pokerSuits[i]];
      }
      let currentSuits: any[] = [];
      if (suit === 's') {
        currentSuits = [pokerSuits[0], pokerSuits[0]];
      } else {
        currentSuits = [pokerSuits[0], pokerSuits[1]];
      }
      this.currentHands = {
        firstCard: {
          size: firstSize,
          suit: currentSuits[0],
          index: POKER_ORDER[firstSize],
        },
        secondCard: {
          size: secondSize,
          suit: currentSuits[1],
          index: POKER_ORDER[secondSize],
        }
      }
    } else {
      this.currentHands = {};
    }
  }
}
