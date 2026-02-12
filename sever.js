const http = require('http');
const fs = require('fs');
const path = require('path');

// Reusable function to serve files
function serveFile(filePath, contentType, res) {
    fs.readFile(filePath, (err, content) => {
        if (err) {
            res.writeHead(500, { 'Content-Type': 'text/plain' });
            res.end('Server Error');
        } else {
            res.writeHead(200, { 'Content-Type': contentType });
            res.end(content);
        }
    });
}

const server = http.createServer((req, res) => {

    console.log(`Request for ${req.url} by method ${req.method}`);

    // Home route
    if ((req.url === '/' || req.url === '/home') && req.method === 'GET') {
        const filePath = path.join(__dirname, 'view', 'index.html');
        serveFile(filePath, 'text/html', res);
    }

    // Doctors route
    else if ((req.url === '/doctor' || req.url === '/doctors') && req.method === 'GET') {
        const filePath = path.join(__dirname, 'view', 'doctors.html');
        serveFile(filePath, 'text/html', res);
    }

    // API route
    else if (req.url === '/api/patients' && req.method === 'GET') {
        const patients = [
            { id: 1, name: 'samuel', age: 30 },
            { id: 2, name: 'habtamu', age: 25 },
            { id: 3, name: 'mikias', age: 40 }
        ];

        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify(patients));
    }

    // 404 route
    else {
        const filePath = path.join(__dirname, 'view', '404.html');

        fs.readFile(filePath, (err, content) => {
            if (err) {
                res.writeHead(404, { 'Content-Type': 'text/plain' });
                res.end('404 Not Found');
            } else {
                res.writeHead(404, { 'Content-Type': 'text/html' });
                res.end(content);
            }
        });
    }

});

const PORT = 3000;
server.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
