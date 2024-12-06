const fs = require('fs');

function NumLinesFile(filePath) {
    try {
        const data = fs.readFileSync(filePath, 'utf8');
        return data.trim().split('\n').length;
    } catch (err) {
        console.error('Error reading file:', err);
        return 0; 
    }
}

module.exports = NumLinesFile;
