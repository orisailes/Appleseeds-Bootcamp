const https = require('https');
const endpoint = 'https://www.fruityvice.com/api/fruit/apple';


const request = https.request(endpoint, (response) => {
    let data = '';
    response.on('data', (chunk) => {
        data = data + chunk;
        
    })
    response.on('end', () => {
        console.log(JSON.parse(data));
    })
})

request.end()