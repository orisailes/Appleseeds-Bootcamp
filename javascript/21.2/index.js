const users = [{
        id: 167464,
        firstName: "Jimmy",
        lastName: "Arnold",
        email: "jimmya@gmail.com",
    },
    {
        id: 578447,
        firstName: "Martha",
        lastName: "Goldman",
        email: "gold@hotmail.com",
    },
    {
        id: 864578,
        firstName: "Tim",
        lastName: "Burton",
        email: "timmy.hotmail.com",
    }
];

const myUl = document.createElement(`ul`);
const myDiv = document.createElement(`div`);

users.forEach((element,i) => {
    const myLi = document.createElement(`li`);
    myLi.textContent =`${element.firstName} ${element.lastName}`;
    myLi.setAttribute('data-id' , `${element.id}`);
    myUl.appendChild(myLi)
});

myDiv.appendChild(myUl);

document.body.appendChild(myDiv)