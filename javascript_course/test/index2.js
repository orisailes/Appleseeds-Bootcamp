function findOdd(A) {
    let count=0;
    let myArr = [];
   for(let i =0; i<A.length; i++){
     for(let x=0;x<A.length;x++){
       if(A[i] === A[x]){
         count++;
       }
     }
     if(count % 2 === 1){
       myArr.push(A[i]);
     }
     count=0;
   }
   function duplicateSort(arr){
     let returnArray = [];
     for(let i=0;i<arr.length;i++){
      if (returnArray.includes(arr[i]) === false){
        returnArray.push(arr[i])
        return returnArray;
      } 
     }
   }
    return duplicateSort(myArr);
  }
  console.log(findOdd([20,1,-1,2,-2,3,3,5,5,1,2,4,20,4,-1,-2,5]))