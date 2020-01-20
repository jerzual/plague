import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PartyMemberComponent } from './party-member.component';

describe('PartyMemberComponent', () => {
  let component: PartyMemberComponent;
  let fixture: ComponentFixture<PartyMemberComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PartyMemberComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PartyMemberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
