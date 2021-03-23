function findSmallest(a, b, c) {
    if (c < a && c < b) {
        return c;
    } else if (b<a && b<c) {
        return b;
    } else {
        return a;
    }
}

debugger;

console.log(findSmallest(111, 232323, 22));

//    first, the function is not even invoke, line 11 fixed
//    second, the return is not accurate.. fix line 7 and 5.
//    third, we need to use console.log on line 12
//    notice that there is a bug in line 2, if statement syntax is wrong.. (a > b > c)
//    same bug in line 4, if statement syntax is wrong.. (a > c > b)