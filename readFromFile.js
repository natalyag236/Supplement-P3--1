const fs = require('fs');
/**
 * Reads content from a file at the specified file path.
 * 
 * @param {string} filePath - The path to the file.
 * @returns {string} - The content read from the file.
 */

function readFromFile(filePath) {
    try {
        const data = fs.readFileSync(filePath, 'utf8');
        return data;
    } catch (err) {
        console.error('Error reading the file:', err);
        return null;
    }
}

module.exports = readFromFile;
