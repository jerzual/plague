import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {
  trigger,
  transition,
  style,
  query,
  animateChild,
  group,
  animate,
} from '@angular/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    trigger('routerAnimations', [
      transition('* <=> *', [
        query(':leave', animateChild(), { optional: true }),
        /* order */
        /* 1 */
        query(':enter, :leave', style({ position: 'fixed', width: '100%' }), {
          optional: true,
        }),
        /* 2 */ group([
          // block executes in parallel
          query(
            ':enter',
            [
              style({ transform: 'translateX(100%)' }),
              animate(
                '0.5s ease-in-out',
                style({ transform: 'translateX(0%)' }),
              ),
            ],
            { optional: true },
          ),
          query(
            ':leave',
            [
              style({ transform: 'translateX(0%)' }),
              animate(
                '0.5s ease-in-out',
                style({ transform: 'translateX(-100%)' }),
              ),
            ],
            { optional: true },
          ),
        ]),
        query(':enter', animateChild(), { optional: true }),
      ]),
    ]),
  ],
})
export class AppComponent implements OnInit {
  public isLoading = true;
  title = 'azimut-angular';

  ngOnInit() {
    setTimeout(() => {
      this.isLoading = false;
    }, 300);
  }
}
