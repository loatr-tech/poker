import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { POKER_SIZE, POKER_ORDER, ACTION, actionText } from '../_utils/poker-constants';
import { PokerHands } from '../_models/poker-hands';
import { PokerTrainingModalComponent } from '../poker-training-modal/poker-training-modal.component';


@Component({
  selector: 'pk-poker-chart',
  templateUrl: './poker-chart.component.html',
  styleUrls: ['./poker-chart.component.scss']
})
export class PokerChartComponent implements OnInit {
  @Input() range: any;

  ACTION = ACTION;

  chartMatrix: PokerHands[][] = [];
  labels: any[] = [];

  constructor(private _dialog: MatDialog) { }

  ngOnInit(): void {
    const chartMatrix: any[] = [];
    const labels: any[] = [];

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

    this.range.forEach(({ action, hands }: { action: ACTION, hands: string[] }) => {
      labels.push({
        action,
        text: actionText[action]
      });
      hands.forEach((element: string) => {
        const [firstCard, secondCard, suit] = element.split('');
        const firstCardPos = POKER_ORDER[firstCard];
        const secondCardPos = POKER_ORDER[secondCard];
        if (suit === 's') {
          chartMatrix[firstCardPos][secondCardPos].action = action;
        } else {
          chartMatrix[secondCardPos][firstCardPos].action = action;
        }
      });
    });

    this.chartMatrix = chartMatrix;
    this.labels = labels;
  }

  startTraining() {
    this._dialog.open(PokerTrainingModalComponent, {
      data: {
        hands: this.chartMatrix,
        labels: this.labels,
      }
    });
  }

}
