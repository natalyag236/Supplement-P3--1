const fs = require('fs');
/**
 * Counts the number of lines in a file at the specified file path.
 * 
 * @param {string} filePath - The path to the file.
 * @returns {number} - The number of lines in the file. Returns 0 if an error occurs (e.g., file not found).
 */
function NumLinesFile(filePath) {
    try {
        const data = fs.readFileSync(filePath, 'utf8');
        // Remove trailing newlines and count the number of lines
        return data.trim().split('\n').length;
    } catch (err) {
        console.error('Error reading file:', err);
        return 0; // Return 0 if there's an error 
    }
}

module.exports = NumLinesFile;
