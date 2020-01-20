import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-widgets-container',
  templateUrl: './widgets-container.component.html',
  styleUrls: ['./widgets-container.component.css'],
})
export class WidgetsContainerComponent implements OnInit {
  public widgets: any[] = [];

  constructor() {}

  ngOnInit() {}
}
