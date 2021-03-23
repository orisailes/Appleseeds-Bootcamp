const input = require('readline-sync');
var arr = ['jazz','coffe','giraffe','wikipedia','netflix','koala','cellphone','microsoft','frizer','desktop','earphone','pencil','bloom','pirate','baseball','supermarket','cabagge','sweet','scotch','whisky','abscent','truck','worker','supervisor']
var rnd = Math.floor(Math.random()*24)
var word = arr[rnd]
var format = /^[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]*$/
var attempts = 10;
var temp = '*'.repeat(word.length)
var isWin = false;
var falseLetter = [];
var match=0;
var isWin=Win(temp)
var helper = 1;


function isLetter(g){
  // if (isNaN(g)==true && g.length==1 && !g.match(format))
  if(((g >= 'a' && g <= 'z') || (g >= 'A' && g <= 'Z'))&&(g.length==1))
  {
    return true;
  }
  else
  {
    return false;
  }
}
function Win(myArr)
{
  helper = myArr.length
  for(var y=0;y<myArr.length;y++)
  {
  if (myArr[y]!='*')
  {
    helper--;
  }
  }
  if (helper==0)
  {
    return true;
  }
  else
  {
    return false;
  }

}

console.log('The word is:\n' + temp + '\n\nYou got ' + attempts + ' attempts.\n')
var g = input.question('Enter a letter\n')
g = g.toLowerCase()
word = word.split("")
temp = temp.split("")

while (attempts>1)
{
 
  while (isLetter(g)==false)
  {
    console.log('Invalid letter\n')
    var g = input.question('Enter a letter\n')
    g = g.toLowerCase()
  }

for(var i=0; i<word.length;i++)
{
if (g.match(word[i]))
{
  temp[i]=g
  match++;
  
}
}
if (match==0)
{
  falseLetter.push(g)
  console.log('Try again!\n' + 'false letters so far: ' + falseLetter + '\n')
  attempts--;
}
for (var p=0; p<temp.length; p++)
{
 process.stdout.write(temp[p])
}
match=0;
isWin=Win(temp)
 if (helper==0)
  { 
  console.log('!')
    break;
  }
console.log('\n\nyou have got ' + attempts + ' attempts left.\n')
g = input.question('Enter a letter\n')
g = g.toLowerCase()

}

if (attempts==1)
{
console.log('Maybe next time.. bye!')
}

