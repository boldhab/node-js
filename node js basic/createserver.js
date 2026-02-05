const http=require('http');
const fs=require('fs');

const html=fs.readFileSync('./templete/index.html','utf-8');
const server=http.createServer((request,response)=>{
    console.log("request recived");
    response.end(html);
});
server.listen(8000,'127.0.0.1',()=>{
    console.log("server is listening on port 8000");
});