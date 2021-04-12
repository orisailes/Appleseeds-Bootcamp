const add = (numA,numB,callback) => {
    setTimeout(() => {
        callback(numA+numB)
    }, 2000);
}


add(1,4,(sum)=>{
    console.log(sum)
})