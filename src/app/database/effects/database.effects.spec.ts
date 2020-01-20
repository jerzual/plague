import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';

import { DatabaseEffects } from './database.effects';

describe('DatabaseEffects', () => {
  let actions$: Observable<any>;
  let effects: DatabaseEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        DatabaseEffects,
        provideMockActions(() => actions$)
      ]
    });

    effects = TestBed.get<DatabaseEffects>(DatabaseEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
