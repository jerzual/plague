import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PartySelectorComponent } from './party-selector.component';

describe('PartySelectorComponent', () => {
  let component: PartySelectorComponent;
  let fixture: ComponentFixture<PartySelectorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PartySelectorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PartySelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
