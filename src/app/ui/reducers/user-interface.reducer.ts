import {
  UserInterfaceActions,
  UserInterfaceActionTypes,
} from '../actions/user-interface.actions';

export const userInterfaceFeatureKey = 'userInterface';

export interface State {
  overlay: boolean;
  dialog: boolean;
  width: number;
  height: number;
}

export const initialState: State = {
  overlay: false,
  dialog: false,
  width: 640,
  height: 480,
};

export function reducer(
  state = initialState,
  action: UserInterfaceActions,
): State {
  switch (action.type) {
    case UserInterfaceActionTypes.Resize:
      return {
        ...state,
        width: action.payload.width,
        height: action.payload.height,
      };

    default:
      return state;
  }
}
