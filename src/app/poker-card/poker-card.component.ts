import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'pk-poker-card',
  templateUrl: './poker-card.component.html',
  styleUrls: ['./poker-card.component.scss']
})
export class PokerCardComponent implements OnInit {

  @Input() card: any = {};

  get pokerSize() {
    if (this.card.size === 'T') return '10';
    else return this.card.size;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
