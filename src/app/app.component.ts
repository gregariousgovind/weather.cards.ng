import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  cards = [
    {
      type: 'scale',
      title: 'air quality',
      data: {
        value: 72,
        maxValue: 93,
        minValue: 61,
      },
    },
  ];
}
