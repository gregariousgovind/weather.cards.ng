import { Component, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'weather-cards',
  templateUrl: './weather-cards.component.html',
  styleUrls: ['./weather-cards.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class WeatherCards {
  @Input() cards;
}
