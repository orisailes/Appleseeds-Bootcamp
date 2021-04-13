const http = require("http");
const fs = require("fs");
const host = 'localhost';
const port = 3000;

const routingData = {
    users: require("./users.json"),
    rawHtml: "<h1>Welcome</h1>",
    html: fs.readFileSync("./index.html"),
    css: fs.readFileSync("./index.css"),
    js: fs.readFileSync("./index.js"),
    notFound: "page not found"

}

const requestListener = (req, res) => {
    switch (req.url) {
        case "/":
            res.writeHead(200, {
                'Content-Type': 'text/html',
            })
            res.write(routingData.html);
            break;
        case "/index.css":
            res.writeHead(200, {
                'Content-Type': 'text/css',
            });
            res.write(routingData.css)
            break;
        case "/index.js":
            res.writeHead(200, {
                'Content-Type': 'text/javascript',
            });
            res.write(routingData.js)
            break;
        case "/raw-html":
            res.writeHead(200, {
                'Content-Type': 'text/html'
            });
            res.write(routingData.rawHtml);
            break;
        case "/users":
            res.writeHead(200, {
                'Content-Type': 'application/json'
            });
            res.write(JSON.stringify(routingData.users));
            break;
        default:
            res.writeHead(400, {
                'Content-Type': 'text/html'
            });
            res.write(routingData.notFound)
            break;
    }
    res.end();
}

const server = http.createServer(requestListener);
server.listen(port, host, () => {
    console.log(`Server is running at http://${host}:${port}`)
})
