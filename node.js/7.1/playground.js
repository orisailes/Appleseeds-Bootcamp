const myfun = (n) => {
    let helper=1;
    for(let i=1;i<n+1;i++){
        helper = helper*i
    }
    return helper
}

const myfunc2 = (n) => {
    if(n===1||n===0) return 1
    return n*myfunc2(n-1)
}

const myFunc3 = (n)=>{
    const result = myFunc3(n-1);
    if(n==1 ||n===0)return 1;
    return result*n;
}

const myFunc4 = (n) => {
    let result=1;
    while(n!==1){
        result+=result*n;
        n--;
    }
    return result;
}

// console.log(myfunc2(5))

//120