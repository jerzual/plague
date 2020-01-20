import { Component, OnInit, Input } from '@angular/core';
import {
  trigger,
  animate,
  transition,
  state,
  style,
} from '@angular/animations';

@Component({
  selector: 'app-loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.css'],
  animations: [
    trigger('loadingAnimation', [
      state(
        'true',
        style({
          opacity: 1,
          transform: 'scale(1)',
        }),
      ),
      state(
        'false',
        style({
          opacity: 0,
          transform: 'scale(2)',
        }),
      ),
      transition('* => true', [animate('1s')]),
      transition('* => false', [animate('0.5s')]),
    ]),
  ],
})
export class LoadingComponent {
  @Input() public loading = true;

  public shown = true;

  constructor() {}

  handleAnimationEnd() {
    this.shown = this.loading;
  }
}
