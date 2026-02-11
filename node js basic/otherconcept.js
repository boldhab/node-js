const fs = require('fs/promises');
const path = require('path');

const inputPath = path.join(__dirname, 'file', 'input.txt');
const outputPath = path.join(__dirname, 'file', 'other-output.txt');

async function runFileConcept() {
    try {
        const data = await fs.readFile(inputPath, 'utf-8');
        console.log('Input file content:');
        console.log(data);

        const summary = `Other concept demo using async/await\nRead at: ${new Date().toISOString()}\nCharacters: ${data.length}`;
        await fs.writeFile(outputPath, summary);

        console.log(`Summary written to ${outputPath}`);
    } catch (error) {
        console.error('Something went wrong:', error.message);
    }
}

runFileConcept();
