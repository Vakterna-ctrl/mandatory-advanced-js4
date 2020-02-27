import React from 'react';
import '../App.css';

function ConnectFour({grid,onClickCircle}) {
  return (
    <div className="connectFourBoard">
    {grid.map((emptyCircle, idx) =>(
      <div className="rectangleInBoard" key={idx}>
      <div className="circleInBoard"
      style={{backgroundColor:emptyCircle}}
      onClick={ ()=> onClickCircle(idx)}
      >
      </div>
      </div>

    ))}


    </div>
  );
}

export default React.memo(ConnectFour);
