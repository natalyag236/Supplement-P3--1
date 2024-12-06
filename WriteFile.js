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
