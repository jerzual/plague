import { Component, OnInit } from '@angular/core';
import { trigger, transition, state, style, animate } from '@angular/animations';

@Component({
  selector: 'app-overlay',
  templateUrl: './overlay.component.html',
  styleUrls: ['./overlay.component.css'],
  animations: [trigger('overlayAnimation',  [

    state('open', style({
      opacity: 1,
    })),
    state('closed', style({
      opacity: 0.5,
    })),
    transition('* => closed', [
      animate('1s')
    ]),
    transition('* => open', [
      animate('0.5s')
    ]),
  ])]
})
export class OverlayComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
