import { Component } from '@angular/core';
import { JL_PREFLOP } from './_utils/jonathan-little-preflop';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  preflopStrategy = JL_PREFLOP;
}
