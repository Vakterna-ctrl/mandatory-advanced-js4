import React, {
  useReducer,
  useEffect
} from 'react';
import './App.css';
import ConnectFour from './Component/ConnectFour'
import {onClickCircle,onSettingCircle} from './Action/actions'
import {reducer} from './Reducers/reducers'
import Message from './Component/Message'
function connectFourGridEmpty() {
  return Array(7 * 6).fill('white')
}

export function init() {
  return {
    grid: connectFourGridEmpty(),
    player1Turn: true,
    player2Turn: false,
    idx: null,
    winner: null,
  }
}

function App() {
  const [state, dispatch] = useReducer(reducer, null, init)

  const {grid, player1Turn, player2Turn,idx,winner} = state
  useEffect(()=>{
    dispatch(onSettingCircle(grid,idx))
  },[idx])
  console.log(winner)

  return (
    <div className = "App" >
    <h1>It is
    <div className="circle"
     style={{backgroundColor: player1Turn ? 'red' : 'yellow'}}>
     </div> player's turn</h1>
    <ConnectFour grid = {grid} onClickCircle = {(idx) => dispatch(onClickCircle(idx))}/>
    {winner? <div className="winWindow">
    <Message winner={winner} player2Turn={player2Turn} dispatch={dispatch} />
    </div> : null }
    </div>
  );
}

export default App;
