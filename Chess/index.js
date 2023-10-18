const gameBoard = document.querySelector(".board");
const piece = [
    "", "", "", "", "", "", "", "",
    "", "", "", "", "", "", "", "",
    "", "", "", "", "", "", "", "",
    "", "", "", "", "", "", "", "",
    "", "", "", "", "", "", "", "",
    "", "", "", "", "", "", "", "",
    "", "", "", "", "", "", "", "",
    "", "", "", "", "", "", "", "",

  
];

function setBoard() {
  piece.forEach((piece, i) => {
    const square = document.createElement("div");
      square.classList.add("square");
      square.setAttribute('id', i  + 1);
      let row = Math.floor((63 - i) / 8) + 1;
      if (row % 2 === 0) {
          square.classList.add(i % 2 === 0 ? "white" : "black");
      }
      else{
        square.classList.add(i % 2 === 0 ? "black" : "white");
      }
    gameBoard.append(square);
  });
}

setBoard();

function setPieces() {
    let position = document.querySelectorAll('.square');
    position.forEach((piece, index) => { 
        if (index < 16) {
            piece.textContent = index;
            if (index > 7 && index < 16) {
                piece.innerHTML = '<i class="fa-sharp fa-solid fa-chess-rook-piece"></i>';
                console.log(piece.children)
                // piece.textContent = index +  10000;
            //    piece.innerHTML = `
            }
        }
        if (index > 47) {
            piece.textContent = index;
        }
    });
    // console.log(position);
}
setPieces();