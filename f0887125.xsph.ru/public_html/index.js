const http = require("http");
const fs = require("fs");

const port=3370;

http.createServer((request, response) => {
     if (request.url === "/onePage") {
        fs.readFile("public/onePage.html", (error, data) => response.end(data));
      }else if(request.url==="/oK"){
        fs.readFile("public/pageTwo.html", (error, data) => response.end(data));
      }else if(request.url==="/three"){
        fs.readFile("public/three.html", (error, data) => response.end(data));
      }else if(request.url==="/"){
        fs.readFile("public/index.html", (error, data) => response.end(data));
      }else{
        fs.readFile("public/none.html", (error, data) => response.end(data));//it's page 404
      }
}).listen(port, ()=>console.log("Сервер запущен по адресу http://localhost:"+port));
