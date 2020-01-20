import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-root',
  templateUrl: './admin-root.component.html',
  styleUrls: ['./admin-root.component.css'],
})
export class AdminRootComponent implements OnInit {
  public binding = 42;
  constructor() {}

  ngOnInit() {}
}
