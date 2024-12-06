const fs = require('fs');

function writeToFile(filePath, content) {
    fs.writeFile(filePath, content, 'utf8', (err) => {
        if (err) {
            console.error('Error writing to file:', err);
            return;
        }
        console.log('Data written to file successfully!');
    });
}

module.exports = writeToFile;

let data = "Learning how to write in a file.";

// Specify the file path
let filePath = 'Output.txt';

writeToFile(filePath, data);

module.exports = writeToFile;
