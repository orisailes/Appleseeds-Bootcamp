function myFunc(array, n) {

    for(let row=0;row<array.length;row++){
        for(let col=0;col<array.length;col++){
           if(array[row]+array[col]===n && col !==row){
               return `index1:${col}, index2:${row}`;
           }
        }
    }
    return false;
}

console.log(myFunc([1, 1, 3, 7, 8, 10, 11, 30], 4))