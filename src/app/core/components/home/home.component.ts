import { Component, OnInit } from '@angular/core';
import { v4 } from 'uuid';
import {
  trigger,
  transition,
  style,
  animate,
  state,
} from '@angular/animations';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  animations: [
    trigger('titleAnimation', [
      transition(':enter', [
        style({ transform: 'translateY(-100%)' }),
        animate('.3s ease-in-out', style({ transform: 'translateY(0)' })),
      ]),
      transition(':leave', [
        style({ transform: 'translateY(-100%)' }),
        animate('.3s ease-in-out'),
      ]),
    ]),
  ],
})
export class HomeComponent implements OnInit {
  public newGameKey: string;

  constructor() {}

  ngOnInit() {
    this.newGameKey = this.getGameKey();
  }

  getGameKey() {
    return v4();
  }
}
