function myFun (arr){
    for(let i=0;i<arr.length;i++){
        arr[i] = arr[i].length;
    }
    return arr;
}

myArr = ["House" , "Cat", "Enzicplopediya", "Winston Churchil"];
console.log(myFun(myArr));