const fs = require('fs');

const textIn = fs.readFileSync('./file/input.txt', 'utf-8');
console.log(textIn);
const textOut = `This is what we know about the file:\n${textIn}\nCreated on ${new Date().toISOString()}`;
fs.writeFileSync('./file/output.txt', textOut);
console.log("File written successfully");