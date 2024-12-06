const fs = require('fs');
/**
 * Writes content to a file at the specified file path.
 * If the file already exists, it will be overwritten.
 * 
 * @param {string} filePath - The path to the file.
 * @param {string} content - The content to write to the file.
 */

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

// Export the function for use in other files
module.exports = writeToFile;
