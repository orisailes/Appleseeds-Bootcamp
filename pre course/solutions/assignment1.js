'use strict'

console.log('Hello and welcome to the quiz - Are you stingy\n~                    ~\n~~                  ~~\n~~~                ~~~\n~~~~              ~~~~\n~~~~~            ~~~~~\n~~~~~~          ~~~~~~\n~~~~~~~       ~~~~~~~~\n~~~~~~~~     ~~~~~~~~~\n~~~~~~~~~???~~~~~~~~~~\n~~~~~~~~     ~~~~~~~~~\n~~~~~~~       ~~~~~~~~\n~~~~~~          ~~~~~~\n~~~~~            ~~~~~\n~~~~              ~~~~\n~~~                ~~~\n~~                  ~~\n~                    ~\nwe will start with our first question.')
let sum=0;
let array = [];
var readlineSync = require('readline-sync'),
 myAns = ['use the sink as toothbrush and remain the toothpaste at the sink,\nthan brush my yellow teeth', 'I will try to pick it up with my non-electric toothbrush', 'Turn on the tap and wipe it up', 'go to the store and buy brand new toothpaste', 'go to the store and buy brand new sink',];
 array[0] = Number(readlineSync.keyInSelect(myAns, 'If your toothpaste will fall to the side of the sink, what would you do?'));



 myAns = ['I will pretend to be homeless or hobo, \nask for money,and hope to make some shekels for the next bus and even to buy somthing from 1-2-3 store','Ask from someone to pay for me and hope he will forgot', 'Pay with payment app such as RavKav online or Bit', 'Use my 1000 shekels in cash that i keep always in my expensive coats secret pocket', 'Run to the rent-car senter and rent a bus as quickly as posiible',];
 array[1] = Number(readlineSync.keyInSelect(myAns, 'You forgot your Rav-Kav at home and you gonna late to work if you wont \nget the bus. What would you do?'));



myAns = ['Cant be. i always pretend vegene to avoid making meat.. \n chicken breast in 5$ per kg its a daylight robbery!','Collect the oil to a bottle than use it as pesticidal.', 'Gently collect the oil in a cop or box,than throw it to the trash \nbin', 'Use my 1000 shekels in cash that i keep always in my expensive coats secret pocket to bribe my sister to handle it', 'Unpossible. shnitzels come from the near catering.',];
 array[2] = Number(readlineSync.keyInSelect(myAns, 'Its friday and your making shnitzels for alot of people.\nwhen youre done you reckon that you have got a lot of oil left on the \npan. what would yo do?'));


myAns = ['Push her to the frizer and make win-win situation. its much quit for me and mush chill for her!','Give her monthley 2 shekels and send her to the store to buy some \nice cube that help her get cool by rub her stomach with them', 'Use the wall fan..unfortunately the air conditioner is broke down...', 'Use my new undergrown air conditioner and hope my sweet daughter\n wont sweat', 'Rent an Eskimosi to hug her.',];
 array[3] = Number(readlineSync.keyInSelect(myAns, 'Your daughter complain that is very hot. what would you do?'));



myAns = ['Talk to my boss and say him that he wrong with my salary payment and i should have get more. 50-50 that i success','Change them to green dollars and keep them under the pillow,as close as possible to me', 'Put half of it on investing account and half of it keep for emergency case', 'Finally buy the monthley gift for my kids. last month it was the new Airpods.', 'Give all of it to the "Foundation effort to bring back E-T"',];
 array[4] = Number(readlineSync.keyInSelect(myAns, 'Its the 10th of the month and the salary was transfered to your bank account. what will you do with the money after the mendatory payments?'));




for (var i = 0; i<array.length; i+=1)
{
  if(array[i]==(-1))
  {
    console.log('\nPlease re-answer the quiz, "CANCEL" option that you choose cant tell me important detail about you.')
    throw '';
  }
  else
  {
    array[i]++
  sum=sum+array[i];
  }
  
}

console.log('\n\n\n\n')
console.log('And the resault is....\n\n\n\n')


if (sum < 6)
  
    console.log('Dude, you are extremly stingy. you should see a Doctor')
  
  if (sum<11 && sum>5)
  
  console.log('The resault shows that you ARE a stingy. i can only suggest you to get \nanother point of view about money and realize that money is not every \nthing in life!')
  
  if (sum<17 && sum>10)
  
  console.log('Rabby Moshe Ben Maymon says that every person shoul live on the "gold \ntrail".\n Im happy to say that you are on it! keep with that attitude and you \nwill be great')
  
  if (sum<22 && sum>16)
  
  console.log('I can see that you are spender. try to look where your money goes and if its the right place for it')
  
    if (sum<26 && sum>21)
  
  console.log('The way that you treat money is getting me worried. i suggest you to go to some economic advisers that can help you')

