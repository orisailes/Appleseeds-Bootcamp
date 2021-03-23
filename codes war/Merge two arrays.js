// Write a function that combines two arrays by alternatingly taking elements from each array in turn

function mergeArrays(a, b) {
  var newArr = [];
  var biggerLength = 0;
  if (a.length >= b.length){
    biggerLength = a.length;
  } else { 
   biggerLength = b.length; 
   }
  for (let i = 0;i<biggerLength; i++){
    if(typeof(a[i]) === `string` || typeof(a[i]) === `number`){
    newArr.push(a[i]);
    }
    if(typeof(b[i]) === `number` || typeof(b[i]) === `string`){
    newArr.push(b[i]);
    }
  } 
 return newArr; 
}


array1 = [2,3]
array2 = [`a`,`b`,`c`]
console.log(mergeArrays(array1, array2))
