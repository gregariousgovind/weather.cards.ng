import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { WeatherCards } from './components/weather-cards/weather-cards.component';
import { Card } from './components/card/card.component';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [AppComponent, WeatherCards, Card],
  bootstrap: [AppComponent],
})
export class AppModule {}
