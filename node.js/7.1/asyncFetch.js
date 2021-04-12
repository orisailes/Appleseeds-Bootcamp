const axios = require('axios').default;
const postmanRequest = require('postman-request');
const request = require('request');
const endpoint = 'https://www.fruityvice.com/api/fruit';

// postmanRequest({url:`${endpoint}/apple`,json:true,},(error,response)=>{
//     if(!error){
//         const data = response.body;
//         console.log(data);
//     }else{
//         console.log(`error: ${error}`);
//     }
// })

// axios.get(`${endpoint}/apple`)
//     .then(response => console.log(response))
//     .catch(error => console.log(error))

// request.get(`${endpoint}/apple`,(error,response,body)=>{
//     if(!error){
//         const data = JSON.parse(body);
//         console.log(data);
//     }else{
//         console.log(`error: ${error}`);
//     }
// })