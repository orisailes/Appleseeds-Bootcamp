function getCount(str) {
  var vowelsCount = 0;
  let test = /[aeiou]/;
  for(let i=0;i<str.length;i++){
  if(str[i].match(test)){
  vowelsCount ++;
  }
  }
  
  return vowelsCount;
}

console.log(getCount(`example`);
