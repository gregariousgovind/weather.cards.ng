import { Component, Input } from '@angular/core';

@Component({
  selector: 'weather-cards',
  templateUrl: './weather-cards.component.html',
  styleUrls: ['./weather-cards.component.scss'],
})
export class WeatherCards {
  @Input() cards;
}
