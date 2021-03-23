document.body.style.transition = `All 6s`

const myHeading = document.createElement('h1')
myHeading.textContent = `This is JS only website`
myHeading.classList.add(`heading`)
myHeading.style.transform = `translateX(400px)`
myHeading.style.transition = ` All 6s ease-in-out backwards`


const myImage = document.createElement(`img`)
myImage.src = 'https://picsum.photos/500'
myImage.style.borderRadius = `50%`;


const myDiv = document.createElement(`div`)
myDiv.classList.add(`container`)

const myP = document.createElement(`p`)
myP.textContent = `lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem `


const list = document.createElement('ul')
const li = document.createElement('li')
li.textContent = `Home`;
const li2 = document.createElement('li')
li2.textContent = `About`
const li3 = document.createElement('li')
li3.textContent = `Contact`
list.append(li)
list.append(li2)
list.append(li3)
list.style.display = "flex"
li.style.padding = "20px" 
li2.style.padding = "20px" 
li3.style.padding = "20px" 
list.style.listStyle = `none`
list.style.justifyContent = `space-evenly`




document.body.appendChild(myDiv);
myDiv.appendChild(list)
myDiv.appendChild(myHeading)
myDiv.appendChild(myImage)
myDiv.appendChild(myP)
