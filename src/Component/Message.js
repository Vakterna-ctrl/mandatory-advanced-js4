import '../App.css';
import ReactDom from 'react-dom'
import {reset} from '../Action/actions'
import React, {
  useReducer,
  useEffect
} from 'react';

function Message({player2Turn,dispatch,winner}) {
  console.log(reset)
  console.log(dispatch)


  return ReactDom.createPortal(
    <div className="message">
    <div className="messageWindow">
    <div className="theMessage">{player2Turn === true ? "The red player has won": "the yellow player has won"}</div>
    <button className="replay" onClick={()=>dispatch(reset())} >play again?</button>
    </div>
    </div>,
    document.getElementById("portal")

  );
}

export default Message;
