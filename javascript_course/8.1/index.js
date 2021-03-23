// 1. Create 3 separate objects that their key is called name
// and their value is a string. Store them in separate
// variables.
// 2. Create a new Map object that sets each object as a key
// and assign an id number as the value.
// 3. Iterate over the Map object with the for..of loop.
// - log the name and id

const Obj1 = {
    name : `Moses`
  };
  const Obj2 = {
    name : `Joseph`
  };
  const Obj3 = {
    name : `Mike`
  };
  
  const myMap = new Map();
  
  myMap.set(Obj1, 1)
  myMap.set(Obj2, 2)
  myMap.set(Obj3, 3)
  
  
  for( let element of myMap){
  
  console.log(`Name is: ${element[0].name}, ID: ${element[1]} `)
  }