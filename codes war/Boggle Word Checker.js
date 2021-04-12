function checkWord(board, word) {
    const helper = board.flat();
    const wordHelper = word.split('');
    for (let x = 0; x < wordHelper.length; x++) {
      for (let i = 0; i < helper.length; i++) {
        if (wordHelper[x] === helper[i]) {
          wordHelper.splice(x, 1);
          helper[i] = null;
          x--;
        }
      }
    }
    if (wordHelper.length) return false;
    console.log(board);
    console.log(word);
    const checker = (row, col) => {
      let wordCounter = word.length;
      let arrows=8;
      let rowDown = row + 1;
      let rowUp = row - 1;
      let colRight = col + 1;
      let colLeft = col - 1;
      if (rowDown === 4) rowDown = null; arrows=arrows-3;
      if (rowUp < 0) rowUp = null; arrows=arrows-3;
      if (colLeft < 0) colLeft = null; arrows=arrows-3;
      if (colRight === 4) colRight = null; arrows=arrows-3;
      console.log(rowUp,arrows)
      // while(arrows!==0){
  
      // }
      if(wordCounter==0) return true;
    }
  
    for (let row = 0; row < board.length; row++) {
      for (let col = 0; col < board.length; col++) {
        checker(row, col)
      }
    }
  
  
  }
  var testBoard = [
    ["E", "A", "R", "A"],
    ["N", "L", "E", "C"],
    ["I", "A", "I", "S"],
    ["B", "Y", "O", "R"]
  ];
  
  
  // checkWord(testBoard, "CA")
  
  // true 
  
  // checkWord( testBoard, "EAR" )
  
  // true 
  
  checkWord(testBoard, "EARS")
  
  // false 
  // checkWord( testBoard, "BAILER" )
  
  // true 
  // checkWord( testBoard, "RSCAREIOYBAILNEA" )
  
  // true "Must be able to check indefinite word lengths going in all directions" );
  // checkWord( testBoard, "CEREAL" )
  
  // false "Valid guesses can't overlap themselves" );
  // checkWord( testBoard, "ROBES" )
  
  // false "Valid guesses have to be adjacent" );
  // checkWord( testBoard, "BAKER" )
  
  // false "All the letters have to be in the board" );
  // checkWord( testBoard, "CARS" )
  
  // false "Valid guesses cannot wrap around the edges of the board" );
  