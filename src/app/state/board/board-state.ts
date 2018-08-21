export interface BoardState {
  colors: {
    primary: string;
    secondary: string;
  };
  size: {
    horizontal: number;
    vertical: number;
  };
  markers: {
    horizontal: string[],
    vertical: number[]
  };
  layout: any;
}

const defaultState: BoardState = {
  colors: {
    primary: 'lightyellow',
    secondary: 'black'
  },
  size: {
    horizontal: 8,
    vertical: 8
  },
  markers: {
    horizontal: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'],
    vertical: [1, 2, 3, 4, 5, 6, 7, 8]
  },
  layout: null,
};

export const BOARD_UPDATE_COLORS = '[board] update colors';
export const BOARD_UPDATE_LAYOUT = '[board] update layout';
export const BOARD_RESET = '[board] reset';
const STATE_INIT = '@ngrx/store/init';

const types = {
  BOARD_RESET,
};
export const boardActions = {
  updateColors: (payload: any) => {
    return {type: BOARD_UPDATE_COLORS, payload};
  },
  updateLayout: (payload: any) => {
    return {type: BOARD_UPDATE_LAYOUT, payload};
  },
  reset: (payload: any) => {
    return {type: BOARD_RESET, payload};
  },
  types,
};

export function BoardReducer(state: BoardState = defaultState, action: any) {
  console.log('action.type', action.type);
  if (!action.type.includes('[board]') && !action.type.includes(STATE_INIT)) {
    return state;
  }
  switch (action.type) {
    case STATE_INIT:
      return {...state, ...{layout: createSquares(defaultState.size.horizontal * defaultState.size.vertical)}, type: action.type};
    case BOARD_UPDATE_COLORS:
      return {...state, ...{colors: action.payload}, type: action.type};
    case BOARD_UPDATE_LAYOUT:
      console.log('layout', action.payload);
      return {...state, ...{layout: action.payload}, type: action.type};
    case BOARD_RESET:
      return {...defaultState};
    default:
      return {...state, type: action.type};
  }
}


function createSquares(size) {
  const array = [];
  for (let i = 0; i < size; i++) {
    array.push({
      i,
      isPrimary: isPrimary(i),
      modulus: i % 8,
      level: Math.floor(i / 8) + 1,
      letter: defaultState.markers.horizontal[i % 8],
      piece: null,
    });
  }
  return array;
}


function isPrimary(number) {
  const oddV = number % 2 === 0;
  const oddH = Math.floor((number / 8)) % 2 === 0;
  return (oddV && oddH) || !oddV && !oddH;
}
