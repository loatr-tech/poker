import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { PokerHands } from '../_models/poker-hands';
import { ACTION, POKER_SIZE, actionText, POKER_SUITS } from '../_utils/poker-constants';

@Component({
  selector: 'pk-poker-training-modal',
  templateUrl: './poker-training-modal.component.html',
  styleUrls: ['./poker-training-modal.component.scss']
})
export class PokerTrainingModalComponent implements OnInit {
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
        text: actionText[ACTION.NULL]
      }
    ];
  }

  ngOnInit(): void {
    this._randomHandsGenerator();
    this._getCurrentHand();
  }

  chooseAction(action: any) {
    console.log(action);
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
        },
        secondCard: {
          size: secondSize,
          suit: currentSuits[1],
        }
      }
    } else {
      this.currentHands = {};
    }
  }
}
