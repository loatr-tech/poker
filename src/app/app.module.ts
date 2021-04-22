import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatSelectModule } from '@angular/material/select';
import { MatTabsModule } from '@angular/material/tabs';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSnackBarModule } from '@angular/material/snack-bar';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PokerChartComponent } from './poker-chart/poker-chart.component';
import { PokerTrainingModalComponent } from './poker-training-modal/poker-training-modal.component';
import { PokerCardComponent } from './poker-card/poker-card.component';

@NgModule({
  declarations: [
    AppComponent,
    PokerChartComponent,
    PokerTrainingModalComponent,
    PokerCardComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTabsModule,
    MatSelectModule,
    MatButtonModule,
    MatDialogModule,
    MatSnackBarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
