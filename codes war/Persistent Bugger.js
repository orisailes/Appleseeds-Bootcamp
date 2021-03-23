function persistence(num) {
  let arr = [];
  let x = 1;
  let count = 0;
  let myNum = num.toString();
   if(myNum.length === 1){
    return 0;
   }
  for(let i = 0 ; i<myNum.length ; i++){
    x = x * myNum[i];
  }
  count ++;
  while (x>9){
    myNum = x.toString();
    x = 1;
      for(let i = 0 ; i<myNum.length ; i++){
        x = x * myNum[i];
       }  
    count ++;
    myNum = x;
  }
  return count;
}

console.log(persistence(25))
