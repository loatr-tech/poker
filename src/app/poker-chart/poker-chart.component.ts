import { Component, Input, OnInit } from '@angular/core';
import { POKER_SIZE, POKER_ORDER, ACTION } from '../_utils/poker-constants';
import { PokerHands } from '../_models/poker-hands';
@Component({
  selector: 'pk-poker-chart',
  templateUrl: './poker-chart.component.html',
  styleUrls: ['./poker-chart.component.scss']
})
export class PokerChartComponent implements OnInit {
  @Input() range: any;

  chartMatrix: PokerHands[][] = [];
  ACTION = ACTION;

  constructor() { }

  ngOnInit(): void {
    const chartMatrix: any[] = [];
    for (let i = 0; i < POKER_SIZE.length; i++) {
      const row = [];
      const firstCard = POKER_SIZE[i];
      for (let j = 0; j < POKER_SIZE.length; j++) {
        const secondCard = POKER_SIZE[j];
        const suit = j > i ? 's' : (j < i ? 'o' : '');
        const pair = j > i ? `${firstCard}${secondCard}` : `${secondCard}${firstCard}`;
        row.push(new PokerHands(`${pair}${suit}`));
      }
      chartMatrix.push(row);
    }

    console.log(this.range.hands);
    this.range[0].hands.forEach((element: string) => {
      const [firstCard, secondCard, suit] = element.split('');
      const firstCardPos = POKER_ORDER[firstCard];
      const secondCardPos = POKER_ORDER[secondCard];
      if (suit === 's') {
        chartMatrix[firstCardPos][secondCardPos].action = ACTION.TWO_BET;
      } else {
        chartMatrix[secondCardPos][firstCardPos].action = ACTION.TWO_BET;
      }
    });
    this.chartMatrix = chartMatrix;
  }


}
