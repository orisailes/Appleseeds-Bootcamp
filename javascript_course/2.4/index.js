var x = new Date();
var monthNumber = x.getUTCDate()
var dayNumber = x.getDay()
var date = x.getUTCDate()
var month = x.getMonth()
var year = x.getUTCFullYear();

// defining day

var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
// defining month

var months = ['January', 'Febuary', 'March', 'April', 'May', 'June', 'July', 'ETC'];




console.log(`The day is ${days[dayNumber]}`)
console.log(`The day in month is ${date}`)
console.log(`The month is ${months[month ]}`)
console.log(`The year is ${year}`)