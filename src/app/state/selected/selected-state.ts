export interface SelectedState {
  square: any;
  lastSquare: any;
}

const defaultState: SelectedState = {
  square: null,
  lastSquare: null,
};

export const SELECTED_UPDATE_SQUARE = '[selected] update square';
export const SELECTED_UPDATE_LAST_SQUARE = '[selected] update last updated';
export const SELECTED_RESET = '[selected] reset';
const STATE_INIT = '@ngrx/store/init';

const types = {
  SELECTED_UPDATE_SQUARE,
  SELECTED_UPDATE_LAST_SQUARE,
  SELECTED_RESET,
};
export const selectedActions = {
  updateSelected: (payload: any) => {
    return {type: SELECTED_UPDATE_SQUARE, payload};
  },
  updateLastSquare: (payload: any) => {
    return {type: SELECTED_UPDATE_LAST_SQUARE, payload};
  },
  reset: (payload: any) => {
    return {type: SELECTED_RESET, payload};
  },
  types,
};

export function SelectedReducer(state: SelectedState = defaultState, action: any) {
  console.log('action.type', action.type);
  if (!action.type.includes('[selected]') && !action.type.includes(STATE_INIT)) {
    return state;
  }
  switch (action.type) {
    case SELECTED_UPDATE_SQUARE:
      return {...state, ...{ square: action.payload}, type: action.type};
    case SELECTED_UPDATE_LAST_SQUARE:
      return {...state, ...{ lastSquare: action.payload}, type: action.type};
    case SELECTED_RESET:
      return {...defaultState};
    default:
      return {...state, type: action.type};
  }
}

