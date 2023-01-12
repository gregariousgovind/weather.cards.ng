import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { WeatherCards } from './modules/weather-cards/weather-cards.component';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [AppComponent, WeatherCards],
  bootstrap: [AppComponent],
})
export class AppModule {}
