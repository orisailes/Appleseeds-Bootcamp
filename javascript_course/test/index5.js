snail = function(array) {
    let mySnail=[];
    let i = 0;
    let length = array.length;
  array[0].forEach(function(el){
    mySnail.push(el);
  });

  for(let i=1;i<array.length;i++){
      mySnail.push(array[i][array.length-1])
  };

  for(let i=array.length-2;i>-1;i--){
      mySnail.push(array[array.length-1][i])
  }

  while(i !== 1){
    // mySnail.push(array[2][0]);
    i--;
  }
  console.log(mySnail)

}

snail([[1, 2, 3], [4, 5, 6], [7, 8, 9]]);

// [1, 2, 3, 6, 9, 8, 7, 4, 5] expected

// [1 2 3]  (0)   length 3
// [4 5 6]  (1)
// [7 8 9]  (2)