export interface PiecesState {
  all: any;
  types: any;
}

const defaultState: PiecesState = {
  all: [],
  types: {
    pawn: '&#9817;',
    rook: '&#9814;',
    knight: '&#9816;',
    bishop: '&#9815;',
    queen: '&#9813;',
    king: '&#9812;',
  },
};

export const PIECES_UPDATE_PIECES = '[pieces] update pieces';
export const PIECES_RESET = '[pieces] reset';
const STATE_INIT = '@ngrx/store/init';

const types = {
  PIECES_RESET,
};
export const piecesActions = {
  updatePieces: (payload: any) => {
    return {type: PIECES_UPDATE_PIECES, payload};
  },
  reset: (payload: any) => {
    return {type: PIECES_RESET, payload};
  },
  types,
};

export function PiecesReducer(state: PiecesState = defaultState, action: any) {
  console.log('action.type', action.type);
  if (!action.type.includes('[pieces]') && !action.type.includes(STATE_INIT)) {
    return state;
  }
  switch (action.type) {
    case STATE_INIT:
      return {...state, ...{all: createPieces()}, type: action.type};
    case PIECES_UPDATE_PIECES:
      return {...state, ...{pieces: action.payload}, type: action.type};
    case PIECES_RESET:
      return {...defaultState};
    default:
      return {...state, type: action.type};
  }
}


function createPieces() {
  const answer = [];
  const pawns = ['pawn', 'pawn', 'pawn', 'pawn', 'pawn', 'pawn', 'pawn', 'pawn'];
  const power = ['rook', 'knight', 'bishop', 'queen', 'king', 'bishop', 'knight', 'rook'];
  const parts = pawns.concat(power);

  for (let i = 0; i < 16 * 2; i++) {
    const team = i < 16 ? 'primary' : 'secondary';
    answer.push({
      i,
      team,
      type: parts[i % 16]
    });
  }

  return answer;
}
