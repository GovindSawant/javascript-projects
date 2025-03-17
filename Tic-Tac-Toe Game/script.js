let boxes = document.querySelectorAll('.box');

let reset = document.querySelector('#reset');

let newgameBtn = document.querySelector('#newgame-btn');

let turn = true;

let winContainer = document.querySelector('.win-container');

let msg = document.querySelector('#msg');

let count = 0;

let winingPattern = [
  [0, 1, 2], // Top row
  [3, 4, 5], // Middle row
  [6, 7, 8], // Bottom row
  [0, 3, 6], // Left column
  [1, 4, 7], // Middle column
  [2, 5, 8], // Right column
  [0, 4, 8], // Diagonal from top-left to bottom-right
  [2, 4, 6] 
];

const resetGame = () =>{
  count = 0
  turn = true;
  enableBoxes();
  winContainer.classList.add('hide');
}

boxes.forEach((box) => {

  box.addEventListener( "click", function(){
    if(turn){
      box.innerText = "O";
      turn = false;
      count += 1;
    } else {
      box.innerText= "X";
      turn = true;
      count += 1;
    }
    
    box.disabled = true;

    checkWinner();
  });
});
const checkWinner = () =>{

  if( count < 9){
    for (let pattern of winingPattern){

      let pos1val = boxes[pattern[0]].innerText;
      let pos2val = boxes[pattern[1]].innerText;
      let pos3val = boxes[pattern[2]].innerText;
    
      if( pos1val != "" && pos2val != "" && pos3val != ""  ){
    
        if( pos1val === pos2val && pos2val === pos3val ){
          console.log(pos1val,"winner");
          showWinner(pos1val);
        }
    
      }
     }
  } else {
    showDraw();
  }

};

const showWinner= (val) => {
  msg.innerHTML = `
    <h1> ${val}  is Winner !</h1>
  `;
  winContainer.classList.remove('hide');
  disableBoxes();
};
const showDraw= () => {
  msg.innerHTML = `
    <h1> Match is Draw !</h1>
  `;
  winContainer.classList.remove('hide');
  disableBoxes();
};

const enableBoxes = () => {
  for(let box of boxes){
    box.disabled = false;
    box.innerText = "";
  }

}

const disableBoxes = () => {
  for(let box of boxes){
    box.disabled = true;
  }
}

reset.addEventListener("click", () => {
  resetGame();
});


newgameBtn.addEventListener("click", () => {
  resetGame();
});