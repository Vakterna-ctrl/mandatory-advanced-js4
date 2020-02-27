export function onClickCircle(idx) {
  return {
    type: 'player_clicked',
    idx
  }
}
export function onSettingCircle(grid,idx){
  return{
    type: 'whoWon',
    grid,
    idx
  }
}
export function reset(){
  return{
    type:"reset"
  }
}
