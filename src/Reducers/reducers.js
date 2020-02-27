import {paintCircle, checkIfWin} from '../Functions'
import {init} from '../App'
export function reducer(state, action) {
  switch (action.type) {
    case 'player_clicked':
      if (state.player1Turn === true) {
        let newState = paintCircle(state.grid, 'red', action.idx, state.player1Turn, state.player2Turn)
        return{
          ...state,
          ...newState
        }


      }else if (state.player2Turn === true) {
        let newState = paintCircle(state.grid, 'yellow', action.idx, state.player1Turn, state.player2Turn)
        return{
          ...state,
          ...newState
        }


      }
      break;
      case 'whoWon':
      let winner = checkIfWin(action.grid,action.idx)
      return{
        ...state,
        winner: winner
      }
      break;
      case 'reset':
      return init();

  }
}
