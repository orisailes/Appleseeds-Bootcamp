1.get the images&background for each card and the table game,store them in the right folder.
call the image in name of `card-1`,`card-2`,`card-3`,etc.. (img/cards),(img/background)
2.make grid container(`grid-container`) and position it properly in the middle of the game.
3.make and place buttons, heading, counters and timer.
4.all the card get class `hidden`, value, and event of `click` which leads to function.
5.the function get the current target and switch the class `hidden` to `flip`.
6.when `flip`, we get the value and insert it to an object, display the image to the user and check if the values are equal to the second card flipped.
7.if it is not, we remove the class `flip`, and add the class `hidden`, and count++
8.if it is, we won't remove `flip` and the card will stay forever and remove the event listener.
9.we will add a `currectFlips` and every time when we exit the function it will increase by 1.
each time we get out of the main function we will make if statement to see if the user won and the game ends.
10.in restart game we will call the `restart function` that restart the countings variables make all hidden ,randomize the card positions and reset the timer.
