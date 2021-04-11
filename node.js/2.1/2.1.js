const fs = require('fs');
fs.writeFileSync('test.txt','this is made by me and its a test!@#!@#!@');
fs.appendFileSync('test.txt',' <this is an added information that i append to it>');
fs.copyFile('test.txt','copyTest.txt',(err=>{
    console.log(err)
}));
fs.readdirSync('./').forEach((item)=>console.log(item));
fs.renameSync('copyTest.txt','justRenamed.txt')