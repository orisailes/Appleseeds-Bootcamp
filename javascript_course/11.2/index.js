let school = {
  teachers: [{
      id: 1,
      name: "Pinchas",
      subjects: ["chemistry", "biology", "physics"],
      students: [],
      capacityLeft: 3,
    },
    {
      id: 2,
      name: "Williams",
      subjects: ["history", "ethics"],
      students: [],
      capacityLeft: 2,
    },
  ],
  students: [{
      id: 10,
      name: "Jennifer",
      age: 20,
    },
    {
      id: 11,
      name: "Howard",
      age: 23,
    },
    {
      id: 12,
      name: "Old-Timmy",
      age: 86,
    },
    {
      id: 13,
      name: "Houston",
      age: 21,
    },
  ],
};


function findById(index) {
  return function isStudent(element) {
    if (element.id == index) {
      return element;
    }
  }
}

function findByTypeAndId(type, id) {
  return school[type].find(findById(id))
}

// 


function assignStudent(id, subject) {

  let t = findByTypeAndId(`teachers`, 2);
  let s = findByTypeAndId(`students`, id);
  if (t.capacityLeft > 0) {
    if (t.subjects.indexOf(subject)) {
      t.students.push(s.name)
      t.capacityLeft--
      console.log(`Hurray!, there is a place for ${s.name} at ${t.name} ${subject} class!`)
    }
  } else {
    console.log(`Sorry, no place for ${s.name}`)
  }
}
school.students.forEach(function (element, index, array) {
  assignStudent(element.id, `biology`)
});



function assignTeachersSubject(id, subject) {
  const t = findByTypeAndId(`teachers`, 1)
  if (t.subjects.indexOf(subject) === -1) {
    t.subjects = [...t.subjects, subject]
  }
}

assignTeachersSubject(1, `philosophy`)


// 

function addGender(gender, id, type) {
  const person = findByTypeAndId(type, id)
  person.sex = gender;
}
addGender(`female`, 10, `students`)
addGender(`male`, 11, `students`)
addGender(`male`, 12, `students`)
addGender(`male`, 13, `students`)

console.log(school.students)

// 

function tinder(id1, id2) {
  const s1 = findByTypeAndId(`students`, id1)
  const s2 = findByTypeAndId(`students`, id2)
  if ((s1.sex === `male` && s2.sex === `female`) || (s1.sex === `female` && s2.sex === `male`)) {
    console.log(`They are boy and girl! calculating matching percents...`)
    const ageDifference = Math.abs(s1.age - s2.age)
    if (ageDifference < 5) {
      console.log(`about 95% matching between ${s1.name} and ${s2.name}`)
    } else {
      console.log(`less than 60% matching between ${s1.name} and ${s2.name}`)
    }

  }
}

tinder(10, 11)