const axios = require('axios').default;
const postmanRequest = require('postman-request');
const request = require('request');
const endpoint = 'https://www.fruityvice.com/api/fruit';

// postmanRequest({url:`${endpoint}/apple`,json:true,},(error,response)=>{
//     const data = response.body;
//     console.log(data)
// })

// axios.get(`${endpoint}/apple`)
//     .then(response => console.log(response))
//     .catch(error => console.log(error))

// request.get(`${endpoint}/apple`,(error,response,body)=>{
//     const data = JSON.parse(body);
//     console.log(data)
// })