function scramble(str1, str2) {
let helper = str1.split('');
let helper2 = str2.split('');
let bigger = 0;
let smaller= 0;
if(str1 === `` || str2===`` ){
return false;
}
  if(helper.length > helper2.length){
  bigger = helper.length;
  smaller = helper2.length;
}else{
  bigger = helper2.length;
  smaller=helper.length;
}
if(helper.length<=helper2.length)
{
for(let i=0;i<smaller;i++){
  for(let x=0;x<bigger;x++){
    if(helper[i]===helper2[x]){
       helper[i] = null;
       helper2[x] = null;
    }
   }
}
}
if(helper.length>helper2.length)
{
for(let i=0;i<bigger;i++){
  for(let x=0;x<smaller;x++){
    if(helper2[x]===helper[i]){
       helper[i] = null;
       helper2[x] = null;
    }
   }
}
}
function isNull(inputArray) {
  for (var i = 0, len = inputArray.length; i < len; i += 1)
    if (inputArray[i] !== null)
      return false;
  return true;
}
return isNull(helper) ? true: isNull(helper2) ? true: false
}
scramble(`a23sd`,`ascsc`)
