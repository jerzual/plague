import { TestBed } from '@angular/core/testing';

import { GameService } from './game.service';
import { provideMockStore } from '@ngrx/store/testing';
import {initialState} from '../reducers/game.reducer';

describe('GameService', () => {
  beforeEach(() =>
    TestBed.configureTestingModule({
      providers: [provideMockStore({ initialState })],
    }),
  );

  it('should be created', () => {
    const service: GameService = TestBed.get(GameService);
    expect(service).toBeTruthy();
  });
});
