const fs = require('fs');

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
