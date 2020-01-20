import { reducer, initialState } from './user-interface.reducer';
import { Resize } from '../actions/user-interface.actions';

describe('UserInterface Reducer', () => {
  describe('window resize action', () => {
    it('should set width and height', () => {
      const action = new Resize({width: 240, height: 320});

      const result = reducer(initialState, action);

      expect(result.width).toBe(240);
      expect(result.height).toBe(320);
    });
  });
});
