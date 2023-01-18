import { Component } from '@angular/core';

const cardsData = [
  {
    type: 'scale',
    title: 'air quality',
    data: {
      value: 72,
      max: {
        value: 93,
        icon: 'upArrow',
        iconSize: 'medium',
      },
      min: {
        value: 61,
        icon: 'downArrow',
        iconSize: 'medium',
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
        iconSize: 'small',
      },
      min: {
        value: 18,
        icon: 'snowflake',
        iconSize: 'small',
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

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  public cards: any[];

  ngOnInit() {
    this.cards = cardsData;
  }
}

// const apiCardsData = [
//   {
//     cards: 5,
//     data: [
//       { name: 'Air Quality', value: 72, hi: 93, lo: 61 },
//       { name: 'Temperature', value: 21, hi: 25, lo: 18, format: 'C' },
//       { name: 'Audio', value: 5, total: 10 },
//       { name: 'Displays', value: 10, total: 16, on_time: '21:00' },
//       { name: 'Lighting', value: 32, total: 43 },
//     ],
//   },
// ];
// this.http
//   .get('https://637ae5e510a6f23f7f9aacbc.mockapi.io/dashboard')
//   .subscribe((res) => {
//     this.cards = res[0].data;
//   });
