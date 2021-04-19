import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { PokerHands } from '../_models/poker-hands';
import { POKER_SIZE } from '../_utils/poker-constants';

@Component({
  selector: 'pk-poker-training-modal',
  templateUrl: './poker-training-modal.component.html',
  styleUrls: ['./poker-training-modal.component.scss']
})
export class PokerTrainingModalComponent implements OnInit {
  chartMatrix: PokerHands[][] = [];
  trainingIndex = 0;

  constructor(
    @Inject(MAT_DIALOG_DATA) private _data: PokerHands[][]
  ) {
    this.chartMatrix = this._data;
  }

  ngOnInit(): void {
    this._randomHandsGenerator();
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

    console.log(randomHands);
  }
}
