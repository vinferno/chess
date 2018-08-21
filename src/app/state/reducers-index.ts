import {boardActions, BoardReducer} from './board/board-state';
import {piecesActions, PiecesReducer} from './pieces/pieces-state';
import {selectedActions, SelectedReducer} from './selected/selected-state';


export const reducers = {
  boardState: BoardReducer,
  piecesState: PiecesReducer,
  selectedState: SelectedReducer,
};

export const stateActions = {
  boardActions,
  piecesActions,
  selectedActions,
};
