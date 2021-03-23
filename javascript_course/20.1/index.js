function htmlGiver(name,age,height){
    let htmlText = `
    <div classname="playerCard">
    <h2>${name} - ${age}</h2>
    <p>They are ${height} and ${age} years old. In Dog years
    this person would be ${age*7}. That would be a tall dog!</p>
    </div>
    `;
    return htmlText;
}

let myDiv = document.createElement(`div`);
myDiv.classList.add(`wrapper`);
let myDiv2 = document.createElement(`div`);
myDiv2.classList.add(`cards`);

let myUl = document.createElement(`ul`);

let myLi1 = document.createElement(`li`);
myLi1.textContent = `one`;
let myLi2 = document.createElement(`li`);
myLi2.textContent = `two`;
let myLi3 = document.createElement(`li`);
myLi3.textContent = `three`;

myUl.appendChild(myLi1);
myUl.appendChild(myLi2);
myUl.appendChild(myLi3);

let myImage = document.createElement(`img`);
myImage.src = 'https://picsum.photos/500';
myImage.style.width = `250px`;
myImage.style.height = `250px`;
myImage.classList.add(`cute`);
myImage.setAttribute("alt","very-cute")

let myHTMLString = `
<div>
<p>The BAD paragraph</p>
<p class="warning">The GOOD paragraph</p>
</div>
`;



document.body.appendChild(myDiv2)
myDiv2.innerHTML = htmlGiver(`ori`,24,`165cm`) + htmlGiver(`shay`,21,`160cm`) + htmlGiver(`ploni`,55,`195cm`)
document.body.appendChild(myDiv);
myDiv.innerHTML = myHTMLString;
myDiv.appendChild(myUl);
myDiv.appendChild(myImage);




myDiv.firstElementChild.firstElementChild.remove()