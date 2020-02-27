export function paintCircle(grid, color, idx,player1, player2) {
  const totalRow = 6;
  const totalCol = 7;

  const currentCol = idx % totalCol;
  const currentRow = Math.floor(idx / totalCol)

  let newState = {};

  let player1Turn = player1

  for (let i = 5; i >= currentRow; i--) {
    if (grid[i * totalCol + currentCol] === 'white') {
      return newState = {
      grid: [
        ...grid.slice(0, i * totalCol + currentCol),
        grid[i * totalCol + currentCol] = color,
        ...grid.slice(i * totalCol + currentCol + 1)
      ],
      player1Turn: !player1,
      player2Turn: !player2,
      idx: i * totalCol + currentCol,
    }
    } else if (grid[idx] !== 'white') {
      return newState = {
        grid: [...grid],
        player1Turn: player1,
        player2Turn: player2,
        idx: idx,
      }
    }

  }
}

export function checkIfWin(grid,idx){
  const totalRow = 6;
  const totalCol = 7;

  const currentCol = idx % totalCol;
  const currentRow = Math.floor(idx / totalCol)

  let counter = 0;

  //check four in row in horizontal
  for(let col = 0; col<totalCol; col++){
    if(grid[idx] === grid[currentRow*totalCol + col]){
      counter++;
      if(counter === 4){
        return grid[idx]
      }
    }else{
      counter = 0;
    }
  }
  counter = 0;
  //check four in row in vertical
  for(let row = 1; row<=totalRow; row++){

    if(grid[idx] === grid[(totalRow-row)*totalCol + currentCol]){
      counter++;
      if(counter === 4){
        return grid[idx]
      }
    }else{
      counter = 0
    }
  }
  //check four in row diagonally to the right
  counter = 1;
  let diagonalCol = currentCol;
  let diagonalRow = currentRow;
  //check downward diagonally
  for(let i = 1; i<4; i++){
    if(diagonalCol === 0 || diagonalRow === 5){
      break;
    }else{
      diagonalCol--
      diagonalRow++
    }
    if(grid[diagonalRow*totalCol + diagonalCol] === grid[idx]){
      counter++
    }else{
      break;
    }
  }
  //check upward diagonally
  diagonalCol = currentCol;
  diagonalRow = currentRow;
  for(let i = 1; i<4; i++){
    if(diagonalCol === 6 || diagonalRow === 0){
      break;
    }else{
      diagonalCol++
      diagonalRow--
    }
    if(grid[diagonalRow*totalCol + diagonalCol] === grid[idx]){
      counter++
    }else{
      break;
    }
  }
  if(counter === 4){
    return grid[idx]

  }
  //check four in row diagonally to the left
  counter = 1
  diagonalCol = currentCol;
  diagonalRow = currentRow;
  //check upward diagonally
  for(let i = 1; i<4; i++){
    if(diagonalCol === 0 || diagonalRow === 0){
      break;
    }else{
      diagonalCol--
      diagonalRow--
    }
    if(grid[diagonalRow*totalCol + diagonalCol] === grid[idx]){
      counter++

    }else{
      break;
    }
  }
  //check downward diagonally
  diagonalCol = currentCol;
  diagonalRow = currentRow;
  for(let i = 1; i<4; i++){
    if(diagonalCol === 6 || diagonalRow === 5){
      break;
    }else{
      diagonalCol++
      diagonalRow++
    }
    if(grid[diagonalRow*totalCol + diagonalCol] === grid[idx]){
      counter++

    }else{
      break;
    }
  }

  if(counter === 4){
    return grid[idx]

  }
  return null


}
