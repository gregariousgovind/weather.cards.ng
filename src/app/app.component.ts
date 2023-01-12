import { Component } from '@angular/core';

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
        max: {
          value: 93,
          icon: 'fire',
        },
        min: {
          value: 61,
          icon: 'fire',
        },
      },
    },
    {
      type: 'scale',
      title: 'temperature',
      data: {
        value: 21,
        valueType: 'temp', // configure to add °C after value
        max: {
          value: 26,
          icon: 'fire',
        },
        min: {
          value: 18,
          icon: 'fire',
        },
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
