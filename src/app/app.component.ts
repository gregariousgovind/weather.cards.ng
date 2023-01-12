import { Component, ElementRef, ViewChild } from '@angular/core';

const cards = [
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
  public cardsData: string;

  @ViewChild('cardsData', { static: true }) textarea: ElementRef;

  ngOnInit() {
    this.cards = cards;
    this.cardsData = JSON.stringify({ cards });
  }

  ngAfterViewInit() {
    this.textarea.nativeElement.addEventListener('ngModelChange', (event) => {
      try {
        this.cards = JSON.parse(event);
      } catch (e) {
        alert(e);
      }
    });
  }
}
