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
    {
      type: 'scale',
      title: 'temperature',
      data: {
        value: 21,
        valueType: 'temp', // configure to add °C after value
        maxValue: 26,
        minValue: 18,
      },
    },
    {
      type: 'status',
      title: 'audio',
      data: {
        value: 2,
        status: 'playing',
        fieldName: 'total',
        fieldValue: 5,
      },
    },
    {
      type: 'status',
      title: 'displays',
      data: {
        value: 10,
        valueOutOf: 16,
        fieldName: 'on time',
        fieldValue: '00:00',
      },
    },
    {
      type: 'status',
      title: 'lighting',
      data: {
        value: 32,
        status: 'on',
        fieldName: 'total',
        fieldValue: 43,
      },
    },
  ];
}
