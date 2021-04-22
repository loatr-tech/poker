import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { PokerHands } from '../_models/poker-hands';
import { ACTION, POKER_SIZE, actionText, POKER_SUITS, POKER_ORDER } from '../_utils/poker-constants';

@Component({
  selector: 'pk-poker-training-modal',
  templateUrl: './poker-training-modal.component.html',
  styleUrls: ['./poker-training-modal.component.scss']
})
export class PokerTrainingModalComponent implements OnInit {
  ACTION = ACTION;
  title: string = 'Training';
  chartMatrix: PokerHands[][] = [];
  randomHands: string[] = [];
  actions: any[] = [];
  currentHands: any;
  trainingIndex = 0;
  wrongDecision = 0;

  constructor(
    @Inject(MAT_DIALOG_DATA) private _data: any,
    private _snackBar: MatSnackBar
  ) {
    this.title = this._data.title;
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
    if (action.action !== accurateAction.action) {
      this.wrongDecision++;
      this._snackBar.open(
        `You're so fish! You should ${actionText[accurateAction.action]} ${accurateAction.hands}`,
        'Got it',
        {
          horizontalPosition: 'center',
          verticalPosition: 'top',
        }
      );
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
      let firstIndex, secondIndex;
      if (suit === 's') {
        currentSuits = [pokerSuits[0], pokerSuits[0]];
        firstIndex = POKER_ORDER[firstSize];
        secondIndex = POKER_ORDER[secondSize];
      } else {
        currentSuits = [pokerSuits[0], pokerSuits[1]];
        firstIndex = POKER_ORDER[secondSize];
        secondIndex = POKER_ORDER[firstSize];
      }
      this.currentHands = {
        firstCard: {
          size: firstSize,
          suit: currentSuits[0],
          index: firstIndex,
        },
        secondCard: {
          size: secondSize,
          suit: currentSuits[1],
          index: secondIndex,
        }
      }
    } else {
      this.currentHands = {};
    }
  }
}
