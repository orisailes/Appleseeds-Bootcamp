// Ex2.6 - 
// Years and CenturiesThe first century spans from the year 1 up to and including the year 100, 
// The second - from theyear 101 up to and including the year 200, etc.
// centuryFromYear(1705)  returns (18)
// centuryFromYear(1900)  returns (19)
// centuryFromYear(1601)  returns (17)
// centuryFromYear(2000)  returns (20)

function centuryFromYear(year){
    let x = (Math.floor(year/100));
    if(x>0){
        return x+1;
    }else if(x===0){
        return 1;
    }
    else{

        return `${-x} B.C.E `;
    }
}

console.log(centuryFromYear(-111))