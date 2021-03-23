// Fibbonachi ex-
// this:
// 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, …
// or this:
// 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, …

function fibbonachi(n) {
    let arr = [0,1,1];
    let num = 2;
    let index=2;
    while(index !== n){
        num=((arr[index-1])+(arr[index]));
        arr.push(num);
        index++;
    }
   
    return arr[index];
}

console.log(fibbonachi(48));