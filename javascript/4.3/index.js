function avarage(arr) {
    let result = 0;
    for (let i = 0; i < arr.length; i++) {
        result = result + arr[i];
    }
    return (result/3);
}

const john = [89, 120, 103];
const mike = [116, 94, 123];
const mary = [97, 134, 105];

let basketBall = [{name:`john`, score:avarage(john)}, {name:`mike`, score:avarage(mike)}, {name:`mary`,score:avarage(mary)}];

  let winnerScore=0;
  let winnerName;
  
for(let i=0; i<3; i++){
  if(winnerScore<basketBall[i]['score']){
    winnerName = basketBall[i]['name'];
  }
}

console.log(`And the winner is.... ${winnerName}!!!! Congragulations. Your prize is 65' TV!`)