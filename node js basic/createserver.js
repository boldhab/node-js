const http=require('http');
const server=http.createServer((request,response)=>{
    console.log("request recived");
    response.end("Hello from the server");
});
server.listen(8000,'127.0.0.1',()=>{
    console.log("server is listening on port 8000");
});